import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, MapPin, Nfc } from 'lucide-react';
import MountainLayers from './MountainLayers';
import Logo from './Logo';
import { scrollToSection } from '../utils/scrollToSection';

const Hero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const targetTimeRef = useRef(0);
  const updateHeroRef = useRef(() => {});
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const onMotionChange = () => setReducedMotion(media.matches);
    media.addEventListener?.('change', onMotionChange);

    const activationEvents = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
    let frame = 0;
    let scheduled = false;
    let heroActive = true;
    const update = () => {
      scheduled = false;
      if (!sectionRef.current) return;
      const distance = sectionRef.current.offsetHeight - window.innerHeight;
      const progress = media.matches ? 1 : Math.min(1, Math.max(0, -sectionRef.current.getBoundingClientRect().top / Math.max(distance, 1)));
      sectionRef.current.style.setProperty('--journey', progress.toFixed(4));
      sectionRef.current.classList.toggle('is-travelling', progress > 0.004);
      const video = videoRef.current;
      if (!media.matches && video && Number.isFinite(video.duration)) {
        const travelProgress = Math.min(1, progress / 0.82);
        targetTimeRef.current = travelProgress * Math.max(0, video.duration - 0.04);
        const difference = targetTimeRef.current - video.currentTime;
        if (Math.abs(difference) > 0.018) {
          video.currentTime += difference * 0.24;
          scheduled = true;
          frame = requestAnimationFrame(update);
        }
      }
    };
    updateHeroRef.current = update;
    const requestUpdate = () => {
      if (!heroActive || scheduled) return;
      scheduled = true;
      frame = requestAnimationFrame(update);
    };
    const loadVideo = () => {
      const video = videoRef.current;
      if (!media.matches && video && !video.src) {
        const supportsWebm = video.canPlayType('video/webm; codecs="vp9"');
        video.src = supportsWebm ? '/motion/mountain-traverse.webm' : '/motion/mountain-traverse.mp4';
        video.load();
      }
      activationEvents.forEach((eventName) => window.removeEventListener(eventName, loadVideo));
    };
    update();
    activationEvents.forEach((eventName) => window.addEventListener(eventName, loadVideo, { passive: true, once: true }));
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    const observer = new IntersectionObserver(([entry]) => {
      heroActive = entry.isIntersecting;
      if (heroActive) requestUpdate();
      else {
        cancelAnimationFrame(frame);
        scheduled = false;
      }
    }, { rootMargin: '100px 0px' });
    observer.observe(sectionRef.current);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      activationEvents.forEach((eventName) => window.removeEventListener(eventName, loadVideo));
      media.removeEventListener?.('change', onMotionChange);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <section ref={sectionRef} className="mountain-journey" aria-label="Introduction Altitude Media">
      <div className="mountain-sticky">
        <MountainLayers
          videoRef={videoRef}
          reducedMotion={reducedMotion}
          onVideoMetadata={() => updateHeroRef.current()}
        />
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
            <button onClick={() => scrollToSection('nfc')}>Découvrir les plaques <Nfc /></button>
            <button className="brand-reveal__secondary" onClick={() => scrollToSection('prix')}>Voir l’accompagnement</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
