import { Play, Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo1 from "@/assets/Buy-&-Sell-Homes.png";
import logo2 from "@/assets/Home-Renovations.png";
import logo3 from "@/assets/Kitchens-&-Bathrooms.png";
import logo4 from "@/assets/Flooring.png";
import logo5 from "@/assets/Roofing.png";
import logo6 from "@/assets/Investment-Propertie.png";

const quickServices = [
  { name: "Buy & Sell Homes", logo: logo1, to: "/services/Buy-&-Sell-Homes.png" },
  { name: "Home Renovations", logo: logo2, to: "/services/Home-Renovations.png" },
  { name: "Kitchens & Bathrooms", logo: logo3, to: "/services/Kitchens-&-Bathrooms.png" },
  { name: "Flooring", logo: logo4, to: "/services/Flooring.png" },
  { name: "Roofing", logo: logo5, to: "/services/Roofing.png" },
  { name: "Investment Properties", logo: logo6, to: "/services/Investment-Propertie.png" },
];

export function HeroBanner() {
  const duplicatedServices = [
    ...quickServices,
    ...quickServices,
    ...quickServices,
    ...quickServices,
    ...quickServices,
  ];

  return (
    <section className="relative w-full p-[15px]">
      <div className="relative w-full min-h-[540px] xs:min-h-[620px] sm:min-h-[740px] lg:min-h-[820px] flex flex-col justify-between overflow-hidden bg-[#0a0a0a] rounded-[10px] pt-10 xs:pt-12 sm:pt-16 lg:pt-20 pb-6 xs:pb-8">
        {/* Background Video */}
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-85 transform-gpu pointer-events-none"
        />

        {/* Video Overlay / Gradients */}
        <div className="absolute inset-0 bg-[#160d08]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

        {/* Content (Top/Center) */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 w-full flex-grow flex flex-col justify-center">
          <div className="max-w-5xl text-white">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1e110a]/50 backdrop-blur px-3 py-1.5 text-[10px] sm:px-4 sm:py-2 sm:text-xs font-black uppercase tracking-widest mb-3 text-[#E2D6CF]">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              Buy. Sell. Renovate.
            </div>

            {/* Heading */}
            <h1 className="text-[28px] leading-[36px] sm:text-[42px] sm:leading-[55px] md:text-[50px] md:leading-[65px] font-bold tracking-tight mb-3 font-serif text-white">
              Everything Your Home Needs. <br />
              <span className="text-copper italic font-serif font-bold">One Trusted Team.</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-[1.1rem] leading-relaxed max-w-2xl mb-6 text-white/80 font-medium font-sans">
              Whether you’re buying your first home, preparing to sell, investing in property, or planning a renovation, Revitalize Group brings real estate expertise and home improvement experience together under one roof.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap gap-2.5 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 xs:px-5 xs:py-2.5 sm:px-8 sm:py-3 bg-copper hover:bg-copper-deep transition text-white font-bold text-xs xs:text-sm sm:text-base shadow-lg shadow-copper/20"
              >
                Schedule Your Free Consultation <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 xs:px-5 xs:py-2.5 sm:px-8 sm:py-3 bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition text-white font-bold text-xs xs:text-sm sm:text-base shadow-lg"
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
                  className="inline-flex items-center rounded-full border border-white/10 bg-[#1e110a]/30 backdrop-blur px-2.5 py-1 text-[9px] xs:px-3 xs:py-1.5 xs:text-[10px] sm:px-4 sm:py-2 sm:text-xs font-bold uppercase tracking-wider text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Service Slider (At Banner Bottom) */}
        <div className="relative z-10 w-full mt-8 xs:mt-10 lg:mt-[-100px]">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 w-full mb-3">
            <p className="text-[9px] font-black uppercase tracking-widest text-[#E2D6CF]/80">
              Our Quick Services
            </p>
          </div>

          {/* Marquee Slider Container with Dark Edge Fades */}
          <div className="relative flex overflow-hidden w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-[#0a0a0a] before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-[#0a0a0a] after:to-transparent after:content-['']">
            <div
              className="flex gap-3 xs:gap-4 items-center animate-marquee hover-pause w-max"
              style={{ marginTop: "0px" }}
            >
              {duplicatedServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.to}
                  className="group relative flex flex-col items-center justify-center h-20 w-32 xs:h-24 xs:w-40 bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 hover:border-copper/45 hover:shadow-lg transition-all duration-300 text-center shrink-0 rounded-lg"
                >
                  {/* Arrow indicator on hover */}
                  <div className="absolute top-2 right-2 text-white/20 group-hover:text-copper transition-colors duration-300">
                    <ArrowUpRight className="h-3 w-3" />
                  </div>

                  {/* Logo Image with silhouette overlay */}
                  <div className="flex justify-center items-center h-6 w-20 xs:h-8 xs:w-24 shrink-0 mb-1.5">
                    <img
                      src={service.logo}
                      alt={service.name}
                      className="max-h-full max-w-full object-contain filter grayscale brightness-0 invert opacity-70 group-hover:filter-none group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                    />
                  </div>

                  {/* Service Name */}
                  <span className="text-[9px] xs:text-[10px] font-bold text-white/90 group-hover:text-copper transition-colors duration-300 tracking-wide px-2 select-none">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
