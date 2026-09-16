import { Link } from 'react-router-dom'
import { FooterBar, FooterLinks } from './AppFooter.styled'

export function AppFooter() {
  return (
    <FooterBar>
      <span>Berner &amp; Wyss 2027. Regierungsratswahl Zürich.</span>
      <FooterLinks>
        <Link to="/datenschutz">Datenschutz</Link>
        <Link to="/impressum">Impressum</Link>
      </FooterLinks>
    </FooterBar>
  )
}
