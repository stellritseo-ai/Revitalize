import { useState } from "react";
import { X, ZoomIn, Sparkles, Play } from "lucide-react";

// Import Bathroom Images
import bath1 from "@/assets/bathroom/1.webp";
import bath2 from "@/assets/bathroom/2.webp";
import bath3 from "@/assets/bathroom/3.webp";
import bath4 from "@/assets/bathroom/4.webp";
import bath5 from "@/assets/bathroom/5.webp";
import bath6 from "@/assets/bathroom/6.webp";

// Import Kitchen Images
import kitchen1 from "@/assets/kitchen/1.webp";
import kitchen2 from "@/assets/kitchen/2.webp";
import kitchen3 from "@/assets/kitchen/3.webp";
import kitchen4 from "@/assets/kitchen/4.webp";
import kitchen5 from "@/assets/kitchen/5.webp";
import kitchen6 from "@/assets/kitchen/6.webp";
import kitchen7 from "@/assets/kitchen/7.webp";

// Import Residential Images
import res1 from "@/assets/residential/1.webp";
import res2 from "@/assets/residential/2.webp";
import res3 from "@/assets/residential/3.webp";
import res4 from "@/assets/residential/4.webp";
import res5 from "@/assets/residential/5.webp";
import res6 from "@/assets/residential/6.webp";
import res7 from "@/assets/residential/7.webp";
import res8 from "@/assets/residential/8.webp";
import res9 from "@/assets/residential/9.webp";

// Import Videos (6 selected videos)
import vid1 from "@/assets/video/04b45dfc-4db8-4375-b262-2eef763f0401.mp4";
import vid2 from "@/assets/video/083820bd-bcdb-4457-be0d-a6a8a641648e.mp4";
import vid3 from "@/assets/video/134da0eb-60b7-4d58-b68d-d1fc3b649f95.mp4";
import vid4 from "@/assets/video/1d8813dc-98f6-42ec-a5ea-4d7399286907.mp4";
import vid5 from "@/assets/video/22439e9a-7437-4c89-bcca-f31d971bc0e9.mp4";
import vid6 from "@/assets/video/34d454a9-0a87-4462-b1cf-269233bbe624.mp4";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  ratio: number;
  row: number;
  video?: string;
}

const galleryItems: GalleryItem[] = [
  // Bathroom
  { id: 101, title: "Contemporary Master Bath", category: "Bathroom", image: bath1, ratio: 0.67, row: 1 },
  { id: 102, title: "Modern Floating Vanity", category: "Bathroom", image: bath2, ratio: 1.5, row: 1 },
  { id: 103, title: "Luxury Tiled Walk-in Shower", category: "Bathroom", image: bath3, ratio: 1.33, row: 1 },
  { id: 104, title: "Freestanding Soaking Tub", category: "Bathroom", image: bath4, ratio: 1.33, row: 2 },
  { id: 105, title: "Designer Powder Room", category: "Bathroom", image: bath5, ratio: 1.33, row: 2 },
  { id: 106, title: "Minimalist Bath Improvement", category: "Bathroom", image: bath6, ratio: 0.75, row: 2 },

  // Kitchen
  { id: 201, title: "Modern Open Kitchen", category: "Kitchen", image: kitchen1, ratio: 1.5, row: 1 },
  { id: 202, title: "Luxury Kitchen Island", category: "Kitchen", image: kitchen2, ratio: 1.5, row: 1 },
  { id: 203, title: "High-End Custom Cabinets", category: "Kitchen", image: kitchen3, ratio: 1.5, row: 1 },
  { id: 204, title: "Chef's Cooking Suite", category: "Kitchen", image: kitchen4, ratio: 1.33, row: 1 },
  { id: 205, title: "Stylish Kitchen Backsplash", category: "Kitchen", image: kitchen5, ratio: 1.33, row: 2 },
  { id: 206, title: "Butler's Pantry Design", category: "Kitchen", image: kitchen6, ratio: 1.5, row: 2 },
  { id: 207, title: "Contemporary Dining Nook", category: "Kitchen", image: kitchen7, ratio: 1.5, row: 2 },

  // Residential
  { id: 301, title: "Whole-Home Remodel", category: "Residential", image: res1, ratio: 1.33, row: 1 },
  { id: 302, title: "Luxury Living Room Addition", category: "Residential", image: res2, ratio: 0.83, row: 1 },
  { id: 303, title: "Custom Home Exterior", category: "Residential", image: res3, ratio: 1.78, row: 1 },
  { id: 304, title: "Outdoor Lanai & Deck", category: "Residential", image: res4, ratio: 1.78, row: 2 },
  { id: 305, title: "Backyard Pergola Oasis", category: "Residential", image: res5, ratio: 1.78, row: 2 },
  { id: 306, title: "Premium Stone Fire Pit", category: "Residential", image: res6, ratio: 1.47, row: 2 },
  { id: 307, title: "Custom Built-In Outdoor BBQ", category: "Residential", image: res7, ratio: 1.5, row: 3 },
  { id: 308, title: "Luxury Swimming Pool & Patio", category: "Residential", image: res8, ratio: 1.5, row: 3 },
  { id: 309, title: "Professional Putting Green", category: "Residential", image: res9, ratio: 1.33, row: 3 },

  // Video
  { id: 401, title: "Master Bathroom Walkthrough", category: "Video", image: bath5, video: vid1, ratio: 1.33, row: 1 },
  { id: 402, title: "Kitchen Design Tour", category: "Video", image: kitchen5, video: vid2, ratio: 1.33, row: 1 },
  { id: 403, title: "Luxury Backyard Showroom", category: "Video", image: res5, video: vid3, ratio: 1.78, row: 1 },
  { id: 404, title: "Modern Bath Improvement", category: "Video", image: bath6, video: vid4, ratio: 0.75, row: 2 },
  { id: 405, title: "Gourmet Kitchen Walkthrough", category: "Video", image: kitchen6, video: vid5, ratio: 1.5, row: 2 },
  { id: 406, title: "Outdoor Pergola Tour", category: "Video", image: res6, video: vid6, ratio: 1.47, row: 2 },
];

