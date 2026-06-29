import { createFileRoute } from "@tanstack/react-router";
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
  Facebook,
  Instagram,
  Youtube,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
  HelpCircle
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    title: "Contact Us | Revitalize Real Estate – Tampa Bay's Trusted Home Improvement Experts",
    meta: [
      {
        name: "description",
        content:
          "Reach out to Revitalize Real Estate for expert home improvement, remodeling, and real estate services in Tampa Bay. Call (813) 945-6736, email, or request a free estimate today. Serving within 50 miles.",
      },
    ],
  }),
  component: ContactPage,
});

const whyUsBenefits = [
  {
    icon: CircleDollarSign,
    title: "Free Estimates",
    desc: "Clear, no-obligation pricing from the start",
  },
  {
    icon: Home,
    title: "Residential Specialists",
    desc: "We focus only on homes—no commercial work",
  },
  {
    icon: Clock,
    title: "20+ Years Experience",
    desc: "Veteran builders with proven expertise",
  },
  {
    icon: MapPin,
    title: "Local & Trusted",
    desc: "Proudly serving Tampa Bay for over two decades",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent Process",
    desc: "Informed at every step, no surprises",
  },
  {
    icon: Star,
    title: "5-Star Reputation",
    desc: "127+ verified Google reviews",
  },
];

const serviceCitiesDistances = [
  { city: "Tampa, FL 33647", distance: "Primary Location" },
  { city: "Wesley Chapel", distance: "~15 miles" },
  { city: "Brandon", distance: "~12 miles" },
  { city: "St. Petersburg", distance: "~25 miles" },
  { city: "Clearwater", distance: "~23 miles" },
  { city: "Lutz", distance: "~12 miles" },
  { city: "Odessa", distance: "~18 miles" },
  { city: "Land O' Lakes", distance: "~16 miles" },
  { city: "Zephyrhills", distance: "~28 miles" },
  { city: "Plant City", distance: "~25 miles" },
  { city: "Riverview", distance: "~14 miles" },
  { city: "Apollo Beach", distance: "~18 miles" },
  { city: "Valrico", distance: "~15 miles" },
  { city: "Lithia", distance: "~18 miles" },
  { city: "Thonotosassa", distance: "~8 miles" },
];

const faqsData = [
  {
    question: "Do you serve areas outside of Tampa?",
    answer: "Yes! We proudly serve residential clients within a 50-mile radius of Tampa, FL 33647, including Wesley Chapel, Brandon, St. Petersburg, Clearwater, and many more surrounding cities."
  },
  {
    question: "How quickly can I get a response?",
    answer: "We typically respond to all online inquiries within 24 hours. For urgent matters, feel free to call or text us directly at (813) 945-6736."
  },
  {
    question: "Are your estimates really free?",
    answer: "Absolutely. We offer 100% free, no-obligation on-site consultations and detailed estimates to help you plan your project with confidence."
  },
  {
    question: "How do I prepare for an on-site consultation?",
    answer: "Simply share your project vision, rough budget range, and desired timeline with us. We'll handle everything else—including measurements, material planning, and providing expert design recommendations."
  },
  {
    question: "Do you handle both real estate and home improvements?",
    answer: "Yes! We specialize in preparing homes for the market with targeted pre-listing home improvements that maximize your property's value and appeal to prospective buyers, alongside traditional full-scale remodeling."
  }
];

