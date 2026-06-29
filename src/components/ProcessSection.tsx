import { ClipboardList, MessageSquare, Ruler, Hammer, Sparkles } from "lucide-react";
import logo1 from "@/assets/logos/1.png";
import logo2 from "@/assets/logos/2.png";
import logo3 from "@/assets/logos/3.png";
import logo4 from "@/assets/logos/4.png";
import logo5 from "@/assets/logos/5.png";
import logo6 from "@/assets/logos/6.png";
import logo7 from "@/assets/logos/7.png";
import logo8 from "@/assets/logos/8.png";
import logo9 from "@/assets/logos/9.png";
import logo10 from "@/assets/logos/10.png";
import logo11 from "@/assets/logos/11.png";
import logo12 from "@/assets/logos/12.png";
import logo13 from "@/assets/logos/13.png";
import logo14 from "@/assets/logos/14.png";

const steps = [
  {
    icon: ClipboardList,
    title: "Request Free Estimate",
    lead: "Tell us about your project — no obligation, no pressure.",
  },
  {
    icon: MessageSquare,
    title: "Consultation & Planning",
    lead: "We visit your home and listen to your vision in detail.",
  },
  {
    icon: Ruler,
    title: "Design & Approval",
    lead: "Scope, selections, and a transparent timeline you approve.",
  },
  {
    icon: Hammer,
    title: "Construction & Delivery",
    lead: "Craftsmen on site, clean work, finished on schedule.",
  },
];

const logos = [
  { src: logo1, alt: "Partner Logo 1" },
  { src: logo2, alt: "Partner Logo 2" },
  { src: logo3, alt: "Partner Logo 3" },
  { src: logo4, alt: "Partner Logo 4" },
  { src: logo5, alt: "Partner Logo 5" },
  { src: logo6, alt: "Partner Logo 6" },
  { src: logo7, alt: "Partner Logo 7" },
  { src: logo8, alt: "Partner Logo 8" },
  { src: logo9, alt: "Partner Logo 9" },
  { src: logo10, alt: "Partner Logo 10" },
  { src: logo11, alt: "Partner Logo 11" },
  { src: logo12, alt: "Partner Logo 12" },
  { src: logo13, alt: "Partner Logo 13" },
  { src: logo14, alt: "Partner Logo 14" },
];

export function ProcessSection() {
  const loop = [...logos, ...logos];

  return (
    <section className="relative overflow-hidden mx-[15px] mt-[15px] rounded-2xl border border-white/5">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60 transform-gpu pointer-events-none"
        />
        {/* Dark Overlay with subtle copper warmth */}
        <div className="absolute inset-0 bg-[#1e110a]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e110a]/95 via-[#1e110a]/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-[60px]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-copper/35 bg-copper/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
            <Sparkles className="h-3.5 w-3.5 text-copper animate-pulse" />
            Our Process
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Four Steps From{" "}
            <span className="text-copper italic font-serif font-bold">Vision to Keys</span>
          </h2>

          <p className="max-w-none text-base text-white/80 leading-relaxed font-sans">
            A simple, transparent process that keeps you informed and in control from the first phone call to the final walkthrough.
          </p>
        </div>

        {/* Step Circles Row (Desktop Only) */}
        <div className="relative w-full max-w-[1100px] mx-auto mb-10 hidden lg:block">
          {/* Connecting Line */}
          <div className="absolute top-[35px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-copper/10 via-copper/40 to-copper/10 -translate-y-1/2" />

          <div className="relative flex justify-between">
            {steps.map((s, index) => (
              <div key={index} className="flex flex-col items-center w-[70px]">
                <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#d57c4c] to-[#954d26] border-[5px] border-[#1e110a] flex items-center justify-center shadow-[0_0_20px_rgba(213,124,76,0.3)] transition-transform hover:scale-110 duration-300">
                  <s.icon className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Cards Grid */}
        <div className="flex flex-col lg:flex-row justify-between max-w-[1100px] mx-auto gap-6 lg:gap-0 lg:h-[190px]">
          {steps.map((s, index) => (
            <div key={index} className="relative flex flex-col items-center w-full lg:w-[70px]">
              <div
                className="group w-full lg:w-[250px] lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 bg-[#faf8f6] border border-[#efe5da] shadow-[0_15px_30px_rgba(0,0,0,0.06)] rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(226,108,54,0.15)] hover:-translate-y-1 flex flex-col items-center text-center z-10"
              >
                {/* Circle for Mobile/Tablet */}
                <div className="lg:hidden w-14 h-14 rounded-full bg-gradient-to-br from-[#d57c4c] to-[#954d26] border-4 border-[#faf8f6] flex items-center justify-center shadow-md mb-4">
                  <s.icon className="h-5 w-5 text-white" strokeWidth={2} />
                </div>

                <span className="text-[11px] font-black uppercase tracking-widest text-[#d57c4c] mb-2">
                  Step 0{index + 1}
                </span>
                <h3 className="text-xl font-serif font-bold mb-3 text-charcoal">{s.title}</h3>
                <p className="text-sm text-charcoal-soft/85 leading-relaxed font-medium">{s.lead}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite logo slider */}
        <div className="mt-16 lg:mt-24 marquee-mask">
          <div className="flex w-max animate-marquee gap-5">
            {loop.map((seal, i) => (
              <div
                key={i}
                className="flex h-24 w-44 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#241b14]/50 px-4 transition-all hover:bg-white/10"
              >
                <img
                  src={seal.src}
                  alt={seal.alt}
                  loading="lazy"
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
