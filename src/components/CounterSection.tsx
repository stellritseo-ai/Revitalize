import React, { useEffect, useState, useRef } from "react";
import { Target, Users, HardHat, Award, Play } from "lucide-react";

function AnimatedCounter({ endValue, duration = 2000, suffix = "" }: { endValue: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    let animationFrameId: number;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * endValue));
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    
    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [hasStarted, endValue, duration]);

  // Format 06+ specifically to keep the leading zero if required by design.
  const displayCount = endValue < 10 && endValue > 0 ? `0${count}` : count;

  return (
    <div ref={elementRef} className="text-3xl font-extrabold text-[#0F172A] mt-4 mb-1">
      {displayCount}{suffix}
    </div>
  );
}

const stats = [
  { icon: Target, value: 1000, suffix: "+", label: "Complete Project" },
  { icon: Users, value: 900, suffix: "+", label: "Happy Clients" },
  { icon: HardHat, value: 10, suffix: "+", label: "Expert Member" },
  { icon: Award, value: 6, suffix: "+", label: "Years Of Experience" },
];

export function CounterSection() {
  return (
    <section className="bg-[#F4F2F0] py-[40px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[10px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
        
        {/* Left Side */}
        <div className="lg:w-[60%] flex flex-col justify-center">
          <h2 className="text-3xl md:text-[31px] font-extrabold text-[#0F172A] leading-tight mb-6 tracking-tight">
            Storm Damage Repair & Roofing – Call for Availability
          </h2>
          
          <p className="text-gray-800 text-[16px] md:text-lg mb-8 md:-mt-[14px] md:leading-[39px] font-medium">
            Storm debris? Roof damage? Unexpected property repairs? We respond fast with our licensed, insured crew. From roofing and framing to drywall and exterior improvements, we'll restore your property. Call (602) 816 8177.
          </p>
          
          <a href="tel:6028168177" className="self-start px-8 py-3.5 rounded-full bg-gradient-to-r from-[#12305B] to-[#C75A2A] text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg mb-12 lg:mb-16">
            Call Emergency Line: (602) 816 8177
          </a>
          
          {/* Counter Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#FAF8F5] border-2 border-[#C75A2A]/80 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon className="w-10 h-10 text-[#0F172A]" strokeWidth={1.5} />
                  <AnimatedCounter endValue={stat.value} suffix={stat.suffix} />
                  <span className="text-[13px] font-bold text-[#0F172A]">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Right Side Image */}
        <div className="lg:w-[40%] relative rounded-2xl overflow-hidden min-h-[400px] shadow-xl group">
          <img 
            src="/counter-img.png" 
            alt="Construction Workers" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 rounded-full border-2 border-[#C75A2A] bg-[#C75A2A]/10 backdrop-blur-sm flex items-center justify-center cursor-pointer pointer-events-auto hover:bg-[#C75A2A]/20 hover:scale-110 transition-all duration-300">
              <Play className="w-8 h-8 text-[#C75A2A] fill-[#C75A2A] ml-1" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
