import React from 'react';
import { ArrowRight, Check, Nfc, QrCode, Star } from 'lucide-react';
import { nfcProducts } from '../data/site';
import NFCPlate from './NFCPlate';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const NFCProducts = () => (
  <>
    <section id="nfc" className="section-shell nfc-section">
      <div className="section-grid">
        <div>
          <span className="eyebrow"><Nfc /> Produit principal</span>
          <h2 className="display-title">Plus d’avis Google.<br /><em>En un geste.</em></h2>
          <p className="section-lead">Transformez vos clients satisfaits en avis Google. La plaque ouvre directement la page d’avis par NFC ou QR code.</p>
          <ul className="feature-checks">
            <li><Check /> Achat possible sans abonnement</li>
            <li><Check /> NFC et QR code sur chaque plaque</li>
            <li><Check /> Une expérience simple pour vos clients</li>
          </ul>
          <button className="primary-cta" onClick={() => scrollTo('modeles')}>Voir les modèles <ArrowRight /></button>
        </div>
        <NFCPlate />
      </div>
    </section>

    <section id="fonctionnement" className="section-shell how-section">
      <div className="section-heading">
        <span className="eyebrow">Comment ça marche</span>
        <h2 className="display-title">Trois secondes.<br /><em>Trois étapes.</em></h2>
      </div>
      <div className="steps-grid">
        {[
          { icon: Nfc, n: '01', title: 'Le client approche son téléphone', text: 'Un geste naturel, directement sur la plaque.' },
          { icon: QrCode, n: '02', title: 'NFC ou QR code ouvre Google', text: 'Le client arrive sur la page permettant de laisser un avis.' },
          { icon: Star, n: '03', title: 'Il partage son expérience', text: 'L’avis est laissé en quelques secondes.' },
        ].map(({ icon: Icon, n, title, text }) => (
          <article className="step-card" key={n}><span>{n}</span><Icon /><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>

    <section id="modeles" className="section-shell models-section">
      <div className="section-heading section-heading--row">
        <div><span className="eyebrow">Les formats</span><h2 className="display-title">Une plaque pour<br /><em>chaque point de contact.</em></h2></div>
        <p>Les tarifs sont centralisés pour faciliter leur mise à jour. Les visuels pourront être remplacés par les photos réelles sans modifier les composants.</p>
      </div>
      <div className="models-grid">
        {nfcProducts.map((product, index) => (
          <article className="model-card" key={product.id}>
            <div className={`mini-plate mini-plate--${index + 1}`}><Nfc /><span>AVIS<br />GOOGLE</span><QrCode /></div>
            <span className="model-index">0{index + 1}</span>
            <h3>{product.name}</h3><p>{product.format}</p>
            <strong>{product.price} €</strong>
          </article>
        ))}
      </div>
      <div className="centered-cta"><button className="primary-cta" onClick={() => scrollTo('contact')}>Commander une plaque <ArrowRight /></button></div>
    </section>
  </>
);

export default NFCProducts;
