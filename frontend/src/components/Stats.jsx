import React, { useEffect, useRef, useState } from 'react';
import { Lightbulb, Globe, Zap } from 'lucide-react';
import { stats } from '../data/mock';

const iconMap = { 1: Lightbulb, 2: Globe, 3: Zap };

// Extract number and suffix from a value like "12/24h", "100 %", "37"
const parseValue = (val) => {
  const match = String(val).match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: val };
  return { num: parseInt(match[1], 10), suffix: match[2] || '' };
};

const useCountUp = (target, active, duration = 1500) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return n;
};

const AnimatedValue = ({ value, active }) => {
  const { num, suffix } = parseValue(value);
  const n = useCountUp(num, active, 1400);
  return (
    <>
      {n}
      {suffix}
    </>
  );
};

const StatCard = ({ stat, delay, active }) => {
  const Icon = iconMap[stat.id];
  const themeCls =
    stat.theme === 'dark'
      ? 'bg-neutral-900 text-white'
      : stat.theme === 'indigo'
      ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 text-white'
      : 'bg-neutral-100 text-neutral-900';
  const iconBg =
    stat.theme === 'dark'
      ? 'bg-white text-neutral-900'
      : stat.theme === 'indigo'
      ? 'bg-neutral-900 text-white'
      : 'bg-indigo-500 text-white';

  const rot = stat.id === 1 ? '-rotate-2' : stat.id === 2 ? 'rotate-0' : 'rotate-2';
  const offset = stat.id === 2 ? 'md:mt-16' : '';

  return (
    <div
      className={`hover-card ${themeCls} ${rot} ${offset} rounded-3xl p-6 md:p-7 w-full max-w-[280px] shadow-xl`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start justify-between mb-16">
        <div className="text-[13px] font-medium opacity-80 leading-tight max-w-[130px]">{stat.label}</div>
        <div className={`w-9 h-9 rounded-full ${iconBg} flex items-center justify-center shadow-md`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div className="text-[46px] font-black tracking-tight leading-none mb-3">
        <AnimatedValue value={stat.value} active={active} />
      </div>
      <p className="text-[13px] opacity-85 leading-snug">{stat.desc}</p>
    </div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="produits" ref={ref} className="relative py-28 md:py-36 bg-white">
      <div className={`max-w-6xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 text-[13px] font-medium text-neutral-700 mb-6">
            Nos statistiques
          </span>
          <h2 className="text-[46px] md:text-[64px] font-black tracking-[-0.03em] text-neutral-900 leading-[0.95]">
            Pourquoi nous choisir ?
          </h2>
          <p className="mt-5 text-[17px] text-neutral-600 max-w-xl mx-auto">
            Des solutions pensées pour faire grandir votre marque.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-6 md:gap-10">
          {stats.map((s, i) => (
            <StatCard key={s.id} stat={s} delay={i * 0.15} active={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
