import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'

import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Experience from './pages/Experience.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'

function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main className="app-main">
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
