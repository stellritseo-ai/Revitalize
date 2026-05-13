import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { EstimateSection } from "@/components/EstimateSection";

export const Route = createFileRoute("/services/")({
  component: Services,
});

function Services() {
  return (
    <main>
      <PageHero 
        title="Our Services" 
        subtitle="End-to-end craftsmanship across every trade your project needs."
        image="/service-1.jpg" 
      />
      <ServicesSection />
      <ProcessSection />
      <EstimateSection />
    </main>
  );
}
