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
  Layers
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
import uploadedFloorCarpentry from "@/assets/residential/uploaded-floor-carpentry.jpg";

export const Route = createFileRoute("/services/specialty-trade")({
  head: () => ({
    title: "Floor, Pavers & Carpentry | Revitalize Real Estate – Tampa Bay's Premium Flooring & Custom Woodwork Experts",
    meta: [
      {
        name: "description",
        content:
          "Expert flooring, pavers, and carpentry services in Tampa Bay. Hardwood, tile, luxury vinyl, custom trim, and outdoor pavers. Quality craftsmanship. Serving within 50 miles. Free estimates.",
      },
    ],
  }),
  component: FloorPaversCarpentryPage,
});

const benefits = [
  {
    icon: Award,
    title: "20+ Years Experience",
    desc: "Veteran craftsmen who master every material",
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
    desc: "Premium materials and proven installation techniques",
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
    title: "Custom Solutions",
    desc: "Tailored to your style, space, and budget",
  },
];

const servicesDetail = [
  {
    title: "Premium Flooring Installation",
    desc: "Your home's flooring is one of its most important design elements. We offer expert installation of a wide range of premium flooring materials to suit your style, budget, and lifestyle.",
    icon: Layers,
    image: uploadedFloorCarpentry,
    subCategories: [
      {
        name: "Hardwood Flooring",
        desc: "Timeless elegance that adds warmth and value to any home. We install solid and engineered hardwood in a variety of species, stains, and finishes.",
        bullets: [
          "Oak, maple, cherry, walnut, and exotic species",
          "Solid and engineered hardwood",
          "Wide-plank and custom patterns",
          "Pre-finished and site-finished options",
          "Professional sanding and sealing",
        ],
      },
      {
        name: "Tile & Stone Flooring",
        desc: "Durable, beautiful, and perfect for high-traffic areas. We specialize in ceramic, porcelain, and natural stone tile installation.",
        bullets: [
          "Ceramic and porcelain tile",
          "Natural stone (marble, travertine, slate, limestone)",
          "Mosaic and decorative tile",
          "Large-format tile",
          "Custom patterns and layouts",
          "Professional grouting and sealing",
        ],
      },
      {
        name: "Luxury Vinyl & Laminate Flooring",
        desc: "Affordable, durable, and stylish. We install premium luxury vinyl plank (LVP) and laminate flooring that mimics the look of hardwood and tile.",
        bullets: [
          "Luxury vinyl plank (LVP) and tile (LVT)",
          "Waterproof and scratch-resistant options",
          "High-end laminate flooring",
          "Professional prep and installation",
        ],
      },
      {
        name: "Carpet & Area Rugs",
        desc: "Comfortable, cozy, and perfect for bedrooms and living areas. We offer professional carpet installation and custom area rug services.",
        bullets: [
          "A wide range of carpet fibers and styles",
          "Eco-friendly and stain-resistant options",
          "Custom area rugs",
          "Professional installation with premium padding",
        ],
      },
    ],
  },
  {
    title: "Paver Installation & Outdoor Surfaces",
    desc: "Transform your outdoor living spaces with beautiful, durable pavers. We design and install patios, walkways, driveways, and pool decks that enhance your home's curb appeal and functionality.",
    icon: MapPin,
    image: resOne, // fallback
    subCategories: [
      {
        name: "Patios & Outdoor Living Spaces",
        desc: "Create the perfect outdoor retreat with custom paver patios. We design and build beautiful spaces for entertaining, dining, and relaxation.",
        bullets: [
          "Concrete, brick, and clay pavers",
          "Natural stone pavers (travertine, flagstone)",
          "Custom patterns and designs",
          "Fire pit and outdoor kitchen integration",
        ],
      },
      {
        name: "Walkways & Pathways",
        desc: "Guide visitors through your landscape with elegant walkways and pathways. We design durable, attractive paths that complement your home's architecture.",
        bullets: [
          "Garden and front walkways",
          "Stepping stones and flagstone paths",
          "Paver and brick pathways",
          "Custom patterns and borders",
        ],
      },
      {
        name: "Driveways & Pool Decks",
        desc: "Make a lasting impression with custom paver driveways and pool decks. We create durable, slip-resistant surfaces that look stunning and last for years.",
        bullets: [
          "Interlocking concrete pavers",
          "Pool deck pavers (cool-deck, travertine)",
          "Driveway pavers and permeable pavers",
        ],
      },
    ],
  },
  {
    title: "Custom Carpentry & Woodwork",
    desc: "Add character, functionality, and value to your home with custom carpentry and woodwork. Our skilled craftsmen create beautiful, custom-built features that elevate your space.",
    icon: Hammer,
    image: cabinetImg,
    subCategories: [
      {
        name: "Custom Trim & Molding",
        desc: "The details make the difference. We install premium crown molding, baseboards, wainscoting, and custom trim that adds elegance and sophistication to any room.",
        bullets: [
          "Crown molding and ceiling details",
          "Baseboards, casing, and chair rails",
          "Wainscoting and beadboard",
          "Custom wall paneling",
        ],
      },
      {
        name: "Custom Built-Ins & Shelving",
        desc: "Maximize space and add character with custom built-ins. We design and build bookcases, entertainment centers, home offices, and storage solutions.",
        bullets: [
          "Custom bookcases and shelving",
          "Entertainment centers and media walls",
          "Home office built-ins and custom closets",
          "Mudroom and entryway storage",
        ],
      },
      {
        name: "Window & Door Installation",
        desc: "Enhance your home's energy efficiency and curb appeal with professional window and door installation.",
        bullets: [
          "Window replacement and installation",
          "Exterior door, French doors, and sliding doors",
          "Custom interior doors and storm doors",
        ],
      },
      {
        name: "Deck & Porch Construction",
        desc: "Extend your living space outdoors with custom decks and porches. We design and build beautiful, durable structures.",
        bullets: [
          "Wood and composite decking",
          "Covered porches and screened enclosures",
          "Custom railings and stairs",
        ],
      },
    ],
  },
];

