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
      const smooth = progress * progress * (3 - 2 * progress);
      const opening = Math.min(1, Math.max(0, (smooth - 0.12) / 0.5));
      const reveal = Math.min(1, Math.max(0, (smooth - 0.28) / 0.42));
      const settle = Math.min(1, Math.max(0, (smooth - 0.7) / 0.3));
      const framesOpacity = smooth < 0.2 ? 0 : smooth < 0.74 ? Math.min(1, (smooth - 0.2) / 0.16) : Math.max(0, 1 - (smooth - 0.74) / 0.2);
      sectionRef.current.style.setProperty('--tech-progress', smooth.toFixed(4));
      sectionRef.current.style.setProperty('--plate-opening', opening.toFixed(4));
      sectionRef.current.style.setProperty('--internal-reveal', reveal.toFixed(4));
      sectionRef.current.style.setProperty('--plate-settle', settle.toFixed(4));
      sectionRef.current.style.setProperty('--frames-opacity', framesOpacity.toFixed(4));
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
          <img className="transformation-image transformation-image--assembled" src="/products/google-counter-white-cutout.webp" width="1145" height="1374" loading="lazy" decoding="async" alt="Plaque NFC blanche assemblée" />
          <div className="exploded-frames" aria-hidden="true">
            <img className="exploded-frame exploded-frame--support" src="/products/google-counter-white-exploded-cutout.webp" width="1312" height="1199" alt="" />
            <img className="exploded-frame exploded-frame--antenna" src="/products/google-counter-white-exploded-cutout.webp" width="1312" height="1199" alt="" />
            <img className="exploded-frame exploded-frame--substrate" src="/products/google-counter-white-exploded-cutout.webp" width="1312" height="1199" alt="" />
            <img className="exploded-frame exploded-frame--face" src="/products/google-counter-white-exploded-cutout.webp" width="1312" height="1199" alt="" />
          </div>
          <img className="transformation-image transformation-image--exploded" src="/products/google-counter-white-exploded-cutout.webp" width="1312" height="1199" loading="lazy" decoding="async" alt="Vue décomposée de la plaque NFC blanche avec antenne visible" />
          <span className="tech-note tech-note--one">Technologie NFC intégrée</span>
          <span className="tech-note tech-note--two">NFC + QR code</span>
        </div>
        <div className="exploded-progress"><span>Plaque assemblée</span><i><b /></i><span>Vue décomposée</span></div>
      </div>
    </section>
  );
};

export default ExplodedPlate;
