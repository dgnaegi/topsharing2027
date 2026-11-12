import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Liefert die id der Sektion, die gerade die Bildschirmmitte kreuzt. Nur auf Seiten, auf denen
 * die Sektionen existieren; sonst null.
 */
export function useActiveSection(ids: string[]): string | null {
  const { pathname } = useLocation()
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join(',')

  useEffect(() => {
    setActive(null)
    if (!('IntersectionObserver' in window)) return
    const els = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
          else setActive((cur) => (cur === e.target.id ? null : cur))
        })
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key, pathname])

  return active
}