const processSteps = [
  {
    step: "Step 01",
    title: "Request a Free Estimate",
    desc: "Tell us about your flooring, paver, or carpentry project—no obligation, no pressure. We provide clear, transparent pricing.",
  },
  {
    step: "Step 02",
    title: "Consultation & Planning",
    desc: "We visit your home, listen to your vision, and discuss the details. Our team provides expert recommendations and material samples.",
  },
  {
    step: "Step 03",
    title: "Design & Approval",
    desc: "We finalize the scope of work, material selections, and a transparent timeline for your approval. You're in control every step of the way.",
  },
  {
    step: "Step 04",
    title: "Installation & Delivery",
    desc: "Our craftsmen get to work, respecting your home and finishing on schedule. We keep you informed daily and ensure a flawless final walkthrough.",
  },
];

const recentProjects = [
  { type: "Hardwood Floor Installation", location: "Tampa, FL 33647", scope: "2,000 sq ft of engineered hardwood, custom stain" },
  { type: "Luxury Vinyl Plank Flooring", location: "Wesley Chapel, FL", scope: "Entire first floor, waterproof LVP" },
  { type: "Custom Crown Molding", location: "Clearwater, FL", scope: "Whole-home crown molding and custom trim" },
  { type: "Paver Patio & Fire Pit", location: "St. Petersburg, FL", scope: "600 sq ft patio, fire pit, outdoor lighting" },
  { type: "Custom Built-In Bookcases", location: "Brandon, FL", scope: "Floor-to-ceiling bookcases with custom shelving" },
  { type: "Travertine Pool Deck", location: "Land O' Lakes, FL", scope: "1,000 sq ft pool deck with drainage system" },
  { type: "Custom Wainscoting", location: "Riverview, FL", scope: "Dining room and hallway wainscoting" },
  { type: "Paver Walkway & Driveway", location: "Apollo Beach, FL", scope: "1,500 sq ft of interlocking pavers" },
];

