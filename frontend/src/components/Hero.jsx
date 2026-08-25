import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, MapPin, Nfc, Star } from 'lucide-react';
import MountainLayers from './MountainLayers';

const Hero = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame;
    const onScroll = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setProgress(Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); };
  }, []);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section className="hero-premium">
      <div className="hero-aurora" />
      <MountainLayers progress={progress} />
      <div className="hero-copy" style={{ transform: `translate3d(0, ${progress * -28}px, 0)`, opacity: 1 - progress * 0.3 }}>
        <span className="hero-kicker"><MapPin /> Lyon & Ouest Lyonnais <i /> Solutions pour commerces locaux</span>
        <h1>Faites revenir vos clients.<br /><em>Faites-les parler de vous.</em></h1>
        <p>Avis Google, fidélité digitale et communication pour les commerces locaux.</p>
        <div className="hero-actions">
          <button className="primary-cta" onClick={() => scrollTo('solutions')}>Découvrir les solutions <ArrowRight /></button>
          <button className="secondary-cta" onClick={() => scrollTo('nfc')}><Nfc /> Voir les plaques NFC</button>
        </div>
        <div className="hero-proof"><span><Star fill="currentColor" /> Avis Google</span><span><Nfc /> NFC + QR code</span><span>Sans abonnement obligatoire</span></div>
      </div>
      <button className="scroll-cue" onClick={() => scrollTo('solutions')} aria-label="Découvrir les solutions"><span>Découvrir</span><ArrowDown /></button>
    </section>
  );
};
export default Hero;
