import { Link } from 'react-router-dom'
import libraryImg from '../assets/library.jpg'

const Fee = () => {
  const fees = [
    { course: 'B.Sc Computer Science', duration: '3 Years', fee: '₹45,000' },
    { course: 'B.Com', duration: '3 Years', fee: '₹30,000' },
    { course: 'BBA', duration: '3 Years', fee: '₹40,000' },
    { course: 'B.A. English', duration: '3 Years', fee: '₹25,000' },
    { course: 'M.Sc Computer Science', duration: '2 Years', fee: '₹55,000' },
    { course: 'MBA', duration: '2 Years', fee: '₹60,000' },
  ]

  return (
    <div className="fee-page">
      {/* Header Banner */}
      <div className="page-header">
        <h1>Fee Structure</h1>
        <p className="page-header-subtitle">
          Annual educational fee breakdown for Undergraduate and Postgraduate programs.
        </p>
      </div>

      <div className="section-container">
        {/* Table Card */}
        <div className="table-card">
          <div className="table-top-bar">
            <h2>Annual Tuition & Program Fees (2026–27)</h2>
            <span className="table-badge">Academic Year 2026–27</span>
          </div>

          <div className="table-responsive">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Duration</th>
                  <th>Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((item, index) => (
                  <tr key={index}>
                    <td className="course-name">{item.course}</td>
                    <td>{item.duration}</td>
                    <td className="fee-amount">{item.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="fee-note">* The above fees are for demonstration purposes.</p>
        </div>

        {/* Informative Side Cards */}
        <div className="fee-info-grid">
          <div className="fee-info-card">
            <img
              src={libraryImg}
              alt="Campus Library & Facilities"
              className="fee-info-img"
            />
            <div className="fee-info-content">
              <h3>What the Fee Includes</h3>
              <ul>
                <li>Access to air-conditioned smart classrooms & IT labs</li>
                <li>Digital library memberships and study repositories</li>
                <li>Campus Wi-Fi, seminars, workshops, and sports facilities</li>
                <li>Dedicated career guidance and placement assistance</li>
              </ul>
            </div>
          </div>

          <div className="fee-payment-card">
            <h3>Scholarships & Payments</h3>
            <p>
              Merit-based scholarships are available for deserving candidates.
              Tuition fees can be paid in semester-wise installments via online banking,
              UPI, or Demand Draft.
            </p>
            <div className="contact-help-box">
              <strong>Need guidance?</strong>
              <p>Email our accounts desk: info@sunrisecollege.edu.in</p>
              <p>Helpline: +91 98765 43210</p>
            </div>
            <Link to="/" className="btn btn-outline" style={{ marginTop: '16px' }}>
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fee