const clientReviews = [
  {
    author: "David R.",
    location: "Tampa, FL",
    text: "Revitalize Real Estate rebuilt my Tampa kitchen and handled drywall + flooring seamlessly. Their team showed up on time, stayed on budget, and even coordinated plumbing. The new hardwood floors are stunning!",
  },
  {
    author: "Marcus T.",
    location: "St. Petersburg, FL",
    text: "We hired Revitalize Real Estate for a full bathroom remodel and new flooring throughout our home. The craftsmanship is on a completely different level. Premium finish from start to finish.",
  },
  {
    author: "Amanda C.",
    location: "Riverview, FL",
    text: "The custom crown molding and built-in bookcases they installed in our home are absolutely beautiful. The attention to detail is incredible. Our home feels like a custom showplace now.",
  },
  {
    author: "Jennifer K.",
    location: "Lutz, FL",
    text: "We had an outdated patio and walkway. Revitalize Real Estate designed and installed a beautiful paver patio with a fire pit. It completely transformed our backyard. We spend every evening out there now!",
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
    q: "What type of flooring is best for my home?",
    a: "The best flooring depends on your lifestyle, budget, and room usage. Hardwood is timeless and elegant, tile is durable and water-resistant, and luxury vinyl is affordable and pet-friendly. Our team can help you choose the perfect option."
  },
  {
    q: "How much does flooring installation cost?",
    a: "Costs vary based on materials, square footage, and preparation work. We provide transparent, detailed estimates during our free consultation."
  },
  {
    q: "How long does flooring installation take?",
    a: "Most flooring installations take 1-5 days, depending on the size of the area and the type of flooring. We provide a clear timeline during planning."
  },
  {
    q: "Do you offer custom carpentry services?",
    a: "Absolutely! We specialize in custom trim, crown molding, wainscoting, built-ins, shelving, and custom woodwork of all kinds."
  },
  {
    q: "What types of pavers do you install?",
    a: "We install concrete pavers, brick pavers, natural stone pavers (travertine, flagstone), and permeable pavers for patios, walkways, driveways, and pool decks."
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes! Revitalize Real Estate is fully licensed, bonded, and insured for your peace of mind."
  },
  {
    q: "Do you offer financing options?",
    a: "Yes, we offer flexible financing options to help make your project more affordable. Contact us for details."
  }
];

function FloorPaversCarpentryPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Flooring, Pavers & Carpentry",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Revitalize Real Estate",
      "telephone": "+18133230291",
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
    "description": "Expert flooring, pavers, and carpentry services in Tampa Bay. Hardwood, tile, luxury vinyl, custom trim, and outdoor pavers. 20+ years experience. Free estimates.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://revitalizeretampa.com/floor-pavers-carpentry"
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
        title="Floor, Pavers & Carpentry"
        subtitle="Tampa Bay's Premium Flooring & Custom Woodwork Experts"
      />

      {/* 2. Welcome Intro */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
          {/* Left Text */}
          <div className={`w-full lg:w-[50%] flex flex-col items-start transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              Specialty Crafts
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6 font-serif leading-tight">
              Elevate Your Home with{" "}
              <span className="text-copper italic font-serif font-bold">Premium Flooring, Pavers & Carpentry</span>
            </h2>

            <div className="text-[1.02rem] text-charcoal-soft/85 font-medium space-y-6 leading-relaxed mb-8">
              <p>
                The floors, outdoor surfaces, and custom woodwork in your home set the foundation for its entire aesthetic and functionality. At Revitalize Real Estate, we specialize in transforming homes with expert flooring installation, beautiful paver designs, and custom carpentry that adds character and value.
              </p>
              <p>
                With 20+ years of experience, our team of skilled craftsmen delivers exceptional results using premium materials and proven techniques. Whether you're updating your interior floors, creating a stunning outdoor patio, or adding custom trim and built-ins, we bring your vision to life with precision and care.
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
                href="tel:8133230291"
                className="inline-flex items-center gap-2 font-bold text-charcoal hover:text-copper transition text-sm px-6 py-4"
              >
                <Phone className="w-4 h-4 text-copper" /> (813) 323-0291
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-[45%] h-[400px] sm:h-[480px] flex items-center justify-center">
            <div className="relative z-10 w-full max-w-[400px] h-full">
              <div className="absolute top-6 left-0 w-[78%] aspect-[4/5] rounded-[2rem] overflow-hidden border-[6px] border-white shadow-xl hover:scale-[1.02] transition duration-300">
                <img
                  src={uploadedFloorCarpentry}
                  alt="Premium Wood Flooring & Carpentry"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 w-[45%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition duration-300">
                <img
                  src={resOne}
                  alt="Outdoor pavers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-2 w-[42%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition duration-300">
                <img
                  src={cabinetImg}
                  alt="Custom cabinetry design"
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
              Why Choose Revitalize Real Estate for Flooring, Pavers & Carpentry?
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

      {/* 4. Our Services Breakdown */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Hammer className="h-3.5 w-3.5 text-copper animate-pulse" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-bold text-charcoal mb-4 font-serif">
              Our Flooring, Pavers & Carpentry Services
            </h2>
            <p className="text-charcoal-soft/80 text-sm md:text-base font-medium">
              We offer a full suite of flooring, paver, and carpentry services to transform your home inside and out. Every project is led by senior craftsmen and supported by trusted local trades.
            </p>
          </div>

          {/* Detailed Service Cards */}
          <div className="space-y-24">
            {servicesDetail.map((srv, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-between ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  {/* Image Block */}
                  <div className="w-full lg:w-[42%] h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-md border border-charcoal/5 lg:sticky lg:top-28">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info Block */}
                  <div className="w-full lg:w-[54%] space-y-6">
                    <div className="bg-copper/5 border border-copper/10 text-copper w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      <srv.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3.5xl font-bold text-charcoal font-serif">{srv.title}</h3>
                    <p className="text-charcoal-soft/85 text-sm md:text-base leading-relaxed font-medium pb-4 border-b border-[#efe5da]/60">
                      {srv.desc}
                    </p>

                    {/* Sub Categories Checklist */}
                    <div className="space-y-6 pt-2">
                      {srv.subCategories.map((sub, index) => (
                        <div key={index} className="space-y-2">
                          <h4 className="font-bold text-charcoal text-base">{sub.name}</h4>
                          <p className="text-xs text-charcoal-soft/80 leading-relaxed font-medium">{sub.desc}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pt-1">
                            {sub.bullets.map((bullet, bIdx) => (
                              <div key={bIdx} className="flex items-center gap-2 text-xs font-semibold text-charcoal-soft">
                                <CheckCircle2 className="w-3.5 h-3.5 text-copper shrink-0" />
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <section className="relative py-20 bg-gradient-brand bg-background text-white mx-[15px] rounded-2xl border border-white/5 shadow-lg overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] w-[60%] h-[60%] bg-copper/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/35 bg-copper/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              Our Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-bold font-serif mb-4 text-white">
              Our Floor, Pavers & Carpentry Process
            </h2>
            <p className="text-white/80 text-sm font-medium">
              We make every project simple and stress-free with our transparent, client-focused process.
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
              Recent Floor, Pavers & Carpentry Projects
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
              What Our Clients Say About Our Flooring, Pavers & Carpentry
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
              Frequently Asked Questions About Flooring, Pavers & Carpentry
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
              <h3 className="text-xl font-bold text-charcoal font-serif">Ready to Transform Your Floors, Pavers, or Carpentry?</h3>
              <p className="text-sm text-charcoal-soft/80 font-medium leading-relaxed">
                Don't wait to elevate your home's beauty and value. Contact Revitalize Real Estate today for a free consultation and estimate.
              </p>

              <div className="w-full space-y-3">
                <a href="tel:8133230291" className="flex items-center gap-3 text-charcoal hover:text-copper transition w-fit">
                  <div className="bg-copper/5 w-9 h-9 rounded-lg flex items-center justify-center text-copper shrink-0 border border-copper/10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-wider text-charcoal-soft/60 font-extrabold leading-none mb-0.5">Call or Text</p>
                    <span className="font-bold text-sm">(813) 323-0291</span>
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
