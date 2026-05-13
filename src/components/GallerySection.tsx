import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Chandler Modern Kitchen",
    category: "KITCHEN",
    image: "/g1.jpg",
  },
  {
    id: 2,
    title: "Scottsdale Spa Bath",
    category: "BATHROOM",
    image: "/g2.jpg",
  },
  {
    id: 3,
    title: "Tile Roof Replacement",
    category: "ROOFING",
    image: "/g3.jpg",
  },
  {
    id: 4,
    title: "Custom Home Framing",
    category: "FRAMING",
    image: "/g4.jpg",
  },
  {
    id: 5,
    title: "Desert Modern Exterior",
    category: "EXTERIOR",
    image: "/g5.jpg",
  },
];

const categories = ["All", "KITCHEN", "BATHROOM", "ROOFING", "COMMERCIAL", "FRAMING", "EXTERIOR"];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="bg-gradient-to-r from-[#F0F6FE] to-[#FDF7EE] py-[40px] px-4 md:px-8 lg:px-16 mx-[15px] mt-[15px] rounded-[10px]">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Area */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-12 gap-8">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-gradient-to-r from-[#C25A2A] to-[#1E3A5F] text-white text-sm font-medium mb-6">
              Project Gallery
            </div>
            <h2 className="text-[33px] font-extrabold text-black tracking-tight">
              Craftsmanship On Display.
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${activeFilter === category
                  ? "bg-[#0A1A3A] text-white border-transparent shadow-md"
                  : "bg-transparent text-gray-600 border border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]`}>
            {filteredItems.map((item, index) => {
              // The first item gets featured (spans 2x2) if 'All' is selected or if there are multiple items
              const isFeatured = index === 0 && (activeFilter === "All" || filteredItems.length > 1);

              return (
                <div
                  key={item.id}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer ${isFeatured ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
                    }`}
                  onClick={() => setSelectedImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
                    <p className="text-[#ECA541] text-xs font-bold tracking-wider mb-1">
                      {item.category}
                    </p>
                    <h3 className={`text-white font-bold ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Zoom Icon indicator on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-gray-500 text-lg">No projects found for this category yet.</p>
          </div>
        )}

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
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}
    </section>
  );
}
