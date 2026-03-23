const pillars = [
  {
    icon: <PrivacyIcon />,
    title: "Privacy-first, by design",
    description: "Your personal story stays personal and protected.",
  },
  {
    icon: <CareIcon />,
    title: "Personalized care",
    description: "Seed learns your name, your day, and everything in between.",
  },
  {
    icon: <LocationIcon />,
    title: "Meets you where you are",
    description: "Emotional support that adapts to your needs, mood, and life.",
  },
];

export default function FeaturePillars() {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {pillars.map((p) => (
          <div key={p.title} className="flex flex-col items-start gap-3">
            <div className="text-gray-800">{p.icon}</div>
            <h3 className="font-semibold text-sm text-gray-900">{p.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PrivacyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function CareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
