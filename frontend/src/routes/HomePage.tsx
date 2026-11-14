import { usePageMeta } from '../hooks/usePageMeta'
import { useScrollToHash } from '../hooks/useScrollToHash'
import { useReveal } from '../hooks/useReveal'
import { HeroSection } from '../components/HeroSection'
import { TeamSection } from '../components/TeamSection'
import { ProgramSection } from '../components/ProgramSection'
import { SupportSection } from '../components/SupportSection'
import { AboutSection } from '../components/AboutSection'
import { ArticlesSection } from '../components/ArticlesSection'

export function HomePage() {
  usePageMeta(
    'Nicole Wyss und Melanie Berner gemeinsam in den Regierungsrat Zürich 2027',
    'Zusammen Mehr: Melanie Berner und Nicole Wyss (AL) kandidieren gemeinsam im Top-Sharing für den Regierungsrat Zürich 2027. Unterstütze die Kandidatur.',
  )
  useScrollToHash()
  useReveal()

  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <TeamSection />
      <ProgramSection />
      <SupportSection />
      <AboutSection />
      <ArticlesSection />
    </main>
  )
}
