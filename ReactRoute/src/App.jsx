import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Fee from './Components/Fee'

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/fee" element={<Fee />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-col">
              <h3>Sunrise College</h3>
              <p>Excellence in Education • Delhi, India</p>
              <p>Phone: +91 98765 43210 | Email: info@sunrisecollege.edu.in</p>
            </div>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/fee">Fee Structure</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Sunrise College. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App