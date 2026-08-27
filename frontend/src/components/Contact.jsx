import React, { useState } from 'react';
import { Send, User, Store, Mail, Phone, MessageSquare, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { packs, engagements } from '../data/mock';
import { nfcProducts } from '../data/site';

const API = '/api';



const Field = ({ icon: Icon, children, error }) => (
  <div>
    <div className={`relative flex items-center rounded-2xl border ${error ? 'border-red-400' : 'border-neutral-200 focus-within:border-neutral-900'} bg-white transition-colors`}>
      {Icon && (
        <span className="pl-4 pr-2 text-neutral-400">
          <Icon className="w-4 h-4" />
        </span>
      )}
      {children}
    </div>
    {error && <p className="mt-1.5 text-[12px] text-red-500">{error}</p>}
  </div>
);

const inputCls = 'w-full bg-transparent py-3.5 pr-4 pl-1 text-[14.5px] text-neutral-900 placeholder-neutral-400 outline-none';
const inputColored = 'w-full bg-transparent py-3.5 px-4 text-[14.5px] text-neutral-900 placeholder-neutral-400 outline-none';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    commerce: '',
    email: '',
    phone: '',
    pack: '',
    engagement: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverMsg, setServerMsg] = useState('');

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Votre nom est requis';
    if (!form.email.trim()) e.email = 'Votre email est requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email invalide';
    if (!form.message.trim()) e.message = 'Un petit message aide à mieux vous répondre';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildMailto = (data) => {
    const subject = `Nouvelle demande — ${data.name}${data.commerce ? ' (' + data.commerce + ')' : ''}`;
    const bodyLines = [
      `Bonjour Altitude Media,`,
      ``,
      `Je vous contacte via le site altitudemedia.fr :`,
      ``,
      `Nom : ${data.name}`,
      `Commerce : ${data.commerce || '—'}`,
      `Email : ${data.email}`,
      `Téléphone : ${data.phone || '—'}`,
      `Pack qui m'intéresse : ${data.pack || '—'}`,
      `Durée d'engagement : ${data.engagement || '—'}`,
      ``,
      `Message :`,
      data.message,
      ``,
      `Cordialement,`,
      data.name,
    ];
    const body = bodyLines.join('\r\n');
    return `mailto:contact@altitudemedia.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setServerMsg('');

    // 1) Store in database in the background as backup (do not block UX)
    fetch(`${API}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).catch(() => {});

    // 2) Open the visitor's mail client with everything pre-filled.
    //    The visitor hits "Send" and the email arrives at contact@altitudemedia.fr
    //    directly from their own email address — exactly like a direct email.
    try {
      const link = buildMailto(form);
      // Small delay so the loading state is visible
      await new Promise((r) => setTimeout(r, 400));
      window.location.href = link;

      setStatus('success');
      setServerMsg("Votre application email s'est ouverte avec le message pré-rempli. Cliquez sur « Envoyer » pour finaliser votre demande.");
      // Do NOT reset the form immediately — the visitor may need to return
      // to it if their mail client didn't open. We'll reset after 8s.
      setTimeout(() => {
        setForm({ name: '', commerce: '', email: '', phone: '', pack: '', engagement: '', message: '' });
      }, 8000);
    } catch (err) {
      setStatus('error');
      setServerMsg("Impossible d'ouvrir votre application email. Écrivez-nous directement à contact@altitudemedia.fr");
    }
  };

  return (
    <section id="contact" className="contact-premium relative py-24 md:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[13px] font-medium text-neutral-700 mb-5 shadow-sm">
              Contact
            </span>
            <h2 className="text-[46px] md:text-[58px] font-black tracking-[-0.03em] text-neutral-900 leading-[0.95]">
              Faisons grandir
              <br />
              <span className="italic font-serif" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 500 }}>votre visibilité</span>
            </h2>
            <p className="mt-6 text-[15.5px] text-neutral-700 leading-relaxed max-w-md">
              Pour commander une plaque, choisir votre accompagnement ou simplement poser une question, échangeons sur votre projet.
            </p>

            <div className="contact-actions">
              <a href="tel:+33668593384" className="primary-cta"><Phone /> Nous appeler</a>
              <a href="mailto:contact@altitudemedia.fr" className="secondary-cta"><Mail /> Nous écrire</a>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-2xl bg-neutral-100 flex items-center justify-center">
                  <Phone className="w-4.5 h-4.5" />
                </span>
                <div>
                  <div className="text-[12px] text-neutral-500">Téléphone</div>
                  <a href="tel:+33668593384" className="text-[15px] font-semibold text-neutral-900">06 68 59 33 84</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-2xl bg-indigo-100 flex items-center justify-center">
                  <Mail className="w-4.5 h-4.5 text-indigo-600" />
                </span>
                <div>
                  <div className="text-[12px] text-neutral-500">Email direct</div>
                  <a href="mailto:contact@altitudemedia.fr" className="text-[15px] font-semibold text-neutral-900 hover:text-indigo-600 transition-colors">
                    contact@altitudemedia.fr
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <MessageSquare className="w-4.5 h-4.5 text-emerald-600" />
                </span>
                <div>
                  <div className="text-[12px] text-neutral-500">Support</div>
                  <div className="text-[15px] font-semibold text-neutral-900">Réponse sous 24h ouvrées</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <form onSubmit={onSubmit} noValidate className="bg-white rounded-3xl p-7 md:p-9 shadow-xl border border-neutral-100 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field icon={User} error={errors.name}>
                <input aria-label="Votre nom" value={form.name} onChange={update('name')} className={inputCls} placeholder="Votre nom *" />
              </Field>
              <Field icon={Store}>
                <input aria-label="Nom du commerce" value={form.commerce} onChange={update('commerce')} className={inputCls} placeholder="Nom du commerce" />
              </Field>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field icon={Mail} error={errors.email}>
                <input aria-label="Adresse email" type="email" value={form.email} onChange={update('email')} className={inputCls} placeholder="Email *" />
              </Field>
              <Field icon={Phone}>
                <input aria-label="Numéro de téléphone" value={form.phone} onChange={update('phone')} className={inputCls} placeholder="Téléphone" />
              </Field>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field>
                <select aria-label="Pack souhaité" value={form.pack} onChange={update('pack')} className={inputColored}>
                  <option value="">Solution qui vous intéresse</option>
                  {nfcProducts.map((product) => {
                    const label = `${product.name} — ${product.price} €`;
                    return <option key={product.id} value={label}>{label}</option>;
                  })}
                  {packs.map((p) => (
                    <option key={p.id} value={p.name}>{p.name} — {p.price}€</option>
                  ))}
                  <option value="Je ne sais pas encore">Je ne sais pas encore</option>
                </select>
              </Field>
              <Field>
                <select aria-label="Durée d’engagement souhaitée" value={form.engagement} onChange={update('engagement')} className={inputColored}>
                  <option value="">Durée d'engagement</option>
                  {engagements.map((e) => (
                    <option key={e.months} value={`${e.months} mois`}>{e.months} mois</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field error={errors.message}>
              <textarea aria-label="Votre message" value={form.message} onChange={update('message')} rows={4} className={`${inputColored} resize-none`} placeholder="Parlez-nous de votre commerce, de votre projet et de vos objectifs... *" />
            </Field>

            {status === 'success' && (
              <div className="flex items-start gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 text-[13.5px]">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-600" />
                <div>
                  <div className="font-semibold text-emerald-900">Application email ouverte</div>
                  <div className="mt-0.5">{serverMsg}</div>
                  <div className="mt-2 text-[12px] text-emerald-700">
                    Rien ne s'est passé ?{' '}
                    <a
                      href={`mailto:contact@altitudemedia.fr?subject=Nouvelle%20demande%20-%20${encodeURIComponent(form.name || 'Site')}`}
                      className="underline font-semibold"
                    >
                      Cliquez ici pour ouvrir votre messagerie
                    </a>{' '}
                    ou écrivez à <a href="mailto:contact@altitudemedia.fr" className="underline font-semibold">contact@altitudemedia.fr</a>
                  </div>
                </div>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-start gap-3 rounded-2xl bg-red-50 border border-red-200 p-4 text-red-700 text-[13.5px]">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{serverMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-glow w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-semibold text-[15px] disabled:opacity-70"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer ma demande <Send className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-[11.5px] text-neutral-500 text-center">
              En envoyant ce formulaire, vous acceptez d'être contacté par Altitude Media.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
