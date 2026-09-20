import { Band, BandMeta, Grid, Col, Lead } from './Band.styled'
import { DonateHeading, Details, QrBox } from './DonateSection.styled'

export function DonateSection() {
  return (
    <Band $tone="ink" id="spenden">
      <BandMeta>
        <span>03 / Spenden</span>
        <span>Berner &amp; Wyss 2027</span>
      </BandMeta>
      <Grid>
        <Col>
          <DonateHeading>spenden</DonateHeading>
        </Col>
        <Col $to={6}>
          <Lead>Mit deiner Spende finanzieren wir den Wahlkampf. Jeder Betrag hilft.</Lead>
        </Col>
        <Col $from={6}>
          <Details>
            <div>
              <dt>Twint</dt>
              <dd>
                <QrBox>
                  <img src="/twint-qr.png" alt="Twint QR-Code für die Spende" width="220" />
                </QrBox>
              </dd>
            </div>
            <div>
              <dt>Banküberweisung</dt>
              <dd>
                Alternative Liste
                <br />
                IBAN: CH07 0900 0000 1668 6688 9
                <br />
                Kontonummer: 16-686688-9
                <br />
                Molkenstrasse 21
                <br />
                8004 Zürich
              </dd>
            </div>
          </Details>
        </Col>
      </Grid>
    </Band>
  )
}
