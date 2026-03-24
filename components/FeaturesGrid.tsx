import FadeIn from "./FadeIn";

/** Public filenames include commas/spaces — encode for valid URLs */
const icon = (filename: string) => `/${encodeURIComponent(filename)}`;

const lightningIconSrc = icon("lightning, zap, flash.png");
const leafIconSrc = icon("growth, grow, leafs.png");
const magicHandsIconSrc = icon("magic hands, magic rainbow.png");
const performanceIconSrc = icon("performance, speed, scale.png");
const lightBulbIconSrc = icon("light bulb, idea, light.png");
const flowerIconSrc = icon("Focus, exposure, macro, flower 2.png");
const micIconSrc = icon("microphone, mic, sound, podcast.png");

export default function FeaturesGrid() {
  return (
    <section id="features" className="bg-white pt-16 pb-10 md:py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2
            className="font-normal text-black text-center mb-6 md:mb-12"
            style={{ fontSize: "30px", letterSpacing: "-0.9px" }}
          >
            There for you, even when your friends aren&apos;t.
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-[40px] justify-center items-center md:items-start">
          {/* Card 1: Customizable personalities */}
          <FadeIn delay={0} className="w-full md:w-1/3">
          <div className="flex flex-col gap-4 w-full">
            <div
              className="overflow-hidden rounded-[20px] flex flex-col justify-between w-full"
              style={{ backgroundColor: "#f8f8f8", height: "397px", padding: "0" }}
            >
              {/* Personality options */}
              <div className="flex flex-col gap-5 p-6 h-full justify-center">
                {/* Energetic option */}
                <div
                  className="flex items-center gap-[22px] px-[36px] py-[30px] rounded-[10px] border"
                  style={{ borderColor: "#e1e1e1", backgroundColor: "white" }}
                >
                  <img src={lightningIconSrc} alt="" className="w-[24px] h-[24px] shrink-0" />
                  <div>
                    <p className="font-normal text-black" style={{ fontSize: "17px", letterSpacing: "-0.51px" }}>
                      Energetic &amp; Encouraging
                    </p>
                    <p className="font-normal mt-1" style={{ fontSize: "14px", color: "rgba(0,0,0,0.5)" }}>
                      Optimistic and lively, always pushing for progress.
                    </p>
                  </div>
                </div>
                {/* Calm option - selected/highlighted */}
                <div
                  className="flex items-center gap-[22px] px-[36px] py-[30px] rounded-[10px] border"
                  style={{ borderColor: "#8cc3b8", backgroundColor: "#f8fdfc" }}
                >
                  <img src={leafIconSrc} alt="" className="w-[24px] h-[24px] shrink-0" />
                  <div>
                    <p className="font-normal" style={{ fontSize: "17px", letterSpacing: "-0.51px", color: "#154e42" }}>
                      Calm &amp; Soothing
                    </p>
                    <p className="font-normal mt-1" style={{ fontSize: "14px", color: "rgba(21,78,66,0.5)" }}>
                      Gentle, patient, and steady. Perfect for stressful days.
                    </p>
                  </div>
                </div>
                {/* Witty option */}
                <div
                  className="flex items-center gap-[22px] px-[36px] py-[30px] rounded-[10px] border"
                  style={{ borderColor: "#e1e1e1", backgroundColor: "white" }}
                >
                  <img src={magicHandsIconSrc} alt="" className="w-[24px] h-[24px] shrink-0" />
                  <div>
                    <p className="font-normal text-black" style={{ fontSize: "17px", letterSpacing: "-0.51px" }}>
                      Witty &amp; Playful
                    </p>
                    <p className="font-normal mt-1" style={{ fontSize: "14px", color: "rgba(0,0,0,0.5)" }}>
                      Cheeky and humorous, ready to brighten your day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-normal text-black" style={{ fontSize: "18px", letterSpacing: "-0.54px" }}>
              Customizable personalities
            </p>
            <p className="font-normal" style={{ fontSize: "14px", letterSpacing: "-0.28px", color: "rgba(0,0,0,0.5)", maxWidth: "296px" }}>
              Make Solace truly yours. Choose a personality that matches your vibe and let your AI companion adapt to how you like to interact.
            </p>
          </div>
          </FadeIn>

          {/* Card 2: Mindfulness & reflection */}
          <FadeIn delay={130} className="w-full md:w-1/3">
          <div className="flex flex-col gap-4 w-full">
            <div
              className="overflow-hidden rounded-[20px] relative w-full"
              style={{ backgroundColor: "#f8f8f8", height: "397px" }}
            >
              {/* Daily check-in card mockup */}
              <div
                className="absolute bg-white border border-[#e1e1e1] rounded-[10px] shadow-sm p-6 flex flex-col gap-4 left-1/2 -translate-x-1/2"
                style={{ width: "calc(100% - 40px)", maxWidth: "370px", top: "40px" }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-normal text-black" style={{ fontSize: "17px", letterSpacing: "-0.51px" }}>
                    Daily check-in{" "}
                    <span style={{ color: "rgba(0,0,0,0.5)" }}>February 12</span>
                  </span>
                  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-black">
                    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { q: "How are you feeling on a scale from 1-10?", a: "Around an 8", iconSrc: performanceIconSrc },
                    { q: "Main focuses for today?", a: "Studying for my exam on Friday", iconSrc: lightBulbIconSrc },
                    { q: "What are you grateful for?", a: "My friends and family", iconSrc: flowerIconSrc },
                  ].map((item) => (
                    <div key={item.q} className="flex items-center gap-3 bg-[#f7f7f7] rounded-[10px] px-3 py-3">
                      <div className="bg-white overflow-hidden relative rounded-[5px] shrink-0 size-[40px] flex items-center justify-center">
                        <img src={item.iconSrc} alt="" className="w-[23px] h-[23px] object-contain" />
                      </div>
                      <div>
                        <p className="font-normal" style={{ fontSize: "12px", color: "rgba(0,0,0,0.5)" }}>{item.q}</p>
                        <p className="font-normal text-black mt-1" style={{ fontSize: "12px" }}>{item.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-normal text-black" style={{ fontSize: "18px", letterSpacing: "-0.54px" }}>
              Mindfulness &amp; reflection tools
            </p>
            <p className="font-normal" style={{ fontSize: "14px", letterSpacing: "-0.28px", color: "rgba(0,0,0,0.5)", maxWidth: "296px" }}>
              Guided check-ins and journaling prompts help you understand your feelings, and practice small moments of mindfulness daily.
            </p>
          </div>
          </FadeIn>

          {/* Card 3: Always-on emotional support */}
          <FadeIn delay={260} className="w-full md:w-1/3">
          <div className="flex flex-col gap-4 w-full">
            <div
              className="overflow-hidden rounded-[20px] relative w-full"
              style={{ backgroundColor: "#f8f8f8", height: "397px" }}
            >
              {/* Chat interface mockup */}
              <div
                className="absolute bg-white border border-[#e1e1e1] rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] shadow-sm p-6 flex flex-col gap-3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ maxWidth: "340px" }}
              >
                <p className="font-normal text-black" style={{ fontSize: "19px", letterSpacing: "-0.57px" }}>
                  Solace
                </p>
                <p className="font-normal" style={{ fontSize: "16px", color: "rgba(0,0,0,0.8)", lineHeight: "1.39" }}>
                  Hey&hellip; looks like everyone else is asleep. Want to talk for a bit? I&apos;m here.
                </p>
              </div>
              <p
                className="absolute font-normal text-center"
                style={{ top: "72px", left: "50%", transform: "translateX(-50%)", fontSize: "16px", color: "rgba(0,0,0,0.5)", whiteSpace: "nowrap" }}
              >
                <span className="font-medium">Today</span>{"  2:18 AM"}
              </p>
              {/* Mic button */}
              <div
                className="absolute bg-white border border-[#e1e1e1] rounded-[10px] p-3 shadow-sm"
                style={{ top: "276px", left: "50%", transform: "translateX(-50%)" }}
              >
                <img src={micIconSrc} alt="mic" className="w-[26px] h-auto" />
              </div>
            </div>
            <p className="font-normal text-black" style={{ fontSize: "18px", letterSpacing: "-0.54px" }}>
              Always-on emotional support
            </p>
            <p className="font-normal" style={{ fontSize: "14px", letterSpacing: "-0.28px", color: "rgba(0,0,0,0.5)", maxWidth: "282px" }}>
              Solace is there whenever you need it — ready to listen, check in, or guide you through stress and tough days.
            </p>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
