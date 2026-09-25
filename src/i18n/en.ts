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

  placeholders: {
    media: 'Media placeholder',
    mediaWide: 'Full-width media placeholder',
    mediaFormat: (ratio) => `Image or animation, ${ratio}`,
    mediaHint: 'Drop the hero visual here',
  },

  header: {
    navLabel: 'Main',
    language: 'Language',
    problem: 'The problem',
    how: 'How it works',
    download: 'Download',
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
    soon: 'Coming soon',
    android: {
      kicker: 'Android · APK file',
      label: 'Download the APK',
      install: {
        title: 'Install the APK on Android',
        intro: "Deckmend isn't on the Play Store (yet): you install the app directly, in four moves.",
        steps: [
          { title: 'Download the file', body: 'Tap the button below from your phone. The deckmend.apk file lands in your downloads.' },
          { title: 'Open it', body: 'From the download notification, or through the Files app › Downloads.' },
          { title: 'Allow the install', body: 'If Android blocks it, tap Settings and turn on “Allow from this source” for your browser. You only do this once.' },
          { title: 'Install', body: 'Tap Install. If Play Protect gets nervous, choose “Install anyway”: the app asks for no sensitive permissions.' },
        ],
        note: 'On a computer? Open this page from your Android phone, or transfer the file over USB.',
        meta: (version) => `Version ${version} · Android 8 and up`,
        cta: 'Download the APK',
      },
    },
    ios: {
      kicker: 'iPhone · web app',
      label: 'Install on iPhone',
      install: {
        title: 'Install Deckmend on iPhone',
        intro: 'On iPhone, Deckmend installs as a web app: no App Store, no account. It then opens full screen, like any other app.',
        steps: [
          { title: 'Open the app in Safari', body: 'Tap the button below from your iPhone. If the page opens in another browser, copy the link into Safari.' },
          { title: 'Tap Share', body: 'The square icon with an arrow pointing up, at the bottom of the screen (at the top on iPad).' },
          { title: 'Add it to your Home Screen', body: 'Scroll down, pick “Add to Home Screen”, then tap Add. Deckmend joins your apps.' },
        ],
        note: 'From then on, launch Deckmend from its icon rather than from Safari: full screen, and updates arrive on their own.',
        meta: () => 'iPhone and iPad · Safari recommended',
        cta: 'Open the web app',
      },
    },
    web: {
      kicker: 'Nothing to install',
      label: 'Web version',
    },
  },

  dialog: {
    close: 'Close',
    noteTag: 'Good to know',
    started: 'Download started. Try again?',
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
