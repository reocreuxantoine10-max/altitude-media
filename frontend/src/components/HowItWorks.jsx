import React from 'react';
import { Nfc, QrCode, Star } from 'lucide-react';

const steps = [
  { icon: Nfc, n: '01', title: 'Approchez', text: 'Le client approche son téléphone de la plaque.' },
  { icon: QrCode, n: '02', title: 'Ouvrez', text: 'La NFC ou le QR code ouvre directement Google.' },
  { icon: Star, n: '03', title: 'Partagez', text: 'Il laisse son avis en quelques secondes.' },
];

const HowItWorks = () => (
  <section id="fonctionnement" className="how-section section-shell">
    <div className="section-heading"><span className="eyebrow">Comment ça marche</span><h2 className="display-title">Un geste.<br /><em>Un avis.</em></h2></div>
    <div className="steps-grid">{steps.map(({ icon: Icon, n, title, text }) => <article className="step-card" key={n}><span>{n}</span><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div>
  </section>
);

export default HowItWorks;
