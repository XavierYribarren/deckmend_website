import { useEffect } from 'react'

/**
 * Fait apparaître en fondu les éléments `[data-reveal]` quand ils entrent dans l'écran.
 * `data-delay` (ms) décale l'animation. Ceux déjà visibles au chargement ne bougent pas.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const show = (el: HTMLElement) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target as HTMLElement)
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )

    const vh = window.innerHeight
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.top < vh && r.bottom > 0) return
      const d = Number(el.dataset.delay ?? 0)
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      el.style.transition = `opacity .9s ease ${d}ms, transform 1s cubic-bezier(.2,.7,.2,1) ${d}ms`
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])
}
