"use client";

import { useRef } from "react";

const videos = [
  { id: 1, label: "[ VIDEO PLACEHOLDER 1 ]", bg: "bg-gray-800" },
  { id: 2, label: "[ VIDEO PLACEHOLDER 2 ]", bg: "bg-gray-700" },
  { id: 3, label: "[ VIDEO PLACEHOLDER 3 ]", bg: "bg-gray-600" },
  { id: 4, label: "[ VIDEO PLACEHOLDER 4 ]", bg: "bg-gray-700" },
  { id: 5, label: "[ VIDEO PLACEHOLDER 5 ]", bg: "bg-gray-800" },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 260 : -260, behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden py-20 px-8" style={{ background: "linear-gradient(180deg, #a8c8e8 0%, #7bafd4 40%, #5a9abf 70%, #c8dba8 100%)" }}>
      {/* Sky landscape SVG behind */}
      <div className="absolute inset-0 pointer-events-none">
        <SkyLandscapeSVG />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex items-start justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug max-w-xs">
            See what real people say about Seed.
          </h2>
          <div className="flex gap-3 mt-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              →
            </button>
          </div>
        </div>

        {/* Scrollable video row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videos.map((v) => (
            <div
              key={v.id}
              className={`flex-shrink-0 w-48 h-72 rounded-2xl ${v.bg} flex items-center justify-center`}
            >
              <span className="text-gray-400 text-xs text-center px-3 font-mono">{v.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkyLandscapeSVG() {
  return (
    <svg
      viewBox="0 0 1440 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMax slice"
    >
      {/* Clouds */}
      <ellipse cx="200" cy="80" rx="90" ry="30" fill="white" fillOpacity="0.3" />
      <ellipse cx="270" cy="68" rx="60" ry="22" fill="white" fillOpacity="0.25" />
      <ellipse cx="900" cy="60" rx="110" ry="28" fill="white" fillOpacity="0.2" />
      <ellipse cx="980" cy="50" rx="70" ry="20" fill="white" fillOpacity="0.18" />
      {/* Rolling green hills at bottom */}
      <ellipse cx="300" cy="560" rx="500" ry="200" fill="#72b354" fillOpacity="0.8" />
      <ellipse cx="1100" cy="550" rx="600" ry="220" fill="#5da040" fillOpacity="0.7" />
      <ellipse cx="750" cy="580" rx="700" ry="230" fill="#4a8f2e" fillOpacity="0.6" />
    </svg>
  );
}
