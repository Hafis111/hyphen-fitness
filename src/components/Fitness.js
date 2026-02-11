import React from "react";
import "./Fitness.css";

function Fitness() {
  return (
    <div className="fitness-container">
      <div className="diamond-pattern"></div>

      {/* Hero Section */}
      <section className="fitness-hero">
        <div className="fitness-hero__overlay"></div>
        <div className="fitness-hero__content">
          <h1 className="fitness-hero__logo">hyphen</h1>
          <nav className="fitness-hero__nav">
            <span>ELEVATED FITNESS</span>
            <span className="fitness-hero__dot">●</span>
            <span>ELEVATED WELLNESS</span>
            <span className="fitness-hero__dot">●</span>
            <span>ELEVATED NUTRITION</span>
            <span className="fitness-hero__dot">●</span>
            <span>ELEVATED PILATES</span>
            <span className="fitness-hero__dot">●</span>
            <span>ELEVATED SPORTS</span>
          </nav>
        </div>
      </section>

      {/* Description Box */}
      <div className="description-section">
        <div className="description-box">
          <p className="description-text">
            Hyphen Fitness Is Dubai's Largest Premium Facility, Offering A
            Holistic, Science-Backed Approach To Training. Members Follow
            Personalised Programs Guided By Expert Coaches And Nutritionists,
            Using High-end Imported Equipment To Achieve Focused Results. Built
            As An Inclusive Circle, Every Milestone Is Celebrated And Accounted
            For, Making Fitness A Sustainable, Results-Driven Journey.
          </p>
          <div className="tagline">
            <span className="tagline-text">POTENTIAL</span>
            <span className="tagline-line">———</span>
            <span className="tagline-text italic">PERFORMANCE</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="gallery-section">
        <div className="gallery-item">
          <img
            src="/fitness/1.png"
            alt="Gym facility"
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src="/fitness/2.png"
            alt="Training area"
            className="gallery-image"
          />
        </div>
      </div>

      {/* Instagram Section */}
      <div className="instagram-section">
        <div className="instagram-content">
          <div className="instagram-icon">
            <svg viewBox="0 0 24 24" fill="white" width="80" height="80">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
          <div className="instagram-text">
            <h2 className="instagram-handle">thehyphenfitness</h2>
            <p className="instagram-cta">
              <span className="hand-icon">👉</span> TAP HERE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fitness;
