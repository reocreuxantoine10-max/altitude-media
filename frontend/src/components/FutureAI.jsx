import React from 'react';
import { Bot, Clock3, Sparkles } from 'lucide-react';

const FutureAI = () => (
  <section id="altitude-premium" className="section-shell future-section">
    <div className="future-card">
      <div><span className="eyebrow eyebrow--dark"><Sparkles /> Altitude Premium</span><h2>Le prochain sommet.</h2><p>Agents IA, réceptionniste virtuel et automatisations : les prochaines solutions Altitude pour simplifier encore davantage la gestion des demandes.</p></div>
      <div className="future-orbit"><Bot /><span><Clock3 /> Bientôt disponible</span></div>
    </div>
  </section>
);

export default FutureAI;
