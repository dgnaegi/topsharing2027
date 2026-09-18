import { Band, BandMeta, Grid, Col, Display, Lead } from './Band.styled'
import { SupporterForm } from './SupporterForm'

export function PublicSupportSection() {
  return (
    <Band $tone="paper" id="unterstuetzen">
      <BandMeta>
        <span>01 / Öffentlich unterstützen</span>
        <span>Berner &amp; Wyss 2027</span>
      </BandMeta>
      <Grid>
        <Col>
          <Display>öffentlich unterstützen</Display>
        </Col>
        <Col $to={6}>
          <Lead>
            Melanie Berner und Nicole Wyss kandidieren 2027 für den Regierungsrat des Kantons
            Zürich. Schreib in einem Satz, warum du sie unterstützt. Nach einer Prüfung erscheint
            dein Zitat mit deinem Namen auf dieser Seite.
          </Lead>
        </Col>
        <Col $from={6}>
          <SupporterForm />
        </Col>
      </Grid>
    </Band>
  )
}
