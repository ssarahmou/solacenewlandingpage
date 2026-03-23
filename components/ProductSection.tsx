"use client";

import { useState } from "react";

const specs = [
  { left: "1× 60W power adapter", right: "Wireless battery" },
  { left: "128GB onboard storage", right: "Tap charging" },
  { left: "3W speaker with spatial audio", right: "Voice volume control" },
  { left: "OASIS emotion chip", right: "Pet-friendly materials" },
];

const colorVariants = [
  { name: "Obsidian", color: "#1a1a1a" },
  { name: "Pearl", color: "#f5f5f0" },
  { name: "Sage", color: "#8db88a" },
  { name: "Clay", color: "#c4956a" },
];

export default function ProductSection() {
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: product image */}
        <div className="flex items-center justify-center bg-gray-50 rounded-3xl p-12">
          <ProductRobotSVG color={colorVariants[selectedColor].color} />
        </div>

        {/* Right: product details */}
        <div className="flex flex-col gap-6">
          {/* Title + badges */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold text-gray-900">Solace Seed</h2>
              <span className="bg-black text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {colorVariants[selectedColor].name}
              </span>
              <span className="border border-gray-300 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                new
              </span>
            </div>

            {/* Stars */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#1a1a1a">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>

          {/* Specs checklist */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {specs.map((s) => (
              <>
                <div key={s.left} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold text-sm">✓</span>
                  <span className="text-xs text-gray-600">{s.left}</span>
                </div>
                <div key={s.right} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold text-sm">✓</span>
                  <span className="text-xs text-gray-600">{s.right}</span>
                </div>
              </>
            ))}
          </div>

          {/* Color selector */}
          <div className="flex gap-3">
            {colorVariants.map((c, i) => (
              <button
                key={c.name}
                title={c.name}
                onClick={() => setSelectedColor(i)}
                className={`w-9 h-9 rounded-full border-2 transition-all ${
                  selectedColor === i ? "border-black scale-110" : "border-gray-200"
                }`}
                style={{ backgroundColor: c.color }}
              />
            ))}
          </div>

          {/* Qty + Add to cart */}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                −
              </button>
              <span className="px-4 py-2 text-sm font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                +
              </button>
            </div>
            <button className="flex-1 bg-black text-white font-semibold py-3 rounded-full hover:bg-gray-800 transition-colors text-sm">
              Add to Cart — $249
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductRobotSVG({ color }: { color: string }) {
  const isLight = color === "#f5f5f0";
  const faceColor = isLight ? "#e8e8e3" : color === "#1a1a1a" ? "#2a2a2a" : color;
  const screenBg = isLight ? "#d8d8d3" : "#f0f0f0";

  return (
    <svg width="240" height="300" viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="140" y1="30" x2="140" y2="70" stroke="#4a7c3f" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="118" cy="40" rx="18" ry="9" fill="#5da040" transform="rotate(-30 118 40)" />
      <ellipse cx="162" cy="35" rx="18" ry="9" fill="#72b354" transform="rotate(25 162 35)" />
      <ellipse cx="140" cy="28" rx="8" ry="10" fill="#5da040" />
      <rect x="60" y="70" width="160" height="200" rx="50" fill={faceColor} />
      <rect x="85" y="105" width="110" height="90" rx="18" fill={screenBg} />
      <rect x="103" y="128" width="28" height="24" rx="7" fill="#1a1a1a" />
      <rect x="149" y="128" width="28" height="24" rx="7" fill="#1a1a1a" />
      <circle cx="110" cy="134" r="4" fill="white" />
      <circle cx="156" cy="134" r="4" fill="white" />
      <path d="M108 164 Q140 180 172 164" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" fill="none" />
      <text x="140" y="238" textAnchor="middle" fill="#aaa" fontSize="11" fontFamily="sans-serif">Solace</text>
      <ellipse cx="100" cy="278" rx="20" ry="8" fill={isLight ? "#d0d0cb" : "#e5e5e5"} />
      <ellipse cx="180" cy="278" rx="20" ry="8" fill={isLight ? "#d0d0cb" : "#e5e5e5"} />
      <circle cx="220" cy="200" r="7" fill={isLight ? "#c8c8c3" : "#e0e0e0"} />
      <circle cx="220" cy="200" r="4" fill={isLight ? "#b8b8b3" : "#cccccc"} />
    </svg>
  );
}
