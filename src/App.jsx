import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar.jsx'

import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Experience from './pages/Experience.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}

export default App
