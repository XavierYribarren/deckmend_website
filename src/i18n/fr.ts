/**
 * Dictionnaire de référence : sa forme définit le type `Messages`,
 * que toute autre langue doit respecter à l'identique.
 */
export const fr = {
  meta: {
    /** Nom de la langue, dans la langue elle-même (sélecteur) */
    languageName: 'Français',
    title: 'Deckmend · Rien ne se perd. Tout se rebat.',
    description: 'Deckmend combine tes paquets incomplets pour reconstituer des jeux de 52 cartes.',
  },

  cards: {
    decks: { bicycleRed: 'Bicycle rouge', bicycleBlue: 'Bicycle bleu', tallyHo: 'Tally-Ho', bee: 'Bee', aviator: 'Aviator' },
    ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'V', 'D', 'R'],
    suits: { spade: 'pique', heart: 'cœur', club: 'trèfle', diamond: 'carreau' },
    unit: 'cartes',
    unnamed: 'Sans nom',
  },

  header: {
    navLabel: 'Principale',
    language: 'Langue',
    problem: 'Le problème',
    how: 'Comment ça marche',
    install: 'Installer',
  },

  hero: {
    label: 'Présentation',
    line1: 'Rien ne se perd.',
    line2: 'Tout se ',
    line2Bold: 'rebat.',
    pitch: 'Deckmend combine tes paquets incomplets pour reconstituer des jeux de 52 cartes. Sans tour de passe-passe.',
  },

  platforms: {
    footnote: 'Gratuit, sans compte, tes données restent sur ton appareil.',
    otherDevices: 'Autres appareils',
    android: {
      kicker: 'Android · app web',
      label: 'Installer sur Android',
      install: {
        title: 'Installer Deckmend sur Android',
        intro: 'Ouvre le lien dans Chrome ou Edge, puis accepte la proposition Installer. Deckmend apparaîtra avec tes autres applications.',
        note: "Pas de proposition ? Ouvre le menu ⋮ du navigateur, puis Installer l'application (ou Ajouter à l'écran d'accueil).",
      },
    },
    ios: {
      kicker: 'iPhone · app web',
      label: 'Installer sur iPhone',
      install: {
        title: 'Installer Deckmend sur iPhone',
        intro: "Ouvre le lien dans Safari, touche Partager, puis Sur l'écran d'accueil.",
        note: 'Lance ensuite Deckmend depuis son icône plutôt que depuis Safari : plein écran, et les mises à jour arrivent toutes seules.',
      },
    },
    desktop: {
      kicker: 'Mac et PC · app web',
      label: 'Installer sur ordinateur',
      install: {
        title: 'Installer Deckmend sur ordinateur',
        intro: 'Ouvre le lien dans Chrome ou Edge, puis accepte la proposition Installer. Deckmend apparaîtra avec tes autres applications.',
        note: "Pas de proposition ? Clique sur l'icône d'installation, à droite de la barre d'adresse.",
      },
    },
  },

  dialog: {
    close: 'Fermer',
    noteTag: 'À savoir',
    cta: 'Ouvrir Deckmend',
    /** Illustration des trois gestes sur iPhone */
    iosGesture: {
      label: 'Les trois gestes sur iPhone',
      steps: ['Ouvre dans Safari', 'Touche Partager', "Sur l'écran d'accueil"],
    },
  },

  problem: {
    title: 'Chaque tour a un prix.',
    lede: "Et à force, c'est tout le paquet qui paie.",
    points: [
      { title: "Tu t'entraînes. Les cartes trinquent.", text: 'Pliées, marquées, égarées sous le canapé, ou sacrifiées pour un tour. Ça fait partie du métier.' },
      { title: 'Tes paquets se vident.', text: "Un 7 ici, une dame là. Aucun paquet n'est vraiment mort, aucun n'est vraiment complet." },
      { title: 'Et finissent au fond du tiroir.', text: "Tu les gardes pour t'entraîner. Pourtant, ensemble, ces paquets forment des jeux complets. Tu ne le savais pas, eux non plus." },
    ],
    damage: { folded: 'Pliée', marked: 'Marquée', lost: 'Perdue', sacrificed: 'Sacrifiée' },
    together: 'Ensemble : 4 jeux complets',
  },

  steps: {
    title: 'Quatre étapes. Zéro tour de passe-passe.',
    stepLabel: (n: number) => `Étape ${n} : `,
    items: [
      { title: 'Étiquette chaque paquet.', text: "Un petit inventaire, à faire une seule fois. La première, prévois le temps d'un café. Ensuite, c'est réglé : chaque reconstitution devient instantanée." },
      { title: 'Ajoute tes paquets dans Deckmend.', text: "Le nom de l'étiquette, sa couleur. Deux champs, et ton paquet existe. Essaie, c'est interactif." },
      { title: 'Renseigne les cartes manquantes.', text: 'Touche une carte pour la marquer absente. Le compteur fait le calcul, tu gardes tes mains pour le reste.' },
      { title: 'Appuie. Et voilà.', text: 'Deckmend répartit les cartes entre tes paquets et te dit quoi déplacer, carte par carte. Le seul tour dont on te livre le secret.' },
    ],
    timing: {
      onceTitle: 'Une fois',
      onceText: "le temps d'un café",
      thenTitle: 'Ensuite',
      thenText: 'instantané, à chaque fois',
    },
    newDeck: {
      title: 'Nouveau paquet',
      name: "Nom de l'étiquette",
      color: 'Couleur',
      colors: ['Rouge', 'Bleu', 'Sable', 'Marine', 'Ardoise'],
    },
    missing: {
      complete: 'Paquet complet. Suspect, mais on te croit.',
      list: (cards: string) => `Manquantes : ${cards}. Touche une carte pour changer.`,
      cardLabel: (rank: string, suit: string) => `${rank} de ${suit}`,
    },
    rebuild: {
      incomplete: (n: number) => `${n} paquets incomplets`,
      cta: 'Reconstituer mes paquets',
      result: 'jeux complets peuvent être reconstitués',
      moves: 'Cartes à déplacer',
      replay: 'Rejouer le tour',
    },
  },

  cta: {
    title: 'Ton prochain jeu est déjà dans ton tiroir.',
    lede: "Les cartes, tu les as. Il ne manque que l'app.",
  },

  footer: {
    legal: (year: number) => `© ${year}. Aucune carte n'a été pliée pendant la fabrication de ce site.`,
    navLabel: 'Liens légaux',
    contact: 'Contact',
    legalNotice: 'Mentions légales',
    privacy: 'Confidentialité',
  },
}

export type Messages = typeof fr
