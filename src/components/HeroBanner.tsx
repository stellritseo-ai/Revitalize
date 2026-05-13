import { MessageCircle, Play, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

const heroImages = [
  "/hero-1.png",
  "/hero-2.png",
  "/hero-3.png"
];

export function HeroBanner() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full p-[15px]">
      <div className="relative w-full h-[640px] sm:h-[680px] lg:h-[760px] overflow-hidden bg-[#0a0a0a] rounded-[10px]">
        
        {/* Animated Background Images */}
        {heroImages.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Construction Banner ${idx + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === currentIdx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/55 via-brand-orange/25 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center rounded-full bg-black/40 backdrop-blur px-5 py-2.5 text-sm sm:text-base font-medium mb-6">
              Licensed · Insured · Bonded · ROC #328501
            </div>
            <h1 className="text-3xl md:text-[3rem] leading-tight md:leading-[67px] font-bold tracking-tight mb-6">
              Build Your Vision. Perfect Your Home. Licensed, Insured & Bonded.
            </h1>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mb-8 text-white/95">
              6 Years Of Excellence Across Phoenix, Scottsdale, Mesa & Beyond. From New Construction To Kitchen Remodels, We Deliver Quality Craftsmanship On Every Project. Roc #328501.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-brand-blue-deep hover:bg-brand-blue transition text-white font-semibold text-sm sm:text-base shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Request a Quote With AI
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white/10 backdrop-blur border border-white/40 hover:bg-white/20 transition text-white font-semibold text-sm sm:text-base shadow-lg"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <Play className="h-3 w-3 fill-white" />
                </span>
                Video Meeting
              </Link>
            </div>

            {/* Google Review Badge */}
            <div className="inline-flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border">
                <span className="font-bold text-lg bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">G</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                </div>
                <div className="flex items-baseline gap-2 leading-tight">
                  <span className="font-bold text-xl text-foreground">4.9</span>
                  <span className="text-xs text-muted-foreground">Based On 127+ Google Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Navigation Dots (Optional but nice for UX) */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
          {heroImages.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIdx ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
