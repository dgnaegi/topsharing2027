import { Band, BandMeta, Grid, Col, Lead } from './Band.styled'
import { DonateHeading, Details, QrBox } from './DonateSection.styled'

export function DonateSection() {
  return (
    <Band $tone="ink" id="spenden">
      <BandMeta>
        <span>04 / Spenden</span>
        <span>Berner &amp; Wyss 2027</span>
      </BandMeta>
      <Grid>
        <Col>
          <DonateHeading>spenden</DonateHeading>
        </Col>
        <Col $to={6}>
          <Lead>
            Jeder Betrag hilft. Du erhältst von uns eine Spendenbescheinigung und kannst die Spende
            von den Steuern abziehen.
          </Lead>
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
                Alternative Linke
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
            <div>
              <dt>Vermerk</dt>
              <dd>Nicole Wyss &amp; Melanie Berner</dd>
            </div>
          </Details>
        </Col>
      </Grid>
    </Band>
  )
}
