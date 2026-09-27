import { useId, useState, type MouseEvent } from 'react'
import { APP_URL, PLATFORMS, type PlatformId } from '../data/platforms'
import { useI18n } from '../i18n/context'
import { useInstall } from '../install/context'
import { detectMobilePlatform } from '../install/detectPlatform'
import { ArrowRight, ChevronDown, PlatformIcon } from './icons'
import styles from './PlatformButtons.module.css'

interface Props {
  /** `onLight` : boutons encre sur fond clair (hero). `onInk` : boutons blancs sur fond encre (CTA). */
  tone: 'onLight' | 'onInk'
  minWidth?: number
}

/**
 * Sur mobile : un seul bouton, celui du système détecté, et un lien « Autres appareils »
 * qui déplie les autres (filet de sécurité si la détection se trompe).
 * Sur ordinateur : les trois, car on y découvre souvent l'app pour l'installer sur son téléphone.
 */
export function PlatformButtons({ tone, minWidth = 260 }: Props) {
  const { t } = useI18n()
  const { openInstall } = useInstall()
  // Détecté avant le premier affichage : aucun saut de mise en page
  const [detected] = useState(detectMobilePlatform)
  const [showOthers, setShowOthers] = useState(false)
  const othersId = useId()

  // Clic simple : overlay d'instructions. Cmd/Ctrl/Maj + clic ou clic molette :
  // le lien s'ouvre normalement, directement sur l'app.
  const onClick = (id: PlatformId) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    openInstall(id)
  }

  const button = (id: PlatformId) => (
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
  )

  const grid = (ids: PlatformId[]) => (
    <div className={styles.grid} style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minWidth}px), 1fr))` }}>
      {ids.map(button)}
    </div>
  )

  const footnote = <p className={`${styles.footnote} ${styles[tone]}`}>{t.platforms.footnote}</p>

  if (!detected) {
    return (
      <div className={styles.wrap}>
        {grid(PLATFORMS)}
        {footnote}
      </div>
    )
  }

  return (
    <div className={styles.wrap}>
      {grid([detected])}
      <button
        type="button"
        className={`${styles.more} ${styles[tone]}`}
        aria-expanded={showOthers}
        aria-controls={othersId}
        onClick={() => setShowOthers((v) => !v)}
      >
        {t.platforms.otherDevices}
        <ChevronDown className={styles.chevron} />
      </button>
      <div id={othersId} className={styles.others} data-open={showOthers || undefined} inert={!showOthers}>
        <div className={styles.othersInner}>{grid(PLATFORMS.filter((id) => id !== detected))}</div>
      </div>
      {footnote}
    </div>
  )
}
