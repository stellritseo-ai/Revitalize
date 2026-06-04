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
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

export const Route = createFileRoute("/services/construction")({
  component: ConstructionPage,
});

function ConstructionPage() {
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
            src="/service-1.jpg"
            alt="Construction background"
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
                Premium Arizona Builds
              </span>
            </div>

            <h1 className="text-[35px] font-black text-white mb-6 leading-tight uppercase tracking-tight">
              Built Right. Built Here. —{" "}
              <span className="text-brand-orange">Arizona's Trusted</span> Construction Partner
            </h1>

            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              From ground-up new construction to commercial build-outs, Revitalize Real Estate
              Construction Group delivers licensed, insured, and bonded craftsmanship across the
              Valley. <span className="text-white font-bold">Licensed & Insured</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl shadow-brand-orange/20"
              >
                Request a Quote <ArrowRight className="w-5 h-5" />
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
              <img src="/g1.jpg" alt="Construction team" className="w-full h-full object-cover" />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-10 -right-10 bg-charcoal p-8 rounded-3xl text-white shadow-2xl hidden md:block animate-bounce-slow">
              <span className="text-4xl font-black block mb-1">20+</span>
              <span className="text-xs opacity-60 uppercase font-bold tracking-widest">
                Years Experience
              </span>
            </div>

            <div className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-md border border-gray-100 p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-brand-orange/10 p-4 rounded-2xl">
                  <Users className="w-8 h-8 text-brand-orange" />
                </div>
                <div>
                  <span className="text-2xl font-black text-charcoal block">500+</span>
                  <span className="text-xs text-gray-500 font-bold uppercase">Projects Built</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">
              Proven Excellence
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-8 leading-tight">
              Construction Services You Can{" "}
              <span className="text-brand-blue-deep underline decoration-brand-orange underline-offset-8">
                Build On
              </span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
              At Revitalize Real Estate, we believe that{" "}
              <span className="text-charcoal font-bold">transparency and precision</span> are the
              cornerstones of a successful build. Our master builders and project managers work as a
              cohesive unit to transform architectural blueprints into living, breathing structures.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  icon: <Ruler />,
                  title: "Precision Planning",
                  desc: "Digital modeling and architectural alignment.",
                },
                {
                  icon: <HardHat />,
                  title: "Master Craftsmanship",
                  desc: "Expert crews for every specific trade.",
                },
                {
                  icon: <ClipboardCheck />,
                  title: "Permit Handling",
                  desc: "We manage all city and valley approvals.",
                },
                {
                  icon: <Clock />,
                  title: "On-Time Delivery",
                  desc: "Rigid scheduling and milestone management.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="bg-brand-blue-deep/5 p-3 rounded-xl group-hover:bg-brand-orange/10 transition-colors">
                    {React.cloneElement(item.icon as React.ReactElement, {
                      className:
                        "w-6 h-6 text-brand-blue-deep group-hover:text-brand-orange transition-colors",
                    })}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-charcoal mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Services Grid */}
      <section className="py-[100px] px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-6">What We Build</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            Premium service cards engineered for clarity and conversion.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Residential Construction",
              desc: "From custom luxury estates to modern ADUs and guest houses, we manage every nail and beam.",
              icon: <Home />,
              image: "/service-1.jpg",
            },
            {
              title: "Commercial Construction",
              desc: "Shell construction, tenant improvements, and retail build-outs delivered on tight schedules.",
              icon: <Building2 />,
              image: "/service-2.jpg",
            },
            {
              title: "New Construction",
              desc: "Ground-up development for residential and commercial properties across the Tampa Bay area.",
              icon: <Construction />,
              image: "/service-3.jpg",
            },
            {
              title: "Home Remodeling",
              desc: "Whole-home transformations that enhance both beauty and equity.",
              icon: <Paintbrush />,
              image: "/service-4.jpg",
            },
            {
              title: "Custom Projects",
              desc: "Unique architectural challenges and specialty structural requirements.",
              icon: <Ruler />,
              image: "/g1.jpg",
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
                  to={item.title === "Home Remodeling" ? "/services/remodeling" : "/contact"}
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
                Master Trades
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#FFFFFF] mb-6">
                Every Trade, One Team
              </h2>
              <div className="flex items-center gap-3 text-white/60 font-bold">
                <span className="w-12 h-1 bg-brand-orange rounded-full" />
                <p>We manage every phase of your construction journey.</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-white max-w-sm">
              <p className="text-sm italic opacity-80 leading-relaxed">
                "Our single-point-of-contact model eliminates communication gaps between specialized
                trades."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Framing", icon: <Hammer /> },
              { title: "Concrete Work", icon: <Construction /> },
              { title: "Drywall Systems", icon: <Layers /> },
              { title: "Roofing Services", icon: <ShieldCheck /> },
              { title: "Flooring", icon: <Layout /> },
              { title: "Master Painting", icon: <Paintbrush /> },
              { title: "Electrical Power", icon: <Zap /> },
              { title: "Plumbing Mastery", icon: <Droplets /> },
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
                  Licensed Professional
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Process Flow Line Animation (Simulated with CSS) */}
          <div className="mt-20 pt-20 border-t border-white/10 text-center">
            <div className="inline-flex items-center gap-4 bg-brand-orange px-8 py-4 rounded-full text-white font-bold text-lg animate-pulse">
              <Search className="w-5 h-5" />
              <span>Explore Our Interactive Process Below</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-[100px] px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              The Premiere Advantage
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-6">
              Why Revitalize Real Estate
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
              A premium comparison of craftsmanship and commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Licensed, Insured & Bonded",
                desc: "Total security for your investment with Licensed & Insured.",
                icon: <Shield />,
              },
              {
                title: "20+ Years Local Experience",
                desc: "Deep knowledge of Arizona soil, climate, and building codes.",
                icon: <Clock />,
              },
              {
                title: "Single Point of Contact",
                desc: "No middle-man confusion. Direct access to your project lead.",
                icon: <Users />,
              },
              {
                title: "Video Meetings & File Uploads",
                desc: "Modern transparency with real-time digital project tracking.",
                icon: <Video />,
              },
              {
                title: "Financing Available",
                desc: "Flexible payment plans to get your project started today.",
                icon: <CreditCard />,
              },
              {
                title: "AI-Assisted Estimating",
                desc: "Precision quotes with zero hidden fees using advanced tech.",
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
                <div className="mt-8 flex items-center gap-2 text-brand-orange font-black text-xs uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4" /> Verified Advantage
                </div>
              </div>
            ))}
          </div>

          {/* Stats Counters */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-charcoal p-12 rounded-[3rem] text-white">
            <div className="text-center border-r border-white/10 last:border-0">
              <span className="text-4xl md:text-5xl font-black block mb-2">100%</span>
              <span className="text-xs opacity-60 uppercase font-bold tracking-widest">
                Code Compliant
              </span>
            </div>
            <div className="text-center border-r border-white/10 last:border-0">
              <span className="text-4xl md:text-5xl font-black block mb-2">602</span>
              <span className="text-xs opacity-60 uppercase font-bold tracking-widest">
                Local Area Code
              </span>
            </div>
            <div className="text-center border-r border-white/10 last:border-0">
              <span className="text-4xl md:text-5xl font-black block mb-2">24h</span>
              <span className="text-xs opacity-60 uppercase font-bold tracking-widest">
                Response Time
              </span>
            </div>
            <div className="text-center last:border-0">
              <span className="text-4xl md:text-5xl font-black block mb-2">ROC</span>
              <span className="text-xs opacity-60 uppercase font-bold tracking-widest">
                #328501
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Construction Process Section */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-white border border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              The Workflow
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-6">
              Simple, Stress-Free Construction
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
              Our modern animated 3-step timeline for total project clarity.
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
                  desc: "Upload your blueprints or start with a digital video consultation. We listen to your goals first.",
                  icon: <Upload />,
                  bg: "bg-blue-50",
                },
                {
                  step: "Step 02",
                  title: "Approve the Plan",
                  desc: "Receive a transparent, AI-assisted estimate. We finalize the build schedule and financing together.",
                  icon: <ClipboardCheck />,
                  bg: "bg-orange-50",
                },
                {
                  step: "Step 03",
                  title: "We Build, You Enjoy",
                  desc: "Our master crews execute with precision. Watch your vision come to life with daily digital updates.",
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

      {/* 7. Service Areas Section */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-charcoal relative overflow-hidden">
        {/* Animated Location Pins (Simulated) */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 animate-pulse">
            <MapPin className="w-12 h-12 text-brand-orange" />
          </div>
          <div className="absolute top-1/2 left-1/3 animate-bounce-slow">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 animate-pulse">
            <MapPin className="w-10 h-10 text-brand-orange" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-left">
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
                Regional Coverage
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                We Build Across the Tampa Bay Area
              </h2>
              <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-xl">
                From the bustling streets of Phoenix to the serene estates of Scottsdale, our crews
                are strategically deployed across the entire Phoenix metropolitan area.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Phoenix", "Scottsdale", "Mesa", "Chandler", "Glendale", "Tempe", "Gilbert"].map(
                  (city, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-default"
                    >
                      <div className="w-2 h-2 bg-brand-orange rounded-full" />
                      <span className="text-white font-bold">{city}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-[3rem] shadow-2xl relative">
                <img
                  src="/g3.jpg"
                  alt="Arizona architecture"
                  className="rounded-[2.5rem] w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-brand-blue-deep/20 rounded-[2.5rem]" />
                <div className="absolute bottom-12 left-12 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-brand-orange/10 p-3 rounded-xl">
                      <Clock className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <span className="text-charcoal font-black block">Tampa Bay Area</span>
                      <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                        Rapid Mobilization
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-[100px] px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              Knowledge Base
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 font-medium">
              Get clear answers to common construction queries.
            </p>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              {
                q: "Are you fully licensed for construction in Arizona?",
                a: "Yes, we are a fully licensed general contractor with the Arizona Registrar of Contractors (Licensed & Insured). We are also fully insured and bonded for your protection.",
              },
              {
                q: "Do you handle both residential and commercial projects?",
                a: "Absolutely. Our teams are equipped for everything from ground-up residential luxury builds to complex commercial tenant improvements and retail shells.",
              },
              {
                q: "How do you handle project updates and communication?",
                a: "We provide real-time digital project updates, including photos and milestone reports. You will also have a single point of contact available via video call or direct messaging.",
              },
              {
                q: "Is financing available for large construction projects?",
                a: "Yes, we offer flexible financing options to help you manage the investment of a major build or remodel. Ask us about our current financing packages.",
              },
              {
                q: "Do you manage electrical and plumbing coordination?",
                a: "We manage every phase of the project. Our team includes master-level trades for electrical, plumbing, and HVAC, ensuring all systems are integrated perfectly.",
              },
              {
                q: "Is material sourcing transparent?",
                a: "Total transparency is our standard. We provide detailed material lists and handle all sourcing from premium suppliers, with zero hidden markups or surprise fees.",
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

      {/* 9. Final CTA / Quote Request Section */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mb-[15px] rounded-[20px] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              Ready to Begin?
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-8 leading-tight">
              Start Your <span className="text-brand-orange">Construction</span> Project Today
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Fill out the form below to initiate your project. Whether you have blueprints ready or
              just a vision, our team is ready to deliver a premium estimate within 24 hours.
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
                <Construction className="w-48 h-48" />
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
                  Project Type
                </label>
                <select className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none appearance-none cursor-pointer">
                  <option>Select Type...</option>
                  <option>Residential New Build</option>
                  <option>Commercial Construction</option>
                  <option>Home Remodeling</option>
                  <option>Custom Project</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Project Address
                </label>
                <input
                  type="text"
                  placeholder="123 Arizona Way, Tampa, FL"
                  className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none"
                />
              </div>

              <div className="md:col-span-2 p-8 border-2 border-dashed border-gray-200 rounded-[2rem] bg-white flex flex-col items-center justify-center gap-4 group hover:border-brand-orange transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-300 group-hover:text-brand-orange transition-colors" />
                <div className="text-center">
                  <p className="font-black text-gray-500">Drag & Drop Blueprints</p>
                  <p className="text-xs text-gray-400 font-medium">PDF, JPG, PNG (Max 50MB)</p>
                </div>
              </div>

              <div className="md:col-span-2 space-y-4 pt-4">
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-6 h-6 bg-white border-2 border-gray-200 rounded-lg peer-checked:bg-brand-orange peer-checked:border-brand-orange transition-all" />
                    <CheckCircle2 className="w-4 h-4 text-white absolute inset-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm font-bold text-gray-600 group-hover:text-charcoal transition-colors">
                    I am interested in project financing options
                  </span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-6 h-6 bg-white border-2 border-gray-200 rounded-lg peer-checked:bg-brand-orange peer-checked:border-brand-orange transition-all" />
                    <CheckCircle2 className="w-4 h-4 text-white absolute inset-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm font-bold text-gray-600 group-hover:text-charcoal transition-colors">
                    Send me information about preferred material suppliers
                  </span>
                </label>
              </div>

              <button className="md:col-span-2 bg-charcoal hover:bg-charcoal/95 text-white px-10 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-blue-900/20 transition-all hover:scale-[1.02] active:scale-95 mt-4">
                Submit Construction Request <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
