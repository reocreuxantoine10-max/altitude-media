import React, { useEffect, useRef, useState } from 'react';
import { Nfc } from 'lucide-react';

const ExplodedPlate = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!section || reduced) return undefined;

    const preloadObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        preloadObserver.disconnect();
      }
    }, { rootMargin: '450px 0px' });

    preloadObserver.observe(section);
    return () => preloadObserver.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video || !shouldLoad) return undefined;

    const playbackObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      } else {
        video.pause();
      }
    }, { threshold: 0.32 });

    playbackObserver.observe(section);
    return () => {
      playbackObserver.disconnect();
      video.pause();
    };
  }, [shouldLoad]);

  return (
    <section id="technologie" ref={sectionRef} className="exploded-section product-transformation product-film">
      <div className="exploded-sticky product-film__layout">
        <div className="exploded-copy product-film__copy">
          <span className="eyebrow"><Nfc /> La technologie, simplement</span>
          <h2>La plaque s’ouvre.<br /><em>La technologie se révèle.</em></h2>
          <p>Une plaque prête à guider vos clients vers votre page d’avis Google, par NFC ou QR code.</p>
          <div className="product-film__legend" aria-hidden="true">
            <span>Plaque assemblée</span><i /><span>Technologie intégrée</span>
          </div>
        </div>

        <div className={`product-film__stage ${isPlaying ? 'is-playing' : ''}`} role="img" aria-label="Animation montrant les différentes couches de la plaque NFC Google">
          <div className="product-film__halo" />
          <div className="product-film__frame">
            <img className="product-film__poster" src="/motion/nfc-plate-poster.webp" width="720" height="676" loading="lazy" decoding="async" alt="Plaque NFC Google assemblée" />
            {shouldLoad && (
              <video
                ref={videoRef}
                className="product-film__video"
                width="720"
                height="676"
                muted
                loop
                playsInline
                preload="metadata"
                poster="/motion/nfc-plate-poster.webp"
                aria-hidden="true"
              >
                <source src="/motion/nfc-plate-reveal.webm" type="video/webm" />
                <source src="/motion/nfc-plate-reveal.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <span className="tech-note product-film__note product-film__note--one">Technologie NFC intégrée</span>
          <span className="tech-note product-film__note product-film__note--two">NFC + QR code</span>
        </div>
      </div>
    </section>
  );
};

export default ExplodedPlate;
