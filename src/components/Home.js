import React from "react";
import "./Home.css";

const IG_PATH =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z";

function Home() {
  return (
    <div className="page">
      {/* =============================================
          HERO: full-screen gym bg + overlay + logo + nav
          Woman overlaps from hero into fitness section
          ============================================= */}
      <section className="hero">
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="hero__logo">hyphen</h1>
          <nav className="hero__nav">
            <span>ELEVATED FITNESS</span>
            <span className="hero__dot">●</span>
            <span>ELEVATED WELLNESS</span>
            <span className="hero__dot">●</span>
            <span>ELEVATED NUTRITION</span>
            <span className="hero__dot">●</span>
            <span>ELEVATED PILATES</span>
            <span className="hero__dot">●</span>
            <span>ELEVATED SPORTS</span>
          </nav>
        </div>
        {/* Woman with barbell — positioned bottom-right, overlaps into fitness section */}
        <img
          src="/fitness/7.png"
          alt="Woman with barbell"
          className="hero__woman"
        />
      </section>

      {/* =============================================
          FITNESS SECTION — two-column: left content + right woman
          ============================================= */}
      <section className="fitness">
        <div className="diamond"></div>

        {/* Main two-column grid */}
        <div className="fitness__grid">
          {/* LEFT COLUMN: brand, desc, gallery */}
          <div className="fitness__left">
            {/* Brand row: logo + orange stripe */}
            <div className="fitness__brand-row">
              <div className="fitness__brand">
                <h2 className="fitness__brand-logo">hyphen</h2>
                <span className="fitness__brand-sub">ELEVATED FITNESS</span>
              </div>
              <div className="fitness__orange-bar"></div>
            </div>

            {/* Description box */}
            <div className="fitness__desc-box">
              <p>
                Hyphen Fitness Is Dubai's Largest Premium Facility, Offering A
                Holistic, Science-Backed Approach To Training. Members Follow
                Personalised Programs Guided By Expert Coaches And
                Nutritionists, Using High-End Imported Equipment To Achieve
                Focused Results. Built As An Inclusive Circle, Every Milestone
                Is Celebrated And Accounted For, Making Fitness A Sustainable,
                Results-Driven Journey.
              </p>
              <div className="fitness__tagline">
                <span className="fitness__tagline-word">POTENTIAL</span>
                <span className="fitness__tagline-dash">———</span>
                <span className="fitness__tagline-word fitness__tagline-italic">
                  PERFORMANCE
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: woman with barbell filling entire column */}
          <div className="fitness__right">
            <img
              src="/fitness/7.png"
              alt="Woman with barbell"
              className="fitness__woman"
            />
          </div>
        </div>

        {/* Gallery images - full width, staggered with woman's legs on right */}
        <div className="fitness__gallery-section">
          <div className="fitness__gallery-left">
            <img src="/fitness/6.png" alt="Gym treadmills" />
          </div>
          <div className="fitness__gallery-right">
            <img src="/fitness/2.png" alt="Training session" />
          </div>
        </div>

        {/* Dark area with weight images + phone mockup + instagram CTA */}
        <div className="fitness__bottom">
          <img
            src="/fitness/3.png"
            alt="Weight plate"
            className="fitness__decor-left"
          />
          <img
            src="/fitness/4.png"
            alt="Dumbbells"
            className="fitness__decor-right"
          />

          <div className="fitness__phone-wrapper">
            <div className="fitness__phone">
              <img
                src="/fitness/6.png"
                alt="Instagram screenshot"
                className="fitness__phone-screenshot"
              />
            </div>
          </div>

          <div className="fitness__insta-cta">
            <div className="fitness__insta-icon-wrap">
              <svg viewBox="0 0 24 24" fill="white" width="60" height="60">
                <path d={IG_PATH} />
              </svg>
            </div>
            <span className="fitness__insta-handle">thehyphenfitness</span>
            <span className="fitness__insta-tap">👆 TAP HERE</span>
          </div>
        </div>

        {/* Orange Instagram banner */}
        <div className="fitness__insta-banner">
          <svg viewBox="0 0 24 24" fill="white" width="55" height="55">
            <path d={IG_PATH} />
          </svg>
          <span className="fitness__insta-banner-name">thehyphenfitness</span>
        </div>
      </section>

      {/* =============================================
          NUTRITION SECTION
          ============================================= */}
      <section className="nutrition">
        <div className="diamond"></div>

        {/* Full-width background images area */}
        <div className="nutrition__hero">
          <div className="nutrition__lime-sidebar"></div>
          <div className="nutrition__hero-images">
            <img
              src="/nutrion/1.png"
              alt="Delivery bag"
              className="nutrition__hero-img1"
            />
            <div className="nutrition__hero-overlay">
              <h2 className="nutrition__hero-logo">hyphen</h2>
              <span className="nutrition__hero-sub">ELEVATED NUTRITION</span>
            </div>
          </div>
        </div>

        {/* Brand row with lime bar */}
        <div className="nutrition__brand-row">
          <div className="nutrition__brand">
            <h2 className="nutrition__brand-logo">hyphen</h2>
            <span className="nutrition__brand-sub">ELEVATED NUTRITION</span>
          </div>
          <div className="nutrition__lime-bar"></div>
        </div>

        {/* Food image row */}
        <div className="nutrition__food-row">
          <img
            src="/nutrion/2.png"
            alt="Healthy meals"
            className="nutrition__food-img"
          />
        </div>

        {/* Description box */}
        <div className="nutrition__desc-wrapper">
          <div className="nutrition__desc-box">
            <p>
              Hyphen Nutrition Offers Meal Services And Lets You Enjoy Healthy
              Meals, Bars, And Breakfast At Our On-Site Cafe, Alongside
              Personalised Meal Plans Designed By Expert Nutritionists Delivered
              To Support Your Fitness Goals With Taste And Convenience.
            </p>
            <div className="nutrition__tagline">
              <span className="nutrition__tagline-word">FEEDING</span>
              <span className="nutrition__tagline-dash">———</span>
              <span className="nutrition__tagline-word nutrition__tagline-italic">
                FUELING
              </span>
            </div>
          </div>
        </div>

        {/* Gallery images */}
        <div className="nutrition__gallery">
          <div className="nutrition__gallery-item">
            <img src="/nutrion/3.png" alt="Cafe interior" />
          </div>
          <div className="nutrition__gallery-item">
            <img src="/nutrion/4.png" alt="Meal prep" />
          </div>
        </div>

        {/* Food items row */}
        <div className="nutrition__food-items">
          <img
            src="/nutrion/5.png"
            alt="Food item"
            className="nutrition__food-item-left"
          />
          <img
            src="/nutrion/6.png"
            alt="Food item"
            className="nutrition__food-item-right"
          />
        </div>

        {/* Phone mockup + Instagram CTA */}
        <div className="nutrition__bottom">
          {/* Leaf decorations via CSS */}
          <div className="nutrition__phone-wrapper">
            <div className="nutrition__phone">
              <img
                src="/nutrion/7.png"
                alt="Nutrition Instagram"
                className="nutrition__phone-screenshot"
              />
            </div>
          </div>

          <div className="nutrition__insta-cta">
            <div className="nutrition__insta-icon-wrap">
              <svg viewBox="0 0 24 24" fill="white" width="55" height="55">
                <path d={IG_PATH} />
              </svg>
            </div>
            <span className="nutrition__insta-handle">thehyphennutrition</span>
            <span className="nutrition__insta-tap">👆 TAP HERE</span>
          </div>
        </div>

        {/* Lime Instagram banner */}
        <div className="nutrition__insta-banner">
          <svg viewBox="0 0 24 24" fill="black" width="55" height="55">
            <path d={IG_PATH} />
          </svg>
          <span className="nutrition__insta-banner-name">
            thehyphennutrition
          </span>
        </div>
      </section>
    </div>
  );
}

export default Home;
