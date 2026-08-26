import React, { useMemo, useState } from 'react';
import { ArrowRight, Check, Palette } from 'lucide-react';
import { nfcProducts } from '../data/site';

const ProductSelector = () => {
  const [productId, setProductId] = useState('counter');
  const [variantId, setVariantId] = useState('white');
  const product = useMemo(() => nfcProducts.find((item) => item.id === productId) || nfcProducts[0], [productId]);
  const variant = product.variants.find((item) => item.id === variantId) || product.variants[0];

  const chooseProduct = (id) => {
    const next = nfcProducts.find((item) => item.id === id);
    setProductId(id);
    setVariantId(next.variants[0].id);
  };

  return (
    <section id="modeles" className="product-selector section-shell">
      <div className="section-heading selector-heading">
        <span className="eyebrow"><Palette /> Choisissez votre plaque</span>
        <h2 className="display-title">Le bon format.<br /><em>Le style qui vous ressemble.</em></h2>
        <p>Les visuels présentés sont des références produit. Choisissez un format et une finition pour découvrir le rendu.</p>
      </div>
      <div className="selector-shell">
        <div className="selector-preview">
          <span className="reference-badge">Référence produit</span>
          <img key={variant.image} src={variant.image} alt={`${product.name}, finition ${variant.label}`} />
          <div className="selector-shadow" />
        </div>
        <div className="selector-controls">
          <div className="selector-price"><div><small>À partir de</small><strong>{product.price} €</strong></div><span>Sans abonnement obligatoire</span></div>
          <div className="control-group"><span>1. Format</span><div className="format-options">
            {nfcProducts.map((item) => <button key={item.id} className={item.id === productId ? 'active' : ''} onClick={() => chooseProduct(item.id)}><span>{item.name}</span><small>{item.price} €</small>{item.id === productId && <Check />}</button>)}
          </div></div>
          <div className="control-group"><span>2. Style</span><div className="variant-options">
            {product.variants.map((item) => <button key={item.id} className={item.id === variant.id ? 'active' : ''} onClick={() => setVariantId(item.id)} aria-label={`Finition ${item.label}`}><i style={{ background: item.color }} />{item.label}</button>)}
          </div></div>
          <p className="selector-note">Une plaque adaptée à votre établissement. De nouvelles références pourront être ajoutées facilement.</p>
          <button className="primary-cta" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Choisir ma plaque <ArrowRight /></button>
        </div>
      </div>
    </section>
  );
};

export default ProductSelector;
