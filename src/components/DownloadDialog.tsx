import { useEffect, useId, useRef, useState, type MouseEvent } from 'react'
import { APP_VERSION, type Platform } from '../data/platforms'
import { useI18n } from '../i18n/context'
import { Close, Download, External, PlatformIcon } from './icons'
import styles from './DownloadDialog.module.css'

interface Props {
  platform: Platform | null
  onClose: () => void
}

export function DownloadDialog({ platform, onClose }: Props) {
  const { t } = useI18n()
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  // On garde le dernier contenu affiché pour que la transition de sortie ne montre pas un panneau vide
  const [shown, setShown] = useState(platform)
  const [started, setStarted] = useState(false)
  if (platform && platform !== shown) {
    setShown(platform)
    setStarted(false)
  }

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

  const install = shown?.install
  const copy = shown ? t.platforms[shown.id] : null
  // Seules les plateformes installables (pas « web ») ont des instructions
  const text = shown && shown.id !== 'web' ? t.platforms[shown.id].install : null

  return (
    <dialog ref={ref} className={styles.dialog} aria-labelledby={titleId} onClose={onClose} onClick={onBackdrop}>
      {shown && install && text && (
        <>
        <div className={styles.panel}>
          <header className={styles.head}>
            <span className={styles.badge}>
              <PlatformIcon id={shown.id} />
            </span>
            <div className={styles.headText}>
              <span className={styles.kicker}>{copy?.kicker}</span>
              <h2 id={titleId} className={styles.title}>{text.title}</h2>
            </div>
            <button type="button" className={styles.close} aria-label={t.dialog.close} onClick={() => ref.current?.close()}>
              <Close />
            </button>
          </header>

          <p className={styles.intro}>{text.intro}</p>

          <ol className={styles.steps}>
            {text.steps.map((step, i) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNum} aria-hidden="true">{i + 1}</span>
                <div className={styles.stepText}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className={styles.note}>
            <span className={styles.noteTag}>{t.dialog.noteTag}</span>
            {text.note}
          </p>
        </div>

        <div className={styles.actions}>
            <a
              className={styles.cta}
              href={install.href}
              download={install.download}
              {...(install.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onClick={() => setStarted(true)}
            >
              <span>{started && install.download ? t.dialog.started : text.cta}</span>
              {install.external ? <External /> : <Download />}
            </a>
            <span className={styles.meta}>{text.meta(APP_VERSION)}</span>
        </div>
        </>
      )}
    </dialog>
  )
}
