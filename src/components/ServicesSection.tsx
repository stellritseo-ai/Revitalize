import { Link } from "@tanstack/react-router";
import kitchenImg from "@/assets/kitchen/uploaded-kitchen.png";
import bathroomImg from "@/assets/bathroom/uploaded-bathroom.png";
import homeEvalImg from "@/assets/residential/uploaded-home-evaluation.png";
import floorCarpentryImg from "@/assets/residential/uploaded-floor-carpentry.jpg";
import realEstateImg from "@/assets/residential/uploaded-real-estate.png";
import cleaningImg from "@/assets/residential/uploaded-cleaning.png";
import cabinetsImg from "@/assets/kitchen/uploaded-cabinets.png";
import {
  Utensils,
  Bath,
  Home,
  Layers,
  Briefcase,
  LineChart,
  Sparkles,
  Paintbrush,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Kitchen Remodeling",
    // lead: "Innovative design & craftsmanship.",
    body: "Transform your space with our kitchen remodeling service, combining innovative design and expert craftsmanship to create a...",
    icon: Utensils,
    image: kitchenImg,
    to: "#",
    gridClass: "lg:col-span-1 lg:row-span-2 h-[350px] sm:h-[400px] lg:h-[624px]",
  },
  {
    title: "Bathroom Remodeling",
    // lead: "Functionality and style blended.",
    body: "Transform your bathroom with our expert remodeling services. We blend functionality and style, delivering customized...",
    icon: Bath,
    image: bathroomImg,
    to: "#",
    gridClass: "h-[300px]",
  },
  {
    title: "Residential Remodeling",
    // lead: "Customized home improvements.",
    body: "Transform your home with our expert Residential home improvement services, delivering customized solutions that enhance...",
    icon: Home,
    image: "/g1.jpg",
    to: "#",
    gridClass: "h-[300px]",
  },
  {
    title: "Floor, Pavers & Carpentry",
    // lead: "Stunning floors & durable pavers.",
    body: "Enhance your home with our expert carpentry services. We specialize in crafting stunning floors and durable pavers, providing tailored solutions...",
    icon: Layers,
    image: floorCarpentryImg,
    to: "#",
    gridClass: "h-[300px]",
  },
  {
    title: "Real Estate Services",
    // lead: "Pre-listing home improvements.",
    body: "We offer expert pre-listing services that seamlessly combine home improvements, remodeling, and real estate expertise—giving you the tools...",
    icon: Briefcase,
    image: realEstateImg,
    to: "#",
    gridClass: "h-[300px]",
  },
  {
    title: "Home evaluation",
    // lead: "Personalized market value analysis.",
    body: "Want to know what your home is really worth in today’s market? Our free home evaluation service gives you a personalized property...",
    icon: LineChart,
    image: homeEvalImg,
    to: "#",
    gridClass: "h-[300px]",
  },
  {
    title: "Professional Cleaning Services",
    // lead: "Post-renovation & routine cleanings.",
    body: "Revitalize Group offers professional cleaning services, including post-renovation, pre-listing, move-in/move-out, and routine cleanings.",
    icon: Sparkles,
    image: cleaningImg,
    to: "#",
    gridClass: "h-[300px]",
  },
  {
    title: "Premium Cabinet Sales & Custom Design Services",
    // lead: "High-end cabinetry for any space.",
    body: "Upgrade your space with premium cabinetry for kitchens, bathrooms, offices, and closets. We offer a wide selection of high-end styles, finishes, and configurations",
    icon: Paintbrush,
    image: cabinetsImg,
    to: "/services/specialty-trade",
    gridClass: "h-[300px]",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-gradient-brand-light bg-background py-16 px-6 sm:px-8 lg:px-12 mx-[15px] mt-[15px] rounded-2xl border border-charcoal/5">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-14 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-copper mb-4">
              <span className="w-6 h-[1.5px] bg-copper inline-block" />
              What we build
            </div>

            <h2 className="text-3xl md:text-[45px] md:leading-[55px] font-bold tracking-tight text-charcoal mb-4 font-serif lg:whitespace-nowrap">
              A full suite of{" "}
              <span className="text-copper italic font-serif font-bold">
                Residential Renovation
              </span>{" "}
              services.
            </h2>

            <p className="text-base sm:text-lg text-charcoal-soft/95 font-sans font-medium">
              Every project is led by senior craftsmen and supported by trusted local trades. We
              focus only on homes — no commercial work, no shortcuts.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="#"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 hover:border-[#1e110a] bg-white/60 backdrop-blur hover:bg-[#1e110a] hover:text-white hover:border-[#1e110a] transition-all duration-300 text-charcoal font-bold text-sm px-6 py-3.5"
            >
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-charcoal/5 ${service.gridClass}`}
            >
              <Link to={service.to} className="absolute inset-0 z-20" aria-label={service.title} />

              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-[#160d08]/45 to-transparent transition-opacity duration-500 group-hover:from-charcoal group-hover:via-charcoal/70" />

              {/* Card Icons & Arrow */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#1e110a]/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
                  <service.icon className="h-5 w-5 text-white" strokeWidth={2} />
                </div>
              </div>

              <div className="absolute top-6 right-6 z-10 text-white/50 group-hover:text-white transition-colors duration-300">
                <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
              </div>

              {/* Card Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end pointer-events-none z-10">
                <h3 className="text-white text-xl sm:text-2xl font-bold font-serif mb-1 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  {service.title}
                </h3>

                {/* Expandable Hover Content */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-white/75 text-xs sm:text-sm font-medium leading-relaxed font-sans max-w-[280px] mb-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.body}
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 pb-1">
                      <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-copper text-white font-bold text-[11px] uppercase tracking-wider shadow-md transition-all duration-300 hover:bg-copper-deep">
                        Read More <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
