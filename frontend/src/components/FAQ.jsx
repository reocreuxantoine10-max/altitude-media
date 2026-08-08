import React, { useEffect, useRef, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { HelpCircle } from 'lucide-react';
import { faqs } from '../data/mock';

const FAQ = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-neutral-50">
      <div className={`max-w-4xl mx-auto px-6 reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[13px] font-medium text-neutral-700 mb-5 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            Questions fréquentes
          </span>
          <h2 className="text-[46px] md:text-[58px] font-black tracking-[-0.03em] text-neutral-900 leading-[0.95]">
            Vos questions
            <br />
            <span className="italic font-serif" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 500 }}>nos réponses</span>
          </h2>
          <p className="mt-5 text-[15.5px] text-neutral-600">
            Tout ce qu'il faut savoir avant de nous confier votre communication.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-neutral-200 bg-white px-6 shadow-sm data-[state=open]:shadow-md data-[state=open]:border-indigo-200 transition-shadow"
            >
              <AccordionTrigger className="text-left text-[15.5px] font-semibold text-neutral-900 hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-neutral-700 leading-relaxed pb-5 pr-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <p className="text-[14px] text-neutral-600">
            Une autre question ?{' '}
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Écrivez-nous directement
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
