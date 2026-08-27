import React, { useState } from 'react';

const MountainLayers = ({ videoRef, reducedMotion, videoEnabled, onVideoMetadata }) => {
  const [videoReady, setVideoReady] = useState(false);

  return (
  <div className="mountain-scene mountain-scene--photo" aria-hidden="true">
    <img className="mountain-film__poster" src="/mountains/hero-alpine-pass.webp" width="1672" height="941" alt="" fetchPriority="high" loading="eager" decoding="async" />
    {!reducedMotion && videoEnabled && (
      <video
        ref={videoRef}
        className={`mountain-film__video${videoReady ? ' is-ready' : ''}`}
        muted
        playsInline
        preload="auto"
        poster="/motion/mountain-traverse-poster.webp"
        onLoadedMetadata={onVideoMetadata}
        onLoadedData={() => setVideoReady(true)}
      >
        <source src="/motion/mountain-traverse.webm" type="video/webm" />
        <source src="/motion/mountain-traverse.mp4" type="video/mp4" />
      </video>
    )}
    <div className="mountain-valley-light" />
    <div className="mountain-photo-scrim" />
    <div className="mountain-mist mountain-mist--one" />
    <div className="mountain-mist mountain-mist--two" />
  </div>
  );
};

export default MountainLayers;
