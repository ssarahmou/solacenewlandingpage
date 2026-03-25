"use client";

import { useEffect, useState } from "react";
import { STRIPE_CHECKOUT_URL } from "@/lib/checkout";

const shopIconSrc = "/2.png";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const fade = (delay: number) => ({
    opacity:   mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(22px)",
    transition: `opacity 800ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 800ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
  });

  return (
    <section className="group relative h-screen bg-white flex flex-col items-center overflow-hidden">
      {/* Full-bleed video background */}
      <div className="absolute inset-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover object-center">
          <source src="/hero-bg.mov" type="video/quicktime" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
      </div>

      <div className="flex-1" />

      {/* Copy + CTA */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center mb-20 px-4">
        <h1
          className="text-white font-normal text-center leading-[0.84]"
          style={{ fontSize: "49px", letterSpacing: "-2.94px", maxWidth: "401px", ...fade(0) }}
        >
          Your personal AI companion.
        </h1>

        <p
          className="text-white font-normal text-center"
          style={{ fontSize: "19px", letterSpacing: "-0.58px", maxWidth: "386px", ...fade(150) }}
        >
          With Seed, it&apos;s always that deep with us.
        </p>

        <a
          href={STRIPE_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center gap-[18px] bg-white text-black font-normal rounded-[10px] hover:bg-gray-100 transition-colors"
          style={{
            fontSize: "20px",
            letterSpacing: "-0.6px",
            paddingLeft: "20px",
            paddingRight: "20px",
            height: "51px",
            ...fade(300),
          }}
        >
          <img src={shopIconSrc} alt="" className="h-[23px] w-auto" />
          Shop now
        </a>
      </div>
    </section>
  );
}
