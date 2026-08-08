import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';

const Section = ({ title, children }) => (
  <div className="mb-5">
    <h3 className="text-[15px] font-bold text-neutral-900 mb-2">{title}</h3>
    <div className="text-[13.5px] text-neutral-700 leading-relaxed space-y-2">{children}</div>
  </div>
);

export const MentionsLegalesModal = ({ open, onOpenChange }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-2xl max-h-[85vh] bg-white">
      <DialogHeader>
        <DialogTitle className="text-[22px] font-black tracking-tight">Mentions légales</DialogTitle>
      </DialogHeader>
      <ScrollArea className="max-h-[70vh] pr-4">
        <Section title="Éditeur du site">
          <p>Le site altitudemedia.fr est édité par <strong>Altitude Media</strong>.</p>
          <p>Adresse de contact : <a className="text-indigo-600" href="mailto:contact@altitudemedia.fr">contact@altitudemedia.fr</a></p>
          <p>Instagram : <a className="text-indigo-600" href="https://www.instagram.com/altitudemediaa/?hl=fr" target="_blank" rel="noreferrer">@altitudemediaa</a></p>
        </Section>
        <Section title="Directeur de la publication">
          <p>Le directeur de la publication est le représentant légal d'Altitude Media.</p>
        </Section>
        <Section title="Hébergement">
          <p>Le site est hébergé par un prestataire d'infrastructure cloud conforme aux standards européens de protection des données.</p>
        </Section>
        <Section title="Propriété intellectuelle">
          <p>L'ensemble des éléments présents sur ce site (textes, images, logos, vidéos, graphismes, structure) est la propriété exclusive d'Altitude Media, sauf mention contraire. Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable d'Altitude Media, conformément aux articles L.335-2 et suivants du Code de la propriété intellectuelle.</p>
        </Section>
        <Section title="Responsabilité">
          <p>Altitude Media s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Altitude Media ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. Altitude Media décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.</p>
        </Section>
        <Section title="Liens hypertextes">
          <p>Le site peut contenir des liens hypertextes vers d'autres sites. Altitude Media n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
        </Section>
        <Section title="Droit applicable">
          <p>Tout litige en relation avec l'utilisation du site altitudemedia.fr est soumis au droit français. Les tribunaux compétents sont ceux du ressort du siège social d'Altitude Media.</p>
        </Section>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

export const CGVModal = ({ open, onOpenChange }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-2xl max-h-[85vh] bg-white">
      <DialogHeader>
        <DialogTitle className="text-[22px] font-black tracking-tight">Conditions Générales de Vente</DialogTitle>
      </DialogHeader>
      <ScrollArea className="max-h-[70vh] pr-4">
        <Section title="Article 1 — Objet">
          <p>Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des prestations de communication, création de contenu, gestion de fiche Google Business Profile et gestion de réseaux sociaux fournies par Altitude Media à ses clients professionnels (restaurants et commerces).</p>
        </Section>
        <Section title="Article 2 — Prestations proposées">
          <p>Altitude Media propose plusieurs formules d'abonnement mensuel : Pack Google (179 €/mois), Pack Réseaux Sociaux (179 €/mois), Pack Croissance (349 €/mois), Pack Premium (599 €/mois). Chaque formule s'accompagne de frais de lancement obligatoires d'un montant de 329 €.</p>
        </Section>
        <Section title="Article 3 — Prix et modalités de paiement">
          <p>Les prix sont indiqués en euros hors taxes. Le paiement s'effectue mensuellement par prélèvement automatique ou virement bancaire. Les frais de lancement de 329 € sont facturés au démarrage de la prestation.</p>
          <p>En cas d'engagement de 3 mois minimum, une remise commerciale de 50 % est appliquée sur l'abonnement mensuel pendant toute la durée de l'engagement.</p>
        </Section>
        <Section title="Article 4 — Durée et engagement">
          <p>Les prestations sont proposées avec un engagement de 3, 6 ou 12 mois. À l'issue de la période d'engagement, le contrat se poursuit par tacite reconduction pour des périodes d'un mois, résiliables à tout moment moyennant un préavis de 30 jours.</p>
        </Section>
        <Section title="Article 5 — Obligations du client">
          <p>Le client s'engage à fournir à Altitude Media l'ensemble des accès nécessaires à la bonne exécution des prestations (Google Business Profile, comptes réseaux sociaux, informations produits) ainsi que toute information utile dans un délai raisonnable.</p>
        </Section>
        <Section title="Article 6 — Obligations d'Altitude Media">
          <p>Altitude Media s'engage à exécuter les prestations dans le respect des règles de l'art, avec diligence et professionnalisme. Altitude Media est soumise à une obligation de moyens et non de résultat.</p>
        </Section>
        <Section title="Article 7 — Résiliation">
          <p>Toute résiliation avant la fin de la période d'engagement entraîne le paiement des mensualités restantes jusqu'à la fin de l'engagement, sauf accord contraire. Un manquement grave par l'une des parties peut justifier une résiliation immédiate après mise en demeure restée sans effet.</p>
        </Section>
        <Section title="Article 8 — Propriété des contenus">
          <p>Les photos, vidéos et publications réalisées par Altitude Media dans le cadre de la prestation deviennent la propriété du client à l'issue du règlement complet des sommes dues. Altitude Media se réserve toutefois le droit d'utiliser ces contenus à des fins de démonstration (portfolio, réseaux sociaux).</p>
        </Section>
        <Section title="Article 9 — Droit applicable et litiges">
          <p>Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux français seront seuls compétents.</p>
        </Section>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

export const PrivacyModal = ({ open, onOpenChange }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-2xl max-h-[85vh] bg-white">
      <DialogHeader>
        <DialogTitle className="text-[22px] font-black tracking-tight">Politique de confidentialité</DialogTitle>
      </DialogHeader>
      <ScrollArea className="max-h-[70vh] pr-4">
        <Section title="Responsable du traitement">
          <p>Altitude Media est responsable du traitement des données personnelles collectées via le site altitudemedia.fr, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.</p>
        </Section>
        <Section title="Données collectées">
          <p>Nous collectons uniquement les données que vous nous communiquez volontairement via le formulaire de contact : nom, nom du restaurant, adresse email, numéro de téléphone, message et intérêt éventuel pour un pack. Aucune donnée sensible n'est collectée.</p>
        </Section>
        <Section title="Finalités du traitement">
          <p>Vos données sont utilisées uniquement pour :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Répondre à votre demande de contact ou de devis</li>
            <li>Établir une proposition commerciale personnalisée</li>
            <li>Vous informer sur nos services si vous en avez fait la demande</li>
          </ul>
        </Section>
        <Section title="Base légale">
          <p>Le traitement repose sur votre consentement (envoi du formulaire) et sur l'exécution de mesures précontractuelles prises à votre demande.</p>
        </Section>
        <Section title="Destinataires">
          <p>Vos données sont destinées à l'équipe interne d'Altitude Media. Elles ne sont ni vendues, ni cédées, ni louées à des tiers. Elles peuvent être hébergées par nos sous-traitants techniques (hébergement, service de messagerie) qui se conforment au RGPD.</p>
        </Section>
        <Section title="Durée de conservation">
          <p>Les données de prospection sont conservées pendant 3 ans à compter du dernier contact. Les données contractuelles (clients) sont conservées pendant la durée du contrat, augmentée des délais de prescription légaux.</p>
        </Section>
        <Section title="Vos droits">
          <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition, de limitation du traitement et de portabilité de vos données. Vous pouvez également définir des directives relatives au sort de vos données après votre décès.</p>
          <p>Pour exercer ces droits : <a className="text-indigo-600" href="mailto:contact@altitudemedia.fr">contact@altitudemedia.fr</a></p>
          <p>Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).</p>
        </Section>
        <Section title="Cookies">
          <p>Le site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement. Aucun cookie de traçage publicitaire n'est déposé sans votre consentement explicite.</p>
        </Section>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);
