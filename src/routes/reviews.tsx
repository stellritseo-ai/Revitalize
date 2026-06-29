import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import {
  Star,
  MapPin,
  Sparkles,
  Phone,
  Mail,
  ArrowUpRight,
  ExternalLink,
  MessageSquare,
  Compass,
  CheckCircle,
  Building,
  Quote,
  ShieldCheck
} from "lucide-react";
import React, { useState, useEffect } from "react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    title: "Client Reviews | What Tampa Bay Homeowners Say About Revitalize Real Estate",
    meta: [
      {
        name: "description",
        content:
          "Read 127+ verified reviews from Tampa Bay homeowners. See why Revitalize Real Estate is trusted for kitchen remodeling, bathroom renovations, flooring, and real estate services. 5-star rated.",
      },
    ],
  }),
  component: Reviews,
});

const reviewsData = [
  {
    author: "David R.",
    location: "Tampa, FL",
    title: "A Kitchen Transformation Beyond Expectations",
    rating: 5,
    text: "Revitalize Real Estate completely rebuilt my outdated Tampa kitchen, and the results are stunning. They handled everything—drywall, flooring, custom cabinetry, and even coordinated plumbing seamlessly. Their team showed up on time every day, stayed on budget, and kept the worksite surprisingly clean. I finally have the kitchen I've always dreamed of. Highly recommend!"
  },
  {
    author: "Lisa M.",
    location: "Clearwater, FL",
    title: "Real Pros Who Delivered Excellence",
    rating: 5,
    text: "From framing to final paint, everything was clean and permitted correctly. I loved that they offered video meetings during the planning phase—it saved us so much time and made the process incredibly convenient. The craftsmanship is on a completely different level. Revitalize Real Estate is the definition of professional."
  },
  {
    author: "Marcus T.",
    location: "St. Petersburg, FL",
    title: "A Bathroom Remodel That Feels Like a Spa",
    rating: 5,
    text: "We hired Revitalize Real Estate for a full bathroom remodel, and the results exceeded every expectation. The attention to detail in the tile work, the premium fixtures, and the flawless finish made our master bath feel like a luxury spa. Their project manager kept us informed every single day. This is the quality you hope for but rarely find."
  },
  {
    author: "Elena P.",
    location: "Tampa, FL",
    title: "No Hidden Fees—Exactly What Was Quoted",
    rating: 5,
    text: "I was skeptical about remodeling our master bath, but Revitalize Real Estate made it stress-free. Their estimate process was surprisingly accurate. The final invoice matched the initial quote almost perfectly—no hidden fees, no surprise costs. They delivered premium quality with integrity. We couldn't be happier."
  },
  {
    author: "Robert W.",
    location: "Wesley Chapel, FL",
    title: "They Navigated Permitting Like Pros",
    rating: 5,
    text: "We hired Revitalize Real Estate for a commercial build-out for our new retail space in Wesley Chapel, and they were incredible. They navigated the city permitting process like seasoned experts and got us open on time. Their team was professional, efficient, and communicative. Highly recommend for any construction need!"
  },
  {
    author: "Amanda C.",
    location: "Riverview, FL",
    title: "A Whole-Home Transformation",
    rating: 5,
    text: "I was nervous about undertaking a whole-home improvement project, but their project manager kept me informed every single day. The transformation is breathtaking—every room feels brand new. From the kitchen to the bathrooms to the flooring, the craftsmanship is impeccable. I finally love coming home."
  },
  {
    author: "Sarah & Mark T.",
    location: "Brandon, FL",
    title: "Professional Cleaning That Sold Our House in 8 Hours",
    rating: 5,
    text: "We had our house on the market for months with no offers. Revitalize Real Estate came in for a professional deep clean and some minor touch-ups, and we had an offer in just 8 hours. The difference was night and day. They made our house look like a million bucks. I can't thank them enough!"
  },
  {
    author: "Jennifer K.",
    location: "Lutz, FL",
    title: "Affordable, Honest, and Incredibly Detailed",
    rating: 5,
    text: "Love this company! They are very honest, professional, and incredibly detailed. Their prices are very affordable. They made our house look like a million dollars, and after they finished the job, we wanted to keep the house instead of selling it. We really love their work and highly recommend them."
  },
  {
    author: "Michael & Laura D.",
    location: "Odessa, FL",
    title: "From Vision to Reality—Flawlessly Executed",
    rating: 5,
    text: "We had a very specific vision for our kitchen remodel, and Revitalize Real Estate brought it to life flawlessly. They listened to everything we wanted, offered expert suggestions, and delivered a result that exceeded our dreams. The custom cabinetry and premium counters are showstoppers. Thank you!"
  },
  {
    author: "Ryan & Jessica P.",
    location: "Land O' Lakes, FL",
    title: "Expert Guidance for First-Time Home Sellers",
    rating: 5,
    text: "As first-time home sellers, we were overwhelmed. Revitalize Real Estate guided us through the entire process—from pre-listing improvements to staging advice. They helped us prepare our home to sell for top dollar, and we couldn't be happier with the result. Their expertise is unmatched."
  },
  {
    author: "Cynthia R.",
    location: "Zephyrhills, FL",
    title: "Quality Work, Respectful Team",
    rating: 5,
    text: "Their team was incredibly respectful of our home and family during the renovation. They worked efficiently, kept the noise to a minimum, and cleaned up every day before leaving. The quality of their work is outstanding. I would hire them again in a heartbeat for any future project."
  },
  {
    author: "Tom & Diane S.",
    location: "Plant City, FL",
    title: "Premium Cabinet Design That Transformed Our Kitchen",
    rating: 5,
    text: "We chose Revitalize Real Estate for premium cabinet sales and custom design, and the results are phenomenal. The custom cabinetry is beautiful, functional, and perfectly fits our space. The entire process was seamless, from the design consultation to the final installation. Highly recommend their cabinet services!"
  },
  {
    author: "Karen & James W.",
    location: "Apollo Beach, FL",
    title: "An Investment That Increased Our Home's Value",
    rating: 5,
    text: "We hired Revitalize Real Estate for a bathroom remodel and flooring installation before selling our home. The investment paid off—we received multiple offers above asking price within days. Their work added incredible value to our property. They are our go-to team for any future home projects."
  }
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

function Reviews() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Revitalize Real Estate",
    "image": "https://revitalizeretampa.com/logo.png",
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
    "review": reviewsData.map((r) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.author
      },
      "reviewBody": r.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating.toString()
      }
    }))
  };

  const renderStars = (count: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(count)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-copper text-copper" />
        ))}
      </div>
    );
  };

  return (
    <main className="bg-background overflow-x-hidden font-sans">
      {/* Dynamic injection of JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* 1. Page Hero Section */}
      <PageHero
        title="Client Reviews"
        subtitle="Trusted by 127+ Homeowners Across the Tampa Bay Area"
      />

      {/* 2. Overview & Split Layout */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-10 max-w-[1400px] mx-auto">
        {/* Intro Banner */}
        <div className={`mb-12 bg-gradient-brand-light p-8 md:p-10 rounded-2xl border border-charcoal/5 flex flex-col lg:flex-row gap-8 items-center justify-between transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
              <Sparkles className="h-3.5 w-3.5 text-copper" />
              Our Reputation
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal font-serif mb-4">
              Trusted by Tampa Bay Homeowners
            </h2>
            <p className="text-charcoal-soft/80 text-base font-medium leading-relaxed">
              At Revitalize Real Estate, our reputation is built on the satisfaction of our clients. With over 127+ Google Reviews and an unwavering 5-star rating, we take pride in delivering exceptional craftsmanship and transparent communication. Read what your neighbors are saying about their experience remodeling, improving, and selling their homes with us.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-2xl border border-[#efe5da] shadow-sm text-center shrink-0 w-full sm:w-auto min-w-[240px]">
            <span className="text-5xl font-black text-charcoal font-serif">5.0</span>
            <div className="flex items-center gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-copper text-copper" />
              ))}
            </div>
            <span className="text-xs uppercase tracking-wider font-extrabold text-charcoal-soft">
              127+ Google Reviews
            </span>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Main Feed: 13 Reviews */}
          <div className="w-full lg:w-[68%] order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviewsData.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-[#efe5da] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-copper/25 flex flex-col justify-between"
                >
                  <div>
                    {/* Stars and Location */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      {renderStars(item.rating)}
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-charcoal-soft/70 bg-[#faf8f6] border border-charcoal/5 px-2.5 py-1 rounded-full">
                        <MapPin className="w-3 h-3 text-copper" />
                        {item.location}
                      </span>
                    </div>

                    {/* Review Title */}
                    <h3 className="font-bold text-charcoal text-lg mb-3 font-serif line-clamp-2 group-hover:text-copper transition-colors duration-200">
                      "{item.title}"
                    </h3>

                    {/* Review Body */}
                    <p className="text-charcoal-soft/85 text-sm leading-relaxed font-medium mb-6">
                      {item.text}
                    </p>
                  </div>

                  {/* Author Signature */}
                  <div className="border-t border-[#efe5da]/60 pt-4 flex items-center justify-between">
                    <span className="text-xs font-extrabold text-charcoal uppercase tracking-wider">
                      — {item.author}
                    </span>
                    <Quote className="w-8 h-8 text-[#efe5da]/40 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Join Callout */}
            <div className="mt-12 bg-charcoal text-white p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-copper/10 blur-[90px] rounded-full pointer-events-none" />
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-copper/35 bg-copper/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
                  <ShieldCheck className="h-3.5 w-3.5 text-copper" />
                  Join Our Happy Clients
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-4 text-white">
                  Ready to Revitalize Your Home?
                </h3>
                <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed mb-8">
                  These are just a few of the 127+ satisfied homeowners who have trusted Revitalize Real Estate with their homes. Whether you're planning a kitchen remodel, bathroom renovation, flooring upgrade, or preparing to sell, we're here to deliver exceptional results.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-copper hover:bg-copper-deep text-white font-bold text-xs shadow-lg shadow-copper/25 transition-all duration-300 hover:scale-[1.02]"
                  >
                    Get Your Free Estimate Today <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-xs transition-all duration-300 hover:scale-[1.02]"
                  >
                    Read All 127+ Google Reviews <ExternalLink className="w-3.5 h-3.5 text-copper" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Highlight Box: Sticky */}
          <div className="w-full lg:w-[32%] lg:sticky lg:top-28 order-1 lg:order-2 space-y-6">
            
            {/* Rating Summary Card */}
            <div className="bg-[#faf8f6] border border-[#efe5da] p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-charcoal mb-6 font-serif border-b border-[#efe5da]/60 pb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-copper" />
                Review Highlights
              </h3>
              
              <div className="space-y-5">
                {/* Stat item */}
                <div className="flex items-center justify-between pb-3 border-b border-[#efe5da]/30">
                  <span className="text-xs font-bold text-charcoal-soft">Total Reviews</span>
                  <span className="text-sm font-black text-charcoal bg-white border border-[#efe5da] px-3 py-1 rounded-full">
                    127+ Verified
                  </span>
                </div>
                {/* Stat item */}
                <div className="flex items-center justify-between pb-3 border-b border-[#efe5da]/30">
                  <span className="text-xs font-bold text-charcoal-soft">Average Rating</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-charcoal">5.0 / 5.0</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-copper text-copper" />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Stat item */}
                <div className="flex flex-col gap-2 pb-3 border-b border-[#efe5da]/30">
                  <span className="text-xs font-bold text-charcoal-soft">Top Locations</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Tampa", "Clearwater", "St. Pete", "Brandon"].map((loc) => (
                      <span key={loc} className="text-[10px] font-bold text-charcoal bg-white border border-charcoal/5 px-2.5 py-1 rounded-full">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Stat item */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-charcoal-soft">Top Services</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Kitchen Remodeling", "Bathroom Renovation", "Real Estate Prep"].map((srv) => (
                      <span key={srv} className="text-[10px] font-bold text-charcoal bg-white border border-charcoal/5 px-2.5 py-1 rounded-full">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Contact Info */}
            <div className="bg-gradient-brand bg-background text-white p-6 md:p-8 rounded-2xl border border-charcoal/5 shadow-md">
              <h4 className="text-sm font-bold text-copper uppercase tracking-wider mb-4">Have a Project in Mind?</h4>
              <div className="space-y-4">
                <a href="tel:8139456736" className="flex items-center gap-3 text-white/90 hover:text-white hover:underline transition">
                  <div className="bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center text-copper shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-white/40 leading-none mb-0.5">Call or Text</p>
                    <span className="font-bold text-sm">(813) 945-6736</span>
                  </div>
                </a>
                <a href="mailto:revitalizerealestate@gmail.com" className="flex items-center gap-3 text-white/90 hover:text-white hover:underline transition">
                  <div className="bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center text-copper shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-white/40 leading-none mb-0.5">Email</p>
                    <span className="font-bold text-sm break-all">revitalizerealestate@gmail.com</span>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center text-copper shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-white/40 leading-none mb-0.5">Website</p>
                    <span className="font-bold text-sm">revitalizeretampa.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service Areas Block */}
      <section className="relative py-20 bg-[#faf8f6] border-t border-[#efe5da]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal font-serif mb-4">
              Proudly Serving Tampa Bay
            </h3>
            <p className="text-sm text-charcoal-soft/80 font-medium">
              We serve residential clients with a 50-mile radius from our base in Tampa, FL 33647:
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {servingCities.map((city, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 bg-white border border-[#efe5da] px-4 py-2 rounded-full text-xs font-semibold text-charcoal transition-all duration-300 hover:border-copper/45 hover:shadow-sm hover:scale-[1.03]"
              >
                <MapPin className="w-3.5 h-3.5 text-copper shrink-0" />
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
