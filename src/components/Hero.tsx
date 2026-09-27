import type { CSSProperties } from 'react'
import { useAfterFonts } from '../hooks/useAfterFonts'
import { useI18n } from '../i18n/context'
import { CardFan } from './CardFan'
import { PlatformButtons } from './PlatformButtons'
import styles from './Hero.module.css'

/*
 * Orchestration de l'arrivée. La mise en page est définitive dès le premier affichage :
 * seules l'opacité et `transform` s'animent.
 *   0 ms     titre, ligne 1
 *   80 ms    titre, ligne 2
 *   160 ms   accroche
 *   240 ms   boutons d'installation (tôt : l'action est disponible tout de suite)
 *   polices chargées + ~300 ms : ouverture de l'éventail
 */
const enter = (delayMs: number) => ({ '--d': `${delayMs}ms` }) as CSSProperties

function Title({ className }: { className: string }) {
  const { t } = useI18n()
  return (
    <h1 className={className}>
      <span className={`${styles.line} ${styles.enter}`} style={enter(0)}>{t.hero.line1}</span>
      <span className={`${styles.line} ${styles.enter}`} style={enter(80)}>
        {t.hero.line2}
        <strong className={styles.bold}>{t.hero.line2Bold}</strong>
      </span>
    </h1>
  )
}

/** Panneau média du hero : l'éventail de cartes, mis à l'échelle et aux couleurs du site */
function HeroMedia({ className }: { className: string }) {
  // CardFan ajoute lui-même 150 ms avant d'ouvrir : ~300 ms après les polices au total
  const ready = useAfterFonts(150)
  return (
    <div className={`${styles.media} ${styles.fadeIn} ${className}`}>
      <CardFan autoPlay={ready} />
    </div>
  )
}

/**
 * Variante A (par défaut) : titre + éventail côte à côte.
 * Variante B : titre plein cadre, éventail 16:9 sous les boutons. Visible avec `?hero=B`.
 */
export function Hero({ variant = 'A' }: { variant?: 'A' | 'B' }) {
  const { t } = useI18n()

  if (variant === 'B') {
    return (
      <section className={`${styles.hero} ${styles.heroB}`} aria-label={t.hero.label}>
        <Title className={`${styles.title} ${styles.titleB}`} />
        <p className={`${styles.pitch} ${styles.pitchB} ${styles.enter}`} style={enter(160)}>{t.hero.pitch}</p>
        <div className={`${styles.above} ${styles.enter}`} style={enter(240)}>
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
          <p className={`${styles.pitch} ${styles.enter}`} style={enter(160)}>{t.hero.pitch}</p>
        </div>
        <HeroMedia className={styles.mediaA} />
      </div>
      <div className={`${styles.above} ${styles.enter}`} style={enter(240)}>
        <PlatformButtons tone="onLight" />
      </div>
    </section>
  )
}
