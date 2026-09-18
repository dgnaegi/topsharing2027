import { usePageMeta } from '../hooks/usePageMeta'
import { HeroSection } from '../components/HeroSection'
import { PublicSupportSection } from '../components/PublicSupportSection'
import { DonateSection } from '../components/DonateSection'

export function HomePage() {
  usePageMeta(
    'Melanie Berner & Nicole Wyss: Kandidierende für den Regierungsrat Zürich 2027',
    'Melanie Berner und Nicole Wyss kandidieren 2027 für den Regierungsrat des Kantons Zürich. Erfahre mehr und unterstütze die Kandidatur.',
  )

  return (
    <main>
      <HeroSection />
      <PublicSupportSection />
      <DonateSection />
    </main>
  )
}
