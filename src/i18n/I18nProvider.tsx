import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { I18nContext } from './context'
import { detectLocale, LOCALES, saveLocale, type Locale } from './locales'

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)
  const t = LOCALES[locale]

  // Choix explicite de l'utilisateur : on le mémorise et on retire `?lang=` de l'URL,
  // sinon un rechargement réimposerait l'ancienne langue
  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    saveLocale(next)
    const url = new URL(window.location.href)
    if (url.searchParams.has('lang')) {
      url.searchParams.delete('lang')
      window.history.replaceState(null, '', url)
    }
  }, [])

  // Synchronise <html lang>, le titre et la description avec la langue courante
  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [locale, t])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
