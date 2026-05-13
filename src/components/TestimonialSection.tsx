import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Arizona Premiere Construction rebuilt my Chandler kitchen and handled drywall + flooring seamlessly. Their team showed up on time, stayed on budget, and even coordinated plumbing.",
    name: "David R.",
    location: "Gilbert, AZ",
    initial: "D",
    color: "bg-[#004B93]"
  },
  {
    text: "Real pros. From framing to final paint, everything was clean and permitted correctly. Love that they offer video meetings — saved us so much time.",
    name: "Lisa M.",
    location: "Scottsdale, AZ",
    initial: "L",
    color: "bg-[#F59E0B]"
  },
  {
    text: "We hired them for a full bathroom remodel. The craftsmanship is on a completely different level. Premium finish from start to finish.",
    name: "Marcus T.",
    location: "Mesa, AZ",
    initial: "M",
    color: "bg-[#004B93]"
  },
  {
    text: "Outstanding service from start to finish. They built a custom patio cover for our backyard that perfectly matches our home's architecture. Highly recommend!",
    name: "Sarah K.",
    location: "Phoenix, AZ",
    initial: "S",
    color: "bg-[#10B981]"
  },
  {
    text: "We needed a complete roof replacement after a monsoon storm. Arizona Premiere was fast, communicative, and the final result is incredibly solid.",
    name: "James L.",
    location: "Tempe, AZ",
    initial: "J",
    color: "bg-[#8B5CF6]"
  },
  {
    text: "Their estimate process was surprisingly accurate. The final invoice for our master bath remodel matched the initial quote almost perfectly. No hidden fees.",
    name: "Elena P.",
    location: "Chandler, AZ",
    initial: "E",
    color: "bg-[#EF4444]"
  },
  {
    text: "Hired them for a commercial build-out for our new retail space. They navigated the city permitting process like pros and got us open on time.",
    name: "Robert W.",
    location: "Mesa, AZ",
    initial: "R",
    color: "bg-[#0EA5E9]"
  },
  {
    text: "The cleanest construction crew I've ever worked with. They protected our floors, cleaned up daily, and the custom drywall work is flawless.",
    name: "Michael T.",
    location: "Gilbert, AZ",
    initial: "M",
    color: "bg-[#F97316]"
  },
  {
    text: "I was nervous about undertaking a whole-home renovation, but their project manager kept me informed every single day. The transformation is breathtaking.",
    name: "Amanda C.",
    location: "Scottsdale, AZ",
    initial: "A",
    color: "bg-[#EC4899]"
  },
  {
    text: "Great experience with their flooring and painting teams. They helped us select materials that would hold up to our dogs and the Arizona heat.",
    name: "Kevin B.",
    location: "Glendale, AZ",
    initial: "K",
    color: "bg-[#14B8A6]"
  },
  {
    text: "We used their financing options to finally get the kitchen we always wanted. The approval process was fast and the terms were exactly as promised.",
    name: "Jessica N.",
    location: "Phoenix, AZ",
    initial: "J",
    color: "bg-[#6366F1]"
  },
  {
    text: "Top-notch framing and structural work. Our inspector even commented on how clean and precise the joins were. True craftsmen.",
    name: "Thomas G.",
    location: "Cave Creek, AZ",
    initial: "T",
    color: "bg-[#004B93]"
  },
  {
    text: "Responsive, professional, and licensed. It's hard to find reliable contractors these days, but Arizona Premiere delivered on every promise.",
    name: "Rachel M.",
    location: "Paradise Valley, AZ",
    initial: "R",
    color: "bg-[#F59E0B]"
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export function TestimonialSection({ variant = "slider" }: { variant?: "slider" | "grid" }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#F0F6FE] to-[#FDF7EE] py-[40px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[10px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <span className="bg-[#C25A2A] text-white px-6 py-1.5 rounded-full text-sm font-medium tracking-wide mb-6">
          Testimonials
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-[40px] font-extrabold text-[#1E110A] mb-4">
          Trusted by Arizona Homeowners & Businesses
        </h2>
        
        {/* Subtitle */}
        <p className="max-w-3xl text-gray-700 md:text-lg mb-10">
          Don't just take our word for it - hear from satisfied customers who trust Arizona Premiere Construction Group LLC for their Construction needs.
        </p>

        {/* Google Reviews Badge */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-gradient-to-r from-[#CA5E2A] to-[#0D366D] rounded-[2rem] sm:rounded-full p-5 sm:p-2 sm:pr-6 shadow-xl mb-16 max-w-full sm:-mt-[20px]">
          <div className="bg-white w-14 h-14 shrink-0 rounded-full flex items-center justify-center shadow-inner">
            <GoogleIcon />
          </div>
          <div className="flex flex-col items-center sm:items-start text-white">
            <div className="flex mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />)}
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2">
              <span className="font-extrabold text-3xl leading-none">4.9</span>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-2 gap-y-1 pb-0.5 text-xs sm:text-sm font-medium opacity-95">
                <span className="whitespace-nowrap">Based On 127+ Google Reviews</span>
                <span className="px-1 hidden sm:inline text-white/50">|</span>
                <a href="#" className="underline underline-offset-2 hover:text-white/80 transition-colors whitespace-nowrap">
                  Read All Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider or Grid */}
      <div className={`max-w-7xl mx-auto relative px-2 ${variant === "slider" ? "-mt-[62px]" : "mt-8"}`}>
        {variant === "slider" ? (
          <div className={`overflow-hidden cursor-grab active:cursor-grabbing transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`} ref={emblaRef}>
            <div className="flex -ml-4 py-8">
              {testimonials.map((t, i) => (
                <div className="pl-4 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] min-w-0" key={i}>
                  <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow h-full flex flex-col justify-between border border-gray-100">
                    <div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-5 h-5 fill-[#FACC15] text-[#FACC15]" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-[15px] leading-relaxed mb-8">
                        {t.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-white font-bold text-xl ${t.color}`}>
                        {t.initial}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-bold text-gray-900">{t.name}</span>
                        <span className="text-sm text-gray-500">{t.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow h-full flex flex-col justify-between border border-gray-100">
                <div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-[15px] leading-relaxed mb-8">
                    {t.text}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-white font-bold text-xl ${t.color}`}>
                    {t.initial}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-gray-900">{t.name}</span>
                    <span className="text-sm text-gray-500">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Button */}
      {variant === "slider" && (
        <div className="mt-0 text-center">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#12305B] to-[#C75A2A] text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg cursor-pointer">
            Read All Our Customer's Reviews
          </button>
        </div>
      )}
    </section>
  );
}
