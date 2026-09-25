import { useI18n } from '../i18n/context'
import { LogoMark } from './primitives'
import styles from './Footer.module.css'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <LogoMark size={32} />
        <span className={styles.wordmark}>Deckmend</span>
      </div>
      <span className={styles.legal}>{t.footer.legal(new Date().getFullYear())}</span>
      <nav className={styles.links} aria-label={t.footer.navLabel}>
        <a href="#">{t.footer.contact}</a>
        <a href="#">{t.footer.legalNotice}</a>
        <a href="#">{t.footer.privacy}</a>
      </nav>
    </footer>
  )
}
