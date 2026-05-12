import { MessageCircle, Play, Star } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

export function HeroBanner() {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[640px] sm:h-[680px] lg:h-[760px] overflow-hidden">
        <img
          src={heroImg}
          alt="Construction worker building quality craftsmanship"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/55 via-brand-orange/25 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center rounded-full bg-black/40 backdrop-blur px-5 py-2.5 text-sm sm:text-base font-medium mb-6">
              Licensed · Insured · Bonded · ROC #328501
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-tight tracking-tight mb-6">
              Build Your Vision. Perfect Your Home. Licensed, Insured & Bonded.
            </h1>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mb-8 text-white/95">
              6 Years Of Excellence Across Phoenix, Scottsdale, Mesa & Beyond. From New Construction To Kitchen Remodels, We Deliver Quality Craftsmanship On Every Project. Roc #328501.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-brand-blue-deep hover:bg-brand-blue transition text-white font-semibold text-sm sm:text-base">
                <MessageCircle className="h-4 w-4" />
                Request a Quote With AI
              </button>
              <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white/10 backdrop-blur border border-white/40 hover:bg-white/20 transition text-white font-semibold text-sm sm:text-base">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <Play className="h-3 w-3 fill-white" />
                </span>
                Video Meeting
              </button>
            </div>

            <div className="inline-flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-lg">
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
      </div>
    </section>
  );
}
