import React from 'react';

const MountainLayers = () => (
  <div className="mountain-scene" aria-hidden="true">
    <div className="mountain-sky"><span className="mountain-sun" /></div>
    <img className="mountain-asset mountain-asset--rear" src="/mountains/range-rear.svg" alt="" />
    <img className="mountain-asset mountain-asset--mid" src="/mountains/range-mid.svg" alt="" />
    <img className="mountain-asset mountain-asset--left" src="/mountains/cliff-left.svg" alt="" />
    <img className="mountain-asset mountain-asset--right" src="/mountains/cliff-right.svg" alt="" />
    <div className="mountain-mist mountain-mist--one" />
    <div className="mountain-mist mountain-mist--two" />
  </div>
);

export default MountainLayers;
