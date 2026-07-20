import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Importando as Páginas
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

// Importando os Componentes de Layout
import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <Navbar />

        <Link to="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projetos</Link>
        <Link to="/company" style={{ color: '#fff', textDecoration: 'none' }}>Empresa</Link>
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contato</Link>
      </nav>

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>

      <footer style={{ textAlign: 'center', padding: '20px', background: '#222', color: '#fff' }}>
        <p>Costs &copy; 2026</p>
      </footer>
    </Router>
  )
}

export default App