"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <SeedLogo />
      </div>

      {/* Nav links */}
      <div className="flex items-center gap-8">
        <a href="#features" className="text-white text-sm hover:text-gray-300 transition-colors">
          Features
        </a>
        <a href="#about" className="text-white text-sm hover:text-gray-300 transition-colors">
          About
        </a>
        <a href="#contact" className="text-white text-sm hover:text-gray-300 transition-colors">
          Contact
        </a>
      </div>

      {/* Buy now */}
      <button className="bg-white text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition-colors">
        Buy now
      </button>
    </nav>
  );
}

function SeedLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Seed/ghost-like blob logo */}
      <ellipse cx="16" cy="14" rx="10" ry="11" fill="white" />
      <path d="M6 14 Q6 26 10 26 Q12 22 16 24 Q20 22 22 26 Q26 26 26 14" fill="white" />
      <circle cx="12" cy="13" r="2" fill="black" />
      <circle cx="20" cy="13" r="2" fill="black" />
    </svg>
  );
}
