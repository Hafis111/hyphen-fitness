import React from "react";
import HyphenLogo from "./HyphenLogo";

const IG_PATH =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z";

function FitnessSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ zIndex: 0 }}>
      {/* Diamond / mesh pattern background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/hero/diamond-pattern.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "280px",
          opacity: 0.25,
        }}
      />

      {/* ── Brand row: logo + "ELEVATED FITNESS" + orange bar ── */}
      <div className="relative z-10 flex items-stretch bg-black">
        {/* Logo + sub-label */}
        <div className="flex flex-col justify-center flex-shrink-0" style={{ paddingLeft: "1.5rem", paddingRight: "1rem" }}>
          <HyphenLogo
            style={{
              fill: "#E16626",
              width: "clamp(90px, 14vw, 160px)",
              height: "auto",
              display: "block",
            }}
          />
          <span
            className="block text-white uppercase"
            style={{ fontSize: "clamp(0.38rem, 0.7vw, 0.55rem)", letterSpacing: "3.5px", marginTop: "3px" }}
          >
            ELEVATED FITNESS
          </span>
        </div>

        {/* Orange horizontal bar — extends to the right edge */}
        <div
          className="flex-1 bg-[#E16626]"
          style={{ minHeight: "clamp(60px, 9vw, 90px)" }}
        />
      </div>

      {/* ── Main grid: description left | woman space right ── */}
      <div className="relative z-10 grid grid-cols-2">
        {/* Left — description box; bg-black hides woman behind the text */}
        <div className="flex flex-col justify-start px-6 pt-6 pb-6">
          <div
            className="rounded-xl bg-black"
            style={{ border: "2px solid #E16626", padding: "clamp(1rem, 2vw, 1.6rem)" }}
          >
            <p
              className="text-white leading-relaxed"
              style={{ fontSize: "clamp(0.7rem, 1.3vw, 1rem)" }}
            >
              Hyphen Fitness Is Dubai's Largest Premium Facility, Offering A
              Holistic, Science-Backed Approach To Training. Members Follow
              Personalised Programs Guided By Expert Coaches And Nutritionists,
              Using High-End Imported Equipment To Achieve Focused Results.
              Built As An Inclusive Circle, Every Milestone Is Celebrated And
              Accounted For, Making Fitness A Sustainable, Results-Driven
              Journey.
            </p>

            {/* Tagline */}
            <div
              className="flex items-center justify-end gap-3 mt-4 font-bold uppercase"
              style={{ color: "#E16626", fontSize: "clamp(0.9rem, 1.8vw, 1.4rem)" }}
            >
              <span>POTENTIAL</span>
              <span className="font-normal" style={{ letterSpacing: "0.2em" }}>———</span>
              <span className="italic">PERFORMANCE</span>
            </div>
          </div>
        </div>

        {/* Right — empty; woman from HeroSection overlaps here */}
        <div style={{ minHeight: "clamp(500px, 65vh, 680px)" }} />
      </div>

      {/* ── Gallery: two bordered images ── */}
      <div
        className="relative z-10 grid grid-cols-2 px-6 pb-6 mt-2 bg-black"
        style={{ gap: "clamp(1rem, 2vw, 2rem)" }}
      >
        {/* Gallery item 1 */}
        <div className="rounded-xl overflow-hidden" style={{ border: "3px solid #E16626" }}>
          <img
            src="/fitness-section/treadmills.png"
            alt="Gym treadmills"
            className="w-full object-cover block"
            style={{ aspectRatio: "4/3" }}
          />
        </div>

        {/* Gallery item 2 — offset down */}
        <div className="rounded-xl overflow-hidden" style={{ border: "3px solid #E16626", marginTop: "5rem" }}>
          <img
            src="/fitness-section/training.png"
            alt="Training session"
            className="w-full object-cover block"
            style={{ aspectRatio: "4/3" }}
          />
        </div>
      </div>

      {/* ── Bottom: decorative dumbbells + phone + instagram ── */}
      <div
        className="relative z-10 flex items-center justify-center px-6 py-12"
        style={{ minHeight: "420px", gap: 0 }}
      >
        {/* Decorative dumbbell — bottom left */}
        <img
          src="/fitness-section/dumbbell.png"
          alt=""
          className="absolute z-0"
          style={{
            left: "-3%",
            bottom: "8%",
            width: "38%",
            maxWidth: "380px",
            opacity: 0.5,
            filter: "brightness(0.75)",
          }}
        />

        {/* Decorative weight plate — top right */}
        <img
          src="/fitness-section/weight-plate.png"
          alt=""
          className="absolute z-0"
          style={{
            right: "-2%",
            top: "6%",
            width: "36%",
            maxWidth: "380px",
            opacity: 0.4,
            filter: "brightness(0.75)",
          }}
        />

        {/* Phone mockup */}
        <div className="relative z-[2] flex-shrink-0" style={{ marginRight: "-2rem" }}>
          <div
            className="bg-[#111] overflow-hidden"
            style={{
              width: "clamp(180px, 24vw, 250px)",
              borderRadius: "30px",
              border: "4px solid #2a2a2a",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}
          >
            <img src="/fitness/8.png" alt="Instagram profile" className="w-full block" />
            <img src="/fitness/9.png" alt="Instagram feed" className="w-full block" />
          </div>
        </div>

        {/* Instagram CTA card */}
        <div
          className="relative z-[2] flex items-center bg-[#E16626] flex-1"
          style={{
            gap: "1.25rem",
            paddingLeft: "3rem",
            paddingRight: "2rem",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            borderRadius: "0 18px 18px 0",
            maxWidth: "460px",
          }}
        >
          {/* Instagram icon */}
          <svg viewBox="0 0 24 24" fill="white" width="64" height="64" className="flex-shrink-0">
            <path d={IG_PATH} />
          </svg>

          {/* Handle + tap */}
          <div className="flex flex-col" style={{ gap: "0.25rem" }}>
            <span
              className="text-white font-bold leading-tight"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.7rem)" }}
            >
              thehyphenfitness
            </span>
            <div
              className="flex items-center text-white font-medium"
              style={{ gap: "0.5rem", fontSize: "clamp(0.75rem, 1.1vw, 0.95rem)" }}
            >
              <span>👆</span>
              <span>TAP HERE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FitnessSection;
