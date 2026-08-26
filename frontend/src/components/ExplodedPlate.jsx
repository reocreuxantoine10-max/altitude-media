import React, { useEffect, useRef } from 'react';
import { Nfc } from 'lucide-react';

const ExplodedPlate = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let frame;
    const update = () => {
      if (!sectionRef.current) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const distance = sectionRef.current.offsetHeight - window.innerHeight;
      const progress = reduced ? 1 : Math.min(1, Math.max(0, -sectionRef.current.getBoundingClientRect().top / Math.max(distance, 1)));
      sectionRef.current.style.setProperty('--tech-progress', progress.toFixed(4));
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  return (
    <section id="technologie" ref={sectionRef} className="exploded-section product-transformation">
      <div className="exploded-sticky">
        <div className="exploded-copy">
          <span className="eyebrow"><Nfc /> La technologie, simplement</span>
          <h2>La plaque s’ouvre.<br /><em>La technologie se révèle.</em></h2>
          <p>Une plaque prête à guider vos clients vers votre page d’avis Google, par NFC ou QR code.</p>
        </div>
        <div className="transformation-stage" aria-label="Transformation de la plaque blanche assemblée vers sa vue décomposée">
          <img className="transformation-image transformation-image--assembled" src="/products/google-counter-white.webp" width="880" height="1100" loading="lazy" decoding="async" alt="Plaque NFC blanche assemblée" />
          <img className="transformation-image transformation-image--exploded" src="/products/google-counter-white-exploded.webp" width="880" height="1100" loading="lazy" decoding="async" alt="Vue décomposée de la plaque NFC blanche avec antenne visible" />
          <span className="tech-note tech-note--one">Technologie NFC intégrée</span>
          <span className="tech-note tech-note--two">NFC + QR code</span>
        </div>
        <div className="exploded-progress"><span>Plaque assemblée</span><i><b /></i><span>Vue décomposée</span></div>
      </div>
    </section>
  );
};

export default ExplodedPlate;
