import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VisibilityIntro from '../components/VisibilityIntro';
import NFCProducts from '../components/NFCProducts';
import ProductSelector from '../components/ProductSelector';
import ExplodedPlate from '../components/ExplodedPlate';
import HowItWorks from '../components/HowItWorks';
import Levers from '../components/Levers';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import PriceConfigurator from '../components/PriceConfigurator';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
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
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
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
      </main>
      <Footer />
    </div>
  );
};

export default Home;
