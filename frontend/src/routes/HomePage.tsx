import { usePageMeta } from '../hooks/usePageMeta'
import { PageWrapper, PageTitle } from '../components/Layout.styled'
import { VideoSection } from '../components/VideoSection'
import { AboutSection } from '../components/AboutSection'
import { SupportersSection } from '../components/SupportersSection'
import { SupporterForm } from '../components/SupporterForm'

export function HomePage() {
  usePageMeta(
    'Melanie Berner & Nicole Wyss: Kandidierende für den Regierungsrat Zürich 2027',
    'Melanie Berner und Nicole Wyss kandidieren 2027 für den Regierungsrat des Kantons Zürich. Erfahre mehr und unterstütze die Kandidatur.',
  )

  return (
    <PageWrapper>
      <PageTitle>
        Melanie Berner &amp; Nicole Wyss. Kandidierende für den Regierungsrat Zürich 2027.
      </PageTitle>
      <VideoSection />
      <AboutSection />
      <SupportersSection />
      <SupporterForm />
    </PageWrapper>
  )
}
