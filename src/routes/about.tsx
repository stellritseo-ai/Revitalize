import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ProgressSection } from "@/components/ProgressSection";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <main>
      <PageHero 
        title="About Us" 
        subtitle="Learn about our 6+ years of excellence across Phoenix, Scottsdale, Mesa & beyond."
        image="/hero-2.png" 
      />
      <WelcomeSection />
      <WhyChooseUsSection />
      <ProgressSection />
    </main>
  );
}
