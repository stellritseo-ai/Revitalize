import {
  Award,
  ShieldCheck,
  Settings,
  MonitorPlay,
  CircleDollarSign,
  Bot,
  Package
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const features = [
  {
    icon: Award,
    title: "6+ Years Local Experience",
    desc: "Deep expertise across the Valley's neighborhoods and codes."
  },
  {
    icon: ShieldCheck,
    title: "Licensed, Insured & Bonded",
    desc: "ROC #328501 — fully credentialed for your peace of mind."
  },
  {
    icon: Settings,
    title: "End-to-End Coordination",
    desc: "One trusted team manages every trade and timeline."
  },
  {
    icon: MonitorPlay,
    title: "Video Meetings + File Uploads",
    desc: "Modern, transparent collaboration from day one."
  },
  {
    icon: CircleDollarSign,
    title: "Financing Available",
    desc: "Flexible options to make your project feel effortless."
  },
  {
    icon: Bot,
    title: "AI-Assisted Estimates",
    desc: "Faster, smarter scoping — no surprises later."
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#181B34] py-[40px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[10px]">
      {/* Background glowing blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#2B40DE]/40 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#74358C]/40 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Column: Image */}
        <div className="w-full h-auto flex items-center justify-center">
          <img
            src="/why-choose-us-composite.png"
            alt="Why Choose Us"
            className="w-full h-auto object-contain rounded-[2rem] shadow-2xl"
          />
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col">
          {/* Badge */}
          <div className="w-fit inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-gradient-to-r from-white/5 to-[#D96B3A]/60 border border-white/20 text-white text-sm font-medium mb-6">
            Why Choose Us
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
            Premium Results, Zero Compromise.
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-white/90" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-1.5">{feature.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trusted Partners Feature */}
          <div className="flex gap-4 mb-10 pt-4 border-t border-white/10">
            <div className="flex-shrink-0">
              <Package className="w-8 h-8 text-white/90" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base mb-1.5">Trusted Supplier Partners</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                ABC Supply · Beazer Precast · ProBuild · Sherwin-Williams · Mohawk Flooring · Kohler
              </p>
            </div>
          </div>

          {/* Button */}
          <Link to="/contact" className="w-fit px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D96B3A] to-[#1C3F60] border border-white/20 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg">
            Talk Your Project With AI
          </Link>
        </div>

      </div>
    </section>
  );
}
