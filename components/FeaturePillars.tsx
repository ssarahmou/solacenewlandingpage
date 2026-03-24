const lockIconSrc = "/icon-lock.svg";
const leafIconSrc = "/icon-leaf.svg";
const magicIconSrc = "/icon-magic.svg";

const pillars = [
  {
    icon: lockIconSrc,
    title: "Privacy-first, by design",
    description: "Your conversations and data are protected by default, not by settings.",
  },
  {
    icon: leafIconSrc,
    title: "Personalized care",
    description: "Seed learns your rhythms, moods, and preferences over time.",
  },
  {
    icon: magicIconSrc,
    title: "Meets you where you are",
    description: "Emotional support that meets you where you are, not where you \u201cshould\u201d be.",
  },
];

export default function FeaturePillars() {
  return (
    <section className="bg-white py-8 md:py-16 px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-[15px] max-w-5xl mx-auto">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="flex flex-col gap-[14px] items-center justify-center px-6 md:px-[44px] py-[40px] rounded-[10px] w-full md:w-[442px]"
          >
            <div className="flex items-center gap-[18px]">
              <img src={p.icon} alt="" className="w-[24px] h-[24px]" />
              <h3
                className="font-normal text-black whitespace-nowrap"
                style={{ fontSize: "24px", letterSpacing: "-0.72px" }}
              >
                {p.title}
              </h3>
            </div>
            <p
              className="font-normal text-center"
              style={{
                fontSize: "14px",
                letterSpacing: "-0.42px",
                color: "rgba(0,0,0,0.5)",
                maxWidth: "259px",
              }}
            >
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
