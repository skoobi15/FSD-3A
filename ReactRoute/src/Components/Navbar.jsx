import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-logo">SC</div>
          <div className="brand-text">
            <span className="college-name">Sunrise College</span>
            <span className="college-tagline">Excellence in Education</span>
          </div>
        </Link>

        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About Us
          </NavLink>
          <NavLink
            to="/fee"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Fee
          </NavLink>
          <Link to="/fee" className="apply-btn">
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
