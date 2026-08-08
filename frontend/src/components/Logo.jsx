import React from 'react';

const LOGO_HORIZ = 'https://customer-assets-eiarnc6j.emergentagent.net/job_restaurant-comms-pro/artifacts/x9bpu5mn_LOGO%20TXT%20DROITE.webp';
const LOGO_MARK = 'https://customer-assets-eiarnc6j.emergentagent.net/job_restaurant-comms-pro/artifacts/hsjrsum3_LOGO%20SANS%20TEXTE.webp';

const Logo = ({ size = 'md', variant = 'horizontal' }) => {
  const h = size === 'lg' ? 44 : size === 'sm' ? 28 : 34;
  const src = variant === 'mark' ? LOGO_MARK : LOGO_HORIZ;
  return (
    <div className="logo-triangle inline-flex items-center select-none">
      <img
        src={src}
        alt="Altitude Media"
        style={{ height: h, width: 'auto', display: 'block' }}
        draggable={false}
      />
    </div>
  );
};

export default Logo;
