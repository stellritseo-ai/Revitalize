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
  XCircle,
  AlertTriangle,
  PenTool,
  Wrench,
  Activity,
  Thermometer,
  KeyIcon,
  Info,
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

export const Route = createFileRoute("/services/florida-cgc-license")({
  head: () => ({
    title:
      "Our Services – Residential & Commercial General Contractor | AZ CGC Licensed | Licensed & Insured",
    meta: [
      {
        name: "description",
        content:
          "Revitalize Real Estate holds the Florida Certified General Contractor (CGC) License (General Builder (Residential & Commercial)). New homes, remodeling, commercial build-outs, tenant improvements & more. Licensed & Insured. Free video consult. Call (813) 945-6736.",
      },
    ],
  }),
  component: FloridaCgcLicensePage,
});

function FloridaCgcLicensePage() {
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
            src="/service-1.jpg"
            alt="CGC Dual Building Construction"
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-charcoal/90" />
        </div>

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

        <div
          className={`relative z-10 max-w-6xl mx-auto px-4 transition-all duration-1000 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-16 rounded-[2rem] shadow-2xl text-center">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">
                Licensed for Residential & Commercial
              </span>
            </div>

            <h1 className="text-[35px] md:text-5xl font-black text-white mb-6 leading-tight uppercase tracking-tight">
              Florida CGC License <span className="text-brand-orange">Contractor</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
              Revitalize Real Estate holds the CGC license, combining{" "}
              <span className="text-white font-bold">B General Residential</span> and{" "}
              <span className="text-white font-bold">Certified Commercial Building Contractor</span>{" "}
              authority. We manage your entire project — from new homes and kitchen remodels to
              office build-outs and retail home improvements.{" "}
              <span className="text-brand-orange font-bold">Licensed & Insured</span>.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-12">
              <Link
                to="/services/residential"
                className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl shadow-brand-orange/20"
              >
                View Residential Services <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services/commercial"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-charcoal px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl"
              >
                View Commercial Services <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all"
              >
                <Video className="w-5 h-5" /> Free Video Meeting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction Section */}
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
                src="/g1.jpg"
                alt="Dual Building Contractor"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -left-10 bg-charcoal p-8 rounded-3xl text-white shadow-2xl hidden md:block">
              <span className="text-4xl font-black block mb-1">CGC</span>
              <span className="text-xs opacity-60 uppercase font-bold tracking-widest">
                Dual License Authority
              </span>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">
              One License, Two Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-8 leading-tight">
              The CGC Advantage —{" "}
              <span className="text-brand-blue-deep underline decoration-brand-orange underline-offset-8">
                Total Project Control
              </span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                In Arizona, the CGC Dual Building Contractor License is one of the most versatile
                licenses available. It combines:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="bg-brand-orange/10 p-2 rounded-lg mt-1">
                    <Home className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <strong className="text-charcoal">Certified General Contractor (CGC)</strong> –
                    For homes, remodels, additions, and residential tenant improvements.
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-brand-orange/10 p-2 rounded-lg mt-1">
                    <Building2 className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <strong className="text-charcoal">
                      Certified Commercial Building Contractor
                    </strong>{" "}
                    – For commercial buildings, office build-outs, retail home improvements, and
                    commercial remodels.
                  </div>
                </li>
              </ul>
              <p className="font-bold text-charcoal pt-4 border-t border-gray-100">
                At Revitalize Real Estate, we hold this license (Licensed & Insured). That means we
                can legally manage and perform both residential and commercial construction projects
                across the Tampa Bay area. We act as your General Contractor (GC) — handling project
                supervision, construction management, and subcontractor coordination so you don't
                have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Residential Services (B License) */}
      <section className="py-[100px] px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
            Certified General Contractor (CGC)
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-6">
            Residential Construction
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg font-medium">
            Under our B license, we build, remodel, and repair homes throughout Phoenix, Scottsdale,
            Mesa, Chandler, and surrounding areas. From new construction to kitchen upgrades, we
            manage every phase.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "New Home Construction",
              desc: "Build your dream home from the ground up — permits, foundation, framing, roofing, finishes, and final walkthrough.",
              icon: <Home />,
            },
            {
              title: "Kitchen & Bathroom Remodeling",
              desc: "Full home improvements — cabinets, countertops, tile, plumbing coordination, lighting, and flooring.",
              icon: <Hammer />,
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
              title: "Residential Tenant Improvements",
              desc: "Upgrade rental properties — new flooring, paint, lighting, kitchen and bathroom updates.",
              icon: <KeyIcon />,
            },
            {
              title: "Exterior Improvements",
              desc: "Siding, stucco, roofing, windows, doors, and curb appeal upgrades.",
              icon: <Paintbrush />,
            },
            {
              title: "Framing, Drywall, Roofing",
              desc: "Structural framing, drywall installation and repair, roofing replacements, and all flooring types.",
              icon: <Layers />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-brand-orange hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="bg-brand-blue-deep/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-blue-deep group-hover:bg-brand-orange group-hover:text-white transition-all">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
              </div>
              <h4 className="font-bold text-charcoal text-lg mb-3 leading-tight">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Commercial Services (B-1 License) */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] rounded-[20px] bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
            Certified Commercial Building Contractor
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#FFFFFF] mb-6">
            Commercial Construction
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg font-medium">
            Under our B-1 license, we construct, remodel, and repair commercial properties. We
            manage everything from small retail home improvements to full office build-outs. You get a
            single point of contact for the entire project.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Commercial Building Construction",
              desc: "New construction for offices, retail stores, warehouses, and light commercial spaces.",
            },
            {
              title: "Commercial Remodeling & Repair",
              desc: "Renovate existing commercial properties — layout changes, finishes, and structural updates.",
            },
            {
              title: "Tenant Improvements",
              desc: "Customize leased spaces for your business — walls, flooring, lighting, and plumbing coordination.",
            },
            {
              title: "Office Build-Outs",
              desc: "Complete interior construction for corporate offices, medical suites, and professional spaces.",
            },
            {
              title: "Retail Home Improvements",
              desc: "Update storefronts, sales floors, break rooms, and customer areas.",
            },
            {
              title: "Construction Management",
              desc: "We supervise every trade, manage budgets, and ensure on-time delivery.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white hover:text-charcoal text-[#FFFFFF] transition-all duration-500 group"
            >
              <h4 className="text-xl font-black mb-3">{item.title}</h4>
              <p className="opacity-70 group-hover:opacity-100 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. General Contractor Role */}
      <section className="py-[100px] px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-8">
              We Act as Your General Contractor
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              The CGC license authorizes us to act as a General Contractor (GC). That means we don't
              just perform work — we manage the entire project from start to finish.
            </p>
            <div className="space-y-4">
              {[
                "Project supervision – Overseeing every phase of construction",
                "Construction management – Budgets, timelines, permits, and inspections",
                "Subcontractor coordination – Hiring and managing all specialty trades",
                "General structural construction – Framing, drywall, roofing, flooring, concrete, painting",
                "Single point of contact – You talk to us, not multiple contractors",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-brand-orange/10 p-1.5 rounded-full mt-1">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  </div>
                  <span className="font-bold text-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/g3.jpg"
                alt="GC Management"
                className="rounded-3xl w-full h-64 object-cover"
              />
              <img
                src="/g4.jpg"
                alt="Construction Supervision"
                className="rounded-3xl w-full h-64 object-cover mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Specialty Trades Coordination */}
      <section className="py-[100px] px-4 md:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
            Subcontractor Management
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-6">
            Specialty Trades – We Hire & Manage Licensed Subs
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg font-medium mb-4">
            The CGC license does NOT allow us to self-perform certain specialty trades. Instead, we
            coordinate with properly licensed specialists. You still have one point of contact — us.
          </p>
          <div className="inline-block bg-blue-100 text-charcoal px-6 py-2 rounded-full text-sm font-bold">
            Note: All subcontractors are licensed, insured, and vetted by us. You never manage them
            directly.
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            {
              title: "Boilers",
              desc: "Commercial and residential boiler systems",
              icon: <Activity />,
            },
            {
              title: "Swimming Pools & Spas",
              desc: "New pool construction, repairs, and home improvements",
              icon: <Layout />,
            },
            {
              title: "Water Wells",
              desc: "Well drilling and water system installation",
              icon: <Droplets />,
            },
          ].map((trade, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm flex flex-col items-center text-center hover:border-brand-orange transition-colors"
            >
              <div className="bg-gray-50 p-4 rounded-2xl mb-4 text-charcoal">
                {React.cloneElement(trade.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h4 className="font-bold text-charcoal mb-2">{trade.title}</h4>
              <p className="text-gray-500 text-sm">{trade.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. What Our License Does NOT Cover */}
      {/* <section className="py-[100px] px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-500 font-bold tracking-widest uppercase text-xs mb-4 block">Limitations</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-6">Services We Do Not Self-Perform</h2>
            <p className="text-gray-500 text-lg font-medium">
              The CGC license does not automatically authorize the following. For these needs, we coordinate with specialized licensed contractors — or you may need a different license holder. For any of the below, we will help you find the right licensed professional or refer you appropriately.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-xl">
            <div className="grid grid-cols-2 bg-gray-50 p-6 border-b border-gray-200">
              <div className="font-black text-charcoal uppercase text-sm tracking-wider">Not Covered</div>
              <div className="font-black text-charcoal uppercase text-sm tracking-wider">Why</div>
            </div>
            {[
              { notCovered: "Heavy civil construction", why: "Requires separate classification" },
              { notCovered: "Highways and roads", why: "Requires separate classification" },
              { notCovered: "Engineering-only services", why: "Requires professional engineering license" },
              { notCovered: "Excavation-only contracting", why: "Requires specific classification" },
              { notCovered: "Fire protection systems", why: "Requires separate license" },
              { notCovered: "Standalone electrical/plumbing/HVAC work", why: "Requires trade-specific license" },
              { notCovered: "Specialty trade-only services", why: "Requires trade-specific license" }
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-2 p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3 font-bold text-gray-700">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  {item.notCovered}
                </div>
                <div className="flex items-center gap-3 text-gray-500 font-medium">
                  <Info className="w-4 h-4 text-brand-blue-deep shrink-0 opacity-50" />
                  {item.why}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 8. Service Areas & Why Choose Us */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] rounded-[20px] bg-charcoal relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Licensed, Experienced, and Client-Focused
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg font-medium">
              We Serve Residential & Commercial Clients Across Phoenix | Scottsdale | Mesa |
              Chandler | Glendale | Tempe | Gilbert | and surrounding Tampa Bay communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AZ CGC Dual License",
                desc: "General Builder (Residential & Commercial) – one contractor for both",
                icon: <BadgeCheck />,
              },
              {
                title: "Licensed & Insured",
                desc: "Fully licensed, insured, and bonded",
                icon: <Shield />,
              },
              {
                title: "General Contractor (GC)",
                desc: "We manage everything – you relax",
                icon: <HardHat />,
              },
              {
                title: "6+ Years Local Experience",
                desc: "We know Florida codes, weather, and materials",
                icon: <Clock />,
              },
              {
                title: "Subcontractor Coordination",
                desc: "We hire licensed electrical, plumbing, HVAC subs",
                icon: <Users />,
              },
              {
                title: "Modern Process",
                desc: "Video meetings, file uploads, and flexible financing",
                icon: <Video />,
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 text-[#FFFFFF]"
              >
                <div className="bg-brand-orange/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-orange">
                  {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-xl font-black mb-2">{benefit.title}</h3>
                <p className="opacity-80 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. 3-Step Process */}
      <section className="py-[100px] px-4 md:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-6">
              Simple, Stress‑Free Construction Management
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden lg:block overflow-hidden">
              <div className="h-full bg-brand-orange w-1/3 animate-marquee" />
            </div>

            {[
              {
                step: "1",
                title: "Share Your Vision",
                desc: "Schedule a video meeting or in-person consult. Upload blueprints, photos, or sketches. Discuss budget and timeline.",
                icon: <Upload />,
                bg: "bg-blue-50",
              },
              {
                step: "2",
                title: "Approve the Plan",
                desc: "Review our transparent quote. We handle permits and coordinate all subcontractors (electrical, plumbing, HVAC, etc.).",
                icon: <ClipboardCheck />,
                bg: "bg-orange-50",
              },
              {
                step: "3",
                title: "We Manage, You Enjoy",
                desc: "We supervise every trade, manage the budget, and deliver a finished project. Final walkthrough – then enjoy your new space.",
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

      {/* 10. FAQ */}
      <section className="py-[100px] px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              Knowledge Base
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              {
                q: "What is an Florida Certified General Contractor (CGC) license?",
                a: "The CGC Dual Building Contractor License combines B General Residential and Certified Commercial Building Contractor authority. It allows us to manage both residential and commercial construction projects as a General Contractor.",
              },
              {
                q: "Can you build a new home for me?",
                a: "Yes. Under our B license, we handle new home construction from permits to final walkthrough.",
              },
              {
                q: "Can you remodel my commercial office?",
                a: "Yes. Under our B-1 license, we perform office build-outs, tenant improvements, and commercial remodels.",
              },
              {
                q: "Do you do electrical or plumbing work yourselves?",
                a: "No. The CGC license requires us to subcontract electrical, plumbing, HVAC, and other specialty trades to properly licensed specialists. We manage them for you.",
              },
              {
                q: "Are you licensed, insured, and bonded?",
                a: "Yes. Licensed & Insured – fully licensed, insured, and bonded.",
              },
              {
                q: "Do you offer financing?",
                a: "Yes. Ask us about flexible financing options for qualifying residential and commercial projects.",
              },
              {
                q: "Do you serve my area?",
                a: "We serve Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Lutz, Wesley Chapel, and surrounding areas.",
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

      {/* 11. Final CTA / Quote Form */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mb-[15px] rounded-[20px] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">
              Let's Build
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-8 leading-tight">
              Ready to Start Your{" "}
              <span className="text-brand-orange">Residential or Commercial</span> Project?
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
                <Building2 className="w-48 h-48" />
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
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Both</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">
                  Service Needed
                </label>
                <select className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-charcoal transition-all outline-none appearance-none cursor-pointer">
                  <option>New Construction</option>
                  <option>Remodeling</option>
                  <option>Tenant Improvement</option>
                  <option>Office Build-Out</option>
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
                  <p className="font-black text-gray-500">Upload Blueprints, Photos, Sketches</p>
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
                Submit Request <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
