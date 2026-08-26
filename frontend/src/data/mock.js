export const packs = [
  {
    id: 'google',
    tier: 'essentiel',
    color: 'green',
    name: 'Pack Google',
    price: 179,
    tagline: 'Pour les commerces qui veulent dominer Google.',
    features: [
      { icon: 'MessageSquare', text: 'Gestion complète des avis' },
      { icon: 'ImagePlus', text: 'Ajout de contenu (10 photos + 1 vidéo)' },
      { icon: 'Megaphone', text: 'Publications Google (menu, offres, etc)' },
      { icon: 'Camera', text: 'Séance photos / vidéo mensuelle' },
      { icon: 'BarChart3', text: 'Rapport mensuel' },
      { icon: 'Target', text: 'Optimisation SEO local' },
      { icon: 'MessageCircle', text: 'Support WhatsApp' },
    ],
  },
  {
    id: 'social',
    tier: 'essentiel',
    color: 'green',
    name: 'Pack Réseaux Sociaux',
    price: 179,
    tagline: 'Pour développer votre image sur les réseaux.',
    features: [
      { icon: 'Video', text: '3 vidéos par mois' },
      { icon: 'Camera', text: '10 photos par mois' },
      { icon: 'Smartphone', text: 'Gestion partielle des réseaux sociaux' },
      { icon: 'CalendarClock', text: 'Programmation du contenu validé' },
      { icon: 'Aperture', text: 'Séance photos / vidéo' },
      { icon: 'TrendingUp', text: 'Suivi des performances' },
      { icon: 'MessageCircle', text: 'Support WhatsApp' },
    ],
  },
  {
    id: 'croissance',
    tier: 'croissance',
    color: 'indigo',
    name: 'Pack Croissance',
    price: 349,
    recommended: true,
    tagline: 'Pour déléguer entièrement votre communication.',
    features: [
      { icon: 'Check', text: 'Tous les avantages des Packs Essentiel' },
      { icon: 'Video', text: '+3 vidéos courtes supplémentaires' },
      { icon: 'Images', text: '+10 à 15 photos supplémentaires' },
      { icon: 'Aperture', text: 'Séances photos / vidéo plus complètes' },
      { icon: 'Globe', text: 'Gestion totale réseaux sociaux + Google' },
      { icon: 'FileBarChart', text: 'Rapport mensuel détaillé (RS + Google)' },
      { icon: 'RefreshCw', text: 'Mise à jour du site internet (si existant)' },
      { icon: 'Crown', text: 'Client prioritaire' },
    ],
  },
  {
    id: 'premium',
    tier: 'premium',
    color: 'amber',
    name: 'Pack Premium',
    price: 599,
    tagline: 'Pour les commerces qui veulent aller plus loin.',
    features: [
      { icon: 'Check', text: 'Tout le Pack Croissance' },
      { icon: 'Clapperboard', text: 'Séances de tournage à la demande' },
      { icon: 'Film', text: 'Création de contenu à la demande' },
      { icon: 'Camera', text: 'Photos à la demande' },
      { icon: 'Sparkles', text: 'Présence sur tous les événements' },
      { icon: 'Megaphone', text: 'Campagnes publicitaires (réseaux sociaux)' },
      { icon: 'Zap', text: 'Priorité maximale sur toutes les demandes' },
    ],
  },
];

export const launchIncludes = [
  'Audit complet de votre commerce',
  'Optimisation de la fiche Google Business',
  'Installation de la plaque NFC + QR Code',
  'Première séance photo / vidéo',
  'Création de la stratégie de communication',
  'Mise en place des accès (Google, réseaux sociaux, etc.)',
];

