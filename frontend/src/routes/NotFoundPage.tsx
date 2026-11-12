import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { Band, BandMeta } from '../components/Band.styled'
import { PageHeading, BackButton, P } from './PrivacyPage.styled'

export function NotFoundPage() {
  usePageMeta('Seite nicht gefunden: Berner & Wyss 2027', undefined, true)

  return (
    <Band as="main" id="main-content" tabIndex={-1} $tone="paper">
      <BandMeta>
        <span>404</span>
      </BandMeta>
      <PageHeading as="h1" $size="l">
        nicht gefunden
      </PageHeading>
      <P>Diese Seite gibt es nicht. Vielleicht hat sich die Adresse geändert.</P>
      <BackButton as={Link} to="/" $variant="secondary">
        Zur Startseite
      </BackButton>
    </Band>
  )
}
