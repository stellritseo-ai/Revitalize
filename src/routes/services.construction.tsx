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
  Search,
  BookOpen
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
import uploadedHomeEvaluation from "@/assets/residential/uploaded-home-evaluation.png";

export const Route = createFileRoute("/services/construction")({
  head: () => ({
    title: "Home Evaluation | Revitalize Real Estate – Get Your Tampa Bay Home's True Value",
    meta: [
      {
        name: "description",
        content:
          "Get a professional home evaluation from Tampa Bay's trusted real estate and renovation experts. Accurate market value + improvement recommendations. Serving within 50 miles. Free consultation.",
      },
    ],
  }),
  component: HomeEvaluationPage,
});

const benefits = [
  {
    icon: Award,
    title: "Licensed Realtor + Renovation Expert",
    desc: "Daniel Bustillo brings 16+ years of hands-on construction experience to every evaluation",
  },
  {
    icon: Layers,
    title: "Comprehensive Market Analysis",
    desc: "Detailed comparables, market trends, and neighborhood insights",
  },
  {
    icon: Search,
    title: "Physical Condition Assessment",
    desc: "We inspect your home's condition and identify improvement opportunities",
  },
  {
    icon: Sparkles,
    title: "Strategic Improvement Recommendations",
    desc: "Expert advice on high-ROI renovations to boost your home's value",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent Process",
    desc: "Clear, honest communication—no pressure, no obligation",
  },
  {
    icon: Star,
    title: "5-Star Reputation",
    desc: "127+ verified reviews from satisfied clients",
  },
  {
    icon: MapPin,
    title: "Local Market Experts",
    desc: "Deep knowledge of Tampa Bay neighborhoods and values",
  },
];

const evaluationDetails = [
  {
    title: "1. Comparative Market Analysis (CMA)",
    desc: "We analyze recent sales of comparable homes in your neighborhood, adjusting for differences in size, features, condition, and location.",
    bullets: [
      "Recent sales data for comparable homes",
      "Active and pending listings in your area",
      "Market trend analysis (buyer's or seller's market)",
      "Neighborhood appreciation rates",
      "Price per square foot analysis",
      "Days on market data",
    ],
  },
  {
    title: "2. Physical Condition Assessment",
    desc: "We conduct a professional visual inspection of your home, evaluating its condition and identifying areas that could affect value.",
    bullets: [
      "Exterior assessment (roof, siding, windows, landscaping)",
      "Interior assessment (flooring, walls, fixtures, systems)",
      "Structural evaluation (foundation, framing)",
      "Systems review (HVAC, electrical, plumbing)",
      "Curb appeal analysis",
      "Safety and code compliance checks",
    ],
  },
  {
    title: "3. Strategic Improvement Recommendations",
    desc: "This is where our renovation expertise sets us apart. We identify specific improvements that can increase your home's value and provide realistic cost-benefit analysis.",
    bullets: [
      "High-ROI renovation recommendations",
      "Cost estimates for suggested improvements",
      "Estimated value increase for each improvement",
      "Priority ranking (highest ROI first)",
      "Timeline considerations for pre-sale improvements",
      "DIY vs. professional installation guidance",
    ],
  },
  {
    title: "4. Comprehensive Valuation Report",
    desc: "You'll receive a detailed, easy-to-understand report summarizing our findings.",
    bullets: [
      "Estimated current market value",
      "Estimated potential value after improvements",
      "Comparable sales data",
      "Property condition assessment",
      "Improvement recommendations with cost/benefit analysis",
      "Local market insights",
    ],
  },
];

const processSteps = [
  {
    step: "Step 01",
    title: "Schedule Your Free Evaluation",
    desc: "Contact us to schedule your professional home evaluation. We're available for in-person or virtual assessments.",
  },
  {
    step: "Step 02",
    title: "Data Collection",
    desc: "We gather market data for your area and schedule a time to inspect your home.",
  },
  {
    step: "Step 03",
    title: "Comprehensive Assessment",
    desc: "We conduct a thorough evaluation of your property, including market analysis, physical inspection, and improvement recommendations.",
  },
  {
    step: "Step 04",
    title: "Deliver Your Report",
    desc: "We provide you with a detailed, easy-to-understand valuation report. We're happy to walk through the findings and answer any questions.",
  },
];

