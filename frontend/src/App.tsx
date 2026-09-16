import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { AppFooter } from './components/AppFooter'
import { HomePage } from './routes/HomePage'
import { PrivacyPage } from './routes/PrivacyPage'
import { ImpressumPage } from './routes/ImpressumPage'

function App() {
  return (
    <>
      <Header />
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
