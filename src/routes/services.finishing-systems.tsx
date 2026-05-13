import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { 
  HardHat, Ruler, Building2, CheckCircle2, ShieldCheck, 
  ClipboardCheck, Truck, Hammer, ArrowRight, Video, 
  MapPin, Phone, Mail, ChevronDown, ChevronUp,
  Construction, Paintbrush, Zap, Droplets, Home,
  Shield, Users, Clock, CreditCard, Search, Upload,
  Layers, Layout, Sparkles, BadgeCheck
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

export const Route = createFileRoute("/services/finishing-systems")({
  head: () => ({
    title: "Finishing & Systems – Drywall, Electrical & Plumbing Coordination, Interior Finishes | Arizona Premiere Construction Group",
    meta: [
      { name: "description", content: "Professional finishing & systems services in Chandler, AZ. Drywall installation & repair, electrical & plumbing coordination, interior finishes & painting. ROC #328501. Free video consult. Call (602) 816 8177." },
    ],
  }),
  component: FinishingSystemsPage,
});

function FinishingSystemsPage() {
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
            src="/service-4.jpg" 
            alt="Finishing Systems background" 
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
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">Premium Arizona Finishing</span>
            </div>
            
            <h1 className="text-[35px] font-black text-white mb-6 leading-tight uppercase tracking-tight">
              Perfect Finishes. Seamless Systems. — <span className="text-brand-orange">The Final Touch</span> That Makes All the Difference
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              From smooth drywall and professional painting to fully coordinated electrical and plumbing systems, Arizona Premiere Construction Group delivers licensed, insured, and bonded finishing services across the Valley. <span className="text-white font-bold">ROC #328501</span>.
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
              <img src="/g4.jpg" alt="Finishing team" className="w-full h-full object-cover" />
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-10 -right-10 bg-[#0A2B63] p-8 rounded-3xl text-white shadow-2xl hidden md:block animate-bounce-slow">
              <span className="text-4xl font-black block mb-1">6+</span>
              <span className="text-xs opacity-60 uppercase font-bold tracking-widest">Years Local Exp</span>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">Quality Visible</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-8 leading-tight">
              Finishing & Systems – Where <span className="text-brand-blue-deep underline decoration-brand-orange underline-offset-8">Quality Becomes Visible</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed">
              <p>
                The difference between a good build and a great build is in the finishes — and the systems behind the walls. At Arizona Premiere Construction Group, we specialize in the critical finishing trades and systems coordination that bring your project to life. We are fully licensed (ROC #328501), insured, and bonded.
              </p>
              <p className="font-bold text-[#0A2B63]">
                From hanging and finishing drywall to coordinating licensed electricians and plumbers, we ensure every surface is flawless and every system functions perfectly. No gaps, no guesswork, no subcontractor headaches. Just seamless, beautiful results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Services Grid */}
      <section className="py-[100px] px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">What We Finish & Coordinate</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-6">Master Interior Systems</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">Flawless surfaces and perfectly integrated plumbing and electrical systems.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Drywall Systems", 
              desc: "Hanging, taping, mudding, sanding, texture matching, and repairs for holes, cracks, or water damage.", 
              icon: <Layers />,
              image: "/service-4.jpg"
            },
            { 
              title: "Electrical Coordination", 
              desc: "We manage licensed electricians for wiring, outlets, lighting fixtures, panel upgrades, and code compliance.", 
              icon: <Zap />,
              image: "/service-1.jpg"
            },
            { 
              title: "Plumbing Coordination", 
              desc: "We manage licensed plumbers for pipe installation, fixture hookups, water heaters, and drainage systems.", 
              icon: <Droplets />,
              image: "/service-2.jpg"
            },
            { 
              title: "Interior & Exterior Painting", 
              desc: "Professional prep, premium paints, clean lines, and durable finishes for any surface.", 
              icon: <Paintbrush />,
              image: "/g4.jpg"
            },
            { 
              title: "Flooring Installation", 
              desc: "Hardwood, tile, laminate, vinyl, carpet – precision installation with proper subfloor prep.", 
              icon: <Layout />,
              image: "/g2.jpg"
            },
            { 
              title: "Exterior Improvements", 
              desc: "Siding, stucco, trim, caulking, and weatherproofing for curb appeal and protection.", 
              icon: <Home />,
              image: "/g3.jpg"
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
                  to={["Interior & Exterior Painting", "Flooring Installation"].includes(item.title) ? "/services/specialty-trade" : "/contact"} 
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
              <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Every Finish. Every System.</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Complete Project Finishing</h2>
              <div className="flex items-center gap-3 text-white/60 font-bold">
                <span className="w-12 h-1 bg-brand-orange rounded-full" />
                <p>We eliminate the headache of managing multiple subcontractors.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { 
                title: "Drywall Systems", 
                subtitle: "Smooth Walls, Seamless Ceilings",
                desc: "Drywall is the canvas for your entire space. Our crew delivers flat, smooth, and crack-free surfaces ready for paint. We handle hanging, taping, mudding, and Level 5 finishes with moisture-resistant options for bathrooms.",
                icon: <Layers />,
                cta: "Need drywall installed or repaired?"
              },
              { 
                title: "Electrical Coordination", 
                subtitle: "Safe, Code-Compliant Systems",
                desc: "We ensure every electrical component is installed safely and up to Arizona code. We manage fully licensed electricians for new construction wiring, panel upgrades, and smart home recessed lighting.",
                icon: <Zap />,
                cta: "Planning electrical work?"
              },
              { 
                title: "Plumbing Coordination", 
                subtitle: "Reliable Plumbing Rough-In to Finish",
                desc: "Water damage is expensive. We coordinate only licensed, insured plumbers for rough-ins, fixture installation, water line gas line work, and modern tankless water heater systems.",
                icon: <Droplets />,
                cta: "Need plumbing coordination?"
              },
              { 
                title: "Interior & Exterior Painting", 
                subtitle: "Flawless Paint – Professional Every Time",
                desc: "Paint is the finishing touch that ties everything together. We deliver crisp lines, even coverage, and durable finishes for walls, trim, doors, and exterior stucco or brick facades.",
                icon: <Paintbrush />,
                cta: "Ready for a fresh coat?"
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
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Trust & Efficiency</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-6">Why Homeowners Trust Our Finishes</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">A premium comparison of craftsmanship and commitment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Licensed, Insured & Bonded", desc: "ROC #328501 – Full legal and financial protection for every finishing project.", icon: <Shield /> },
              { title: "Licensed Sub Coordination", desc: "We manage only licensed electricians and plumbers who meet Arizona state requirements.", icon: <BadgeCheck /> },
              { title: "6+ Years Local Experience", desc: "We know Arizona codes, climate-specific finishes, and material durability.", icon: <Clock /> },
              { title: "Video Meetings & File Uploads", desc: "Approve finishes, samples, and track progress remotely from anywhere.", icon: <Video /> },
              { title: "Financing Available", desc: "Flexible options for larger finishing and systems projects.", icon: <CreditCard /> },
              { title: "Supplier Backlinks", desc: "Full transparency on materials and sourcing from our trusted network.", icon: <Search /> }
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

      {/* 6. Finishing Process Section */}
      <section className="py-[100px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[20px] bg-white border border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">The Workflow</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-6">Simple, Stress‑Free Finishing</h2>
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
                  title: "Share Your Vision", 
                  desc: "Schedule a video meeting or in-person consult. Upload photos, plans, or finish inspiration.",
                  icon: <Upload />,
                  bg: "bg-blue-50"
                },
                { 
                  step: "Step 02", 
                  title: "Approve the Plan", 
                  desc: "Review our AI-assisted, transparent estimate. Choose paint colors and flooring materials.",
                  icon: <ClipboardCheck />,
                  bg: "bg-orange-50"
                },
                { 
                  step: "Step 03", 
                  title: "We Finish, You Enjoy", 
                  desc: "Our crew and coordinated subs complete drywall, painting, flooring, electrical, and plumbing.",
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
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Valley Wide Finishing</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-12 leading-tight">
            Serving Finishing & Systems <span className="text-brand-orange">Across the Valley</span>
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
            <p className="text-gray-500 font-medium">Get clear answers to common finishing and systems queries.</p>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              { q: "Do you perform electrical and plumbing work yourselves?", a: "We coordinate all electrical and plumbing work with licensed, insured, and vetted subcontractors. You work only with us — we manage them." },
              { q: "Are your electricians and plumbers licensed?", a: "Yes. We only coordinate with fully licensed professionals who meet Arizona state requirements." },
              { q: "Can you match existing drywall texture?", a: "Absolutely. We match orange peel, knockdown, smooth, and other textures seamlessly." },
              { q: "Do you offer financing for finishing projects?", a: "Yes. Ask us about flexible financing options for larger projects." },
              { q: "How long does drywall repair take?", a: "Most small repairs are completed in 1–2 days, including drying time between mud coats." },
              { q: "Can I see paint colors or flooring samples before ordering?", a: "Yes. We offer video meetings, physical samples, and supplier backlinks for full transparency." },
              { q: "Do you handle commercial finishing and systems?", a: "Yes. We provide drywall, painting, flooring, and sub-coordination for commercial properties." }
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
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Final Touches</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E110A] mb-8 leading-tight">
              Request a <span className="text-brand-orange">Finishing & Systems</span> Quote
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Fill out the form below to initiate your finishing project. From flawless drywall to coordinated systems, we provide premium estimates within 24 hours.
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
              <div className="absolute top-0 right-0 p-10 opacity-10"><Paintbrush className="w-48 h-48" /></div>
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
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Service Needed</label>
                <select className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-[#0A2B63] transition-all outline-none appearance-none cursor-pointer">
                  <option>Select Service...</option>
                  <option>Drywall</option>
                  <option>Electrical Coordination</option>
                  <option>Plumbing Coordination</option>
                  <option>Painting</option>
                  <option>Flooring</option>
                  <option>Exterior Improvements</option>
                  <option>Multiple Services</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Project Address (City)</label>
                <input type="text" placeholder="e.g. Chandler, AZ" className="w-full bg-white border-transparent focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 rounded-2xl px-6 py-4 font-bold text-[#0A2B63] transition-all outline-none" />
              </div>
              
              <div className="md:col-span-2 p-8 border-2 border-dashed border-gray-200 rounded-[2rem] bg-white flex flex-col items-center justify-center gap-4 group hover:border-brand-orange transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-300 group-hover:text-brand-orange transition-colors" />
                <div className="text-center">
                  <p className="font-black text-gray-500">Upload Photos/Plans</p>
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
                Submit Finishing Request <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
