import { PhoneCall } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function EstimateSection() {
  return (
    <section className="relative py-[60px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[10px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/estimate-bg.jpg"
          alt="Modern house exterior"
          className="w-full h-full object-cover"
        />

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Book Your Free On-Site Estimate Today
        </h2>
        
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10 max-w-3xl font-medium">
          Transform your home or business — whether it's a residential renovation, commercial build-out, drywall repair, or complete roofing project. Arizona Premiere Construction Group LLC delivers professional, thorough results from a licensed, insured, bonded, and experienced team. Call (602) 816 8177 today.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Link to="/contact" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1C3F60] to-[#C15C2D] text-white font-semibold text-sm md:text-base border border-white/20 hover:opacity-90 transition-opacity shadow-lg">
            Book My Free Estimate
          </Link>
          
          <a href="tel:6028168177" className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/5 border border-white/40 text-white font-semibold text-sm md:text-base hover:bg-white/10 transition-colors backdrop-blur-sm">
            <PhoneCall className="w-5 h-5" />
            Call (602) 816 8177
          </a>
        </div>
      </div>
    </section>
  );
}
