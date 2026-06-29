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
  Truck
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

export const Route = createFileRoute("/services/cleaning")({
  head: () => ({
    title: "Professional Cleaning Services | Revitalize Real Estate – Tampa Bay's Premier Home Cleaning Experts",
    meta: [
      {
        name: "description",
        content:
          "Expert professional cleaning services in Tampa Bay. Deep cleaning, move-in/move-out, post-construction, and real estate prep cleaning. Serving within 50 miles. Free estimates.",
      },
    ],
  }),
  component: ProfessionalCleaningServicesPage,
});

const benefits = [
  {
    icon: Award,
    title: "20+ Years Experience",
    desc: "Veteran team with deep understanding of home care",
  },
  {
    icon: Home,
    title: "Residential Specialists",
    desc: "We focus only on homes—no commercial shortcuts",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent Process",
    desc: "Clear timelines, open communication, no hidden fees",
  },
  {
    icon: Sparkle,
    title: "Detail-Oriented",
    desc: "We clean every corner with meticulous attention",
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
    icon: ShieldCheck,
    title: "Real Estate Expertise",
    desc: "We know what buyers and sellers need",
  },
];

const servicesDetail = [
  {
    title: "Deep Cleaning Services",
    desc: "Our deep cleaning service goes far beyond standard surface cleaning. We tackle the dirt, grime, and buildup that accumulates over time, leaving your home truly fresh and sanitary.",
    icon: Sparkle,
    image: cleaningImg,
    idealFor: "Regular maintenance, seasonal cleaning, or preparing for special occasions.",
    bullets: [
      "Kitchen: Inside/outside cabinets, appliances (oven, fridge, dishwasher), counters, backsplash, sinks",
      "Bathrooms: Showers, tubs, toilets, vanities, mirrors, fixtures, and tile grout",
      "Living Areas: Baseboards, window sills, ceiling fans, light fixtures, and walls",
      "Bedrooms: Closets, drawers, under furniture, and window treatments",
      "Floors: Vacuuming, mopping, and detailed floor care for all surfaces",
      "High-Touch Areas: Doorknobs, light switches, and handrails sanitized",
    ],
  },
  {
    title: "Move-In / Move-Out Cleaning",
    desc: "Moving is stressful enough—let us handle the cleaning. Whether you're moving into a new home or preparing your current one for the next owners, our move-in/move-out cleaning ensures the property is spotless.",
    icon: Truck,
    image: bathFive,
    idealFor: "Home sellers, home buyers, landlords, and property managers.",
    bullets: [
      "Full Deep Clean: Complete cleaning of all rooms, including hard-to-reach areas",
      "Kitchen & Bathrooms: Intensive cleaning of appliances, cabinets, fixtures, and tile",
      "Floor Care: Detailed vacuuming, mopping, and floor treatment",
      "Window Cleaning: Interior windows, tracks, and sills",
      "Garage & Storage Areas: Sweeping and organizing",
      "Final Walkthrough Ready: Property is clean and ready for inspection",
    ],
  },
  {
    title: "Post-Construction Cleaning",
    desc: "Renovation projects leave behind dust, debris, and construction residue. Our post-construction cleaning ensures your newly remodeled home is ready for move-in, safe, and beautiful.",
    icon: Hammer,
    image: resOne,
    idealFor: "Homeowners after renovations, contractors, real estate investors, and property flippers.",
    bullets: [
      "Dust Removal: Complete dust removal from all surfaces, including walls and ceilings",
      "Debris Removal: Removal of construction debris, packaging, and waste materials",
      "Surface Cleaning: Cleaning of all fixtures, countertops, cabinets, and appliances",
      "Floor Care: Specialized cleaning to remove construction residue from floors",
      "Window & Glass Cleaning: Cleaning of windows, glass, and mirrors",
      "HVAC Filter Cleaning: Changing or cleaning filters to improve air quality",
    ],
  },
  {
    title: "Real Estate Prep Cleaning",
    desc: "First impressions matter—especially when selling your home. Our real estate prep cleaning is designed to make your home shine for showings, open houses, and photography.",
    icon: Building,
    image: realEstateImg,
    idealFor: "Home sellers, real estate agents, and investors.",
    bullets: [
      "Staging Cleaning: Detailed cleaning to prepare your home for professional staging",
      "Photography Prep: Clean every room to ensure professional photos look their best",
      "Show Ready: Fresh, inviting, and sparkling clean for potential buyers",
      "Curb Appeal: Exterior cleaning including walkways, porches, and entryways",
      "Odor Elimination: Removing pet odors, cooking smells, and other unwanted scents",
      "Final Touches: Attention to every detail that helps buyers fall in love",
    ],
  },
  {
    title: "Regular & Maintenance Cleaning",
    desc: "Keep your home consistently clean and healthy with our regular maintenance cleaning services. We work with you to create a customized schedule that fits your lifestyle.",
    icon: Home,
    image: cabinetImg,
    idealFor: "Busy families, professionals, seniors, and anyone wanting a consistently clean home.",
    bullets: [
      "Weekly, Bi-Weekly, or Monthly Cleaning schedules",
      "Custom scheduling options to meet your needs",
      "Dusting and wiping surfaces, vacuuming and mopping floors",
      "Kitchen and bathroom cleaning, tidying and organizing",
      "Trash removal and sanitization",
    ],
  },
];

