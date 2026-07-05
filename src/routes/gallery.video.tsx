import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { X, Sparkles, Image as ImageIcon, Play } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/gallery/video")({
  head: () => ({
    title: "Video Gallery | Revitalize Real Estate – Tampa Bay's Premier Home Tour Videos",
    meta: [
      {
        name: "description",
        content:
          "Explore video tours of our kitchen remodeling, bathroom renovations, and outdoor living projects in Tampa Bay. Watch premium craftsmanship walk-throughs.",
      },
    ],
  }),
  component: VideoGalleryPage,
});

function VideoGalleryPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dbPhotos, setDbPhotos] = useState<Array<{ id: string; url: string; category?: string; uploadedAt: string }>>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    fetch("/api/gallery?t=" + Date.now())
      .then((r) => (r.ok ? r.json() : []))
      .then((photos) => setDbPhotos(Array.isArray(photos) ? photos : []))
      .catch(() => setDbPhotos([]));
  }, []);

  const filteredPhotos = dbPhotos.filter(
    (photo) =>
      photo.category?.toLowerCase() === "video" ||
      photo.url.endsWith(".mp4") ||
      photo.url.endsWith(".mov") ||
      photo.url.includes("/video/upload/")
  );

  return (
    <main className="bg-background overflow-x-hidden font-sans">
      {/* 1. Page Hero */}
      <PageHero
        title="Video Gallery"
        subtitle="Tampa Bay's Finest Home Tour & Construction Video Walkthroughs"
      />

      {/* 2. Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto text-center">
        <div className={`max-w-3xl mx-auto transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
            <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
            Home Walkthrough Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6 font-serif leading-tight">
            Cinematic Remodeling{" "}
            <span className="text-copper italic font-serif font-bold">Video Tours</span>
          </h2>
          <p className="text-[1.05rem] text-charcoal-soft/85 font-medium leading-relaxed">
            Experience our kitchen, bathroom, and full residential renovations in high definition. Our video walkthroughs showcase premium craftsmanship, layout optimizations, and luxury materials in action. Click any video card to play the video tour.
          </p>
        </div>
      </section>

      {/* 3. Portfolio Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto pb-24">
        {filteredPhotos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-charcoal-soft/60 gap-4 bg-white border border-[#efe5da] rounded-2xl shadow-sm">
            <ImageIcon className="w-12 h-12 opacity-30 text-copper" />
            <p className="text-base font-semibold">No walkthrough videos available in the gallery database.</p>
            <p className="text-xs text-charcoal-soft/40">Upload video files from your admin dashboard to display them here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredPhotos.map((photo) => {
              return (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo.url)}
                  className="group cursor-pointer bg-white border border-[#efe5da] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                    <video
                      src={photo.url}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                    <div className="absolute top-4 left-4 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md z-10 flex items-center gap-1.5 border border-white/10">
                      <Play className="w-3.5 h-3.5 text-white fill-white" />
                      <span className="text-[10px] text-white font-bold uppercase tracking-wider">Video Tour</span>
                    </div>
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 bg-white border-t border-[#efe5da]/40">
                    <h3 className="text-lg font-bold text-charcoal mb-1 font-serif">
                      Completed Walkthrough Tour
                    </h3>
                    <p className="text-xs text-charcoal-soft/60 font-medium">
                      Uploaded {new Date(photo.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Lightbox / Zoom Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={36} />
          </button>
          <video
            src={selectedPhoto}
            className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
