export type PlatformId = 'android' | 'ios' | 'web'

/** Config technique des plateformes. Les textes sont dans `t.platforms[id]` (src/i18n). */
export interface Platform {
  id: PlatformId
  available: boolean
  install?: {
    href: string
    /** Nom de fichier proposé : déclenche un vrai téléchargement plutôt qu'une navigation */
    download?: string
    /** Ouvre un nouvel onglet (app web) */
    external?: boolean
  }
}

// Surchargeables au build : VITE_APK_URL=... VITE_PWA_URL=... npm run build
const APK_URL = import.meta.env.VITE_APK_URL ?? '/downloads/deckmend.apk'
const PWA_URL = import.meta.env.VITE_PWA_URL ?? '/app/'
export const APP_VERSION = import.meta.env.VITE_APP_VERSION ?? '1.0.0'

export const PLATFORMS: Platform[] = [
  { id: 'android', available: true, install: { href: APK_URL, download: 'deckmend.apk' } },
  { id: 'ios', available: true, install: { href: PWA_URL, external: true } },
  { id: 'web', available: false },
]
