from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Configure logging early so it's available inside route handlers
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# ============ CONTACT FORM ============
class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    restaurant: Optional[str] = Field(None, max_length=180)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=40)
    pack: Optional[str] = Field(None, max_length=60)
    engagement: Optional[str] = Field(None, max_length=40)
    message: str = Field(..., min_length=1, max_length=4000)


class ContactRecord(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    restaurant: Optional[str] = None
    email: str
    phone: Optional[str] = None
    pack: Optional[str] = None
    engagement: Optional[str] = None
    message: str
    email_sent: bool = False
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


DEST_EMAIL = os.environ.get("CONTACT_EMAIL", "contact@altitudemedia.fr")


async def forward_via_formsubmit(payload: dict) -> bool:
    """Forward the contact request to contact@altitudemedia.fr via FormSubmit.co.

    FormSubmit is a free service that sends form submissions to any email address.
    The first submission to a new email requires a one-time activation click from that inbox.
    """
    try:
        subject = f"Nouvelle demande Altitude Media \u2014 {payload.get('name', 'Client')}"
        body_lines = [
            f"Nom: {payload.get('name', '')}",
            f"Restaurant: {payload.get('restaurant') or '-'}",
            f"Email: {payload.get('email', '')}",
            f"T\u00e9l\u00e9phone: {payload.get('phone') or '-'}",
            f"Pack int\u00e9ress\u00e9: {payload.get('pack') or '-'}",
            f"Engagement: {payload.get('engagement') or '-'}",
            "",
            "Message:",
            payload.get('message', ''),
        ]
        data = {
            "name": payload.get("name", ""),
            "email": payload.get("email", ""),
            "_subject": subject,
            "_replyto": payload.get("email", ""),
            "_template": "table",
            "message": "\n".join(body_lines),
            "Restaurant": payload.get("restaurant") or "-",
            "Telephone": payload.get("phone") or "-",
            "Pack": payload.get("pack") or "-",
            "Engagement": payload.get("engagement") or "-",
        }
        url = f"https://formsubmit.co/ajax/{DEST_EMAIL}"
        async with httpx.AsyncClient(timeout=15) as hc:
            resp = await hc.post(url, json=data, headers={"Accept": "application/json"})
            if resp.status_code == 200:
                j = resp.json()
                return str(j.get("success", "")).lower() == "true"
        return False
    except Exception as e:
        logger.error(f"FormSubmit forwarding failed: {e}")
        return False


@api_router.post("/contact")
async def submit_contact(input: ContactRequest):
    record = ContactRecord(**input.model_dump())
    doc = record.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()

    # Fire the email forward (non-blocking behaviour: we still return success even if email fails)
    sent = await forward_via_formsubmit(input.model_dump())
    doc["email_sent"] = sent
    record.email_sent = sent

    await db.contact_requests.insert_one(doc)
    return {"success": True, "email_sent": sent, "id": record.id}


# ADMIN endpoints — simple key-based protection via header X-Admin-Key
ADMIN_KEY = os.environ.get("ADMIN_KEY", "altitude-2026-admin")


def _check_admin(key: Optional[str]):
    if not key or key != ADMIN_KEY:
        raise HTTPException(status_code=401, detail="Unauthorized")


from fastapi import Header


@api_router.get("/admin/contacts", response_model=List[ContactRecord])
async def admin_list_contacts(x_admin_key: Optional[str] = Header(None, alias="X-Admin-Key")):
    _check_admin(x_admin_key)
    items = await db.contact_requests.find({}, {"_id": 0}).sort("timestamp", -1).to_list(1000)
    for it in items:
        if isinstance(it.get("timestamp"), str):
            it["timestamp"] = datetime.fromisoformat(it["timestamp"])
    return items


@api_router.get("/admin/stats")
async def admin_stats(x_admin_key: Optional[str] = Header(None, alias="X-Admin-Key")):
    _check_admin(x_admin_key)
    total = await db.contact_requests.count_documents({})
    email_sent = await db.contact_requests.count_documents({"email_sent": True})
    # Group by pack
    pipeline = [
        {"$group": {"_id": "$pack", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
    ]
    packs_agg = await db.contact_requests.aggregate(pipeline).to_list(50)
    packs_stats = [{"pack": p["_id"] or "Non spécifié", "count": p["count"]} for p in packs_agg]
    return {"total": total, "email_sent": email_sent, "by_pack": packs_stats}


@api_router.delete("/admin/contacts/{contact_id}")
async def admin_delete_contact(contact_id: str, x_admin_key: Optional[str] = Header(None, alias="X-Admin-Key")):
    _check_admin(x_admin_key)
    res = await db.contact_requests.delete_one({"id": contact_id})
    if res.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Not found")
    return {"success": True}


@api_router.get("/contact", response_model=List[ContactRecord])
async def list_contacts():
    items = await db.contact_requests.find({}, {"_id": 0}).sort("timestamp", -1).to_list(500)
    for it in items:
        if isinstance(it.get("timestamp"), str):
            it["timestamp"] = datetime.fromisoformat(it["timestamp"])
    return items

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging (already configured at top of file)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()