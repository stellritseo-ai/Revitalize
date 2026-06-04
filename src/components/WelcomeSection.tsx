import { Sparkles, ArrowRight } from "lucide-react";
import resOne from "@/assets/residential/1.webp";
import kitSix from "@/assets/kitchen/6.webp";
import bathFive from "@/assets/bathroom/5.webp";
import { Link } from "@tanstack/react-router";

export function WelcomeSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#faf8f5] via-[#f7f0e7] to-[#efe5da] overflow-hidden mx-[15px] rounded-2xl border border-[#efe5da]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-[60px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
          {/* Text */}
          <div className="w-full lg:w-[48%] flex flex-col items-start">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              About Revitalize Group
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] md:leading-[60px] font-bold tracking-tight text-charcoal mb-6 font-serif">
              Homes worth coming back to,
              <span className="text-copper italic font-serif font-bold"> crafted to last.</span>
            </h2>

            {/* Description */}
            <div
              className="text-base sm:text-[1.05rem] text-charcoal-soft/90 mb-10 font-sans font-medium space-y-4 max-w-none w-full lg:w-[90%]"
              style={{ lineHeight: "41px" }}
            >
              <p style={{ width: "120%", maxWidth: "120%" }}>
                For more than twenty years, Revitalize Group has helped homeowners reimagine the
                spaces they live in. We're a residential-only renovation team built on
                craftsmanship, communication, and a genuine respect for your home.
              </p>
              <p style={{ width: "120%", maxWidth: "120%" }}>
                From kitchens and baths to whole-home transformations, every project is led by
                experienced hands and finished to a standard we'd want in our own homes.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="#"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 bg-copper hover:bg-copper-deep transition text-white font-bold text-sm shadow-lg shadow-copper/20"
              >
                Get Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="#"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 border border-charcoal/10 hover:border-charcoal/30 bg-white/50 backdrop-blur hover:bg-white transition text-charcoal font-bold text-sm"
              >
                Read Our Story
              </Link>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative w-full lg:w-[52%] h-[520px] sm:h-[600px] flex items-center justify-center lg:justify-end py-8">
            {/* Decorative blurred background shapes */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-copper/15 blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute left-5 bottom-5 w-56 h-56 rounded-full bg-brand-blue-deep/5 blur-3xl pointer-events-none" />

            {/* Collage Wrapper */}
            <div className="relative z-10 w-full max-w-[460px] h-full">
              {/* Image 1: Main Residential Remodeling */}
              <div className="absolute top-10 left-0 w-[70%] aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1">
                <img
                  src={resOne}
                  alt="Residential Remodeling"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2: Modern Kitchen */}
              <div className="absolute top-0 right-2 w-[48%] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white bg-white shadow-md transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1">
                <img
                  src={kitSix}
                  alt="Kitchen Remodeling"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 3: Luxury Bathroom */}
              <div className="absolute bottom-6 right-0 w-[45%] aspect-square rounded-2xl overflow-hidden border-4 border-white bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1">
                <img
                  src={bathFive}
                  alt="Bathroom Remodeling"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute top-4 -left-6 bg-white/95 backdrop-blur-md border border-white/30 p-3 rounded-xl shadow-md z-20 transition-transform duration-300 hover:scale-105">
                <p className="text-copper text-base font-extrabold leading-none">20+ Years</p>
                <p className="text-[9px] text-charcoal/60 font-black uppercase tracking-wider mt-0.5">Experience</p>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute bottom-16 -right-6 bg-charcoal/95 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-lg z-20 transition-transform duration-300 hover:scale-105">
                <p className="text-white text-sm font-bold leading-none">Premium Quality</p>
                <p className="text-[8px] text-copper font-black uppercase tracking-wider mt-0.5">100% Residential Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
