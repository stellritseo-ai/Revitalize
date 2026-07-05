import { useState, useEffect, useMemo } from "react";
import { X, ZoomIn, Sparkles, Play, Upload, Image as ImageIcon } from "lucide-react";

interface GalleryItem {
  id: string | number;
  title: string;
  category: string;
  image: string;
  ratio: number;
  row: number;
  video?: string;
}

const categories = ["All", "Bathroom", "Kitchen", "Residential", "Video"];

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
      {item.video ? (
        <video
          src={item.video}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          muted
          loop
          playsInline
          autoPlay
        />
      ) : (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

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
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [dbPhotos, setDbPhotos] = useState<Array<{ id: string; url: string; category?: string; uploadedAt: string }>>([]);
  const [shuffledAllItems, setShuffledAllItems] = useState<GalleryItem[]>([]);

  // Fetch DB-uploaded photos on mount
  useEffect(() => {
    fetch("/api/gallery?t=" + Date.now())
      .then((r) => (r.ok ? r.json() : []))
      .then((photos) => setDbPhotos(Array.isArray(photos) ? photos : []))
      .catch(() => setDbPhotos([]));
  }, []);

  // Map database uploads, resolving category names and identifying video media files
  const combinedItems = useMemo(() => {
    return dbPhotos.map((photo, index) => {
      const rawCategory = photo.category || "residential";
      let mappedCategory = "Residential";
      if (rawCategory.toLowerCase() === "bathroom") mappedCategory = "Bathroom";
      else if (rawCategory.toLowerCase() === "kitchen") mappedCategory = "Kitchen";
      else if (rawCategory.toLowerCase() === "video") mappedCategory = "Video";

      const isVideo = photo.url.endsWith(".mp4") || photo.url.endsWith(".mov") || photo.url.includes("/video/upload/") || rawCategory.toLowerCase() === "video";

      return {
        id: photo.id || `db-photo-${index}`,
        title: `Completed ${mappedCategory} Project`,
        category: mappedCategory,
        image: photo.url,
        ratio: 1.33,
        row: (index % 3) + 1,
        video: isVideo ? photo.url : undefined
      };
    });
  }, [dbPhotos]);

  // Shuffle the "All" items once on load/update to provide dynamic randomized landing page experience
  useEffect(() => {
    if (combinedItems.length > 0) {
      const shuffled = [...combinedItems].sort(() => Math.random() - 0.5);
      // Redistribute rows to keep aesthetic consistency in justified flex grids
      const redistributed = shuffled.map((item, index) => ({
        ...item,
        row: (index % 3) + 1
      }));
      setShuffledAllItems(redistributed);
    } else {
      setShuffledAllItems([]);
    }
  }, [combinedItems]);

  const filteredItems = activeFilter === "All"
    ? shuffledAllItems
    : combinedItems.filter((item) => item.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="bg-gradient-brand-light bg-background py-16 px-6 sm:px-8 lg:px-12 mx-[15px] mt-[15px] rounded-[10px] border border-charcoal/5">
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
                type="button"
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

        {/* Gallery Grid - 5 columns on desktop, max 3 rows (15 items) */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredItems.slice(0, 15).map((item) => (
              <div key={item.id} className="aspect-square">
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

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-charcoal-soft/60 gap-4 bg-white border border-charcoal/5 rounded-2xl">
              <ImageIcon className="w-12 h-12 opacity-30" />
              <p className="text-base font-semibold">No project photos available under this category.</p>
            </div>
          )}
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
