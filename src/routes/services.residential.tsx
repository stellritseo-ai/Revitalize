import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import {
  Home,
  Hammer,
  Layout,
  ShieldCheck,
  Building2,
  KeyIcon,
  Paintbrush,
  Layers,
  ArrowRight,
  Video,
  CheckCircle2,
  Shield,
  Clock,
  Users,
  BadgeCheck,
  Phone,
  Mail,
  Upload,
  ClipboardCheck,
  Sparkles,
  ChevronDown,
  Wrench,
  Zap,
  Droplets,
  Thermometer,
  Briefcase,
  Settings,
  Search,
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

export const Route = createFileRoute("/services/residential")({
  head: () => ({
    title:
      "Residential Services – New Home Construction, Remodeling & Repairs | Certified General Contractor (CGC) | Licensed & Insured",
    meta: [
      {
        name: "description",
        content:
          "Licensed Certified General Contractor (CGC) in Tampa, FL. New home construction, kitchen & bathroom remodeling, room additions, structural repairs & more. Licensed & Insured. Free video consult & financing. Call (813) 945-6736.",
      },
    ],
  }),
  component: ResidentialServicesPage,
});

function ResidentialServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="bg-[#F8FAFC] overflow-x-hidden">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden m-[15px] rounded-[10px]">
        <div className="absolute inset-0">
          <img
            src="/service-4.jpg"
            alt="Residential Construction"
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/60 to-charcoal/90" />
        </div>

        <div
          className={`relative z-10 max-w-6xl mx-auto px-4 transition-all duration-1000 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-16 rounded-[2rem] shadow-2xl text-center">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">
                Certified General Contractor (CGC)
              </span>
            </div>

            <h1 className="text-[35px] md:text-5xl font-black text-white mb-6 leading-tight uppercase tracking-tight">
              Your Home. Your Vision. Our Craftsmanship.
            </h1>

            <p className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
              Under our Florida Certified General Contractor (CGC) License (B General Residential),
              Arizona Premiere Construction Group builds, remodels, and repairs homes across the
              Tampa Bay area. From new construction to kitchen upgrades, we manage every detail.{" "}
              <span className="text-white font-bold">Licensed & Insured</span>.
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
                <Video className="w-5 h-5" /> Schedule Video Meeting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-white relative overflow-hidden shadow-sm border border-gray-100">
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
              <img
                src="/g2.jpg"
                alt="Residential Construction"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">
              Residential Construction
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-8 leading-tight">
              Built on Trust,{" "}
              <span className="text-brand-blue-deep underline decoration-brand-orange underline-offset-8">
                Finished with Care
              </span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Your home is your biggest investment and your personal sanctuary. At Arizona
                Premiere Construction Group, we treat it that way. Under our B General Residential
                Contractor license (part of the AZ CGC Dual License), we are authorized to build new
                homes, remodel existing spaces, add room additions, and perform structural repairs —
                all while managing every phase of construction.
              </p>
              <p className="font-bold text-charcoal">
                We are fully licensed (Licensed & Insured), insured, and bonded. From framing and
                drywall to roofing and flooring, we deliver quality craftsmanship on every
                residential project. And because we act as your General Contractor (GC) , you get a
                single point of contact — no subcontractor chaos, no hidden surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Services Grid */}
      <section className="py-[100px] px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
            Our Residential Services
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-6">
            What We Do for Your Home
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "New Home Construction",
              desc: "Build your dream home from the ground up — permits, foundation, framing, roofing, finishes, and final walkthrough.",
              icon: <Home />,
            },
            {
              title: "Kitchen Remodeling",
              desc: "Custom cabinetry, countertops, backsplashes, lighting, flooring, and layout changes. From minor updates to complete gut renovations.",
              icon: <Hammer />,
            },
            {
              title: "Bathroom Remodeling",
              desc: "Walk-in showers, soaking tubs, vanities, tile work, lighting, and accessible upgrades.",
              icon: <Droplets />,
            },
            {
              title: "Room Additions",
              desc: "Expand your living space — bedrooms, family rooms, sunrooms, or second stories.",
              icon: <Layout />,
            },
            {
              title: "Structural Repairs",
              desc: "Fix foundation issues, wall cracks, roof damage, and other structural concerns.",
              icon: <ShieldCheck />,
            },
            {
              title: "Garages, Patios & Buildings",
              desc: "Detached garages, covered patios, sheds, ADUs (accessory dwelling units), and workshops.",
              icon: <Building2 />,
            },
            {
              title: "Tenant Improvements",
              desc: "Upgrade rental properties — new flooring, paint, lighting, kitchen and bathroom updates.",
              icon: <KeyIcon />,
            },
            {
              title: "Exterior Improvements",
              desc: "Siding, stucco, roofing, windows, doors, and curb appeal upgrades.",
              icon: <Paintbrush />,
            },
            {
              title: "Interior Upgrades",
              desc: "Open floor plans, new lighting, built-ins, closet systems, and modern finishes.",
              icon: <Sparkles />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:border-brand-orange hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="bg-brand-blue-deep/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-brand-blue-deep group-hover:bg-brand-orange group-hover:text-white transition-all">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="font-black text-charcoal text-xl mb-3">{item.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed flex-grow">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Detailed Capabilities */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] rounded-[20px] bg-charcoal relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              Detailed Residential Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Every Trade, One General Contractor
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              As your General Contractor (GC), we manage every phase of your residential project —
              including coordinating licensed subcontractors for specialty trades like electrical,
              plumbing, and HVAC. You work only with us.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Self Performed */}
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md">
              <h3 className="text-2xl font-black text-brand-orange mb-8 flex items-center gap-3">
                <Wrench className="w-6 h-6" /> What We Self-Perform
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Framing",
                    desc: "Structural walls, roof framing, floor joists, and custom framing for additions",
                  },
                  {
                    title: "Drywall Installation & Repair",
                    desc: "Hanging, taping, mudding, sanding, and texture matching",
                  },
                  {
                    title: "Roofing Services",
                    desc: "New roofs, roof replacements, repairs, and ventilation",
                  },
                  {
                    title: "Flooring Installation",
                    desc: "Hardwood, tile, laminate, vinyl, carpet – any material",
                  },
                  {
                    title: "Interior & Exterior Painting",
                    desc: "Professional prep, premium paints, clean lines, durable finishes",
                  },
                  {
                    title: "Concrete Work",
                    desc: "Foundations, slabs, driveways, patios, walkways",
                  },
                  {
                    title: "Siding & Exterior Finishes",
                    desc: "Vinyl, fiber cement, wood, stucco repair",
                  },
                  {
                    title: "Door & Window Installation",
                    desc: "Interior and exterior doors, windows, and trim",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordinated */}
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md">
              <h3 className="text-2xl font-black text-brand-orange mb-8 flex items-center gap-3">
                <Users className="w-6 h-6" /> What We Coordinate
              </h3>
              <div className="space-y-6 mb-8">
                {[
                  {
                    title: "Electrical",
                    desc: "Wiring, panels, outlets, lighting fixtures, and code compliance",
                    icon: <Zap />,
                  },
                  {
                    title: "Plumbing",
                    desc: "Pipe installation, fixtures, water heaters, and drainage systems",
                    icon: <Droplets />,
                  },
                  {
                    title: "HVAC / Air Conditioning",
                    desc: "Heating, cooling, ductwork, and ventilation",
                    icon: <Thermometer />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start bg-white/5 p-6 rounded-2xl border border-white/5"
                  >
                    <div className="bg-brand-orange/20 p-3 rounded-xl text-brand-orange shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-brand-orange/10 border border-brand-orange/30 p-4 rounded-xl">
                <p className="text-sm font-bold text-white/90">
                  <span className="text-brand-orange">Note:</span> All subcontractors are licensed,
                  insured, and vetted by us. You never manage them directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Project Categories Table */}
      <section className="py-[100px] px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              Residential Project Categories
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-6">
              Common Residential Projects We Handle
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-50 p-6 border-b border-gray-200">
              <div className="font-black text-charcoal uppercase text-sm tracking-wider hidden md:block">
                Project Type
              </div>
              <div className="font-black text-charcoal uppercase text-sm tracking-wider hidden md:block">
                Examples
              </div>
            </div>
            {[
              {
                type: "New Home Construction",
                examples: "Custom homes, production homes, spec homes",
              },
              {
                type: "Kitchen & Bathroom Remodeling",
                examples:
                  "Full gut renovations, cabinet replacements, tile showers, quartz countertops",
              },
              {
                type: "Structural Repairs",
                examples: "Foundation repairs, wall crack repair, roof truss reinforcement",
              },
              {
                type: "Exterior Improvements",
                examples: "Siding replacement, stucco repair, new windows, new roofing",
              },
              {
                type: "Room Additions",
                examples: "Bedroom additions, family room expansions, second-story additions",
              },
              {
                type: "Interior Upgrades",
                examples:
                  "Open concept remodels, built-in shelving, closet systems, lighting upgrades",
              },
              {
                type: "Accessory Buildings",
                examples: "Detached garages, ADUs (casitas), workshops, storage sheds",
              },
              {
                type: "Rental Property Upgrades",
                examples: "Tenant improvements, flooring replacement, paint, fixture updates",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors gap-2"
              >
                <div className="font-bold text-charcoal">{item.type}</div>
                <div className="text-gray-500 font-medium">{item.examples}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-[100px] px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-16">
            Why Homeowners Trust Revitalize Real Estate
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "B General Residential License",
                desc: "Authorized to build, remodel, and repair homes – part of AZ CGC Dual License",
                icon: <BadgeCheck />,
              },
              {
                title: "Licensed & Insured",
                desc: "Fully licensed, insured, and bonded",
                icon: <Shield />,
              },
              {
                title: "General Contractor (GC)",
                desc: "Single point of contact – we manage everything",
                icon: <Users />,
              },
              {
                title: "6+ Years Local Experience",
                desc: "We know Arizona homes, codes, weather, and materials",
                icon: <Clock />,
              },
              {
                title: "We Self-Perform Key Trades",
                desc: "Framing, drywall, roofing, flooring, painting, concrete",
                icon: <Wrench />,
              },
              {
                title: "We Coordinate Specialty Trades",
                desc: "Electrical, plumbing, HVAC – all licensed subs",
                icon: <Settings />,
              },
              {
                title: "Video Meetings & File Uploads",
                desc: "Approve plans, materials, and progress remotely",
                icon: <Video />,
              },
              {
                title: "Financing Available",
                desc: "Flexible options for remodels, additions, and new construction",
                icon: <Building2 />,
              },
              {
                title: "Supplier Backlinks",
                desc: "Full transparency on materials and sourcing",
                icon: <Search />,
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:border-brand-orange transition-colors group"
              >
                <div className="bg-charcoal/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto text-charcoal group-hover:bg-brand-orange group-hover:text-white transition-all">
                  {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-lg font-black text-charcoal mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 3-Step Process */}
      <section className="py-[100px] px-4 md:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              Our Residential Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-6">
              Simple, Stress‑Free Home Construction & Remodeling
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
              No runaround. No hidden fees. Just three straightforward steps from your first call to
              your beautiful new space.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block overflow-hidden">
              <div className="h-full bg-brand-orange w-1/3 animate-marquee" />
            </div>

            {[
              {
                step: "1",
                title: "Share Your Vision",
                desc: "Schedule a video meeting or in-person consult. Upload photos, blueprints, or inspiration images. Discuss budget, timeline, and financing.",
                icon: <Upload />,
                bg: "bg-blue-50",
              },
              {
                step: "2",
                title: "Approve the Plan",
                desc: "Review our AI-assisted, transparent quote. Choose materials from our supplier network. We handle permits and coordinate all subs.",
                icon: <ClipboardCheck />,
                bg: "bg-orange-50",
              },
              {
                step: "3",
                title: "We Build, You Enjoy",
                desc: "Our crew performs framing, drywall, roofing, flooring, and painting. We coordinate electrical, plumbing, and HVAC subs. Final walkthrough – then enjoy your upgraded home.",
                icon: <Sparkles />,
                bg: "bg-teal-50",
              },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10">
                <div
                  className={`w-28 h-28 ${step.bg} rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-xl relative`}
                >
                  <div className="bg-charcoal text-white w-8 h-8 rounded-full flex items-center justify-center absolute -top-1 -right-1 font-black text-xs">
                    {step.step}
                  </div>
                  {React.cloneElement(step.icon as React.ReactElement, {
                    className: "w-10 h-10 text-charcoal",
                  })}
                </div>
                <h3 className="text-2xl font-black text-charcoal mb-4">{step.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed max-w-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Service Areas */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-charcoal relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12 leading-tight">
            We Build and Remodel{" "}
            <span className="text-brand-orange">Across the Tampa Bay Area</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Phoenix",
              "Scottsdale",
              "Mesa",
              "Chandler",
              "Glendale",
              "Tempe",
              "Gilbert",
              "and surrounding Tampa Bay communities",
            ].map((city, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/10 px-8 py-5 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group cursor-default"
              >
                <div className="w-2 h-2 bg-brand-orange rounded-full group-hover:scale-150 transition-transform" />
                <span className="text-white font-bold text-lg">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-[100px] px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              FAQ – Residential Services
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              {
                q: "What is a Certified General Contractor (CGC)?",
                a: "A B license allows a contractor to build new homes, remodel existing homes, add room additions, perform structural repairs, and manage residential construction projects. We hold this license as part of our AZ CGC Dual License (Licensed & Insured).",
              },
              {
                q: "Can you build a custom home for me?",
                a: "Yes. We handle new home construction from permits to final walkthrough.",
              },
              {
                q: "Do you perform electrical or plumbing work yourselves?",
                a: "No. Under Arizona regulations, our license requires us to subcontract electrical, plumbing, and HVAC to properly licensed specialists. We manage them for you.",
              },
              {
                q: "How long does a kitchen remodel take?",
                a: "Typically 4–8 weeks depending on scope. We provide a clear timeline before any work begins.",
              },
              {
                q: "Can I live in my home during a remodel?",
                a: "Yes, for most projects. We work cleanly and contain dust to designated areas. For whole-home remodels, we can discuss temporary relocation options.",
              },
              {
                q: "Do you offer financing?",
                a: "Yes. Ask us about flexible financing options for kitchen remodels, bathroom renovations, room additions, and new construction.",
              },
              {
                q: "Can I see my project progress without being there?",
                a: "Absolutely. We offer video meetings, photo updates, and live walkthroughs.",
              },
              {
                q: "Do you handle permits?",
                a: "Yes. We obtain all necessary permits for residential construction and remodeling projects.",
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
                    <div className="bg-gray-50 p-2 rounded-xl group-data-[state=open]:rotate-180 transition-transform">
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

      {/* 10. Quote Form */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mb-[15px] rounded-[20px] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              Request a Quote – Residential Services
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-8 leading-tight">
              Start Your <span className="text-brand-orange">Residential Project</span> Today
            </h2>

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
                <Home className="w-48 h-48" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-inner grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Email / Phone *
                </label>
                <input
                  type="text"
                  placeholder="Contact Info"
                  required
                  className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Project Type
                </label>
                <select className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none appearance-none cursor-pointer">
                  <option>New Home</option>
                  <option>Kitchen Remodel</option>
                  <option>Bathroom Remodel</option>
                  <option>Room Addition</option>
                  <option>Structural Repair</option>
                  <option>Other</option>
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
                  <p className="font-black text-gray-500">
                    Upload Photos, Blueprints, Inspiration Images
                  </p>
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
                Submit Residential Request <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