function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Residential Remodeling");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Captcha State
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const generateCaptcha = () => {
    setCaptchaNum1(Math.floor(Math.random() * 9) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 9) + 1);
    setCaptchaAnswer("");
  };

  useEffect(() => {
    generateCaptcha();
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast.error("Please fill in all required fields (Name, Email, and Phone Number).");
      return;
    }

    if (parseInt(captchaAnswer) !== captchaNum1 + captchaNum2) {
      toast.error("Incorrect captcha. Please solve the math problem correctly.");
      return;
    }
    
    setIsSubmitting(true);
    
    const emailTo = "revitalizerealestate@gmail.com";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailTo}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Estimate Request: ${name} - ${service}`,
          _cc: "jitenksony@gmail.com",
          _captcha: "false",
          name,
          email,
          phone,
          service,
          address: address || "Not provided",
          message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setShowPopup(true);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setMessage("");
        setService("Residential Remodeling");
        generateCaptcha();
      } else {
        throw new Error(result.message || "Failed to submit form.");
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error("Failed to submit form. Please try again.");
      generateCaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.139152",
      "longitude": "-82.346826"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "areaServed": [
      { "@type": "City", "name": "Wesley Chapel" },
      { "@type": "City", "name": "Brandon" },
      { "@type": "City", "name": "St. Petersburg" },
      { "@type": "City", "name": "Clearwater" }
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Check, Financing",
    "hasMap": "https://maps.google.com/?q=Tampa+FL+33647"
  };

  return (
    <main className="bg-background overflow-x-hidden font-sans">
      {/* JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* 1. Page Hero Section */}
      <PageHero
        title="Contact Us"
        subtitle="Tampa Bay's Trusted Home Improvement & Real Estate Experts"
      />

      {/* 2. Main Content Wrapper */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Main Column: Form & General Content */}
          <div className="w-full lg:w-[68%] space-y-12">
            
            {/* Header intro card */}
            <div className={`bg-gradient-brand-light p-8 md:p-10 rounded-2xl border border-charcoal/5 transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
              <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-4 text-copper">
                <Sparkles className="h-3.5 w-3.5 text-copper" />
                Let's Partner Up
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal font-serif mb-4 leading-tight">
                Let's Start Your Next Project Together
              </h2>
              <p className="text-charcoal-soft/85 text-base font-medium leading-relaxed">
                Whether you're planning a kitchen remodel, bathroom renovation, flooring upgrade, or preparing to sell your home, the team at Revitalize Real Estate is here to help. We're committed to making the process simple, transparent, and stress-free. Reach out today—no obligation, just expert guidance.
              </p>
            </div>

            {/* Form Section */}
            <div className="bg-white border border-[#efe5da] p-8 md:p-10 rounded-2xl shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-charcoal font-serif mb-3">
                Request Your Free On-Site Estimate
              </h3>
              <p className="text-charcoal-soft/70 text-sm font-medium mb-8 leading-relaxed">
                Fill out the form below, and we'll get back to you within 24 hours to schedule your consultation. Our estimates are clear, transparent, and completely free.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col">
                    <label htmlFor="fullName" className="text-xs font-extrabold uppercase tracking-wider text-charcoal mb-2">
                      Full Name <span className="text-copper font-bold">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. David Richardson"
                      className="bg-[#faf8f6] border border-[#efe5da] px-4 py-3 rounded-lg text-charcoal placeholder-charcoal/30 text-sm focus:outline-none focus:border-copper transition"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-extrabold uppercase tracking-wider text-charcoal mb-2">
                      Email Address <span className="text-copper font-bold">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. david@gmail.com"
                      className="bg-[#faf8f6] border border-[#efe5da] px-4 py-3 rounded-lg text-charcoal placeholder-charcoal/30 text-sm focus:outline-none focus:border-copper transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-xs font-extrabold uppercase tracking-wider text-charcoal mb-2">
                      Phone Number <span className="text-copper font-bold">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. (813) 945-6736"
                      className="bg-[#faf8f6] border border-[#efe5da] px-4 py-3 rounded-lg text-charcoal placeholder-charcoal/30 text-sm focus:outline-none focus:border-copper transition"
                    />
                  </div>

                  {/* Select a Service */}
                  <div className="flex flex-col">
                    <label htmlFor="service" className="text-xs font-extrabold uppercase tracking-wider text-charcoal mb-2">
                      Select a Service <span className="text-copper font-bold">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-[#faf8f6] border border-[#efe5da] px-4 py-3 rounded-lg text-charcoal text-sm focus:outline-none focus:border-copper transition appearance-none cursor-pointer"
                      >
                        <option value="Residential Remodeling">Residential Remodeling</option>
                        <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                        <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                        <option value="Floor, Pavers & Carpentry">Floor, Pavers & Carpentry</option>
                        <option value="Real Estate Services">Real Estate Services</option>
                        <option value="Professional Cleaning Services">Professional Cleaning Services</option>
                        <option value="Premium Cabinet Sales & Custom Design">Premium Cabinet Sales & Custom Design</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal pointer-events-none opacity-60" />
                    </div>
                  </div>
                </div>

                {/* Project Address */}
                <div className="flex flex-col">
                  <label htmlFor="address" className="text-xs font-extrabold uppercase tracking-wider text-charcoal mb-2">
                    Project Address <span className="text-charcoal-soft/50 text-[10px] font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. 123 Main St, Wesley Chapel, FL"
                    className="bg-[#faf8f6] border border-[#efe5da] px-4 py-3 rounded-lg text-charcoal placeholder-charcoal/30 text-sm focus:outline-none focus:border-copper transition"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs font-extrabold uppercase tracking-wider text-charcoal mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project, timeline, or budget..."
                    className="bg-[#faf8f6] border border-[#efe5da] px-4 py-3 rounded-lg text-charcoal placeholder-charcoal/30 text-sm focus:outline-none focus:border-copper transition resize-y"
                  />
                </div>

                {/* Captcha challenge */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  <div className="text-charcoal text-xs font-extrabold uppercase tracking-wider mb-2 text-left">
                    Prove you are human: What is <span className="text-copper font-bold">{captchaNum1} + {captchaNum2}</span>?
                  </div>
                  <input
                    type="number"
                    required
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    placeholder="Enter Answer"
                    className="bg-[#faf8f6] border border-[#efe5da] px-4 py-3 rounded-lg text-charcoal placeholder-charcoal/30 text-sm focus:outline-none focus:border-copper transition"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-copper hover:bg-copper-deep disabled:bg-copper/60 transition text-white font-bold text-sm shadow-lg shadow-copper/25"
                >
                  {isSubmitting ? "Sending..." : "Send Now"} <Send className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Why Contact Us Section */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-charcoal font-serif flex items-center gap-2">
                <Award className="w-5 h-5 text-copper" /> Why Contact Us?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {whyUsBenefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="group bg-[#faf8f6] border border-[#efe5da] p-6 rounded-2xl transition-all duration-300 hover:border-copper/30 hover:shadow-sm"
                  >
                    <div className="bg-copper/5 group-hover:bg-copper/10 w-11 h-11 rounded-xl flex items-center justify-center text-copper mb-4 border border-copper/10">
                      <benefit.icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <h4 className="font-bold text-charcoal text-sm mb-1.5">{benefit.title}</h4>
                    <p className="text-charcoal-soft/80 text-xs leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Service Areas */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-charcoal font-serif flex items-center gap-2">
                <MapPin className="w-5 h-5 text-copper" /> Service Area – We Build Across Tampa Bay
              </h3>
              <p className="text-sm text-charcoal-soft/85 leading-relaxed font-medium">
                We proudly serve residential clients within a 50-mile radius of Tampa, FL 33647. Our team is available in the following cities and communities:
              </p>

              {/* Distances Table */}
              <div className="overflow-x-auto border border-[#efe5da] rounded-xl">
                <table className="min-w-full divide-y divide-[#efe5da]">
                  <thead className="bg-[#faf8f6]">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">
                        City / Location
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-extrabold text-charcoal uppercase tracking-wider">
                        Distance from Tampa (33647)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-[#efe5da]/60">
                    {serviceCitiesDistances.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#faf8f6]/50 transition-colors">
                        <td className="px-6 py-3.5 whitespace-nowrap text-sm font-semibold text-charcoal">
                          {item.city}
                        </td>
                        <td className="px-6 py-3.5 whitespace-nowrap text-sm font-medium text-charcoal-soft">
                          {item.distance}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-charcoal-soft/60 italic font-medium">
                Don't see your city listed above? Contact us anyway—we may still be able to help with your project!
              </p>
            </div>

            {/* FAQ Section Accordion */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-charcoal font-serif flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-copper" /> Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {faqsData.map((faq, idx) => {
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
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-copper shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-charcoal/50 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 py-4 text-sm text-charcoal-soft/85 leading-relaxed font-medium bg-white border-t border-[#efe5da]/60">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar Area: Contact Details Table & Highlights */}
          <div className="w-full lg:w-[32%] lg:sticky lg:top-28 space-y-6">
            
            {/* Contact Options Summary Box */}
            <div className="bg-[#faf8f6] border border-[#efe5da] p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-charcoal mb-6 font-serif border-b border-[#efe5da]/60 pb-3">
                Contact Options
              </h3>

              <div className="space-y-4">
                {/* Option */}
                <div className="pb-3 border-b border-[#efe5da]/30 flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-charcoal-soft">📞 Phone</span>
                  <a href="tel:8139456736" className="text-sm font-bold text-charcoal hover:text-copper hover:underline transition">
                    (813) 945-6736
                  </a>
                </div>
                {/* Option */}
                <div className="pb-3 border-b border-[#efe5da]/30 flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-charcoal-soft">📧 Email</span>
                  <a href="mailto:revitalizerealestate@gmail.com" className="text-sm font-bold text-charcoal hover:text-copper hover:underline transition break-all">
                    revitalizerealestate@gmail.com
                  </a>
                </div>
                {/* Option */}
                <div className="pb-3 border-b border-[#efe5da]/30 flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-charcoal-soft">📍 Location</span>
                  <span className="text-sm font-bold text-charcoal">
                    Tampa Bay, FL & Surrounding
                  </span>
                </div>
                {/* Option */}
                <div className="pb-3 border-b border-[#efe5da]/30 flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-charcoal-soft">💬 Response Time</span>
                  <span className="text-sm font-bold text-charcoal">
                    Within 24 hours
                  </span>
                </div>
                {/* Option */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-charcoal-soft">💰 Consultation</span>
                  <span className="text-sm font-bold text-charcoal">
                    Free On-Site Estimate
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contact Details Block */}
            <div className="bg-gradient-brand bg-background text-white p-6 md:p-8 rounded-2xl border border-charcoal/5 shadow-md space-y-6">
              <h3 className="text-lg font-bold font-serif border-b border-white/10 pb-3">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center text-copper shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-extrabold uppercase tracking-wider text-white/40 mb-0.5">Phone & Text</h5>
                    <p className="text-xs text-white/80 leading-relaxed font-medium mb-1">We respond quickly to answer questions or schedule your free consultation.</p>
                    <a href="tel:8139456736" className="font-bold text-sm text-white hover:underline">(813) 945-6736</a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center text-copper shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-extrabold uppercase tracking-wider text-white/40 mb-0.5">Email</h5>
                    <p className="text-xs text-white/80 leading-relaxed font-medium mb-1">Send us your project details, and we'll reply within 24 hours.</p>
                    <a href="mailto:revitalizerealestate@gmail.com" className="font-bold text-sm text-white hover:underline break-all">revitalizerealestate@gmail.com</a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center text-copper shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-extrabold uppercase tracking-wider text-white/40 mb-0.5">Visit Us</h5>
                    <p className="text-xs text-white/80 leading-relaxed font-medium mb-1">We come to you! All consultations and estimates are done on-site at your home.</p>
                    <span className="font-bold text-sm text-white">Tampa Bay, FL & Surrounding Areas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Block */}
            <div className="bg-white border border-[#efe5da] p-6 rounded-2xl shadow-sm text-center">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-charcoal mb-4">Follow Us</h4>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#faf8f6] hover:bg-copper hover:text-white transition duration-200 border border-charcoal/5"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#faf8f6] hover:bg-copper hover:text-white transition duration-200 border border-charcoal/5"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#faf8f6] hover:bg-copper hover:text-white transition duration-200 border border-charcoal/5"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Google"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#faf8f6] hover:bg-copper hover:text-white transition duration-200 border border-charcoal/5 font-extrabold text-xs"
                >
                  G
                </a>
                <a
                  href="#"
                  aria-label="Houzz"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#faf8f6] hover:bg-copper hover:text-white transition duration-200 border border-charcoal/5 font-extrabold text-xs"
                >
                  H
                </a>
              </div>
            </div>

            {/* Commitments Box */}
            <div className="bg-[#faf8f6] border border-[#efe5da] p-6 md:p-8 rounded-2xl shadow-sm space-y-5">
              <h3 className="text-base font-bold text-charcoal mb-2 font-serif border-b border-[#efe5da]/65 pb-2">
                Our Commitment to You
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-charcoal">Honest Communication</p>
                    <p className="text-charcoal-soft/75 font-medium mt-0.5">No hidden fees, no surprises.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-charcoal">Quality Craftsmanship</p>
                    <p className="text-charcoal-soft/75 font-medium mt-0.5">Built to last, built to impress.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-charcoal">Respect for Your Home</p>
                    <p className="text-charcoal-soft/75 font-medium mt-0.5">Clean, careful, and professional.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-charcoal">Client Satisfaction</p>
                    <p className="text-charcoal-soft/75 font-medium mt-0.5">Your happiness is our success.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Banner Card */}
      <section className="relative py-16 px-4 bg-gradient-brand bg-background text-white text-center mx-[15px] mb-[15px] rounded-2xl border border-white/5 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-copper/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-serif">
            Ready to Revitalize Your Home?
          </h3>
          <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed">
            Don't wait to create the home you deserve. Contact us today and let's start planning your project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="tel:8139456736" className="inline-flex items-center gap-2 bg-copper hover:bg-copper-deep text-white px-7 py-3.5 rounded-full font-bold text-xs shadow-md transition-all hover:scale-[1.03]">
              <Phone className="w-3.5 h-3.5" /> Call or Text (813) 945-6736
            </a>
            <a href="mailto:revitalizerealestate@gmail.com" className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white px-7 py-3.5 rounded-full font-bold text-xs transition-all hover:scale-[1.03]">
              <Mail className="w-3.5 h-3.5 text-copper" /> revitalizerealestate@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Success Modal Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" 
            onClick={() => setShowPopup(false)}
          />
          <div 
            className="relative bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border border-charcoal/10 text-center transform scale-100 transition-all duration-300 z-10"
            style={{
              boxShadow: "0 24px 70px rgba(0,0,0,0.35)",
            }}
          >
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-3 font-serif">
              Estimate Request Submitted!
            </h3>
            <p className="text-charcoal-soft font-sans font-medium text-base mb-8">
              Your request has been successfully submitted. Our team will review it and contact you within 24 hours to schedule your consultation.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full py-3.5 px-6 rounded-full text-white font-bold text-base transition-all hover:opacity-90 shadow-lg shadow-copper/20 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #D69873 0%, #975033 100%)",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
