import { useEffect, useRef, useState } from 'react'
import { DECKS, MOVES } from '../../data/cards'
import { useI18n } from '../../i18n/context'
import { ArrowRight } from '../icons'
import { Dot } from '../primitives'
import styles from './steps.module.css'

export function RebuildDemo() {
  const { t } = useI18n()
  const copy = t.steps.rebuild
  const [rebuilt, setRebuilt] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  // Entrée en cascade du résultat
  useEffect(() => {
    if (!rebuilt || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    rootRef.current?.querySelectorAll('[data-move]').forEach((el, i) =>
      el.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], {
        duration: 500,
        delay: 80 + i * 110,
        easing: 'cubic-bezier(.2,.7,.2,1)',
        fill: 'backwards',
      }),
    )
  }, [rebuilt])

  return (
    <div ref={rootRef} className={styles.rebuild} aria-live="polite">
      {!rebuilt ? (
        <>
          <div className={styles.rebuildTitle}>{copy.incomplete(DECKS.length)}</div>
          <div className={styles.list}>
            {DECKS.map((d) => (
              <div key={d.id} className={styles.listRow}>
                <Dot color={d.color} />
                <span className={styles.listName}>{t.cards.decks[d.id]}</span>
                <span className={styles.deckCount}>{d.count}/52</span>
              </div>
            ))}
          </div>
          <button type="button" className={styles.rebuildBtn} onClick={() => setRebuilt(true)}>
            {copy.cta}
            <ArrowRight />
          </button>
        </>
      ) : (
        <>
          <div data-move className={styles.result}>
            <span className={styles.resultNum}>4</span>
            <span className={styles.resultText}>{copy.result}</span>
          </div>
          <div className={styles.movesTitle}>{copy.moves}</div>
          <ul className={`${styles.list} ${styles.moves}`}>
            {MOVES.map((m) => (
              <li key={m.rank + m.suit} data-move className={styles.move}>
                <span className={styles.miniCard} style={{ color: m.suitColor }}>
                  <span className={styles.miniRank}>{t.cards.ranks[m.rank]}</span>
                  <span className={styles.miniSuit}>{m.suit}</span>
                </span>
                <span className={styles.from}>
                  <Dot color={m.from.color} size={9} />
                  {t.cards.decks[m.from.id]}
                </span>
                <ArrowRight size={14} />
                <span className={styles.to}>
                  <Dot color={m.to.color} size={9} />
                  {t.cards.decks[m.to.id]}
                </span>
              </li>
            ))}
          </ul>
          <button type="button" className={styles.replay} onClick={() => setRebuilt(false)}>
            {copy.replay}
          </button>
        </>
      )}
    </div>
  )
}
