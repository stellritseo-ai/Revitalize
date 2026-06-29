import {
  Clock,
  CircleDollarSign,
  Home,
  Hammer,
  MapPin,
  MessageSquare,
  Package,
  Sparkles,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import whyChooseUsComposite from "@/assets/why-choose-us-composite.png";

const features = [
  {
    icon: Clock,
    title: "20+ Years Experience",
    desc: "Veteran builders, every project.",
  },
  {
    icon: CircleDollarSign,
    title: "Free Estimates",
    desc: "Clear pricing, no obligation.",
  },
  {
    icon: Home,
    title: "Residential Specialists",
    desc: "Homes are all we do.",
  },
  {
    icon: Hammer,
    title: "Quality Craftsmanship",
    desc: "Built to outlast trends.",
  },
  {
    icon: MapPin,
    title: "Local & Trusted",
    desc: "Proudly serving 50 miles.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    desc: "You're informed at every step.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-brand-light bg-background py-16 px-6 sm:px-8 lg:px-12 mx-[15px] mt-[15px] rounded-2xl border border-charcoal/5">
      {/* Background glowing blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-copper/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-silver/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Image */}
        <div className="w-full h-auto flex items-center justify-center relative">
          <div className="absolute inset-0 bg-copper/5 blur-2xl rounded-full scale-90 pointer-events-none" />
          <img
            src={whyChooseUsComposite}
            alt="Revitalize Real Estate craftsmanship"
            loading="lazy"
            className="w-full h-auto object-contain rounded-[2rem] shadow-2xl relative z-10 transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col">
          {/* Badge */}
          <div className="w-fit inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
            <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
            Why Choose Us
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[46px] md:leading-tight font-bold tracking-tight text-charcoal mb-[20px] font-serif">
            Why Homeowners Choose Us
          </h2>
          <p className="text-base sm:text-lg text-charcoal-soft/95 mb-10 font-sans font-medium">
            A home improvement partner you can actually trust.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-copper" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-charcoal font-semibold text-base mb-1.5">{feature.title}</h4>
                  <p className="text-charcoal-soft/85 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            to="/contact"
            className="w-fit px-8 py-3.5 rounded-full bg-copper hover:bg-copper-deep text-white font-bold text-sm shadow-lg shadow-copper/20 transition-all duration-300"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
