import type { ReactNode } from 'react'
import { useI18n } from '../../i18n/context'
import styles from './steps.module.css'

interface Props {
  /** Index de l'étape (0 à 3) ; titre et texte viennent de `t.steps.items` */
  index: number
  /** Classe additionnelle pour le panneau de démo */
  panelClassName?: string
  children: ReactNode
}

export function StepRow({ index, panelClassName, children }: Props) {
  const { t } = useI18n()
  const { title, text } = t.steps.items[index]
  return (
    <div className={styles.row}>
      <div data-reveal className={styles.copy}>
        <span className={styles.num} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <h3 className={styles.title}>
          <span className="sr-only">{t.steps.stepLabel(index + 1)}</span>
          {title}
        </h3>
        <p className={styles.text}>{text}</p>
      </div>
      <div data-reveal data-delay="120" className={`${styles.panel} ${panelClassName ?? ''}`}>
        {children}
      </div>
    </div>
  )
}
