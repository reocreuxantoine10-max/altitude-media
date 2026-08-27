import React, { useEffect, useRef, useState } from 'react';
import { Camera, Circle, Clock, Search, TrendingUp, Wrench } from 'lucide-react';
import { process } from '../data/mock';

const PROCESS_ICONS = { Camera, Search, TrendingUp, Wrench };

const Process = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-neutral-50 overflow-hidden">
      {/* Decorative background peak */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-[0.04] pointer-events-none">
        <svg width="800" height="500" viewBox="0 0 800 500">
          <path d="M400 20 L780 480 L20 480 Z" fill="#0a0a0a" />
        </svg>
      </div>

      <div className={`relative max-w-6xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[13px] font-medium text-neutral-700 mb-5 shadow-sm">
            Notre méthode
          </span>
          <h2 className="text-[46px] md:text-[58px] font-black tracking-[-0.03em] text-neutral-900 leading-[0.95]">
            Comment on vous fait
            <br />
            <span className="italic font-serif" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 500 }}>gravir le sommet</span>
          </h2>
          <p className="mt-5 text-[16px] text-neutral-600 max-w-xl mx-auto">
            Un accompagnement clair et structuré, du premier audit à la croissance continue.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 rounded-full" style={{ marginLeft: '10%', marginRight: '10%' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {process.map((p, i) => {
              const Icon = PROCESS_ICONS[p.icon] || Circle;
              return (
                <div
                  key={p.step}
                  className="relative group"
                  style={{ animation: visible ? `floatUp 0.7s ${i * 0.12}s both cubic-bezier(0.16,1,0.3,1)` : 'none' }}
                >
                  {/* Step number circle - sits on the line */}
                  <div className="relative z-10 mx-auto mb-6 w-16 h-16 rounded-full bg-white shadow-xl border-4 border-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-[15px] font-black text-indigo-600">{p.step}</span>
                  </div>

                  {/* Card */}
                  <div className="hover-card bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-indigo-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h3 className="text-[19px] font-bold text-neutral-900 tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-[13.5px] text-neutral-600 leading-relaxed">{p.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-[11px] font-semibold text-neutral-700">
                      <Clock className="w-3 h-3" />
                      {p.duration}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
