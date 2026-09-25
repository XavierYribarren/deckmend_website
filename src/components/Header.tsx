import type { MouseEvent } from 'react'
import { useI18n } from '../i18n/context'
import { useInstall } from '../install/context'
import { detectMobilePlatform } from '../install/detectPlatform'
import { ArrowDown } from './icons'
import { LanguageToggle } from './LanguageToggle'
import { LogoMark } from './primitives'
import styles from './Header.module.css'

export function Header() {
  const { t } = useI18n()
  const { openInstall } = useInstall()

  // Sur mobile, on ouvre directement les instructions du bon système ;
  // sur ordinateur, le lien descend au bloc d'installation.
  const onInstall = (e: MouseEvent<HTMLAnchorElement>) => {
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
          <a href="#installer" className={styles.cta} onClick={onInstall}>
            <span className={styles.ctaLabel}>{t.header.install}</span>
            <ArrowDown />
          </a>
        </div>
      </div>
    </header>
  )
}
