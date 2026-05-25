export type Lang = 'fr' | 'en'

export interface Translations {
  nav: {
    fleet: string
    advantages: string
    book: string
    contact: string
  }
  hero: {
    line1: string
    line2: string
    line3: string
    sub: string
    ctaFleet: string
    ctaWhatsapp: string
  }
  fleet: {
    eyebrow: string
    heading: [string, string]
    sub: string
    price: string
    perDay: string
    items: Array<{
      category: string
      title: [string, string]
      description: string
    }>
  }
  ticker: string[]
  bigWord: string[]
  why: {
    eyebrow: string
    heading: string
    headingEm: string
    rows: Array<{ title: string; desc: string }>
  }
  howItWorks: {
    eyebrow: string
    heading: string
    headingEm: string
    steps: Array<{ title: string; desc: string }>
  }
  quote: {
    before: string
    em: string
    after: string
    author: string
    location: string
  }
  adventure: {
    line1: string
    line2: string
    line3: string
    sub: string
    cta: string
  }
  contact: {
    heading: string
    headingEm: string
    sub: string
    badge: string
    crightHeading: string
    comingSoon: string[]
    contactLinks: Array<{ label: string; value: string }>
  }
  footer: {
    tagline: string
    nav: string
    vehicles: string
    follow: string
    cars: string
    quads: string
    buggies: string
    copyright: string
  }
}

const fr: Translations = {
  nav: {
    fleet: 'Flotte',
    advantages: 'Avantages',
    book: 'Réserver',
    contact: 'Contact',
  },
  hero: {
    line1: 'Prends',
    line2: 'le volant',
    line3: 'à fond.',
    sub: 'La location de véhicules la plus fun du Bénin — du luxe en ville à l\'adrénaline sur le sable.',
    ctaFleet: 'Voir la flotte',
    ctaWhatsapp: 'WhatsApp',
  },
  fleet: {
    eyebrow: 'La flotte',
    heading: ['Choisis ta', 'machine'],
    sub: 'Entretenues, prêtes, livrées où tu veux. Voici un aperçu — la flotte complète arrive bientôt.',
    price: 'Sur devis',
    perDay: '/ jour',
    items: [
      {
        category: 'Voiture · SUV de luxe',
        title: ['Berlines', '& SUV'],
        description: 'Mercedes, 4x4 et berlines climatisées. Pour la ville, le business ou la grande route.',
      },
      {
        category: 'Quad · ATV',
        title: ['Quads tout-', 'terrain'],
        description: 'Adrénaline sur sable et pistes. Le combo parfait plage + week-end entre potes.',
      },
      {
        category: 'Buggy · Side-by-side',
        title: ['Buggys', '4 places'],
        description: "L'expérience hors-piste ultime. En groupe, pour dévorer la côte et les dunes.",
      },
    ],
  },
  ticker: [
    'VOITURE DE LUXE',
    'QUAD TOUT-TERRAIN',
    'BUGGY AVENTURE',
    'LIVRAISON AÉROPORT',
    'ASSURANCE INCLUSE',
  ],
  bigWord: ['ROULE', 'EXPLORE', 'VIBRE'],
  why: {
    eyebrow: 'Pourquoi VIVALOC',
    heading: 'Pas juste',
    headingEm: 'une loc.',
    rows: [
      { title: 'Assurance & entretien inclus', desc: 'Tu prends les clés, on gère le reste. Zéro stress.' },
      { title: 'Livré où tu es', desc: 'Aéroport, hôtel, maison — on amène le véhicule à toi.' },
      { title: 'Réservation par DM', desc: 'Réponse rapide WhatsApp & Insta. Pas de paperasse.' },
      { title: 'Jour · semaine · mois', desc: 'Tarifs flexibles selon ton projet et ta durée.' },
    ],
  },
  howItWorks: {
    eyebrow: 'Comment ça marche',
    heading: '3 étapes.',
    headingEm: "C'est tout.",
    steps: [
      { title: 'Choisis', desc: "Parcours la flotte et sélectionne la voiture, le quad ou le buggy qu'il te faut." },
      { title: 'Écris-nous', desc: 'Un message WhatsApp ou Insta. On confirme dates, tarif et livraison direct.' },
      { title: 'Roule', desc: "On te livre le véhicule prêt à partir. Y'a plus qu'à profiter de la route." },
    ],
  },
  quote: {
    before: 'Service ',
    em: 'impeccable',
    after: ", véhicule nickel, livré à l'heure. VIVALOC c'est mon réflexe à chaque séjour au Bénin.",
    author: 'Client satisfait',
    location: 'Cotonou',
  },
  adventure: {
    line1: 'TA PROCHAINE',
    line2: 'AVENTURE',
    line3: 'DÉMARRE ICI',
    sub: 'Du bitume de Cotonou aux dunes de la côte — VIVALOC te donne les clés.',
    cta: 'Réserver un véhicule',
  },
  contact: {
    heading: 'Prêt à',
    headingEm: 'rouler ?',
    sub: 'Envoie un message — réponse rapide avec dispos et tarifs. Toutes tes questions par DM.',
    badge: 'Bientôt plus grand',
    crightHeading: 'Une flotte qui grandit. Une vision qui décolle.',
    comingSoon: [
      'Nouveaux modèles en arrivage',
      'Réservation en ligne à venir',
      'Service premium étendu',
      'Expériences aventure guidées',
    ],
    contactLinks: [
      { label: 'WhatsApp', value: 'Écrire maintenant' },
      { label: 'Instagram', value: '@vivaloc.rentcar' },
      { label: 'Email', value: 'contact@vivaloc.bj' },
    ],
  },
  footer: {
    tagline: 'Location de voiture, quad et buggy au Bénin. Ta liberté, livrée.',
    nav: 'Navigation',
    vehicles: 'Véhicules',
    follow: 'Suivre',
    cars: 'Voitures & SUV',
    quads: 'Quads / ATV',
    buggies: 'Buggys',
    copyright: '© 2026 VIVALOC · Cotonou, Bénin',
  },
}

