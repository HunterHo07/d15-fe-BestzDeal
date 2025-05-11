import { lazy, Suspense, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Layout components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Loader from './components/ui/Loader'

// Lazy-loaded pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const DemoPage = lazy(() => import('./pages/DemoPage'))
const PitchDeckPage = lazy(() => import('./pages/PitchDeckPage'))
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'))
const FutureRoadmapPage = lazy(() => import('./pages/FutureRoadmapPage'))
const LandingPage = lazy(() => import('./pages/LandingPage'))

function App() {
  // Track page scroll for animations
  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight))
    })
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <AnimatePresence mode="wait">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/pitch-deck" element={<PitchDeckPage />} />
                <Route path="/why-us" element={<WhyUsPage />} />
                <Route path="/future" element={<FutureRoadmapPage />} />
                <Route path="/get-started" element={<LandingPage />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
