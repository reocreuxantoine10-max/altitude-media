import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SolutionPath from '../components/SolutionPath';
import NFCProducts from '../components/NFCProducts';
import Loyalty from '../components/Loyalty';
import FutureAI from '../components/FutureAI';
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
      <SolutionPath />
      <NFCProducts />
      <Loyalty />
      <Stats />
      <Levers />
      <Process />
      <Pricing />
      <PriceConfigurator />
      <FAQ />
      <FutureAI />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
