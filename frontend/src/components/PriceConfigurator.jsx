import React, { useMemo, useState } from 'react';
import { Check, TrendingDown, Sparkles } from 'lucide-react';
import { packs, engagements } from '../data/mock';

const LAUNCH = 329;

const PriceConfigurator = () => {
  const [packId, setPackId] = useState('croissance');
  const [months, setMonths] = useState(3);

  const pack = useMemo(() => packs.find((p) => p.id === packId), [packId]);

  const monthly = pack ? pack.price : 0;
  const applyDiscount = months >= 3; // engagement >= 3 mois
  const discountedMonthly = applyDiscount ? monthly / 2 : monthly;
  const totalMonths = discountedMonthly * months;
  const totalWithLaunch = totalMonths + LAUNCH;
  const savings = applyDiscount ? monthly * months - totalMonths : 0;

  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 text-[13px] font-medium text-neutral-700 mb-5">
            Simulateur
          </span>
          <h2 className="text-[46px] md:text-[58px] font-black tracking-[-0.03em] text-neutral-900 leading-[0.95]">
            Estimez votre
            <br />
            <span className="italic font-serif" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 500 }}>investissement</span>
          </h2>
          <p className="mt-5 text-[15px] text-neutral-600 max-w-lg mx-auto">
            Sélectionnez un pack et une durée d'engagement pour voir votre total en temps réel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* LEFT: choices */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <div className="text-[13px] font-bold tracking-[0.14em] text-neutral-500 uppercase mb-3">1. Choisissez votre pack</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {packs.map((p) => {
                  const active = packId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPackId(p.id)}
                      className={`text-left rounded-2xl border-2 p-5 transition-all hover-card ${
                        active
                          ? 'border-indigo-500 bg-indigo-50/50 shadow-lg'
                          : 'border-neutral-200 bg-white hover:border-neutral-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className={`text-[11px] font-bold tracking-[0.14em] uppercase ${p.recommended ? 'text-indigo-600' : 'text-neutral-500'}`}>
                          {p.tier}
                        </span>
                        {active && (
                          <span className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-white" />
                          </span>
                        )}
                      </div>
                      <div className="text-[17px] font-bold text-neutral-900 leading-tight">{p.name}</div>
                      <div className="mt-2 text-[22px] font-black text-neutral-900">
                        {p.price}€ <span className="text-[12px] font-medium text-neutral-500">/mois</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="text-[13px] font-bold tracking-[0.14em] text-neutral-500 uppercase mb-3">2. Durée d'engagement</div>
              <div className="grid grid-cols-3 gap-3">
                {engagements.map((e) => {
                  const active = months === e.months;
                  return (
                    <button
                      key={e.months}
                      onClick={() => setMonths(e.months)}
                      className={`rounded-2xl border-2 p-4 text-center transition-all hover-card ${
                        active
                          ? 'border-indigo-500 bg-indigo-50/50 shadow-lg'
                          : 'border-neutral-200 bg-white hover:border-neutral-300'
                      }`}
                    >
                      <div className="text-[10px] font-bold tracking-[0.14em] text-indigo-600 uppercase">{e.badge}</div>
                      <div className="mt-1 text-[28px] font-black text-neutral-900 leading-none">{e.months}</div>
                      <div className="text-[12px] text-neutral-600 mt-0.5">mois</div>
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 text-[12px] text-neutral-500 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                Remise -50 % appliquée sur tous les mois d'engagement dès 3 mois.
              </p>
            </div>
          </div>

          {/* RIGHT: summary */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 rounded-3xl bg-gradient-to-br from-neutral-950 to-neutral-900 text-white p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-indigo-500/25 blur-3xl" />
              <div className="relative">
                <div className="text-[11px] font-bold tracking-[0.18em] text-indigo-300 uppercase">Votre devis</div>
                <div className="mt-2 text-[20px] font-bold">{pack?.name}</div>
                <div className="text-[13px] text-neutral-400 mb-6">Engagement {months} mois</div>

                <div className="space-y-3 pb-5 border-b border-white/10">
                  <Row label="Tarif mensuel" value={`${monthly}€`} />
                  {applyDiscount && (
                    <Row
                      label={<span className="inline-flex items-center gap-1 text-emerald-400"><TrendingDown className="w-3.5 h-3.5" />Remise -50 %</span>}
                      value={<span className="text-emerald-400">-{monthly / 2}€ / mois</span>}
                    />
                  )}
                  <Row label="Prix mensuel après remise" value={<span className="font-bold">{discountedMonthly}€</span>} strong />
                  <Row label={`Sous-total (${months} mois)`} value={`${totalMonths}€`} />
                  <Row label="Frais de lancement" value={`${LAUNCH}€`} />
                </div>

                <div className="pt-5">
                  <div className="flex items-baseline justify-between">
                    <div className="text-[13px] text-neutral-300">Total sur {months} mois</div>
                    <div className="text-[38px] font-black leading-none tracking-tight">{totalWithLaunch}€</div>
                  </div>
                  {applyDiscount && savings > 0 && (
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[12px] font-semibold">
                      <Sparkles className="w-3.5 h-3.5" /> Économie de {savings}€
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-6 w-full py-3.5 rounded-full bg-white text-neutral-900 font-semibold text-[15px] hover:bg-neutral-100 transition-colors"
                >
                  Nous contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Row = ({ label, value, strong }) => (
  <div className={`flex items-center justify-between text-[13.5px] ${strong ? 'text-white' : 'text-neutral-300'}`}>
    <div>{label}</div>
    <div>{value}</div>
  </div>
);

export default PriceConfigurator;
