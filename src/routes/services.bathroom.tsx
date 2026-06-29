import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CircleDollarSign,
  Home,
  MessageSquare,
  Star,
  ClipboardCheck,
  ChevronDown,
  ChevronUp,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Hammer,
  HelpCircle,
  FolderKanban,
  Tv,
  ArrowUpRight,
  PlusCircle,
  Building,
  Shield,
  Droplet
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { toast } from "sonner";

// Image imports from assets
import resOne from "@/assets/residential/1.webp";
import kitSix from "@/assets/kitchen/6.webp";
import bathFive from "@/assets/bathroom/5.webp";
import realEstateImg from "@/assets/residential/uploaded-real-estate.png";
import cleaningImg from "@/assets/residential/uploaded-cleaning.png";
import cabinetImg from "@/assets/kitchen/uploaded-cabinets.png";
import uploadedBathroom from "@/assets/bathroom/uploaded-bathroom.png";

export const Route = createFileRoute("/services/bathroom")({
  head: () => ({
    title: "Bathroom Remodeling | Revitalize Real Estate – Tampa Bay's Luxury Bathroom Experts",
    meta: [
      {
        name: "description",
        content:
          "Transform your bathroom into a luxurious retreat with expert bathroom remodeling services in Tampa Bay. Custom designs, premium finishes, and quality craftsmanship. Serving within 50 miles. Free estimates.",
      },
    ],
  }),
  component: BathroomRemodelingPage,
});

const benefits = [
  {
    icon: Award,
    title: "20+ Years Experience",
    desc: "Veteran builders who understand bathroom complexities",
  },
  {
    icon: Home,
    title: "100% Residential Focus",
    desc: "We only work on homes—no commercial shortcuts",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent Process",
    desc: "Clear timelines, open communication, no hidden fees",
  },
  {
    icon: Hammer,
    title: "Quality Craftsmanship",
    desc: "Premium materials and proven techniques",
  },
  {
    icon: MapPin,
    title: "Local & Trusted",
    desc: "Serving Tampa Bay for over two decades",
  },
  {
    icon: Star,
    title: "5-Star Reputation",
    desc: "127+ verified Google reviews from happy homeowners",
  },
  {
    icon: CircleDollarSign,
    title: "Free Estimates",
    desc: "No-obligation pricing to help you plan",
  },
  {
    icon: Sparkles,
    title: "Custom Designs",
    desc: "Tailored to your style, space, and budget",
  },
];

const servicesDetail = [
  {
    title: "Full Bathroom Renovations",
    desc: "Completely transform your bathroom from floor to ceiling. We handle everything from demolition to the final finish, creating a cohesive, modern space that reflects your style.",
    icon: Home,
    image: uploadedBathroom,
    bullets: [
      "Complete demolition and removal",
      "New plumbing and electrical",
      "Custom tile work and flooring",
      "Premium fixtures and finishes",
      "Lighting and ventilation upgrades",
      "Custom cabinetry and vanities",
    ],
  },
  {
    title: "Luxury Master Bath Suites",
    desc: "Create a spa-like retreat in your own home with a luxury master bath suite. Our designs incorporate premium materials, custom layouts, and high-end fixtures for the ultimate relaxation experience.",
    icon: Sparkles,
    image: bathFive,
    bullets: [
      "Custom walk-in showers with multiple showerheads",
      "Freestanding soaking tubs",
      "His-and-hers vanities",
      "Premium countertops (granite, quartz, marble)",
      "Heated flooring and towel racks",
      "Custom lighting and mirrors",
    ],
  },
  {
    title: "Guest & Powder Room Remodels",
    desc: "Make a lasting impression with beautifully designed guest bathrooms and powder rooms. We transform small spaces into stunning, functional areas that impress your visitors.",
    icon: Building,
    image: realEstateImg, // fallback
    bullets: [
      "Space-efficient vanities and storage",
      "Designer fixtures and hardware",
      "Custom tile accents",
      "Elegant lighting and mirrors",
      "High-quality finishes",
    ],
  },
  {
    title: "Walk-In Shower Installations",
    desc: "Upgrade your outdated tub to a modern, accessible walk-in shower. Our custom shower designs combine beauty with safety and functionality.",
    icon: Droplet,
    image: resOne, // fallback
    bullets: [
      "Custom shower pan and waterproofing",
      "Premium tile and stone finishes",
      "Glass enclosures and doors",
      "Multiple showerhead options",
      "Built-in seating and niches",
      "Safety grab bars and non-slip flooring",
    ],
  },
  {
    title: "Bathtub & Soaking Tub Installations",
    desc: "Whether you prefer a classic clawfoot tub or a modern freestanding soaking tub, we handle the complete installation with precision and care.",
    icon: Home,
    image: cleaningImg, // fallback
    bullets: [
      "Bathtub selection and sourcing",
      "Professional installation",
      "New plumbing and fixtures",
      "Custom tile surround",
      "Waterproofing and sealing",
    ],
  },
  {
    title: "Plumbing & Fixture Upgrades",
    desc: "Update your bathroom's functionality with professional plumbing and fixture upgrades. We handle everything from faucet replacements to complete repiping.",
    icon: Hammer,
    image: cabinetImg, // fallback
    bullets: [
      "Faucet and fixture replacement",
      "Toilet installation and repair",
      "Shower valve replacement",
      "Bathtub drain repair",
      "Complete repiping services",
    ],
  },
];

