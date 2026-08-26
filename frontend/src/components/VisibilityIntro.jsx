import React from 'react';
import { ArrowRight, Nfc, TrendingUp } from 'lucide-react';

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const VisibilityIntro = () => (
  <section className="visibility-intro section-shell" aria-labelledby="visibility-title">
    <div className="topo-lines" aria-hidden="true" />
    <div className="visibility-intro__head">
      <span className="eyebrow">La visibilité, simplement</span>
      <h2 id="visibility-title" className="display-title">Deux voies pour faire progresser<br /><em>votre commerce.</em></h2>
      <p>Un outil immédiat au point de vente, puis un accompagnement continu pour construire votre présence digitale.</p>
    </div>
    <div className="pillar-grid">
      <article className="pillar-card pillar-card--primary">
        <span className="pillar-index">01</span><Nfc />
        <small>Plaques NFC</small>
        <h3>Facilitez chaque interaction client.</h3>
        <p>Google, QR code, NFC ou réseaux sociaux : vos clients accèdent à la bonne destination en un geste.</p>
        <button onClick={() => goTo('nfc')}>Voir les plaques <ArrowRight /></button>
      </article>
      <article className="pillar-card pillar-card--support">
        <span className="pillar-index">02</span><TrendingUp />
        <small>Accompagnement</small>
        <h3>Développez votre présence dans la durée.</h3>
        <p>Contenus, réseaux sociaux, Google et stratégie : choisissez le niveau d’accompagnement adapté.</p>
        <button onClick={() => goTo('prix')}>Découvrir les abonnements <ArrowRight /></button>
      </article>
    </div>
  </section>
);

export default VisibilityIntro;
