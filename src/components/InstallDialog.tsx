import { useEffect, useId, useRef, useState, type MouseEvent } from 'react'
import { APP_URL, type PlatformId } from '../data/platforms'
import { useI18n } from '../i18n/context'
import { AddSquare, Close, Compass, External, PlatformIcon, Share } from './icons'
import styles from './InstallDialog.module.css'

interface Props {
  platform: PlatformId | null
  onClose: () => void
}

const GESTURE_ICONS = [Compass, Share, AddSquare]

/** Les trois gestes d'installation sur iPhone, en vignettes */
function IosGesture() {
  const { t } = useI18n()
  const { label, steps } = t.dialog.iosGesture
  return (
    <ol className={styles.gesture} aria-label={label}>
      {steps.map((step, i) => {
        const Icon = GESTURE_ICONS[i]
        return (
          <li key={step} className={styles.gestureStep}>
            <span className={styles.gestureTile}>
              <span className={styles.gestureNum} aria-hidden="true">{i + 1}</span>
              <span className={styles.gestureKey}><Icon /></span>
            </span>
            <span className={styles.gestureText}>{step}</span>
          </li>
        )
      })}
    </ol>
  )
}

export function InstallDialog({ platform, onClose }: Props) {
  const { t } = useI18n()
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  // On garde le dernier contenu affiché pour que la transition de sortie ne montre pas un panneau vide
  const [shown, setShown] = useState(platform)
  if (platform && platform !== shown) setShown(platform)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (platform && !dialog.open) dialog.showModal()
    if (!platform && dialog.open) dialog.close()
  }, [platform])

  // Clic sur le voile (hors du panneau) : fermeture
  const onBackdrop = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) e.currentTarget.close()
  }

  const copy = shown ? t.platforms[shown] : null

  return (
    <dialog ref={ref} className={styles.dialog} aria-labelledby={titleId} onClose={onClose} onClick={onBackdrop}>
      {shown && copy && (
        <>
          <div className={styles.panel}>
            <header className={styles.head}>
              <span className={styles.badge}>
                <PlatformIcon id={shown} />
              </span>
              <div className={styles.headText}>
                <span className={styles.kicker}>{copy.kicker}</span>
                <h2 id={titleId} className={styles.title}>{copy.install.title}</h2>
              </div>
              <button type="button" className={styles.close} aria-label={t.dialog.close} onClick={() => ref.current?.close()}>
                <Close />
              </button>
            </header>

            <p className={styles.intro}>{copy.install.intro}</p>

            {shown === 'ios' && <IosGesture />}

            <p className={styles.note}>
              <span className={styles.noteTag}>{t.dialog.noteTag}</span>
              {copy.install.note}
            </p>
          </div>

          <div className={styles.actions}>
            <a className={styles.cta} href={APP_URL} target="_blank" rel="noopener noreferrer">
              <span>{t.dialog.cta}</span>
              <External />
            </a>
          </div>
        </>
      )}
    </dialog>
  )
}
