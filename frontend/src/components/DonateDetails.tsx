import { Form, Intro } from './Form.styled'
import { Layout, QrBox, Details } from './DonateDetails.styled'

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
          <dd>QR-Code mit der Twint-App scannen</dd>
          <dt>Banküberweisung</dt>
          <dd>
            Alternative Linke
            <br />
            IBAN: CH07 0900 0000 1668 6688 9
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
