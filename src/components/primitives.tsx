import logoUrl from '../assets/logo.png'
import styles from './primitives.module.css'

/** Pastille de couleur d'un paquet */
export function Dot({ color, size = 12 }: { color: string; size?: number }) {
  return <span className={styles.dot} style={{ background: color, width: size, height: size }} />
}

/** Logo Deckmend. Décoratif : il est toujours accompagné du nom en texte. */
export function LogoMark({ size = 38 }: { size?: number }) {
  return <img className={styles.logo} src={logoUrl} alt="" width={size} height={size} />
}
