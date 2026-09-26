import React, { useEffect, useState } from 'react';
import './CardFan.css';

type Suit = 'spades' | 'hearts';

interface CardDef {
  rank: string;
  suit: Suit;
}

const SUIT_SYMBOL: Record<Suit, string> = {
  spades: '♠',
  hearts: '♥',
};

// Overridable from the host page via CSS custom properties.
const SUIT_COLOR: Record<Suit, string> = {
  spades: 'var(--card-fan-spades, #2c2c2a)',
  hearts: 'var(--card-fan-hearts, #d4537e)',
};

// Real ranks used to fill the deck. "8" is deliberately excluded here: the
// deck's single eight of spades is appended explicitly in buildDeck so it
// always lands as the very last card (highest z-index, always in front).
const BASE_RANKS = ['A', '2', '3', '4', '5', '6', '7', '9', '10', 'J', 'Q'];

const PIP_LAYOUTS: Record<string, Array<[number, number]>> = {
  '2': [[50, 25], [50, 75]],
  '3': [[50, 25], [50, 50], [50, 75]],
  '4': [[35, 25], [65, 25], [35, 75], [65, 75]],
  '5': [[35, 25], [65, 25], [50, 50], [35, 75], [65, 75]],
  '6': [[35, 22], [65, 22], [35, 50], [65, 50], [35, 78], [65, 78]],
  '7': [[35, 20], [65, 20], [35, 44], [65, 44], [50, 32], [35, 80], [65, 80]],
  '9': [[35, 18], [65, 18], [35, 38], [65, 38], [50, 50], [35, 62], [65, 62], [35, 82], [65, 82]],
  '10': [[35, 15], [65, 15], [50, 26], [35, 38], [65, 38], [35, 62], [65, 62], [50, 74], [35, 85], [65, 85]],
};

interface EightPip {
  x: number;
  y: number;
  /** Bottom-half pips are drawn upside down, like on a real card. */
  flip?: boolean;
}

// Exact 3-2-3 layout of a real eight: three pips up top (2 sides + center),
// then five pips below flipped 180deg (2 + center + 2), matching the
// reference photo the design was checked against.
const EIGHT_PIPS: EightPip[] = [
  { x: 30, y: 15 },
  { x: 70, y: 15 },
  { x: 50, y: 30 },
  { x: 30, y: 48, flip: true },
  { x: 70, y: 48, flip: true },
  { x: 50, y: 65, flip: true },
  { x: 30, y: 85, flip: true },
  { x: 70, y: 85, flip: true },
];

const CARD_COUNT = 26;
const SPREAD_DEGREES = 130;

function buildDeck(): CardDef[] {
  const deck: CardDef[] = [];

  // Base run: every real rank, alternating spades/hearts.
  BASE_RANKS.forEach((rank) => {
    deck.push({ rank, suit: 'spades' });
    deck.push({ rank, suit: 'hearts' });
  });

  // Pad with harmless repeats up to CARD_COUNT - 2, leaving the last two
  // slots free for the eights below.
  let fillerIndex = 0;
  while (deck.length < CARD_COUNT - 2) {
    const rank = BASE_RANKS[fillerIndex % BASE_RANKS.length];
    const suit: Suit = deck.length % 2 === 0 ? 'spades' : 'hearts';
    deck.push({ rank, suit });
    fillerIndex++;
  }

  // The eight of hearts, then the eight of spades last: the spade eight is
  // always the final card in the array, so it always gets the highest
  // z-index and stays the front / most-visible card, before and after the
  // fan opens.
  deck.push({ rank: '8', suit: 'hearts' });
  deck.push({ rank: '8', suit: 'spades' });

  return deck;
}

interface CardFaceProps {
  rank: string;
  suit: Suit;
}

