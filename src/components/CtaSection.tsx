import logoUrl from '../assets/logo-large.png'
import { useI18n } from '../i18n/context'
import { PlatformButtons } from './PlatformButtons'
import styles from './CtaSection.module.css'

export function CtaSection() {
  const { t } = useI18n()
  return (
    <section id="telecharger" className={styles.section}>
      <div className={styles.head}>
        <div className={styles.headText}>
          <h2 data-reveal className={styles.title}>{t.cta.title}</h2>
          <p data-reveal data-delay="100" className={styles.lede}>{t.cta.lede}</p>
        </div>
        {/* Icône façon app : à droite sur grand écran, à cheval sur le bord haut sur mobile */}
        <div className={styles.appIcon} aria-hidden="true">
          <img src={logoUrl} alt="" width={512} height={512} />
        </div>
      </div>
      <PlatformButtons tone="onInk" minWidth={240} />
    </section>
  )
}
