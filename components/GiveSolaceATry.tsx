"use client";

import FadeIn from "./FadeIn";

// User-uploaded images (already include the iPhone frame/bezel)
const phone1Src = "/phone1.png"; // wellness dashboard — back/left phone
const phone2Src = "/phone2.png"; // character view  — front/right phone
const appIconSrc = "/anecdote.png";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/anecdote-wellness-companion/id6754204193";

export default function GiveSolaceATry() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">

        {/* ── LEFT: two angled phone mockups ───────────────────── */}
        {/* Section-level overflow-hidden clips phones at top/bottom/left */}
        <div
          className="relative flex-shrink-0 w-full md:w-[58%]"
          style={{ height: 480 }}
        >
          {/* phone1 — dashboard, left, -15°, bleeds left edge */}
          <img
            src={phone1Src}
            alt="Solace app dashboard"
            draggable={false}
            className="absolute select-none pointer-events-none"
            style={{
              width: 380,
              top: -60,
              left: -40,
              transform: "rotate(-15deg)",
              transformOrigin: "top center",
              filter: "drop-shadow(0 40px 70px rgba(0,0,0,0.20))",
              zIndex: 1,
            }}
          />
          {/* phone2 — character, overlapping phone1, same -15°, bleeds top heavily */}
          <img
            src={phone2Src}
            alt="Solace app character"
            draggable={false}
            className="absolute select-none pointer-events-none"
            style={{
              width: 380,
              top: -200,
              left: 200,
              transform: "rotate(-15deg)",
              transformOrigin: "top center",
              filter: "drop-shadow(0 40px 70px rgba(0,0,0,0.28))",
              zIndex: 2,
            }}
          />
        </div>

        {/* ── RIGHT: icon + heading + CTA ──────────────────────── */}
        <FadeIn
          delay={100}
          direction="left"
          className="flex-1 flex flex-col items-start py-16 md:py-20 px-8 md:pl-4 md:pr-16"
        >
          {/* App icon */}
          <img
            src={appIconSrc}
            alt="Solace app icon"
            className="w-[64px] h-[64px] rounded-[14px] mb-6"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}
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
            {/* Phone icon */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="5" y="1" width="14" height="22" rx="3" stroke="white" strokeWidth="1.8"/>
              <circle cx="12" cy="19" r="1" fill="white"/>
            </svg>
            Download Solace
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
