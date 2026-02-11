import React from "react";
import "./Home.css";
import HyphenLogo from "./HyphenLogo";

const IG_PATH =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z";

function Home() {
  return (
    <div className="page">
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="hero">
        <img src="/fitness/5.png" alt="" className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <HyphenLogo className="hero__logo" />
          <nav className="hero__nav">
            <span>ELEVATED FITNESS</span>
            <span className="hero__dot">&#9679;</span>
            <span>ELEVATED WELLNESS</span>
            <span className="hero__dot">&#9679;</span>
            <span>ELEVATED NUTRITION</span>
            <span className="hero__dot">&#9679;</span>
            <span>ELEVATED PILATES</span>
            <span className="hero__dot">&#9679;</span>
            <span>ELEVATED SPORTS</span>
          </nav>
        </div>
      </section>

      {/* ============================================================
          FITNESS SECTION (Orange #E16626)
          ============================================================ */}
      <section className="fitness">
        <div className="diamond" />

        {/* Brand row + orange bar */}
        <div className="fitness__brand-row">
          <div className="fitness__brand">
            <HyphenLogo className="fitness__brand-logo" />
            <span className="fitness__brand-sub">ELEVATED FITNESS</span>
          </div>
          <div className="fitness__orange-bar" />
        </div>

        {/* Main grid: description left, woman right */}
        <div className="fitness__grid">
          <div className="fitness__left">
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
                <span className="fitness__tagline-dash">
                  &#x2014;&#x2014;&#x2014;
                </span>
                <span className="fitness__tagline-word fitness__tagline-italic">
                  PERFORMANCE
                </span>
              </div>
            </div>
          </div>

          <div className="fitness__right">
            <img
              src="/fitness/1.png"
              alt="Woman with barbell"
              className="fitness__woman"
            />
          </div>
        </div>

        {/* Gallery: two bordered images */}
        <div className="fitness__gallery">
          <div className="fitness__gallery-item">
            <img src="/fitness/6.png" alt="Gym treadmills" />
          </div>
          <div className="fitness__gallery-item fitness__gallery-item--offset">
            <img src="/fitness/2.png" alt="Training session" />
          </div>
        </div>

        {/* Bottom: decorative weights + phone + instagram */}
        <div className="fitness__bottom">
          <img
            src="/fitness/4.png"
            alt=""
            className="fitness__decor-left"
          />
          <img
            src="/fitness/2.png"
            alt=""
            className="fitness__decor-right"
          />

          <div className="fitness__bottom-content">
            <div className="fitness__phone-wrap">
              <div className="fitness__phone">
                <img
                  src="/fitness/8.png"
                  alt="Instagram profile"
                  className="fitness__phone-img"
                />
                <img
                  src="/fitness/9.png"
                  alt="Instagram feed"
                  className="fitness__phone-img"
                />
              </div>
            </div>

            <div className="fitness__insta-card">
              <svg viewBox="0 0 24 24" fill="white" width="70" height="70">
                <path d={IG_PATH} />
              </svg>
              <div className="fitness__insta-info">
                <span className="fitness__insta-handle">thehyphenfitness</span>
                <div className="fitness__insta-tap">
                  <span>&#128070;</span>
                  <span>TAP HERE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          NUTRITION SECTION (Lime #C5E519)
          ============================================================ */}
      <section className="nutrition">
        <div className="diamond" />

        {/* Hero: lime sidebar + background image + overlay */}
        <div className="nutrition__hero">
          <div className="nutrition__sidebar" />
          <div className="nutrition__hero-img-wrap">
            <img
              src="/nutrion/1.png"
              alt="Delivery bag"
              className="nutrition__hero-img"
            />
            <div className="nutrition__hero-overlay">
              <HyphenLogo
                className="nutrition__hero-logo"
                style={{ fill: "#C5E519" }}
              />
              <span className="nutrition__hero-sub">ELEVATED NUTRITION</span>
            </div>
          </div>
        </div>

        {/* Brand row + lime bar */}
        <div className="nutrition__brand-row">
          <div className="nutrition__brand">
            <HyphenLogo
              className="nutrition__brand-logo"
              style={{ fill: "#C5E519" }}
            />
            <span className="nutrition__brand-sub">ELEVATED NUTRITION</span>
          </div>
          <div className="nutrition__lime-bar" />
        </div>

        {/* Food image row */}
        <div className="nutrition__food-row">
          <img
            src="/nutrion/2.png"
            alt="Healthy meals"
            className="nutrition__food-img"
          />
        </div>

        {/* Description */}
        <div className="nutrition__desc-wrap">
          <div className="nutrition__desc-box">
            <p>
              Hyphen Nutrition Offers Meal Services And Lets You Enjoy Healthy
              Meals, Bars, And Breakfast At Our On-Site Cafe, Alongside
              Personalised Meal Plans Designed By Expert Nutritionists Delivered
              To Support Your Fitness Goals With Taste And Convenience.
            </p>
            <div className="nutrition__tagline">
              <span className="nutrition__tagline-word">FEEDING</span>
              <span className="nutrition__tagline-dash">
                &#x2014;&#x2014;&#x2014;
              </span>
              <span className="nutrition__tagline-word nutrition__tagline-italic">
                FUELING
              </span>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="nutrition__gallery">
          <div className="nutrition__gallery-item">
            <img src="/nutrion/3.png" alt="Cafe interior" />
          </div>
          <div className="nutrition__gallery-item">
            <img src="/nutrion/4.png" alt="Meal prep" />
          </div>
        </div>

        {/* Decorative food items */}
        <div className="nutrition__decor-row">
          <img
            src="/nutrion/8.png"
            alt=""
            className="nutrition__decor-left"
          />
          <img
            src="/nutrion/9.png"
            alt=""
            className="nutrition__decor-right"
          />
        </div>

        {/* Phone + Instagram */}
        <div className="nutrition__bottom">
          <div className="nutrition__phone-wrap">
            <div className="nutrition__phone">
              <img
                src="/nutrion/10.png"
                alt="Nutrition Instagram"
                className="nutrition__phone-img"
              />
            </div>
          </div>

          <div className="nutrition__insta-card">
            <div className="nutrition__insta-icon">
              <svg viewBox="0 0 24 24" fill="white" width="50" height="50">
                <path d={IG_PATH} />
              </svg>
            </div>
            <span className="nutrition__insta-handle">
              thehyphennutrition
            </span>
            <span className="nutrition__insta-tap">&#128070; TAP HERE</span>
          </div>
        </div>

        {/* Instagram banner */}
        <div className="nutrition__insta-banner">
          <svg viewBox="0 0 24 24" fill="black" width="50" height="50">
            <path d={IG_PATH} />
          </svg>
          <span className="nutrition__insta-banner-name">
            thehyphennutrition
          </span>
        </div>
      </section>

      {/* ============================================================
          PILATES SECTION (Gold #B6A177)
          ============================================================ */}
      <section className="pilates">
        <div className="diamond" />

        {/* Hero: gold sidebar + background image + overlay */}
        <div className="pilates__hero">
          <div className="pilates__sidebar" />
          <div className="pilates__hero-img-wrap">
            <img
              src="/pilates/1.png"
              alt="Pilates studio"
              className="pilates__hero-img"
            />
            <div className="pilates__hero-overlay">
              <HyphenLogo
                className="pilates__hero-logo"
                style={{ fill: "#B6A177" }}
              />
              <span className="pilates__hero-sub">ELEVATED PILATES</span>
            </div>
          </div>
        </div>

        {/* Brand row + gold bar */}
        <div className="pilates__brand-row">
          <div className="pilates__brand">
            <HyphenLogo
              className="pilates__brand-logo"
              style={{ fill: "#B6A177" }}
            />
            <span className="pilates__brand-sub">ELEVATED PILATES</span>
          </div>
          <div className="pilates__gold-bar" />
        </div>

        {/* Main grid: description left, woman on reformer right */}
        <div className="pilates__grid">
          <div className="pilates__grid-left">
            <div className="pilates__desc-box">
              <p>
                Hyphen Pilates Offers Reformer And Mat Sessions In Our
                Aesthetically Designed Studio, Improving Core Strength, Posture,
                Flexibility, And Overall Performance. Guided By Expert
                Instructors, It's A Safe, Results-Driven Practice For All
                Genders.
              </p>
              <div className="pilates__tagline">
                <span className="pilates__tagline-word">FLEX</span>
                <span className="pilates__tagline-dash">
                  &#x2014;&#x2014;&#x2014;
                </span>
                <span className="pilates__tagline-word pilates__tagline-italic">
                  FINESSE
                </span>
              </div>
            </div>
          </div>
          <div className="pilates__grid-right">
            <img
              src="/pilates/2.png"
              alt="Woman on reformer"
              className="pilates__feature-img"
            />
          </div>
        </div>

        {/* Gallery */}
        <div className="pilates__gallery">
          <div className="pilates__gallery-item">
            <img src="/pilates/4.png" alt="Pilates stretching" />
          </div>
          <div className="pilates__gallery-item">
            <img src="/pilates/3.png" alt="Reformer class" />
          </div>
        </div>

        {/* Phone + Instagram */}
        <div className="pilates__bottom">
          <div className="pilates__phone-wrap">
            <div className="pilates__phone">
              <img
                src="/pilates/5.png"
                alt="Pilates Instagram"
                className="pilates__phone-img"
              />
              <img
                src="/pilates/6.png"
                alt="Pilates Instagram feed"
                className="pilates__phone-img"
              />
            </div>
          </div>

          <div className="pilates__insta-card">
            <div className="pilates__insta-icon">
              <svg viewBox="0 0 24 24" fill="white" width="50" height="50">
                <path d={IG_PATH} />
              </svg>
            </div>
            <span className="pilates__insta-handle">thehyphenpilates</span>
            <span className="pilates__insta-tap">&#128070; TAP HERE</span>
          </div>
        </div>

        {/* Instagram banner */}
        <div className="pilates__insta-banner">
          <svg viewBox="0 0 24 24" fill="black" width="50" height="50">
            <path d={IG_PATH} />
          </svg>
          <span className="pilates__insta-banner-name">thehyphenpilates</span>
        </div>
      </section>

      {/* ============================================================
          SPORTS SECTION (Red #CC2728)
          ============================================================ */}
      <section className="sports">
        <div className="diamond" />

        {/* Hero: red sidebar + tennis court background */}
        <div className="sports__hero">
          <div className="sports__sidebar" />
          <div className="sports__hero-img-wrap">
            <img
              src="/sports/1.png"
              alt="Tennis ball on court"
              className="sports__hero-img"
            />
            <div className="sports__hero-overlay">
              <HyphenLogo
                className="sports__hero-logo"
                style={{ fill: "#CC2728" }}
              />
              <span className="sports__hero-sub">ELEVATED SPORTS</span>
            </div>
          </div>
        </div>

        {/* Brand row + red bar */}
        <div className="sports__brand-row">
          <div className="sports__brand">
            <HyphenLogo
              className="sports__brand-logo"
              style={{ fill: "#CC2728" }}
            />
            <span className="sports__brand-sub">ELEVATED SPORTS</span>
          </div>
          <div className="sports__red-bar" />
        </div>

        {/* Main grid: padel rackets decorative + description */}
        <div className="sports__grid">
          <div className="sports__grid-left">
            <div className="sports__desc-box">
              <p>
                Hyphen Elevated Sports Features 2 Outdoor Padel Courts And 1
                Tennis Court, Available For Bookings. With Expert Coaches For All
                Ages, Members Can Learn, Refine, And Elevate Their Game, While
                Kids Enjoy Special Athletic Programs To Build Skills And
                Confidence.
              </p>
              <div className="sports__tagline">
                <span className="sports__tagline-word">POWER</span>
                <span className="sports__tagline-dash">
                  &#x2014;&#x2014;&#x2014;
                </span>
                <span className="sports__tagline-word sports__tagline-italic">
                  PRECISION
                </span>
              </div>
            </div>
          </div>
          <div className="sports__grid-right">
            <img
              src="/sports/2.png"
              alt="Padel rackets"
              className="sports__feature-img"
            />
          </div>
        </div>

        {/* Gallery */}
        <div className="sports__gallery">
          <div className="sports__gallery-item">
            <img src="/sports/3.png" alt="Padel game" />
          </div>
          <div className="sports__gallery-item">
            <img src="/sports/4.png" alt="Tennis coaching" />
          </div>
        </div>

        {/* Decorative items */}
        <div className="sports__decor-row">
          <img
            src="/sports/5.png"
            alt=""
            className="sports__decor-left"
          />
          <img
            src="/sports/6.png"
            alt=""
            className="sports__decor-right"
          />
        </div>

        {/* Phone + Instagram */}
        <div className="sports__bottom">
          <div className="sports__phone-wrap">
            <div className="sports__phone">
              <img
                src="/sports/7.png"
                alt="Sports Instagram"
                className="sports__phone-img"
              />
              <img
                src="/sports/8.png"
                alt="Sports Instagram feed"
                className="sports__phone-img"
              />
            </div>
          </div>

          <div className="sports__insta-card">
            <div className="sports__insta-icon">
              <svg viewBox="0 0 24 24" fill="white" width="50" height="50">
                <path d={IG_PATH} />
              </svg>
            </div>
            <span className="sports__insta-handle">thehyphensports</span>
            <span className="sports__insta-tap">&#128070; TAP HERE</span>
          </div>
        </div>

        {/* Instagram banner */}
        <div className="sports__insta-banner">
          <svg viewBox="0 0 24 24" fill="white" width="50" height="50">
            <path d={IG_PATH} />
          </svg>
          <span className="sports__insta-banner-name">thehyphensports</span>
        </div>
      </section>

      {/* ============================================================
          WELLNESS SECTION (Yellow #FAE500)
          ============================================================ */}
      <section className="wellness">
        <div className="diamond" />

        {/* Smoke/steam background */}
        <div className="wellness__smoke-bg">
          <img src="/wellness/1.png" alt="" className="wellness__smoke-img" />
        </div>

        {/* Hero: yellow sidebar + sauna image */}
        <div className="wellness__hero">
          <div className="wellness__sidebar" />
          <div className="wellness__hero-img-wrap">
            <img
              src="/wellness/5.png"
              alt="Hyphen sauna"
              className="wellness__hero-img"
            />
            <div className="wellness__hero-overlay">
              <HyphenLogo
                className="wellness__hero-logo"
                style={{ fill: "#FAE500" }}
              />
              <span className="wellness__hero-sub">ELEVATED WELLNESS</span>
            </div>
          </div>
        </div>

        {/* Brand row + yellow bar */}
        <div className="wellness__brand-row">
          <div className="wellness__brand">
            <HyphenLogo
              className="wellness__brand-logo"
              style={{ fill: "#FAE500" }}
            />
            <span className="wellness__brand-sub">ELEVATED WELLNESS</span>
          </div>
          <div className="wellness__yellow-bar" />
        </div>

        {/* Cold plunge feature image + description */}
        <div className="wellness__grid">
          <div className="wellness__grid-left">
            <div className="wellness__desc-box">
              <p>
                Hyphen Wellness Helps You Recover After A Hectic Routine And
                Intense Training. Through Our Wellness Studio, Enjoy Sauna, Cold
                Plunge, Recovery Massages, Red Light Therapy, And An On-Site
                Salon, All Designed To Rejuvenate Body And Mind And Restore
                Balance.
              </p>
              <div className="wellness__tagline">
                <span className="wellness__tagline-word">RECOVER</span>
                <span className="wellness__tagline-dash">
                  &#x2014;&#x2014;&#x2014;
                </span>
                <span className="wellness__tagline-word wellness__tagline-italic">
                  REBUILD
                </span>
              </div>
            </div>
          </div>
          <div className="wellness__grid-right">
            <img
              src="/wellness/4.png"
              alt="Cold plunge"
              className="wellness__feature-img"
            />
          </div>
        </div>

        {/* Gallery: 4 images in grid */}
        <div className="wellness__gallery">
          <div className="wellness__gallery-item">
            <img src="/wellness/3.png" alt="Wellness lounge" />
          </div>
          <div className="wellness__gallery-item">
            <img src="/wellness/2.png" alt="Sauna" />
          </div>
          <div className="wellness__gallery-item">
            <img src="/wellness/6.png" alt="Red light therapy" />
          </div>
          <div className="wellness__gallery-item">
            <img src="/wellness/7.png" alt="Massage" />
          </div>
        </div>

        {/* Phone + Instagram */}
        <div className="wellness__bottom">
          <div className="wellness__phone-wrap">
            <div className="wellness__phone">
              <img
                src="/wellness/8.png"
                alt="Wellness Instagram"
                className="wellness__phone-img"
              />
              <img
                src="/wellness/9.png"
                alt="Wellness Instagram feed"
                className="wellness__phone-img"
              />
            </div>
          </div>

          <div className="wellness__insta-card">
            <div className="wellness__insta-icon">
              <svg viewBox="0 0 24 24" fill="white" width="50" height="50">
                <path d={IG_PATH} />
              </svg>
            </div>
            <span className="wellness__insta-handle">thehyphenwellness</span>
            <span className="wellness__insta-tap">&#128070; TAP HERE</span>
          </div>
        </div>

        {/* Instagram banner */}
        <div className="wellness__insta-banner">
          <svg viewBox="0 0 24 24" fill="black" width="50" height="50">
            <path d={IG_PATH} />
          </svg>
          <span className="wellness__insta-banner-name">
            thehyphenwellness
          </span>
        </div>
      </section>

      {/* ============================================================
          FOOTER / HYPHEN CIRCLE COMMUNITY
          ============================================================ */}
      <footer className="hfooter">
        <div className="diamond" />

        <div className="hfooter__circle-header">
          <HyphenLogo
            className="hfooter__logo"
            style={{ fill: "#E16626" }}
          />
          <span className="hfooter__circle-title">HYPHEN CIRCLE</span>
        </div>

        <div className="hfooter__events">
          <div className="hfooter__event-item">FIT FETE</div>
          <div className="hfooter__event-item">RUNCLUB</div>
          <div className="hfooter__event-item">DUBAIRUN</div>
          <div className="hfooter__event-item">HIKE</div>
          <div className="hfooter__event-item">HYPCHALLENGE</div>
        </div>

        <div className="hfooter__membership">
          <span className="hfooter__membership-label">WHO YOU ARE</span>
          <div className="hfooter__membership-items">
            <span>SENIOR CITIZEN</span>
            <span>WELLNESS CLUB</span>
            <span>KIDS GROUP</span>
            <span>CLASS</span>
          </div>
        </div>

        <div className="hfooter__bottom-bar">
          <HyphenLogo
            className="hfooter__bottom-logo"
            style={{ fill: "#fff" }}
          />
          <div className="hfooter__socials">
            <a
              href="https://www.instagram.com/thehyphenfitness"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                <path d={IG_PATH} />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
