import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroBanner } from "@/components/HeroBanner";
import { WelcomeSection } from "@/components/WelcomeSection";
import { ProcessSection } from "@/components/ProcessSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroBanner />
        <WelcomeSection />
        <ProcessSection />
      </main>
    </div>
  );
}
