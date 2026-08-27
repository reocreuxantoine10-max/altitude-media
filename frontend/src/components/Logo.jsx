import React from 'react';

const LOGO_HORIZ = '/brand/altitude-media-horizontal.webp';
const LOGO_MARK = '/brand/altitude-media-mark.webp';

const Logo = ({ size = 'md', variant = 'horizontal' }) => {
  const h = size === 'lg' ? 44 : size === 'sm' ? 28 : 34;
  const src = variant === 'mark' ? LOGO_MARK : LOGO_HORIZ;
  return (
    <div className="logo-triangle inline-flex items-center select-none">
      <img
        src={src}
        alt="Altitude Media"
        width={variant === 'mark' ? 2000 : 600}
        height={variant === 'mark' ? 2000 : 221}
        style={{ height: h, width: 'auto', display: 'block' }}
        draggable={false}
      />
    </div>
  );
};

export default Logo;
