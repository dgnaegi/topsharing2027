import { usePageMeta } from '../hooks/usePageMeta'
import { Band, BandMeta } from '../components/Band.styled'
import { PageHeading, Section, H2, P, Ul } from './PrivacyPage.styled'

export function PrivacyPage() {
  usePageMeta(
    'Datenschutzerklärung: Berner & Wyss 2027',
    'Datenschutzerklärung zur Kandidatur von Melanie Berner und Nicole Wyss für den Regierungsrat Zürich 2027.',
  )

  return (
    <Band as="main" id="main-content" tabIndex={-1} $tone="paper">
      <BandMeta>
        <span>Rechtliches</span>
      </BandMeta>
      <PageHeading as="h1" $size="l">
        datenschutz
      </PageHeading>
      <P>
        Wir bearbeiten auf dieser Website nur die Daten, die wir für die Kampagne tatsächlich
        brauchen, und erklären hier, welche das sind und was damit geschieht. Es gilt das Schweizer
        Datenschutzgesetz (DSG).
      </P>

      <Section>
        <H2>Verantwortliche Stelle</H2>
        <P>Verantwortlich für die Datenbearbeitung auf dieser Website:</P>
        <P>
          Melanie&nbsp;Berner &amp; Nicole&nbsp;Wyss, Kandidatur für den Regierungsrat Zürich 2027
          <br />
          Technischer Kontakt: Daniel Gnägi
          <br />
          <a href="mailto:daniel@gnaegi.me">daniel@gnaegi.me</a>
        </P>
      </Section>

      <Section>
        <H2>Welche Daten wir bearbeiten</H2>
        <P>
          Die Website hat weder Benutzerkonten noch eine Datenbank. Daten erhalten wir nur, wenn du
          das Formular „Unterstützen“ ausfüllst und absendest:
        </P>
        <Ul>
          <li>
            <strong>Formular:</strong> Vorname, Nachname, E-Mail-Adresse (nur für Rückfragen, sie
            wird nicht veröffentlicht) und die Art deiner Unterstützung. Wenn du öffentlich
            unterstützt, zusätzlich dein Zitat und, falls angegeben, deine Funktion und ein Foto.
          </li>
        </Ul>
        <P>
          Diese Angaben gehen als E-Mail an das Kandidaturteam und werden nirgends sonst
          gespeichert. Wir verwenden keine Tracking-Cookies, keine Analyse-Tools und keine
          Werbepixel. Auch die Schriften liefern wir selbst aus, statt sie bei Google zu laden.
        </P>
      </Section>

      <Section>
        <H2>Zweck und Rechtsgrundlage</H2>
        <P>
          Wenn du bei der Kampagne mithelfen möchtest, nutzen wir deine Angaben, um mit dir in
          Kontakt zu treten. Wenn du öffentlich unterstützt, prüfen wir deinen Eintrag und
          veröffentlichen danach deinen Namen und dein Zitat auf dieser Website. Rechtsgrundlage ist
          deine Einwilligung, die du mit dem Absenden des Formulars gibst.
        </P>
      </Section>

      <Section>
        <H2>Hosting &amp; Infrastruktur</H2>
        <P>
          Für den Betrieb der Website arbeiten wir mit zwei Anbietern mit Sitz und Servern in Europa
          zusammen:
        </P>
        <Ul>
          <li>
            <strong>Scalingo</strong> (Frankreich) betreibt die Website.
          </li>
          <li>
            <strong>Brevo</strong> (Frankreich) versendet die E-Mail mit deinen Formularangaben und
            erhält sie nur zu diesem Zweck.
          </li>
        </Ul>
        <P>Deine Daten werden nicht an Anbieter in den USA weitergegeben.</P>
      </Section>

      <Section>
        <H2>Server-Logs</H2>
        <P>
          Bei jedem Aufruf der Website protokolliert Scalingo technische Angaben: IP-Adresse,
          Zeitpunkt, aufgerufene Seite, Browser-Kennung und die Seite, von der du kommst. Wir
          brauchen diese Logs, um Fehler zu finden und Missbrauch abzuwehren. Wir werten sie nicht
          für Statistiken aus und verknüpfen sie nicht mit anderen Daten. Scalingo löscht die Logs
          nach einem Jahr automatisch.
        </P>
      </Section>

      <Section>
        <H2>Speicherdauer</H2>
        <P>
          Die E-Mail mit deinen Angaben löschen wir aus dem Postfach des Kandidaturteams, sobald wir
          sie bearbeitet haben. Ein veröffentlichtes Zitat bleibt auf der Website, bis du die
          Entfernung verlangst, längstens aber bis ein Jahr nach der Wahl.
        </P>
      </Section>

      <Section>
        <H2>Deine Rechte</H2>
        <P>Nach dem DSG hast du insbesondere folgende Rechte:</P>
        <Ul>
          <li>
            <strong>Auskunft</strong> darüber, welche Daten wir über dich bearbeiten
          </li>
          <li>
            <strong>Berichtigung</strong> falscher Angaben
          </li>
          <li>
            <strong>Löschung</strong> deiner Angaben und deines Zitats auf der Website
          </li>
          <li>
            <strong>Widerspruch</strong> gegen die weitere Veröffentlichung deines Zitats
          </li>
        </Ul>
        <P>
          Schreib uns dafür eine E-Mail an <a href="mailto:daniel@gnaegi.me">daniel@gnaegi.me</a>.
          Wir antworten innerhalb von 30 Tagen, in der Regel aber deutlich schneller.
        </P>
      </Section>

      <Section>
        <H2>Sicherheit</H2>
        <P>
          Die Verbindung zur Website ist durchgehend mit HTTPS verschlüsselt, auch beim Absenden des
          Formulars.
        </P>
      </Section>

      <Section>
        <H2>Änderungen</H2>
        <P>
          Wir passen diese Datenschutzerklärung an, wenn sich an der Website oder an der Rechtslage
          etwas ändert. Es gilt jeweils die hier veröffentlichte Fassung. Stand: November 2026.
        </P>
      </Section>
    </Band>
  )
}
