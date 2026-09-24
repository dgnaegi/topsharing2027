import { usePageMeta } from '../hooks/usePageMeta'
import { HeroSection } from '../components/HeroSection'
import { TeamSection } from '../components/TeamSection'
import { SupportSection } from '../components/SupportSection'
import { DonateSection } from '../components/DonateSection'

export function HomePage() {
  usePageMeta(
    'Melanie Berner & Nicole Wyss: Kandidierende für den Regierungsrat Zürich 2027',
    'Melanie Berner und Nicole Wyss kandidieren 2027 für den Regierungsrat des Kantons Zürich. Erfahre mehr und unterstütze die Kandidatur.',
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
