import logoUrl from '../assets/logo.png'
import { useI18n } from '../i18n/context'
import { Image } from './icons'
import styles from './primitives.module.css'

/** Pastille de couleur d'un paquet */
export function Dot({ color, size = 12 }: { color: string; size?: number }) {
  return <span className={styles.dot} style={{ background: color, width: size, height: size }} />
}

/** Logo Deckmend. Décoratif : il est toujours accompagné du nom en texte. */
export function LogoMark({ size = 38 }: { size?: number }) {
  return <img className={styles.logo} src={logoUrl} alt="" width={size} height={size} />
}

/** Emplacement média (image ou animation) */
export function MediaPlaceholder({ wide = false, className }: { wide?: boolean; className?: string }) {
  const { t } = useI18n()
  return (
    <div className={`${styles.media} ${className ?? ''}`}>
      <div className={styles.mediaHead}>
        <span>{wide ? t.placeholders.mediaWide : t.placeholders.media}</span>
        <span className={styles.muted}>{t.placeholders.mediaFormat(wide ? '16:9' : '4:5')}</span>
      </div>
      <div className={styles.mediaFrame} />
      <div className={styles.mediaFoot}>
        <Image />
        {t.placeholders.mediaHint}
      </div>
    </div>
  )
}
