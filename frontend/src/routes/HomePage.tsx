import { useSearchParams } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { useScrollToHash } from '../hooks/useScrollToHash'
import { useReveal } from '../hooks/useReveal'
import { HeroSection } from '../components/HeroSection'
import { TeamSection } from '../components/TeamSection'
import { ProgramSection } from '../components/ProgramSection'
import { SupportSection } from '../components/SupportSection'
import { SupportersSection } from '../components/SupportersSection'
import { AboutSection } from '../components/AboutSection'
import { EventsSection } from '../components/EventsSection'
import { ArticlesSection } from '../components/ArticlesSection'

export function HomePage() {
  usePageMeta(
    'Nicole Wyss und Melanie Berner gemeinsam in den Regierungsrat Zürich 2027',
    'Zusammen Mehr: Melanie Berner und Nicole Wyss (AL) kandidieren gemeinsam im Top-Sharing für den Regierungsrat Zürich 2027. Unterstütze die Kandidatur.',
  )
  const [params] = useSearchParams()
  const preview = params.has('preview')
  useScrollToHash()
  useReveal()

  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <TeamSection />
      <ProgramSection />
      {preview && <SupportersSection />}
      <SupportSection />
      <AboutSection />
      <EventsSection />
      <ArticlesSection />
    </main>
  )
}
