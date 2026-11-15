import { Link } from 'react-router-dom'
import { FooterBar, FooterLinks, FooterShare, FooterIconButton } from './AppFooter.styled'
import { NewTabHint } from './NewTabHint'
import { IconInstagram } from './icons/IconInstagram'

export function AppFooter() {
  return (
    <FooterBar>
      <span>Berner &amp; Wyss 2027. Regierungsratswahl Zürich.</span>
      <FooterLinks aria-label="Weitere Links">
        <Link to="/datenschutz">Datenschutz</Link>
        <Link to="/impressum">Impressum</Link>
        <a href="https://al-zh.ch" target="_blank" rel="noopener noreferrer">
          AL Zürich
          <NewTabHint />
        </a>
        <FooterShare>
          <FooterIconButton
            as="a"
            href="https://www.instagram.com/topsharing2027/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zusammen Mehr auf Instagram (öffnet in neuem Tab)"
          >
            <IconInstagram width="20" height="20" />
          </FooterIconButton>
        </FooterShare>
      </FooterLinks>
    </FooterBar>
  )
}
