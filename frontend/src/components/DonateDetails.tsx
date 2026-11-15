import { Form, Intro } from './Form.styled'
import { Layout, QrBox, Details, TwintLink } from './DonateDetails.styled'
import { NewTabHint } from './NewTabHint'
import { IbanCopyButton } from './IbanCopyButton'

const TWINT_URL =
  'https://go.twint.ch/1/e/tw?tw=acq.iOu0kG-LSiaskrzHHyqJ_TUGbUfEhPFGrDjl0B27gyXiCwphIjV6W_CBRbpALmSL'
const IBAN = 'CH07 0900 0000 1668 6688 9'

/** Inhalt des Spenden-Tabs. Gleiche Fläche wie das Formular, damit das Panel nicht springt. */
export function DonateDetails() {
  return (
    <Form as="div">
      <Intro>
        Jeder Betrag hilft. Du erhältst von uns eine Spendenbescheinigung und kannst die Spende von
        den Steuern abziehen.
      </Intro>
      <Layout>
        <QrBox>
          <img
            src="/twint-qr.png"
            alt="Twint QR-Code für die Spende"
            width="220"
            height="244"
            loading="lazy"
          />
        </QrBox>
        <Details>
          <dt>Twint</dt>
          <dd>
            QR-Code mit der Twint-App scannen
            <TwintLink as="a" href={TWINT_URL} target="_blank" rel="noopener noreferrer">
              Mit Twint spenden
              <NewTabHint />
            </TwintLink>
          </dd>
          <dt>Banküberweisung</dt>
          <dd>
            Alternative Linke
            <br />
            IBAN: {IBAN}
            <IbanCopyButton iban={IBAN} />
            <br />
            Kontonummer: 16-686688-9
            <br />
            Molkenstrasse 21, 8004 Zürich
            <br />
            Vermerk: Nicole&nbsp;Wyss &amp; Melanie&nbsp;Berner
          </dd>
        </Details>
      </Layout>
    </Form>
  )
}
