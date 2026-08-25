import React from 'react';

const Mountain = ({ className, path }) => (
  <svg className={className} viewBox="0 0 1440 520" preserveAspectRatio="none" aria-hidden="true">
    <path d={path} fill="currentColor" />
  </svg>
);

const MountainLayers = ({ progress = 0 }) => (
  <div className="mountain-scene" aria-hidden="true">
    <div className="mountain-sun" style={{ transform: `translate3d(0, ${progress * 36}px, 0)` }} />
    <Mountain
      className="mountain-layer mountain-layer--far"
      path="M0 385 126 292 235 342 392 173 525 304 669 218 805 333 956 144 1113 300 1254 215 1440 350 1440 520 0 520Z"
    />
    <Mountain
      className="mountain-layer mountain-layer--mid"
      path="M0 410 153 265 296 389 480 205 660 390 848 243 1002 385 1180 184 1440 403 1440 520 0 520Z"
    />
    <Mountain
      className="mountain-layer mountain-layer--front"
      path="M0 438 190 326 326 431 520 279 715 432 884 321 1047 443 1242 286 1440 426 1440 520 0 520Z"
    />
  </div>
);

export default MountainLayers;
