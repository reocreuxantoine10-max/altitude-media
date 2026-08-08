import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { images } from '../data/mock';

const Hero = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        const y = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${y * 0.3}px) scale(${1 + y * 0.0003})`;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-neutral-100">
      <div
        ref={parallaxRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'grayscale(0.4) contrast(1.05)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/25 to-white/95" />
      <div className="grain-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 md:pt-56 pb-24 text-center">
        <div className="animate-float-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-white text-[13px] font-medium text-neutral-700 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Agence de communication pour restaurants
          </span>
        </div>

        <h1
          className="animate-float-up mt-8 text-[64px] md:text-[104px] leading-[0.95] font-black tracking-[-0.03em] text-gradient"
          style={{ animationDelay: '0.25s', opacity: 0 }}
        >
          Touchez
          <br />
          <span className="italic font-serif" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 500 }}>le sommet</span>
        </h1>

        <p
          className="animate-float-up mt-8 text-[17px] md:text-[19px] text-neutral-700 max-w-xl mx-auto leading-relaxed"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          Nous faisons grandir les restaurants grâce à une communication qui attire plus de clients.
        </p>

        <div className="animate-float-up mt-10 flex items-center justify-center gap-4" style={{ animationDelay: '0.55s', opacity: 0 }}>
          <button
            onClick={() => scrollTo('prix')}
            className="btn-glow group inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-semibold text-[15px]"
          >
            Commencer dès maintenant
            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-indigo-600" />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom mountain accent - official glass logo */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-[5] pointer-events-none w-[260px] md:w-[320px]">
        <img
          src="https://customer-assets-eiarnc6j.emergentagent.net/job_restaurant-comms-pro/artifacts/v94dhw3t_LOGO%20GLASS.webp"
          alt=""
          className="w-full h-auto drop-shadow-2xl"
          style={{ animation: 'slowPulse 6s ease-in-out infinite' }}
        />
      </div>
    </section>
  );
};

export default Hero;
