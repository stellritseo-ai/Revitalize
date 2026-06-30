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
  Percent,
  Layers,
  Search,
  UserCheck
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

export const Route = createFileRoute("/services/real-estate")({
  head: () => ({
    title: "Real Estate Sales & Pre-Listing Renovation Services | Revitalize Real Estate",
    meta: [
      {
        name: "description",
        content:
          "Maximize your home's equity with Revitalize. We offer expert Real Estate Sales & Pre-Listing Renovation Services in Tampa Bay, combining listing representation with high-ROI remodeling.",
      },
    ],
  }),
  component: RealEstateServicesPage,
});

const benefits = [
  {
    icon: UserCheck,
    title: "Licensed Realtor + Renovation Expert",
    desc: "Daniel Bustillo brings 16+ years of hands-on construction experience to every transaction",
  },
  {
    icon: ShieldCheck,
    title: "Turn-Key Solutions",
    desc: "From pre-sale renovations to closing, we handle everything",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent Process",
    desc: "Clear communication, no hidden fees, every step explained",
  },
  {
    icon: Percent,
    title: "100% Financing Options",
    desc: "Through trusted lender partnerships",
  },
  {
    icon: MapPin,
    title: "Local Market Experts",
    desc: "Deep knowledge of Tampa Bay neighborhoods and values",
  },
  {
    icon: Star,
    title: "5-Star Reputation",
    desc: "127+ verified reviews from satisfied clients",
  },
  {
    icon: Home,
    title: "Residential Specialists",
    desc: "Homes are all we do—no commercial shortcuts",
  },
];

const servicesDetail = [
  {
    title: "Real Estate Sales & Representation",
    desc: "Whether you're selling your current property, buying your next home, or exploring an investment, our full-service sales team provides expert guidance. Our integrated renovation expertise gives you a distinct advantage, ensuring your listing or purchase is evaluated with professional constructor-level insights.",
    icon: Home,
    image: realEstateImg,
    bullets: [
      "For Buyers: Property search, market analysis, negotiation, inspection coordination, and seamless closing",
      "For Sellers: Comprehensive market evaluation, professional staging, strategic marketing, and skilled negotiation",
      "For Investors: Property identification, financial analysis, acquisition support, and portfolio management",
    ],
  },
  {
    title: "Pre-Listing Renovation Services",
    desc: "We specialize in preparing homes to sell for maximum profit. Through targeted, strategic improvements, we handle everything from design consultation to complete remodeling. By upgrading high-impact areas like kitchens, bathrooms, and flooring prior to listing, we ensure your home is positioned to command top dollar.",
    icon: Hammer,
    image: kitSix,
    bullets: [
      "Pre-Sale Renovation Consulting: We identify high-ROI improvements tailored to your home and market",
      "Design Consulting: Expert guidance on finishes, colors, and staging to appeal to buyers",
      "Project Management: We coordinate all renovations from concept to completion",
      "Staging & Presentation: Professional staging and photography to showcase your home's best features",
    ],
  },
  {
    title: "Investment Property Services",
    desc: "Building wealth through real estate is one of the most reliable paths to long-term financial growth. Our team provides comprehensive services for investors looking to acquire, renovate, and manage rental properties. We help investors build wealth confidently by combining expert acquisition guidance, professional renovations, and comprehensive property management.",
    icon: Building,
    image: cabinetImg,
    bullets: [
      "Property Acquisition: Identifying high-potential properties with strong cash flow and appreciation potential",
      "Renovation Management: Professional renovation to maximize rental income and create instant equity",
      "Property Management: Tenant screening, rent collection, maintenance, and legal compliance",
      "Portfolio Strategy: Long-term planning and guidance for building wealth through real estate",
    ],
  },
  {
    title: "Buy & Sell Simultaneously",
    desc: "Navigating the timing of buying and selling at the same time can be challenging. We provide expert coordination to ensure a smooth transition between your current home and your next one.",
    icon: Layers,
    image: bathFive,
    bullets: [
      "Bridge Financing Guidance: We help you explore financing options to bridge the gap",
      "Contingency Planning: Strategic planning to manage timing and reduce stress",
      "Renovation Preparation: We prepare your current home for sale and your new home for move-in",
      "Seamless Coordination: Our team manages the entire process so you can focus on your move",
    ],
  },
  {
    title: "Home Evaluation & Worth Assessment",
    desc: "Wondering what your home is worth? Our professional home evaluations combine market data with a physical assessment to provide an accurate, realistic value.",
    icon: Search,
    image: cleaningImg,
    bullets: [
      "Comparative Market Analysis: Detailed comparison to recent sales in your area",
      "Physical Condition Assessment: Evaluation of your home's condition and improvement potential",
      "Strategic Recommendations: Expert advice on improvements that could increase your home's value",
      "Ongoing Market Insights: Regular updates on market trends affecting your property's value",
    ],
  },
];

