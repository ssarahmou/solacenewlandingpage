export default function Hero() {
  return (
    <section className="relative h-screen bg-black flex flex-col items-center justify-end pb-32">
      {/* Video placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-gray-700 text-sm tracking-widest font-mono">[ VIDEO PLACEHOLDER ]</span>
      </div>

      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center gap-5 text-center px-4">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight max-w-2xl">
          Your personal AI companion.
        </h1>
        <p className="text-gray-400 text-base md:text-lg">
          With Seed, it&apos;s always that deep with us.
        </p>
        <button className="mt-2 flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
          <SeedIconSmall />
          Shop now
        </button>
      </div>
    </section>
  );
}

function SeedIconSmall() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16" cy="14" rx="10" ry="11" fill="black" />
      <path d="M6 14 Q6 26 10 26 Q12 22 16 24 Q20 22 22 26 Q26 26 26 14" fill="black" />
      <circle cx="12" cy="13" r="2" fill="white" />
      <circle cx="20" cy="13" r="2" fill="white" />
    </svg>
  );
}
