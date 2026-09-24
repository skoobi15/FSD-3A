import { Link } from 'react-router-dom'
import campusImg from '../assets/campus.jpg'
import studentsImg from '../assets/students.jpg'

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>About Us</h1>
        <p className="page-header-subtitle">
          Discover the history, core values, and educational mission of Sunrise College.
        </p>
      </div>

      <div className="section-container">
        {/* Intro Section with Image */}
        <div className="about-overview-grid">
          <div className="about-image-wrap">
            <img
              src={campusImg}
              alt="Sunrise College Campus"
              className="about-main-image"
            />
          </div>
          <div className="about-text-content">
            <h2>Welcome to Sunrise College</h2>
            <p className="lead-paragraph">
              Sunrise College is an educational institution focused on providing students
              with quality academic knowledge and opportunities for personal and
              professional development.
            </p>
            <p>
              Located in Delhi, India, our campus combines contemporary academic
              facilities with an encouraging learning environment. We emphasize
              rigorous classroom teaching complemented by practical sessions,
              mentorship, and co-curricular engagements.
            </p>
            <p>
              Our dedicated faculty members work closely with students to nurture
              intellectual curiosity, ethical leadership, and career readiness in
              diverse disciplines.
            </p>
          </div>
        </div>

        {/* Mission, Vision, and Values */}
        <div className="mv-section">
          <div className="mv-card mission-card">
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To provide quality education and help students develop the knowledge and
              skills needed for their future.
            </p>
          </div>

          <div className="mv-card vision-card">
            <div className="mv-icon">🔭</div>
            <h3>Our Vision</h3>
            <p>
              To create a learning environment that encourages academic growth,
              innovation and responsible citizenship.
            </p>
          </div>

          <div className="mv-card values-card">
            <div className="mv-icon">⭐</div>
            <h3>Our Values</h3>
            <p>
              Integrity, discipline, respect, learning and continuous improvement.
            </p>
          </div>
        </div>

        {/* Student Life Highlight Card */}
        <div className="about-highlight-box">
          <div className="highlight-text">
            <h3>Nurturing Well-Rounded Graduates</h3>
            <p>
              Beyond textbooks, Sunrise College promotes holistic growth. Students
              actively engage in tech fests, cultural clubs, sports tournaments, and
              community social initiatives that build confidence and teamwork.
            </p>
            <Link to="/fee" className="btn btn-primary" style={{ marginTop: '15px' }}>
              View Programs & Fees &rarr;
            </Link>
          </div>
          <div className="highlight-img-wrap">
            <img
              src={studentsImg}
              alt="Students enjoying campus life"
              className="highlight-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs