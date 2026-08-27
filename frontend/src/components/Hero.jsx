import React, { useEffect, useRef } from 'react';
import { ArrowDown, MapPin, Nfc } from 'lucide-react';
import MountainLayers from './MountainLayers';
import Logo from './Logo';

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let frame;
    const update = () => {
      if (!sectionRef.current) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const distance = sectionRef.current.offsetHeight - window.innerHeight;
      const progress = reduced ? 1 : Math.min(1, Math.max(0, -sectionRef.current.getBoundingClientRect().top / Math.max(distance, 1)));
      sectionRef.current.style.setProperty('--journey', progress.toFixed(4));
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  return (
    <section ref={sectionRef} className="mountain-journey" aria-label="Introduction Altitude Media">
      <div className="mountain-sticky">
        <MountainLayers />
        <div className="journey-opening">
          <span className="hero-kicker"><MapPin /> Lyon & Ouest Lyonnais</span>
          <h1>Donnez plus de visibilité<br /><em>à votre commerce.</em></h1>
          <p>Plaques NFC, présence Google, réseaux sociaux et accompagnement digital pour les commerces locaux.</p>
          <span className="journey-scroll"><ArrowDown /> Faites défiler pour traverser</span>
        </div>
        <div className="brand-reveal">
          <div className="brand-reveal__logo"><Logo size="lg" /></div>
          <p>Deux solutions, une même ambition : faire grandir votre visibilité.</p>
          <div className="brand-reveal__actions">
            <button onClick={() => document.getElementById('nfc')?.scrollIntoView({ behavior: 'smooth' })}>Découvrir les plaques <Nfc /></button>
            <button className="brand-reveal__secondary" onClick={() => document.getElementById('prix')?.scrollIntoView({ behavior: 'smooth' })}>Voir l’accompagnement</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
