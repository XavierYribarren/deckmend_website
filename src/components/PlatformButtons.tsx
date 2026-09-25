import type { MouseEvent } from 'react'
import { APP_URL, PLATFORMS, type PlatformId } from '../data/platforms'
import { useI18n } from '../i18n/context'
import { useInstall } from '../install/context'
import { ArrowRight, PlatformIcon } from './icons'
import styles from './PlatformButtons.module.css'

interface Props {
  /** `onLight` : boutons encre sur fond clair (hero). `onInk` : boutons blancs sur fond encre (CTA). */
  tone: 'onLight' | 'onInk'
  minWidth?: number
}

export function PlatformButtons({ tone, minWidth = 260 }: Props) {
  const { t } = useI18n()
  const { openInstall } = useInstall()

  // Clic simple : overlay d'instructions. Cmd/Ctrl/Maj + clic ou clic molette :
  // le lien s'ouvre normalement, directement sur l'app.
  const onClick = (id: PlatformId) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    openInstall(id)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.grid} style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minWidth}px), 1fr))` }}>
        {PLATFORMS.map((id) => (
          <a
            key={id}
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles[tone]}`}
            aria-haspopup="dialog"
            onClick={onClick(id)}
          >
            <span className={styles.icon}><PlatformIcon id={id} /></span>
            <span className={styles.text}>
              <span className={styles.kicker}>{t.platforms[id].kicker}</span>
              <span className={styles.label}>{t.platforms[id].label}</span>
            </span>
            <ArrowRight className={styles.arrow} />
          </a>
        ))}
      </div>
      <p className={`${styles.footnote} ${styles[tone]}`}>{t.platforms.footnote}</p>
    </div>
  )
}
