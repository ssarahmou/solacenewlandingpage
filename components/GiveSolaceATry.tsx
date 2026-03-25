"use client";

import FadeIn from "./FadeIn";

/** Figma 3642:4724 — composite iPhone mockups (single export). */
const mockupsSrc = "/givesolaceatry.png";

const appIconSrc = "/anecdote.png";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/anecdote-wellness-companion/id6754204193";

export default function GiveSolaceATry() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
        {/* LEFT: Figma mockup PNG (background comes from the asset, not CSS) */}
        <div className="relative flex-shrink-0 w-full md:w-[58%] bg-white flex items-center justify-center md:min-h-[472px] py-8 md:py-0">
          <img
            src={mockupsSrc}
            alt="Solace app wellness dashboard and character on iPhone"
            draggable={false}
            className="w-full max-w-[960px] h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* RIGHT: icon + heading + CTA */}
        <FadeIn
          delay={100}
          direction="left"
          className="flex-1 flex flex-col items-start py-16 md:py-20 px-8 md:pl-4 md:pr-16 bg-white"
        >
          <img
            src={appIconSrc}
            alt="Solace app icon"
            className="w-[76px] h-[76px] rounded-[16px] mb-6 cursor-default transition-transform duration-300 ease-out motion-safe:hover:rotate-[10deg]"
          />

          <h2
            className="font-normal text-black leading-[0.95] mb-4"
            style={{ fontSize: "clamp(30px, 3vw, 42px)", letterSpacing: "-1.2px" }}
          >
            Give Solace a try.
          </h2>

          <p
            className="font-normal mb-8"
            style={{
              fontSize: "clamp(15px, 1.3vw, 20px)",
              letterSpacing: "-0.6px",
              lineHeight: "1.28",
              color: "rgba(0,0,0,0.5)",
              maxWidth: "320px",
            }}
          >
            Your space for calm, clarity, and care.
          </p>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white font-normal rounded-[10px] hover:bg-[#222] transition-colors"
            style={{
              fontSize: "15px",
              letterSpacing: "-0.45px",
              paddingLeft: "20px",
              paddingRight: "20px",
              height: "46px",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="5" y="1" width="14" height="22" rx="3" stroke="white" strokeWidth="1.8" />
              <circle cx="12" cy="19" r="1" fill="white" />
            </svg>
            Download Solace
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
