import { Link } from 'react-router-dom'
import campusImg from '../assets/campus.jpg'
import studentsImg from '../assets/students.jpg'
import libraryImg from '../assets/library.jpg'

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-content">
          <span className="hero-badge">Admissions Open 2026–27</span>
          <h1>Welcome to Sunrise College</h1>
          <p className="hero-description">
            Sunrise College is committed to providing quality education and creating
            opportunities for students to learn, grow and succeed.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
            <Link to="/fee" className="btn btn-secondary">
              View Fee Structure
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src={campusImg}
            alt="Sunrise College Campus Building"
            className="hero-image"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-container">
        <div className="section-title-wrap">
          <h2>Why Choose Us?</h2>
          <p className="section-subtitle">
            Discover what sets Sunrise College apart in preparing students for real-world excellence.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Quality Education</h3>
            <p>
              Industry-aligned academic curriculum focused on practical understanding,
              critical problem solving, and technological skills.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👨‍🏫</div>
            <h3>Experienced Faculty</h3>
            <p>
              Dedicated professors with academic credentials and industry exposure,
              committed to guiding students individually.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Student Development</h3>
            <p>
              Holistic growth through student clubs, skill workshops, sports,
              cultural events, and placement support.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Highlights Grid */}
      <section className="section-container campus-showcase">
        <div className="showcase-grid">
          <div className="showcase-card">
            <img
              src={studentsImg}
              alt="Students learning together"
              className="showcase-img"
            />
            <div className="showcase-content">
              <h3>Vibrant Student Life</h3>
              <p>
                Collaborative learning spaces and active campus clubs that foster
                leadership and lifelong friendships.
              </p>
            </div>
          </div>

          <div className="showcase-card">
            <img
              src={libraryImg}
              alt="College Library and Research Center"
              className="showcase-img"
            />
            <div className="showcase-content">
              <h3>Modern Learning Resources</h3>
              <p>
                Comprehensive digital and physical library resources to support coursework,
                innovation, and research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Callout */}
      <section className="bottom-callout">
        <div className="callout-inner">
          <h3>Ready to start your journey?</h3>
          <p>
            Explore our college and learn more about our programs and fee structure.
          </p>
          <div className="callout-buttons">
            <Link to="/about" className="btn btn-outline">
              About Sunrise College
            </Link>
            <Link to="/fee" className="btn btn-primary">
              Check Fee Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home