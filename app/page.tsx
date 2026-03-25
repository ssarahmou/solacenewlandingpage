import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturePillars from "@/components/FeaturePillars";
import WellnessSection from "@/components/WellnessSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import GiveSolaceATry from "@/components/GiveSolaceATry";
import ProductSection from "@/components/ProductSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturePillars />
        <WellnessSection />
        <FeaturesGrid />
        <GiveSolaceATry />
        <ProductSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
