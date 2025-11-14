import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to R-W Restaurant</h1>
          <p className="hero-subtitle">Experience the finest dining in town</p>
          <Link to="/menu" className="cta-button">View Our Menu</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-container">
          <div className="feature-card">
            <i className="fas fa-utensils"></i>
            <h3>Exquisite Cuisine</h3>
            <p>Carefully crafted dishes using the finest ingredients</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-wine-glass-alt"></i>
            <h3>Fine Dining</h3>
            <p>Elegant atmosphere for a perfect dining experience</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-clock"></i>
            <h3>Fast Service</h3>
            <p>Quick and professional service at your convenience</p>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="special-section">
        <div className="special-content">
          <h2>Today's Special</h2>
          <p>Chef's signature dishes crafted for an unforgettable experience</p>
          <Link to="/menu" className="special-button">Explore Specials</Link>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="location-content">
          <h2>Visit Us</h2>
          <p>123 Restaurant Street, Food City</p>
          <p>Open Daily: 11:00 AM - 10:00 PM</p>
          <Link to="/contact" className="location-button">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
export default Home;