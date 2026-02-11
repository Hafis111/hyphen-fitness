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
      className="relative w-full overflow-visible bg-black"
      style={{ height: "100vh", minHeight: "600px", zIndex: 1 }}
    >
      {/* Background gym image — grayscale + dark, via CSS background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(100%) contrast(1.08) brightness(0.7)",
          transform: "scale(1.02)",
        }}
      />

      {/* Diamond / mesh pattern overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-30"
        style={{
          backgroundImage: `url('/hero/diamond-pattern.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "320px",
        }}
      />

      {/* Vignette — top fade */}
      <div
        className="absolute inset-x-0 top-0 z-[2]"
        style={{
          height: "40%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.5) 60%, transparent)",
        }}
      />

      {/* Vignette — bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 z-[2]"
        style={{
          height: "40%",
          background: "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.5) 60%, transparent)",
        }}
      />

      {/* Vignette — left fade */}
      <div
        className="absolute inset-y-0 left-0 z-[2]"
        style={{
          width: "25%",
          background: "linear-gradient(to right, rgba(0,0,0,0.8), transparent)",
        }}
      />

      {/* Vignette — right fade */}
      <div
        className="absolute inset-y-0 right-0 z-[2]"
        style={{
          width: "25%",
          background: "linear-gradient(to left, rgba(0,0,0,0.8), transparent)",
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

      {/* Woman with barbell — bottom-right, overflows into fitness section */}
      <img
        src="/hero/woman.png"
        alt="Woman with barbell"
        className="absolute bottom-0 right-0 z-[6] w-auto pointer-events-none select-none"
        style={{
          height: "clamp(800px, 110vh, 1300px)",
          objectFit: "contain",
          objectPosition: "bottom right",
          transform: "translateY(62%)",
        }}
      />
    </section>
  );
}

export default HeroSection;