export const options = [
  { icon: 'Globe2', title: 'Site internet', price: 'à partir de 350 €', desc: 'Site vitrine sur-mesure pour votre commerce.' },
  { icon: 'PartyPopper', title: "Couverture d'un événement", price: '250 à 500 €', desc: 'Hors pack premium. Reportage photo/vidéo dédié.' },
  { icon: 'Nfc', title: 'Plaque NFC supplémentaire', price: '19 €', desc: 'Boîtier connecté pour capter plus d’avis Google.' },
];

export const engagements = [
  { months: 3, badge: 'Populaire', discount: true },
  { months: 6, badge: 'Équilibré', discount: true },
  { months: 12, badge: 'Maximum', discount: true },
];

export const levers = [
  {
    id: 1,
    title: 'Gagnez des avis',
    subtitle: 'Un outil connecté qui facilite les interactions avec vos clients.',
    theme: 'light',
    span: 'sm',
    visual: 'nfc',
  },
  {
    id: 2,
    title: 'Valorisez votre savoir-faire',
    subtitle: 'Des photos et vidéos professionnelles qui donnent envie de vous choisir.',
    theme: 'light',
    span: 'sm',
    visual: 'creative',
  },
  {
    id: 3,
    title: 'Grandissez durablement',
    subtitle: 'Un accompagnement complet pour améliorer votre communication chaque mois.',
    theme: 'dark',
    span: 'tall',
    visual: 'peak',
  },
  {
    id: 4,
    title: 'Développez votre image',
    subtitle: 'Du contenu pensé pour attirer de nouveaux clients sur Instagram et TikTok.',
    theme: 'light',
    span: 'wide',
    visual: 'phone',
  },
  {
    id: 5,
    title: 'Soyez visible',
    subtitle: 'Optimisation Google pour être trouvé par vos futurs clients.',
    theme: 'light',
    span: 'sm',
    visual: 'map',
  },
];

export const stats = [
  { id: 1, label: 'Nos disponibilités', value: '12/24h', desc: 'Une équipe disponible 12h/24 pour répondre à vos besoins.', theme: 'dark' },
  { id: 2, label: 'Nos Prix', value: '100 %', desc: 'Un accompagnement de qualité à un prix accessible.', theme: 'indigo' },
  { id: 3, label: 'Nos services', value: '37', desc: 'Nous proposons 37 services conçus pour développer votre visibilité et attirer davantage de clients.', theme: 'light' },
];

export const process = [
  { step: '01', icon: 'Search', title: 'Audit', desc: "On analyse votre présence Google, vos réseaux et votre concurrence locale.", duration: 'Semaine 1' },
  { step: '02', icon: 'Wrench', title: 'Mise en place', desc: 'Optimisation Google Business, plaque NFC installée, accès configurés.', duration: 'Semaine 2' },
  { step: '03', icon: 'Camera', title: 'Création', desc: 'Photos, vidéos et publications pensées pour convertir vos visiteurs.', duration: 'Chaque mois' },
  { step: '04', icon: 'TrendingUp', title: 'Croissance', desc: "Rapports mensuels, ajustements et développement continu.", duration: 'En continu' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Marc Delaunay',
    role: 'Chef & propriétaire',
    restaurant: 'La Table du Marché',
    city: 'Lyon 6ᵉ',
    quote: "Depuis qu'Altitude Media gère nos réseaux, on a doublé les réservations du week-end. La plaque NFC nous a fait exploser les avis Google — on est passés de 4,2 à 4,8 étoiles en 3 mois.",
    rating: 5,
    avatar: 'MD',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 2,
    name: 'Sophie Bernard',
    role: 'Gérante',
    restaurant: 'Bistro Constance',
    city: 'Bordeaux',
    quote: 'On n\'a plus à se soucier de nos publications. Les photos sont sublimes, le contenu Instagram est cohérent et notre fiche Google est toujours à jour. Un vrai gain de temps.',
    rating: 5,
    avatar: 'SB',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 3,
    name: 'Julien Rossi',
    role: 'Chef',
    restaurant: 'Trattoria del Sole',
    city: 'Nice',
    quote: "L'équipe est disponible, réactive et vraiment à l'écoute. Les vidéos qu'ils produisent chaque mois donnent une image premium à notre trattoria. On recommande à 100%.",
    rating: 5,
    avatar: 'JR',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 4,
    name: 'Camille Fontaine',
    role: 'Cheffe pâtissière',
    restaurant: 'L\'Atelier Sucré',
    city: 'Paris 11ᵉ',
    quote: "Le Pack Croissance a transformé notre visibilité. +43% de trafic sur notre fiche Google en 4 mois et une communauté Instagram qui grandit chaque semaine.",
    rating: 5,
    avatar: 'CF',
    color: 'from-amber-500 to-orange-500',
  },
];

