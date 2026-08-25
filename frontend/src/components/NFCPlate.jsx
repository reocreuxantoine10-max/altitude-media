import React, { useRef } from 'react';
import { Nfc, QrCode, Star } from 'lucide-react';

const NFCPlate = ({ compact = false }) => {
  const plateRef = useRef(null);

  const move = (event) => {
    if (!plateRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = plateRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    plateRef.current.style.setProperty('--plate-rx', `${-y * 10}deg`);
    plateRef.current.style.setProperty('--plate-ry', `${x * 14}deg`);
  };

  const reset = () => {
    if (!plateRef.current) return;
    plateRef.current.style.setProperty('--plate-rx', '-4deg');
    plateRef.current.style.setProperty('--plate-ry', '-8deg');
  };

  return (
    <div className={`plate-stage ${compact ? 'plate-stage--compact' : ''}`} onMouseMove={move} onMouseLeave={reset}>
      <div ref={plateRef} className="nfc-plate" role="img" aria-label="Représentation neutre d’une plaque NFC Altitude Media">
        <div className="nfc-plate__shine" />
        <div className="nfc-plate__brand">ALTITUDE <span>MEDIA</span></div>
        <div className="nfc-plate__icon"><Nfc aria-hidden="true" /></div>
        <strong>Votre avis compte.</strong>
        <p>Approchez votre téléphone</p>
        <div className="nfc-plate__rating" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((star) => <Star key={star} fill="currentColor" />)}
        </div>
        <QrCode className="nfc-plate__qr" aria-hidden="true" />
      </div>
      <div className="plate-shadow" />
      {!compact && <span className="plate-caption">Mockup neutre — prêt à accueillir les photos réelles</span>}
    </div>
  );
};

export default NFCPlate;
