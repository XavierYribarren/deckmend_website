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

  placeholders: {
    media: 'Emplacement média',
    mediaWide: 'Emplacement média pleine largeur',
    mediaFormat: (ratio: string) => `Image ou animation, ${ratio}`,
    mediaHint: 'Glisse ici le visuel du hero',
  },

  header: {
    navLabel: 'Principale',
    language: 'Langue',
    problem: 'Le problème',
    how: 'Comment ça marche',
    download: 'Télécharger',
  },

  hero: {
    label: 'Présentation',
    line1: 'Rien ne se perd.',
    line2: 'Tout se ',
    line2Bold: 'rebat.',
    pitch: 'Deckmend combine tes paquets incomplets pour reconstituer des jeux de 52 cartes. Sans tour de passe-passe.',
  },

  flip: {
    idle: 'Pense à une carte. Puis touche la mienne.',
    revealed: "C'était le 7 de cœur. Évidemment.",
    reveal: 'Révéler la carte',
    hide: 'Retourner la carte',
  },

  platforms: {
    soon: 'Bientôt disponible',
    android: {
      kicker: 'Android · fichier APK',
      label: "Télécharger l'APK",
      install: {
        title: "Installer l'APK sur Android",
        intro: "Deckmend n'est pas (encore) sur le Play Store : tu installes l'app directement, en quatre gestes.",
        steps: [
          { title: 'Télécharge le fichier', body: 'Touche le bouton ci-dessous depuis ton téléphone. Le fichier deckmend.apk arrive dans tes téléchargements.' },
          { title: 'Ouvre-le', body: "Depuis la notification de fin de téléchargement, ou via l'app Fichiers › Téléchargements." },
          { title: "Autorise l'installation", body: 'Si Android bloque, touche Paramètres et active « Autoriser cette source » pour ton navigateur. À faire une seule fois.' },
          { title: 'Installe', body: "Touche Installer. Si Play Protect s'inquiète, choisis « Installer quand même » : l'app ne demande aucune permission sensible." },
        ],
        note: 'Sur ordinateur ? Ouvre cette page depuis ton téléphone Android, ou transfère le fichier par câble.',
        meta: (version: string) => `Version ${version} · Android 8 et plus`,
        cta: "Télécharger l'APK",
      },
    },
    ios: {
      kicker: 'iPhone · app web',
      label: 'Installer sur iPhone',
      install: {
        title: 'Installer Deckmend sur iPhone',
        intro: "Sur iPhone, Deckmend s'installe comme une app web : ni App Store, ni compte. Elle s'ouvre ensuite en plein écran, comme n'importe quelle app.",
        steps: [
          { title: "Ouvre l'app dans Safari", body: "Touche le bouton ci-dessous depuis ton iPhone. Si la page s'ouvre dans un autre navigateur, copie le lien dans Safari." },
          { title: 'Touche Partager', body: "L'icône carrée avec une flèche vers le haut, en bas de l'écran (en haut sur iPad)." },
          { title: "Ajoute-la à l'écran d'accueil", body: "Fais défiler, choisis « Sur l'écran d'accueil », puis touche Ajouter. Deckmend rejoint tes apps." },
        ],
        note: "Lance ensuite Deckmend depuis son icône plutôt que depuis Safari : plein écran, et les mises à jour arrivent toutes seules.",
        meta: () => 'iPhone et iPad · Safari recommandé',
        cta: "Ouvrir l'app web",
      },
    },
    web: {
      kicker: 'Sans rien installer',
      label: 'Version web',
    },
  },

  dialog: {
    close: 'Fermer',
    noteTag: 'À savoir',
    started: 'Téléchargement lancé. Relancer ?',
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