const comparisonTable = [
  { type: "Online Estimator (AVM)", accuracy: "±10-20% off", details: "Basic data, no physical inspection, algorithm-based" },
  { type: "Real Estate Agent CMA", accuracy: "±5-10% off", details: "Market comparables, professional knowledge" },
  { type: "Revitalize Real Estate Evaluation", accuracy: "±3-5% off", details: "Market data + physical inspection + renovation recommendations" },
];

const reportDetails = [
  { section: "Estimated Current Value", details: "Your home's estimated market value based on recent comparable sales" },
  { section: "Estimated Future Value", details: "What your home could be worth after recommended improvements" },
  { section: "Comparable Sales", details: "3-5 recent sales of similar homes in your area" },
  { section: "Property Assessment", details: "Summary of your home's condition and key features" },
  { section: "Improvement Recommendations", details: "3-5 recommended improvements with cost and value estimates" },
  { section: "Market Insights", details: "Current market conditions and trends affecting your home's value" },
];

const successStories = [
  { client: "Sarah & Mark", location: "Brandon, FL", challenge: "Home on market for 6 months with no offers", solution: "Professional evaluation + deep clean + minor improvements", result: "Sold in 8 hours after improvements" },
  { client: "Robert", location: "Wesley Chapel, FL", challenge: "Wanted to sell but didn't know where to start", solution: "Evaluation + pre-sale renovation recommendations", result: "Home sold above asking after kitchen update" },
  { client: "Karen", location: "Apollo Beach, FL", challenge: "Considering selling, needed accurate value", solution: "Comprehensive evaluation + market analysis", result: "Received multiple offers, sold for 10% over estimate" },
  { client: "Amanda", location: "Riverview, FL", challenge: "Nervous about whole-home improvements", solution: "Evaluation + prioritized improvement recommendations", result: "Transformed home, value increased 25%" },
];

const factorsList = [
  { factor: "Location & Neighborhood", impact: "School districts, amenities, crime rates, and neighborhood trends significantly affect value" },
  { factor: "Square Footage & Layout", impact: "Larger homes with functional layouts generally command higher prices" },
  { factor: "Age & Condition", impact: "Newer homes or well-maintained older homes typically sell for more" },
  { factor: "Upgrades & Renovations", impact: "Updated kitchens, bathrooms, and flooring add significant value" },
  { factor: "Curb Appeal", impact: "The exterior condition strongly influences buyer perception" },
  { factor: "Market Conditions", impact: "Whether it's a buyer's or seller's market affects pricing" },
  { factor: "Comparable Sales", impact: "Recent sales of similar homes in your area are the most important factor" },
];

