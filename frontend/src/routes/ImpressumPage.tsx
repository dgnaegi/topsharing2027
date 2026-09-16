import { useNavigate } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { PageWrapper, PageTitle } from '../components/Layout.styled'
import { BackButton, Section, H2, P } from './PrivacyPage.styled'

export function ImpressumPage() {
  const navigate = useNavigate()

  usePageMeta(
    'Impressum: Berner & Wyss 2027',
    'Impressum der Kandidatur von Melanie Berner und Nicole Wyss für die Regierungsratswahl Zürich 2027.',
  )

  return (
    <PageWrapper>
      <BackButton $variant="secondary" onClick={() => navigate(-1)}>
        Zurück
      </BackButton>
      <PageTitle>Impressum</PageTitle>

      <Section>
        <H2>Herausgeberin</H2>
        <P>
          Melanie Berner &amp; Nicole Wyss, Kandidatur für den Regierungsrat Zürich 2027
          <br />
          {/* Platzhalter: Postadresse des Wahlkomitees ergänzen. */}
          Zürich, Schweiz
        </P>
      </Section>

      <Section>
        <H2>Kontakt</H2>
        <P>
          Technischer Kontakt für diese Website: Daniel Gnägi
          <br />
          <a href="mailto:daniel@gnaegi.me">daniel@gnaegi.me</a>
        </P>
      </Section>

      <Section>
        <H2>Haftungsausschluss</H2>
        <P>
          Diese Website informiert über die Kandidatur von Melanie Berner und Nicole Wyss zur
          Regierungsratswahl Zürich 2027. Für die Richtigkeit und Vollständigkeit der Inhalte
          wird keine Gewähr übernommen.
        </P>
      </Section>

      <Section>
        <H2>Urheberrecht</H2>
        <P>
          Alle Inhalte dieser Website, insbesondere Texte und Bilder, sind urheberrechtlich
          geschützt. Verwendung nur mit vorheriger Zustimmung.
        </P>
      </Section>
    </PageWrapper>
  )
}