const en: Translations = {
  nav: {
    fleet: 'Fleet',
    advantages: 'Benefits',
    book: 'Book',
    contact: 'Contact',
  },
  hero: {
    line1: 'Take',
    line2: 'the wheel',
    line3: 'full throttle.',
    sub: "Benin's most thrilling vehicle rental, city luxury to beachside adrenaline.",
    ctaFleet: 'View fleet',
    ctaWhatsapp: 'WhatsApp',
  },
  fleet: {
    eyebrow: 'The fleet',
    heading: ['Choose your', 'machine'],
    sub: 'Maintained, ready, delivered anywhere. Here\'s a preview - the full fleet is coming soon.',
    price: 'On quote',
    perDay: '/ day',
    items: [
      {
        category: 'Car · Luxury SUV',
        title: ['Sedans', '& SUVs'],
        description: 'Mercedes, 4x4s and air-conditioned sedans. For the city, business or the open road.',
      },
      {
        category: 'Quad · ATV',
        title: ['All-terrain', 'quads'],
        description: 'Adrenaline on sand and trails. The perfect beach + weekend combo with friends.',
      },
      {
        category: 'Buggy · Side-by-side',
        title: ['4-seater', 'buggies'],
        description: 'The ultimate off-road experience. For groups ready to conquer the coast and dunes.',
      },
    ],
  },
  ticker: [
    'LUXURY CAR',
    'ALL-TERRAIN QUAD',
    'ADVENTURE BUGGY',
    'AIRPORT DELIVERY',
    'INSURANCE INCLUDED',
  ],
  bigWord: ['RIDE', 'EXPLORE', 'VIBE'],
  why: {
    eyebrow: 'Why VIVALOC',
    heading: 'Not just',
    headingEm: 'a rental.',
    rows: [
      { title: 'Insurance & maintenance included', desc: 'You take the keys, we handle the rest. Zero stress.' },
      { title: 'Delivered where you are', desc: 'Airport, hotel, home — we bring the vehicle to you.' },
      { title: 'Book by DM', desc: 'Fast WhatsApp & Insta replies. No paperwork.' },
      { title: 'Day · week · month', desc: 'Flexible rates tailored to your project and duration.' },
    ],
  },
  howItWorks: {
    eyebrow: 'How it works',
    heading: '3 steps.',
    headingEm: "That's it.",
    steps: [
      { title: 'Choose', desc: 'Browse the fleet and pick the car, quad, or buggy you need.' },
      { title: 'Message us', desc: 'A WhatsApp or Insta message. We confirm dates, rate and delivery on the spot.' },
      { title: 'Ride', desc: 'We deliver the vehicle ready to go. Nothing left to do but enjoy the road.' },
    ],
  },
  quote: {
    before: 'Impeccable ',
    em: 'service',
    after: ', spotless vehicle, delivered on time. VIVALOC is my go-to every time I visit Benin.',
    author: 'Happy customer',
    location: 'Cotonou',
  },
  adventure: {
    line1: 'YOUR NEXT',
    line2: 'ADVENTURE',
    line3: 'STARTS HERE',
    sub: 'From the streets of Cotonou to the coastal dunes, VIVALOC hands you the keys.',
    cta: 'Book a vehicle',
  },
  contact: {
    heading: 'Ready to',
    headingEm: 'ride?',
    sub: 'Send a message, quick reply with availability and rates. All questions by DM.',
    badge: 'Growing soon',
    crightHeading: 'A growing fleet. A soaring vision.',
    comingSoon: [
      'New models arriving',
      'Online booking coming soon',
      'Extended premium service',
      'Guided adventure experiences',
    ],
    contactLinks: [
      { label: 'WhatsApp', value: 'Message now' },
      { label: 'Instagram', value: '@vivaloc.rentcar' },
      { label: 'Email', value: 'contact@vivaloc.bj' },
    ],
  },
  footer: {
    tagline: 'Car, quad and buggy rental in Benin. Your freedom, delivered.',
    nav: 'Navigation',
    vehicles: 'Vehicles',
    follow: 'Follow',
    cars: 'Cars & SUV',
    quads: 'Quads / ATV',
    buggies: 'Buggies',
    copyright: '© 2026 VIVALOC · Cotonou, Benin',
  },
}

export const translations: Record<Lang, Translations> = { fr, en }
