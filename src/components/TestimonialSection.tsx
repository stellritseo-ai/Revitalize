import React from "react";
import { Star, Quote, Sparkles } from "lucide-react";

const googleReviewsUrl =
  "https://www.google.com/search?sca_esv=6253cd38f2fad33d&hl=en-NP&gl=np&sxsrf=ANbL-n7cS37lAvjY_Gq5hBPjVGleH16DmQ:1780601199430&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZEiVWyMnEv3Fg7VPBZP4lRtpHcXbC4OPSbzIIOGyaaDedYDEdz7c-5t_uTFwJrQEgVgg_4bb9oLWcel1cScK-41cGunnoY7ASGDLL77Q0LojsgwVw%3D%3D&q=Revitalize+Group+Reviews&sa=X&ved=2ahUKEwjo8emvqO6UAxW73TgGHWLbCzoQ0bkNegQIKxAF&biw=1440&bih=788&dpr=2";

const testimonials = [
  {
    text: "Revitalize Real Estate rebuilt my Tampa kitchen and handled drywall + flooring seamlessly. Their team showed up on time, stayed on budget, and even coordinated plumbing.",
    name: "David R.",
    location: "Tampa, FL",
    initial: "D",
    color: "bg-[#1e110a]",
  },
  {
    text: "Real pros. From framing to final paint, everything was clean and permitted correctly. Love that they offer video meetings — saved us so much time.",
    name: "Lisa M.",
    location: "Clearwater, FL",
    initial: "L",
    color: "bg-[#d57c4c]",
  },
  {
    text: "We hired them for a full bathroom remodel. The craftsmanship is on a completely different level. Premium finish from start to finish.",
    name: "Marcus T.",
    location: "St. Petersburg, FL",
    initial: "M",
    color: "bg-[#954d26]",
  },
  {
    text: "Their estimate process was surprisingly accurate. The final invoice for our master bath remodel matched the initial quote almost perfectly. No hidden fees.",
    name: "Elena P.",
    location: "Tampa, FL",
    initial: "E",
    color: "bg-[#1e110a]",
  },
  {
    text: "Hired them for a commercial build-out for our new retail space. They navigated the city permitting process like pros and got us open on time.",
    name: "Robert W.",
    location: "Wesley Chapel, FL",
    initial: "R",
    color: "bg-[#d57c4c]",
  },
  {
    text: "I was nervous about undertaking a whole-home renovation, but their project manager kept me informed every single day. The transformation is breathtaking.",
    name: "Amanda C.",
    location: "Riverview, FL",
    initial: "A",
    color: "bg-[#954d26]",
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export function TestimonialSection({ variant = "slider" }: { variant?: "slider" | "grid" }) {
  return (
    <section className="bg-gradient-brand-light bg-background py-16 px-6 sm:px-8 lg:px-12 mx-[15px] mt-[15px] rounded-2xl border border-charcoal/5">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper">
          <Sparkles className="h-3.5 w-3.5 text-copper" />
          Client Testimonials
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[45px] md:leading-[55px] font-bold tracking-tight text-charcoal mb-4 font-serif">
          Trusted by{" "}
          <span className="text-copper italic font-serif font-bold">Tampa Bay Homeowners</span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-charcoal-soft/95 font-sans font-medium mb-8">
          See what our clients say about their experience remodeling and renovating their homes with
          Revitalize Real Estate.
        </p>

        {/* Google Reviews Badge */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white border border-charcoal/10 rounded-2xl sm:rounded-full p-4 sm:py-2.5 sm:pl-3 sm:pr-6 shadow-md mb-12 max-w-full hover:shadow-lg transition-all duration-300">
          <div className="bg-charcoal/[0.03] w-12 h-12 shrink-0 rounded-full flex items-center justify-center border border-charcoal/5">
            <GoogleIcon />
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2">
              <span className="font-extrabold text-2xl text-charcoal leading-none">5</span>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-2 gap-y-0.5 text-xs font-bold text-charcoal-soft/80">
                <span className="whitespace-nowrap">Based On 127+ Google Reviews</span>
                <span className="px-0.5 hidden sm:inline opacity-30">|</span>
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-copper hover:text-copper-deep underline underline-offset-2 transition-colors whitespace-nowrap"
                >
                  Read All Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider or Grid */}
      <div
        className={`max-w-[1400px] mx-auto relative px-2 -mt-[30px] ${
          variant === "slider" ? "overflow-hidden marquee-mask" : ""
        }`}
      >
        {variant === "slider" ? (
          <div className="flex w-max gap-6 animate-marquee hover-pause cursor-pointer py-8 !mt-0">
            {/* We duplicate the list of testimonials 2 times for a seamless loop */}
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-6 shrink-0">
                {testimonials.map((t, i) => (
                  <div
                    className="w-[300px] sm:w-[350px] md:w-[400px] shrink-0"
                    key={`${arrayIndex}-${i}`}
                  >
                    <div className="relative bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col justify-between border border-charcoal/5">
                      {/* Quotation Icon overlay */}
                      <Quote className="absolute top-6 right-6 w-8 h-8 text-copper/10 pointer-events-none" />

                      <div className="relative z-10">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
                          ))}
                        </div>
                        <p className="text-charcoal-soft/95 text-[15px] leading-relaxed mb-8 font-sans font-medium">
                          "{t.text}"
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div
                          className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center text-white font-bold text-lg ${t.color}`}
                        >
                          {t.initial}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="font-bold text-charcoal">{t.name}</span>
                          <span className="text-xs font-semibold text-charcoal-soft/75">
                            {t.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col justify-between border border-charcoal/5"
              >
                {/* Quotation Icon overlay */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-copper/10 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                  <p className="text-charcoal-soft/95 text-[15px] leading-relaxed mb-8 font-sans font-medium">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center text-white font-bold text-lg ${t.color}`}
                  >
                    {t.initial}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-charcoal">{t.name}</span>
                    <span className="text-xs font-semibold text-charcoal-soft/75">
                      {t.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Button */}
      {variant === "slider" && (
        <div className="mt-4 text-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#1e110a] to-[#954d26] text-white font-bold text-sm hover:opacity-95 transition-all shadow-md hover:shadow-lg hover:scale-102 transform duration-300"
          >
            Read All Customer Reviews
          </a>
        </div>
      )}
    </section>
  );
}
