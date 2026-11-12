import { Band, BandMeta, Grid, Col, Display, Lead } from './Band.styled'
import { VisuallyHidden } from './VisuallyHidden.styled'
import { SupportForm } from './SupportForm'

export function SupportSection() {
  return (
    <Band $tone="paper" id="unterstuetzen" aria-labelledby="unterstuetzen-titel">
      <BandMeta>
        <span>03 / Unterstützen</span>
      </BandMeta>
      <Grid>
        <Col>
          <Display id="unterstuetzen-titel">
            unterstützen
            <VisuallyHidden>: Nicole Wyss und Melanie Berner in den Regierungsrat</VisuallyHidden>
          </Display>
        </Col>
        <Col $to={6}>
          <Lead>
            Du kannst bei der Kampagne mithelfen, ein öffentliches Zitat abgeben oder beides.
          </Lead>
        </Col>
        <Col $from={6}>
          <SupportForm />
        </Col>
      </Grid>
    </Band>
  )
}