const clientReviews = [
  {
    author: "Sarah T.",
    location: "Brandon, FL",
    text: "I was nervous about selling my home, but Daniel's evaluation was incredibly thorough. He not only told me what my home was worth but showed me exactly what improvements would get me the best return. His renovation advice was invaluable.",
  },
  {
    author: "James & Karen W.",
    location: "Apollo Beach, FL",
    text: "The online estimators had my home valued $50,000 less than Revitalize Real Estate's professional evaluation. Their team identified improvements that added real value. We sold for even more than their estimate!",
  },
  {
    author: "Karen & James W.",
    location: "Apollo Beach, FL",
    text: "We hired them for a bathroom remodel and flooring installation before selling our home. Their evaluation showed exactly what improvements would maximize our return. The investment paid off—we received multiple offers above asking price within days.",
  },
  {
    author: "Elena P.",
    location: "Tampa, FL",
    text: "Their estimate process was surprisingly accurate. The final invoice for our master bath remodel matched the initial quote almost perfectly. No hidden fees, premium finish from start to finish. Their advice was spot-on.",
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
    q: "What factors affect my home's value?",
    a: "Multiple factors influence your home's value: location, square footage, condition, age, updates, curb appeal, local comps, and general market supply and demand conditions."
  },
  {
    q: "How accurate is a professional home evaluation?",
    a: "A professional evaluation from Revitalize Real Estate is typically accurate within 3-5% of the actual sale price. This is significantly more accurate than online estimators, which can be off by 10-20% or more."
  },
  {
    q: "Is the home evaluation really free?",
    a: "Yes! We offer a completely free, no-obligation home evaluation. We believe in providing value upfront and earning your trust before any transaction."
  },
  {
    q: "What's the difference between a home evaluation and a home appraisal?",
    a: "A home evaluation is conducted by a real estate professional to estimate market value for listing or sale purposes. A home appraisal is conducted by a licensed appraiser, typically ordered by a lender for financing purposes. We provide comprehensive home evaluations to help you make informed decisions."
  },
  {
    q: "How long does the evaluation take?",
    a: "The entire process typically takes 1-3 days from scheduling to receiving your report. The on-site inspection usually takes 1-2 hours."
  },
  {
    q: "Do you serve areas outside of Tampa?",
    a: "Yes! We proudly serve residential clients within a 50-mile radius of Tampa, FL 33647, including Wesley Chapel, Brandon, St. Petersburg, Clearwater, Lutz, and many more."
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

function HomeEvaluationPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Home Evaluation",
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
    "description": "Get a professional home evaluation from Tampa Bay's trusted real estate and renovation experts. Accurate market value plus improvement recommendations. Free consultation.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://revitalizeretampa.com/home-evaluation"
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
        title="Home Evaluation"
        subtitle="Get Your Tampa Bay Home's True Value"
      />

      {/* 2. Welcome Intro */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
          {/* Left Text */}
          <div className={`w-full lg:w-[50%] flex flex-col items-start transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              Property Value
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-charcoal mb-6 font-serif leading-tight">
              Know Your Home's{" "}
              <span className="text-copper italic font-serif font-bold">True Worth</span>
            </h2>

            <div className="text-[1.02rem] text-charcoal-soft/85 font-medium space-y-6 leading-relaxed mb-8">
              <p>
                Whether you're planning to sell, refinance, or simply curious about your home's value, knowing what your property is worth is the first step to making informed decisions. At Revitalize Real Estate, we provide professional home evaluations that go far beyond the basic automated estimates you'll find online.
              </p>
              <p>
                Our evaluation combines comprehensive market analysis with a physical condition assessment—giving you a realistic, accurate picture of your home's value. And because we're both licensed real estate professionals and experienced renovators, we can identify strategic improvements that could significantly increase your home's worth.
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
                Schedule Your Free Evaluation <ArrowRight className="h-4 w-4" />
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
                  src={uploadedHomeEvaluation}
                  alt="Professional Home Evaluation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 w-[45%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition duration-300">
                <img
                  src={resOne}
                  alt="Physical condition checks"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-2 w-[42%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition duration-300">
                <img
                  src={realEstateImg}
                  alt="Daniel Bustillo CMA Analysis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AVM vs CMA vs Revitalize comparison table */}
      <section className="relative py-20 bg-[#faf8f6] border-y border-[#efe5da]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4.5xl font-bold text-charcoal font-serif mb-4">
              Why a Professional Home Evaluation Matters
            </h3>
            <p className="text-sm text-charcoal-soft/80 font-medium leading-relaxed">
              Online home value estimators (AVMs) can be wildly inaccurate—they don't account for your home's unique features, condition, renovations, or location nuances. A professional evaluation gives you the accurate information you need to make confident decisions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto border border-[#efe5da] rounded-2xl bg-white shadow-sm">
            <table className="min-w-full divide-y divide-[#efe5da]">
              <thead className="bg-[#faf8f6]">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Evaluation Type</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">Accuracy</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">What's Included</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#efe5da]/60">
                {comparisonTable.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#faf8f6]/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-charcoal">{item.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-extrabold text-copper">{item.accuracy}</td>
                    <td className="px-6 py-4 text-sm font-medium text-charcoal-soft">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Revitalize Real Estate */}
      <section className="relative py-20 bg-white border-b border-charcoal/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Award className="h-3.5 w-3.5 text-copper" />
              Why Choose Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-bold text-charcoal mb-4 font-serif">
              Why Choose Revitalize Real Estate for Your Home Evaluation?
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

      {/* 5. What's Included in Your Home Evaluation */}
      <section className="relative py-24 bg-[#faf8f6]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5.5xl font-bold text-charcoal mb-4 font-serif">
              What's Included in Your Home Evaluation
            </h2>
            <p className="text-charcoal-soft/80 text-sm md:text-base font-medium">
              Our comprehensive home evaluation combines market data, physical inspection, and strategic recommendations to give you a complete picture of your home's value and potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {evaluationDetails.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#efe5da] p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-charcoal font-serif">{item.title}</h3>
                  <p className="text-charcoal-soft/85 text-xs md:text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                  
                  <div className="space-y-2 pt-2 border-t border-[#efe5da]/60">
                    <p className="text-[10px] uppercase tracking-wider font-extrabold text-charcoal">What's Included:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.bullets.map((bullet, index) => (
                        <div key={index} className="flex items-start gap-2 text-xs font-semibold text-charcoal-soft leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-copper shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process */}
      <section className="relative py-20 bg-gradient-brand bg-background text-white mx-[15px] rounded-2xl border border-white/5 shadow-lg overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] w-[60%] h-[60%] bg-copper/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/35 bg-copper/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
              Our Workflow
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-bold font-serif mb-4 text-white">
              Our Home Evaluation Process
            </h2>
            <p className="text-white/80 text-sm font-medium">
              We make the evaluation process simple, thorough, and transparent. No pressure, no obligation—just honest, expert information.
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

      {/* 7. What your evaluation report looks like */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif mb-2">
              What Your Home Evaluation Report Looks Like
            </h3>
            <p className="text-xs text-charcoal-soft/60 font-semibold">Here is what you can expect to receive:</p>
          </div>

          <div className="border border-[#efe5da] rounded-2xl overflow-hidden shadow-sm">
            <div className="divide-y divide-[#efe5da]">
              {reportDetails.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#efe5da] hover:bg-[#faf8f6]/40 transition-colors">
                  <div className="sm:w-1/3 px-6 py-4 bg-[#faf8f6]/50 font-bold text-charcoal text-xs sm:text-sm flex items-center">{item.section}</div>
                  <div className="sm:w-2/3 px-6 py-4 text-xs sm:text-sm font-medium text-charcoal-soft flex items-center">{item.details}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Success Stories */}
      <section className="relative py-20 bg-[#faf8f6] border-y border-[#efe5da]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <FolderKanban className="w-3.5 h-3.5 text-copper" />
              Success Stories
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-bold text-charcoal font-serif mb-4">
              Recent Home Evaluation Success Stories
            </h2>
          </div>

          <div className="overflow-x-auto border border-[#efe5da] rounded-2xl bg-white mb-10 shadow-sm">
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
                {successStories.map((proj, idx) => (
                  <tr key={idx} className="hover:bg-[#faf8f6]/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-charcoal">{proj.client}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-charcoal-soft">{proj.location}</td>
                    <td className="px-6 py-4 text-sm font-medium text-charcoal-soft">{proj.challenge}</td>
                    <td className="px-6 py-4 text-sm font-medium text-charcoal-soft">{proj.solution}</td>
                    <td className="px-6 py-4 text-sm font-bold text-copper">{proj.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. Factors Affecting Home Value */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <BookOpen className="w-3.5 h-3.5 text-copper" />
              Insights
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif mb-4">
              Common Questions About Home Value
            </h3>
            <p className="text-sm text-charcoal-soft/80 font-medium">
              What factors affect my home's value?
            </p>
          </div>

          <div className="border border-[#efe5da] rounded-2xl overflow-hidden shadow-sm mb-12">
            <div className="divide-y divide-[#efe5da]">
              {factorsList.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#efe5da] hover:bg-[#faf8f6]/30 transition-colors">
                  <div className="sm:w-1/3 px-6 py-4 bg-[#faf8f6]/30 font-bold text-charcoal text-xs sm:text-sm flex items-center">{item.factor}</div>
                  <div className="sm:w-2/3 px-6 py-4 text-xs sm:text-sm font-medium text-charcoal-soft flex items-center leading-relaxed">{item.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Client Reviews Block */}
      <section className="relative py-20 bg-[#faf8f6] border-y border-[#efe5da]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Star className="w-3.5 h-3.5 fill-copper text-copper" />
              Testimonials
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif mb-4">
              What Our Clients Say About Our Home Evaluations
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

      {/* 11. Service Area Cities Distance Matrix */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif mb-4">
              Service Area – We Evaluate Across Tampa Bay
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

      {/* 12. FAQs Section Accordion */}
      <section className="relative py-20 bg-[#faf8f6] border-t border-[#efe5da]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif mb-4">
              Frequently Asked Questions About Home Evaluations
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

      {/* 13. Promise & Commitments */}
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
              <h3 className="text-xl font-bold text-charcoal font-serif">Ready to Know Your Home's True Value?</h3>
              <p className="text-sm text-charcoal-soft/80 font-medium leading-relaxed">
                Don't leave money on the table with inaccurate online estimates. Schedule your free, comprehensive home evaluation today and get the accurate information you need to make confident decisions.
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
                  Schedule Your Free Home Evaluation Today
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
