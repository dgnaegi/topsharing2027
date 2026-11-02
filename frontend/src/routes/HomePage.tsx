import { usePageMeta } from '../hooks/usePageMeta'
import { HeroSection } from '../components/HeroSection'
import { TeamSection } from '../components/TeamSection'
import { SupportSection } from '../components/SupportSection'
import { DonateSection } from '../components/DonateSection'

export function HomePage() {
  usePageMeta(
    'zusammen mehr: Melanie Berner & Nicole Wyss, Regierungsrat Zürich 2027',
    'zusammen mehr: Melanie Berner und Nicole Wyss (AL) kandidieren gemeinsam im Top-Sharing für den Regierungsrat Zürich 2027. Unterstütze die Kandidatur.',
  )

  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <TeamSection />
      <SupportSection />
      <DonateSection />
    </main>
  )
}
