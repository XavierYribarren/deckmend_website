export type PlatformId = 'android' | 'ios' | 'desktop'

/**
 * Adresse de l'app web installable (PWA), la même pour toutes les plateformes.
 * Surchargeable au build : VITE_APP_URL=https://... npm run build
 */
export const APP_URL = import.meta.env.VITE_APP_URL ?? 'https://app.deckmend.com'

/** Ordre d'affichage des boutons. Les textes sont dans `t.platforms[id]` (src/i18n). */
export const PLATFORMS: PlatformId[] = ['android', 'ios', 'desktop']
