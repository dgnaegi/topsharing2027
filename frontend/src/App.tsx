import { useLayoutEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppFooter } from './components/AppFooter'
import { SkipLink } from './components/SkipLink'
import { SiteNav } from './components/SiteNav'
import { HomePage } from './routes/HomePage'
import { PrivacyPage } from './routes/PrivacyPage'
import { ImpressumPage } from './routes/ImpressumPage'
import { NotFoundPage } from './routes/NotFoundPage'

function App() {
  useLayoutEffect(() => {
    document.getElementById('root')?.removeAttribute('data-static')
  }, [])

  return (
    <>
      <SkipLink />
      <SiteNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/datenschutz" element={<PrivacyPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <AppFooter />
    </>
  )
}

export default App
