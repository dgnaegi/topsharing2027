import { useLayoutEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppFooter } from './components/AppFooter'
import { HomePage } from './routes/HomePage'
import { PrivacyPage } from './routes/PrivacyPage'
import { ImpressumPage } from './routes/ImpressumPage'

function App() {
  useLayoutEffect(() => {
    document.getElementById('root')?.removeAttribute('data-static')
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/datenschutz" element={<PrivacyPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
      </Routes>
      <AppFooter />
    </>
  )
}

export default App
