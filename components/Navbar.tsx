"use client";

import { useEffect, useState } from "react";

const seedLogoSrc = "https://www.figma.com/api/mcp/asset/0917fd9f-6f87-47c8-a0ca-eca2150167c4";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const hero = document.querySelector("section");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsDark(entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[84px] py-[57px] transition-colors duration-300">
      {/* Logo + Nav links */}
      <div className="flex items-center gap-[35px]">
        <img
          src={seedLogoSrc}
          alt="Solace"
          className="h-[23px] w-auto transition-all duration-300"
          style={{ filter: isDark ? "none" : "invert(1)" }}
        />
        <a
          href="/#features"
          className="text-[15px] tracking-[-0.45px] hover:opacity-70 transition-all duration-300"
          style={{ color: isDark ? "white" : "black" }}
        >
          Features
        </a>
        <a
          href="/about"
          className="text-[15px] tracking-[-0.45px] hover:opacity-70 transition-all duration-300"
          style={{ color: isDark ? "white" : "black" }}
        >
          About
        </a>
        <a
          href="mailto:kellyzeng@solacelaunch.org"
          className="text-[15px] tracking-[-0.45px] hover:opacity-70 transition-all duration-300"
          style={{ color: isDark ? "white" : "black" }}
        >
          Contact
        </a>
      </div>

      {/* Buy now */}
      <a
        href="https://buy.stripe.com/7sY14gbMK4VZb3v9lOa3u00"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[14px] tracking-[-0.42px] px-[20px] h-[40px] rounded-[10px] transition-all duration-300 flex items-center justify-center"
        style={{
          backgroundColor: isDark ? "white" : "black",
          color: isDark ? "black" : "white",
        }}
      >
        Buy now
      </a>
    </nav>
  );
}
