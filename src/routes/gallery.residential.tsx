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
  ShieldCheck
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

// Image imports from assets
import resOne from "@/assets/residential/1.webp";
import resTwo from "@/assets/residential/2.webp";
import resThree from "@/assets/residential/3.webp";
import resFour from "@/assets/residential/4.webp";
import resFive from "@/assets/residential/5.webp";
import resSix from "@/assets/residential/6.webp";
import resSeven from "@/assets/residential/7.webp";
import resEight from "@/assets/residential/8.webp";
import resNine from "@/assets/residential/9.webp";
import uploadedCleaning from "@/assets/residential/uploaded-cleaning.png";
import uploadedFloor from "@/assets/residential/uploaded-floor-carpentry.jpg";
import uploadedHome from "@/assets/residential/uploaded-home-evaluation.png";
import uploadedRealEstate from "@/assets/residential/uploaded-real-estate.png";

export const Route = createFileRoute("/gallery/residential")({
  head: () => ({
    title: "Residential Remodeling Gallery | Revitalize Real Estate – Tampa Bay's Home Transformations",
    meta: [
      {
        name: "description",
        content:
          "Explore our portfolio of whole-home residential remodeling projects in Tampa Bay. See interior renovations, custom carpentry, and outdoor living spaces. Free consultations.",
      },
    ],
  }),
  component: ResidentialGalleryPage,
});

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "interior" | "carpentry" | "exterior" | "specialties";
  location: string;
  desc: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 0,
    src: uploadedFloor,
    title: "Premium Custom Woodwork",
    category: "carpentry",
    location: "Tampa, FL 33647",
    desc: "Custom flooring, pavers, and trim installation demonstrating clean carpentry alignment.",
  },
  {
    id: 1,
    src: resOne,
    title: "Whole-Home Modern Transformation",
    category: "interior",
    location: "Brandon, FL",
    desc: "Integrated open-concept living area remodel with new lighting layout and polished finishes.",
  },
  {
    id: 2,
    src: resTwo,
    title: "Luxury Family Room Addition",
    category: "interior",
    location: "Clearwater, FL",
    desc: "Bespoke high-ceiling addition offering expansive windows and natural light elements.",
  },
  {
    id: 3,
    src: resThree,
    title: "Custom Home Exterior Upgrade",
    category: "exterior",
    location: "St. Petersburg, FL",
    desc: "Siding, exterior coating, and entryway design to elevate curb appeal.",
  },
  {
    id: 4,
    src: resFour,
    title: "Outdoor Deck & Lanai Oasis",
    category: "exterior",
    location: "Wesley Chapel, FL",
    desc: "Bespoke outdoor wood deck with customized handrail details and seating area.",
  },
  {
    id: 5,
    src: resFive,
    title: "Backyard Pergola Retreat",
    category: "exterior",
    location: "Odessa, FL",
    desc: "Custom timber pergola construction creating a shaded entertainment space.",
  },
  {
    id: 6,
    src: resSix,
    title: "Stone Fire Pit Lounge",
    category: "exterior",
    location: "Lutz, FL",
    desc: "Circular stacked stone fire pit layout with custom gravel surround.",
  },
  {
    id: 7,
    src: resSeven,
    title: "Built-In Outdoor BBQ Kitchen",
    category: "exterior",
    location: "Land O' Lakes, FL",
    desc: "Masonry outdoor kitchen featuring premium stainless steel grill inserts and granite counter.",
  },
  {
    id: 8,
    src: resEight,
    title: "Poolside Patio Improvement",
    category: "exterior",
    location: "Apollo Beach, FL",
    desc: "Interlocking paver installation surrounding a premium swimming pool layout.",
  },
  {
    id: 9,
    src: resNine,
    title: "Home Putting Green Installation",
    category: "exterior",
    location: "Lithia, FL",
    desc: "Professional backyard artificial turf putting green featuring custom cups.",
  },
  {
    id: 10,
    src: uploadedCleaning,
    title: "Move-In Spotless Prep",
    category: "specialties",
    location: "Valrico, FL",
    desc: "Intense deep cleaning prep service preparing home layout for move-in walkthroughs.",
  },
  {
    id: 11,
    src: uploadedHome,
    title: "AVM Comparative Assessment",
    category: "specialties",
    location: "Riverview, FL",
    desc: "Comprehensive valuation checkup combining structural condition and neighborhood data.",
  },
  {
    id: 12,
    src: uploadedRealEstate,
    title: "Modern Curb Appeal Presentation",
    category: "specialties",
    location: "Thonotosassa, FL",
    desc: "Premium staging and paint detail for high-end listing showcase.",
  },
];

function ResidentialGalleryPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<"all" | "interior" | "carpentry" | "exterior" | "specialties">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredItems = selectedFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  const openLightbox = (index: number) => {
    const actualItem = filteredItems[index];
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
        title="Residential Gallery"
        subtitle="Tampa Bay's Finest Home Renovations & Additions"
      />

      {/* 2. Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto text-center">
        <div className={`max-w-3xl mx-auto transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
            <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
            Residential Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6 font-serif leading-tight">
            Elevate Your Home's{" "}
            <span className="text-copper italic font-serif font-bold">Aesthetic & Value</span>
          </h2>
          <p className="text-[1.05rem] text-charcoal-soft/85 font-medium leading-relaxed">
            At Revitalize Real Estate, our residential remodels bring function, style, and durability to your living spaces. Explore our wide portfolio of whole-home interior additions, exterior decks, carpentry work, and staging services. Click any image to view details and expand.
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
            onClick={() => setSelectedFilter("interior")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "interior"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Interior Remodels
          </button>
          <button
            onClick={() => setSelectedFilter("carpentry")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "carpentry"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Flooring & Carpentry
          </button>
          <button
            onClick={() => setSelectedFilter("exterior")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "exterior"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Exterior & Outdoors
          </button>
          <button
            onClick={() => setSelectedFilter("specialties")}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
              selectedFilter === "specialties"
                ? "bg-copper text-white shadow-md shadow-copper/20"
                : "bg-[#faf8f6] border border-[#efe5da] text-charcoal hover:border-copper/40"
            }`}
          >
            Specialties & Prep
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
                <span className="absolute top-4 left-4 bg-charcoal/85 text-white/90 border border-white/10 text-[9px] uppercase tracking-widest font-black px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.category === "interior" ? "Interior" : item.category === "carpentry" ? "Carpentry" : item.category === "exterior" ? "Outdoors" : "Specialty"}
                </span>
              </div>

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
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full backdrop-blur-sm transition z-10"
            aria-label="Close Gallery"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition z-10"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

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

              <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider pt-2">
                Image {lightboxIndex + 1} of {galleryItems.length}
              </div>
            </div>
          </div>

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
            Ready to Plan Your Next Home Improvement?
          </h2>
          <p className="text-white/80 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
            From minor upgrades to whole-home framing and construction, we deliver senior craftsmanship worth coming home to. Schedule a free estimate today.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-copper hover:bg-copper-deep text-white font-bold text-sm shadow-lg shadow-copper/25 transition hover:scale-[1.02]"
            >
              Get Your Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:8133230291"
              className="inline-flex items-center gap-2 font-bold text-white hover:text-copper transition text-sm px-6 py-4 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
            >
              <Phone className="w-4 h-4 text-copper" /> (813) 323-0291
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
