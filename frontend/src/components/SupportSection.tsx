import { Band, BandMeta, Grid, Col, Display, Lead } from './Band.styled'
import { SupportForm } from './SupportForm'

export function SupportSection() {
  return (
    <Band $tone="paper" id="unterstuetzen">
      <BandMeta>
        <span>02 / Unterstützen</span>
        <span>Berner &amp; Wyss 2027</span>
      </BandMeta>
      <Grid>
        <Col>
          <Display>unterstützen</Display>
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
