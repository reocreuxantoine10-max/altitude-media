import React, { useEffect } from 'react';
import VisibilityIntro from './VisibilityIntro';
import NFCProducts from './NFCProducts';
import ProductSelector from './ProductSelector';
import ExplodedPlate from './ExplodedPlate';
import HowItWorks from './HowItWorks';
import Levers from './Levers';
import Process from './Process';
import Pricing from './Pricing';
import PriceConfigurator from './PriceConfigurator';
import FAQ from './FAQ';
import Contact from './Contact';

const BelowFold = () => {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sections = document.querySelectorAll('main > section:not(.mountain-journey)');
    if (reduced) {
      sections.forEach((section) => section.classList.add('section-in-view'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <VisibilityIntro />
      <NFCProducts />
      <ProductSelector />
      <Pricing />
      <PriceConfigurator />
      <ExplodedPlate />
      <HowItWorks />
      <Levers />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
};

export default BelowFold;
