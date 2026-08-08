import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
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
