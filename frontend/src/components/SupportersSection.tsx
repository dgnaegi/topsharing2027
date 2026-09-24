import { useRef, useState } from 'react'
import { Band, BandMeta, Grid, Col, Display, Lead } from './Band.styled'
import { getSupportersSortedAlphabetically, type Supporter } from '../data/supporters'
import {
  SupportersList,
  SupporterItem,
  SupporterName,
  QuoteTrigger,
} from './SupportersSection.styled'
import { SupporterDetailDialog } from './SupporterDetailDialog'

export function SupportersSection() {
  const supporters = getSupportersSortedAlphabetically()
  const [selected, setSelected] = useState<Supporter | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  function openDetail(supporter: Supporter, trigger: HTMLButtonElement) {
    triggerRef.current = trigger
    setSelected(supporter)
  }

  function closeDetail() {
    setSelected(null)
    triggerRef.current?.focus()
  }

  return (
    <Band $tone="paper">
      <BandMeta>
        <span>02 / Unterstützende</span>
        <span>Berner &amp; Wyss 2027</span>
      </BandMeta>
      <Grid>
        <Col>
          <Display>unterstützende</Display>
        </Col>
        <Col $to={6}>
          <Lead>
            Diese Personen stehen hinter der Kandidatur. Ein unterstrichener Name öffnet das Zitat.
          </Lead>
        </Col>
        <Col $from={6}>
          <SupportersList>
            {supporters.map((supporter) => (
              <SupporterItem key={supporter.id}>
                {supporter.quote ? (
                  <QuoteTrigger
                    onClick={(e) => openDetail(supporter, e.currentTarget)}
                    aria-haspopup="dialog"
                  >
                    {supporter.firstName} {supporter.lastName}
                  </QuoteTrigger>
                ) : (
                  <SupporterName>
                    {supporter.firstName} {supporter.lastName}
                  </SupporterName>
                )}
              </SupporterItem>
            ))}
          </SupportersList>
        </Col>
      </Grid>

      {selected && <SupporterDetailDialog supporter={selected} onClose={closeDetail} />}
    </Band>
  )
}
