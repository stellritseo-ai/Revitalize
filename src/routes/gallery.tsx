import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { GallerySection } from "@/components/GallerySection";
import { EstimateSection } from "@/components/EstimateSection";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

function Gallery() {
  return (
    <main>
      <PageHero
        title="Project Gallery"
        subtitle="Craftsmanship on display. Browse our recent work."
        image="/g1.jpg"
      />
      <GallerySection />
      <EstimateSection />
    </main>
  );
}
