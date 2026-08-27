import React from 'react';

const MountainLayers = () => (
  <div className="mountain-scene mountain-scene--photo" aria-hidden="true">
    <div className="mountain-camera">
      <img className="mountain-photo mountain-photo--rear" src="/mountains/hero-alpine-pass.webp" width="1672" height="941" alt="" fetchPriority="high" loading="eager" decoding="async" />
      <div className="mountain-photo-depth mountain-photo-depth--mid"><img src="/mountains/hero-alpine-pass.webp" alt="" /></div>
      <div className="mountain-photo-depth mountain-photo-depth--left"><img src="/mountains/hero-alpine-pass.webp" alt="" /></div>
      <div className="mountain-photo-depth mountain-photo-depth--right"><img src="/mountains/hero-alpine-pass.webp" alt="" /></div>
    </div>
    <div className="mountain-valley-light" />
    <div className="mountain-flight-lines" />
    <div className="mountain-photo-scrim" />
    <div className="mountain-mist mountain-mist--one" />
    <div className="mountain-mist mountain-mist--two" />
  </div>
);

export default MountainLayers;
