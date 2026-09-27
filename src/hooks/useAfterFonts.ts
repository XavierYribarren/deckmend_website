import { useEffect, useState } from 'react'

/**
 * Passe à `true` `delay` ms après le chargement des polices, pour lancer une animation
 * une fois la typographie en place. `maxWait` borne l'attente si les polices tardent.
 */
export function useAfterFonts(delay: number, maxWait = 1500) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let started = false
    let timer: number | undefined
    const start = () => {
      if (started) return
      started = true
      timer = window.setTimeout(() => setReady(true), delay)
    }
    document.fonts.ready.then(start)
    const cap = window.setTimeout(start, maxWait)
    return () => {
      started = true
      window.clearTimeout(timer)
      window.clearTimeout(cap)
    }
  }, [delay, maxWait])

  return ready
}
