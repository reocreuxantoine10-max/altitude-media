import React from 'react';

const MountainLayers = () => (
  <div className="mountain-scene mountain-scene--photo" aria-hidden="true">
    <img className="mountain-photo mountain-photo--rear" src="/mountains/hero-alpine-pass.webp" width="1920" height="1080" alt="" fetchPriority="high" />
    <div className="mountain-photo-depth mountain-photo-depth--mid"><img src="/mountains/hero-alpine-pass.webp" alt="" /></div>
    <div className="mountain-photo-depth mountain-photo-depth--left"><img src="/mountains/hero-alpine-pass.webp" alt="" /></div>
    <div className="mountain-photo-depth mountain-photo-depth--right"><img src="/mountains/hero-alpine-pass.webp" alt="" /></div>
    <div className="mountain-photo-scrim" />
    <div className="mountain-mist mountain-mist--one" />
    <div className="mountain-mist mountain-mist--two" />
  </div>
);

export default MountainLayers;
