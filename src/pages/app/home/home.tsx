import { PageHead } from "@/components/page-head";
import { HeroSection } from "./hero-section";
import { FeaturesSection } from "./features-section";


import { Testimonials } from "./testimonials";
import { CTASection } from "./cta-section";
import { BenefitsSection } from "./benefits-section";

export function Home() {
  return (
    <>
      <PageHead title="Início" />

      <div className="relative flex flex-col items-center">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <CTASection />
        <Testimonials />
      </div>
    </>
  );
}
