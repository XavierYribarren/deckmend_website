import { createContext, useContext } from 'react'
import type { Messages } from './fr'
import type { Locale } from './locales'

export interface I18nValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Messages
}

export const I18nContext = createContext<I18nValue | null>(null)

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n doit être utilisé dans <I18nProvider>')
  return ctx
}
