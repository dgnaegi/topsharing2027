import { useNavigate } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { PageWrapper, PageTitle } from '../components/Layout.styled'
import { BackButton, Section, H2, P, Ul } from './PrivacyPage.styled'

export function PrivacyPage() {
  const navigate = useNavigate()

  usePageMeta(
    'Datenschutzerklärung: Berner & Wyss 2027',
    'Datenschutzerklärung zur Kandidatur von Melanie Berner und Nicole Wyss für den Regierungsrat Zürich 2027.',
  )

  return (
    <PageWrapper>
      <BackButton $variant="secondary" onClick={() => navigate(-1)}>
        Zurück
      </BackButton>
      <PageTitle>Datenschutzerklärung</PageTitle>
      <P>
        Diese Erklärung gilt für die Website der Kandidatur von Melanie Berner und Nicole Wyss
        für den Regierungsrat des Kantons Zürich, gemäss dem Schweizer Datenschutzgesetz (DSG).
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
          Diese Seite hat keine Konten, kein Login und keine Datenbank. Wir erheben nur, was du
          uns über das Formular „Zitat einreichen" freiwillig gibst:
        </P>
        <Ul>
          <li>
            <strong>Formular-Einreichung:</strong> Vorname, Nachname, dein Zitat und optional ein
            Foto
          </li>
        </Ul>
        <P>
          Diese Angaben werden direkt per E-Mail an das Kandidatur-Team geschickt und nicht auf
          einem Server gespeichert. Wir setzen keine Tracking-Cookies und keine
          Analyse-Werkzeuge ein.
        </P>
      </Section>

      <Section>
        <H2>Zweck und Rechtsgrundlage</H2>
        <P>
          Deine Angaben werden bearbeitet, um dein Zitat nach Prüfung auf dieser Website als
          Unterstützungsstimme zu veröffentlichen. Rechtsgrundlage ist deine Einwilligung durch
          das Absenden des Formulars.
        </P>
      </Section>

      <Section>
        <H2>Hosting &amp; Infrastruktur</H2>
        <P>Wir setzen auf europäische Infrastruktur:</P>
        <Ul>
          <li>
            <strong>Scalingo</strong> (Frankreich): Hosting der Website.
          </li>
          <li>
            <strong>Brevo</strong> (Frankreich): Versand der E-Mail mit deiner
            Formular-Einreichung. Deine Angaben werden ausschliesslich für diesen Zweck
            übermittelt.
          </li>
        </Ul>
      </Section>

      <Section>
        <H2>Speicherdauer</H2>
        <P>
          Die E-Mail mit deiner Einreichung bleibt im Postfach des Kandidatur-Teams, bis sie
          gelöscht wird. Ein veröffentlichtes Zitat bleibt auf der Website, bis du dessen
          Entfernung verlangst.
        </P>
      </Section>

      <Section>
        <H2>Deine Rechte</H2>
        <P>Du hast gemäss DSG folgende Rechte:</P>
        <Ul>
          <li>
            <strong>Auskunft:</strong> welche Daten wir über dich gespeichert haben
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
          <a href="mailto:daniel@gnaegi.me">daniel@gnaegi.me</a>.
        </P>
      </Section>

      <Section>
        <H2>Sicherheit</H2>
        <P>
          Die Verbindung zur Website ist durchgehend TLS-verschlüsselt (HTTPS). Formulardaten
          werden verschlüsselt übertragen.
        </P>
      </Section>

      <Section>
        <H2>Änderungen</H2>
        <P>
          Diese Datenschutzerklärung kann angepasst werden. Die jeweils aktuelle Version ist
          immer auf dieser Seite zu finden. Stand: September 2026.
        </P>
      </Section>
    </PageWrapper>
  )
}
