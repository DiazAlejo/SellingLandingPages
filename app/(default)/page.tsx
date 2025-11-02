import Hero from "@/components/hero-home";
import OurProcess from "@/components/our-process";
import AboutSection from "@/components/about-section";
import WhatWeOffer from "@/components/what-we-offer";
import FeaturesGrid from "@/components/features-grid";
import FAQSection from "@/components/faq-section";
import Cta from "@/components/cta";
import ClientWrapper from "@/components/client-wrapper";

export default function Home() {
  return (
    <>
      {/* Background wrapper with optimized gradient */}
      <div className="relative bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
      
      <OurProcess />
      <AboutSection />
      <WhatWeOffer />
      <FeaturesGrid />
      <FAQSection />
      <Cta />
      <ClientWrapper />
    </>
  );
}
