import { DECKS, type DeckId } from '../../data/cards'
import { useI18n } from '../../i18n/context'
import { Dot } from '../primitives'
import styles from './steps.module.css'

const BOXES: { id: DeckId; rotate: number }[] = [
  { id: 'bicycleRed', rotate: -2 },
  { id: 'tallyHo', rotate: 1.5 },
  { id: 'bee', rotate: -1 },
]

export function LabelBoxesDemo() {
  const { t } = useI18n()
  const { timing } = t.steps
  return (
    <>
      <div className={styles.boxes}>
        {BOXES.map((b) => (
          <div key={b.id} className={styles.box}>
            <div className={styles.boxLid} />
            <div className={styles.label} style={{ transform: `rotate(${b.rotate}deg)` }}>
              <Dot color={DECKS.find((d) => d.id === b.id)!.color} size={10} />
              <span>{t.cards.decks[b.id]}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.timing}>
        <div className={`${styles.timingCard} ${styles.timingOnce}`}>
          <strong>{timing.onceTitle}</strong>
          <span>{timing.onceText}</span>
        </div>
        <div className={styles.timingCard}>
          <strong>{timing.thenTitle}</strong>
          <span className={styles.muted}>{timing.thenText}</span>
        </div>
      </div>
    </>
  )
}
