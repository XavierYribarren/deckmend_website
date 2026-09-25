import { useI18n } from '../i18n/context'
import { LOCALES, type Locale } from '../i18n/locales'
import styles from './LanguageToggle.module.css'

const CODES = Object.keys(LOCALES) as Locale[]

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div className={styles.toggle} role="group" aria-label={t.header.language}>
      {CODES.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          className={styles.option}
          aria-pressed={code === locale}
          title={LOCALES[code].meta.languageName}
          onClick={() => setLocale(code)}
        >
          <span aria-hidden="true">{code.toUpperCase()}</span>
          <span className="sr-only">{LOCALES[code].meta.languageName}</span>
        </button>
      ))}
    </div>
  )
}
