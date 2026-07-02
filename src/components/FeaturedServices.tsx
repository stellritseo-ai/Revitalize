import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import featuredRealEstate from "@/assets/featured_real_estate.png";
import featuredRenovation from "@/assets/featured_renovation.png";
import featuredMaximizeValue from "@/assets/featured_maximize_value.png";

const showcaseItems = [
  {
    num: "01",
    title: "Buy & Sell Homes",
    description: "Helping buyers, sellers, and investors make smarter real estate decisions.",
    to: "/services/real-estate",
    image: featuredRealEstate,
    linkText: "Explore Real Estate"
  },
  {
    num: "02",
    title: "Renovate & Improve",
    description: "Professional home improvements, kitchens, bathrooms, flooring, roofing, painting, and cleaning services.",
    to: "/services/remodeling",
    image: featuredRenovation,
    linkText: "View Remodeling"
  },
  {
    num: "03",
    title: "Maximize Property Value",
    description: "Strategic home improvement and real estate guidance designed to increase equity and resale value.",
    to: "/services/construction",
    image: featuredMaximizeValue,
    linkText: "Evaluate Your Value"
  }
];

export function FeaturedServices() {
  return (
    <section className="relative bg-gradient-to-br from-[#fcfbfa] via-[#faf5ef] to-[#f4ebe1] py-[60px] px-6 sm:px-8 lg:px-12 mx-[15px] mt-[15px] mb-[15px] rounded-3xl border border-[#efe5da]/60 shadow-[0_8px_32px_0_rgba(149,77,38,0.02)] overflow-hidden select-none">
      {/* Decorative luxury ambient glows */}
      <div className="absolute left-[-10%] top-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-copper/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-copper/8 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto">
        {/* Header Block driving unique business positioning (Light theme layout) */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-copper/15 bg-copper/5 px-4 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6 text-copper shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-copper" />
            Built to Outperform
          </div>

          <h2 className="text-[23px] sm:text-4xl md:text-[42px] leading-tight font-extrabold tracking-tight text-charcoal font-serif mb-4">
            Real Estate. Renovations. Results.
          </h2>

          <h2
            className="font-extrabold tracking-tight text-charcoal font-serif mb-4 leading-tight text-[27px] sm:text-4xl md:text-[40px] mt-[-6px] sm:mt-[-10px] md:mt-[-15px]"
          >
            Your Real Estate &{" "}
            <span className="text-copper italic font-serif font-bold">Home Improvement Partner.</span>
          </h2>

          <p
            className="text-charcoal-soft/95 font-sans font-medium leading-relaxed max-w-3xl mx-auto"
            style={{ fontSize: "16px", marginTop: "-7px", marginBottom: "-56px" }}
          >
            Revitalize Group combines professional real estate services with expert home improvement solutions to help homeowners, buyers, sellers, and investors buy, improve, sell, and maximize the value of their properties, all under one roof.
          </p>
        </div>

        {/* 3-Column Interactive Expanding Accordion Grid with Dark Overlay and Margin Top */}
        <div className="flex flex-col md:flex-row gap-5 items-stretch min-h-[360px] mt-[10px]">
          {showcaseItems.map((item, index) => (
            <Link
              to={item.to}
              key={index}
              className="group relative flex flex-col justify-between p-6 sm:p-8 bg-[#120a05] border border-white/5 hover:border-copper/45 rounded-2xl hover:shadow-[0_24px_48px_-12px_rgba(213,124,76,0.15)] transition-all duration-500 cursor-pointer overflow-hidden flex-1 md:hover:flex-[1.6] min-h-[220px] md:min-h-[340px]"
            >
              {/* Card top border line highlight on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-copper/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Background Image with Dark themed gradient masking */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-[1.03] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0704] via-[#0c0704]/75 to-transparent" />
              </div>

              {/* Card Header Info */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-[10px] font-black tracking-widest text-copper/60 uppercase">
                  Service / {item.num}
                </span>
                <div className="w-6 h-6 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[10px] font-bold text-white group-hover:border-copper/45 group-hover:bg-copper/10 group-hover:text-copper transition-all duration-300">
                  {item.num}
                </div>
              </div>

              {/* Card Content & Expandable Description */}
              <div className="relative z-10 mt-12 flex-grow flex flex-col justify-end">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mb-2 group-hover:text-copper transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Desktop expands description, Mobile keeps it open */}
                <p className="text-xs sm:text-sm text-white/70 font-medium font-sans leading-relaxed md:max-h-0 md:opacity-0 md:group-hover:max-h-[80px] md:group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-white/5 mt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-copper group-hover:text-white transition-colors duration-300">
                    {item.linkText}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
