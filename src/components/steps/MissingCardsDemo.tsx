import { cardKey, RANK_COUNT, SUITS } from '../../data/cards'
import { useI18n } from '../../i18n/context'
import { Dot } from '../primitives'
import styles from './steps.module.css'

interface Props {
  name: string
  color: string
  missing: Record<string, boolean>
  onToggle: (key: string) => void
}

export function MissingCardsDemo({ name, color, missing, onToggle }: Props) {
  const { t } = useI18n()
  const { ranks, suits } = t.cards
  const copy = t.steps.missing
  const missingKeys = Object.keys(missing).filter((k) => missing[k])
  const pretty = (key: string) => ranks[Number(key.slice(1))] + key[0]

  return (
    <>
      <div className={styles.gridHead}>
        <Dot color={color} />
        <span className={styles.deckName}>{name.trim() || t.cards.unnamed}</span>
        <span className={styles.gridCount}>
          {52 - missingKeys.length}/52<span className={styles.unit}> {t.cards.unit}</span>
        </span>
      </div>
      <div className={styles.cardGrid}>
        {SUITS.map((suit) => (
          <div key={suit.key} className={styles.suitRow}>
            <span className={styles.suit} style={{ color: suit.color }} aria-hidden="true">{suit.glyph}</span>
            {Array.from({ length: RANK_COUNT }, (_, rank) => {
              const key = cardKey(suit.glyph, rank)
              const isMissing = !!missing[key]
              return (
                <button
                  key={key}
                  type="button"
                  className={`${styles.cell} ${isMissing ? styles.cellMissing : ''}`}
                  aria-label={copy.cardLabel(ranks[rank], suits[suit.key])}
                  aria-pressed={isMissing}
                  onClick={() => onToggle(key)}
                >
                  {ranks[rank]}
                </button>
              )
            })}
          </div>
        ))}
      </div>
      <div className={styles.hint} aria-live="polite">
        {missingKeys.length === 0 ? copy.complete : copy.list(missingKeys.map(pretty).join(', '))}
      </div>
    </>
  )
}
