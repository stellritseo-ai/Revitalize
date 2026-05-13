import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { FinancingSection } from "@/components/FinancingSection";
import { FaqSection } from "@/components/FaqSection";
import { QuoteSection } from "@/components/QuoteSection";

export const Route = createFileRoute("/financing")({
  component: Financing,
});

function Financing() {
  return (
    <main>
      <PageHero 
        title="Financing Options" 
        subtitle="Flexible, competitive financing options tailored to your budget."
        image="/service-3.jpg" 
      />
      <FinancingSection />
      <FaqSection />
      <QuoteSection />
    </main>
  );
}
