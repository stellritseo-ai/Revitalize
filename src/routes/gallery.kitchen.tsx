import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  Grid,
  Layers,
  Heart,
  Calendar
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

// Image imports from assets
import kitOne from "@/assets/kitchen/1.webp";
import kitTwo from "@/assets/kitchen/2.webp";
import kitThree from "@/assets/kitchen/3.webp";
import kitFour from "@/assets/kitchen/4.webp";
import kitFive from "@/assets/kitchen/5.webp";
import kitSix from "@/assets/kitchen/6.webp";
import kitSeven from "@/assets/kitchen/7.webp";
import uploadedCabinets from "@/assets/kitchen/uploaded-cabinets.png";
import uploadedKitchen from "@/assets/kitchen/uploaded-kitchen.png";

export const Route = createFileRoute("/gallery/kitchen")({
  head: () => ({
    title: "Kitchen Remodeling Gallery | Revitalize Real Estate – Tampa Bay's Best Kitchen Designs",
    meta: [
      {
        name: "description",
        content:
          "Explore our portfolio of kitchen remodeling projects in Tampa Bay. See custom cabinetry, premium countertops, and stunning renovations. Schedule a free design consultation.",
      },
    ],
  }),
  component: KitchenGalleryPage,
});

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "renovations" | "cabinets" | "finishes";
  location: string;
  desc: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 0,
    src: uploadedKitchen,
    title: "Gourmet Chef's Kitchen",
    category: "renovations",
    location: "Tampa, FL 33647",
    desc: "Full renovation with custom ceiling-height cabinetry, marble waterfall island, premium double ovens, and professional task lighting.",
  },
  {
    id: 1,
    src: uploadedCabinets,
    title: "Custom Accent Cabinetry",
    category: "cabinets",
    location: "Plant City, FL",
    desc: "Custom cabinet design featuring soft-close technology, custom drawer dividers, and a contrasting island wood finish.",
  },
  {
    id: 2,
    src: kitSix,
    title: "Modern Open-Concept Kitchen",
    category: "renovations",
    location: "Clearwater, FL",
    desc: "Walls removed to create a spacious culinary zone integrated with the dining area, featuring quartz counters and smart appliances.",
  },
  {
    id: 3,
    src: kitSeven,
    title: "Timeless Shaker Renovation",
    category: "renovations",
    location: "Wesley Chapel, FL",
    desc: "Bright white shaker cabinets paired with custom crown molding, subway tile backsplash, and elegant brass hardware.",
  },
  {
    id: 4,
    src: kitFive,
    title: "Intelligent Pull-Out Storage",
    category: "cabinets",
    location: "Odessa, FL",
    desc: "Custom cabinet interior organization system displaying vertical spice racks and heavy-duty pantry roll-outs.",
  },
  {
    id: 5,
    src: kitFour,
    title: "Polished Quartz Countertops",
    category: "finishes",
    location: "Brandon, FL",
    desc: "Seamless quartz countertop installation featuring under-mount sink, luxury commercial faucet, and matching backsplash detail.",
  },
  {
    id: 6,
    src: kitThree,
    title: "Contemporary Flat-Panel Design",
    category: "renovations",
    location: "St. Petersburg, FL",
    desc: "Sleek, minimalist kitchen featuring push-to-open flat-panel cabinets, built-in espresso station, and indirect baseboard lighting.",
  },
  {
    id: 7,
    src: kitTwo,
    title: "Classic Glass-Front Cabinets",
    category: "cabinets",
    location: "Land O' Lakes, FL",
    desc: "Traditional cabinetry styling with integrated display lighting, glass doors, and contrasting granite surfaces.",
  },
  {
    id: 8,
    src: kitOne,
    title: "Bespoke Beverage Bar",
    category: "finishes",
    location: "Lutz, FL",
    desc: "Custom butler's pantry corner featuring wine cooling rack, floating oak shelves, and custom tile backsplash.",
  },
];

function KitchenGalleryPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<"all" | "renovations" | "cabinets" | "finishes">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredItems = selectedFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  const openLightbox = (index: number) => {
    // Find the item by index in the filtered items array
    const actualItem = filteredItems[index];
    // Map to the index in the original galleryItems array
    const originalIndex = galleryItems.findIndex(item => item.id === actualItem.id);
    setLightboxIndex(originalIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === 0 ? galleryItems.length - 1 : (prev ?? 0) - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === galleryItems.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <main className="bg-background overflow-x-hidden font-sans">
      {/* 1. Page Hero */}
      <PageHero
        title="Kitchen Gallery"
        subtitle="Tampa Bay's Finest Kitchen Design & Remodeling Portfolio"
      />

      {/* 2. Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto text-center">
        <div className={`max-w-3xl mx-auto transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
            <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
            Kitchen Design Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6 font-serif leading-tight">
            Create the Heart of Your{" "}
            <span className="text-copper italic font-serif font-bold">Dream Home</span>
          </h2>
          <p className="text-[1.05rem] text-charcoal-soft/85 font-medium leading-relaxed">
            At Revitalize Real Estate, our kitchen remodels combine luxury materials, intelligent storage solutions, and expert craftsmanship to create the perfect space. Browse our portfolio of gourmet renovations, custom cabinetry, and premium finishes across Tampa Bay. Click any image to view details and expand.
          </p>
        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <section className="pb-8 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "all"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Show All
          </button>
          <button
            onClick={() => setSelectedFilter("renovations")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "renovations"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Full Renovations
          </button>
          <button
            onClick={() => setSelectedFilter("cabinets")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "cabinets"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Cabinets & Storage
          </button>
          <button
            onClick={() => setSelectedFilter("finishes")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "finishes"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Details & Finishes
          </button>
        </div>
      </section>

      {/* 4. Portfolio Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer bg-white border border-[#efe5da] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image Block */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal/5">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full text-charcoal transform scale-90 group-hover:scale-100 transition duration-300">
                    <Maximize2 className="w-5 h-5 text-copper" />
                  </div>
                </div>
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-charcoal/85 text-white/90 border border-white/10 text-[9px] uppercase tracking-widest font-black px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              {/* Text Detail Block */}
              <div className="p-6 space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-charcoal-soft/60 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-copper shrink-0" />
                  <span>{item.location}</span>
                </div>
                <h4 className="text-lg font-bold font-serif text-charcoal leading-tight">
                  {item.title}
                </h4>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-[999] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-sm transition z-10"
            aria-label="Close Gallery"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous image */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition z-10"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main content slider */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full flex flex-col items-center space-y-4"
          >
            <div className="relative aspect-[4/3] max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Legend */}
            <div className="text-center text-white/90 max-w-2xl px-4 space-y-2">
              <div className="flex items-center justify-center gap-1.5 text-xs text-white/60 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-copper shrink-0" />
                <span>{galleryItems[lightboxIndex].location}</span>
                <span className="mx-2">•</span>
                <span className="uppercase tracking-widest text-[10px] text-copper font-black">
                  {galleryItems[lightboxIndex].category}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-serif text-white leading-tight">
                {galleryItems[lightboxIndex].title}
              </h4>

              {/* Pagination indicators */}
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider pt-2">
                Image {lightboxIndex + 1} of {galleryItems.length}
              </div>
            </div>
          </div>

          {/* Next image */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition z-10"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* 6. Call-To-Action (CTA) */}
      <section className="relative py-20 bg-gradient-brand bg-background text-white mx-[15px] rounded-2xl border border-white/5 shadow-lg overflow-hidden my-16">
        <div className="absolute top-[-30%] right-[-10%] w-[60%] h-[60%] bg-copper/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-copper/35 bg-copper/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-copper">
            <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white max-w-2xl mx-auto leading-tight">
            Ready to Create Your Dream Kitchen?
          </h2>
          <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Don't leave your kitchen design to stock models. Schedule a free design consultation today and let our senior builders layout a premium estimate.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-copper hover:bg-copper-deep text-white font-bold text-sm shadow-lg shadow-copper/25 transition hover:scale-[1.02]"
            >
              Schedule Design Consult <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:8139456736"
              className="inline-flex items-center gap-2 font-bold text-white hover:text-copper transition text-sm px-6 py-4 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
            >
              <Phone className="w-4 h-4 text-copper" /> (813) 945-6736
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
