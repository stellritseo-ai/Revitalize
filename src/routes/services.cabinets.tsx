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
  Layers,
  Sparkle,
  Layout
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

export const Route = createFileRoute("/services/cabinets")({
  head: () => ({
    title: "Premium Cabinet Sales & Custom Design | Revitalize Real Estate – Tampa Bay's Custom Cabinetry Experts",
    meta: [
      {
        name: "description",
        content:
          "Premium custom cabinets and design services in Tampa Bay. Bespoke kitchen cabinetry, bathroom vanities, and custom storage solutions. Serving within 50 miles. Free design consultation.",
      },
    ],
  }),
  component: PremiumCabinetSalesPage,
});

const benefits = [
  {
    icon: Award,
    title: "20+ Years Experience",
    desc: "Veteran craftsmen who master every detail of custom cabinetry",
  },
  {
    icon: Sparkles,
    title: "Custom Design Expertise",
    desc: "Bespoke solutions tailored to your space, style, and needs",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent Process",
    desc: "Clear timelines, open communication, no hidden fees",
  },
  {
    icon: Hammer,
    title: "Premium Materials",
    desc: "Solid wood, plywood, and high-quality finishes",
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
    title: "Free Design Consultation",
    desc: "No-obligation planning and visualization",
  },
  {
    icon: ShieldCheck,
    title: "Full-Service",
    desc: "Design, fabrication, and professional installation",
  },
];

const servicesDetail = [
  {
    title: "Custom Kitchen Cabinets",
    desc: "The heart of your home deserves cabinetry that is as beautiful as it is functional. We design and build custom kitchen cabinets that optimize storage, enhance workflow, and reflect your personal style.",
    icon: Home,
    image: cabinetImg,
    bullets: [
      "Custom Layout & Design: Tailored to your kitchen's dimensions and workflow",
      "Premium Materials: Solid wood and plywood with premium finishes",
      "Door Styles: Shaker, flat panel, raised panel, slab, and custom designs",
      "Finishes: Painted, stained, glazed, and specialty finishes in any color",
      "Storage Solutions: Pull-outs, lazy Susans, drawer organizers, and inserts",
      "Hardware Integration: Soft-close hinges, full-extension drawers",
    ],
  },
  {
    title: "Custom Bathroom Vanities",
    desc: "Transform your bathroom into a personal retreat with custom vanities that combine elegance and functionality. We create vanities that maximize storage while adding a touch of luxury.",
    icon: Sparkles,
    image: bathFive,
    bullets: [
      "Custom Sizing: Any height, width, or depth to fit your space perfectly",
      "Premium Materials: Solid wood construction and moisture-resistant finishes",
      "Countertop Integration: Seamless integration with granite, quartz, or marble",
      "Sink Options: Undermount, vessel, or integrated sinks",
      "Storage: Drawers, cabinets, and custom organizers",
      "Fixture Integration: Custom holes for faucets and fixtures",
    ],
  },
  {
    title: "Custom Built-Ins & Storage Solutions",
    desc: "Add character and functionality to any room with custom built-ins. Our team designs and builds bookcases, entertainment centers, home offices, and storage solutions that fit your space perfectly.",
    icon: Layout,
    image: realEstateImg, // fallback
    bullets: [
      "Custom Bookcases & Shelving: Floor-to-ceiling designs for any room",
      "Entertainment Centers: Custom media walls with cable management",
      "Home Office Built-Ins: Desks, shelving, and filing solutions",
      "Custom Closets: Walk-in closet systems with maximum organization",
      "Mudroom Storage: Benches, cubbies, and coat racks",
    ],
  },
  {
    title: "Custom Bars & Entertainment Spaces",
    desc: "Create the ultimate entertaining space with custom bars and entertainment centers. We design and build beautiful, functional spaces for hosting friends and family.",
    icon: Building,
    image: kitSix, // fallback
    bullets: [
      "Custom Home Bars: Cabinetry, countertops, and bar backs",
      "Wine Racks & Storage: Custom wine storage solutions",
      "Wet Bars: Sinks, refrigeration, and storage integration",
      "Display Shelving: Custom media walls with display and storage",
    ],
  },
  {
    title: "Custom Closets & Organization",
    desc: "Transform your closets into organized, functional spaces with custom closet systems. We design and build solutions that maximize every inch of space.",
    icon: Layers,
    image: resOne, // fallback
    bullets: [
      "Walk-In Closet Systems: Custom shelving, hanging, and drawer solutions",
      "Custom Drawers & Organizers: Built-in organization for clothes and accessories",
      "Shoe Storage: Custom shoe racks and display solutions",
      "Accessory Storage: Tie racks, jewelry trays, and belt holders",
    ],
  },
];

