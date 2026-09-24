import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FooterBar,
  FooterLinks,
  FooterShare,
  FooterIconButton,
  FooterStatus,
} from './AppFooter.styled'
import { IconShare } from './icons/IconShare'
import { IconWhatsApp } from './icons/IconWhatsApp'

const SHARE_TEXT =
  'Melanie Berner und Nicole Wyss kandidieren 2027 für den Regierungsrat des Kantons Zürich.'

export function AppFooter() {
  const [status, setStatus] = useState('')

  async function handleShare() {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, text: SHARE_TEXT, url })
      } catch {
        // Nutzer hat den Teilen-Dialog abgebrochen.
      }
      return
    }
    try {
      await navigator.clipboard.writeText(url)
      setStatus('Link kopiert.')
    } catch {
      setStatus('Der Link konnte nicht kopiert werden.')
    }
  }

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${window.location.href}`)}`

  return (
    <FooterBar>
      <span>Berner &amp; Wyss 2027. Regierungsratswahl Zürich.</span>
      <FooterLinks>
        <Link to="/datenschutz">Datenschutz</Link>
        <Link to="/impressum">Impressum</Link>
        <a href="https://al-zh.ch" target="_blank" rel="noopener noreferrer">
          AL Zürich
        </a>
        <FooterShare>
          <FooterIconButton type="button" onClick={handleShare} aria-label="Seite teilen">
            <IconShare width="16" height="16" />
          </FooterIconButton>
          <FooterIconButton
            as="a"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Auf WhatsApp teilen"
          >
            <IconWhatsApp width="16" height="16" />
          </FooterIconButton>
          <FooterStatus role="status" aria-live="polite">
            {status}
          </FooterStatus>
        </FooterShare>
      </FooterLinks>
    </FooterBar>
  )
}
