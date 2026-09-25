import type { PlatformId } from '../data/platforms'

/** Système mobile du visiteur, ou `null` sur ordinateur / système inconnu. */
export function detectMobilePlatform(): Extract<PlatformId, 'android' | 'ios'> | null {
  const ua = navigator.userAgent
  if (/android/i.test(ua)) return 'android'
  if (/iphone|ipad|ipod/i.test(ua)) return 'ios'
  // iPadOS se présente comme un Mac : on le reconnaît à son écran tactile
  if (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1) return 'ios'
  return null
}