const processSteps = [
  {
    step: "Step 01",
    title: "Request a Free Estimate",
    desc: "Tell us about your bathroom project—no obligation, no pressure. We provide clear, transparent pricing.",
  },
  {
    step: "Step 02",
    title: "Consultation & Planning",
    desc: "We visit your home, listen to your vision, and discuss the details. Our team provides expert recommendations and answers all your questions.",
  },
  {
    step: "Step 03",
    title: "Design & Approval",
    desc: "We finalize the scope of work, material selections, and a transparent timeline for your approval. You're in control every step of the way.",
  },
  {
    step: "Step 04",
    title: "Construction & Delivery",
    desc: "Our craftsmen get to work, respecting your home and finishing on schedule. We keep you informed daily and ensure a flawless final walkthrough.",
  },
];

const recentProjects = [
  { type: "Luxury Master Bath Suite", location: "Tampa, FL 33647", scope: "Walk-in shower, freestanding tub, his-and-hers vanities, heated floors" },
  { type: "Contemporary Guest Bath", location: "Wesley Chapel, FL", scope: "Space-efficient vanity, custom tile, modern fixtures" },
  { type: "Walk-In Shower Installation", location: "Clearwater, FL", scope: "Custom shower with multiple showerheads and built-in seating" },
  { type: "Powder Room Remodel", location: "St. Petersburg, FL", scope: "Designer fixtures, custom vanity, elegant finishes" },
  { type: "Bathroom & Plumbing Repair", location: "Land O' Lakes, FL", scope: "Shower valve replacement and bathtub drain repair" },
  { type: "Master Bath Transformation", location: "Brandon, FL", scope: "Complete renovation with premium finishes and custom tile work" },
];

const clientReviews = [
  {
    author: "Marcus T.",
    location: "St. Petersburg, FL",
    text: "We hired Revitalize Real Estate for a full bathroom remodel, and the results exceeded every expectation. The attention to detail in the tile work, the premium fixtures, and the flawless finish made our master bath feel like a luxury spa. Their project manager kept us informed every single day. This is the quality you hope for but rarely find.",
  },
  {
    author: "Lisa M.",
    location: "Clearwater, FL",
    text: "The craftsmanship is on a completely different level. From framing to final paint, everything was clean and permitted correctly. Our new bathroom is stunning. Love that they offered video meetings—saved us so much time.",
  },
  {
    author: "Elena P.",
    location: "Tampa, FL",
    text: "We hired Revitalize Real Estate for a master bath remodel. Their estimate process was surprisingly accurate. The final invoice matched the initial quote almost perfectly. No hidden fees, premium finish from start to finish.",
  },
  {
    author: "Valery B.",
    location: "North Port, FL",
    text: "Revitalize Real Estate tackled two urgent issues: a leaking shower valve and a clogged bathtub drain. They preserved all tile finishes with zero damage. Fast, reliable, and a lasting solution. Thank you!",
  },
];

