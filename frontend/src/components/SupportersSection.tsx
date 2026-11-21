import { useRef, useState } from 'react'
import { Band, BandMeta, Grid, Col, Display } from './Band.styled'
import { VisuallyHidden } from './VisuallyHidden.styled'
import { SupporterQuote } from './SupporterQuote'
import { SupportersList, NameButton } from './SupportersSection.styled'
import { SUPPORTERS } from '../data/supporters'

const PANEL_ID = 'stimmen-zitat'

export function SupportersSection() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * SUPPORTERS.length))
  const panelRef = useRef<HTMLElement>(null)

  if (SUPPORTERS.length === 0) return null
  const selected = SUPPORTERS[index]

  function select(i: number) {
    setIndex(i)
    const panel = panelRef.current
    if (panel && panel.getBoundingClientRect().top < 0) {
      const smooth = window.matchMedia('(prefers-reduced-motion: no-preference)').matches
      panel.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
    }
  }

  return (
    <Band $tone="paper" id="stimmen" aria-labelledby="stimmen-titel">
      <BandMeta>
        <span>03 / Stimmen</span>
      </BandMeta>
      <Grid>
        <Col>
          <Display id="stimmen-titel">
            stimmen
            <VisuallyHidden>
              : Menschen, die Nicole Wyss und Melanie Berner unterstützen
            </VisuallyHidden>
          </Display>
        </Col>
        <Col $to={9}>
          <SupporterQuote ref={panelRef} id={PANEL_ID} supporter={selected} />
        </Col>
        <Col $from={9}>
          <SupportersList aria-label="Namen">
            {SUPPORTERS.map((s, i) => (
              <li key={s.slug}>
                <NameButton
                  type="button"
                  aria-pressed={i === index}
                  aria-controls={PANEL_ID}
                  onClick={() => select(i)}
                >
                  {s.firstName}&nbsp;{s.lastName}
                </NameButton>
              </li>
            ))}
          </SupportersList>
        </Col>
      </Grid>
    </Band>
  )
}