const processSteps = [
  {
    step: "Step 01",
    title: "Free Design Consultation",
    desc: "We meet with you to discuss your vision, style preferences, and functional needs. We'll gather information, rough measurements, and inspiration.",
  },
  {
    step: "Step 02",
    title: "Design & 3D Visualization",
    desc: "Our design team creates detailed plans and 3D renderings. You'll see exactly how your new cabinets will look before fabrication.",
  },
  {
    step: "Step 03",
    title: "Material Selection",
    desc: "We help you select from our premium materials, finishes, hardware, and countertop options. Every detail is chosen to match your style.",
  },
  {
    step: "Step 04",
    title: "Fabrication & Installation",
    desc: "Our skilled craftsmen build your custom cabinetry to exact specifications. We then professionally install your cabinets with meticulous attention.",
  },
];

const recentProjects = [
  { type: "Custom Kitchen Cabinets", location: "Tampa, FL 33647", scope: "Full custom kitchen with shaker doors, soft-close hardware, quartz countertops" },
  { type: "Custom Bathroom Vanity", location: "Wesley Chapel, FL", scope: "Double vanity with custom storage, marble countertop, premium fixtures" },
  { type: "Custom Entertainment Center", location: "Clearwater, FL", scope: "Floor-to-ceiling media wall with hidden cable management" },
  { type: "Custom Walk-In Closet", location: "St. Petersburg, FL", scope: "Complete closet system with custom shelving and organization" },
  { type: "Custom Home Bar", location: "Brandon, FL", scope: "Wet bar with custom cabinetry, wine rack, and granite countertop" },
  { type: "Custom Built-In Bookcases", location: "Land O' Lakes, FL", scope: "Floor-to-ceiling bookcases with custom shelving" },
];

const cabinetComparison = [
  { type: "Stock Cabinets", desc: "Pre-manufactured in standard sizes", adv: "Lower cost, immediately available", dis: "Limited sizes and styles" },
  { type: "Semi-Custom Cabinets", desc: "Pre-manufactured with some customization", adv: "More options, moderate cost", dis: "Still limited by standard sizes" },
  { type: "Custom Cabinets", desc: "Built to your exact specifications", adv: "Perfect fit, unlimited options, premium quality", dis: "Higher cost, longer lead time" },
];

const clientReviews = [
  {
    author: "Tom & Diane S.",
    location: "Plant City, FL",
    text: "We chose Revitalize Real Estate for premium cabinet sales and custom design, and the results are phenomenal. The custom cabinetry is beautiful, functional, and perfectly fits our space. The entire process was seamless, from the design consultation to the final installation. Highly recommend their cabinet services!",
  },
  {
    author: "David R.",
    location: "Tampa, FL",
    text: "Revitalize Real Estate completely rebuilt my outdated Tampa kitchen, and the results are stunning. They handled everything—drywall, flooring, custom cabinetry, and even coordinated plumbing seamlessly. Their team showed up on time every day, stayed on budget, and kept the worksite surprisingly clean.",
  },
  {
    author: "Michael & Laura D.",
    location: "Odessa, FL",
    text: "We had a very specific vision for our kitchen remodel, and Revitalize Real Estate brought it to life flawlessly. They listened to everything we wanted, offered expert suggestions, and delivered a result that exceeded our dreams. The custom cabinetry and premium counters are showstoppers. Thank you!",
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
    q: "What is the difference between stock, semi-custom, and custom cabinets?",
    a: "Stock cabinets are mass-produced in standard sizes (cheaper but limited). Semi-custom offer some adjustments. Custom cabinets are built from scratch to your exact layout, size, and material specifications, offering perfect fits and premium quality."
  },
  {
    q: "How much do custom cabinets cost?",
    a: "Full custom cabinets typically range from $500 to $1,800 per linear foot, depending on materials, finishes, hardware, and complexity. We provide transparent, detailed estimates during your design consultation."
  },
  {
    q: "How long do custom cabinets take to make?",
    a: "The timeline varies based on project size and complexity. You can generally expect 4-6 months from design concept to final installation. We provide a clear timeline during the planning phase."
  },
  {
    q: "What materials do you use for custom cabinets?",
    a: "We use premium materials including solid wood, plywood, and engineered wood with premium finishes. We do not use particle board or pressboard materials in the fabrication of our cabinetry."
  },
  {
    q: "Can you accommodate older homes with odd spaces?",
    a: "Absolutely. Unlike stock cabinets, we build to any size, height, width, or depth. We specialize in working with older homes and unusual spaces, ensuring your cabinets fit perfectly and maintain your home's character."
  },
  {
    q: "Do you offer design services?",
    a: "Yes! We provide comprehensive design services including 3D renderings and visualization. Our initial consultations are free, and we work with you every step of the way."
  },
  {
    q: "Do you install the cabinets?",
    a: "Yes. We know that the quality of the installation makes or breaks the overall project. Our experienced installers ensure your custom cabinets are perfectly installed for lasting beauty and function."
  }
];

function PremiumCabinetSalesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom Cabinetry Design and Sales",
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
    "description": "Premium custom cabinets and design services in Tampa Bay. Bespoke kitchen cabinetry, bathroom vanities, and custom storage solutions. Free design consultation.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "500",
        "priceCurrency": "USD",
        "unitCode": "FTK",
        "description": "Custom cabinets typically range from $500-$1,800 per linear foot"
      },
      "availability": "https://schema.org/InStock",
      "url": "https://revitalizeretampa.com/premium-cabinet-sales"
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
        title="Premium Cabinet Sales & Custom Design"
        subtitle="Tampa Bay's Custom Cabinetry & Design Experts"
      />

      {/* 2. Welcome Intro */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
          {/* Left Text */}
          <div className={`w-full lg:w-[50%] flex flex-col items-start transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              Bespoke Cabinetry
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6 font-serif leading-tight">
              Custom Cabinetry That{" "}
              <span className="text-copper italic font-serif font-bold">Defines Your Home</span>
            </h2>

            <div className="text-[1.02rem] text-charcoal-soft/85 font-medium space-y-6 leading-relaxed mb-8">
              <p>
                Your cabinets are more than just storage—they are the defining element of your kitchen, bathroom, and living spaces. At Revitalize Real Estate, we specialize in premium cabinet sales and custom design services that bring your vision to life with unparalleled craftsmanship and attention to detail.
              </p>
              <p>
                With 20+ years of experience in home improvement and real estate, our team understands that custom cabinetry is an investment in your home's beauty, functionality, and long-term value. From luxurious kitchen cabinets to bespoke bathroom vanities and custom storage solutions, we deliver exceptional quality that stands the test of time.
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
                Schedule Your Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:8139456736"
                className="inline-flex items-center gap-2 font-bold text-charcoal hover:text-copper transition text-sm px-6 py-4"
              >
                <Phone className="w-4 h-4 text-copper" /> (813) 945-6736
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-[45%] h-[400px] sm:h-[480px] flex items-center justify-center">
            <div className="relative z-10 w-full max-w-[400px] h-full">
              <div className="absolute top-6 left-0 w-[78%] aspect-[4/5] rounded-[2rem] overflow-hidden border-[6px] border-white shadow-xl hover:scale-[1.02] transition duration-300">
                <img
                  src={cabinetImg}
                  alt="Premium Custom Cabinet Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 w-[45%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition duration-300">
                <img
                  src={kitSix}
                  alt="Kitchen layout cabinets"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-2 w-[42%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition duration-300">
                <img
                  src={bathFive}
                  alt="Custom bathroom vanity cabinetry"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Premium Custom Cabinetry Matters */}
      <section className="relative py-20 bg-[#faf8f6] border-y border-[#efe5da]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif mb-4">
              Why Premium Custom Cabinetry Matters
            </h3>
            <p className="text-sm text-charcoal-soft/80 font-medium leading-relaxed mb-6">
              Investing in premium custom cabinets transforms your home in ways that stock or semi-custom options simply cannot match. Real estate professionals consistently identify kitchens as the most influential area in property valuation, and custom cabinets significantly enhance:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white border border-[#efe5da] p-5 rounded-xl shadow-sm text-center">
              <Sparkles className="w-6 h-6 text-copper mx-auto mb-3" />
              <h5 className="font-bold text-charcoal text-xs mb-1">Visual Aesthetics</h5>
              <p className="text-[10px] text-charcoal-soft/75 font-medium leading-relaxed">Beautiful, cohesive design that reflects your personal style</p>
            </div>
            <div className="bg-white border border-[#efe5da] p-5 rounded-xl shadow-sm text-center">
              <Layout className="w-6 h-6 text-copper mx-auto mb-3" />
              <h5 className="font-bold text-charcoal text-xs mb-1">Functional Storage</h5>
              <p className="text-[10px] text-charcoal-soft/75 font-medium leading-relaxed">Maximized space utilization with intelligent organization</p>
            </div>
            <div className="bg-white border border-[#efe5da] p-5 rounded-xl shadow-sm text-center">
              <Award className="w-6 h-6 text-copper mx-auto mb-3" />
              <h5 className="font-bold text-charcoal text-xs mb-1">Perceived Luxury</h5>
              <p className="text-[10px] text-charcoal-soft/75 font-medium leading-relaxed">Premium materials and finishes create an elevated feel</p>
            </div>
            <div className="bg-white border border-[#efe5da] p-5 rounded-xl shadow-sm text-center">
              <Hammer className="w-6 h-6 text-copper mx-auto mb-3" />
              <h5 className="font-bold text-charcoal text-xs mb-1">Long-Term Durability</h5>
              <p className="text-[10px] text-charcoal-soft/75 font-medium leading-relaxed">Built to last with superior materials and craftsmanship</p>
            </div>
          </div>
          <p className="text-center text-xs text-charcoal-soft/60 italic font-medium max-w-2xl mx-auto">
            High-quality custom cabinets can significantly improve resale appeal and shorten property listing cycles. Unlike mass-produced stock cabinets, custom solutions are built to your exact specifications, ensuring every inch of space is optimized.
          </p>
        </div>
      </section>

      {/* 3. Why Choose Revitalize Real Estate */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Award className="h-3.5 w-3.5 text-copper" />
              Why Choose Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-bold text-charcoal mb-4 font-serif">
              Why Choose Revitalize Real Estate for Your Custom Cabinetry?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="group bg-[#faf8f6] border border-[#efe5da] p-6 rounded-2xl transition duration-300 hover:border-copper/35 hover:-translate-y-0.5 hover:shadow-sm"
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

      {/* 4. Our Custom Cabinet Services */}
      <section className="relative py-24 bg-[#faf8f6]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Hammer className="h-3.5 w-3.5 text-copper animate-pulse" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-bold text-charcoal mb-4 font-serif">
              Our Custom Cabinet Services
            </h2>
            <p className="text-charcoal-soft/80 text-sm md:text-base font-medium">
              We offer a comprehensive suite of custom cabinet design and sales services for every room in your home. Every project is handcrafted to your specifications using premium materials and expert craftsmanship.
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
                    <div className="space-y-2 w-full border-t border-[#efe5da]/60 pt-3">
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

      {/* 5. Custom Cabinet Comparison matrix */}
      <section className="relative py-20 bg-white border-b border-[#efe5da]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif mb-2">
              Stock vs Semi-Custom vs Custom Cabinets
            </h3>
          </div>

          <div className="border border-[#efe5da] rounded-2xl overflow-hidden shadow-sm">
            <table className="min-w-full divide-y divide-[#efe5da]">
              <thead className="bg-[#faf8f6]">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Type</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Description</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Advantages</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Disadvantages</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#efe5da]/60">
                {cabinetComparison.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#faf8f6]/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-charcoal">{item.type}</td>
                    <td className="px-6 py-4 text-xs font-medium text-charcoal-soft">{item.desc}</td>
                    <td className="px-6 py-4 text-xs font-semibold text-copper">{item.adv}</td>
                    <td className="px-6 py-4 text-xs font-medium text-charcoal-soft/60">{item.dis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Our Process */}
      <section className="relative py-20 bg-gradient-brand bg-background text-white mx-[15px] rounded-2xl border border-white/5 shadow-lg overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] w-[60%] h-[60%] bg-copper/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/35 bg-copper/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              Our Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-bold font-serif mb-4 text-white">
              Our Custom Cabinet Process
            </h2>
            <p className="text-white/80 text-sm font-medium">
              We follow a systematic, client-focused process to ensure your custom cabinetry project is stress-free and exceeds your expectations.
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

      {/* 7. Recent Projects */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <FolderKanban className="w-3.5 h-3.5 text-copper" />
              Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-bold text-charcoal font-serif mb-4">
              Recent Custom Cabinet Projects
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
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-charcoal/10 hover:border-charcoal/30 bg-[#faf8f6] transition font-bold text-xs hover:scale-[1.01]"
            >
              Schedule Your Free Consultation <Phone className="w-3.5 h-3.5 text-copper" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Client Reviews Block */}
      <section className="relative py-20 bg-[#faf8f6] border-y border-[#efe5da]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Star className="w-3.5 h-3.5 fill-copper text-copper" />
              Testimonials
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif mb-4">
              What Our Clients Say About Our Custom Cabinetry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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

      {/* 9. Service Area Cities Distance Matrix */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif mb-4">
              Service Area – We Serve Across Tampa Bay
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

      {/* 10. FAQs Section Accordion */}
      <section className="relative py-20 bg-[#faf8f6] border-t border-[#efe5da]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif mb-4">
              Frequently Asked Questions About Custom Cabinetry
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

      {/* 11. Promise & Commitments */}
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
                    <p className="text-charcoal-soft/75 font-medium mt-0.5">Built to last, built to impress</p>
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
              <h3 className="text-xl font-bold text-charcoal font-serif">Ready to Design Your Dream Cabinetry?</h3>
              <p className="text-sm text-charcoal-soft/80 font-medium leading-relaxed">
                Don't settle for stock cabinets that don't fit your space or style. Contact Revitalize Real Estate today for a free design consultation and discover the difference of premium custom cabinetry.
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
                  Schedule Your Free Design Consultation Today
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
