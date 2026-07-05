import { Link } from "@tanstack/react-router";
import buySellImg from "@/assets/services/buy_sell_homes.png";
import homeRenovationsImg from "@/assets/services/home_renovations.png";
import kitchenImg from "@/assets/services/kitchen_remodeling.png";
import bathroomImg from "@/assets/services/bathroom_remodeling.png";
import flooringImg from "@/assets/services/flooring.png";
import roofingImg from "@/assets/services/roofing.png";
import cleaningImg from "@/assets/services/professional_cleaning.png";
import cabinetsImg from "@/assets/services/cabinet_sales.png";
import investmentImg from "@/assets/services/investment_properties.png";
import {
  Utensils,
  Bath,
  Home,
  Layers,
  LineChart,
  Sparkles,
  Paintbrush,
  ArrowRight,
  Hammer,
  ShieldCheck,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";

/* ── Shared card inner content ─────────────────────────────── */
function CardContent({ s }: { s: { icon: any; title: string; desc: string; image: string; to: string } }) {
  const Icon = s.icon;

  return (
    <>
      {/* Image */}
      <img
        src={s.image}
        alt={s.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Gradient — stronger on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/35 to-transparent group-hover:from-charcoal/95 group-hover:via-charcoal/80 group-hover:to-charcoal/20 transition-all duration-500" />

      {/* Copper accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-copper via-copper-soft to-copper-deep opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon badge — top-left */}
      <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-copper/90 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
        <Icon className="h-4 w-4 text-white" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
        <div className="transition-all duration-500 group-hover:-translate-y-2">
          <h3 className="text-sm sm:text-[15px] font-extrabold text-white leading-tight uppercase tracking-wide font-serif">
            {s.title}
          </h3>

          {/* Hover reveal */}
          <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-out">
            <div className="overflow-hidden">
              <p className="text-[12px] text-white/80 leading-snug mt-2 line-clamp-3 font-sans">
                {s.desc}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-copper-soft font-black text-[10px] uppercase tracking-widest group/link">
                <span className="border-b border-copper-soft/50 group-hover/link:border-copper-soft transition-colors font-sans">
                  Explore Service
                </span>
                <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ServicesSection() {
  const services = [
    {
      title: "Buy & Sell Homes",
      desc: "We offer expert real estate representation and pre-listing home improvements, giving you the competitive edge to sell for top dollar.",
      icon: Home,
      image: buySellImg,
      to: "/services/real-estate",
    },
    {
      title: "Home Renovations",
      desc: "Transform your home with our expert residential remodeling services, delivering customized structural solutions that enhance your daily living.",
      icon: Hammer,
      image: homeRenovationsImg,
      to: "/services/residential",
    },
    {
      title: "Kitchen Remodeling",
      desc: "Transform your space with our kitchen remodeling service, combining innovative design and expert craftsmanship to create a beautiful, functional cooking area.",
      icon: Utensils,
      image: kitchenImg,
      to: "/services/kitchen",
    },
    {
      title: "Bathroom Remodeling",
      desc: "Transform your bathroom with our expert remodeling services. We blend functionality and style, delivering customized features and luxury upgrades.",
      icon: Bath,
      image: bathroomImg,
      to: "/services/bathroom",
    },
    {
      title: "Flooring",
      desc: "Enhance your home with our premium flooring services, specializing in stunning hardwood, tile, and durable pavers tailored to your lifestyle.",
      icon: Layers,
      image: flooringImg,
      to: "/services/specialty-trade",
    },
    {
      title: "Roofing",
      desc: "Protect your property with our professional roofing solutions, offering durable materials, thorough inspections, and expert repairs.",
      icon: ShieldCheck,
      image: roofingImg,
      to: "/services/specialty-trade",
    },
    {
      title: "Professional Cleaning",
      desc: "Revitalize Group offers professional cleaning services, including post-improvement, pre-listing, move-in/move-out, and routine cleanings.",
      icon: Sparkles,
      image: cleaningImg,
      to: "/services/cleaning",
    },
    {
      title: "Cabinet Sales",
      desc: "Upgrade your space with premium cabinetry for kitchens, bathrooms, offices, and closets. We offer a wide selection of high-end styles, finishes, and configurations.",
      icon: Paintbrush,
      image: cabinetsImg,
      to: "/services/cabinets",
    },
    {
      title: "Investment Properties",
      desc: "Build long-term wealth with our investment property services. We assist with property acquisition, ROI analysis, strategic renovations, and full property management.",
      icon: LineChart,
      image: investmentImg,
      to: "/services/real-estate",
    },
  ];

  const topItems = services.slice(0, 3);
  const slideItems = [...services.slice(3), ...services.slice(3)];

  return (
    <section id="services" className="bg-gradient-brand-light bg-background py-[60px] overflow-hidden mx-[15px] mt-[15px] rounded-[10px] border border-charcoal/5">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 w-full">

        {/* ── Top Row: Text + 3 Hero Cards ──────────────────── */}
        <div className="grid gap-10 lg:grid-cols-[38%_1fr] lg:gap-14 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col justify-center text-left"
          >
            {/* Eyebrow badge */}
            <span className="inline-flex items-center gap-2 bg-copper/10 border border-copper/20 text-copper rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-5 w-fit font-sans">
              <Sparkles className="w-3.5 h-3.5 text-copper" />
              What We Build
            </span>

            {/* Heading */}
            <h2
              className="text-charcoal tracking-tight leading-[1.2] font-bold font-serif"
              style={{ fontSize: "clamp(24px, 3.2vw, 36px)" }}
            >
              A Full Suite of{" "}
              <span className="text-copper italic font-serif font-bold">
                Real Estate & Home Improvement
              </span>{" "}
              Services
            </h2>

            {/* Divider accent */}
            <div className="flex items-center gap-3 mt-5 mb-5">
              <div className="h-[2px] w-10 bg-copper rounded-full" />
              <div className="h-[2px] w-4 bg-copper/40 rounded-full" />
            </div>

            <p className="text-charcoal-soft/95 text-sm md:text-[15px] leading-[28px] font-medium max-w-[95%] font-sans">
              Every project is led by senior craftsmen and supported by trusted local trades. We focus only on homes — no commercial work, no shortcuts.
            </p>

            {/* Trust row */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-bold text-charcoal-soft font-sans">
              {["Licensed & Insured", "Veteran Craftsmen", "Free Estimates"].map((itemText) => (
                <span key={itemText} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper" />
                  {itemText}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-copper hover:bg-copper-deep text-white rounded-full px-7 py-3.5 text-[13px] font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(202,110,58,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-sans"
              >
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {topItems.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: idx * 0.12, ease: "easeOut" }}
              >
                <Link
                  to={s.to}
                  className="group relative rounded-2xl overflow-hidden bg-neutral-950 h-[210px] sm:h-[290px] lg:h-[360px] xl:h-[400px] cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)] transition-shadow duration-500 block"
                >
                  <CardContent s={s} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Auto-scroll Carousel ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          className="mt-6 relative"
        >
          {/* Section divider with label */}
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px flex-1 bg-charcoal/10" />
            <span className="text-[10px] font-black uppercase tracking-widest text-charcoal-soft whitespace-nowrap font-sans">
              More Services
            </span>
            <div className="h-px flex-1 bg-charcoal/10" />
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-ivory to-transparent z-10 pointer-events-none hidden sm:block" />
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-ivory to-transparent z-10 pointer-events-none hidden sm:block" />

          <Carousel
            plugins={[
              AutoScroll({
                speed: 1.2,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                stopOnFocusIn: true,
              }),
            ]}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {slideItems.map((s, idx) => (
                <CarouselItem
                  key={`${s.title}-${idx}`}
                  className="pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <Link
                    to={s.to}
                    className="group relative rounded-xl overflow-hidden bg-neutral-950 h-[180px] sm:h-[220px] lg:h-[260px] cursor-pointer shadow-md hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-shadow duration-500 block"
                  >
                    <CardContent s={s} />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

      </div>
    </section>
  );
}
