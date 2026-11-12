import { useEffect, useRef, useState } from 'react'
import { NAV_ITEMS } from '../data/navigation'
import { bp } from '../theme'
import { NavBar, Brand, MenuToggle, Nav } from './SiteNav.styled'
import { NavList, ItemNumber } from './SiteNavList.styled'
import { IconMenu } from './icons/IconMenu'
import { useActiveSection } from '../hooks/useActiveSection'

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const barRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }
    // Wird das Fenster breit genug für die Desktop-Leiste, das Overlay schliessen.
    const desktop = window.matchMedia(`(min-width: ${bp.lg})`)
    const onDesktop = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false)
    }
    // Seite hinter dem offenen Menü nicht scrollen lassen.
    document.body.style.overflow = 'hidden'
    // Alles hinter dem Overlay für Tastatur und Screenreader sperren, damit Tab im Menü bleibt.
    const bar = barRef.current
    const behind = Array.from(bar?.parentElement?.children ?? []).filter((el) => el !== bar)
    behind.forEach((el) => el.setAttribute('inert', ''))
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onDesktop)
    return () => {
      document.body.style.overflow = ''
      behind.forEach((el) => el.removeAttribute('inert'))
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onDesktop)
    }
  }, [open])

  return (
    <NavBar ref={barRef}>
      <Brand href="/#top" onClick={() => setOpen(false)}>
        zusammen mehr
      </Brand>
      <MenuToggle
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label="Menü"
        onClick={() => setOpen((o) => !o)}
      >
        <IconMenu open={open} />
      </MenuToggle>
      <Nav aria-label="Hauptnavigation">
        <NavList id="site-menu" role="list" $open={open}>
          {NAV_ITEMS.map((item, i) => (
            <li key={item.id}>
              <a
                href={`/#${item.id}`}
                aria-current={item.id === active ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <ItemNumber aria-hidden="true">{String(i + 1).padStart(2, '0')}</ItemNumber>
              </a>
            </li>
          ))}
        </NavList>
      </Nav>
    </NavBar>
  )
}
