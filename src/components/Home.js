import React from "react";
import HyphenLogo from "./HyphenLogo";
import HeroSection from "./HeroSection";
import FitnessSection from "./FitnessSection";

const IG_PATH =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z";

/* ── Shared diamond mesh pattern (CSS gradient) ── */
function DiamondPattern() {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(45deg, transparent 48%, rgba(255,255,255,.08) 49%, rgba(255,255,255,.08) 51%, transparent 52%),
          linear-gradient(-45deg, transparent 48%, rgba(255,255,255,.08) 49%, rgba(255,255,255,.08) 51%, transparent 52%)
        `,
        backgroundSize: "30px 30px",
      }}
    />
  );
}

/* ── Section hero: colored sidebar + full-width image + logo overlay ── */
function SectionHero({ img, alt, color, logoFill, subLabel }) {
  return (
    <div className="relative z-[1] flex min-h-[400px] overflow-hidden">
      {/* Colored sidebar */}
      <div
        className="flex-shrink-0 z-[2]"
        style={{ width: "clamp(40px,6vw,60px)", background: color }}
      />
      {/* Image + overlay */}
      <div className="flex-1 relative overflow-hidden">
        <img src={img} alt={alt} className="w-full h-full object-cover block" />
        <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center z-[1]">
          <HyphenLogo
            className="w-[clamp(150px,28vw,280px)] h-auto block"
            style={{ fill: logoFill }}
          />
          <span
            className="text-[clamp(0.45rem,0.9vw,0.65rem)] tracking-[4px] uppercase mt-[5px]"
            style={{ color }}
          >
            {subLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Brand row: logo + label + colored bar ── */
function BrandRow({ color, logoFill, label }) {
  return (
    <div className="relative z-[2] flex items-center pl-8">
      <div className="flex-shrink-0 pr-5 flex flex-col justify-center">
        <HyphenLogo
          className="w-[clamp(100px,16vw,170px)] h-auto block"
          style={{ fill: logoFill }}
        />
        <span
          className="block text-[clamp(0.4rem,0.8vw,0.55rem)] tracking-[3.5px] uppercase mt-[3px]"
          style={{ color }}
        >
          {label}
        </span>
      </div>
      <div
        className="flex-1"
        style={{ height: "clamp(50px,8vw,70px)", background: color }}
      />
    </div>
  );
}

/* ── Description box with colored border ── */
function DescBox({ color, text, word1, word2 }) {
  return (
    <div
      className="rounded-[10px] p-[clamp(1rem,2vw,1.5rem)]"
      style={{ border: `2.5px solid ${color}` }}
    >
      <p className="text-[clamp(0.7rem,1.3vw,1rem)] leading-[1.65] text-white">
        {text}
      </p>
      <div
        className="flex items-center justify-end gap-3 mt-4 text-[clamp(0.9rem,1.8vw,1.4rem)] font-bold uppercase"
        style={{ color }}
      >
        <span>{word1}</span>
        <span className="font-normal tracking-wider">———</span>
        <span className="italic">{word2}</span>
      </div>
    </div>
  );
}

/* ── 2-column image gallery with colored borders ── */
function Gallery({ items, color, offsetSecond = false }) {
  return (
    <div className="relative z-[2] grid grid-cols-2 gap-[clamp(1rem,2vw,2rem)] px-[clamp(1rem,2vw,2rem)] py-6">
      {items.map((item, i) => (
        <div
          key={i}
          className={`rounded-[10px] overflow-hidden${
            offsetSecond && i === 1 ? " mt-20" : ""
          }`}
          style={{ border: `3px solid ${color}` }}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full block object-cover aspect-[4/3]"
          />
        </div>
      ))}
    </div>
  );
}

/* ── Phone mockup + Instagram CTA (vertical layout) ── */
function PhoneInstaVertical({ phoneSrc, handle, color, tapColor }) {
  return (
    <div className="relative z-[1] flex items-center justify-center gap-8 px-8 py-12 overflow-hidden">
      {/* Phone */}
      <div className="relative z-[2] flex-shrink-0">
        <div className="w-[clamp(200px,28vw,260px)] bg-[#111] rounded-[30px] overflow-hidden border-4 border-[#2a2a2a] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <img src={phoneSrc} alt="Instagram" className="w-full block" />
        </div>
      </div>
      {/* Instagram CTA */}
      <div className="relative z-[2] flex flex-col items-center gap-3">
        <div
          className="w-[70px] h-[70px] border-[3px] border-white rounded-[16px] flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" fill="white" width="50" height="50">
            <path d={IG_PATH} />
          </svg>
        </div>
        <span className="text-[clamp(1.2rem,2vw,1.6rem)] font-bold text-white">
          {handle}
        </span>
        <span
          className="text-[clamp(0.85rem,1.2vw,1.1rem)] font-semibold"
          style={{ color: tapColor }}
        >
          &#128070; TAP HERE
        </span>
      </div>
    </div>
  );
}

/* ── Instagram banner at bottom of section ── */
function InstaBanner({ handle, bg, textColor = "#000" }) {
  return (
    <div
      className="relative z-[2] flex items-center justify-center gap-5 px-8 py-5"
      style={{ background: bg }}
    >
      <svg viewBox="0 0 24 24" fill={textColor} width="50" height="50">
        <path d={IG_PATH} />
      </svg>
      <span
        className="text-[clamp(1.2rem,2.5vw,2rem)] font-bold"
        style={{ color: textColor }}
      >
        {handle}
      </span>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   NUTRITION SECTION — lime #C5E519
   ════════════════════════════════════════════════════════ */
function NutritionSection() {
  const COLOR = "#C5E519";
  return (
    <section className="relative bg-black overflow-hidden">
      <DiamondPattern />

      <SectionHero
        img="/nutrion/1.png"
        alt="Delivery bag"
        color={COLOR}
        logoFill={COLOR}
        subLabel="ELEVATED NUTRITION"
      />

      <BrandRow color={COLOR} logoFill={COLOR} label="ELEVATED NUTRITION" />

      {/* Food image */}
      <div className="relative z-[2]">
        <img
          src="/nutrion/2.png"
          alt="Healthy meals"
          className="w-full block object-cover max-h-[350px]"
        />
      </div>

      {/* Description */}
      <div className="relative z-[2] px-[clamp(1rem,2vw,2rem)] py-6">
        <DescBox
          color={COLOR}
          text="Hyphen Nutrition Offers Meal Services And Lets You Enjoy Healthy Meals, Bars, And Breakfast At Our On-Site Cafe, Alongside Personalised Meal Plans Designed By Expert Nutritionists Delivered To Support Your Fitness Goals With Taste And Convenience."
          word1="FEEDING"
          word2="FUELING"
        />
      </div>

      <Gallery
        items={[
          { src: "/nutrion/3.png", alt: "Cafe interior" },
          { src: "/nutrion/4.png", alt: "Meal prep" },
        ]}
        color={COLOR}
      />

      {/* Decorative food items */}
      <div className="relative z-[2] flex items-center justify-between px-8 py-4 min-h-[200px]">
        <img
          src="/nutrion/8.png"
          alt=""
          className="w-[35%] max-w-[250px] object-contain"
        />
        <img
          src="/nutrion/9.png"
          alt=""
          className="w-[30%] max-w-[200px] object-contain"
        />
      </div>

      <PhoneInstaVertical
        phoneSrc="/nutrion/10.png"
        handle="thehyphennutrition"
        color={COLOR}
        tapColor={COLOR}
      />

      <InstaBanner handle="thehyphennutrition" bg={COLOR} textColor="#000" />
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   PILATES SECTION — gold #B6A177
   ════════════════════════════════════════════════════════ */
function PilatesSection() {
  const COLOR = "#B6A177";
  return (
    <section className="relative bg-black overflow-hidden">
      <DiamondPattern />

      <SectionHero
        img="/pilates/1.png"
        alt="Pilates studio"
        color={COLOR}
        logoFill={COLOR}
        subLabel="ELEVATED PILATES"
      />

      <BrandRow color={COLOR} logoFill={COLOR} label="ELEVATED PILATES" />

      {/* Grid: desc left, reformer woman right */}
      <div className="relative z-[2] grid grid-cols-[48%_52%]">
        <div className="flex flex-col px-8 pb-8">
          <DescBox
            color={COLOR}
            text="Hyphen Pilates Offers Reformer And Mat Sessions In Our Aesthetically Designed Studio, Improving Core Strength, Posture, Flexibility, And Overall Performance. Guided By Expert Instructors, It's A Safe, Results-Driven Practice For All Genders."
            word1="FLEX"
            word2="FINESSE"
          />
        </div>
        <div
          className="relative overflow-visible z-[5] flex items-end justify-end pr-4"
          style={{ marginTop: "-200px", marginBottom: "-120px" }}
        >
          <img
            src="/pilates/2.png"
            alt="Woman on reformer"
            className="w-full max-w-[550px] h-auto object-contain object-bottom block"
          />
        </div>
      </div>

      <Gallery
        items={[
          { src: "/pilates/4.png", alt: "Pilates stretching" },
          { src: "/pilates/3.png", alt: "Reformer class" },
        ]}
        color={COLOR}
      />

      {/* Phone + Instagram CTA */}
      <div className="relative z-[1] flex items-center justify-center gap-8 px-8 py-12 overflow-hidden">
        <div className="relative z-[2] flex-shrink-0">
          <div className="w-[clamp(200px,28vw,260px)] bg-[#111] rounded-[30px] overflow-hidden border-4 border-[#2a2a2a] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <img src="/pilates/5.png" alt="Pilates Instagram" className="w-full block" />
            <img src="/pilates/6.png" alt="Pilates Instagram feed" className="w-full block" />
          </div>
        </div>
        <div className="relative z-[2] flex flex-col items-center gap-3">
          <div className="w-[70px] h-[70px] border-[3px] border-white rounded-[16px] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" width="50" height="50">
              <path d={IG_PATH} />
            </svg>
          </div>
          <span className="text-[clamp(1.2rem,2vw,1.6rem)] font-bold text-white">
            thehyphenpilates
          </span>
          <span
            className="text-[clamp(0.85rem,1.2vw,1.1rem)] font-semibold"
            style={{ color: COLOR }}
          >
            &#128070; TAP HERE
          </span>
        </div>
      </div>

      <InstaBanner handle="thehyphenpilates" bg={COLOR} textColor="#000" />
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   SPORTS SECTION — red #CC2728
   ════════════════════════════════════════════════════════ */
function SportsSection() {
  const COLOR = "#CC2728";
  return (
    <section className="relative bg-black overflow-hidden">
      <DiamondPattern />

      <SectionHero
        img="/sports/1.png"
        alt="Tennis ball on court"
        color={COLOR}
        logoFill={COLOR}
        subLabel="ELEVATED SPORTS"
      />

      <BrandRow color={COLOR} logoFill={COLOR} label="ELEVATED SPORTS" />

      {/* Grid: desc left, padel rackets right */}
      <div className="relative z-[2] grid grid-cols-[48%_52%]">
        <div className="flex flex-col px-8 pb-8">
          <DescBox
            color={COLOR}
            text="Hyphen Elevated Sports Features 2 Outdoor Padel Courts And 1 Tennis Court, Available For Bookings. With Expert Coaches For All Ages, Members Can Learn, Refine, And Elevate Their Game, While Kids Enjoy Special Athletic Programs To Build Skills And Confidence."
            word1="POWER"
            word2="PRECISION"
          />
        </div>
        <div
          className="relative overflow-visible z-[5] flex items-end justify-end pr-4"
          style={{ marginTop: "-200px", marginBottom: "-60px" }}
        >
          <img
            src="/sports/2.png"
            alt="Padel rackets"
            className="w-full max-w-[500px] h-auto object-contain object-bottom block"
          />
        </div>
      </div>

      <Gallery
        items={[
          { src: "/sports/3.png", alt: "Padel game" },
          { src: "/sports/4.png", alt: "Tennis coaching" },
        ]}
        color={COLOR}
      />

      {/* Decorative items */}
      <div className="relative z-[2] flex items-center justify-between px-8 py-4 min-h-[250px]">
        <img
          src="/sports/5.png"
          alt=""
          className="w-[40%] max-w-[300px] object-contain"
        />
        <img
          src="/sports/6.png"
          alt=""
          className="w-[30%] max-w-[200px] object-contain"
        />
      </div>

      {/* Phone + Instagram CTA */}
      <div className="relative z-[1] flex items-center justify-center gap-8 px-8 py-12 overflow-hidden">
        <div className="relative z-[2] flex-shrink-0">
          <div className="w-[clamp(200px,28vw,260px)] bg-[#111] rounded-[30px] overflow-hidden border-4 border-[#2a2a2a] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <img src="/sports/7.png" alt="Sports Instagram" className="w-full block" />
            <img src="/sports/8.png" alt="Sports Instagram feed" className="w-full block" />
          </div>
        </div>
        <div className="relative z-[2] flex flex-col items-center gap-3">
          <div className="w-[70px] h-[70px] border-[3px] border-white rounded-[16px] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" width="50" height="50">
              <path d={IG_PATH} />
            </svg>
          </div>
          <span className="text-[clamp(1.2rem,2vw,1.6rem)] font-bold text-white">
            thehyphensports
          </span>
          <span
            className="text-[clamp(0.85rem,1.2vw,1.1rem)] font-semibold"
            style={{ color: COLOR }}
          >
            &#128070; TAP HERE
          </span>
        </div>
      </div>

      <InstaBanner handle="thehyphensports" bg={COLOR} textColor="#fff" />
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   WELLNESS SECTION — yellow #FAE500
   ════════════════════════════════════════════════════════ */
function WellnessSection() {
  const COLOR = "#FAE500";
  return (
    <section className="relative bg-black overflow-hidden">
      <DiamondPattern />

      {/* Smoke/steam background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-15">
        <img src="/wellness/1.png" alt="" className="w-full h-full object-cover" />
      </div>

      <SectionHero
        img="/wellness/5.png"
        alt="Hyphen sauna"
        color={COLOR}
        logoFill={COLOR}
        subLabel="ELEVATED WELLNESS"
      />

      <BrandRow color={COLOR} logoFill={COLOR} label="ELEVATED WELLNESS" />

      {/* Grid: desc left, cold plunge right */}
      <div className="relative z-[2] grid grid-cols-[48%_52%]">
        <div className="flex flex-col px-8 pb-8">
          <DescBox
            color={COLOR}
            text="Hyphen Wellness Helps You Recover After A Hectic Routine And Intense Training. Through Our Wellness Studio, Enjoy Sauna, Cold Plunge, Recovery Massages, Red Light Therapy, And An On-Site Salon, All Designed To Rejuvenate Body And Mind And Restore Balance."
            word1="RECOVER"
            word2="REBUILD"
          />
        </div>
        <div
          className="relative overflow-visible z-[5] flex items-end justify-end pr-4"
          style={{ marginTop: "-100px", marginBottom: "-60px" }}
        >
          <img
            src="/wellness/4.png"
            alt="Cold plunge"
            className="w-full max-w-[500px] h-auto object-contain object-bottom block"
          />
        </div>
      </div>

      {/* 4-image gallery */}
      <div className="relative z-[2] grid grid-cols-2 gap-[clamp(1rem,2vw,2rem)] px-[clamp(1rem,2vw,2rem)] py-6">
        {[
          { src: "/wellness/3.png", alt: "Wellness lounge" },
          { src: "/wellness/2.png", alt: "Sauna" },
          { src: "/wellness/6.png", alt: "Red light therapy" },
          { src: "/wellness/7.png", alt: "Massage" },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-[10px] overflow-hidden"
            style={{ border: `3px solid ${COLOR}` }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full block object-cover aspect-[4/3]"
            />
          </div>
        ))}
      </div>

      {/* Phone + Instagram CTA */}
      <div className="relative z-[1] flex items-center justify-center gap-8 px-8 py-12 overflow-hidden">
        <div className="relative z-[2] flex-shrink-0">
          <div className="w-[clamp(200px,28vw,260px)] bg-[#111] rounded-[30px] overflow-hidden border-4 border-[#2a2a2a] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <img src="/wellness/8.png" alt="Wellness Instagram" className="w-full block" />
            <img src="/wellness/9.png" alt="Wellness Instagram feed" className="w-full block" />
          </div>
        </div>
        <div className="relative z-[2] flex flex-col items-center gap-3">
          <div className="w-[70px] h-[70px] border-[3px] border-white rounded-[16px] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" width="50" height="50">
              <path d={IG_PATH} />
            </svg>
          </div>
          <span className="text-[clamp(1.2rem,2vw,1.6rem)] font-bold text-white">
            thehyphenwellness
          </span>
          <span
            className="text-[clamp(0.85rem,1.2vw,1.1rem)] font-semibold"
            style={{ color: COLOR }}
          >
            &#128070; TAP HERE
          </span>
        </div>
      </div>

      <InstaBanner handle="thehyphenwellness" bg={COLOR} textColor="#000" />
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   FOOTER — Hyphen Circle
   ════════════════════════════════════════════════════════ */
function HyphenFooter() {
  return (
    <footer className="relative bg-[#0E1114] px-8 pt-16 pb-8 overflow-hidden">
      <DiamondPattern />

      {/* Logo + HYPHEN CIRCLE */}
      <div className="relative z-[2] text-center mb-12">
        <HyphenLogo
          className="w-[clamp(120px,20vw,200px)] h-auto block mx-auto mb-3"
          style={{ fill: "#E16626" }}
        />
        <span className="block text-[clamp(0.5rem,1vw,0.7rem)] tracking-[5px] text-[#E16626] uppercase">
          HYPHEN CIRCLE
        </span>
      </div>

      {/* Events */}
      <div className="relative z-[2] flex flex-wrap justify-center gap-6 mb-12">
        {["FIT FETE", "RUNCLUB", "DUBAIRUN", "HIKE", "HYPCHALLENGE"].map((e) => (
          <span
            key={e}
            className="text-[clamp(1.2rem,2.5vw,2rem)] font-extrabold text-white tracking-[2px] uppercase"
          >
            {e}
          </span>
        ))}
      </div>

      {/* Membership */}
      <div className="relative z-[2] text-center mb-12">
        <span className="block text-[clamp(0.6rem,1vw,0.8rem)] tracking-[4px] text-[#E16626] uppercase font-semibold mb-5">
          WHO YOU ARE
        </span>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-[clamp(0.7rem,1.2vw,0.95rem)] tracking-[2px] text-white/70 uppercase">
          {["SENIOR CITIZEN", "WELLNESS CLUB", "KIDS GROUP", "CLASS"].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-[2] flex items-center justify-between border-t border-white/15 pt-8 mt-8">
        <HyphenLogo
          className="w-[clamp(80px,12vw,120px)] h-auto block"
          style={{ fill: "#fff" }}
        />
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/thehyphenfitness"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white flex items-center hover:opacity-70 transition-opacity"
          >
            <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d={IG_PATH} />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════════════════
   HOME — main page
   ════════════════════════════════════════════════════════ */
function Home() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden font-sans">
      <HeroSection />
      <FitnessSection />
      <NutritionSection />
      <PilatesSection />
      <SportsSection />
      <WellnessSection />
      <HyphenFooter />
    </div>
  );
}

export default Home;
