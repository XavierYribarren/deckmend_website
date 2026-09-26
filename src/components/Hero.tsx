import { useI18n } from '../i18n/context'
import { CardFan } from './CardFan'
import { FlipCard } from './FlipCard'
import { PlatformButtons } from './PlatformButtons'
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

/** Panneau média du hero : l'éventail de cartes, mis à l'échelle et aux couleurs du site */
function HeroMedia({ className }: { className: string }) {
  return (
    <div className={`${styles.media} ${className}`}>
      <CardFan />
    </div>
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
        <div className={styles.above}>
          <PlatformButtons tone="onLight" />
        </div>
        <HeroMedia className={styles.mediaB} />
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
        <HeroMedia className={styles.mediaA} />
      </div>
      <div className={styles.above}>
        <PlatformButtons tone="onLight" />
      </div>
    </section>
  )
}
