import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturePillars from "@/components/FeaturePillars";
import WellnessSection from "@/components/WellnessSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import ProductSection from "@/components/ProductSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const ANECDOTE_APP_STORE_URL =
  "https://apps.apple.com/us/app/anecdote-wellness-companion/id6754204193";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturePillars />
        <WellnessSection />
        <FeaturesGrid />

        <section className="bg-white px-8 pb-12 md:pb-16 pt-2 md:pt-4">
          <div className="max-w-6xl mx-auto flex justify-center items-center">
            <a
              href={ANECDOTE_APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-[6px] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              <img
                src="/download-on-app-store-badge.svg"
                alt="Download on the App Store"
                className="h-11 w-auto md:h-[52px]"
              />
            </a>
          </div>
        </section>

        <ProductSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
