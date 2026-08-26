import React from 'react';
import { ArrowRight, Check, Nfc } from 'lucide-react';
import { nfcProducts } from '../data/site';

const counterPlate = nfcProducts.find((product) => product.id === 'counter');
const startingPrice = Math.min(...nfcProducts.map((product) => product.price));

const NFCProducts = () => (
  <section id="nfc" className="nfc-focus section-shell">
    <div className="section-grid">
      <div className="nfc-focus__copy">
        <span className="eyebrow"><Nfc /> Le produit Altitude Media</span>
        <h2 className="display-title">Un geste simple entre vos clients<br /><em>et votre commerce.</em></h2>
        <p className="section-lead">Le client approche son smartphone ou scanne le QR code. Selon le modèle choisi, il accède directement à Google, à vos réseaux sociaux ou à la destination utile.</p>
        <ul className="feature-checks">
          <li><Check /> Achat possible sans abonnement</li>
          <li><Check /> NFC et QR code réunis</li>
          <li><Check /> Trois formats à partir de {startingPrice} €</li>
        </ul>
        <button className="primary-cta" onClick={() => document.getElementById('modeles')?.scrollIntoView({ behavior: 'smooth' })}>Choisir ma plaque <ArrowRight /></button>
      </div>
      <div className="nfc-focus__visual">
        <div className="product-halo" />
        <img src={counterPlate.variants[1].image} width={counterPlate.variants[1].width} height={counterPlate.variants[1].height} loading="lazy" decoding="async" alt="Plaque NFC de comptoir noire pour avis Google" />
        <span className="floating-tag floating-tag--price"><small>{counterPlate.name}</small><strong>{counterPlate.price} €</strong></span>
        <span className="floating-tag floating-tag--nfc"><Nfc /> NFC + QR</span>
      </div>
    </div>
  </section>
);

export default NFCProducts;