const citiesLeft = [
  { city: "Tampa, FL 33647", distance: "Primary" },
  { city: "Wesley Chapel", distance: "~15 miles" },
  { city: "Brandon", distance: "~12 miles" },
  { city: "St. Petersburg", distance: "~25 miles" },
  { city: "Clearwater", distance: "~23 miles" },
  { city: "Riverview", distance: "~14 miles" },
  { city: "Valrico", distance: "~15 miles" },
  { city: "Thonotosassa", distance: "~8 miles" },
];

const citiesRight = [
  { city: "Lutz", distance: "~12 miles" },
  { city: "Odessa", distance: "~18 miles" },
  { city: "Land O' Lakes", distance: "~16 miles" },
  { city: "Zephyrhills", distance: "~28 miles" },
  { city: "Plant City", distance: "~25 miles" },
  { city: "Apollo Beach", distance: "~18 miles" },
  { city: "Lithia", distance: "~18 miles" },
];

const faqsList = [
  {
    q: "How much does a bathroom remodel cost?",
    a: "The cost varies based on the scope of work, materials, and size of your bathroom. We provide transparent, detailed estimates during our free consultation. Contact us for a quote tailored to your project."
  },
  {
    q: "How long does a bathroom remodel take?",
    a: "A typical bathroom remodel takes 2-6 weeks, depending on the complexity. We provide a clear timeline during the planning phase and keep you updated throughout the process."
  },
  {
    q: "Do I need permits for my bathroom remodel?",
    a: "Most bathroom remodels require permits, especially for plumbing and electrical work. Our team handles all permitting and inspections to ensure your project meets local building codes."
  },
  {
    q: "Can you install a walk-in shower in place of my bathtub?",
    a: "Absolutely! We specialize in converting outdated tubs into modern, accessible walk-in showers. We handle all plumbing, waterproofing, tiling, and glass installation."
  },
  {
    q: "What materials do you recommend for bathroom countertops?",
    a: "We offer a variety of premium options including granite, quartz, marble, and solid surface. Our team will help you select the perfect material for your style, budget, and durability needs."
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes! Revitalize Real Estate is fully licensed, bonded, and insured for your peace of mind."
  },
  {
    q: "Do you offer financing options?",
    a: "Yes, we offer flexible financing options to help make your bathroom remodeling project more affordable. Contact us for details."
  }
];

function BathroomRemodelingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Bathroom Remodeling",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Revitalize Real Estate",
      "telephone": "+18139456736",
      "email": "revitalizerealestate@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tampa",
        "addressRegion": "FL",
        "postalCode": "33647",
        "addressCountry": "US"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "127"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Tampa Bay Area",
        "geo": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "28.139152",
            "longitude": "-82.346826"
          },
          "geoRadius": "50"
        }
      }
    },
    "description": "Expert bathroom remodeling services in Tampa Bay. Custom designs, luxury master baths, walk-in showers, premium fixtures, and quality craftsmanship. 20+ years experience. Free estimates.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://revitalizeretampa.com/bathroom-remodeling"
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="bg-background overflow-x-hidden font-sans">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* 1. Hero */}
      <PageHero
        title="Bathroom Remodeling"
        subtitle="Tampa Bay's Luxury Bathroom & Spa Retreat Design Experts"
      />

      {/* 2. Welcome Intro */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
          {/* Left Text */}
          <div className={`w-full lg:w-[50%] flex flex-col items-start transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              Luxury Remodeling
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6 font-serif leading-tight">
              Transform Your Bathroom into a{" "}
              <span className="text-copper italic font-serif font-bold">Personal Sanctuary</span>
            </h2>

            <div className="text-[1.02rem] text-charcoal-soft/85 font-medium space-y-6 leading-relaxed mb-8">
              <p>
                Your bathroom should be more than just functional—it should be a retreat where you can relax, unwind, and escape the stresses of daily life. At Revitalize Real Estate, we specialize in creating stunning, spa-like bathrooms that combine luxury, comfort, and functionality.
              </p>
              <p>
                With 20+ years of experience, our team of senior craftsmen delivers exceptional bathroom remodeling services tailored to your vision and lifestyle. From contemporary master baths to timeless powder rooms, we bring your dream bathroom to life with premium materials, expert craftsmanship, and transparent communication.
              </p>
              <p className="font-bold text-charcoal">
                Proudly serving Tampa, FL 33647 and all cities within a 50-mile radius.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-copper hover:bg-copper-deep text-white font-bold text-sm shadow-lg shadow-copper/25 transition hover:scale-[1.02]"
              >
                Get Your Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:8139456736"
                className="inline-flex items-center gap-2 font-bold text-charcoal hover:text-copper transition text-sm px-6 py-4"
              >
                <Phone className="w-4 h-4 text-copper" /> (813) 945-6736
              </a>
            </div>
          </div>

          {/* Right Image (Collage style) */}
          <div className="relative w-full lg:w-[45%] h-[400px] sm:h-[480px] flex items-center justify-center">
            <div className="relative z-10 w-full max-w-[400px] h-full">
              {/* Main Image */}
              <div className="absolute top-6 left-0 w-[78%] aspect-[4/5] rounded-[2rem] overflow-hidden border-[6px] border-white shadow-xl hover:scale-[1.02] transition duration-300">
                <img
                  src={uploadedBathroom}
                  alt="Modern Luxury Bathroom Remodeling"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlapping Small Details */}
              <div className="absolute top-0 right-0 w-[45%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition duration-300">
                <img
                  src={bathFive}
                  alt="Spa Details"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-2 w-[42%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition duration-300">
                <img
                  src={resOne}
                  alt="General remodeling"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Revitalize Real Estate */}
      <section className="relative py-20 bg-[#faf8f6] border-y border-charcoal/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Award className="h-3.5 w-3.5 text-copper" />
              Why Choose Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-bold text-charcoal mb-4 font-serif">
              Why Choose Revitalize Real Estate for Your Bathroom Remodel?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="group bg-white border border-[#efe5da] p-6 rounded-2xl transition duration-300 hover:border-copper/35 hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="bg-copper/5 group-hover:bg-copper/10 w-11 h-11 rounded-xl flex items-center justify-center text-copper mb-4 border border-copper/10">
                  <b.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h4 className="font-bold text-charcoal text-sm mb-1.5">{b.title}</h4>
                <p className="text-charcoal-soft/80 text-xs leading-relaxed font-medium">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Bathroom Remodeling Services */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Hammer className="h-3.5 w-3.5 text-copper animate-pulse" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-bold text-charcoal mb-4 font-serif">
              Our Bathroom Remodeling Services
            </h2>
            <p className="text-charcoal-soft/80 text-sm md:text-base font-medium">
              We offer a full suite of bathroom remodeling services to transform your space from outdated to outstanding. Every project is led by senior craftsmen and supported by trusted local trades.
            </p>
          </div>

          {/* Detailed Service Cards */}
          <div className="space-y-16">
            {servicesDetail.map((srv, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  {/* Image Block */}
                  <div className="w-full lg:w-[45%] h-[300px] md:h-[360px] rounded-2xl overflow-hidden shadow-md border border-charcoal/5">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover hover:scale-102 transition duration-500"
                    />
                  </div>

                  {/* Info Block */}
                  <div className="w-full lg:w-[50%] flex flex-col items-start space-y-5">
                    <div className="bg-copper/5 border border-copper/10 text-copper w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      <srv.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif">{srv.title}</h3>
                    <p className="text-charcoal-soft/85 text-sm md:text-base leading-relaxed font-medium">
                      {srv.desc}
                    </p>
                    
                    {/* Check list */}
                    <div className="space-y-2 w-full">
                      <p className="text-xs uppercase tracking-wider font-extrabold text-charcoal">What's Included:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-1">
                        {srv.bullets.map((bullet, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs font-semibold text-charcoal-soft">
                            <CheckCircle2 className="w-3.5 h-3.5 text-copper shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Our Process */}
      <section className="relative py-20 bg-gradient-brand bg-background text-white mx-[15px] rounded-2xl border border-white/5 shadow-lg overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] w-[60%] h-[60%] bg-copper/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/35 bg-copper/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              Our Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-bold font-serif mb-4 text-white">
              Our Bathroom Remodeling Process
            </h2>
            <p className="text-white/80 text-sm font-medium">
              We make bathroom remodeling simple and stress-free with our transparent, client-focused process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm space-y-4 hover:border-copper/50 transition duration-300"
              >
                <span className="text-xs uppercase tracking-widest font-black text-copper">
                  {p.step}
                </span>
                <h4 className="text-lg font-bold font-serif text-white">{p.title}</h4>
                <p className="text-white/70 text-xs leading-relaxed font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Recent Projects */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <FolderKanban className="w-3.5 h-3.5 text-copper" />
              Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-bold text-charcoal font-serif mb-4">
              Recent Bathroom Remodeling Projects
            </h2>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto border border-[#efe5da] rounded-2xl mb-10">
            <table className="min-w-full divide-y divide-[#efe5da]">
              <thead className="bg-[#faf8f6]">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Project Type</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Location</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Scope of Work</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#efe5da]/60">
                {recentProjects.map((proj, idx) => (
                  <tr key={idx} className="hover:bg-[#faf8f6]/40 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-charcoal">{proj.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-charcoal-soft">{proj.location}</td>
                    <td className="px-6 py-4 text-sm font-medium text-charcoal-soft">{proj.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-charcoal/10 hover:border-charcoal/30 bg-[#faf8f6] transition font-bold text-xs hover:scale-[1.01]"
            >
              View Our Full Gallery <ArrowUpRight className="w-3.5 h-3.5 text-copper" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-charcoal/10 hover:border-charcoal/30 bg-[#faf8f6] transition font-bold text-xs hover:scale-[1.01]"
            >
              Watch Project Videos <Tv className="w-3.5 h-3.5 text-copper" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Client Reviews Block */}
      <section className="relative py-20 bg-[#faf8f6] border-y border-[#efe5da]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Star className="w-3.5 h-3.5 fill-copper text-copper" />
              Testimonials
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif mb-4">
              What Our Clients Say About Our Bathroom Remodeling
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {clientReviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#efe5da] p-6 rounded-2xl shadow-sm space-y-4 hover:shadow-md transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-copper text-copper" />
                    ))}
                  </div>
                  <p className="text-charcoal-soft/85 text-xs md:text-sm leading-relaxed font-medium italic mt-2">
                    "{rev.text}"
                  </p>
                </div>
                <div className="border-t border-[#efe5da]/60 pt-3 mt-4">
                  <p className="text-xs font-extrabold text-charcoal uppercase tracking-wider">— {rev.author}</p>
                  <p className="text-[10px] text-charcoal-soft/60 font-semibold">{rev.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-copper hover:text-copper-deep hover:underline"
            >
              Read All 127+ Reviews <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Service Area Cities Distance Matrix */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif mb-4">
              Service Area – We Build Across Tampa Bay
            </h3>
            <p className="text-sm text-charcoal-soft/80 font-medium">
              We proudly serve residential clients within a 50-mile radius of Tampa, FL 33647:
            </p>
          </div>

          <div className="max-w-4xl mx-auto border border-[#efe5da] rounded-2xl overflow-hidden shadow-sm bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#efe5da]">
              
              {/* Left Column Cities */}
              <div className="divide-y divide-[#efe5da]/60">
                {citiesLeft.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center px-6 py-3.5 hover:bg-[#faf8f6]/50 transition-colors">
                    <span className="text-xs font-bold text-charcoal">{item.city}</span>
                    <span className="text-xs font-semibold text-charcoal-soft">{item.distance}</span>
                  </div>
                ))}
              </div>

              {/* Right Column Cities */}
              <div className="divide-y divide-[#efe5da]/60">
                {citiesRight.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center px-6 py-3.5 hover:bg-[#faf8f6]/50 transition-colors">
                    <span className="text-xs font-bold text-charcoal">{item.city}</span>
                    <span className="text-xs font-semibold text-charcoal-soft">{item.distance}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
          <p className="text-center text-xs text-charcoal-soft/50 italic mt-6 font-medium">
            Don't see your city listed? Contact us—we may still be able to help!
          </p>
        </div>
      </section>

      {/* 9. FAQs Section Accordion */}
      <section className="relative py-20 bg-[#faf8f6] border-t border-[#efe5da]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif mb-4">
              Frequently Asked Questions About Bathroom Remodeling
            </h3>
          </div>

          <div className="space-y-3">
            {faqsList.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#efe5da] rounded-xl overflow-hidden bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#faf8f6] hover:bg-[#efe5da]/20 transition-colors"
                  >
                    <span className="font-bold text-charcoal text-sm md:text-base">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-copper shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-charcoal/50 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 py-4 text-sm text-charcoal-soft/85 leading-relaxed font-medium bg-white border-t border-[#efe5da]/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Promise & Commitments */}
      <section className="relative py-20 bg-white border-t border-charcoal/5 mx-[15px] rounded-t-2xl">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            <div className="w-full lg:w-[50%] flex flex-col items-start space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-copper">
                <ShieldCheck className="h-3.5 w-3.5 text-copper" />
                Our Commitment
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-charcoal font-serif">
                Our Commitment to You
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-2">
                <div className="flex gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-charcoal">Honest Communication</p>
                    <p className="text-charcoal-soft/75 font-medium mt-0.5">No hidden fees, no surprises</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-charcoal">Quality Craftsmanship</p>
                    <p className="text-charcoal-soft/75 font-medium mt-0.5">Built to outlast trends</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-charcoal">Respect for Your Home</p>
                    <p className="text-charcoal-soft/75 font-medium mt-0.5">Clean, careful, and professional</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-charcoal">Client Satisfaction</p>
                    <p className="text-charcoal-soft/75 font-medium mt-0.5">Your happiness is our success</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[50%] bg-[#faf8f6] border border-[#efe5da] p-8 md:p-10 rounded-[2rem] shadow-sm flex flex-col items-start space-y-6">
              <h3 className="text-xl font-bold text-charcoal font-serif">Ready to Create Your Dream Bathroom?</h3>
              <p className="text-sm text-charcoal-soft/80 font-medium leading-relaxed">
                Don't wait to transform your bathroom into the sanctuary you deserve. Contact Revitalize Real Estate today for a free consultation and estimate.
              </p>

              <div className="w-full space-y-3">
                <a href="tel:8139456736" className="flex items-center gap-3 text-charcoal hover:text-copper transition w-fit">
                  <div className="bg-copper/5 w-9 h-9 rounded-lg flex items-center justify-center text-copper shrink-0 border border-copper/10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-wider text-charcoal-soft/60 font-extrabold leading-none mb-0.5">Call or Text</p>
                    <span className="font-bold text-sm">(813) 945-6736</span>
                  </div>
                </a>
                
                <a href="mailto:revitalizerealestate@gmail.com" className="flex items-center gap-3 text-charcoal hover:text-copper transition w-fit">
                  <div className="bg-copper/5 w-9 h-9 rounded-lg flex items-center justify-center text-copper shrink-0 border border-copper/10">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-wider text-charcoal-soft/60 font-extrabold leading-none mb-0.5">Email</p>
                    <span className="font-bold text-sm">revitalizerealestate@gmail.com</span>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 w-full border-t border-[#efe5da] pt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-copper hover:bg-copper-deep text-white font-bold text-xs shadow-md transition"
                >
                  Get Your Free Estimate Today
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-[#efe5da] hover:border-charcoal/30 bg-white transition font-bold text-xs text-charcoal"
                >
                  View Our Project Gallery
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