const processSteps = [
  {
    step: "Step 01",
    title: "Free Consultation",
    desc: "We meet with you to understand your goals—whether you're buying, selling, or investing. No pressure, no obligation.",
  },
  {
    step: "Step 02",
    title: "Strategy Development",
    desc: "We develop a customized strategy tailored to your specific needs and timeline.",
  },
  {
    step: "Step 03",
    title: "Execution",
    desc: "Our team handles everything—from property search and showings to renovation management and closing.",
  },
  {
    step: "Step 04",
    title: "Success",
    desc: "We deliver results that exceed your expectations, whether that's a successful sale, a new investment property, or your dream home.",
  },
];

const recentProjects = [
  { type: "Home Seller", location: "Tampa, FL 33647", scope: "Pre-sale kitchen remodel, flooring update, sold above asking in 8 hours" },
  { type: "First-Time Buyer", location: "Wesley Chapel, FL", scope: "Found ideal home, coordinated renovation, closed in 30 days" },
  { type: "Real Estate Investor", location: "St. Petersburg, FL", scope: "Acquired rental property, managed renovation, achieved 20% IRR" },
  { type: "Concurrent Buyer & Seller", location: "Clearwater, FL", scope: "Sold current home, purchased new home, seamless transition" },
  { type: "Property Flipper", location: "Brandon, FL", scope: "Acquired distressed property, full renovation, profitable resale" },
];

const clientReviews = [
  {
    author: "David R.",
    location: "Tampa, FL",
    text: "Revitalize Real Estate rebuilt my Tampa kitchen and handled drywall + flooring seamlessly. Their team showed up on time, stayed on budget, and even coordinated plumbing. They made selling our home stress-free.",
  },
  {
    author: "Ryan & Jessica P.",
    location: "Land O' Lakes, FL",
    text: "As first-time home sellers, we were overwhelmed. Revitalize Real Estate guided us through the entire process—from pre-listing improvements to staging advice. They helped us prepare our home to sell for top dollar.",
  },
  {
    author: "Karen & James W.",
    location: "Apollo Beach, FL",
    text: "We hired Revitalize Real Estate for a bathroom remodel and flooring installation before selling our home. The investment paid off—we received multiple offers above asking price within days. Their work added incredible value to our property.",
  },
  {
    author: "Valery B.",
    location: "North Port, FL",
    text: "We had the most amazing experience. Daniel came out with his professionals, spent half a day transforming our house, and we had an offer in 8 hours. If you look at your house and don't know where to start, call Daniel!",
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
    q: "Do you handle both real estate and home improvements?",
    a: "Absolutely. We specialize in pre-listing home improvements that boost your home's value and market appeal. From kitchens and bathrooms to curb appeal, we tailor upgrades that help you sell for top dollar. Our unique combination of real estate and renovation expertise gives our clients a powerful advantage."
  },
  {
    q: "How do I get started with your team?",
    a: "Simply call us at (813) 323-0291 or request a free consultation online. We'll schedule a meeting to understand your goals and develop a customized strategy."
  },
  {
    q: "What types of financing do you help buyers with?",
    a: "We work with trusted lender partners to offer a variety of financing options, including conventional loans, FHA loans, VA loans, and 100% financing options. Our team can guide you through the options and connect you with the right lender for your situation."
  },
  {
    q: "How do you market homes for sale?",
    a: "We use a comprehensive marketing strategy including professional photography, virtual tours, targeted online advertising, social media promotion, and traditional marketing materials. We also leverage our renovation expertise to position your home for maximum appeal."
  },
  {
    q: "I'm relocating to Tampa—can you help with that?",
    a: "Absolutely! We help relocating clients find the perfect home in Tampa Bay. Our deep knowledge of local neighborhoods and our renovation expertise ensure you find a home that meets your needs now and in the future."
  },
  {
    q: "How much is my home worth?",
    a: "We provide professional home evaluations combining market data with a physical assessment. Contact us for a free, no-obligation evaluation."
  },
  {
    q: "Do you work with investors or flippers?",
    a: "Yes! We specialize in helping investors identify, acquire, renovate, and manage investment properties. Our Wealth Builder Program provides a comprehensive system for building wealth through real estate."
  }
];

function RealEstateServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Real Estate Services",
    "provider": {
      "@type": "RealEstateAgent",
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
    "description": "Full-service real estate representation with integrated renovation expertise in Tampa Bay. Buy, sell, or invest with confidence. 20+ years experience. Free consultation.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://revitalizeretampa.com/real-estate-services"
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
        title="Real Estate Sales & Pre-Listing Renovation Services"
        subtitle="Tampa Bay's Premiere Full-Service Realty & Construction Partner"
      />

      {/* 2. Welcome Intro */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
          {/* Left Text */}
          <div className={`w-full lg:w-[50%] flex flex-col items-start transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              Realtor + Contractor
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6 font-serif leading-tight">
              Unlock Maximum Equity with Integrated{" "}
              <span className="text-copper italic font-serif font-bold">Real Estate Sales & Pre-Listing Renovation Services</span>
            </h2>

            <div className="text-[1.02rem] text-charcoal-soft/85 font-medium space-y-6 leading-relaxed mb-8">
              <p>
                At <strong className="text-charcoal">Revitalize Real Estate</strong>, we bridge the gap between traditional realty and high-impact property upgrades. Our signature <strong className="text-copper font-bold bg-copper/5 px-2 py-0.5 rounded border border-copper/10 animate-pulse">Real Estate Sales & Pre-Listing Renovation Services</strong> empower homeowners throughout the Tampa Bay area to maximize their equity before hitting the market. By combining seasoned local market expertise with professional, in-house remodeling, we help you sell your home faster and for top dollar.
              </p>
              <p>
                Founded by <strong className="text-charcoal">Daniel Bustillo</strong>, a licensed Realtor® and construction veteran with over 16 years of hands-on remodeling experience, our team provides turn-key solutions. We don't just place a sign in your yard—we evaluate, design, renovate, and market your property to ensure it stands out to active buyers and demands maximum value.
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
                Get Your Free Consultation <ArrowRight className="h-4 w-4" />
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
                  src={realEstateImg}
                  alt="Daniel Bustillo - Real Estate representation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 w-[45%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition duration-300">
                <img
                  src={kitSix}
                  alt="Pre-listing renovations"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-2 w-[42%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition duration-300">
                <img
                  src={resOne}
                  alt="General construction expertise"
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
              Why Choose Revitalize Real Estate for Your Real Estate Needs?
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
              Our Real Estate Services
            </h2>
            <p className="text-charcoal-soft/80 text-sm md:text-base font-medium">
              We offer a complete suite of real estate services designed to meet the needs of buyers, sellers, and investors. Every service is backed by our renovation expertise, ensuring you get the maximum value from your property.
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
                      <div className="space-y-2 pt-1">
                        {srv.bullets.map((bullet, index) => (
                          <div key={index} className="flex items-start gap-2.5 text-xs font-semibold text-charcoal-soft">
                            <CheckCircle2 className="w-4 h-4 text-copper shrink-0 mt-0.5" />
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
              Our Real Estate & Renovation Process
            </h2>
            <p className="text-white/80 text-sm font-medium">
              We follow a simple, transparent process that combines real estate expertise with renovation capabilities.
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
              Recent Real Estate Success Stories
            </h2>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto border border-[#efe5da] rounded-2xl mb-10">
            <table className="min-w-full divide-y divide-[#efe5da]">
              <thead className="bg-[#faf8f6]">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Client Type</th>
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
              View Our Success Stories <ArrowUpRight className="w-3.5 h-3.5 text-copper" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-charcoal/10 hover:border-charcoal/30 bg-[#faf8f6] transition font-bold text-xs hover:scale-[1.01]"
            >
              Get Your Free Consultation <Phone className="w-3.5 h-3.5 text-copper" />
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
              What Our Clients Say About Our Real Estate Services
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
              Service Area – We Serve Across Tampa Bay
            </h3>
            <p className="text-sm text-charcoal-soft/80 font-medium">
              We proudly serve clients within a 50-mile radius of Tampa, FL 33647:
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
              Frequently Asked Questions About Real Estate Services
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
              <h3 className="text-xl font-bold text-charcoal font-serif">Ready to Achieve Your Real Estate Goals?</h3>
              <p className="text-sm text-charcoal-soft/80 font-medium leading-relaxed">
                Whether you're buying, selling, or investing, Revitalize Real Estate is here to help you succeed. Contact us today for a free consultation.
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
                  Get Your Free Consultation Today
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-[#efe5da] hover:border-charcoal/30 bg-white transition font-bold text-xs text-charcoal"
                >
                  View Our Success Stories
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