const processSteps = [
  {
    step: "Step 01",
    title: "Request a Free Estimate",
    desc: "Tell us about your cleaning needs—no obligation, no pressure. We provide clear, transparent pricing.",
  },
  {
    step: "Step 02",
    title: "Customized Plan",
    desc: "We work with you to develop a customized cleaning plan tailored to your specific requirements and schedule.",
  },
  {
    step: "Step 03",
    title: "Professional Execution",
    desc: "Our trained team arrives on time, equipped with professional-grade tools and eco-friendly cleaning products. We clean with meticulous attention to detail.",
  },
  {
    step: "Step 04",
    title: "Quality Inspection",
    desc: "We conduct a thorough inspection to ensure every area meets our high standards—and we won't leave until you're completely satisfied.",
  },
];

const recentProjects = [
  { client: "Sarah & Mark", location: "Brandon, FL", challenge: "Home on market for 6 months with no offers", solution: "Deep clean + real estate prep cleaning", result: "Sold in 8 hours after cleaning" },
  { client: "Amanda", location: "Riverview, FL", challenge: "Moving into a new home that needed cleaning", solution: "Move-in cleaning + deep clean", result: "Home was spotless, moved in stress-free" },
  { client: "Robert", location: "Wesley Chapel, FL", challenge: "Post-renovation dust and debris", solution: "Post-construction cleaning", result: "Home was move-in ready" },
  { client: "Karen", location: "Apollo Beach, FL", challenge: "Preparing home for sale", solution: "Real estate prep cleaning + staging", result: "Received multiple offers above asking" },
  { client: "Valery", location: "North Port, FL", challenge: "Home hadn't been cleaned in 5 years", solution: "Intensive deep clean + organization", result: "Home transformed, sold quickly" },
];

