import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { 
  HardHat, Ruler, Building2, CheckCircle2, ShieldCheck, 
  ClipboardCheck, Truck, Hammer, ArrowRight, Video, 
  MapPin, Phone, Mail, ChevronDown, ChevronUp,
  Construction, Paintbrush, Zap, Droplets, Home,
  Shield, Users, Clock, CreditCard, Search, Upload,
  Layers, Layout, Sparkles, BadgeCheck, Utensils, Bath, Palette, PencilRuler
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

export const Route = createFileRoute("/services/specialty-trade")({
  head: () => ({
    title: "Specialty Trade Services – Roofing, Flooring, Painting, Concrete & Framing | Arizona Premiere Construction Group",
    meta: [
      { name: "description", content: "Licensed specialty trade contractor in Chandler, AZ. Roofing, flooring, interior & exterior painting, concrete work, and framing. ROC #328501. Free video consult. Call (602) 816 8177." },
    ],
  }),
  component: SpecialtyTradePage,
});

function SpecialtyTradePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="bg-[#F8FAFC] overflow-x-hidden">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          <img 
            src="/service-3.jpg" 
            alt="Specialty Trade background" 
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2B63]/90 via-[#0A2B63]/60 to-[#0A2B63]/90" />
        </div>

        {/* Floating Blueprint Graphics (Decorative) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 border-l border-t border-white/30" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border-r border-b border-white/30" />
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} />
        </div>

        {/* Content Card */}
        <div className={`relative z-10 max-w-5xl mx-auto px-4 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-16 rounded-[2rem] shadow-2xl text-center">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Premium Arizona Tradecraft</span>
            </div>
            
            <h1 className="text-[35px] font-black text-white mb-6 leading-tight uppercase tracking-tight">
              Precision Trades. Professional Results. — <span className="text-brand-orange">Arizona's Specialty</span> Trade Experts
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              From roofing replacements and concrete driveways to flawless painting and structural framing, Arizona Premiere Construction Group delivers licensed, insured, and bonded trade services across the Valley. <span className="text-white font-bold">ROC #328501</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/contact" className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl shadow-brand-orange/20">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all">
                <Video className="w-5 h-5" /> Video Meeting
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-brand-orange" />
                <div className="text-left">
                  <div className="text-white font-bold text-sm">ROC #328501</div>
                  <div className="text-white/50 text-[10px] uppercase font-bold tracking-tighter">Licensed License</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-brand-orange" />
                <div className="text-left">
                  <div className="text-white font-bold text-sm">Insured • Bonded</div>
                  <div className="text-white/50 text-[10px] uppercase font-bold tracking-tighter">Total Security</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-white relative overflow-hidden">
        {/* Background Blueprint Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
          backgroundImage: 'linear-gradient(#0A2B63 1px, transparent 1px), linear-gradient(90deg, #0A2B63 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="/g3.jpg" alt="Specialty Trade team" className="w-full h-full object-cover" />
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-10 -right-10 bg-[#0A2B63] p-8 rounded-3xl text-white shadow-2xl hidden md:block animate-bounce-slow">
              <span className="text-4xl font-black block mb-1">6+</span>
              <span className="text-xs opacity-60 uppercase font-bold tracking-widest">Years Local Exp</span>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">Professional Craftsmanship</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-8 leading-tight">
              Specialty Trades – The <span className="text-brand-blue-deep underline decoration-brand-orange underline-offset-8">Backbone of Every Build</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed">
              <p>
                Great construction and remodeling rely on skilled trades. At Arizona Premiere Construction Group, we don't just manage projects — we perform the critical specialty trade work that ensures durability, beauty, and code compliance. We are fully licensed (ROC #328501), insured, and bonded.
              </p>
              <p className="font-bold text-[#0A2B63]">
                Whether you need a new roof, fresh interior paint, a stamped concrete patio, or structural framing for an addition, our experienced crew delivers precision craftsmanship. No subcontractor runaround. Just quality work, done right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Services Grid */}
      <section className="py-[100px] px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">What We Specialize In</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-6">Expert Trade Divisions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">Master-level execution for the most critical components of your property.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Roofing Services", 
              desc: "New roofs, roof replacements, repairs, and ventilation. Residential and commercial.", 
              icon: <ShieldCheck />,
              image: "/service-3.jpg"
            },
            { 
              title: "Flooring Installation", 
              desc: "Hardwood, tile, laminate, vinyl, carpet, and luxury vinyl plank (LVP).", 
              icon: <Layout />,
              image: "/service-2.jpg"
            },
            { 
              title: "Interior & Exterior Painting", 
              desc: "Professional prep, premium paints, clean lines, and durable finishes.", 
              icon: <Paintbrush />,
              image: "/service-4.jpg"
            },
            { 
              title: "Concrete Work", 
              desc: "Foundations, slabs, driveways, patios, walkways, and stamped concrete.", 
              icon: <Construction />,
              image: "/g3.jpg"
            },
            { 
              title: "Framing", 
              desc: "Structural walls, roof framing, floor joists, and custom framing for additions.", 
              icon: <Hammer />,
              image: "/g1.jpg"
            },
            { 
              title: "Drywall Systems", 
              desc: "Hanging, taping, mudding, sanding, and texture matching.", 
              icon: <Layers />,
              image: "/g2.jpg"
            }
          ].map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[2rem] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="h-64 overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B63] to-transparent opacity-60" />
                <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white border border-white/30">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-[#0A2B63] mb-4">{item.title}</h3>
                <p className="text-gray-500 mb-8 font-medium leading-relaxed">{item.desc}</p>
                <Link 
                  to={item.title === "Drywall Systems" ? "/services/finishing-systems" : "/contact"} 
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
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-[#0A2B63] relative overflow-hidden">
        {/* Background Blueprint Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', 
          backgroundSize: '80px 80px' 
        }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="text-left">
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Every Trade, Mastered</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Complete Trade Management</h2>
              <div className="flex items-center gap-3 text-white/60 font-bold">
                <span className="w-12 h-1 bg-brand-orange rounded-full" />
                <p>We eliminate the headache of hiring multiple specialty contractors.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { 
                title: "Roofing Services", 
                subtitle: "Durable Roofing – Residential & Commercial",
                desc: "Protect your biggest investment with professional roofing services. We work with all major materials including asphalt shingles, tile, metal, and flat systems. We handle replacements, repairs, and storm response.",
                icon: <ShieldCheck />,
                cta: "Need a roof repair or replacement?"
              },
              { 
                title: "Flooring Installation", 
                subtitle: "Beautiful Floors – Any Room, Any Material",
                desc: "From cozy bedrooms to high-traffic commercial spaces, we install floors that last. Precision cutting, proper subfloor preparation, and flawless finishing for hardwood, tile, laminate, and luxury vinyl plank (LVP).",
                icon: <Layout />,
                cta: "Ready for new floors?"
              },
              { 
                title: "Interior & Exterior Painting", 
                subtitle: "Fresh Paint – Professional Finishes Inside and Out",
                desc: "A fresh coat of paint transforms any space. We handle everything from color consultation to surface prep, caulking, priming, and clean-up. Expert application for siding, stucco, trim, and cabinetry.",
                icon: <Paintbrush />,
                cta: "Give your home or business a fresh look."
              },
              { 
                title: "Concrete Work", 
                subtitle: "Strong Foundations – Beautiful Flatwork",
                desc: "Concrete is the foundation of every structure. We deliver durable, level, and visually appealing concrete for foundations, driveways, patios, and stamped decorative work.",
                icon: <Construction />,
                cta: "Planning a concrete project?"
              },
              { 
                title: "Framing", 
                subtitle: "Structural Framing – The Skeleton of Your Build",
                desc: "Framing requires precision, experience, and attention to load-bearing details. Our crew delivers straight, square, and code-compliant framing for walls, roofs, and room additions.",
                icon: <Hammer />,
                cta: "Starting a new build or addition?"
              },
              { 
                title: "Drywall Installation & Repair", 
                subtitle: "Seamless Drywall – Smooth Walls, Perfect Finish",
                desc: "Great paint starts with great drywall. We install new drywall and repair damaged walls with invisible results. Expertise in taping, mudding, and matching any texture (orange peel, knockdown, smooth).",
                icon: <Layers />,
                cta: "Need drywall work?"
              }
            ].map((capability, i) => (
              <div key={i} className="group bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] hover:bg-white hover:text-[#0A2B63] transition-all duration-500">
                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-[#0A2B63]/10 transition-all">
                    {React.cloneElement(capability.icon as React.ReactElement, { className: "w-10 h-10" })}
                  </div>
                  <div>
                    <h4 className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2">{capability.title}</h4>
                    <h3 className="text-2xl font-black mb-4">{capability.subtitle}</h3>
                  </div>
                </div>
                <p className="opacity-70 group-hover:opacity-100 font-medium leading-relaxed mb-8">{capability.desc}</p>
                <div className="flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-[#0A2B63]/10">
                  <span className="font-bold text-sm">{capability.cta}</span>
                  <button className="text-brand-orange font-black flex items-center gap-2 hover:gap-4 transition-all">
                    Get Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-[100px] px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Contractor Reliability</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-6">Why Homeowners Trust Our Trades</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">A premium comparison of craftsmanship and commitment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Licensed, Insured & Bonded", desc: "ROC #328501 – Full legal and financial protection for every trade project.", icon: <Shield /> },
              { title: "6+ Years Local Experience", desc: "We know Arizona materials, soil conditions, and desert climate needs.", icon: <Clock /> },
              { title: "Single Point of Contact", desc: "No managing multiple vendors – one call handles all your trade needs.", icon: <Users /> },
              { title: "Video Meetings & File Uploads", desc: "Approve samples, colors, and track progress remotely from anywhere.", icon: <Video /> },
              { title: "Financing Available", desc: "Flexible options for larger roofing, flooring, or concrete projects.", icon: <CreditCard /> },
              { title: "Supplier Backlinks", desc: "Full transparency on materials and sourcing from trusted partners.", icon: <Search /> }
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue-deep/5 rounded-bl-[5rem] group-hover:bg-brand-orange/10 transition-colors" />
                <div className="bg-brand-blue-deep/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-brand-blue-deep group-hover:bg-brand-orange group-hover:text-white transition-all">
                  {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-2xl font-black text-[#0A2B63] mb-4">{benefit.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Trade Process Section */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-white border border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">The Workflow</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-6">Simple, Stress‑Free Trade Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">No runaround. No hidden fees. Just three straightforward steps.</p>
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
                  title: "Share Your Needs", 
                  desc: "Schedule a video meeting or in-person consult. Upload photos or measurements.",
                  icon: <Upload />,
                  bg: "bg-blue-50"
                },
                { 
                  step: "Step 02", 
                  title: "Approve the Quote", 
                  desc: "Review our AI-assisted, transparent estimate. Choose materials from our supplier network.",
                  icon: <ClipboardCheck />,
                  bg: "bg-orange-50"
                },
                { 
                  step: "Step 03", 
                  title: "We Work, You Enjoy", 
                  desc: "Our licensed crew performs the trade work efficiently and cleanly. Final walkthrough.",
                  icon: <Sparkles />,
                  bg: "bg-teal-50"
                }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className={`w-32 h-32 ${step.bg} rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-xl relative`}>
                    <div className="bg-[#0A2B63] text-white w-10 h-10 rounded-full flex items-center justify-center absolute -top-2 -right-2 font-black text-xs">
                      {step.step.split(' ')[1]}
                    </div>
                    {React.cloneElement(step.icon as React.ReactElement, { className: "w-12 h-12 text-[#0A2B63]" })}
                  </div>
                  <h3 className="text-3xl font-black text-[#0A2B63] mb-4">{step.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed max-w-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Service Areas Section */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-[#0A2B63] relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Valley Wide Service</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-12 leading-tight">
            Specialty Trades Across <span className="text-brand-orange">the Valley</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Phoenix", "Scottsdale", "Mesa", "Chandler", "Glendale", "Tempe", "Gilbert"].map((city, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/10 px-8 py-5 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group cursor-default">
                <div className="w-2 h-2 bg-brand-orange rounded-full group-hover:scale-150 transition-transform" />
                <span className="text-white font-bold text-lg">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-[100px] px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Knowledge Base</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E110A] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-medium">Get clear answers to common specialty trade queries.</p>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              { q: "Do I need a licensed contractor for roofing or framing?", a: "Yes. Arizona law requires a licensed contractor for roofing, framing, concrete, and most structural work. We are ROC #328501." },
              { q: "Can you match existing paint colors or textures?", a: "Absolutely. We can color-match paint and replicate drywall textures (orange peel, knockdown, smooth)." },
              { q: "Do you offer financing for roofing or flooring projects?", a: "Yes. Ask us about flexible financing options for larger trade projects." },
              { q: "How long does a roof replacement take?", a: "Typically 1–3 days depending on size and material. We provide a clear timeline before starting." },
              { q: "Can I see material samples before ordering?", a: "Yes. We offer video meetings, physical samples, and supplier backlinks for full transparency." },
              { q: "Do you handle commercial specialty trades?", a: "Yes. We perform roofing, flooring, painting, concrete, framing, and drywall for commercial properties." }
            ].map((item, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-8 text-left group">
                    <span className="text-lg font-black text-[#0A2B63] group-data-[state=open]:text-brand-orange transition-colors">{item.q}</span>
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
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Get a Fast Estimate</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-8 leading-tight">
              Request a <span className="text-brand-orange">Specialty Trade</span> Quote
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Fill out the form below to initiate your trade project. From small repairs to major replacements, we provide premium estimates within 24 hours.
            </p>
            
            <div className="bg-[#0A2B63] p-10 rounded-[3rem] text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-brand-orange p-3 rounded-xl">
                    <BadgeCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xl">Response Promise</h4>
                    <p className="text-white/60 text-sm">We'll reply within 24 hours, Monday–Saturday.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-brand-orange" />
                    <span className="font-bold">(602) 816 8177</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-brand-orange" />
                    <span className="font-bold">info@arizonapremier.com</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-10 opacity-10"><Hammer className="w-48 h-48" /></div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-inner grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-[#0A2B63] transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Email / Phone</label>
                <input type="text" placeholder="john@example.com" className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-[#0A2B63] transition-all outline-none" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Trade Needed</label>
                <select className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-[#0A2B63] transition-all outline-none appearance-none cursor-pointer">
                  <option>Select Trade...</option>
                  <option>Roofing</option>
                  <option>Flooring</option>
                  <option>Painting</option>
                  <option>Concrete</option>
                  <option>Framing</option>
                  <option>Drywall</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Project Address (City)</label>
                <input type="text" placeholder="e.g. Chandler, AZ" className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-[#0A2B63] transition-all outline-none" />
              </div>
              
              <div className="md:col-span-2 p-8 border-2 border-dashed border-gray-200 rounded-[2rem] bg-white flex flex-col items-center justify-center gap-4 group hover:border-brand-orange transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-300 group-hover:text-brand-orange transition-colors" />
                <div className="text-center">
                  <p className="font-black text-gray-500">Upload Photos/Measurements</p>
                  <p className="text-xs text-gray-400 font-medium">PDF, JPG, PNG (Max 50MB)</p>
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Preferred Meeting</label>
                <select className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-[#0A2B63] transition-all outline-none appearance-none cursor-pointer">
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
                  <span className="text-sm font-bold text-gray-600 group-hover:text-[#0A2B63] transition-colors">I'm interested in financing</span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-6 h-6 bg-white border-2 border-gray-200 rounded-lg peer-checked:bg-brand-orange peer-checked:border-brand-orange transition-all" />
                    <CheckCircle2 className="w-4 h-4 text-white absolute inset-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm font-bold text-gray-600 group-hover:text-[#0A2B63] transition-colors">Send me supplier/material information</span>
                </label>
              </div>

              <button className="md:col-span-2 bg-[#0A2B63] hover:bg-[#0A2B63]/95 text-white px-10 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-blue-900/20 transition-all hover:scale-[1.02] active:scale-95 mt-4">
                Submit Trade Request <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
