import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Facebook,
  Instagram,
  Linkedin,
  Video,
  Upload,
  ArrowRight,
  Clock,
  CreditCard,
  Search,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  Building2,
  MessageSquare,
  FileText,
  Sparkles,
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    title: "Contact Us – Revitalize Real Estate | Free Video Consult & Quote",
    meta: [
      {
        name: "description",
        content:
          "Contact Revitalize Real Estate in Tampa, FL. Free video meetings, file uploads, financing options, and fast quotes. Licensed & Insured. Call (813) 945-6736 or reach out online.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="bg-[#F8FAFC] overflow-x-hidden">
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20 m-[15px] rounded-[10px]">
        <div className="absolute inset-0">
          <img
            src="/quote-bg.jpg"
            alt="Contact background"
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/60 to-[#F8FAFC]" />
        </div>

        <div
          className={`relative z-10 max-w-5xl mx-auto px-4 text-center transition-all duration-1000 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">
              Connect With Our Team
            </span>
          </div>

          <h1
            className="font-black text-white mb-6 leading-tight uppercase tracking-tight"
            style={{ fontSize: "45px" }}
          >
            Let's Talk About <span className="text-brand-orange">Your Project</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Whether you're ready to start or just exploring ideas, we're here to help. Schedule a
            free video meeting, upload your plans, or give us a call. Licensed, insured, and bonded
            — <span className="text-white font-bold">Licensed & Insured</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8139456736"
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl shadow-brand-orange/20"
            >
              Call Now (813) 945-6736 <ArrowRight className="w-5 h-5" />
            </a>
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all">
              <Video className="w-5 h-5" /> Schedule Video Meeting
            </button>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Section (Two Column) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Contact Information */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-charcoal p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-10 text-brand-orange">Reach Us Directly</h2>

                <div className="space-y-10">
                  <div className="flex items-start gap-5">
                    <div className="bg-brand-orange/20 p-4 rounded-2xl">
                      <Phone className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">
                        Phone
                      </h4>
                      <p className="text-xl font-bold">(813) 945-6736</p>
                      <p className="text-sm text-white/60 mt-1">Mon–Sat | 8am – 5pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-brand-orange/20 p-4 rounded-2xl">
                      <Mail className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">
                        Email
                      </h4>
                      <p className="text-xl font-bold underline decoration-brand-orange underline-offset-4 tracking-tight">
                        info@revitalizerealestate.com
                      </p>
                      <p className="text-sm text-white/60 mt-1">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-brand-orange/20 p-4 rounded-2xl">
                      <MapPin className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">
                        Address
                      </h4>
                      <p className="text-lg font-bold leading-relaxed">
                        4960 S Gilbert Rd #1
                        <br />
                        Tampa, Florida
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-brand-orange/20 p-4 rounded-2xl">
                      <ShieldCheck className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">
                        ROC License
                      </h4>
                      <p className="text-lg font-bold">#328501</p>
                      <p className="text-sm text-white/60 mt-1">Licensed, Insured, Bonded</p>
                    </div>
                  </div>
                </div>

                <div className="pt-12 mt-12 border-t border-white/10">
                  <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
                    Service Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Phoenix",
                      "Scottsdale",
                      "Mesa",
                      "Chandler",
                      "Glendale",
                      "Tempe",
                      "Gilbert",
                    ].map((area) => (
                      <span
                        key={area}
                        className="text-[11px] font-black uppercase tracking-tighter bg-white/5 px-3 py-1 rounded-full border border-white/10"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-12 mt-12 border-t border-white/10">
                  <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
                    Follow Us
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="bg-white/5 hover:bg-brand-orange p-4 rounded-2xl transition-all"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-white/5 hover:bg-brand-orange p-4 rounded-2xl transition-all"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-white/5 hover:bg-brand-orange p-4 rounded-2xl transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
              <h2 className="text-4xl font-black text-charcoal mb-4">Send Us a Message</h2>
              <p className="text-gray-500 mb-12 font-medium">
                Have a specific request? Our team is standing by to help.
              </p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="(813) 945-6736"
                    className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                    Service Needed
                  </label>
                  <select className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none appearance-none cursor-pointer">
                    <option>Select Service...</option>
                    <option>Residential Construction</option>
                    <option>Commercial Construction</option>
                    <option>Kitchen Remodeling</option>
                    <option>Bathroom Remodeling</option>
                    <option>Roofing Services</option>
                    <option>Flooring Installation</option>
                    <option>Painting (Interior/Exterior)</option>
                    <option>Concrete Work</option>
                    <option>Framing</option>
                    <option>Drywall Installation & Repair</option>
                    <option>Electrical/Plumbing Coordination</option>
                    <option>Exterior Improvements</option>
                    <option>Custom Project</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                    Project Address (City)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tampa, FL"
                    className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                    Preferred Contact Method
                  </label>
                  <select className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none appearance-none cursor-pointer">
                    <option>Phone</option>
                    <option>Email</option>
                    <option>Text Message</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                    Preferred Meeting Type
                  </label>
                  <select className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none appearance-none cursor-pointer">
                    <option>Video Meeting</option>
                    <option>In-Person Consultation</option>
                    <option>Phone Call Only</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                    Message / Project Details *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us more about your project goals, timeline, and budget..."
                    className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-3xl px-6 py-4 font-bold text-charcoal transition-all outline-none resize-none"
                    required
                  ></textarea>
                </div>

                {/* Checkboxes */}
                <div className="md:col-span-2 space-y-4 pt-4">
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-6 h-6 bg-gray-100 border-2 border-gray-200 rounded-lg peer-checked:bg-brand-orange peer-checked:border-brand-orange transition-all" />
                      <CheckCircle2 className="w-4 h-4 text-white absolute inset-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-sm font-bold text-gray-600 group-hover:text-charcoal transition-colors">
                      I'm interested in financing options
                    </span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-6 h-6 bg-gray-100 border-2 border-gray-200 rounded-lg peer-checked:bg-brand-orange peer-checked:border-brand-orange transition-all" />
                      <CheckCircle2 className="w-4 h-4 text-white absolute inset-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-sm font-bold text-gray-600 group-hover:text-charcoal transition-colors">
                      Send me supplier/material information
                    </span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-6 h-6 bg-gray-100 border-2 border-gray-200 rounded-lg peer-checked:bg-brand-orange peer-checked:border-brand-orange transition-all" />
                      <CheckCircle2 className="w-4 h-4 text-white absolute inset-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-sm font-bold text-gray-600 group-hover:text-charcoal transition-colors font-black">
                      I'd like an AI-assisted estimate
                    </span>
                  </label>
                </div>

                <div className="md:col-span-2 pt-6">
                  <button className="w-full bg-charcoal hover:bg-charcoal/95 text-white px-10 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-blue-900/20 transition-all hover:scale-[1.02] active:scale-95">
                    Submit Request <ArrowRight className="w-6 h-6" />
                  </button>
                  <p className="text-center text-xs text-gray-400 font-bold uppercase tracking-widest mt-6">
                    Note: We'll reply within 24 hours, Monday–Saturday.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Video Meeting Section */}
      <section className="py-20 px-4 md:px-8 mx-[15px] mt-[15px] rounded-[3rem] bg-white relative overflow-hidden border border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="bg-brand-blue-deep/5 p-4 inline-flex rounded-2xl mb-6">
              <Video className="w-8 h-8 text-brand-blue-deep" />
            </div>
            <h2
              className="font-black text-charcoal mb-8 leading-tight"
              style={{ fontSize: "33px" }}
            >
              Prefer a <span className="text-brand-orange">Video Meeting?</span> No Problem.
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed font-medium">
              Can't make it to our Chandler office? No worries. Schedule a free video meeting from
              your phone, tablet, or computer. Share your screen, show us your space, and discuss
              your project — all from home.
            </p>
            <ul className="space-y-6 mb-12">
              {[
                "Walk us through your space via camera",
                "Share blueprints or photos",
                "Get instant feedback on your ideas",
                "Receive a preliminary estimate",
                "Ask about financing and materials",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-800 font-bold">
                  <div className="bg-brand-orange/20 p-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-orange/20">
              Schedule Your Free Video Meeting →
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative z-10">
              <img
                src="/service-2.jpg"
                alt="Video Meeting"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Quote Section */}
      <section className="py-20 px-4 md:px-8 mx-[15px] mt-[15px] rounded-[3rem] bg-charcoal relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Request a <span className="text-brand-orange">Free Quote</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-md">
              Complete this quick form and we'll email you an AI-assisted estimate within 24 hours.
            </p>
          </div>
          <div className="lg:w-1/2">
            <form className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-4">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-white transition-all outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-4">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="email@address.com"
                  className="w-full bg-white/10 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-white transition-all outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-4">
                  Project Type *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kitchen Remodel"
                  className="w-full bg-white/10 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-white transition-all outline-none"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-4">
                  City *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chandler"
                  className="w-full bg-white/10 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-white transition-all outline-none"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-4">
                  Estimated Budget (Optional)
                </label>
                <select className="w-full bg-white/10 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-white transition-all outline-none appearance-none cursor-pointer">
                  <option className="bg-charcoal">$5k–$15k</option>
                  <option className="bg-charcoal">$15k–$50k</option>
                  <option className="bg-charcoal">$50k–$100k</option>
                  <option className="bg-charcoal">$100k+</option>
                </select>
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all hover:scale-[1.02] active:scale-95">
                  Get My Free Quote →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 5. Financing Section */}
      <section className="py-20 px-4 md:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto bg-white p-12 md:p-20 rounded-[4rem] shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-8 leading-tight">
              Flexible <span className="text-brand-orange">Financing</span> Available
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
              Big projects shouldn't be delayed by budget. Ask us about flexible financing options
              for kitchen and bathroom remodeling, roofing replacement, new construction, and more.
            </p>
            <button className="bg-charcoal hover:bg-charcoal/95 text-white px-10 py-5 rounded-full font-black text-lg transition-all shadow-xl shadow-blue-900/10">
              Learn About Financing →
            </button>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              {
                q: "How quickly will you respond?",
                a: "We reply to all inquiries within 24 hours, Monday through Saturday. For urgent matters, call us directly at (813) 945-6736.",
              },
              {
                q: "Do you offer free video consultations?",
                a: "Yes. All video meetings are completely free. Schedule one anytime.",
              },
              {
                q: "Can I upload my own blueprints or photos?",
                a: "Absolutely. Use the upload feature on this page or send files via email. We accept PDF, JPG, PNG, and DWG formats.",
              },
              {
                q: "Do you serve my area?",
                a: "We serve Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Lutz, Wesley Chapel, and surrounding Tampa Bay communities.",
              },
              {
                q: "Are you licensed, insured, and bonded?",
                a: "Yes. Licensed, Insured, & Bonded. Fully licensed, insured, and bonded for your protection.",
              },
              {
                q: "Do you offer financing?",
                a: "Yes. We offer flexible financing options for qualifying projects. Check the box on any form or ask us directly.",
              },
              {
                q: "Can I get an estimate without a site visit?",
                a: "Yes. With a video meeting and file uploads, we can provide an AI-assisted estimate without an in-person visit.",
              },
            ].map((item, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-8 text-left group">
                    <span className="text-lg font-black text-charcoal group-data-[state=open]:text-brand-orange transition-colors">
                      {item.q}
                    </span>
                    <div className="bg-gray-50 p-2 rounded-xl group-data-[state=open]:rotate-180 transition-transform shadow-sm">
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="p-8 pt-0 text-gray-600 font-medium leading-relaxed animate-fade-down">
                  {item.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* 7. Hours & Map Section */}
      <section className="py-20 px-4 md:px-8 mx-[15px] mb-[15px] rounded-[3rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-black text-charcoal mb-8">When to Reach Us</h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="bg-brand-orange/10 p-4 rounded-2xl">
                  <MapPin className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-black text-charcoal mb-1">Office Address</h4>
                  <p className="text-gray-500 font-medium">
                    4960 S Gilbert Rd #1
                    <br />
                    Tampa, Florida
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-brand-orange/10 p-4 rounded-2xl">
                  <Clock className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-black text-charcoal mb-1">Business Hours</h4>
                  <p className="text-gray-500 font-medium">
                    Monday – Saturday: 8:00 AM – 5:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="rounded-[3rem] overflow-hidden bg-gray-100 h-full min-h-[400px] border-4 border-white shadow-2xl relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225625.32832049188!2d-82.68652398539062!3d27.994401912952876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20FL%2C%20USA!5e0!3m2!1sen!2snp!4v1778710566451!5m2!1sen!2snp"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
