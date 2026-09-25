import type { ReactNode } from 'react'
import { DECKS } from '../data/cards'
import { useI18n } from '../i18n/context'
import { Dot } from './primitives'
import typo from './type.module.css'
import styles from './ProblemSection.module.css'

const STACK_ROTATIONS = [-3, 2, -1.5, 3, -2]

function Point({ n, delay, children }: { n: number; delay?: number; children: ReactNode }) {
  const { t } = useI18n()
  const { title, text } = t.problem.points[n - 1]
  return (
    <div data-reveal data-delay={delay} className={styles.point}>
      <div className={styles.visual}>{children}</div>
      <div className={styles.pointHead}>
        <span className={styles.pointNum}>{n}</span>
        <h3 className={styles.pointTitle}>{title}</h3>
      </div>
      <p className={`${typo.body} ${styles.pointText}`}>{text}</p>
    </div>
  )
}

function DamagedCards() {
  const { t } = useI18n()
  const { ranks } = t.cards
  const { damage } = t.problem
  return (
    <div className={`${styles.visualCard} ${styles.damaged}`}>
      <figure className={styles.specimen}>
        <div className={`${styles.card} ${styles.folded}`}>
          <span className={styles.corner}>{ranks[6]}</span>♠<span className={styles.dogEar} />
        </div>
        <figcaption>{damage.folded}</figcaption>
      </figure>
      <figure className={styles.specimen}>
        <div className={`${styles.card} ${styles.red}`}>
          <span className={styles.corner}>{ranks[12]}</span>♦<span className={styles.scratch} />
        </div>
        <figcaption>{damage.marked}</figcaption>
      </figure>
      <figure className={styles.specimen}>
        <div className={styles.lost}>?</div>
        <figcaption>{damage.lost}</figcaption>
      </figure>
      <figure className={styles.specimen}>
        <div className={styles.torn}>
          <div className={styles.tornTop}>{ranks[11]}</div>
          <div className={styles.tornBottom}>♣</div>
        </div>
        <figcaption>{damage.sacrificed}</figcaption>
      </figure>
    </div>
  )
}

function EmptyingDecks() {
  const { t } = useI18n()
  return (
    <div className={`${styles.visualCard} ${styles.bars}`}>
      {DECKS.slice(0, 4).map((d) => (
        <div key={d.id} className={styles.bar}>
          <div className={styles.barHead}>
            <Dot color={d.color} />
            <span className={styles.barName}>{t.cards.decks[d.id]}</span>
            <span className={styles.barCount}>
              {d.count}/52<span className={styles.unit}> {t.cards.unit}</span>
            </span>
          </div>
          <div className={styles.track}>
            <div className={styles.fill} style={{ width: `${((d.count / 52) * 100).toFixed(1)}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function Drawer() {
  const { t } = useI18n()
  return (
    <div className={`${styles.visualCard} ${styles.drawer}`}>
      {DECKS.map((d, i) => (
        <div
          key={d.id}
          className={styles.chip}
          style={{ left: 14 + i * 22, top: 156 - i * 30, transform: `rotate(${STACK_ROTATIONS[i]}deg)` }}
        >
          <Dot color={d.color} size={10} />
          <span className={styles.chipName}>{t.cards.decks[d.id]}</span>
          <span className={styles.chipCount}>{d.count}/52</span>
        </div>
      ))}
      <span className={styles.total}>{t.problem.together}</span>
    </div>
  )
}

export function ProblemSection() {
  const { t } = useI18n()
  return (
    <section id="probleme" className={styles.section}>
      <div className={styles.head}>
        <h2 data-reveal className={`${typo.sectionTitle} ${styles.title}`}>{t.problem.title}</h2>
        <p data-reveal data-delay="100" className={`${typo.lede} ${styles.lede}`}>{t.problem.lede}</p>
      </div>
      <div className={styles.grid}>
        <Point n={1}>
          <DamagedCards />
        </Point>
        <Point n={2} delay={120}>
          <EmptyingDecks />
        </Point>
        <Point n={3} delay={240}>
          <Drawer />
        </Point>
      </div>
    </section>
  )
}
