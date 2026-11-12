import { useEffect, useState } from 'react'
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

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    // Wird das Fenster breit genug für die Desktop-Leiste, das Overlay schliessen.
    const desktop = window.matchMedia(`(min-width: ${bp.lg})`)
    const onDesktop = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false)
    }
    // Seite hinter dem offenen Menü nicht scrollen lassen.
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onDesktop)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onDesktop)
    }
  }, [open])

  return (
    <NavBar>
      <Brand href="/#top" onClick={() => setOpen(false)}>
        zusammen mehr
      </Brand>
      <MenuToggle
        type="button"
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
        onClick={() => setOpen((o) => !o)}
      >
        <IconMenu open={open} />
      </MenuToggle>
      <Nav aria-label="Hauptnavigation">
        <NavList id="site-menu" $open={open}>
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
