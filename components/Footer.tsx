export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-10 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: socials */}
        <div className="flex flex-col gap-4">
          <div className="mb-2">
            <SeedLogoSmall />
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors">
              <InstagramIcon /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors">
              <TikTokIcon /> TikTok
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>

        {/* Center: nav links */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Company</span>
          {["Privacy Policy", "Terms of Service", "Shipping Policy", "Return Policy", "About Us"].map((link) => (
            <a key={link} href="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Right: email signup */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-900 leading-snug">
            Never miss out<br />on an update
          </h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
            />
            <button className="bg-black text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-800 transition-colors">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-12 flex items-center justify-between border-t border-gray-100 pt-6">
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Solace. All rights reserved.</p>
        {/* Dark mode toggle placeholder */}
        <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </button>
      </div>
    </footer>
  );
}

function SeedLogoSmall() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="14" rx="10" ry="11" fill="#1a1a1a" />
      <path d="M6 14 Q6 26 10 26 Q12 22 16 24 Q20 22 22 26 Q26 26 26 14" fill="#1a1a1a" />
      <circle cx="12" cy="13" r="2" fill="white" />
      <circle cx="20" cy="13" r="2" fill="white" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
