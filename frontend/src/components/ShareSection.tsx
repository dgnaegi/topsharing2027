import { useState } from 'react'
import { Band, BandMeta, Grid, Col, Display, Lead } from './Band.styled'
import { Button } from './Button.styled'
import { ShareActions, ShareButtonContent, ShareStatus } from './ShareSection.styled'
import { IconShare } from './icons/IconShare'
import { IconWhatsApp } from './icons/IconWhatsApp'

const SHARE_TEXT =
  'Melanie Berner und Nicole Wyss kandidieren 2027 für den Regierungsrat des Kantons Zürich.'

export function ShareSection() {
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
    <Band $tone="signal" id="teilen">
      <BandMeta>
        <span>04 / Teilen</span>
        <span>Berner &amp; Wyss 2027</span>
      </BandMeta>
      <Grid>
        <Col>
          <Display>teilen</Display>
        </Col>
        <Col $to={6}>
          <Lead>
            Erzähl weiter. Teile diese Seite mit Leuten, die Melanie und Nicole noch nicht kennen.
          </Lead>
        </Col>
        <Col $from={6}>
          <ShareActions>
            <Button type="button" onClick={handleShare} $variant="onSignal">
              <ShareButtonContent>
                <IconShare />
                Seite teilen
              </ShareButtonContent>
            </Button>
            <Button
              as="a"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              $variant="onSignal"
            >
              <ShareButtonContent>
                <IconWhatsApp />
                Auf WhatsApp teilen
              </ShareButtonContent>
            </Button>
          </ShareActions>
          <ShareStatus role="status" aria-live="polite">
            {status}
          </ShareStatus>
        </Col>
      </Grid>
    </Band>
  )
}