const categories = ["Bathroom", "Kitchen", "Residential", "Video"];

function GalleryCard({
  item,
  style,
  onClick,
}: {
  item: GalleryItem;
  style?: React.CSSProperties;
  onClick: () => void;
}) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-charcoal/5 bg-white transition-all duration-300 h-full w-full"
      style={style}
      onClick={onClick}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Video Badge indicator (always visible for video items) */}
      {item.video && (
        <div className="absolute top-4 left-4 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md z-10 flex items-center gap-1.5 pointer-events-none border border-white/10">
          <Play className="w-3.5 h-3.5 text-white fill-white" />
          <span className="text-[10px] text-white font-bold uppercase tracking-wider">Video Tour</span>
        </div>
      )}

      {/* Hover Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

      {/* Hover Content details - Slides up on hover */}
      <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-350 translate-y-3 group-hover:translate-y-0 z-20 pointer-events-none">
        <h3 className="text-white font-sans font-semibold text-sm sm:text-base tracking-wide drop-shadow-md pr-4">
          {item.title}
        </h3>
        <div className="bg-white/95 p-2.5 rounded-full shadow-md text-charcoal flex-shrink-0">
          {item.video ? (
            <Play className="w-4 h-4 fill-charcoal ml-0.5" />
          ) : (
            <ZoomIn className="w-4 h-4" />
          )}
        </div>
      </div>
    </div>
  );
}

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("Bathroom");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredItems = galleryItems.filter((item) => item.category === activeFilter);
  
  // Get unique rows sorted for dynamic flex layout
  const rows = Array.from(new Set(filteredItems.map((item) => item.row))).sort((a, b) => a - b);

  return (
    <section className="bg-gradient-brand-light bg-background py-16 px-6 sm:px-8 lg:px-12 mx-[15px] mt-[15px] rounded-2xl border border-charcoal/5">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Area */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              Project Gallery
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[45px] md:leading-[55px] font-bold tracking-tight text-charcoal mb-4 font-serif">
              Craftsmanship{" "}
              <span className="text-copper italic font-serif font-bold">On Display</span>
            </h2>
            <p className="text-base sm:text-lg text-charcoal-soft/95 font-sans font-medium">
              Explore our recent residential home improvements, custom kitchens, luxurious bathrooms, and cinematic walkthroughs.
            </p>
          </div>

          {/* Filters Track */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-charcoal/[0.03] p-1.5 rounded-2xl sm:rounded-full border border-charcoal/5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-[#1e110a] text-white border-transparent shadow-md shadow-[#1e110a]/10"
                    : "text-charcoal-soft hover:text-charcoal hover:bg-white/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Justified Grid Container */}
        <div className="flex flex-col gap-2 md:gap-3">
          {/* Desktop Justified Flex Rows */}
          <div className="hidden lg:flex flex-col gap-2 md:gap-3">
            {rows.map((rowNum) => (
              <div
                key={rowNum}
                className="flex gap-2 md:gap-3 w-full"
                style={{
                  height:
                    activeFilter === "Residential"
                      ? "210px"
                      : activeFilter === "Kitchen"
                        ? "200px"
                        : "230px",
                }}
              >
                {filteredItems
                  .filter((item) => item.row === rowNum)
                  .map((item) => (
                    <div
                      key={item.id}
                      style={{ flex: `${item.ratio} 1 0%` }}
                      className="h-full"
                    >
                      <GalleryCard
                        item={item}
                        onClick={() =>
                          item.video
                            ? setSelectedVideo(item.video)
                            : setSelectedImage(item.image)
                        }
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Standard Grid Layout (Mobile/Tablet fallback) */}
          <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="h-[180px] sm:h-[220px]">
                <GalleryCard
                  item={item}
                  onClick={() =>
                    item.video
                      ? setSelectedVideo(item.video)
                      : setSelectedImage(item.image)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={36} />
          </button>

          <img
            src={selectedImage}
            alt="Enlarged project view"
            className="max-w-full max-h-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedVideo(null)}
          >
            <X size={36} />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
