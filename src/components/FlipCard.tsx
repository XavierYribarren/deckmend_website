import { useState } from 'react'
import { useI18n } from '../i18n/context'
import styles from './FlipCard.module.css'

/** Le petit tour du hero : on survole (ou touche) le dos de carte, elle se retourne. */
export function FlipCard() {
  const { t } = useI18n()
  const [flipped, setFlipped] = useState(false)

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.card}
        aria-pressed={flipped}
        aria-label={flipped ? t.flip.hide : t.flip.reveal}
        onMouseEnter={() => setFlipped(true)}
        onClick={() => setFlipped((f) => !f)}
      >
        <span className={`${styles.inner} ${flipped ? styles.flipped : ''}`}>
          <span className={styles.back}>
            <span className={styles.backFrame}>♦</span>
          </span>
          <span className={styles.face}>
            <span className={styles.rank}>7</span>♥
          </span>
        </span>
      </button>
      <p className={styles.caption} aria-live="polite">
        {flipped ? t.flip.revealed : t.flip.idle}
      </p>
    </div>
  )
}
