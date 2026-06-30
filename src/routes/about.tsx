import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ProcessSection } from "@/components/ProcessSection";
import {
  Sparkles,
  Award,
  Clock,
  Home,
  MessageSquare,
  Hammer,
  CircleDollarSign,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Star,
  Users,
  Compass,
  Briefcase
} from "lucide-react";
import React, { useState, useEffect } from "react";

// Image imports from assets
import resOne from "@/assets/residential/1.webp";
import kitSix from "@/assets/kitchen/6.webp";
import bathFive from "@/assets/bathroom/5.webp";
import realEstateImg from "@/assets/residential/uploaded-real-estate.png";
import cleaningImg from "@/assets/residential/uploaded-cleaning.png";
import cabinetImg from "@/assets/kitchen/uploaded-cabinets.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    title: "About Revitalize Real Estate | Trusted Home Improvement & Real Estate Services in Tampa Bay",
    meta: [
      {
        name: "description",
        content:
          "With 20+ years of experience, Revitalize Real Estate is a trusted home improvement and real estate partner in Tampa Bay. We provide quality craftsmanship, transparent communication, and a residential-only focus from kitchens to full remodels.",
      },
    ],
  }),
  component: About,
});

function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const differences = [
    {
      icon: Clock,
      title: "20+ Years of Experience",
      desc: "Our veteran builders bring decades of combined knowledge and skill to every project. Whether it’s a full kitchen renovation or a custom bathroom remodel, you’re in experienced hands.",
    },
    {
      icon: Home,
      title: "Residential Specialists",
      desc: "We are 100% focused on homes. We understand the nuances and specific needs of residential construction, ensuring a personalized approach that commercial generalists cannot match.",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      desc: "We believe in keeping you informed at every step of the process—from the initial consultation to the final walkthrough. No surprises, just a smooth, collaborative journey.",
    },
    {
      icon: Hammer,
      title: "Quality Craftsmanship",
      desc: "We use premium materials and proven construction practices to deliver results that are built to outlast trends. Our work is designed to increase the functionality, beauty, and value of your home.",
    },
    {
      icon: CircleDollarSign,
      title: "Free On-Site Estimates",
      desc: "We offer clear, no-obligation pricing to help you plan your project with confidence. Our estimates are accurate, with no hidden fees.",
    },
    {
      icon: MapPin,
      title: "Local & Trusted",
      desc: "Proudly serving the Tampa Bay community, we are your neighbors. Our commitment to the local area has made us a trusted partner for over 20 years.",
    },
  ];

  const servicesList = [
    {
      title: "Kitchen Remodeling",
      desc: "Create the heart of your home with custom cabinetry, premium counters, and modern layouts.",
      link: "/services/remodeling",
      img: kitSix,
    },
    {
      title: "Bathroom Remodeling",
      desc: "Transform your bathroom into a personal sanctuary with luxury tiles, elegant fixtures, and custom vanities.",
      link: "/services/remodeling",
      img: bathFive,
    },
    {
      title: "Residential Remodeling",
      desc: "From whole-home transformations to room additions, we handle projects of any scale.",
      link: "/services/residential",
      img: resOne,
    },
    {
      title: "Flooring, Pavers & Carpentry",
      desc: "Install new floors, pavers, and custom carpentry to enhance your home’s aesthetic and value.",
      link: "/services/specialty-trade",
      img: resOne, // using fallback
    },
    {
      title: "Real Estate Services",
      desc: "We prepare homes for the market with pre-listing improvements that maximize value and appeal.",
      link: "/services/real-estate",
      img: realEstateImg,
    },
    {
      title: "Professional Cleaning Services",
      desc: "A deep, professional clean is often the finishing touch that makes a home shine.",
      link: "/services/cleaning",
      img: cleaningImg,
    },
    {
      title: "Premium Cabinet Sales & Custom Design",
      desc: "We offer custom cabinet design and premium sales for a truly bespoke finish.",
      link: "/services/cabinets",
      img: cabinetImg,
    },
  ];

  const servingCities = [
    "Wesley Chapel",
    "Brandon",
    "St. Petersburg",
    "Clearwater",
    "Lutz",
    "Odessa",
    "Land O' Lakes",
    "Zephyrhills",
    "Plant City",
    "Riverview",
    "Apollo Beach",
    "Valrico",
    "Lithia",
    "Thonotosassa",
  ];

  return (
    <main className="bg-background overflow-x-hidden font-sans">
      {/* 1. Page Hero Section */}
      <PageHero
        title="About Revitalize Real Estate"
        subtitle="Tampa Bay's Trusted Partner for Home Improvement & Real Estate Services"
      />

      {/* 2. Welcome Intro Section (Trust & Craftsmanship) */}
      <section className="relative py-20 px-6 sm:px-8 lg:px-12 mx-[15px] rounded-2xl bg-gradient-brand-light border border-charcoal/5">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-copper/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-silver/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
          {/* Left Column: Text Content */}
          <div className={`w-full lg:w-[50%] flex flex-col items-start transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              Who We Are
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6 font-serif leading-tight">
              A Real Estate Improvement Partner Built on{" "}
              <span className="text-copper italic font-serif font-bold">Trust and Craftsmanship.</span>
            </h2>

            <div className="text-[1.05rem] text-charcoal-soft/90 font-medium space-y-6 leading-relaxed mb-8">
              <p className="border-l-4 border-copper/30 pl-4 py-1">
                For more than twenty years, Revitalize Real Estate has been helping homeowners across Tampa Bay reimagine the spaces they live in. We are more than just a construction company—we are a team of dedicated professionals committed to turning houses into homes worth coming back to, crafted to last.
              </p>
              <p>
                From our base in Tampa, FL 33647, we proudly serve residential clients within a 50-mile radius, including Wesley Chapel, Brandon, St. Petersburg, Clearwater, and beyond. Our reputation is built on a foundation of craftsmanship, clear communication, and a genuine respect for your home and family.
              </p>
              <p>
                We know that choosing a contractor is a significant decision. That’s why we focus only on residential work—no commercial projects, no shortcuts. Our team of experienced builders and senior craftsmen handles every project with the same care and attention to detail we would want in our own homes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-copper hover:bg-copper-deep transition-all duration-300 text-white font-bold text-sm shadow-lg shadow-copper/25 hover:scale-[1.02]"
              >
                Request a Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:8133230291"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 border border-charcoal/10 hover:border-charcoal/30 bg-white/50 backdrop-blur hover:bg-white transition-all duration-300 text-charcoal font-bold text-sm hover:scale-[1.02]"
              >
                Call Us: (813) 323-0291
              </a>
            </div>
          </div>

          {/* Right Column: Visual Overlapping Collage */}
          <div className="relative w-full lg:w-[45%] h-[480px] sm:h-[520px] flex items-center justify-center">
            <div className="relative z-10 w-full max-w-[420px] h-full">
              {/* Image 1: Main Residential */}
              <div className="absolute top-8 left-0 w-[72%] aspect-[4/5] rounded-[2rem] overflow-hidden border-[6px] border-white shadow-xl transition-all duration-500 hover:scale-[1.03] hover:z-20 hover:shadow-2xl">
                <img
                  src={resOne}
                  alt="Revitalize craftsmanship residential"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2: Kitchen Details */}
              <div className="absolute top-0 right-0 w-[52%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg transition-all duration-500 hover:scale-[1.03] hover:z-20 hover:shadow-2xl">
                <img
                  src={kitSix}
                  alt="Kitchen renovation craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 3: Bathroom Details */}
              <div className="absolute bottom-4 right-2 w-[48%] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-lg transition-all duration-500 hover:scale-[1.03] hover:z-20 hover:shadow-2xl">
                <img
                  src={bathFive}
                  alt="Bathroom custom details"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-4 -left-4 bg-charcoal/95 backdrop-blur border border-white/10 p-5 rounded-[1.5rem] shadow-xl z-20 transition-transform duration-300 hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="bg-copper/20 w-12 h-12 rounded-xl flex items-center justify-center text-copper">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white text-xl font-bold leading-none font-serif">20+ Years</p>
                    <p className="text-[10px] text-silver font-bold uppercase tracking-wider mt-1">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Revitalize Difference Section */}
      <section className="relative py-24 bg-white/50 border-t border-charcoal/5">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
              <Award className="h-3.5 w-3.5 text-copper animate-pulse" />
              What Sets Us Apart
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-bold text-charcoal mb-6 font-serif">
              The Revitalize Difference
            </h2>
            <p className="text-base sm:text-lg text-charcoal-soft/80 font-medium leading-relaxed">
              Our clients choose us because we deliver a stress-free experience from start to finish. A remodel or home improvement project is an investment in your future, not just an expense. We treat it that way, providing transparent pricing, a clear timeline, and a final result that exceeds expectations.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differences.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-[#faf8f6] border border-[#efe5da] p-8 rounded-[1.75rem] transition-all duration-300 hover:border-copper/40 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(226,108,54,0.06)] flex flex-col h-full"
              >
                <div className="bg-copper/5 group-hover:bg-copper/10 transition-colors duration-300 w-14 h-14 rounded-2xl flex items-center justify-center text-copper mb-6 shrink-0 border border-copper/10">
                  <item.icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-charcoal text-xl mb-3 font-serif">{item.title}</h3>
                <p className="text-charcoal-soft/85 text-sm leading-relaxed font-medium flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Section (Your Vision, Our Expertise) */}
      <section className="relative py-24 bg-gradient-brand-light border-y border-charcoal/5 mx-[15px] rounded-2xl">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
              <Compass className="h-3.5 w-3.5 text-copper animate-pulse" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-bold text-charcoal mb-6 font-serif">
              Your Vision, Our Expertise
            </h2>
            <p className="text-base sm:text-lg text-charcoal-soft/80 font-medium leading-relaxed">
              We offer a full suite of residential home improvement services. Every project is led by senior craftsmen and supported by trusted local trades, ensuring seamless execution and premium quality.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesList.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-charcoal/5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex flex-col h-full"
              >
                {/* Image Wrap */}
                <div className="h-44 w-full overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-charcoal text-base mb-2 group-hover:text-copper transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-soft/80 text-xs leading-relaxed font-medium mb-6 flex-grow">
                    {item.desc}
                  </p>
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-copper group-hover:text-copper-deep hover:underline mt-auto"
                  >
                    Explore Service <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Process Section */}
      <ProcessSection />

      {/* 6. Our Promise & Serving Cities Block */}
      <section className="relative py-24 bg-white border-t border-charcoal/5">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left Side: Promise & Contact */}
            <div className="w-full lg:w-[50%] flex flex-col items-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
                <ShieldCheck className="h-3.5 w-3.5 text-copper" />
                Our Promise
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6 font-serif">
                Our Promise to You
              </h2>
              <p className="text-[1.05rem] text-charcoal-soft/90 leading-relaxed font-medium mb-8">
                At Revitalize Real Estate, we don’t just build homes—we build lasting relationships. Our 20+ years of experience, hundreds of happy clients, and a team of over 15 expert members ensure your project is delivered with integrity and quality.
              </p>
              <div className="bg-gradient-brand bg-background text-white p-6 rounded-2xl w-full border border-charcoal/5 shadow-xl">
                <h4 className="text-sm font-bold text-copper uppercase tracking-wider mb-4">Contact Info</h4>
                <div className="space-y-4">
                  <a href="tel:8133230291" className="flex items-center gap-3 text-white/90 hover:text-white hover:underline transition">
                    <div className="bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center text-copper shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-white/40 leading-none mb-0.5">Phone</p>
                      <span className="font-bold text-sm">(813) 323-0291</span>
                    </div>
                  </a>
                  <a href="mailto:revitalizerealestate@gmail.com" className="flex items-center gap-3 text-white/90 hover:text-white hover:underline transition">
                    <div className="bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center text-copper shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-white/40 leading-none mb-0.5">Email</p>
                      <span className="font-bold text-sm">revitalizerealestate@gmail.com</span>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center text-copper shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-white/40 leading-none mb-0.5">Location</p>
                      <span className="font-bold text-sm">Tampa, FL 33647 & serving 50-mile radius</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Serving Cities */}
            <div className="w-full lg:w-[50%] bg-[#faf8f6] border border-[#efe5da] p-8 md:p-10 rounded-[2rem] shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-4 font-serif">
                Proudly Serving the Tampa Bay Area
              </h3>
              <p className="text-sm text-charcoal-soft/80 font-medium leading-relaxed mb-8">
                From our hub in Tampa, FL, we proudly serve residential clients within a 50-mile radius across Hillsborough, Pinellas, Pasco, and surrounding counties:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {servingCities.map((city, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 bg-white border border-charcoal/5 px-4 py-2 rounded-full text-xs font-semibold text-charcoal transition-all duration-300 hover:border-copper/45 hover:shadow-sm hover:scale-[1.03]"
                  >
                    <MapPin className="w-3.5 h-3.5 text-copper shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
