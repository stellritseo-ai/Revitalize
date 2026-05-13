import { Video, BadgeCheck, ThumbsUp } from "lucide-react";
import processBg from "@/assets/process-bg.png";
import sealPhoenix from "@/assets/seal-phoenix.png";
import sealClearwater from "@/assets/seal-clearwater.png";
import sealScottsdale from "@/assets/seal-scottsdale.png";
import sealMesa from "@/assets/seal-mesa.png";
import sealChandler from "@/assets/seal-chandler.png";
import sealGlendale from "@/assets/seal-glendale.png";

const steps = [
  {
    icon: Video,
    title: "Share Your Vision",
    lead: "Video meeting + file upload.",
    body:
      "Schedule a quick video consultation or meet us in person. Share your ideas, blueprints, or photos. We'll listen, answer questions, and discuss financing options — all before any work begins.",
  },
  {
    icon: BadgeCheck,
    title: "Approve the Plan",
    lead: "Clear quote + material selection.",
    body:
      "We provide an AI-assisted, transparent estimate with no surprises. You approve the timeline, choose materials (with supplier backlinks for full transparency), and handle permits. We coordinate everything else.",
  },
  {
    icon: ThumbsUp,
    title: "We Build, You Enjoy",
    lead: "Full coordination to final walkthrough.",
    body:
      "Our licensed crew manages every trade — from concrete and framing to electrical and plumbing. We keep you updated with photos or video walkthroughs. Once you sign off, your new space is ready. Stress-free, guaranteed.",
  },
];

const seals = [
  { src: sealPhoenix, alt: "City of Phoenix" },
  { src: sealClearwater, alt: "City of Clearwater, Florida" },
  { src: sealScottsdale, alt: "City of Scottsdale, Arizona" },
  { src: sealMesa, alt: "City of Mesa, Arizona" },
  { src: sealChandler, alt: "City of Chandler, Arizona" },
  { src: sealGlendale, alt: "State of Arizona — Glendale" },
];

export function ProcessSection() {
  const loop = [...seals, ...seals];

  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={processBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0b1626]/85" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-16 lg:pt-20 pb-10 lg:pb-14">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div
            className="inline-flex items-center rounded-full px-7 py-2 text-white text-sm font-semibold tracking-wide mb-6"
            style={{ background: "var(--gradient-brand)" }}
          >
            Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Our Simple, Stress-Free Process
          </h2>
          <p className="max-w-3xl text-sm sm:text-base text-white/75 leading-relaxed">
            At Arizona Premiere Construction Group LLC, honesty and quality aren't just promises — they're our foundation. From your first call or video meeting to the final walkthrough and cleanup, we handle every project right, with zero hassle on your end.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {steps.map((s) => (
            <div key={s.title} className="flex flex-col items-center text-center px-2">
              <s.icon className="h-14 w-14 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm sm:text-base text-white/85 mb-2">{s.lead}</p>
              <p className="text-sm sm:text-[15px] leading-relaxed text-white/75 max-w-sm">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* Infinite logo slider */}
        <div className="mt-14 lg:mt-20 marquee-mask">
          <div className="flex w-max animate-marquee gap-5">
            {loop.map((seal, i) => (
              <div
                key={i}
                className="flex h-32 w-52 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-4"
              >
                <img
                  src={seal.src}
                  alt={seal.alt}
                  loading="lazy"
                  className="max-h-24 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
