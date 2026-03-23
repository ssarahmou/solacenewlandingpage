export default function WellnessSection() {
  return (
    <section id="about" className="relative bg-white overflow-hidden">
      {/* Green hills landscape background */}
      <div className="absolute bottom-0 left-0 right-0 h-64">
        <LandscapeSVG />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            A wellness companion designed for emotional presence, every day.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Solace Seed combines embodied AI, attention-aware conversation, and long-term memory to help users feel seen, supported, and healthier over time.
          </p>
          <button className="self-start bg-black text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Speak to Solace
          </button>
        </div>

        {/* Right: robot SVG */}
        <div className="flex justify-center items-end">
          <SolaceRobotSVG />
        </div>
      </div>
    </section>
  );
}

function LandscapeSVG() {
  return (
    <svg
      viewBox="0 0 1440 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMax slice"
    >
      {/* Sky */}
      <rect width="1440" height="260" fill="#d4e9c7" />
      {/* Far hills */}
      <ellipse cx="400" cy="300" rx="500" ry="200" fill="#a8d08d" />
      <ellipse cx="1100" cy="310" rx="550" ry="210" fill="#95c47a" />
      {/* Near hills */}
      <ellipse cx="200" cy="330" rx="400" ry="180" fill="#72b354" />
      <ellipse cx="900" cy="340" rx="600" ry="200" fill="#5da040" />
      <ellipse cx="1350" cy="320" rx="350" ry="160" fill="#72b354" />
    </svg>
  );
}

function SolaceRobotSVG() {
  return (
    <svg
      width="280"
      height="340"
      viewBox="0 0 280 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Plant stem */}
      <line x1="140" y1="30" x2="140" y2="70" stroke="#4a7c3f" strokeWidth="3" strokeLinecap="round" />
      {/* Left leaf */}
      <ellipse cx="118" cy="40" rx="18" ry="9" fill="#5da040" transform="rotate(-30 118 40)" />
      {/* Right leaf */}
      <ellipse cx="162" cy="35" rx="18" ry="9" fill="#72b354" transform="rotate(25 162 35)" />
      {/* Top sprout bud */}
      <ellipse cx="140" cy="28" rx="8" ry="10" fill="#5da040" />

      {/* Body — large white rounded rectangle */}
      <rect x="60" y="70" width="160" height="200" rx="50" fill="white" />

      {/* Face screen — rounded square, slightly darker */}
      <rect x="85" y="105" width="110" height="90" rx="18" fill="#f0f0f0" />

      {/* Eyes */}
      <rect x="103" y="128" width="28" height="24" rx="7" fill="#1a1a1a" />
      <rect x="149" y="128" width="28" height="24" rx="7" fill="#1a1a1a" />
      {/* Eye shine */}
      <circle cx="110" cy="134" r="4" fill="white" />
      <circle cx="156" cy="134" r="4" fill="white" />

      {/* Smile */}
      <path d="M108 164 Q140 180 172 164" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Body label */}
      <text x="140" y="238" textAnchor="middle" fill="#cccccc" fontSize="11" fontFamily="sans-serif">Solace</text>

      {/* Base / feet */}
      <ellipse cx="100" cy="278" rx="20" ry="8" fill="#e5e5e5" />
      <ellipse cx="180" cy="278" rx="20" ry="8" fill="#e5e5e5" />

      {/* Power button hint on side */}
      <circle cx="220" cy="200" r="7" fill="#e0e0e0" />
      <circle cx="220" cy="200" r="4" fill="#cccccc" />
    </svg>
  );
}
