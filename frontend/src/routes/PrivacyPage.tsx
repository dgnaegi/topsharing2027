import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { Band, BandMeta } from '../components/Band.styled'
import { PageHeading, BackButton, Section, H2, P, Ul } from './PrivacyPage.styled'

export function PrivacyPage() {
  usePageMeta(
    'Datenschutzerklärung: Berner & Wyss 2027',
    'Datenschutzerklärung zur Kandidatur von Melanie Berner und Nicole Wyss für den Regierungsrat Zürich 2027.',
  )

  return (
    <Band as="main" $tone="paper">
      <BandMeta>
        <span>Rechtliches</span>
        <span>Berner &amp; Wyss 2027</span>
      </BandMeta>
      <BackButton as={Link} to="/" $variant="secondary">
        Zur Startseite
      </BackButton>
      <PageHeading as="h1" $size="l">
        datenschutz
      </PageHeading>
      <P>
        Kurz gesagt: Wir wollen so wenig wie möglich über dich wissen. Der Rest ist Kleingedrucktes,
        das wir lesbar halten. Es gilt das Schweizer Datenschutzgesetz (DSG).
      </P>

      <Section>
        <H2>Verantwortliche Stelle</H2>
        <P>Verantwortlich für die Datenbearbeitung auf dieser Website:</P>
        <P>
          Melanie Berner &amp; Nicole Wyss, Kandidatur für den Regierungsrat Zürich 2027
          <br />
          Technischer Kontakt: Daniel Gnägi
          <br />
          <a href="mailto:daniel@gnaegi.me">daniel@gnaegi.me</a>
        </P>
      </Section>

      <Section>
        <H2>Welche Daten wir bearbeiten</H2>
        <P>
          Diese Seite hat kein Login, keine Konten und keine Datenbank. Das ist Prinzip. Und ein
          bisschen Bequemlichkeit. Wir erheben nur, was du uns über das Formular „Unterstützen"
          freiwillig gibst:
        </P>
        <Ul>
          <li>
            <strong>Formular-Einreichung:</strong> Vorname, Nachname, E-Mail-Adresse (für
            Rückfragen, sie wird nicht veröffentlicht) und die Art deiner Unterstützung. Wenn du
            öffentlich unterstützt, dein Zitat sowie optional Funktion und Foto
          </li>
        </Ul>
        <P>
          Das landet als E-Mail beim Kandidatur-Team und nirgends sonst. Keine Tracking-Cookies,
          keine Analyse-Tools, keine Werbepixel. Selbst die Schriften liegen bei uns und nicht bei
          Google.
        </P>
      </Section>

      <Section>
        <H2>Zweck und Rechtsgrundlage</H2>
        <P>
          Wir melden uns bei dir, wenn du bei der Kampagne mithelfen willst. Wenn du öffentlich
          unterstützt, schauen wir deine Angaben an und zeigen sie danach auf dieser Seite, damit
          alle sehen, dass wir nicht allein sind. Rechtsgrundlage ist deine Einwilligung durch das
          Absenden des Formulars.
        </P>
      </Section>

      <Section>
        <H2>Hosting &amp; Infrastruktur</H2>
        <P>
          Wir wählen bewusst europäische Anbieter. Deine Daten bleiben in Europa, versteht sich:
        </P>
        <Ul>
          <li>
            <strong>Scalingo</strong> (Frankreich): Hosting der Website.
          </li>
          <li>
            <strong>Brevo</strong> (Frankreich): Versand der E-Mail mit deiner Einreichung. Deine
            Angaben werden nur dafür übermittelt.
          </li>
        </Ul>
        <P>Keine US-Cloud, kein Google, kein Facebook.</P>
      </Section>

      <Section>
        <H2>Speicherdauer</H2>
        <P>
          Die E-Mail liegt im Postfach des Kandidatur-Teams und wird dort nach der Bearbeitung
          gelöscht. Ein veröffentlichtes Zitat bleibt auf der Website, bis spätestens ein Jahr nach
          der Wahl oder bis du die Entfernung verlangst.
        </P>
      </Section>

      <Section>
        <H2>Deine Rechte</H2>
        <P>Du hast gemäss DSG folgende Rechte:</P>
        <Ul>
          <li>
            <strong>Auskunft:</strong> welche Daten wir über dich haben (spoiler: nicht viele)
          </li>
          <li>
            <strong>Berichtigung:</strong> Korrektur falscher Daten
          </li>
          <li>
            <strong>Löschung:</strong> Entfernung deines Zitats von der Website
          </li>
          <li>
            <strong>Widerspruch:</strong> gegen die weitere Veröffentlichung deines Zitats
          </li>
        </Ul>
        <P>
          Für all das genügt eine kurze E-Mail an{' '}
          <a href="mailto:daniel@gnaegi.me">daniel@gnaegi.me</a>. Wir antworten innerhalb von 30
          Tagen, meistens schneller.
        </P>
      </Section>

      <Section>
        <H2>Sicherheit</H2>
        <P>
          Die Verbindung läuft durchgehend über HTTPS. Dein Zitat reist verschlüsselt.
        </P>
      </Section>

      <Section>
        <H2>Änderungen</H2>
        <P>
          Diese Erklärung kann sich ändern. Die aktuelle Version steht immer hier. Stand: September
          2026.
        </P>
      </Section>
    </Band>
  )
}
