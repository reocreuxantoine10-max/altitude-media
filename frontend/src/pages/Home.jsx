import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VisibilityIntro from '../components/VisibilityIntro';
import NFCProducts from '../components/NFCProducts';
import ProductSelector from '../components/ProductSelector';
import ExplodedPlate from '../components/ExplodedPlate';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import Levers from '../components/Levers';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import PriceConfigurator from '../components/PriceConfigurator';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <VisibilityIntro />
      <NFCProducts />
      <ProductSelector />
      <ExplodedPlate />
      <HowItWorks />
      <Stats />
      <Levers />
      <Process />
      <Pricing />
      <PriceConfigurator />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
