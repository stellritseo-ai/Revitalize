import React, { useEffect, useState, useRef } from "react";
import { Target, Users, HardHat, Award, Phone, ArrowRight } from "lucide-react";

/* ─── Animated Counter ─────────────────────────────────────────────────────── */
function AnimatedCounter({
  endValue,
  duration = 2200,
  suffix = "",
}: {
  endValue: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.4 },
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (!startTimestamp) startTimestamp = ts;
      const progress = Math.min((ts - startTimestamp) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * endValue));
      if (progress < 1) raf = window.requestAnimationFrame(step);
      else setCount(endValue);
    };
    raf = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(raf);
  }, [hasStarted, endValue, duration]);

  const display = endValue < 10 && endValue > 0 ? `0${count}` : count;

  return (
    <div ref={elementRef} className="flex items-end leading-none">
      <span className="text-4xl xl:text-5xl font-black tabular-nums bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
        {display}
      </span>
      <span className="text-2xl font-black text-copper ml-0.5 mb-0.5">{suffix}</span>
    </div>
  );
}

/* ─── Stats Data ────────────────────────────────────────────────────────────── */
const stats = [
  {
    icon: Target,
    value: 500,
    suffix: "+",
    label: "Homes Sold & Home Improved",
    color: "from-copper/30 to-copper/5",
    glow: "rgba(214,152,115,0.35)",
  },
  {
    icon: Users,
    value: 400,
    suffix: "+",
    label: "Happy Clients",
    color: "from-amber-500/30 to-amber-500/5",
    glow: "rgba(245,158,11,0.3)",
  },
  {
    icon: HardHat,
    value: 15,
    suffix: "+",
    label: "Expert Team Members",
    color: "from-orange-400/30 to-orange-400/5",
    glow: "rgba(251,146,60,0.3)",
  },
  {
    icon: Award,
    value: 20,
    suffix: "+",
    label: "Years of Experience",
    color: "from-rose-400/30 to-rose-400/5",
    glow: "rgba(251,113,133,0.28)",
  },
];

/* ─── 3D Stat Card ──────────────────────────────────────────────────────────── */
function StatCard({
  stat,
  idx,
}: {
  stat: (typeof stats)[0];
  idx: number;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = stat.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        perspective: "800px",
        animationDelay: `${idx * 0.1}s`,
      }}
      className="w-full"
    >
      <div
        style={{
          transform: hovered ? "rotateY(-6deg) rotateX(4deg) translateZ(12px)" : "rotateY(0) rotateX(0) translateZ(0)",
          transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease",
          boxShadow: hovered
            ? `0 24px 48px -8px ${stat.glow}, 0 8px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)`
            : `0 8px 24px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)`,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a2e] p-6 xl:p-7 flex flex-col items-start gap-4 cursor-default"
      >
        {/* Gradient top highlight */}
        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${stat.color} via-white/20`} />

        {/* Ambient glow blob */}
        <div
          className={`absolute -top-8 -right-8 w-28 h-28 rounded-full bg-gradient-radial ${stat.color} blur-2xl opacity-60 pointer-events-none`}
        />

        {/* Icon container */}
        <div
          style={{
            boxShadow: `0 4px 16px ${stat.glow}`,
          }}
          className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} border border-white/10 flex items-center justify-center`}
        >
          <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
        </div>

        {/* Number */}
        <div className="relative z-10">
          <AnimatedCounter endValue={stat.value} suffix={stat.suffix} />
        </div>

        {/* Label */}
        <p className="relative z-10 text-[13px] font-semibold text-white/55 leading-snug tracking-wide uppercase">
          {stat.label}
        </p>

        {/* Bottom 3-D edge illusion */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────────────────────────── */
export function CounterSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0d0d1a 0%, #14102a 40%, #1c1209 100%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.4)",
      }}
      className="relative mx-[15px] mt-[15px] rounded-2xl overflow-hidden py-16 px-6 md:px-12"
    >
      {/* Background decorative radial glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-copper/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/6 rounded-full blur-[100px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-16 items-center">

        {/* ── Left Side ──────────────────────────────────────────────── */}
        <div className="lg:w-[52%] flex flex-col">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 self-start">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-copper" />
              ))}
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-copper/80">
              Tampa Bay's #1 Choice
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-[44px] md:leading-[54px] font-bold text-white mb-5 tracking-tight">
            Tampa Bay’s{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D69873 0%, #975033 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Elite Partner
            </span>{" "}
            Buy, Sell, and Transform Your Home.
          </h2>

          {/* Description */}
          <p className="text-white/55 text-[16px] leading-[30px] font-medium mb-10 max-w-lg">
            Whether you're buying, selling, or doing home improvements in Tampa Bay, Revitalize Real Estate
            delivers results. Our licensed team handles everything — from pre-listing upgrades and
            full remodels to finding your dream home.
          </p>

          {/* CTA Button */}
          <a
            href="tel:8133230291"
            style={{
              background: "linear-gradient(135deg, #D69873 0%, #975033 100%)",
              boxShadow: "0 8px 32px rgba(214,152,115,0.35), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
            className="group self-start flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(214,152,115,0.5)]"
          >
            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center ring-1 ring-white/20">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <span>Unlock Your Home’s Potential Book Now.</span>
            <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        {/* ── Right Side — Stat Cards ─────────────────────────────────── */}
        <div className="lg:w-[48%] grid grid-cols-2 gap-4 md:gap-5 w-full">
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
