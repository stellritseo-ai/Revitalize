import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { TestimonialSection } from "@/components/TestimonialSection";
import { QuoteSection } from "@/components/QuoteSection";

export const Route = createFileRoute("/reviews")({
  component: Reviews,
});

function Reviews() {
  return (
    <main>
      <PageHero
        title="Client Reviews"
        subtitle="Trusted by Arizona Homeowners & Businesses"
        image="/hero-3.png"
      />
      <TestimonialSection variant="grid" />
      <QuoteSection />
    </main>
  );
}
