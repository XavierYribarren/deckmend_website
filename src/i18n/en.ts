import type { Messages } from './fr'

export const en: Messages = {
  meta: {
    languageName: 'English',
    title: 'Deckmend · Nothing is lost. Everything gets reshuffled.',
    description: 'Deckmend combines your incomplete decks to rebuild full 52-card decks.',
  },

  cards: {
    decks: { bicycleRed: 'Bicycle Red', bicycleBlue: 'Bicycle Blue', tallyHo: 'Tally-Ho', bee: 'Bee', aviator: 'Aviator' },
    ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    suits: { spade: 'spades', heart: 'hearts', club: 'clubs', diamond: 'diamonds' },
    unit: 'cards',
    unnamed: 'Untitled',
  },

  header: {
    navLabel: 'Main',
    language: 'Language',
    problem: 'The problem',
    how: 'How it works',
    install: 'Install',
  },

  hero: {
    label: 'Introduction',
    line1: 'Nothing is lost.',
    line2: 'Everything gets ',
    line2Bold: 'reshuffled.',
    pitch: 'Deckmend combines your incomplete decks to rebuild full 52-card decks. No sleight of hand.',
  },

  flip: {
    idle: 'Think of a card. Then tap mine.',
    revealed: 'It was the 7 of hearts. Obviously.',
    reveal: 'Reveal the card',
    hide: 'Flip the card back',
  },

  platforms: {
    footnote: 'Free, no account, your data stays on your device.',
    android: {
      kicker: 'Android · web app',
      label: 'Install on Android',
      install: {
        title: 'Install Deckmend on Android',
        intro: 'Open the link in Chrome or Edge, then accept the Install prompt. Deckmend will appear alongside your other apps.',
        note: "No prompt? Open the browser's ⋮ menu, then Install app (or Add to Home screen).",
      },
    },
    ios: {
      kicker: 'iPhone · web app',
      label: 'Install on iPhone',
      install: {
        title: 'Install Deckmend on iPhone',
        intro: 'Open the link in Safari, tap Share, then Add to Home Screen.',
        note: 'From then on, launch Deckmend from its icon rather than from Safari: full screen, and updates arrive on their own.',
      },
    },
    desktop: {
      kicker: 'Mac and PC · web app',
      label: 'Install on computer',
      install: {
        title: 'Install Deckmend on your computer',
        intro: 'Open the link in Chrome or Edge, then accept the Install prompt. Deckmend will appear alongside your other apps.',
        note: 'No prompt? Click the install icon on the right side of the address bar.',
      },
    },
  },

  dialog: {
    close: 'Close',
    noteTag: 'Good to know',
    cta: 'Open Deckmend',
    iosGesture: {
      label: 'The three moves on iPhone',
      steps: ['Open in Safari', 'Tap Share', 'Add to Home Screen'],
    },
  },

  problem: {
    title: 'Every trick has a price.',
    lede: 'And over time, the whole deck pays for it.',
    points: [
      { title: 'You practice. The cards take the hit.', text: "Bent, marked, lost under the couch, or sacrificed for a trick. It comes with the job." },
      { title: 'Your decks thin out.', text: "A 7 here, a queen there. No deck is really dead, and none is really complete." },
      { title: 'And end up at the back of the drawer.', text: "You keep them for practice. Yet together, those decks make complete ones. You didn't know it, and neither did they." },
    ],
    damage: { folded: 'Bent', marked: 'Marked', lost: 'Lost', sacrificed: 'Sacrificed' },
    together: 'Together: 4 full decks',
  },

  steps: {
    title: 'Four steps. Zero sleight of hand.',
    stepLabel: (n) => `Step ${n}: `,
    items: [
      { title: 'Label each deck.', text: 'A small inventory, done only once. The first time, allow for a coffee. After that, you are set: every rebuild is instant.' },
      { title: 'Add your decks to Deckmend.', text: "The label's name, its color. Two fields, and your deck exists. Try it, it's interactive." },
      { title: 'Mark the missing cards.', text: 'Tap a card to mark it as missing. The counter does the math, your hands stay free for the rest.' },
      { title: 'Tap. And voilà.', text: "Deckmend splits the cards across your decks and tells you what to move, card by card. The only trick whose secret we'll give away." },
    ],
    timing: {
      onceTitle: 'Once',
      onceText: 'about one coffee',
      thenTitle: 'After that',
      thenText: 'instant, every time',
    },
    newDeck: {
      title: 'New deck',
      name: 'Label name',
      color: 'Color',
      colors: ['Red', 'Blue', 'Sand', 'Navy', 'Slate'],
    },
    missing: {
      complete: "Complete deck. Suspicious, but we'll take your word for it.",
      list: (cards) => `Missing: ${cards}. Tap a card to change.`,
      cardLabel: (rank, suit) => `${rank} of ${suit}`,
    },
    rebuild: {
      incomplete: (n) => `${n} incomplete decks`,
      cta: 'Rebuild my decks',
      result: 'full decks can be rebuilt',
      moves: 'Cards to move',
      replay: 'Do the trick again',
    },
  },

  cta: {
    title: 'Your next deck is already in your drawer.',
    lede: 'You have the cards. All that is missing is the app.',
  },

  footer: {
    legal: (year) => `© ${year}. No cards were bent in the making of this site.`,
    navLabel: 'Legal links',
    contact: 'Contact',
    legalNotice: 'Legal notice',
    privacy: 'Privacy',
  },
}
