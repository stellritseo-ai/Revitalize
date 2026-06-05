import { PhoneCall, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import estimateBgVideo from "@/assets/video/4916647f-cd0d-4677-9b51-5beca8209180.mp4";

export function EstimateSection() {
  return (
    <section className="relative py-20 px-6 sm:px-8 lg:px-12 mx-[15px] mt-[15px] rounded-2xl overflow-hidden border border-white/5 shadow-xl">
      {/* Background Video with warm overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src={estimateBgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18110b]/95 via-[#18110b]/80 to-[#18110b]/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        <div className="max-w-3xl flex flex-col items-start text-left">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-[#E2D6CF]">
            <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
            Get Started
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[45px] md:leading-[55px] font-bold text-white mb-6 font-serif">
            Book Your Free <br className="hidden md:inline" />
            <span className="text-copper italic font-serif font-bold">On-Site Estimate</span> Today
          </h2>

          <p className="text-white/85 text-base md:text-lg leading-relaxed font-medium font-sans">
            Transform your living space with our expert residential remodeling and home improvement
            services. From kitchens and bathrooms to whole-home updates, Revitalize Real Estate
            delivers exceptional craftsmanship and transparent communication.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0 justify-start items-stretch sm:items-center lg:items-start">
          <Link
            to="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-copper hover:bg-copper-deep text-white font-bold text-sm shadow-lg shadow-copper/20 transition-all duration-300 w-full sm:w-auto"
          >
            Book Free Estimate <ArrowRight className="h-4 w-4" />
          </Link>

          <a
            href="tel:8139456736"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold text-sm transition-all duration-300 w-full sm:w-auto"
          >
            <PhoneCall className="w-4 h-4 text-copper animate-pulse" />
            Call (813) 945-6736
          </a>
        </div>
      </div>
    </section>
  );
}
