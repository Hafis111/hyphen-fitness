import React from "react";
import HyphenLogo from "./HyphenLogo";

const NAV_ITEMS = [
  "ELEVATED FITNESS",
  "ELEVATED WELLNESS",
  "ELEVATED NUTRITION",
  "ELEVATED PILATES",
  "ELEVATED SPORTS",
];

function HeroSection() {
  return (
    <section
      className="relative bg-black"
      style={{
        height: "100vh",
        minHeight: "600px",
        width: "100%",
        margin: 0,
        padding: 0,
        overflow: "visible",
      }}
    >
      {/* Background gym image — grayscale + dark */}
      <img
        src="/fitness/5-cropped.png"
        alt=""
        className="absolute inset-0 z-0"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          filter: "grayscale(100%) contrast(1.08) brightness(0.85)",
          display: "block",
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "rgba(0,0,0,0.55)",
        }}
      />

      {/* Diamond / mesh pattern overlay */}
      <div
        className="absolute inset-0 z-[2] opacity-10"
        style={{
          backgroundImage: `url('/hero/diamond-pattern.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "30px",
        }}
      />

      {/* Centred content: logo + nav */}
      <div
        className="absolute inset-0 z-[5] flex flex-col items-center justify-center px-8"
        style={{ paddingBottom: "4rem" }}
      >
        {/* Hyphen Logo — orange, large */}
        <HyphenLogo
          style={{
            fill: "#E16626",
            width: "clamp(260px, 42vw, 520px)",
            height: "auto",
            marginBottom: "1.5rem",
            filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.5))",
          }}
        />

        {/* Navigation tag line */}
        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          {NAV_ITEMS.map((item, i) => (
            <React.Fragment key={item}>
              <span
                className="text-white uppercase font-light"
                style={{
                  fontSize: "clamp(0.45rem, 0.9vw, 0.75rem)",
                  letterSpacing: "3px",
                }}
              >
                {item}
              </span>
              {i < NAV_ITEMS.length - 1 && (
                <span className="text-white/50" style={{ fontSize: "0.3rem" }}>
                  &#9679;
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Woman with barbell — right side, extends beyond screen, overlaps fitness section */}
      <img
        src="/hero/woman.png"
        alt="Woman with barbell"
        className="absolute bottom-0 z-[6] w-auto pointer-events-none select-none"
        style={{
          right: "-17%",
          height: "clamp(800px, 110vh, 1300px)",
          objectFit: "contain",
          objectPosition: "bottom right",
          transform: "translateY(68%)",
        }}
      />
    </section>
  );
}

export default HeroSection;
