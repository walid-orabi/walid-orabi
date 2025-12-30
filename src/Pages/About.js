import React from 'react';
import '../Assets/About.css';

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>Our Story</h1>
        <p>Welcome to R-W, where passion for food meets exceptional service. We've been serving our community with love and dedication since 2010.</p>
      </div>

      {/* Story Section */}
      <div className="about-story">
        <div className="story-content">
          <h2>A Tradition of Excellence</h2>
          <p>Founded by Chef Robert Williams, R-W began with a simple vision: to create an extraordinary dining experience that combines traditional flavors with modern culinary innovation.</p>
          <p>Over the years, we've grown from a small family restaurant into a beloved culinary destination, while maintaining our commitment to quality, creativity, and warm hospitality.</p>
        </div>
        <div className="story-image">
          <img src={process.env.PUBLIC_URL + "/download.jpg"} alt="Our restaurant" className="rounded shadow" />
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p className="lead">
            At R-W, our mission is to make your dining experience easy, enjoyable, 
            and memorable. From browsing the menu to placing your order online, 
            we bring the restaurant experience right to your screen — fast, simple, and delicious.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="our-values">
        <div className="values-container">
          <div className="values-header">
            <h2>Our Values</h2>
            <p>The principles that guide us in creating memorable dining experiences</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-heart"></i>
              <h3>Passion</h3>
              <p>We put our heart into every dish we serve and every service we provide</p>
            </div>
            <div className="value-card">
              <i className="fas fa-star"></i>
              <h3>Quality</h3>
              <p>Using only the finest ingredients to create exceptional dishes</p>
            </div>
            <div className="value-card">
              <i className="fas fa-users"></i>
              <h3>Community</h3>
              <p>Building relationships with our guests and local suppliers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="team-header">
          <h2>Meet Our Team</h2>
          <p>The talented individuals who make R-W special</p>
        </div>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">
              <img src={process.env.PUBLIC_URL + "/download (1).jpg"} alt="Executive Chef" className="rounded" />
            </div>
            <div className="member-info">
              <h3>Robert Williams</h3>
              <p>Executive Chef</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={process.env.PUBLIC_URL + "/download (2).jpg"} alt="Pastry Chef" className="rounded" />
            </div>
            <div className="member-info">
              <h3>Sarah Chen</h3>
              <p>Pastry Chef</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src={process.env.PUBLIC_URL + "/download (3).jpg"} alt="Restaurant Manager" className="rounded" />
            </div>
            <div className="member-info">
              <h3>Michael Brown</h3>
              <p>Restaurant Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Quote */}
      <div className="quote-section">
        <blockquote>
          "Good food brings people together and at R-W, we believe in spreading happiness, 
          one meal at a time."
        </blockquote>
      </div>
    </div>
  );
}

export default About;