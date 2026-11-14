import { useEffect, useState } from 'react'
import { Band, BandMeta, Grid, Col, Display, Lead } from './Band.styled'
import { VisuallyHidden } from './VisuallyHidden.styled'
import { SupportPicker } from './SupportPicker'
import { SupportForm } from './SupportForm'
import { DonateDetails } from './DonateDetails'
import { DonateAnchor } from './SupportSection.styled'
import { DONATE_HASH, PANEL_ID, tabId, type SupportMode } from '../data/supportOptions'

const modeFromHash = (): SupportMode | null =>
  window.location.hash === DONATE_HASH ? 'give' : null

export function SupportSection() {
  const [mode, setMode] = useState<SupportMode>(() => modeFromHash() ?? 'help')

  // Links auf /#spenden (alter Menüpunkt, geteilte Links) öffnen direkt den Spenden-Tab.
  useEffect(() => {
    const onHash = () => {
      const next = modeFromHash()
      if (next) setMode(next)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <Band $tone="paper" id="unterstuetzen" aria-labelledby="unterstuetzen-titel">
      <BandMeta>
        <span>03 / Unterstützen</span>
      </BandMeta>
      <Grid>
        <Col $to={8}>
          <Display id="unterstuetzen-titel">
            unterstützen
            <VisuallyHidden>: Nicole Wyss und Melanie Berner in den Regierungsrat</VisuallyHidden>
          </Display>
        </Col>
        <Col $from={8}>
          <Lead>Drei Wege, wie du dabei bist. Wähl einen aus, oder mehrere nacheinander.</Lead>
        </Col>
        <Col>
          <DonateAnchor id={DONATE_HASH.slice(1)} />
          <SupportPicker active={mode} onSelect={setMode} />
          <div role="tabpanel" id={PANEL_ID} aria-labelledby={tabId(mode)}>
            {mode === 'give' ? <DonateDetails /> : <SupportForm key={mode} mode={mode} />}
          </div>
        </Col>
      </Grid>
    </Band>
  )
}
