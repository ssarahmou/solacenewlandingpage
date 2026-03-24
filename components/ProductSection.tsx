"use client";

import { useState, useRef, useEffect } from "react";
import FadeIn from "./FadeIn";

const productImages = [
  "/solaceseed.png",
  "/product-1.png",
  "/product-2.png",
  "/product-3.png",
];

const specsLeft = [
  { icon: "📺", label: "1.3–1.5 inch low-power OLED (240 × 240)" },
  { icon: "❤️", label: "Summon button" },
  { icon: "🎤", label: "2 MEMS mic array" },
  { icon: "🔊", label: "3W loudspeaker" },
];

const specsRight = [
  { icon: "🔋", label: "500mAh battery" },
  { icon: "⚡", label: "Type-C Charging" },
  { icon: "📶", label: "Side rocker – volume / long-press skip/recall last response" },
];

export default function ProductSection() {
  const [qty, setQty] = useState(1);
  const [qtyOpen, setQtyOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setQtyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="bg-white py-10 md:py-24 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: product image */}
        <FadeIn direction="right">
          <div
            className="overflow-hidden rounded-[8px]"
            style={{ backgroundColor: "#f8f8f8", minHeight: "400px" }}
          >
            <img
              src={productImages[activeImage]}
              alt="Solace Seed"
              className="w-full h-full object-cover transition-opacity duration-200"
            />
          </div>
        </FadeIn>

        {/* Right: product details */}
        <FadeIn delay={150} direction="left">
        <div className="flex flex-col gap-6 pt-4">
          {/* Product photo thumbnails — shows first on mobile via order */}
          <div className="flex flex-wrap gap-3 order-first md:order-none md:hidden">
            {productImages.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className="overflow-hidden rounded-[10px] transition-all duration-150"
                style={{
                  width: "70px",
                  height: "80px",
                  backgroundColor: "#f8f8f8",
                  outline: activeImage === i ? "2px solid black" : "2px solid transparent",
                  outlineOffset: "-2px",
                }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Title + PRESALE badge */}
          <div className="flex items-center gap-3">
            <h2 className="font-normal text-black" style={{ fontSize: "30px", letterSpacing: "-0.3px" }}>
              Solace Seed
            </h2>
            <span
              className="text-white font-normal px-3 py-1 rounded-[5px]"
              style={{ backgroundColor: "#313131", fontSize: "10px", letterSpacing: "-0.1px" }}
            >
              PRESALE
            </span>
          </div>

          {/* Stars */}
          <div className="flex gap-[5px]">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} width="17" height="17" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l2.94 5.96L21 8.87l-4.5 4.39L17.59 20 12 17.27 6.41 20l1.09-6.74L3 8.87l6.06-.91L12 2z" />
              </svg>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span
              className="font-normal line-through"
              style={{ fontSize: "14px", letterSpacing: "-0.14px", color: "rgba(0,0,0,0.5)" }}
            >
              $180.00
            </span>
            <span className="font-normal text-black" style={{ fontSize: "14px", letterSpacing: "-0.14px" }}>
              $60.00
            </span>
          </div>

          {/* Description */}
          <p
            className="font-normal leading-[1.6]"
            style={{ fontSize: "15px", letterSpacing: "-0.15px", color: "rgba(0,0,0,0.5)", maxWidth: "641px" }}
          >
            Solace Seed is a pocket-sized wellbeing companion inspired by Solace&apos;s mascot. Tap its single button
            and tone-aware AI offers micro‑coaching, mood journaling, and breathing cues. Wi‑Fi, Bluetooth, haptics,
            and a speaker enable discreet support anywhere.
          </p>

          {/* Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            <div className="flex flex-col gap-3">
              {specsLeft.map((s) => (
                <div key={s.label} className="flex items-start gap-3">
                  <span className="text-sm shrink-0 mt-0.5">{s.icon}</span>
                  <span
                    className="font-normal leading-[1.55]"
                    style={{ fontSize: "13px", letterSpacing: "-0.13px", color: "rgba(0,0,0,0.8)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {specsRight.map((s) => (
                <div key={s.label} className="flex items-start gap-3">
                  <span className="text-sm shrink-0 mt-0.5">{s.icon}</span>
                  <span
                    className="font-normal leading-[1.55]"
                    style={{ fontSize: "13px", letterSpacing: "-0.13px", color: "rgba(0,0,0,0.8)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Product photo thumbnails — desktop only */}
          <div className="hidden md:flex flex-wrap gap-3">
            {productImages.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className="overflow-hidden rounded-[10px] transition-all duration-150"
                style={{
                  width: "112px",
                  height: "129px",
                  backgroundColor: "#f8f8f8",
                  outline: activeImage === i ? "2px solid black" : "2px solid transparent",
                  outlineOffset: "-2px",
                }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Qty + Checkout */}
          <div className="flex items-center gap-4 mt-2">
            <div
              ref={dropdownRef}
              className="relative border border-[#e5e5e5] rounded-[10px]"
              style={{ height: "55px", width: "107px" }}
            >
              <button
                onClick={() => setQtyOpen((o) => !o)}
                className="w-full h-full flex items-center justify-between px-3"
              >
                <div className="flex flex-col items-start">
                  <span
                    className="font-normal"
                    style={{ fontSize: "12px", letterSpacing: "-0.12px", color: "rgba(0,0,0,0.5)" }}
                  >
                    Qty
                  </span>
                  <span className="font-normal text-black" style={{ fontSize: "14px", letterSpacing: "-0.14px" }}>
                    {qty}
                  </span>
                </div>
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className="transition-transform duration-150"
                  style={{ transform: qtyOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <path d="M4 6l4 4 4-4" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {qtyOpen && (
                <div
                  className="absolute left-0 right-0 bottom-full mb-1 bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden z-20 shadow-sm"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <button
                      key={n}
                      onClick={() => { setQty(n); setQtyOpen(false); }}
                      className="w-full text-left px-3 py-2 hover:bg-[#f7f7f7] transition-colors font-normal text-black"
                      style={{ fontSize: "14px" }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="flex-1 text-white font-normal rounded-[10px] hover:opacity-90 transition-opacity flex items-center justify-center"
              style={{
                backgroundColor: "#313131",
                height: "55px",
                fontSize: "14px",
                letterSpacing: "-0.14px",
              }}
            >
              ${(60 * qty).toFixed(2)} — Checkout
            </button>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
