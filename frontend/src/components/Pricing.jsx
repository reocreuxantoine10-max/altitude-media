import React, { useEffect, useRef, useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { packs, launchIncludes, options, engagements } from '../data/mock';

const getIcon = (name) => LucideIcons[name] || LucideIcons.Check;

const PackCard = ({ pack, popular }) => {
  const isRec = pack.recommended;
  const isPremium = pack.tier === 'premium';

  const base = isRec
    ? 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white'
    : isPremium
    ? 'bg-neutral-950 text-white'
    : 'bg-neutral-50 text-neutral-900 border border-neutral-200';
  const priceCol = isRec || isPremium ? 'text-white' : 'text-neutral-900';
  const subCol = isRec ? 'text-indigo-100' : isPremium ? 'text-neutral-400' : 'text-neutral-600';

  return (
    <div className={`hover-card relative ${base} rounded-3xl p-7 md:p-8 shadow-xl flex flex-col`}>
      {isRec && (
        <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-white text-indigo-700 text-[11px] font-bold tracking-wide shadow-md">
          RECOMMANDÉ
        </div>
      )}
      {isPremium && (
        <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-amber-400 text-neutral-900 text-[11px] font-bold tracking-wide shadow-md">
          PREMIUM
        </div>
      )}

      <div className="mb-5">
        <h3 className={`text-[24px] md:text-[26px] font-bold tracking-tight`}>{pack.name}</h3>
        <p className={`mt-1.5 text-[14px] ${subCol}`}>{pack.tagline}</p>
      </div>

      <div className="mb-6 flex items-baseline gap-1">
        <span className={`text-[52px] md:text-[58px] font-black leading-none ${priceCol}`}>{pack.price}€</span>
        <span className={`text-[14px] ${subCol}`}>/mois</span>
      </div>

      <ul className="space-y-3 mt-2">
        {pack.features.map((f, i) => {
          const Icon = getIcon(f.icon);
          return (
            <li key={i} className="flex items-start gap-3">
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${
                  isRec ? 'bg-white/15' : isPremium ? 'bg-white/10' : 'bg-indigo-100'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isRec || isPremium ? 'text-white' : 'text-indigo-600'}`} />
              </span>
              <span className={`text-[13.5px] leading-relaxed pt-1 ${isRec || isPremium ? 'text-white/95' : 'text-neutral-800'}`}>
                {f.text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Pricing = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="prix" ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className={`max-w-7xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 text-[13px] font-medium text-neutral-700 mb-5">
            Nos abonnements
          </span>
          <h2 className="text-[46px] md:text-[64px] font-black tracking-[-0.03em] text-neutral-900 leading-[0.95]">
            Des offres adaptées
            <br />
            <span className="italic font-serif" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 500 }}>à vos besoins
            </span>
          </h2>
          <p className="mt-5 text-[15px] text-neutral-600">
            Frais de lancement obligatoires : <span className="font-bold text-neutral-900">329 €</span> — détaillés ci-dessous.
          </p>
        </div>

        {/* Launch fees card */}
        <div className="mb-8 max-w-4xl mx-auto rounded-3xl bg-neutral-950 text-white p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[12px] font-medium mb-3">
                <LucideIcons.Rocket className="w-3.5 h-3.5" /> Obligatoire
              </div>
              <h3 className="text-[32px] md:text-[36px] font-black leading-none tracking-tight">Frais de lancement</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-[56px] font-black">329€</span>
                <span className="text-neutral-400 text-[14px]">unique</span>
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-md">
              {launchIncludes.map((it, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-neutral-300">
                  <LucideIcons.CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PROMO BANNER - VERY VISIBLE, BEFORE THE PACKS */}
        <div className="mb-14 relative">
          <div className="relative rounded-[32px] bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white p-1 shadow-[0_25px_60px_-15px_rgba(16,185,129,0.55)] animate-scale-in">
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-yellow-300/40 blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-teal-300/30 blur-3xl" />

            {/* Diagonal shine */}
            <div
              className="absolute inset-0 rounded-[32px] pointer-events-none opacity-30"
              style={{
                background: 'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)',
                backgroundSize: '200% 200%',
                animation: 'shimmer 4s ease-in-out infinite',
              }}
            />

            <div className="relative rounded-[28px] bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 px-8 py-10 md:px-12 md:py-12 overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
                {/* Left: Giant -50% */}
                <div className="flex items-center gap-5 flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/30 blur-2xl rounded-full" />
                    <div className="relative flex items-baseline">
                      <span className="text-[110px] md:text-[140px] leading-none font-black tracking-[-0.06em]">
                        −50
                      </span>
                      <span className="text-[48px] md:text-[60px] font-black leading-none -ml-1">%</span>
                    </div>
                  </div>
                </div>

                {/* Middle: Content */}
                <div className="flex-1">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-emerald-700 text-[11px] font-black tracking-[0.14em] uppercase mb-3">
                    <LucideIcons.Sparkles className="w-3.5 h-3.5" />
                    Offre en cours
                  </span>
                  <h3 className="text-[26px] md:text-[34px] font-black leading-[1.05] tracking-tight">
                    De remise sur votre abonnement
                  </h3>
                  <p className="mt-2 text-[14.5px] md:text-[15.5px] text-emerald-50 leading-relaxed max-w-xl">
                    Applicable dès un engagement de <strong className="text-white">3 mois</strong> — pendant toute la durée de l'engagement, également disponible sur 6 et 12 mois.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {engagements.map((e) => (
                      <span
                        key={e.months}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur text-[13px] font-bold border border-white/25"
                      >
                        <LucideIcons.CheckCircle2 className="w-3.5 h-3.5" />
                        {e.months} mois
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Little arrow pointing down */}
          <div className="flex items-center justify-center gap-2 mt-5 text-[13px] font-semibold text-emerald-700 animate-pulse">
            <LucideIcons.ArrowDown className="w-4 h-4" />
            Découvrez nos abonnements ci-dessous
            <LucideIcons.ArrowDown className="w-4 h-4" />
          </div>
        </div>

        {/* Essentiel packs row */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <h3 className="text-[13px] font-bold tracking-[0.14em] text-neutral-600 uppercase">Pack Essentiel</h3>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PackCard pack={packs[0]} />
            <PackCard pack={packs[1]} />
          </div>
        </div>

        {/* Croissance and Premium row */}
        <div className="mt-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <h3 className="text-[13px] font-bold tracking-[0.14em] text-neutral-600 uppercase">Nos packs avancés</h3>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PackCard pack={packs[2]} />
            <PackCard pack={packs[3]} />
          </div>
        </div>


        {/* Options */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-[32px] md:text-[40px] font-black tracking-tight text-neutral-900">Options à la carte</h3>
            <p className="mt-3 text-[15px] text-neutral-600">Ajoutez ce dont vous avez besoin, quand vous en avez besoin.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {options.map((opt, i) => {
              const Icon = getIcon(opt.icon);
              return (
                <div key={i} className="hover-card group bg-white border border-neutral-200 rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-500 transition-colors">
                    <Icon className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-[17px] font-bold text-neutral-900">{opt.title}</h4>
                  <p className="mt-1.5 text-[13.5px] text-neutral-600 leading-relaxed">{opt.desc}</p>
                  <div className="mt-4 text-[15px] font-bold text-indigo-600">{opt.price}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global CTA */}
        <div className="mt-20 text-center">
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-glow inline-flex items-center gap-3 pl-7 pr-2 py-2.5 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-semibold text-[16px]"
          >
            Commencer dès maintenant
            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <LucideIcons.ArrowRight className="w-4 h-4 text-indigo-600" />
            </span>
          </button>
          <p className="mt-4 text-[13px] text-neutral-500">Un conseiller revient vers vous sous 24h avec une proposition personnalisée.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
