import { Link } from 'react-router-dom'
import { FooterBar, FooterLinks } from './AppFooter.styled'
import { IconInstagram } from './icons/IconInstagram'

export function AppFooter() {
  return (
    <FooterBar>
      <span>Berner &amp; Wyss 2027. Regierungsratswahl Zürich.</span>
      <FooterLinks>
        <Link to="/datenschutz">Datenschutz</Link>
        <Link to="/impressum">Impressum</Link>
        <a href="https://al-zh.ch" target="_blank" rel="noopener noreferrer">
          AL Zürich
        </a>
        <a
          href="https://www.instagram.com/topsharing2027/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Berner & Wyss 2027 auf Instagram"
        >
          <IconInstagram width="16" height="16" />
        </a>
      </FooterLinks>
    </FooterBar>
  )
}
