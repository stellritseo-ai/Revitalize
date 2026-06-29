import { Play, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function HeroBanner() {
  return (
    <section className="relative w-full p-[15px]">
      <div className="relative w-full min-h-[550px] sm:h-[660px] lg:h-[750px] flex flex-col justify-center overflow-hidden bg-[#0a0a0a] rounded-[10px] py-12 sm:py-16 lg:py-0">
        {/* Background Video */}
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-80 transform-gpu pointer-events-none"
        />

        {/* Video Overlay / Gradients */}
        <div className="absolute inset-0 bg-[#160d08]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 w-full">
          <div className="max-w-4xl text-white">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1e110a]/50 backdrop-blur px-3 py-1.5 text-[10px] sm:px-4 sm:py-2 sm:text-xs font-black uppercase tracking-widest mb-3 text-[#E2D6CF]">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              Residential Home Improvement Specialists
            </div>

            {/* Heading */}
            <h1 className="text-3xl xs:text-4xl sm:text-[50px] leading-tight sm:leading-[70px] font-bold tracking-tight mb-3 font-serif text-white">
              Transforming Homes <br className="hidden sm:block" />
              with{" "}
              <span className="text-copper italic font-serif font-bold">Expert Home Improvement</span> &
              Remodeling
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-[1.1rem] leading-relaxed max-w-2xl mb-6 text-white/80 font-medium font-sans">
              20+ years of experience helping homeowners create beautiful, functional living spaces.
              Proudly serving residential clients within a 50-mile radius.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 sm:px-8 sm:py-3 bg-copper hover:bg-copper-deep transition text-white font-bold text-sm sm:text-base shadow-lg shadow-copper/20"
              >
                Get Free Estimate <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 sm:px-8 sm:py-3 bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition text-white font-bold text-sm sm:text-base shadow-lg"
              >
                <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-white" />
                View Our Projects
              </Link>
            </div>

            {/* Bottom Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 pt-4 border-t border-white/10">
              {[
                "20+ Years Experience",
                "Free Estimates",
                "Residential Only",
                "50 Mile Service Area",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-white/10 bg-[#1e110a]/30 backdrop-blur px-3 py-1.5 text-[10px] sm:px-4 sm:py-2 sm:text-xs font-bold uppercase tracking-wider text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
