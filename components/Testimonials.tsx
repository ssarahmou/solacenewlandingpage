"use client";

import { useRef } from "react";

const bgImageSrc = "/testimonials-bg.jpg";
const arrowNextSrc = "/icon-arrow-next.svg";
const arrowPrevSrc = "/icon-arrow-prev.svg";

const videoImages = [
  "/testimonial-1.jpg",
  "/testimonial-2.jpg",
  "/testimonial-3.jpg",
  "/testimonial-4.jpg",
  "/testimonial-1.jpg",
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden py-20 px-8 bg-[#171717]">
      {/* Background landscape image */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={bgImageSrc} alt="" className="w-full h-full object-cover opacity-60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex items-start justify-between mb-10">
          <h2
            className="font-normal text-white leading-[0.95]"
            style={{ fontSize: "40px", letterSpacing: "-1.2px", maxWidth: "394px" }}
          >
            See what real people say about Seed.
          </h2>
          <div className="flex gap-3 mt-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-[5px] bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
            >
              <img src={arrowPrevSrc} alt="Previous" className="w-4 h-4 -scale-x-100" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-[5px] bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
            >
              <img src={arrowNextSrc} alt="Next" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable video row — portrait tiles */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videoImages.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-[8px] overflow-hidden bg-[#171717]"
              style={{ width: "280px", height: "498px" }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
