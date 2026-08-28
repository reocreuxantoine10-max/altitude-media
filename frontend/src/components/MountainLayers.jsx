import React from 'react';

const MountainLayers = ({ videoRef, reducedMotion, onVideoMetadata }) => (
  <div className="mountain-scene mountain-scene--photo" aria-hidden="true">
    <picture>
      <source media="(max-width: 600px)" srcSet="/mountains/hero-alpine-pass-mobile.webp" />
      <img className="mountain-film__poster" src="/mountains/hero-alpine-pass.webp" width="1672" height="941" alt="" fetchPriority="high" loading="eager" decoding="async" />
    </picture>
    {!reducedMotion && (
      <video
        ref={videoRef}
        className="mountain-film__video"
        muted
        playsInline
        preload="none"
        onLoadedMetadata={onVideoMetadata}
        onLoadedData={(event) => event.currentTarget.classList.add('is-ready')}
      />
    )}
    <div className="mountain-valley-light" />
    <div className="mountain-photo-scrim" />
    <div className="mountain-mist mountain-mist--one" />
    <div className="mountain-mist mountain-mist--two" />
  </div>
);

export default MountainLayers;
