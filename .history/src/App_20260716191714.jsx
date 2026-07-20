import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importando as Páginas
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import NewProject from './pages/NewProject' // <-- IMPORTAÇÃO ADICIONADA AQUI!

// Importando os Componentes de Layout
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} /> {/* <-- ROTA ADICIONADA AQUI! */}
        </Routes>
      </Container>

      <Footer />
    </Router>
  )
}

export default App