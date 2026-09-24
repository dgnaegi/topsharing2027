import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { Band, BandMeta } from '../components/Band.styled'
import { PageHeading, BackButton, Section, H2, P } from './PrivacyPage.styled'

export function ImpressumPage() {
  usePageMeta(
    'Impressum: Berner & Wyss 2027',
    'Impressum der Kandidatur von Melanie Berner und Nicole Wyss für die Regierungsratswahl Zürich 2027.',
  )

  return (
    <Band as="main" id="main-content" tabIndex={-1} $tone="paper">
      <BandMeta>
        <span>Rechtliches</span>
        <span>Berner &amp; Wyss 2027</span>
      </BandMeta>
      <BackButton as={Link} to="/" $variant="secondary">
        Zur Startseite
      </BackButton>
      <PageHeading as="h1" $size="l">
        impressum
      </PageHeading>

      <Section>
        <H2>Herausgeberin</H2>
        <P>
          Melanie Berner &amp; Nicole Wyss, Kandidatur für den Regierungsrat Zürich 2027
          <br />
          c/o Daniel Gnägi
          <br />
          Sekretariat AL
          <br />
          Molkenstrasse 21
          <br />
          8004 Zürich
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
    </Band>
  )
}
