import { Band, BandMeta, Grid, Col, Display, Lead } from './Band.styled'
import { Details, QrBox } from './DonateSection.styled'
import { CopyButton } from './CopyButton'

export function DonateSection() {
  return (
    <Band $tone="signal" id="spenden">
      <BandMeta>
        <span>04 / Spenden</span>
      </BandMeta>
      <Grid>
        <Col>
          <Display>spenden</Display>
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
                  <img
                    src="/twint-qr.png"
                    alt="Twint QR-Code für die Spende"
                    width="220"
                    height="244"
                    loading="lazy"
                  />
                </QrBox>
              </dd>
            </div>
            <div>
              <dt>Banküberweisung</dt>
              <dd>
                Alternative Linke
                <br />
                IBAN: CH07 0900 0000 1668 6688 9
                <CopyButton value="CH0709000000166866889" label="IBAN kopieren" />
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
