import { createFileRoute } from "@tanstack/react-router";
import { HeroBanner } from "@/components/HeroBanner";
import { WelcomeSection } from "@/components/WelcomeSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { EstimateSection } from "@/components/EstimateSection";
import { GallerySection } from "@/components/GallerySection";
import { ProgressSection } from "@/components/ProgressSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ServiceAreasSection } from "@/components/ServiceAreasSection";
import { FaqSection } from "@/components/FaqSection";
import { CounterSection } from "@/components/CounterSection";
import { QuoteSection } from "@/components/QuoteSection";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <HeroBanner />
      <WelcomeSection />
      <ProcessSection />
      <ServicesSection />
      <EstimateSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ProgressSection />
      <TestimonialSection />
      <ServiceAreasSection />
      <FaqSection />
      <CounterSection />
      <QuoteSection />
    </>
  );
}
