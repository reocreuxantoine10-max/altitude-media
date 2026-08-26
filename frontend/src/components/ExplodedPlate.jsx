import React, { useEffect, useRef } from 'react';
import { Nfc, ScanLine } from 'lucide-react';

const ExplodedPlate = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    let frame;
    const update = () => {
      if (!sectionRef.current) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const distance = sectionRef.current.offsetHeight - window.innerHeight;
      const progress = reduced ? 0.62 : Math.min(1, Math.max(0, -sectionRef.current.getBoundingClientRect().top / Math.max(distance, 1)));
      const explode = Math.sin(progress * Math.PI);
      sectionRef.current.style.setProperty('--explode', explode.toFixed(4));
      sectionRef.current.style.setProperty('--tech-progress', progress.toFixed(4));
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update(); window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  return (
    <section id="technologie" ref={sectionRef} className="exploded-section">
      <div className="exploded-sticky">
        <div className="exploded-copy"><span className="eyebrow"><Nfc /> La technologie, simplement</span><h2>Un geste dehors.<br /><em>La NFC à l’intérieur.</em></h2><p>Une face imprimée, un support résistant et un tag NFC discret. Rien de superflu.</p></div>
        <div className="exploded-stage" aria-label="Vue éclatée d’une plaque NFC">
          <div className="plate-layer plate-layer--back"><span>Support</span></div>
          <div className="plate-layer plate-layer--antenna"><div className="antenna-rings"><i /><i /><i /></div><Nfc /><span>Tag & antenne NFC</span></div>
          <div className="plate-layer plate-layer--face"><img src="/products/plaque-murale/blue/google-blue-reference.png" alt="Face imprimée de référence d’une plaque Google" /><span>Face imprimée</span></div>
          <div className="tech-scan"><ScanLine /></div>
        </div>
        <div className="exploded-progress"><span>Assemblé</span><i><b /></i><span>Technologie révélée</span></div>
      </div>
    </section>
  );
};

export default ExplodedPlate;
