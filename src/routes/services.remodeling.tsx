import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import {
  HardHat,
  Ruler,
  Building2,
  CheckCircle2,
  ShieldCheck,
  ClipboardCheck,
  Truck,
  Hammer,
  ArrowRight,
  Video,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Construction,
  Paintbrush,
  Zap,
  Droplets,
  Home,
  Shield,
  Users,
  Clock,
  CreditCard,
  Search,
  Upload,
  Layers,
  Layout,
  Sparkles,
  BadgeCheck,
  Utensils,
  Bath,
  Palette,
  PencilRuler,
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

export const Route = createFileRoute("/services/remodeling")({
  head: () => ({
    title:
      "Professional Remodeling Services – Kitchen, Bathroom & Home Improvements | Revitalize Real Estate",
    meta: [
      {
        name: "description",
        content:
          "Licensed remodeling contractor in Tampa, FL. Kitchen remodeling, bathroom home improvements, whole home makeovers & more. Licensed & Insured. Free video consult & financing available. Call (813) 945-6736.",
      },
    ],
  }),
  component: RemodelingPage,
});

function RemodelingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="bg-[#F8FAFC] overflow-x-hidden">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden m-[15px] rounded-[10px]">
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          <img
            src="/service-2.jpg"
            alt="Remodeling background"
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/60 to-charcoal/90" />
        </div>

        {/* Floating Blueprint Graphics (Decorative) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 border-l border-t border-white/30" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border-r border-b border-white/30" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Content Card */}
        <div
          className={`relative z-10 max-w-5xl mx-auto px-4 transition-all duration-1000 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-16 rounded-[2rem] shadow-2xl text-center">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">
                Premium Arizona Transformations
              </span>
            </div>

            <h1 className="text-[35px] font-black text-white mb-6 leading-tight uppercase tracking-tight">
              Transform Your Space. Transform Your Life. —{" "}
              <span className="text-brand-orange">Arizona Remodeling</span> Experts
            </h1>

            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              From outdated kitchens and cramped bathrooms to complete home transformations, Arizona
              Premiere Construction Group delivers licensed, insured, and bonded remodeling across
              the Valley. <span className="text-white font-bold">Licensed & Insured</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl shadow-brand-orange/20"
              >
                Request a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all"
              >
                <Video className="w-5 h-5" /> Video Meeting
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-brand-orange" />
                <div className="text-left">
                  <div className="text-white font-bold text-sm">Licensed & Insured</div>
                  <div className="text-white/50 text-[10px] uppercase font-bold tracking-tighter">
                    Licensed License
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-brand-orange" />
                <div className="text-left">
                  <div className="text-white font-bold text-sm">Insured • Bonded</div>
                  <div className="text-white/50 text-[10px] uppercase font-bold tracking-tighter">
                    Total Security
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
            Scroll to Explore
          </span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-white relative overflow-hidden">
        {/* Background Blueprint Texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--charcoal) 1px, transparent 1px), linear-gradient(90deg, var(--charcoal) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="/g2.jpg" alt="Kitchen remodel" className="w-full h-full object-cover" />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-10 -right-10 bg-charcoal p-8 rounded-3xl text-white shadow-2xl hidden md:block animate-bounce-slow">
              <span className="text-4xl font-black block mb-1">6+</span>
              <span className="text-xs opacity-60 uppercase font-bold tracking-widest">
                Years Local Exp
              </span>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">
              Remodeling That Respects Your Home
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-8 leading-tight">
              Remodeling That Respects Your Home —{" "}
              <span className="text-brand-blue-deep underline decoration-brand-orange underline-offset-8">
                And Your Budget
              </span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed">
              <p>
                Your home should grow with you. Whether you're dreaming of a chef-inspired kitchen,
                a spa-like bathroom, or a whole-home improvement, Revitalize Real Estate brings over
                six years of local experience to every remodel. We are fully licensed (Licensed &
                Insured), insured, and bonded — so your home and investment are protected.
              </p>
              <p className="font-bold text-charcoal">
                We don't just renovate. We coordinate every detail: demolition, framing, drywall,
                flooring, painting, roofing, and electrical & plumbing coordination. One team. One
                vision. Zero headaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Services Grid */}
      <section className="py-[100px] px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
            What We Transform
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-6">
            Expertise in Every Room
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            Specialized remodeling teams for every corner of your home.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Kitchen Remodeling",
              desc: "Custom cabinetry, countertops, backsplashes, lighting, flooring, and layout changes. From minor updates to complete gut home improvements.",
              icon: <Utensils />,
              image: "/service-1.jpg",
            },
            {
              title: "Bathroom Remodeling",
              desc: "Walk-in showers, soaking tubs, vanities, tile work, lighting, and accessible upgrades. Modernize any bathroom size.",
              icon: <Bath />,
              image: "/service-2.jpg",
            },
            {
              title: "Home Remodeling",
              desc: "Whole-home makeovers, open floor plans, room additions, and structural changes.",
              icon: <Home />,
              image: "/service-3.jpg",
            },
            {
              title: "Interior & Exterior Painting",
              desc: "Fresh colors, professional finishes, and surface preparation for any room or exterior facade.",
              icon: <Paintbrush />,
              image: "/service-4.jpg",
            },
            {
              title: "Flooring Installation",
              desc: "Hardwood, tile, laminate, vinyl, carpet – we install it all with precision.",
              icon: <Layout />,
              image: "/g1.jpg",
            },
            {
              title: "Exterior Improvements",
              desc: "Siding, stucco, decks, patios, and curb appeal upgrades.",
              icon: <Home />,
              image: "/g2.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[2rem] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-60" />
                <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white border border-white/30">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-charcoal mb-4">{item.title}</h3>
                <p className="text-gray-500 mb-8 font-medium leading-relaxed">{item.desc}</p>
                <Link
                  to={
                    [
                      "Interior & Exterior Painting",
                      "Flooring Installation",
                      "Roofing Services",
                    ].includes(item.title)
                      ? "/services/specialty-trade"
                      : "/contact"
                  }
                  className="flex items-center gap-2 text-brand-orange font-bold group-hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-brand-orange group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Detailed Capabilities Section */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-charcoal relative overflow-hidden">
        {/* Background Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="text-left">
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
                Full Service Coordination
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#FFFFFF] mb-6">
                Every Detail, One Team
              </h2>
              <div className="flex items-center gap-3 text-white/60 font-bold">
                <span className="w-12 h-1 bg-brand-orange rounded-full" />
                <p>We eliminate the headache of managing multiple subcontractors.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Demolition & Removal", icon: <Hammer /> },
              { title: "Framing & Structural", icon: <Construction /> },
              { title: "Drywall Systems", icon: <Layers /> },
              { title: "Flooring Installation", icon: <Layout /> },
              { title: "Roofing Services", icon: <ShieldCheck /> },
              { title: "Interior/Exterior Painting", icon: <Paintbrush /> },
              { title: "Concrete Work", icon: <Construction /> },
              { title: "Cabinet & Countertops", icon: <Layout /> },
              { title: "Tile & Stone Work", icon: <PencilRuler /> },
            ].map((trade, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white hover:text-charcoal text-[#FFFFFF] transition-all duration-500 cursor-default"
              >
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-brand-orange group-hover:bg-charcoal/10 transition-all">
                  {React.cloneElement(trade.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h4 className="text-xl font-black mb-2">{trade.title}</h4>
                <p className="text-xs opacity-60 group-hover:opacity-80 font-bold uppercase tracking-widest">
                  Expert Execution
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-[100px] px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              Trust & Transparency
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-6">
              Why Homeowners Trust Us
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
              A premium comparison of craftsmanship and commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Licensed, Insured & Bonded",
                desc: "Licensed & Insured – Full legal and financial protection for your remodel.",
                icon: <Shield />,
              },
              {
                title: "6+ Years Local Experience",
                desc: "We know Arizona homes, codes, and the unique desert climate needs.",
                icon: <Clock />,
              },
              {
                title: "Single Point of Contact",
                desc: "We manage all trades – no vendor chaos or communication gaps.",
                icon: <Users />,
              },
              {
                title: "Video Meetings & File Uploads",
                desc: "Approve designs, materials, and track progress remotely from anywhere.",
                icon: <Video />,
              },
              {
                title: "Financing Available",
                desc: "Flexible options for kitchen, bath, and whole-home remodels.",
                icon: <CreditCard />,
              },
              {
                title: "AI-Assisted Estimating",
                desc: "Precision quotes with zero hidden fees or surprise costs.",
                icon: <Search />,
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue-deep/5 rounded-bl-[5rem] group-hover:bg-brand-orange/10 transition-colors" />
                <div className="bg-brand-blue-deep/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-brand-blue-deep group-hover:bg-brand-orange group-hover:text-white transition-all">
                  {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-2xl font-black text-charcoal mb-4">{benefit.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Remodeling Process Section */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-white border border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              The Workflow
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-6">
              Simple, Stress‑Free Remodeling
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
              No runaround. No hidden fees. Just three straightforward steps.
            </p>
          </div>

          <div className="relative">
            {/* Animated Connecting Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block overflow-hidden">
              <div className="h-full bg-brand-orange w-1/3 animate-marquee" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  step: "Step 01",
                  title: "Share Your Vision",
                  desc: "Schedule a video meeting or in-person consult. Upload photos, inspiration images, or sketches.",
                  icon: <Upload />,
                  bg: "bg-blue-50",
                },
                {
                  step: "Step 02",
                  title: "Approve the Plan",
                  desc: "Review our AI-assisted, transparent quote. Choose materials from our supplier network.",
                  icon: <ClipboardCheck />,
                  bg: "bg-orange-50",
                },
                {
                  step: "Step 03",
                  title: "We Build, You Enjoy",
                  desc: "Our licensed crew manages demolition, framing, flooring, painting, and all subs. Final walkthrough.",
                  icon: <Sparkles />,
                  bg: "bg-teal-50",
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div
                    className={`w-32 h-32 ${step.bg} rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-xl relative`}
                  >
                    <div className="bg-charcoal text-white w-10 h-10 rounded-full flex items-center justify-center absolute -top-2 -right-2 font-black text-xs">
                      {step.step.split(" ")[1]}
                    </div>
                    {React.cloneElement(step.icon as React.ReactElement, {
                      className: "w-12 h-12 text-charcoal",
                    })}
                  </div>
                  <h3 className="text-3xl font-black text-charcoal mb-4">{step.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed max-w-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Before & After / Gallery Section */}
      <section className="py-[100px] px-4 md:px-8 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Real Results. Real Homes.</h2>
            <p className="text-white/60 font-medium">
              Browse our recent kitchen, bathroom, and whole-home transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className="group relative aspect-video overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-orange transition-all cursor-pointer"
              >
                <img
                  src={`/g${(idx % 4) + 1}.jpg`}
                  alt={`Project ${idx}`}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-1 block">
                    Remodel Project
                  </span>
                  <span className="text-xl font-black">Modern Transformation</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-3 bg-white text-charcoal px-10 py-5 rounded-full font-black text-lg hover:bg-brand-orange hover:text-white transition-all shadow-xl shadow-white/5">
              View Our Project Gallery <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Service Areas Section */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-white relative overflow-hidden border border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
            Regional Coverage
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-12 leading-tight">
            We Remodel Across <span className="text-brand-orange">the Valley</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Phoenix", "Scottsdale", "Mesa", "Chandler", "Glendale", "Tempe", "Gilbert"].map(
              (city, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-50 px-8 py-5 rounded-3xl border border-gray-100 hover:border-brand-orange transition-all group cursor-default"
                >
                  <div className="w-2 h-2 bg-brand-orange rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-charcoal font-black text-lg">{city}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-[100px] px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              Knowledge Base
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 font-medium">
              Get clear answers to common remodeling queries.
            </p>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              {
                q: "Do I need a permit for my remodel?",
                a: "In most cases, yes. We handle all necessary permits for kitchen, bathroom, and structural remodels. Licensed & Insured ensures full compliance.",
              },
              {
                q: "How long does a kitchen remodel take?",
                a: "Typically 4–8 weeks depending on scope. We provide a clear timeline before any work begins.",
              },
              {
                q: "Can I live in my home during the remodel?",
                a: "Yes, for most projects. We work cleanly and contain dust to designated areas. For whole-home remodels, we can discuss temporary relocation options.",
              },
              {
                q: "Do you offer financing?",
                a: "Yes. Ask us about flexible financing options for kitchen, bathroom, and whole-home remodels.",
              },
              {
                q: "Can I see my project progress without being there?",
                a: "Absolutely. We offer video meetings, photo updates, and live walkthroughs.",
              },
              {
                q: "How do you handle electrical and plumbing during a remodel?",
                a: "We coordinate directly with licensed, vetted subcontractors – you work only with us.",
              },
              {
                q: "Where do you source materials?",
                a: "We partner with trusted suppliers and provide backlinks for full material transparency.",
              },
            ].map((item, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-8 text-left group">
                    <span className="text-lg font-black text-charcoal group-data-[state=open]:text-brand-orange transition-colors">
                      {item.q}
                    </span>
                    <div className="bg-white p-2 rounded-xl group-data-[state=open]:rotate-180 transition-transform shadow-sm">
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

      {/* 10. Final CTA / Quote Request Section */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mb-[15px] rounded-[20px] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              Start Your Transformation
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-8 leading-tight">
              Start Your <span className="text-brand-orange">Remodeling</span> Project Today
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Fill out the form below to initiate your project. Whether you have detailed plans or
              just a dream, our team is ready to deliver a premium estimate within 24 hours.
            </p>

            <div className="bg-charcoal p-10 rounded-[3rem] text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-brand-orange p-3 rounded-xl">
                    <BadgeCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xl">Response Promise</h4>
                    <p className="text-white/60 text-sm">
                      We'll reply within 24 hours, Monday–Saturday.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-brand-orange" />
                    <span className="font-bold">(813) 945-6736</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-brand-orange" />
                    <span className="font-bold">info@revitalizerealestate.com</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Hammer className="w-48 h-48" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-inner grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Email / Phone
                </label>
                <input
                  type="text"
                  placeholder="john@example.com"
                  className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Remodel Type
                </label>
                <select className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none appearance-none cursor-pointer">
                  <option>Select Type...</option>
                  <option>Kitchen Remodel</option>
                  <option>Bathroom Remodel</option>
                  <option>Whole Home Transformation</option>
                  <option>Other Home Improvement</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Project Address (City)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tampa, FL"
                  className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none"
                />
              </div>

              <div className="md:col-span-2 p-8 border-2 border-dashed border-gray-200 rounded-[2rem] bg-white flex flex-col items-center justify-center gap-4 group hover:border-brand-orange transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-300 group-hover:text-brand-orange transition-colors" />
                <div className="text-center">
                  <p className="font-black text-gray-500">Upload Photos/Inspiration</p>
                  <p className="text-xs text-gray-400 font-medium">PDF, JPG, PNG (Max 50MB)</p>
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Preferred Meeting
                </label>
                <select className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none appearance-none cursor-pointer">
                  <option>Video Call</option>
                  <option>In-Person Consult</option>
                  <option>Phone Call</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-4 pt-4">
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-6 h-6 bg-white border-2 border-gray-200 rounded-lg peer-checked:bg-brand-orange peer-checked:border-brand-orange transition-all" />
                    <CheckCircle2 className="w-4 h-4 text-white absolute inset-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm font-bold text-gray-600 group-hover:text-charcoal transition-colors">
                    I'm interested in financing
                  </span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-6 h-6 bg-white border-2 border-gray-200 rounded-lg peer-checked:bg-brand-orange peer-checked:border-brand-orange transition-all" />
                    <CheckCircle2 className="w-4 h-4 text-white absolute inset-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm font-bold text-gray-600 group-hover:text-charcoal transition-colors">
                    Send me supplier/material information
                  </span>
                </label>
              </div>

              <button className="md:col-span-2 bg-charcoal hover:bg-charcoal/95 text-white px-10 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-blue-900/20 transition-all hover:scale-[1.02] active:scale-95 mt-4">
                Submit Remodeling Request <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
