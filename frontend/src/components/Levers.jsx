import React, { useEffect, useRef, useState } from 'react';
import { QrCode, Camera, MapPin, Instagram, Mountain, Aperture, Play } from 'lucide-react';
import { images, levers } from '../data/mock';

const NfcVisual = () => (
  <div className="relative w-full flex items-center justify-center py-6">
    <div className="relative w-[180px] h-[180px] rounded-3xl bg-gradient-to-br from-white to-neutral-200 shadow-2xl p-4 flex flex-col items-center justify-center border border-neutral-200">
      <div className="w-14 h-14 rounded-xl bg-white shadow-inner flex items-center justify-center mb-2">
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
      </div>
      <div className="flex gap-0.5 mb-1.5">
        {[0,1,2,3,4].map((i) => (
          <svg key={i} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
        ))}
      </div>
      <div className="text-[9px] font-bold tracking-widest text-neutral-500 uppercase">Laissez</div>
      <div className="text-[9px] font-bold tracking-widest text-neutral-500 uppercase">votre avis</div>
      <div className="flex items-end gap-2 mt-2">
        <div className="w-8 h-8 bg-neutral-900 rounded-md p-1">
          <div className="w-full h-full bg-white grid grid-cols-3 grid-rows-3 gap-[1px] p-[1px]">
            {[1,0,1,0,1,0,1,1,1].map((v, i) => (
              <div key={i} className={v ? 'bg-neutral-900' : ''} />
            ))}
          </div>
        </div>
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#3b82f6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm2.07-7.75l-.9.92C11.45 10.9 11 11.5 11 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H6c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
      </div>
    </div>
  </div>
);

const PeakVisual = () => (
  <div className="relative w-full h-[220px] flex items-center justify-center">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-40 h-40 rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />
    </div>
    <img
      src="https://customer-assets-eiarnc6j.emergentagent.net/job_restaurant-comms-pro/artifacts/v94dhw3t_LOGO%20GLASS.webp"
      alt="Altitude glass mark"
      className="relative z-10 w-[180px] h-auto drop-shadow-2xl"
      style={{ animation: 'slowPulse 6s ease-in-out infinite' }}
    />
  </div>
);

const PhoneVisual = () => (
  <div className="relative w-full h-full min-h-[280px] flex items-end justify-center overflow-hidden">
    <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #dbeafe 0%, #ede9fe 60%, #fce7f3 100%)' }} />
    <div className="absolute bottom-0 left-0 right-0 h-24" style={{ backgroundImage: 'radial-gradient(circle at 20% 100%, #fda4af 0 8px, transparent 9px), radial-gradient(circle at 60% 100%, #fbbf24 0 6px, transparent 7px), radial-gradient(circle at 85% 100%, #f472b6 0 7px, transparent 8px)' }} />
    <div className="relative z-10 flex gap-3 items-end pb-4">
      <div className="w-[130px] h-[220px] rounded-[24px] bg-neutral-900 p-2 shadow-2xl rotate-[-4deg]">
        <div className="w-full h-full bg-neutral-800 rounded-[18px] p-2 text-white">
          <div className="text-[7px] font-bold mb-1">Statistiques</div>
          <div className="text-[6px] opacity-60 mb-1.5">Activité du profil</div>
          <div className="space-y-1">
            <div className="h-1 bg-neutral-700 rounded-full overflow-hidden"><div className="h-full bg-indigo-400 w-[70%]" /></div>
            <div className="h-1 bg-neutral-700 rounded-full overflow-hidden"><div className="h-full bg-pink-400 w-[45%]" /></div>
            <div className="h-1 bg-neutral-700 rounded-full overflow-hidden"><div className="h-full bg-emerald-400 w-[85%]" /></div>
          </div>
          <div className="mt-2 text-[6px] opacity-60">Audience</div>
          <div className="mt-1 grid grid-cols-2 gap-1">
            {[1,2,3,4].map(i => <div key={i} className="h-4 bg-neutral-700/60 rounded" />)}
          </div>
        </div>
      </div>
      <div className="w-[120px] h-[120px] rounded-2xl bg-white shadow-xl p-3 rotate-[3deg] mb-3">
        <div className="relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="38" fill="none" stroke="#e5e7eb" strokeWidth="10" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="#6366f1" strokeWidth="10" strokeDasharray="238" strokeDashoffset="19" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-neutral-900 text-lg font-black">92%</div>
        </div>
      </div>
    </div>
  </div>
);

const CreativeVisual = () => (
  <div className="creative-visual" aria-hidden="true">
    <div className="creative-frame creative-frame--one"><Camera /></div>
    <div className="creative-frame creative-frame--two"><Play /></div>
    <div className="creative-orbit"><Aperture /></div>
  </div>
);

const MapVisual = () => (
  <div className="relative w-full flex items-center justify-center py-4">
    <svg viewBox="0 0 200 180" className="w-40 h-40">
      <defs>
        <linearGradient id="mapG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
      <path d="M100 30 C120 30 135 45 135 65 C135 90 100 140 100 140 C100 140 65 90 65 65 C65 45 80 30 100 30 Z" fill="url(#mapG)" />
      <circle cx="100" cy="63" r="12" fill="white" />
      <path d="M60 130 L20 165 L80 170 Z" fill="#4285F4" opacity="0.8" />
      <path d="M140 130 L180 165 L120 170 Z" fill="#34A853" opacity="0.8" />
      <path d="M100 140 L60 170 L140 170 Z" fill="#FBBC05" opacity="0.8" />
    </svg>
  </div>
);

const LeverCard = ({ item }) => {
  const isDark = item.theme === 'dark';
  const base = isDark ? 'bg-neutral-950 text-white' : 'bg-neutral-100 text-neutral-900';
  const gridCls =
    item.span === 'tall'
      ? 'md:row-span-2'
      : item.span === 'wide'
      ? 'md:col-span-2'
      : '';

  const visualMap = { nfc: NfcVisual, creative: CreativeVisual, peak: PeakVisual, phone: PhoneVisual, map: MapVisual };
  const Visual = visualMap[item.visual];

  return (
    <div className={`hover-card ${base} ${gridCls} rounded-3xl overflow-hidden shadow-lg flex flex-col`}>
      <div className="p-6 md:p-8 text-center">
        <h3 className="text-[22px] md:text-[26px] font-bold tracking-tight leading-tight">{item.title}</h3>
        <p className={`mt-2 text-[13px] md:text-[14px] ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{item.subtitle}</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        {Visual && <Visual />}
      </div>
    </div>
  );
};

const Levers = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="infos" ref={ref} className="relative py-24 md:py-32 bg-white">
      <div className={`max-w-6xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        <div className="mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 text-[13px] font-medium text-neutral-700 mb-5">
            Nos services
          </span>
          <h2 className="text-[46px] md:text-[64px] font-black tracking-[-0.03em] text-neutral-900 leading-[0.95] max-w-2xl">
            Les leviers de
            <br />
            votre ascension
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 auto-rows-[280px]">
          <LeverCard item={levers[0]} />
          <LeverCard item={levers[1]} />
          <LeverCard item={levers[2]} />
          <LeverCard item={levers[3]} />
          <LeverCard item={levers[4]} />
        </div>
      </div>
    </section>
  );
};

export default Levers;
