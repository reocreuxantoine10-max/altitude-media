import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, MapPin, Nfc } from 'lucide-react';
import MountainLayers from './MountainLayers';
import Logo from './Logo';

const Hero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const targetTimeRef = useRef(0);
  const updateHeroRef = useRef(() => {});
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [videoEnabled, setVideoEnabled] = useState(false);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const events = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
    const enable = () => {
      setVideoEnabled(true);
      events.forEach((eventName) => window.removeEventListener(eventName, enable));
    };
    events.forEach((eventName) => window.addEventListener(eventName, enable, { passive: true, once: true }));
    return () => {
      events.forEach((eventName) => window.removeEventListener(eventName, enable));
    };
  }, [reducedMotion]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const onMotionChange = () => setReducedMotion(media.matches);
    media.addEventListener?.('change', onMotionChange);

    let scrubFrame = 0;
    let updateFrame = 0;
    let updateScheduled = false;
    let scrubbing = false;
    const scrub = () => {
      const video = videoRef.current;
      if (!video || !Number.isFinite(video.duration)) {
        scrubbing = false;
        return;
      }
      const difference = targetTimeRef.current - video.currentTime;
      if (Math.abs(difference) < 0.012) {
        video.currentTime = targetTimeRef.current;
        scrubbing = false;
        return;
      }
      video.currentTime += difference * 0.22;
      scrubFrame = requestAnimationFrame(scrub);
    };
    const requestScrub = () => {
      if (!scrubbing) {
        scrubbing = true;
        scrubFrame = requestAnimationFrame(scrub);
      }
    };
    const update = () => {
      if (!sectionRef.current) return;
      const distance = sectionRef.current.offsetHeight - window.innerHeight;
      const progress = media.matches ? 1 : Math.min(1, Math.max(0, -sectionRef.current.getBoundingClientRect().top / Math.max(distance, 1)));
      sectionRef.current.style.setProperty('--journey', progress.toFixed(4));
      const video = videoRef.current;
      if (!media.matches && video && Number.isFinite(video.duration)) {
        const travelProgress = Math.min(1, progress / 0.82);
        targetTimeRef.current = travelProgress * Math.max(0, video.duration - 0.04);
        requestScrub();
      }
    };
    updateHeroRef.current = update;
    const onScroll = () => {
      if (updateScheduled) return;
      updateScheduled = true;
      updateFrame = requestAnimationFrame(() => {
        updateScheduled = false;
        update();
      });
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(scrubFrame);
      cancelAnimationFrame(updateFrame);
      media.removeEventListener?.('change', onMotionChange);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="mountain-journey" aria-label="Introduction Altitude Media">
      <div className="mountain-sticky">
        <MountainLayers
          videoRef={videoRef}
          reducedMotion={reducedMotion}
          videoEnabled={videoEnabled}
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
            <button onClick={() => document.getElementById('nfc')?.scrollIntoView({ behavior: 'smooth' })}>Découvrir les plaques <Nfc /></button>
            <button className="brand-reveal__secondary" onClick={() => document.getElementById('prix')?.scrollIntoView({ behavior: 'smooth' })}>Voir l’accompagnement</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
