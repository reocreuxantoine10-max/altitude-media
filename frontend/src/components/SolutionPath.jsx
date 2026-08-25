import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { solutionPaths } from '../data/site';

const SolutionPath = () => (
  <section id="solutions" className="section-shell path-section">
    <div className="section-heading">
      <span className="eyebrow">Choisissez votre ascension</span>
      <h2 className="display-title">Une solution claire.<br /><em>À votre rythme.</em></h2>
    </div>
    <div className="path-grid">
      {solutionPaths.map((path) => (
        <button key={path.number} className="path-card" onClick={() => document.getElementById(path.target)?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="path-number">{path.number}</span><small>{path.eyebrow}</small><h3>{path.title}</h3><p>{path.text}</p><ArrowUpRight />
        </button>
      ))}
    </div>
  </section>
);

export default SolutionPath;
