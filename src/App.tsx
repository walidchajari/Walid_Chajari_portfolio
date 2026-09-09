import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'

export default function App() {
  const location = useLocation()

  return (
    <ThemeProvider>
    <LanguageProvider>
      <ProgressBar />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </LanguageProvider>
    </ThemeProvider>
  )
}
