import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const NavItem = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-[15px] font-medium transition-all duration-300 ${
      active ? 'bg-neutral-900 text-white shadow-md' : 'text-neutral-700 hover:text-black hover:bg-neutral-100'
    }`}
  >
    {label}
  </button>
);

const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['produits', 'infos', 'prix', 'contact'];
      let current = '';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) current = id;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-[720px]">
      <nav
        className={`glass-nav rounded-full px-3 py-2 md:px-4 md:py-2.5 flex items-center justify-between gap-3 transition-all duration-500 ${
          scrolled ? 'shadow-xl' : ''
        }`}
      >
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="pl-2 pr-1">
          <Logo size="sm" />
        </button>
        <div className="flex items-center gap-1">
          <NavItem label="Produits." active={active === 'produits'} onClick={() => scrollTo('produits')} />
          <NavItem label="Infos." active={active === 'infos'} onClick={() => scrollTo('infos')} />
          <NavItem label="Prix." active={active === 'prix'} onClick={() => scrollTo('prix')} />
          <NavItem label="Contact." active={active === 'contact'} onClick={() => scrollTo('contact')} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
