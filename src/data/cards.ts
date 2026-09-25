/** Couleurs de pastille des paquets. Celles de la marque passent par les variables CSS. */
export const K = {
  navy: 'var(--dm-ink)',
  suit: 'var(--dm-suit)',
  blue: '#8FA8E8',
  tan: '#E8B87A',
  slate: '#6B6F85',
} as const

export type DeckId = 'bicycleRed' | 'bicycleBlue' | 'tallyHo' | 'bee' | 'aviator'

/** Nom affiché : `t.cards.decks[id]` */
export interface Deck {
  id: DeckId
  color: string
  /** Cartes présentes sur 52 */
  count: number
}

export const DECKS: Deck[] = [
  { id: 'bicycleRed', color: K.suit, count: 49 },
  { id: 'bicycleBlue', color: K.blue, count: 47 },
  { id: 'tallyHo', color: K.tan, count: 50 },
  { id: 'bee', color: K.navy, count: 44 },
  { id: 'aviator', color: K.slate, count: 46 },
]

/** Les rangs sont des index (0 = As … 12 = Roi) : leur libellé dépend de la langue (`t.cards.ranks`). */
export const RANK_COUNT = 13

/** Clé d'une carte : symbole de couleur + index de rang, ex. « ♥6 » pour le 7 de cœur */
export const cardKey = (glyph: string, rank: number) => `${glyph}${rank}`

export interface Suit {
  key: 'spade' | 'heart' | 'club' | 'diamond'
  glyph: string
  color: string
}

export const SUITS: Suit[] = [
  { key: 'spade', glyph: '♠', color: K.navy },
  { key: 'heart', glyph: '♥', color: K.suit },
  { key: 'club', glyph: '♣', color: K.navy },
  { key: 'diamond', glyph: '♦', color: K.suit },
]

/** Couleurs d'étiquette proposées ; libellés dans `t.steps.newDeck.colors`, même ordre. */
export const TAG_COLORS = [K.suit, K.blue, K.tan, K.navy, K.slate]

export interface Move {
  rank: number
  suit: string
  suitColor: string
  from: Deck
  to: Deck
}

const deck = (id: DeckId) => DECKS.find((d) => d.id === id)!

export const MOVES: Move[] = [
  { rank: 6, suit: '♥', suitColor: K.suit, from: deck('tallyHo'), to: deck('bicycleRed') },
  { rank: 11, suit: '♠', suitColor: K.navy, from: deck('bee'), to: deck('bicycleBlue') },
  { rank: 1, suit: '♦', suitColor: K.suit, from: deck('aviator'), to: deck('tallyHo') },
  { rank: 10, suit: '♣', suitColor: K.navy, from: deck('bicycleBlue'), to: deck('bee') },
]
