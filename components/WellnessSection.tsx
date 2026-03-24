"use client";

import { useEffect, useRef } from "react";

// Right-side spec icons
const oledIconSrc = "https://www.figma.com/api/mcp/asset/d756455e-d0a9-412e-bb9b-a10c164cb016";
const summonIconSrc = "https://www.figma.com/api/mcp/asset/b0709da3-c54b-42a4-bec4-c5a06ed9f4c2";
const micIconSrc = "https://www.figma.com/api/mcp/asset/da47b70d-eabc-4e9f-bdd0-1709dd7f18e6";
const speakerIconSrc = "https://www.figma.com/api/mcp/asset/4aaf0517-b271-4100-93e6-73cc57e1e6f1";

// Left-side spec icons
const batteryIconSrc = "https://www.figma.com/api/mcp/asset/14e2fa76-7a55-4fc4-91ae-789bd15c44c9";
const chargingIconSrc = "https://www.figma.com/api/mcp/asset/e7824ba5-0d77-4768-9f06-84f1a2babdf9";
const rockerIconSrc = "https://www.figma.com/api/mcp/asset/df7d7d37-041e-4e71-b95a-155152462c61";

function SpecItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-start gap-[13px] self-start">
      <img src={icon} alt="" className="w-[25px] h-[25px] shrink-0 mt-[1px] object-contain" />
      <p
        className="font-normal leading-[1.55]"
        style={{ fontSize: "13.33px", color: "rgba(0,0,0,0.8)", letterSpacing: "-0.13px" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function WellnessSection() {
  const leafRef = useRef<HTMLImageElement>(null);

  // Scroll-momentum wiggle — spring physics in rAF loop
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let velocity = 0;
    let rotation = 0;
    let rafId: number;

    const STIFFNESS = 0.12;
    const DAMPING   = 0.72;
    const SCROLL_SENSITIVITY = 0.035;

    function animate() {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      velocity += scrollDelta * SCROLL_SENSITIVITY;
      velocity += -rotation * STIFFNESS;
      velocity *= DAMPING;
      rotation += velocity;

      if (leafRef.current) {
        // transformOrigin is bottom-center so it pivots at the stem
        // preserve the horizontal centering translate while adding rotation
        leafRef.current.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
      }

      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section id="about" className="bg-white overflow-hidden">
      {/* Centered heading + description */}
      <div className="pt-6 md:pt-10 px-8 text-center">
        <h2
          className="font-normal text-black leading-[0.95] mx-auto"
          style={{ fontSize: "40px", letterSpacing: "-1.2px", maxWidth: "630px" }}
        >
          A wellness companion designed for emotional presence, every day.
        </h2>
        <p
          className="font-normal leading-[1.28] mx-auto mt-6"
          style={{
            fontSize: "20px",
            letterSpacing: "-0.6px",
            color: "rgba(0,0,0,0.5)",
            maxWidth: "718px",
          }}
        >
          Solace Seed combines embodied AI, emotion-aware conversation, and long-term memory to
          help users feel seen, supported, and steadier over time.
        </p>
      </div>

      {/* Product showcase: left specs | robot | right specs */}
      <div className="relative mt-4">
        {/* #f8f8f8 strip covering the lower portion */}
        <div className="absolute bottom-0 inset-x-0 h-[260px] bg-[#f8f8f8]" />

        <div className="relative max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center md:items-end justify-center gap-[50px]">
          {/* Left specs — desktop only */}
          <div className="hidden md:flex flex-col gap-[22px] w-[200px] pb-[240px]">
            <SpecItem icon={batteryIconSrc} label="500mAh battery" />
            <SpecItem icon={chargingIconSrc} label="Type-C Charging" />
            <SpecItem
              icon={rockerIconSrc}
              label="Side rocker – volume / long-press skip/recall last response"
            />
          </div>

          {/* Device composite — both images placed on the same coordinate space
              as the original device.png (2854×3466) reference canvas.
              Container uses device.png aspect ratio so both layers align correctly. */}
          <div
            className="relative z-10 flex-shrink-0 w-[420px] md:w-[520px]"
            style={{ aspectRatio: "2854 / 3466" }}
          >
            {/* Leaf: same canvas width as device.png, but only 2036px wide →
                71.3% of container width. Centered horizontally via left:50% + translateX(-50%).
                Top of leaf image = top of device.png canvas.
                transformOrigin 50% 100% = stem at bottom of leaf image = pivot point. */}
            <img
              ref={leafRef}
              src="/deviceleaf.png"
              alt=""
              aria-hidden="true"
              className="absolute pointer-events-none"
              style={{
                zIndex: 0,
                top: 0,
                left: "48%",
                width: `${(2036 / 2854) * 100}%`, // 71.3%
                transform: "translateX(-50%)",
                transformOrigin: "50% 100%",
                willChange: "transform",
              }}
            />

            {/* Body: same canvas width → 100%. Anchored to bottom of container
                so it sits where it does in the original device.png.
                z-index 10 renders over the leaf stem. */}
            <img
              src="/devicebody.png"
              alt="Solace Seed"
              className="absolute pointer-events-none"
              style={{
                zIndex: 10,
                bottom: 0,
                left: 0,
                width: "100%",
              }}
            />
          </div>

          {/* Right specs — desktop only */}
          <div className="hidden md:flex flex-col gap-[22px] w-[200px] pb-[240px]">
            <SpecItem icon={oledIconSrc} label="1.3–1.5 inch low-power OLED (240 × 240)" />
            <SpecItem icon={summonIconSrc} label="Summon button" />
            <SpecItem icon={micIconSrc} label="2 MEMS mic array" />
            <SpecItem icon={speakerIconSrc} label="3W loudspeaker" />
          </div>
        </div>

        {/* Mobile specs — below device */}
        <div className="md:hidden grid grid-cols-2 gap-x-8 gap-y-3 max-w-md mx-auto px-8 mt-4 pb-4 relative z-10">
          <SpecItem icon={oledIconSrc} label="1.3–1.5 inch low-power OLED (240 × 240)" />
          <SpecItem icon={batteryIconSrc} label="500mAh battery" />
          <SpecItem icon={summonIconSrc} label="Summon button" />
          <SpecItem icon={chargingIconSrc} label="Type-C Charging" />
          <SpecItem icon={micIconSrc} label="2 MEMS mic array" />
          <SpecItem icon={rockerIconSrc} label="Side rocker – volume / long-press skip/recall last response" />
          <SpecItem icon={speakerIconSrc} label="3W loudspeaker" />
        </div>
      </div>
    </section>
  );
}
