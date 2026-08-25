import React, { useState } from 'react';
import { Instagram, Linkedin, Facebook, Mail } from 'lucide-react';
import Logo from './Logo';
import { images } from '../data/mock';
import { MentionsLegalesModal, CGVModal, PrivacyModal } from './LegalModals';

const INSTAGRAM_URL = 'https://www.instagram.com/altitudemediaa/?hl=fr';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Footer = () => {
  const [openLegal, setOpenLegal] = useState(false);
  const [openCgv, setOpenCgv] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  return (
    <footer className="relative pt-32 pb-10 overflow-hidden bg-neutral-100">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${images.footer})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(0.6)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/70" />
      <div className="grain-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[46px] md:text-[64px] font-black tracking-[-0.03em] text-neutral-900 leading-[0.95]">
            Prêt à faire grandir
            <br />
            <span className="italic font-serif" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 500 }}>
              votre commerce ?
            </span>
          </h2>
          <p className="mt-6 text-[16px] text-neutral-700 max-w-lg mx-auto leading-relaxed">
            Plaques NFC, fidélité digitale ou accompagnement : choisissez la solution adaptée à votre prochain objectif.
          </p>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-glow mt-8 inline-flex items-center gap-2 pl-6 pr-6 py-3 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-semibold text-[15px]"
          >
            Nous contacter
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <Logo size="md" />
              <p className="mt-5 text-[14px] text-neutral-600 leading-relaxed max-w-[280px]">
                Des solutions concrètes pour la visibilité, la fidélité et la communication des commerces locaux.
              </p>
              <a
                href="mailto:contact@altitudemedia.fr"
                className="btn-glow mt-6 inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-neutral-900 text-white text-[14px] font-semibold"
              >
                contact@altitudemedia.fr
                <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5 text-neutral-900" />
                </span>
              </a>
            </div>

            <div>
              <h4 className="text-[13px] font-bold tracking-[0.1em] text-neutral-500 uppercase mb-4">Services</h4>
              <ul className="space-y-2.5 text-[14px] text-neutral-800">
                <li>
                  <button onClick={() => scrollTo('infos')} className="hover:text-indigo-600 transition-colors text-left">
                    Google Business Profile
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('infos')} className="hover:text-indigo-600 transition-colors text-left">
                    Photo & Vidéo
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('infos')} className="hover:text-indigo-600 transition-colors text-left">
                    Réseaux Sociaux
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('infos')} className="hover:text-indigo-600 transition-colors text-left">
                    Site Internet
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('prix')} className="hover:text-indigo-600 transition-colors text-left">
                    Tarifs
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] font-bold tracking-[0.1em] text-neutral-500 uppercase mb-4">Support</h4>
              <ul className="space-y-2.5 text-[14px] text-neutral-800">
                <li>
                  <button onClick={() => scrollTo('contact')} className="hover:text-indigo-600 transition-colors text-left">
                    Contact
                  </button>
                </li>
                <li>
                  <button onClick={() => setOpenLegal(true)} className="hover:text-indigo-600 transition-colors text-left">
                    Mentions légales
                  </button>
                </li>
                <li>
                  <button onClick={() => setOpenCgv(true)} className="hover:text-indigo-600 transition-colors text-left">
                    Conditions générales
                  </button>
                </li>
                <li>
                  <button onClick={() => setOpenPrivacy(true)} className="hover:text-indigo-600 transition-colors text-left">
                    Politique de confidentialité
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[13px] text-neutral-500">© {new Date().getFullYear()} Altitude Media — Tous droits réservés.</div>
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Altitude Media"
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-orange-400 flex items-center justify-center transition-all group"
              >
                <Instagram className="w-4 h-4 text-neutral-700 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-900 flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-neutral-700 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-900 flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-4 h-4 text-neutral-700 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-[70px] md:text-[110px] font-black tracking-[-0.05em] text-neutral-900/10 leading-none">
            ALTITUDE MEDIA
          </div>
        </div>
      </div>

      <MentionsLegalesModal open={openLegal} onOpenChange={setOpenLegal} />
      <CGVModal open={openCgv} onOpenChange={setOpenCgv} />
      <PrivacyModal open={openPrivacy} onOpenChange={setOpenPrivacy} />
    </footer>
  );
};

export default Footer;
