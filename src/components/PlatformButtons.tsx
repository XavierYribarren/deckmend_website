import { PLATFORMS } from '../data/platforms'
import { useDownload } from '../download/context'
import { useI18n } from '../i18n/context'
import { ArrowRight, PlatformIcon } from './icons'
import styles from './PlatformButtons.module.css'

interface Props {
  /** `onLight` : boutons encre sur fond clair (hero). `onInk` : boutons blancs sur fond encre (CTA). */
  tone: 'onLight' | 'onInk'
  minWidth?: number
}

export function PlatformButtons({ tone, minWidth = 260 }: Props) {
  const { t } = useI18n()
  const { openInstall } = useDownload()

  return (
    <div className={styles.grid} style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minWidth}px), 1fr))` }}>
      {PLATFORMS.map((p) => {
        const copy = t.platforms[p.id]
        return p.available ? (
          <button
            key={p.id}
            type="button"
            className={`${styles.btn} ${styles.live} ${styles[tone]}`}
            aria-haspopup="dialog"
            onClick={() => openInstall(p.id)}
          >
            <span className={styles.icon}><PlatformIcon id={p.id} /></span>
            <span className={styles.text}>
              <span className={styles.kicker}>{copy.kicker}</span>
              <span className={styles.label}>{copy.label}</span>
            </span>
            <ArrowRight className={styles.arrow} />
          </button>
        ) : (
          <div key={p.id} className={`${styles.btn} ${styles.soon} ${styles[tone]}`} aria-disabled="true">
            <span className={styles.icon}><PlatformIcon id={p.id} /></span>
            <span className={`${styles.text} ${styles.textSoon}`}>
              <span className={styles.tag}>{t.platforms.soon}</span>
              <span className={styles.label}>{copy.label}</span>
            </span>
          </div>
        )
      })}
    </div>
  )
}