const clientReviews = [
  {
    author: "Valery B.",
    location: "North Port, FL",
    text: "We had the most amazing experience. By nature, I am a slob and hoarder. We decided to put our house on the market and it hadn't been cleaned in 5-years. Daniel came out with one of his professionals, spent half a day attacking our debacle of a house, and we had an offer in 8 hours. Not only did we sell our house quickly, but the price was amazing. If you ever look at your house and don't know where to start, call Daniel!",
  },
  {
    author: "Sarah & Mark T.",
    location: "Brandon, FL",
    text: "We hired Revitalize Real Estate for a deep clean because we had a showing and an open house in two days. Daniel came out with one of his professionals and completely transformed our home. We had an offer in 8 hours. Amazing service, amazing price!",
  },
  {
    author: "David R.",
    location: "Tampa, FL",
    text: "The post-construction cleaning after our kitchen remodel was incredible. They got rid of all the dust and debris—things we couldn't even see. Our home was spotless and ready for move-in. We couldn't have done it without them.",
  },
  {
    author: "Amanda C.",
    location: "Riverview, FL",
    text: "We hired Revitalize Real Estate for move-in cleaning for our new home. The team arrived on time, worked efficiently, and left our home absolutely spotless. It was such a relief to move into a clean, fresh home. Highly recommend!",
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
    q: "What types of cleaning services do you offer?",
    a: "We offer deep cleaning, move-in/move-out cleaning, post-construction cleaning, real estate prep cleaning, and regular maintenance cleaning. We can also customize a plan to meet your specific needs."
  },
  {
    q: "How much does professional cleaning cost?",
    a: "Costs vary based on the size of your home, the type of cleaning, and the level of service required. We provide transparent, detailed estimates during our free consultation."
  },
  {
    q: "How long does a cleaning take?",
    a: "The duration depends on the size of your home and the type of cleaning. A standard deep clean typically takes 2-6 hours. Post-construction cleaning and move-in/move-out cleaning may take longer."
  },
  {
    q: "Do you use eco-friendly products?",
    a: "Yes, we offer eco-friendly and non-toxic cleaning products upon request. We're committed to providing safe, healthy cleaning solutions for your family and pets."
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes! Revitalize Real Estate is fully licensed, bonded, and insured for your peace of mind."
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "Not necessarily. We can accommodate your preference. Many clients provide us with access instructions and allow us to work independently. We're fully insured and trustworthy."
  },
  {
    q: "What if I'm not satisfied with the cleaning?",
    a: "We stand behind our work. If you're not completely satisfied, we'll return and re-clean any areas at no additional cost. Your satisfaction is our priority."
  },
  {
    q: "Do you offer financing options?",
    a: "Yes, we offer flexible financing options to help make your cleaning services more affordable. Contact us for details."
  }
];

function ProfessionalCleaningServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Professional Cleaning Services",
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
    "description": "Expert professional cleaning services in Tampa Bay. Deep cleaning, move-in/move-out, post-construction, and real estate prep cleaning. 20+ years experience. Free estimates.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://revitalizeretampa.com/professional-cleaning-services"
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
        title="Professional Cleaning Services"
        subtitle="Tampa Bay's Premier Home Cleaning Experts"
      />

      {/* 2. Welcome Intro */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
          {/* Left Text */}
          <div className={`w-full lg:w-[50%] flex flex-col items-start transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              Meticulous Care
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6 font-serif leading-tight">
              Experience the Difference of{" "}
              <span className="text-copper italic font-serif font-bold">Professional Cleaning</span>
            </h2>

            <div className="text-[1.02rem] text-charcoal-soft/85 font-medium space-y-6 leading-relaxed mb-8">
              <p>
                A clean home is more than just visually appealing—it's healthier, more comfortable, and more inviting. At Revitalize Real Estate, we provide professional cleaning services that go beyond surface-level tidying. Our team delivers meticulous, detail-oriented cleaning that transforms your home and leaves it sparkling from top to bottom.
              </p>
              <p>
                With 20+ years of experience in home improvement and real estate, we understand the importance of a truly clean home—whether you're preparing to sell, moving in or out, or simply want to enjoy a fresh, healthy living environment.
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

          {/* Right Image */}
          <div className="relative w-full lg:w-[45%] h-[400px] sm:h-[480px] flex items-center justify-center">
            <div className="relative z-10 w-full max-w-[400px] h-full">
              <div className="absolute top-6 left-0 w-[78%] aspect-[4/5] rounded-[2rem] overflow-hidden border-[6px] border-white shadow-xl hover:scale-[1.02] transition duration-300">
                <img
                  src={cleaningImg}
                  alt="Meticulous Professional Home Cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 w-[45%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition duration-300">
                <img
                  src={bathFive}
                  alt="Kitchen and bathroom deep cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-2 w-[42%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition duration-300">
                <img
                  src={realEstateImg}
                  alt="Real Estate Cleaning preparation"
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
              Why Choose Revitalize Real Estate for Your Cleaning Needs?
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

      {/* 4. Our Professional Cleaning Services */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Hammer className="h-3.5 w-3.5 text-copper animate-pulse" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-bold text-charcoal mb-4 font-serif">
              Our Professional Cleaning Services
            </h2>
            <p className="text-charcoal-soft/80 text-sm md:text-base font-medium">
              We offer a comprehensive suite of professional cleaning services designed to meet the unique needs of homeowners, sellers, buyers, and investors.
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

                    <p className="text-xs font-semibold text-charcoal-soft italic">
                      <span className="font-extrabold text-charcoal not-italic uppercase tracking-wider block text-[10px] mb-0.5">Ideal For:</span>
                      {srv.idealFor}
                    </p>
                    
                    {/* Check list */}
                    <div className="space-y-2 w-full border-t border-[#efe5da]/60 pt-3">
                      <p className="text-xs uppercase tracking-wider font-extrabold text-charcoal">What's Included:</p>
                      <div className="space-y-1.5 pt-1">
                        {srv.bullets.map((bullet, index) => (
                          <div key={index} className="flex items-start gap-2 text-xs font-semibold text-charcoal-soft leading-tight">
                            <CheckCircle2 className="w-3.5 h-3.5 text-copper shrink-0 mt-0.5" />
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
              Our Professional Cleaning Process
            </h2>
            <p className="text-white/80 text-sm font-medium">
              We follow a systematic, thorough process to ensure every cleaning job is completed to the highest standard.
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
              Recent Cleaning Success Stories
            </h2>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto border border-[#efe5da] rounded-2xl mb-10">
            <table className="min-w-full divide-y divide-[#efe5da]">
              <thead className="bg-[#faf8f6]">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Client</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Location</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Challenge</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Our Solution</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Result</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#efe5da]/60">
                {recentProjects.map((proj, idx) => (
                  <tr key={idx} className="hover:bg-[#faf8f6]/40 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-charcoal">{proj.client}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-charcoal-soft">{proj.location}</td>
                    <td className="px-6 py-4 text-sm font-medium text-charcoal-soft">{proj.challenge}</td>
                    <td className="px-6 py-4 text-sm font-medium text-charcoal-soft">{proj.solution}</td>
                    <td className="px-6 py-4 text-sm font-bold text-copper">{proj.result}</td>
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
              View Our Cleaning Gallery <ArrowUpRight className="w-3.5 h-3.5 text-copper" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-charcoal/10 hover:border-charcoal/30 bg-[#faf8f6] transition font-bold text-xs hover:scale-[1.01]"
            >
              Get Your Free Estimate <Phone className="w-3.5 h-3.5 text-copper" />
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
              What Our Clients Say About Our Professional Cleaning Services
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
              Service Area – We Clean Across Tampa Bay
            </h3>
            <p className="text-sm text-charcoal-soft/80 font-medium">
              We proudly serve homeowners within a 50-mile radius of Tampa, FL 33647:
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
              Frequently Asked Questions About Professional Cleaning
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
                    <p className="font-bold text-charcoal">Meticulous Attention</p>
                    <p className="text-charcoal-soft/75 font-medium mt-0.5">Every corner cleaned to perfection</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-charcoal">Respect for Your Home</p>
                    <p className="text-charcoal-soft/75 font-medium mt-0.5">Professional, careful, and trustworthy</p>
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
              <h3 className="text-xl font-bold text-charcoal font-serif">Ready to Experience the Difference?</h3>
              <p className="text-sm text-charcoal-soft/80 font-medium leading-relaxed">
                Don't settle for a home that's less than sparkling clean. Contact Revitalize Real Estate today for a free consultation and estimate.
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
                  View Our Cleaning Gallery
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
