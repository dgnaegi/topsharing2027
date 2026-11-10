import { useEffect, useState } from 'react'
import { NAV_ITEMS } from '../data/navigation'
import { NavBar, Brand, MenuToggle, NavList } from './SiteNav.styled'

export function SiteNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <NavBar>
      <Brand href="/#top">zusammen mehr</Brand>
      <MenuToggle
        type="button"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Schliessen' : 'Menü'}
      </MenuToggle>
      <nav aria-label="Hauptnavigation">
        <NavList id="site-menu" $open={open}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={`/#${item.id}`} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </NavList>
      </nav>
    </NavBar>
  )
}
