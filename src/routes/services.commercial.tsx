import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { 
  Building2, Hammer, Layout, ShieldCheck, KeyIcon, Paintbrush, 
  Layers, ArrowRight, Video, CheckCircle2, Shield, Clock, Users, BadgeCheck,
  Phone, Mail, HardHat, TrendingUp, Upload, ClipboardCheck, Sparkles, ChevronDown,
  Wrench, Zap, Droplets, Thermometer, Flame, Settings, Search
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

export const Route = createFileRoute("/services/commercial")({
  head: () => ({
    title: "Commercial Services – Office Build-Outs, Tenant Improvements & Commercial Construction | B-1 General Commercial Contractor | ROC #328501",
    meta: [
      { name: "description", content: "Licensed B-1 General Commercial Contractor in Chandler, AZ. Office build-outs, retail renovations, tenant improvements, commercial remodeling & construction management. ROC #328501. Free video consult. Call (602) 816 8177." },
    ],
  }),
  component: CommercialServicesPage,
});

function CommercialServicesPage() {
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
            src="/service-5.jpg" 
            alt="Commercial Construction" 
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2B63]/90 via-[#0A2B63]/70 to-[#0A2B63]/90" />
        </div>

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} />
        </div>

        <div className={`relative z-10 max-w-6xl mx-auto px-4 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-16 rounded-[2rem] shadow-2xl text-center">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">B-1 General Commercial Contractor</span>
            </div>
            
            <h1 className="text-[35px] md:text-5xl font-black text-white mb-6 leading-tight uppercase tracking-tight">
              Commercial Expertise. <span className="text-brand-orange">Professional Results.</span>
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
              Under our AZ KB-1 Dual Building Contractor License (B-1 General Commercial), Arizona Premiere Construction Group delivers professional commercial construction, remodeling, and tenant improvements across the Valley. We manage your project from start to finish. <span className="text-white font-bold">ROC #328501</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/contact" className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl shadow-brand-orange/20">
                Request a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#0A2B63] px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl">
                <Video className="w-5 h-5" /> Schedule Video Meeting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-white relative overflow-hidden border border-gray-100 shadow-sm">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
          backgroundImage: 'linear-gradient(#0A2B63 1px, transparent 1px), linear-gradient(90deg, #0A2B63 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">Commercial Construction</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-8 leading-tight">
              Managed by Pros, <span className="text-brand-blue-deep underline decoration-brand-orange underline-offset-8">Built for Business</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Your commercial space is more than a building — it's your brand, your employees' workplace, and your customers' first impression. At Arizona Premiere Construction Group, we treat it with the professionalism it deserves. Under our B-1 General Commercial Contractor license (part of the AZ KB-1 Dual License), we are authorized to construct commercial buildings, remodel existing properties, perform tenant improvements, and manage full-scale commercial projects.
              </p>
              <p className="font-bold text-[#0A2B63]">
                We are fully licensed (ROC #328501), insured, and bonded. As your General Contractor (GC) , we provide a single point of contact — overseeing every trade, managing budgets, and ensuring on-time delivery. No subcontractor chaos. No project delays. Just results.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="/g4.jpg" alt="Commercial Build Out" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Services Grid */}
      <section className="py-[100px] px-4 md:px-8 bg-[#0A2B63] mx-[15px] rounded-[20px] text-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Our Commercial Services</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">What We Do for Your Business</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Building Construction", desc: "New construction for offices, retail stores, warehouses, and light commercial spaces.", icon: <Building2 /> },
            { title: "Office Build-Outs", desc: "Complete interior construction for corporate offices, medical suites, and professional spaces.", icon: <Layout /> },
            { title: "Tenant Improvements", desc: "Customize leased spaces for your business — walls, flooring, lighting, and plumbing coordination.", icon: <KeyIcon /> },
            { title: "Commercial Remodeling", desc: "Renovate existing commercial properties — layout changes, finishes, and structural updates.", icon: <Hammer /> },
            { title: "Retail Renovations", desc: "Update storefronts, sales floors, break rooms, and customer areas.", icon: <TrendingUp /> },
            { title: "Commercial Repairs", desc: "Fix structural issues, roof damage, flooring problems, and exterior deterioration.", icon: <ShieldCheck /> },
            { title: "Construction Management", desc: "We supervise every trade, manage budgets, schedule inspections, and ensure on-time delivery.", icon: <HardHat /> },
            { title: "Subcontractor Coordination", desc: "We hire and manage all specialty trades (electrical, plumbing, HVAC) so you don't have to.", icon: <Users /> }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:border-brand-orange hover:bg-white/10 transition-all duration-300 group flex flex-col h-full">
              <div className="bg-brand-orange/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
              </div>
              <h3 className="font-black text-xl mb-3">{item.title}</h3>
              <p className="text-white/70 font-medium leading-relaxed text-sm flex-grow">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Detailed Capabilities */}
      <section className="py-[100px] px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Detailed Commercial Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-6">Full-Service Commercial General Contracting</h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              As your General Contractor (GC), we manage every phase of your commercial project — from initial consultation to final walkthrough. We coordinate all licensed subcontractors for specialty trades while self-performing key structural work.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Self Performed */}
            <div className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 shadow-sm">
              <h3 className="text-2xl font-black text-[#0A2B63] mb-8 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-brand-orange" /> What We Self-Perform
              </h3>
              <div className="space-y-6">
                {[
                  { title: "Framing", desc: "Structural walls, roof framing, and commercial-grade framing" },
                  { title: "Drywall Installation & Repair", desc: "Hanging, taping, mudding, sanding, and texture matching" },
                  { title: "Roofing Services", desc: "Commercial roof replacement, repair, and maintenance" },
                  { title: "Flooring Installation", desc: "Hardwood, tile, laminate, vinyl, carpet — commercial-grade materials" },
                  { title: "Interior & Exterior Painting", desc: "Professional finishes for offices, retail, and industrial spaces" },
                  { title: "Concrete Work", desc: "Foundations, slabs, walkways, and parking lot repairs" },
                  { title: "Exterior Improvements", desc: "Siding, stucco, storefront facades, and curb appeal upgrades" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                      <p className="text-gray-500 text-sm mt-1 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordinated */}
            <div className="bg-[#0A2B63] border border-blue-900 rounded-[2rem] p-8 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none"><Building2 className="w-64 h-64" /></div>
              <h3 className="text-2xl font-black text-brand-orange mb-8 flex items-center gap-3 relative z-10">
                <Users className="w-6 h-6" /> What We Coordinate
              </h3>
              <div className="space-y-6 mb-8 relative z-10">
                {[
                  { title: "Electrical", desc: "Wiring, panels, lighting fixtures, data cabling, and code compliance", icon: <Zap /> },
                  { title: "Plumbing", desc: "Pipe installation, restrooms, breakrooms, water heaters, and drainage", icon: <Droplets /> },
                  { title: "HVAC / Air Conditioning", desc: "Heating, cooling, ductwork, ventilation, and commercial HVAC systems", icon: <Thermometer /> },
                  { title: "Fire Protection Systems", desc: "Sprinkler systems and fire alarms (coordinated with licensed specialists)", icon: <Flame /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-colors">
                    <div className="bg-brand-orange/20 p-3 rounded-xl text-brand-orange shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-white/70 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-brand-orange/10 border border-brand-orange/30 p-5 rounded-xl relative z-10">
                <p className="text-sm font-bold text-white/90 leading-relaxed">
                  <span className="text-brand-orange uppercase tracking-widest mr-2 block mb-1 text-xs">Important Note</span> 
                  All subcontractors are licensed, insured, and vetted by us. You never manage them directly — we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Project Categories Table */}
      <section className="py-[100px] px-4 md:px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Commercial Project Categories</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-6">Common Commercial Projects We Handle</h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-[#0A2B63] p-6 border-b border-[#0A2B63]">
              <div className="font-black text-white uppercase text-sm tracking-wider hidden md:block">Project Type</div>
              <div className="font-black text-white uppercase text-sm tracking-wider hidden md:block">Examples</div>
            </div>
            {[
              { type: "Office Build-Outs", examples: "Corporate offices, medical suites, dental offices, law firms, co-working spaces" },
              { type: "Retail Renovations", examples: "Clothing stores, boutiques, electronics stores, grocery stores, showrooms" },
              { type: "Restaurant & Food Service", examples: "Quick-service restaurants, cafes, coffee shops, commercial kitchens" },
              { type: "Warehouse & Industrial", examples: "Storage facilities, distribution centers, light industrial spaces" },
              { type: "Medical & Dental Offices", examples: "Exam rooms, reception areas, private offices, treatment rooms" },
              { type: "Tenant Improvements", examples: "Leased space customization — new walls, flooring, lighting, restrooms" },
              { type: "Commercial Remodels", examples: "Layout changes, modern finishes, updated storefronts, accessibility upgrades" },
              { type: "Property Repairs", examples: "Roof replacement, concrete repair, structural fixes, exterior restoration" }
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors gap-2">
                <div className="font-black text-[#0A2B63]">{item.type}</div>
                <div className="text-gray-500 font-medium">{item.examples}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-[100px] px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0A2B63] mb-16">Why Businesses Trust Arizona Premiere Construction Group</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "B-1 General License", desc: "Authorized for commercial construction, remodeling, tenant improvements", icon: <BadgeCheck /> },
              { title: "ROC #328501", desc: "Fully licensed, insured, and bonded", icon: <Shield /> },
              { title: "General Contractor", desc: "Single point of contact – we manage everything", icon: <HardHat /> },
              { title: "6+ Years Experience", desc: "We know Arizona commercial codes, permits, and regulations", icon: <Clock /> },
              { title: "Minimal Disruption", desc: "We work efficiently to keep your business operational", icon: <Building2 /> },
              { title: "Self-Perform Trades", desc: "Framing, drywall, roofing, flooring, painting, concrete", icon: <Wrench /> },
              { title: "Coordinate Subs", desc: "Electrical, plumbing, HVAC, fire protection", icon: <Settings /> },
              { title: "Video Meetings", desc: "Approve plans, materials, and progress remotely", icon: <Video /> },
              { title: "Financing Available", desc: "Flexible options for qualifying commercial projects", icon: <TrendingUp /> },
              { title: "Supplier Backlinks", desc: "Full transparency on materials and sourcing", icon: <Search /> }
            ].map((benefit, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:border-brand-orange hover:bg-white transition-all group">
                <div className="bg-[#0A2B63]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto text-[#0A2B63] group-hover:bg-brand-orange group-hover:text-white transition-all">
                  {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-sm font-black text-[#0A2B63] mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-xs font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 3-Step Process */}
      <section className="py-[100px] px-4 md:px-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Our Commercial Process</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-6">Simple, Professional Commercial Construction Management</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">No runaround. No hidden fees. Just three straightforward steps from consultation to completed commercial space.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden lg:block overflow-hidden">
              <div className="h-full bg-[#0A2B63] w-1/3 animate-marquee" />
            </div>

            {[
              { 
                step: "1", 
                title: "Share Your Vision", 
                desc: "Schedule a video meeting or in-person consult. Upload blueprints, photos, or layout sketches. Discuss budget, timeline, and business needs.",
                icon: <Upload />,
                bg: "bg-blue-100"
              },
              { 
                step: "2", 
                title: "Approve the Plan", 
                desc: "Review our AI-assisted, transparent quote. Choose materials from our supplier network. We handle permits and coordinate all subs.",
                icon: <ClipboardCheck />,
                bg: "bg-orange-100"
              },
              { 
                step: "3", 
                title: "We Build, You Focus", 
                desc: "Our crew performs framing, drywall, roofing, flooring, and painting. We coordinate electrical, plumbing, HVAC, and fire protection subs. Final walkthrough – then open for business.",
                icon: <Building2 />,
                bg: "bg-blue-50"
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10">
                <div className={`w-28 h-28 ${step.bg} rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-xl relative`}>
                  <div className="bg-brand-orange text-white w-8 h-8 rounded-full flex items-center justify-center absolute -top-1 -right-1 font-black text-xs">
                    {step.step}
                  </div>
                  {React.cloneElement(step.icon as React.ReactElement, { className: "w-10 h-10 text-[#0A2B63]" })}
                </div>
                <h3 className="text-2xl font-black text-[#0A2B63] mb-4">{step.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed max-w-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Service Areas */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-white border border-gray-100 relative overflow-hidden shadow-sm">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#0A2B63] mb-12 leading-tight">
            We Serve Commercial Clients <span className="text-brand-orange">Across the Valley</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Phoenix", "Scottsdale", "Mesa", "Chandler", "Glendale", "Tempe", "Gilbert", "and surrounding Arizona communities"].map((city, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 px-8 py-5 rounded-3xl border border-gray-200 hover:border-brand-orange transition-all group cursor-default">
                <div className="w-2 h-2 bg-brand-orange rounded-full group-hover:scale-150 transition-transform" />
                <span className="text-gray-700 font-bold text-lg">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-[100px] px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">FAQ – Commercial Services</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              { q: "What is a B-1 General Commercial Contractor?", a: "A B-1 license allows a contractor to construct commercial buildings, remodel commercial properties, perform tenant improvements, and manage commercial construction projects. We hold this license as part of our AZ KB-1 Dual License (ROC #328501)." },
              { q: "Can you build a new office or retail space for me?", a: "Yes. We handle new commercial construction from permits to final walkthrough." },
              { q: "Do you perform electrical, plumbing, or HVAC work yourselves?", a: "No. Under Arizona regulations, our license requires us to subcontract electrical, plumbing, HVAC, and fire protection to properly licensed specialists. We manage them for you." },
              { q: "How long does an office build-out take?", a: "Typically 4–12 weeks depending on scope and square footage. We provide a clear timeline before any work begins." },
              { q: "Can my business remain open during construction?", a: "In many cases, yes. We develop a construction phasing plan to minimize disruption to your customers and employees." },
              { q: "Do you offer financing for commercial projects?", a: "Yes. Ask us about flexible financing options for qualifying commercial construction and renovation projects." },
              { q: "Can I see my project progress remotely?", a: "Absolutely. We offer video meetings, photo updates, and live walkthroughs." },
              { q: "Do you handle commercial permits?", a: "Yes. We obtain all necessary permits for commercial construction, remodeling, and tenant improvement projects." }
            ].map((item, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="bg-gray-50 border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-8 text-left group">
                    <span className="text-lg font-black text-[#0A2B63] group-data-[state=open]:text-brand-orange transition-colors">{item.q}</span>
                    <div className="bg-white p-2 rounded-xl group-data-[state=open]:rotate-180 transition-transform">
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
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mb-[15px] rounded-[20px] bg-[#0A2B63] border border-blue-900 shadow-2xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10">
          <div className="lg:w-5/12 text-white">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Request a Quote – Commercial Services</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Start Your <span className="text-brand-orange">Commercial Project</span> Today
            </h2>
            
            <div className="bg-white/10 p-10 rounded-[3rem] border border-white/20 relative overflow-hidden backdrop-blur-md">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-brand-orange p-3 rounded-xl">
                    <BadgeCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xl">Response Promise</h4>
                    <p className="text-white/80 text-sm font-medium">We'll reply within 24 hours, Monday–Saturday.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-brand-orange" />
                    <span className="font-bold text-lg">(602) 816 8177</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-brand-orange" />
                    <span className="font-bold text-lg">info@arizonapremier.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <form className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Full Name *</label>
                <input type="text" placeholder="John Doe" required className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-[#0A2B63] transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Business Name</label>
                <input type="text" placeholder="Company LLC" className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-[#0A2B63] transition-all outline-none" />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Email / Phone *</label>
                <input type="text" placeholder="Contact Info" required className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-[#0A2B63] transition-all outline-none" />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Project Type</label>
                <select className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-[#0A2B63] transition-all outline-none appearance-none cursor-pointer">
                  <option>Office Build-Out</option>
                  <option>Retail Renovation</option>
                  <option>Tenant Improvement</option>
                  <option>New Commercial Construction</option>
                  <option>Commercial Remodel</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Project Address (City)</label>
                <input type="text" placeholder="e.g. Phoenix, AZ" className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-[#0A2B63] transition-all outline-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Square Footage</label>
                <input type="text" placeholder="Approximate Sq Ft" className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-[#0A2B63] transition-all outline-none" />
              </div>
              
              <div className="md:col-span-2 p-8 border-2 border-dashed border-gray-200 rounded-[2rem] bg-gray-50 flex flex-col items-center justify-center gap-4 group hover:border-brand-orange transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-300 group-hover:text-brand-orange transition-colors" />
                <div className="text-center">
                  <p className="font-black text-gray-500">Upload Blueprints, Photos, Layout Sketches</p>
                  <p className="text-xs text-gray-400 font-medium">PDF, JPG, PNG (Max 50MB)</p>
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Preferred Meeting</label>
                <select className="w-full bg-gray-50 border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-[#0A2B63] transition-all outline-none appearance-none cursor-pointer">
                  <option>Video Call</option>
                  <option>In-Person Consult</option>
                  <option>Phone Call</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-4 pt-4">
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-6 h-6 bg-gray-100 border-2 border-gray-200 rounded-lg peer-checked:bg-brand-orange peer-checked:border-brand-orange transition-all" />
                    <CheckCircle2 className="w-4 h-4 text-white absolute inset-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm font-bold text-gray-600 group-hover:text-[#0A2B63] transition-colors">I'm interested in financing</span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-6 h-6 bg-gray-100 border-2 border-gray-200 rounded-lg peer-checked:bg-brand-orange peer-checked:border-brand-orange transition-all" />
                    <CheckCircle2 className="w-4 h-4 text-white absolute inset-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm font-bold text-gray-600 group-hover:text-[#0A2B63] transition-colors">Send me supplier/material information</span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-6 h-6 bg-gray-100 border-2 border-gray-200 rounded-lg peer-checked:bg-brand-orange peer-checked:border-brand-orange transition-all" />
                    <CheckCircle2 className="w-4 h-4 text-white absolute inset-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm font-bold text-gray-600 group-hover:text-[#0A2B63] transition-colors">My business needs to remain open during construction</span>
                </label>
              </div>

              <button className="md:col-span-2 bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-brand-orange/20 transition-all hover:scale-[1.02] active:scale-95 mt-4">
                Submit Commercial Request <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