export const faqs = [
  {
    q: 'Combien de temps avant de voir les premiers résultats ?',
    a: "Les premiers effets sont visibles dès les 2 à 4 premières semaines : optimisation de la fiche Google, arrivée des premiers avis via la plaque NFC, publications régulières. Les résultats significatifs (trafic, réservations) apparaissent généralement à partir du 2ᵉ ou 3ᵉ mois.",
  },
  {
    q: 'Puis-je changer de pack en cours d\'engagement ?',
    a: 'Oui, vous pouvez évoluer vers un pack supérieur à tout moment. La différence est ajustée sur votre prochaine facturation. Pour descendre de gamme, il suffit d\'attendre la fin de votre engagement en cours.',
  },
  {
    q: 'Que se passe-t-il si je n\'ai pas encore de compte Instagram ou Google ?',
    a: 'Aucun problème. Les frais de lancement de 329 € incluent la création et la configuration complète de vos comptes Google Business, Instagram et Facebook. Nous partons de zéro avec vous.',
  },
  {
    q: 'La remise -50% est-elle applicable à tous les packs ?',
    a: 'Oui, la remise de 50% s\'applique à tous nos abonnements (Google, Réseaux Sociaux, Croissance, Premium) dès un engagement de 3, 6 ou 12 mois, et pendant toute la durée de l\'engagement.',
  },
  {
    q: 'Les photos et vidéos m\'appartiennent-elles ?',
    a: "Absolument. Tous les contenus produits (photos, vidéos, montages) deviennent votre propriété. Vous pouvez les réutiliser librement pour votre menu, vos supports print ou toute autre communication.",
  },
  {
    q: 'À quelle fréquence vous déplacez-vous dans mon commerce ?',
    a: "Une séance photo/vidéo est incluse chaque mois dans tous nos packs. Sur le Pack Premium, nous nous déplaçons également à la demande pour couvrir vos événements ou créer du contenu spécifique.",
  },
];

export const images = {
  hero: 'https://images.unsplash.com/photo-1713142465087-c2775fa37b91?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwzfHxtb3VudGFpbiUyMHBlYWtzJTIwc25vd3xlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3ODYxMzEyOTR8MA&ixlib=rb-4.1.0&q=85',
  food: 'https://images.unsplash.com/photo-1663530761401-15eefb544889?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBsYXRpbmd8ZW58MHx8fHwxNzg2MTMxMjk0fDA&ixlib=rb-4.1.0&q=85',
  camera: 'https://images.unsplash.com/photo-1580707221190-bd94d9087b7f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBjYW1lcmF8ZW58MHx8fHwxNzg2MTMxMjk0fDA&ixlib=rb-4.1.0&q=85',
  phone: 'https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwc29jaWFsJTIwbWVkaWF8ZW58MHx8fHwxNzg2MTMxMzAwfDA&ixlib=rb-4.1.0&q=85',
  footer: 'https://images.unsplash.com/photo-1661167490531-d035e4c9345d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwyfHxjbG91ZHklMjBtb3VudGFpbnxlbnwwfHx8fDE3ODYxMzEzMDB8MA&ixlib=rb-4.1.0&q=85',
};
