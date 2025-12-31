import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Assets/signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Set this in .env: REACT_APP_API_URL=https://web2-backend-vr5h.onrender.com
  const API = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    if (!API) {
      setError('Missing REACT_APP_API_URL. Add it to your .env and restart the app.');
      setLoading(false);
      return;
    }

    try {
      // ✅ FIX: endpoint changed from /signup to /api/auth/signup
      const res = await fetch(`${API}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          password: formData.password
        })
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.message || 'Signup failed. Please try again.');
        return;
      }

      alert('Signup successful! Please login.');
      navigate('/');
    } catch (err) {
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      {/* Hero Section */}
      <section className="signup-hero">
        <div className="signup-form-container">
          <div className="signup-form">
            <h1>Join R-W Restaurant</h1>
            <p className="signup-subtitle">Create your account to start your culinary journey</p>

            <form onSubmit={handleSubmit}>
              {error && <div className="error-message">{error}</div>}

              <div className="name-fields">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password (min 6 characters)"
                  minLength="6"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                  minLength="6"
                />
              </div>

              <button type="submit" className="signup-button" disabled={loading}>
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="signup-links">
              <p className="login-link">
                Already have an account? <Link to="/">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="signup-benefits">
        <div className="benefits-container">
          <h2>Why Join Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <i className="fas fa-gift"></i>
              <h3>Exclusive Offers</h3>
              <p>Get access to member-only discounts and special promotions</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-calendar-alt"></i>
              <h3>Easy Reservations</h3>
              <p>Book your table online with priority seating</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-star"></i>
              <h3>Loyalty Program</h3>
              <p>Earn points with every visit and redeem for rewards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
