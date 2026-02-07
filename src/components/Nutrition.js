import React from "react";
import "./Nutrition.css";

function Nutrition() {
  return (
    <div className="nutrition-container">
      <div className="diamond-pattern"></div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="lime-sidebar"></div>
        <h1 className="main-logo">
          hyphen
          <span className="subtitle">ELEVATED NUTRITION</span>
        </h1>
      </div>

      {/* Description Box */}
      <div className="description-section">
        <div className="description-box">
          <p className="description-text">
            Hyphen Nutrition Offers Meal Services And Lets You Enjoy Healthy
            Meals, Bars, And Breakfast At Our On-Site Cafe, Alongside
            Personalised Meal Plans Designed By Expert Nutritionists Delivered
            To Support Your Fitness Goals With Taste And Convenience.
          </p>
          <div className="tagline">
            <span className="tagline-text">FEEDING</span>
            <span className="tagline-line">———</span>
            <span className="tagline-text italic">FUELING</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="gallery-section">
        <div className="gallery-item">
          <img
            src="/nutrion/1.png"
            alt="Cafe interior"
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src="/nutrion/2.png"
            alt="Healthy meals"
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
            <h2 className="instagram-handle">thehyphennutrition</h2>
            <p className="instagram-cta">
              <span className="hand-icon">👉</span> TAP HERE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;
