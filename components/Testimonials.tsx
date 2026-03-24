"use client";

import { useRef } from "react";

const bgImageSrc = "https://www.figma.com/api/mcp/asset/c1e374a9-e328-424a-bc64-7fa0499c51ed";
const arrowNextSrc = "https://www.figma.com/api/mcp/asset/43a7963a-1a72-46d6-8fe3-cc7cfb8d5f4b";
const arrowPrevSrc = "https://www.figma.com/api/mcp/asset/baeeefcd-2b57-4236-808e-d0917593f465";

const videoImages = [
  "https://www.figma.com/api/mcp/asset/dd864c36-fe34-41c6-b357-59eded9fc03f",
  "https://www.figma.com/api/mcp/asset/6ea9714a-6ed8-45f5-b56c-8f5e76843f9e",
  "https://www.figma.com/api/mcp/asset/795fb231-57b4-445d-9226-27cabf16d21f",
  "https://www.figma.com/api/mcp/asset/a87a1c53-5a70-4c64-b7a2-c45c8cafb915",
  "https://www.figma.com/api/mcp/asset/dd864c36-fe34-41c6-b357-59eded9fc03f",
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
