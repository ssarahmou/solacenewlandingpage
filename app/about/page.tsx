import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

// Figma node 3449-3941 assets
const heroBgSrc      = "https://www.figma.com/api/mcp/asset/f697912e-14ef-4324-ab6c-9afc8e361aea";
const kellyPhotoSrc  = "https://www.figma.com/api/mcp/asset/a1ddbe06-7a74-4eb1-a089-49b3d626f8bc";
const sarahPhotoSrc  = "https://www.figma.com/api/mcp/asset/8ca5592f-90e2-4b7f-a367-c00ee709af68";
const backerSeedSrc  = "https://www.figma.com/api/mcp/asset/f772e239-c151-4767-bad8-d9f6ddc8a36d";
const backerIconSrc  = "https://www.figma.com/api/mcp/asset/a1b49066-e5d9-476d-b345-2b73188336d2";
const backerLogoSrc  = "https://www.figma.com/api/mcp/asset/65c453be-04d9-4dba-b9ea-d9e065463f5c";

export const metadata = {
  title: "About — Solace",
  description: "No one should struggle in silence. Meet the team behind Solace.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero: floral painting ─────────────────────────────────── */}
      <section className="relative h-[280px] overflow-hidden">
        <img
          src={heroBgSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        {/* soft fade into white at the bottom */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Main content ─────────────────────────────────────────── */}
      <section className="bg-white pb-24 px-8">
        <div className="max-w-6xl mx-auto flex gap-0 items-start">

          {/* Left column: story text */}
          <FadeIn direction="right" className="flex-1 pr-16 pt-[56px]">
            {/* "Our story" pill */}
            <div
              className="inline-flex items-center justify-center px-3 rounded-[5px] mb-7"
              style={{ backgroundColor: "#313131", height: "24px" }}
            >
              <span
                className="font-normal text-white"
                style={{ fontSize: "12px", letterSpacing: "-0.12px" }}
              >
                Our story
              </span>
            </div>

            <h1
              className="font-normal text-black mb-8"
              style={{
                fontSize: "50px",
                letterSpacing: "-1.5px",
                lineHeight: "0.89",
                maxWidth: "402px",
              }}
            >
              No one should struggle in silence.
            </h1>

            <div
              className="font-normal text-black mb-12"
              style={{
                fontSize: "14px",
                letterSpacing: "-0.14px",
                lineHeight: "1.58",
                maxWidth: "452px",
              }}
            >
              <p className="mb-4">
                We started Solace because, as college students, we&apos;ve seen how easy it is for
                people to feel isolated—even when surrounded by others. Between academic pressure,
                constant digital noise, and the unspoken struggles our friends face, we realized
                that emotional wellbeing often takes a back seat. We wanted to change that.
              </p>
              <p className="mb-4">
                With Solace, we&apos;re building AI that doesn&apos;t just listen, but truly
                understands—helping people feel heard, supported, and less alone in this chaotic
                world.
              </p>
              <p className="mb-0">Best,</p>
              <p>Kelly &amp; Sarah</p>
            </div>

            {/* Backers */}
            <div>
              <p
                className="font-normal mb-4"
                style={{ fontSize: "14px", letterSpacing: "-0.28px", color: "#3a7367" }}
              >
                We are proudly backed by...
              </p>
              <div className="flex items-center gap-5">
                <img src={backerSeedSrc}  alt="Backer" className="h-[50px] w-auto object-contain" />
                <img src={backerIconSrc}  alt="Backer" className="h-[50px] w-auto object-contain" />
                <img src={backerLogoSrc}  alt="Backer" className="h-[42px] w-auto object-contain" />
              </div>
            </div>
          </FadeIn>

          {/* Vertical divider */}
          <div
            className="self-stretch w-px flex-shrink-0"
            style={{ backgroundColor: "#e5e5e5", marginTop: "56px" }}
          />

          {/* Right column: founder photos */}
          <FadeIn delay={200} direction="left" className="pl-16 pt-[56px] flex-shrink-0">
            {/* Role labels */}
            <div className="flex gap-[30px] mb-5">
              {["CEO", "COO"].map((role) => (
                <p
                  key={role}
                  className="font-normal w-[291px]"
                  style={{
                    fontSize: "14.3px",
                    letterSpacing: "-0.43px",
                    color: "rgba(0,0,0,0.5)",
                  }}
                >
                  {role}
                </p>
              ))}
            </div>

            {/* Photos */}
            <div className="flex gap-[30px] mb-6">
              <img
                src={kellyPhotoSrc}
                alt="Kelly Zeng"
                className="w-[291px] h-[291px] object-cover rounded-[8px]"
              />
              <img
                src={sarahPhotoSrc}
                alt="Sarah Mou"
                className="w-[291px] h-[291px] object-cover rounded-[8px]"
              />
            </div>

            {/* Names + affiliations */}
            <div className="flex gap-[30px]">
              <div className="w-[291px]">
                <p
                  className="font-normal text-black mb-1"
                  style={{ fontSize: "19.5px", letterSpacing: "-0.585px", lineHeight: "1.2" }}
                >
                  Kelly Zeng
                </p>
                <p
                  className="font-normal"
                  style={{
                    fontSize: "14.3px",
                    letterSpacing: "-0.43px",
                    lineHeight: "1.45",
                    color: "rgba(0,0,0,0.5)",
                    maxWidth: "164px",
                  }}
                >
                  UC Berkeley Economics &amp; Data Science
                </p>
              </div>
              <div className="w-[291px]">
                <p
                  className="font-normal text-black mb-1"
                  style={{ fontSize: "19.5px", letterSpacing: "-0.585px", lineHeight: "1.2" }}
                >
                  Sarah Mou
                </p>
                <p
                  className="font-normal"
                  style={{
                    fontSize: "14.3px",
                    letterSpacing: "-0.43px",
                    lineHeight: "1.45",
                    color: "rgba(0,0,0,0.5)",
                    maxWidth: "164px",
                  }}
                >
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
