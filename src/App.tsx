import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import TadahPage from './pages/TadahPage'
import TadahPrivacyPage from './pages/TadahPrivacyPage'
import SonicDivePage from './pages/SonicDivePage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps/tadah" element={<TadahPage />} />
          <Route path="/apps/tadah/privacy" element={<TadahPrivacyPage />} />
          <Route path="/apps/sonicdive" element={<SonicDivePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
