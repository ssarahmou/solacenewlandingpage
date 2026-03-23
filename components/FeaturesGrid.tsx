const featureList = [
  { icon: <LightningIcon />, title: "Energetic & Encouraging", desc: "Uplifts your mood with enthusiasm and positive reinforcement." },
  { icon: <MoonIcon />, title: "Calm & Grounding", desc: "Creates a sense of peace and safety during difficult moments." },
  { icon: <StarIcon />, title: "Witty & Playful", desc: "Keeps things light with humor and personality you can connect with." },
  { icon: <SlidersIcon />, title: "Customizable personalities", desc: "Adjust Seed's tone and style to match what you need most." },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-16 leading-snug">
          There for you, even when<br />your friends aren&apos;t.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: feature list */}
          <div className="flex flex-col gap-6">
            {featureList.map((f) => (
              <div key={f.title} className="flex flex-col gap-1 p-4 rounded-2xl bg-gray-50">
                <div className="flex items-center gap-2 text-gray-700">
                  {f.icon}
                  <span className="font-semibold text-sm text-gray-900">{f.title}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed pl-6">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Center: Date check-in card mockup */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Date check-in</span>
                <span className="text-xs text-gray-400">February 12</span>
                <span className="text-xs font-semibold text-green-600">✓</span>
              </div>
              <div className="space-y-3">
                {[
                  "How are you feeling today from 1–10?",
                  "What are you grateful for?",
                  "No Workmails",
                ].map((q) => (
                  <div key={q} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full border border-gray-200 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-600">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mindfulness card */}
            <div className="rounded-2xl bg-blue-50 p-5 flex flex-col gap-2">
              <span className="text-xs font-semibold text-blue-700">Mindfulness &amp; reflection tools</span>
              <p className="text-xs text-blue-600 leading-relaxed">
                Guided breathing, journaling prompts, and reflection exercises for your feelings.
              </p>
            </div>
          </div>

          {/* Right: Chat mockup + Always-on card */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Today</span>
                <span className="text-xs text-gray-400">3:16 AM</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0" />
                  <div className="bg-gray-100 rounded-2xl rounded-bl-none px-3 py-2 max-w-[80%]">
                    <p className="text-xs text-gray-700">Solace</p>
                    <p className="text-xs text-gray-600">Hey, looks like it&apos;s 3am. Is everything okay? I&apos;m here to talk if you&apos;d like to.</p>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                    <span className="text-white text-xs">🎤</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Always-on card */}
            <div className="rounded-2xl bg-green-50 p-5 flex flex-col gap-2">
              <span className="text-xs font-semibold text-green-700">Always-on emotional support</span>
              <p className="text-xs text-green-600 leading-relaxed">
                Seed is always listening and ready to guide you through anxiety, stress, or tough days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LightningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}
