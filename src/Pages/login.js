import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="login-container">
      {/* Hero Section */}
      <section className="login-hero">
        <div className="login-form-container">
          <div className="login-form">
            <h1>Welcome Back</h1>
            <p className="login-subtitle">Sign in to your R-W Restaurant account</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>

              <button type="submit" className="login-button">Sign In</button>
            </form>

            <div className="login-links">
              <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
              <p className="register-link">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="login-features">
        <div className="features-container">
          <h2>Why Choose R-W?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <i className="fas fa-utensils"></i>
              <h3>Premium Cuisine</h3>
              <p>Access exclusive menu items and special reservations</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-clock"></i>
              <h3>Easy Ordering</h3>
              <p>Quick and convenient online ordering system</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-star"></i>
              <h3>Loyalty Rewards</h3>
              <p>Earn points with every order and get special discounts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
