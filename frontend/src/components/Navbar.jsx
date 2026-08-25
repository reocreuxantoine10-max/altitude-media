import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { label: 'Avis Google', target: 'nfc' }, { label: 'Fidélité', target: 'fidelite' },
  { label: 'Communication', target: 'prix' }, { label: 'Contact', target: 'contact' },
];
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const go = (target) => { setOpen(false); document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav aria-label="Navigation principale">
        <button className="brand-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Retour en haut"><Logo size="sm" /></button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => <button key={link.target} onClick={() => go(link.target)}>{link.label}</button>)}
          <button className="nav-cta" onClick={() => go('contact')}>Parler de mon projet <ArrowRight /></button>
        </div>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>{open ? <X /> : <Menu />}</button>
      </nav>
    </header>
  );
};
export default Navbar;
