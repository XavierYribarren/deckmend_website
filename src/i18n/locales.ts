import { en } from './en'
import { fr, type Messages } from './fr'

/** Langues disponibles. Pour en ajouter une : créer `xx.ts` typé `Messages` et l'enregistrer ici. */
export const LOCALES = { fr, en } satisfies Record<string, Messages>

export type Locale = keyof typeof LOCALES

/** Utilisée quand aucune langue du navigateur n'est disponible */
export const FALLBACK_LOCALE: Locale = 'en'

const isLocale = (x: string): x is Locale => x in LOCALES

const STORAGE_KEY = 'deckmend.locale'

/** Mémorise le choix fait via le sélecteur (ignoré si le stockage est indisponible) */
export function saveLocale(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    /* navigation privée, stockage bloqué… */
  }
}

function savedLocale(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

/**
 * Ordre de priorité : `?lang=xx` dans l'URL (pratique pour tester),
 * puis choix mémorisé, puis première langue du navigateur disponible, sinon repli.
 */
export function detectLocale(): Locale {
  const forced = new URLSearchParams(window.location.search).get('lang')?.toLowerCase()
  if (forced && isLocale(forced)) return forced

  const saved = savedLocale()
  if (saved && isLocale(saved)) return saved

  const prefs = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const tag of prefs) {
    const base = tag.toLowerCase().split('-')[0]
    if (isLocale(base)) return base
  }
  return FALLBACK_LOCALE
}
