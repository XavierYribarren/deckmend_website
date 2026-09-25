import { useI18n } from '../i18n/context'
import { FlipCard } from './FlipCard'
import { PlatformButtons } from './PlatformButtons'
import { MediaPlaceholder } from './primitives'
import styles from './Hero.module.css'

function Title({ className }: { className: string }) {
  const { t } = useI18n()
  return (
    <h1 data-reveal className={className}>
      <span className={styles.line}>{t.hero.line1}</span>
      <span className={styles.line}>
        {t.hero.line2}
        <strong className={styles.bold}>{t.hero.line2Bold}</strong>
      </span>
    </h1>
  )
}

/**
 * Variante A (par défaut) : titre + média 4:5 côte à côte.
 * Variante B : titre plein cadre, média 16:9 sous les boutons. Visible avec `?hero=B`.
 */
export function Hero({ variant = 'A' }: { variant?: 'A' | 'B' }) {
  const { t } = useI18n()

  if (variant === 'B') {
    return (
      <section className={`${styles.hero} ${styles.heroB}`} aria-label={t.hero.label}>
        <Title className={`${styles.title} ${styles.titleB}`} />
        <div data-reveal data-delay="150" className={styles.introB}>
          <p className={`${styles.pitch} ${styles.pitchB}`}>{t.hero.pitch}</p>
          <FlipCard />
        </div>
        <PlatformButtons tone="onLight" />
        <MediaPlaceholder wide className={styles.mediaB} />
      </section>
    )
  }

  return (
    <section className={styles.hero} aria-label={t.hero.label}>
      <div className={styles.split}>
        <div className={styles.copy}>
          <Title className={styles.title} />
          <div data-reveal data-delay="150" className={styles.intro}>
            <p className={styles.pitch}>{t.hero.pitch}</p>
            <FlipCard />
          </div>
        </div>
        <MediaPlaceholder className={styles.mediaA} />
      </div>
      <PlatformButtons tone="onLight" />
    </section>
  )
}
