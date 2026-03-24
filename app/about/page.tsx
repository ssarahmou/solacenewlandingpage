import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

// Figma assets (node 3462-1287 mobile / 3449-3941 desktop)
const heroBgSrc     = "https://www.figma.com/api/mcp/asset/9dfb3aea-3004-49a5-bb50-98acfc2ec7a2";
const kellyPhotoSrc = "https://www.figma.com/api/mcp/asset/3c35b4ee-52bb-4552-bb46-b6c39a935df3";
const sarahPhotoSrc = "https://www.figma.com/api/mcp/asset/0d4cb013-21ae-460e-a91f-ae05cf75eb64";
const backerSeedSrc = "https://www.figma.com/api/mcp/asset/3cbd1c24-e007-42f9-9f82-dad89b4087ab";
const backerIconSrc = "https://www.figma.com/api/mcp/asset/7ddecee1-919a-4ab7-ba2c-e1965e1e8653";
const backerLogoSrc = "https://www.figma.com/api/mcp/asset/ee7f317e-35d4-4372-a22b-763fd5de7b58";

export const metadata = {
  title: "About — Solace",
  description: "No one should struggle in silence. Meet the team behind Solace.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[220px] md:h-[300px] overflow-hidden">
        <img
          src={heroBgSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ════════════════════════════════════════════════════════════
          MOBILE layout  (< md) — single column, Figma 3462-1287
          ════════════════════════════════════════════════════════════ */}
      <div className="md:hidden">
        {/* Story text */}
        <section className="bg-white px-8 pb-10">
          <FadeIn>
            <div
              className="inline-flex items-center justify-center px-[11px] rounded-[5px] mb-6"
              style={{ backgroundColor: "#313131", height: "22px" }}
            >
              <span className="font-normal text-white" style={{ fontSize: "11px", letterSpacing: "-0.11px" }}>
                Our story
              </span>
            </div>

            <h1
              className="font-normal text-black mb-6"
              style={{ fontSize: "36px", letterSpacing: "-1.2px", lineHeight: "0.92" }}
            >
              No one should struggle in silence.
            </h1>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="font-normal text-black mb-10" style={{ fontSize: "13px", letterSpacing: "-0.13px", lineHeight: "1.58" }}>
              <p className="mb-4">
                We started Solace because, as college students, we&apos;ve seen how easy it is for
                people to feel isolated—even when surrounded by others. Between academic pressure,
                constant digital noise, and the unspoken struggles our friends face, we realized
                that emotional wellbeing often takes a back seat. We wanted to change that.
              </p>
              <p className="mb-4">
                With Solace, we&apos;re building AI that doesn&apos;t just listen, but truly
                understands—helping people feel heard, supported, and less alone in this chaotic world.
              </p>
              <p className="mb-0">Best,</p>
              <p>Kelly &amp; Sarah</p>
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="font-normal mb-3" style={{ fontSize: "12.7px", letterSpacing: "-0.25px", color: "#3a7367" }}>
              We are proudly backed by...
            </p>
            <div className="flex items-center gap-4">
              <img src={backerSeedSrc} alt="Backer" className="h-[44px] w-auto object-contain" />
              <img src={backerIconSrc} alt="Backer" className="h-[44px] w-auto object-contain" />
              <img src={backerLogoSrc} alt="Backer" className="h-[38px] w-auto object-contain" />
            </div>
          </FadeIn>
        </section>

        {/* Team photos */}
        <section className="bg-white pb-16 px-8">
          <FadeIn>
            <div className="flex gap-[18px] mb-2">
              {["CEO", "COO"].map((role) => (
                <p key={role} className="font-normal w-[150px]" style={{ fontSize: "7.4px", letterSpacing: "-0.22px", color: "rgba(0,0,0,0.5)" }}>
                  {role}
                </p>
              ))}
            </div>
            <div className="flex gap-[18px] mb-4">
              <img src={kellyPhotoSrc} alt="Kelly Zeng" className="object-cover" style={{ width: "150px", height: "150px", borderRadius: "4.2px" }} />
              <img src={sarahPhotoSrc} alt="Sarah Mou"  className="object-cover" style={{ width: "150px", height: "150px", borderRadius: "4.2px" }} />
            </div>
            <div className="flex gap-[18px]">
              <div style={{ width: "150px" }}>
                <p className="font-normal text-black mb-[2px]" style={{ fontSize: "12px", letterSpacing: "-0.36px", lineHeight: "1.2" }}>Kelly Zeng</p>
                <p className="font-normal" style={{ fontSize: "8px", color: "rgba(0,0,0,0.5)", lineHeight: "1.45" }}>UC Berkeley Economics &amp; Data Science</p>
              </div>
              <div style={{ width: "150px" }}>
                <p className="font-normal text-black mb-[2px]" style={{ fontSize: "12px", letterSpacing: "-0.36px", lineHeight: "1.2" }}>Sarah Mou</p>
                <p className="font-normal" style={{ fontSize: "8px", color: "rgba(0,0,0,0.5)", lineHeight: "1.45" }}>UC Berkeley Cognitive Science &amp; Design</p>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>

      {/* ════════════════════════════════════════════════════════════
          DESKTOP layout  (≥ md) — two columns, Figma 3449-3941
          ════════════════════════════════════════════════════════════ */}
      <section className="hidden md:block bg-white pb-24 px-8">
        <div className="max-w-6xl mx-auto flex gap-0 items-start">

          {/* Left: story text */}
          <FadeIn direction="right" className="flex-1 pr-16 pt-[56px]">
            <div
              className="inline-flex items-center justify-center px-3 rounded-[5px] mb-7"
              style={{ backgroundColor: "#313131", height: "24px" }}
            >
              <span className="font-normal text-white" style={{ fontSize: "12px", letterSpacing: "-0.12px" }}>Our story</span>
            </div>

            <h1
              className="font-normal text-black mb-8"
              style={{ fontSize: "50px", letterSpacing: "-1.5px", lineHeight: "0.89", maxWidth: "402px" }}
            >
              No one should struggle in silence.
            </h1>

            <div
              className="font-normal text-black mb-12"
              style={{ fontSize: "14px", letterSpacing: "-0.14px", lineHeight: "1.58", maxWidth: "452px" }}
            >
              <p className="mb-4">
                We started Solace because, as college students, we&apos;ve seen how easy it is for
                people to feel isolated—even when surrounded by others. Between academic pressure,
                constant digital noise, and the unspoken struggles our friends face, we realized
                that emotional wellbeing often takes a back seat. We wanted to change that.
              </p>
              <p className="mb-4">
                With Solace, we&apos;re building AI that doesn&apos;t just listen, but truly
                understands—helping people feel heard, supported, and less alone in this chaotic world.
              </p>
              <p className="mb-0">Best,</p>
              <p>Kelly &amp; Sarah</p>
            </div>

            <p className="font-normal mb-4" style={{ fontSize: "14px", letterSpacing: "-0.28px", color: "#3a7367" }}>
              We are proudly backed by...
            </p>
            <div className="flex items-center gap-5">
              <img src={backerSeedSrc} alt="Backer" className="h-[50px] w-auto object-contain" />
              <img src={backerIconSrc} alt="Backer" className="h-[50px] w-auto object-contain" />
              <img src={backerLogoSrc} alt="Backer" className="h-[42px] w-auto object-contain" />
            </div>
          </FadeIn>

          {/* Vertical divider */}
          <div className="self-stretch w-px flex-shrink-0" style={{ backgroundColor: "#e5e5e5", marginTop: "56px" }} />

          {/* Right: founder photos */}
          <FadeIn delay={200} direction="left" className="pl-16 pt-[56px] flex-shrink-0">
            <div className="flex gap-[30px] mb-5">
              {["CEO", "COO"].map((role) => (
                <p key={role} className="font-normal w-[291px]" style={{ fontSize: "14.3px", letterSpacing: "-0.43px", color: "rgba(0,0,0,0.5)" }}>
                  {role}
                </p>
              ))}
            </div>

            <div className="flex gap-[30px] mb-6">
              <img src={kellyPhotoSrc} alt="Kelly Zeng" className="w-[291px] h-[291px] object-cover rounded-[8px]" />
              <img src={sarahPhotoSrc} alt="Sarah Mou"  className="w-[291px] h-[291px] object-cover rounded-[8px]" />
            </div>

            <div className="flex gap-[30px]">
              <div className="w-[291px]">
                <p className="font-normal text-black mb-1" style={{ fontSize: "19.5px", letterSpacing: "-0.585px", lineHeight: "1.2" }}>Kelly Zeng</p>
                <p className="font-normal" style={{ fontSize: "14.3px", letterSpacing: "-0.43px", lineHeight: "1.45", color: "rgba(0,0,0,0.5)", maxWidth: "164px" }}>
                  UC Berkeley Economics &amp; Data Science
                </p>
              </div>
              <div className="w-[291px]">
                <p className="font-normal text-black mb-1" style={{ fontSize: "19.5px", letterSpacing: "-0.585px", lineHeight: "1.2" }}>Sarah Mou</p>
                <p className="font-normal" style={{ fontSize: "14.3px", letterSpacing: "-0.43px", lineHeight: "1.45", color: "rgba(0,0,0,0.5)", maxWidth: "164px" }}>
                  UC Berkeley Cognitive Science &amp; Design
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
