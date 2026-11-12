import { useEffect } from 'react'

/** Blöcke der Bänder unterhalb des Heros: Meta-Zeile und jede Spalte im Grid. */
const TARGETS =
  'main > section:not(:first-child) > :not(div), main > section:not(:first-child) > div > *'
const STAGGER_MS = 90
const DURATION_MS = 700

/**
 * Blendet Inhalte beim Scrollen sanft ein. Nur Elemente unterhalb des sichtbaren Bereichs werden
 * versteckt, damit nichts aufblitzt. Nach dem Einblenden wird das Attribut entfernt, damit keine
 * Transform-Reste Hover-Effekte oder fixe Overlays stören.
 */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight,
    )
    const timers: number[] = []

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement
            observer.unobserve(el)
            const delay = Math.min(i, 4) * STAGGER_MS
            el.style.setProperty('--reveal-delay', `${delay}ms`)
            el.dataset.reveal = 'shown'
            timers.push(
              window.setTimeout(
                () => {
                  delete el.dataset.reveal
                  el.style.removeProperty('--reveal-delay')
                },
                delay + DURATION_MS + 100,
              ),
            )
          })
      },
      { rootMargin: '0px 0px -10% 0px' },
    )

    els.forEach((el) => {
      el.dataset.reveal = 'hidden'
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
      timers.forEach(clearTimeout)
      els.forEach((el) => delete el.dataset.reveal)
    }
  }, [])
}
