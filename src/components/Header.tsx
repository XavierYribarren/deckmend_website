import type { MouseEvent } from 'react'
import { useDownload } from '../download/context'
import { detectMobilePlatform } from '../download/detectPlatform'
import { useI18n } from '../i18n/context'
import { ArrowDown } from './icons'
import { LanguageToggle } from './LanguageToggle'
import { LogoMark } from './primitives'
import styles from './Header.module.css'

export function Header() {
  const { t } = useI18n()
  const { openInstall } = useDownload()

  // Sur mobile, on ouvre directement les instructions du bon système ;
  // sur ordinateur, le lien descend au bloc de téléchargement.
  const onDownload = (e: MouseEvent<HTMLAnchorElement>) => {
    const platform = detectMobilePlatform()
    if (!platform) return
    e.preventDefault()
    openInstall(platform)
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.brand}>
          <LogoMark />
          <span className={styles.wordmark}>Deckmend</span>
        </a>
        <nav className={styles.nav} aria-label={t.header.navLabel}>
          <a href="#probleme" className={styles.navLink}>{t.header.problem}</a>
          <a href="#etapes" className={styles.navLink}>{t.header.how}</a>
        </nav>
        <div className={styles.end}>
          <LanguageToggle />
          <a href="#telecharger" className={styles.cta} onClick={onDownload}>
            <span className={styles.ctaLabel}>{t.header.download}</span>
            <ArrowDown />
          </a>
        </div>
      </div>
    </header>
  )
}
