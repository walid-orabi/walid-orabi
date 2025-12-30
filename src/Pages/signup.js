import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup attempt:', formData);
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
                  placeholder="Create a password"
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

              <button type="submit" className="signup-button">Create Account</button>
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