function CardFace({ rank, suit }: CardFaceProps) {
  const color = SUIT_COLOR[suit];
  const symbol = SUIT_SYMBOL[suit];

  // Rank 8 gets the accurate real-card layout: corner index top-left AND
  // bottom-right (rotated), plus the flipped 3-2-3 pip arrangement.
  if (rank === '8') {
    return (
      <>
        <span className="card-fan__corner card-fan__corner--top-left" style={{ color }}>
          <span className="card-fan__corner-rank">{rank}</span>
          <span className="card-fan__corner-suit">{symbol}</span>
        </span>
        <span className="card-fan__corner card-fan__corner--bottom-right" style={{ color }}>
          <span className="card-fan__corner-rank">{rank}</span>
          <span className="card-fan__corner-suit">{symbol}</span>
        </span>
        {EIGHT_PIPS.map((pip, idx) => (
          <span
            key={idx}
            className="card-fan__pip card-fan__pip--large"
            style={{
              left: `${pip.x}%`,
              top: `${pip.y}%`,
              color,
              transform: `translate(-50%, -50%)${pip.flip ? ' rotate(180deg)' : ''}`,
            }}
          >
            {symbol}
          </span>
        ))}
      </>
    );
  }

  const layout = PIP_LAYOUTS[rank];

  return (
    <>
      <span className="card-fan__corner card-fan__corner--simple" style={{ color }}>
        {rank}
        {symbol}
      </span>
      {layout ? (
        layout.map(([x, y], idx) => (
          <span
            key={idx}
            className="card-fan__pip"
            style={{ left: `${x}%`, top: `${y}%`, color }}
          >
            {symbol}
          </span>
        ))
      ) : (
        <span className="card-fan__center-symbol" style={{ color }}>
          {symbol}
        </span>
      )}
    </>
  );
}

export interface CardFanProps {
  /** Number of cards to render (default 26 = half a deck). */
  cardCount?: number;
  /** Total angular spread of the fan, in degrees (default 130). */
  spreadDegrees?: number;
  /** Autoplay the opening animation on mount (default true). */
  autoPlay?: boolean;
}

export function CardFan({ autoPlay = true }: CardFanProps = {}) {
  // Built once; a lazy state initializer keeps it out of the render path.
  const [deck] = useState<CardDef[]>(buildDeck);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = window.setTimeout(() => setOpen(true), 150);
    return () => window.clearTimeout(timer);
  }, [autoPlay]);

  const start = -SPREAD_DEGREES / 2;
  const step = SPREAD_DEGREES / (CARD_COUNT - 1);

  return (
    <div className="card-fan">
      <div className="card-fan__stage" aria-hidden="true">
        <div className="card-fan__fan">
          {deck.map((card, i) => {
            const angle = start + i * step;

            // Depth is constant, never animated: only rotateZ transitions.
            // Animating translateZ per card (with staggered delays) made the
            // browser's real-time 3D depth sorting momentarily disagree with
            // the intended stacking order mid-transition, which looked like
            // cards swapping/flickering instead of smoothly rotating. With a
            // fixed depth, only the rotation moves, so stacking order (by
            // z-index) never changes during the animation.
            const depth = (i / (CARD_COUNT - 1)) * 34;

            const style = {
              // Closed state: every card sits at the leftmost angle (not 0),
              // so opening is a single left-to-right sweep — not a
              // two-directional spread out of the middle.
              '--angle': open ? `${angle}deg` : `${start}deg`,
              // Scaled with the rest of the fan (see --card-fan-unit in the CSS).
              '--depth': `calc(${depth} * var(--u))`,
              // Delay decreases with z-index: the topmost card (highest i)
              // starts rotating first, and the cards underneath follow in
              // sequence, instead of the bottom cards leading.
              '--delay': `${(CARD_COUNT - 1 - i) * 0.015}s`,
              zIndex: i,
            } as React.CSSProperties;

            return (
              <div key={i} className="card-fan__card" style={style}>
                <CardFace rank={card.rank} suit={card.suit} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardFan;
