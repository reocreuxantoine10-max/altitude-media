import React from 'react';
import { ArrowDown, Check, Gift, Star } from 'lucide-react';

const Loyalty = () => (
  <section id="fidelite" className="section-shell loyalty-section">
    <div className="section-grid">
      <div className="loyalty-visual" aria-label="Illustration d’une carte de fidélité digitale">
        <div className="loyalty-phone">
          <div className="phone-notch" />
          <span className="loyalty-brand">ALTITUDE FIDÉLITÉ</span>
          <h3>Bonjour, Camille</h3><p>Votre progression</p>
          <div className="stamp-grid">
            {[0,1,2,3,4,5,6,7,8,9].map((item) => <span key={item} className={item < 7 ? 'active' : ''}>{item < 7 ? <Check /> : item + 1}</span>)}
          </div>
          <div className="reward"><Gift /><div><small>Prochaine récompense</small><strong>Plus que 3 passages</strong></div></div>
        </div>
      </div>
      <div>
        <span className="eyebrow"><Star /> Fidélité digitale</span>
        <h2 className="display-title">Faites revenir<br /><em>vos clients.</em></h2>
        <p className="section-lead">Une carte de fidélité virtuelle pour accumuler des points et obtenir une récompense, sans carte papier.</p>
        <div className="retention-compare">
          <div><strong>AVIS GOOGLE</strong><span>Attirez de nouveaux clients</span></div>
          <ArrowDown />
          <div><strong>FIDÉLITÉ</strong><span>Faites revenir les clients existants</span></div>
        </div>
        <p className="availability-note">Solution proposée séparément — le fonctionnement exact peut évoluer selon votre commerce.</p>
      </div>
    </div>
  </section>
);

export default Loyalty;
