"use client";

import { useEffect, useState } from "react";

const seedLogoSrc = "https://www.figma.com/api/mcp/asset/0917fd9f-6f87-47c8-a0ca-eca2150167c4";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const linkColor = isDark && !menuOpen ? "white" : "black";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
      <div className="flex items-center justify-between px-6 md:px-[84px] py-6 md:py-[57px]">
        <div className="flex items-center gap-[35px]">
          <img
            src={seedLogoSrc}
            alt="Solace"
            className="h-[23px] w-auto transition-all duration-300"
            style={{ filter: isDark && !menuOpen ? "none" : "invert(1)" }}
          />
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-[35px]">
            <a
              href="/#features"
              className="text-[15px] tracking-[-0.45px] hover:opacity-70 transition-all duration-300"
              style={{ color: linkColor }}
            >
              Features
            </a>
            <a
              href="/about"
              className="text-[15px] tracking-[-0.45px] hover:opacity-70 transition-all duration-300"
              style={{ color: linkColor }}
            >
              About
            </a>
            <a
              href="mailto:kellyzeng@solacelaunch.org"
              className="text-[15px] tracking-[-0.45px] hover:opacity-70 transition-all duration-300"
              style={{ color: linkColor }}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Desktop buy now */}
        <a
          href="https://buy.stripe.com/7sY14gbMK4VZb3v9lOa3u00"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex text-[14px] tracking-[-0.42px] px-[20px] h-[40px] rounded-[10px] transition-all duration-300 items-center justify-center"
          style={{
            backgroundColor: isDark ? "white" : "black",
            color: isDark ? "black" : "white",
          }}
        >
          Buy now
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className="block w-5 h-[2px] rounded transition-all duration-200"
            style={{
              backgroundColor: isDark && !menuOpen ? "white" : "black",
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <span
            className="block w-5 h-[2px] rounded transition-all duration-200"
            style={{
              backgroundColor: isDark && !menuOpen ? "white" : "black",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-[2px] rounded transition-all duration-200"
            style={{
              backgroundColor: isDark && !menuOpen ? "white" : "black",
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4">
          <a
            href="/#features"
            onClick={() => setMenuOpen(false)}
            className="text-[15px] tracking-[-0.45px] text-black"
          >
            Features
          </a>
          <a
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-[15px] tracking-[-0.45px] text-black"
          >
            About
          </a>
          <a
            href="mailto:kellyzeng@solacelaunch.org"
            onClick={() => setMenuOpen(false)}
            className="text-[15px] tracking-[-0.45px] text-black"
          >
            Contact
          </a>
          <a
            href="https://buy.stripe.com/7sY14gbMK4VZb3v9lOa3u00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] tracking-[-0.42px] px-[20px] h-[40px] rounded-[10px] flex items-center justify-center text-white"
            style={{ backgroundColor: "#313131" }}
          >
            Buy now
          </a>
        </div>
      )}
    </nav>
  );
}
