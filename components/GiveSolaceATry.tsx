"use client";

import FadeIn from "./FadeIn";

// Figma node 3642-4724 — app screenshots inside the phone mockups
const screenshot1Src = "https://www.figma.com/api/mcp/asset/66d63a9b-25e0-4972-b058-83ebcd6c5058";
const screenshot2Src = "https://www.figma.com/api/mcp/asset/59968681-6e53-4600-827d-a793749b1f5d";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/anecdote-wellness-companion/id6754204193";

/** Minimal iPhone shell — just the rounded frame with a screenshot inside */
function PhoneMockup({
  src,
  className = "",
  style = {},
}: {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative flex-shrink-0 rounded-[14%/7%] overflow-hidden shadow-2xl ${className}`}
      style={{
        background: "#111",
        border: "2.5px solid #2a2a2a",
        ...style,
      }}
    >
      {/* Dynamic island pill */}
      <div
        className="absolute top-[3%] left-1/2 -translate-x-1/2 bg-black rounded-full z-10"
        style={{ width: "28%", height: "3.5%" }}
      />
      {/* Screenshot */}
      <img
        src={src}
        alt="Solace app"
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>
  );
}

export default function GiveSolaceATry() {
  return (
    <section className="relative bg-[#f8f8f8] overflow-hidden py-16 md:py-24">
      {/* Subtle gradient blob behind the phones */}
      <div
        className="absolute -left-24 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(180,220,180,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center gap-12 md:gap-0">

        {/* ── LEFT: stacked phone mockups ───────────────────────── */}
        <FadeIn direction="right" className="flex-1 flex items-center justify-center">
          <div className="relative" style={{ width: 280, height: 480 }}>
            {/* Back phone — slightly rotated, offset */}
            <PhoneMockup
              src={screenshot2Src}
              className="absolute"
              style={{
                width: 200,
                height: 390,
                top: 60,
                left: 0,
                transform: "rotate(-6deg)",
                opacity: 0.85,
              }}
            />
            {/* Front phone — straight, front-center */}
            <PhoneMockup
              src={screenshot1Src}
              className="absolute"
              style={{
                width: 220,
                height: 420,
                top: 30,
                right: 0,
                transform: "rotate(3deg)",
              }}
            />
          </div>
        </FadeIn>

        {/* ── RIGHT: heading + CTA ──────────────────────────────── */}
        <FadeIn delay={150} direction="left" className="flex-1 flex flex-col items-start md:pl-16">
          <h2
            className="font-normal text-black leading-[0.95] mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-1.2px" }}
          >
            Give Solace a try.
          </h2>
          <p
            className="font-normal mb-8"
            style={{
              fontSize: "clamp(15px, 1.4vw, 20px)",
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
            {/* Apple logo */}
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
              <path
                d="M13.544 9.554c-.022-2.548 2.08-3.783 2.175-3.843-1.188-1.737-3.034-1.974-3.684-1.994-1.565-.16-3.066.928-3.862.928-.797 0-2.021-.907-3.325-.882C3.15 3.79 1.44 4.83.548 6.432c-1.799 3.113-.46 7.714 1.287 10.238.855 1.232 1.873 2.613 3.205 2.563 1.293-.051 1.779-.831 3.34-.831 1.56 0 2.006.831 3.366.804 1.386-.024 2.26-1.254 3.103-2.494.984-1.425 1.386-2.815 1.408-2.886-.032-.013-2.69-1.033-2.713-4.272zM11.045 2.55C11.767 1.674 12.258.463 12.12-.77c-1.15.047-2.54.766-3.36 1.648-.734.79-1.384 2.061-1.211 3.27 1.278.1 2.593-.646 3.497-1.598z"
                fill="currentColor"
              />
            </svg>
            Download Solace
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
