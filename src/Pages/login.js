import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Assets/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Set this in .env: REACT_APP_API_URL=https://web2-backend-vr5h.onrender.com
  const API = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    if (!API) {
      setError('Missing REACT_APP_API_URL. Add it to your .env and restart the app.');
      setLoading(false);
      return;
    }

    try {
      // 🔁 If your backend route is /api/login, change this to `${API}/api/login`
      const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          password
        })
      });

      // Try to parse JSON even on errors
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.message || 'Login failed. Please check your credentials.');
        return;
      }

      // Accept a few common response shapes:
      // { user: {...}, token?: "..." } OR { ...userFields, token?: "..." }
      const user = data.user ?? data;
      const token = data.token ?? user.token;

      localStorage.setItem('user', JSON.stringify(user));
      if (token) localStorage.setItem('token', token);

      alert(`Welcome back, ${user.fname || user.firstName || 'User'}!`);
      navigate('/home');
    } catch (err) {
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
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
              {error && <div className="error-message">{error}</div>}

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

              <button type="submit" className="login-button" disabled={loading}>
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
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
