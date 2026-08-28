import React, { lazy, startTransition, Suspense, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const BelowFold = lazy(() => import('../components/BelowFold'));
const Footer = lazy(() => import('../components/Footer'));

const Home = () => {
  const [showBelowFold, setShowBelowFold] = useState(false);

  useEffect(() => {
    const activationEvents = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
    const reveal = () => {
      startTransition(() => setShowBelowFold(true));
      activationEvents.forEach((eventName) => window.removeEventListener(eventName, reveal));
    };
    activationEvents.forEach((eventName) => window.addEventListener(eventName, reveal, { passive: true, once: true }));
    window.addEventListener('altitude:reveal-content', reveal, { once: true });
    const fallback = window.setTimeout(reveal, 10000);
    return () => {
      window.clearTimeout(fallback);
      activationEvents.forEach((eventName) => window.removeEventListener(eventName, reveal));
      window.removeEventListener('altitude:reveal-content', reveal);
    };
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        {showBelowFold ? <Suspense fallback={null}><BelowFold /></Suspense> : null}
      </main>
      {showBelowFold ? <Suspense fallback={null}><Footer /></Suspense> : null}
    </div>
  );
};

export default Home;
