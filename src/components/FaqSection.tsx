import React, { useState, useRef } from "react";
import { ChevronDown, Sparkles, Play, Pause } from "lucide-react";
import faqVideo from "@/assets/video/a0ff905f-0202-430d-9457-5580e4981a8e.mp4";

const faqs = [
  {
    question: "Do you handle both real estate and home improvements?",
    answer:
      "Absolutely. We specialize in pre-listing home improvements that boost your home’s value and market appeal. From kitchens and bathrooms to curb appeal, we tailor upgrades that help you sell for top dollar.",
  },
  {
    question: "I’m a first-time buyer—can you help with that?",
    answer:
      "Yes, we guide first-time homebuyers through every step, from financing options to finding the right home. We’ll even help you with post-purchase improvements to truly make it yours.",
  },
  {
    question: "Do you offer home improvement consultations without a real estate transaction?",
    answer:
      "Yes. If you’re not buying or selling but just want to do home improvements or update your current home, we offer standalone design and remodeling services.",
  },
  {
    question: "What types of home improvements do you specialize in?",
    answer:
      "We handle kitchen remodels, bathroom upgrades, flooring, cabinetry, painting, drywall, and more. We also offer full home makeovers and investment property rehabs.",
  },
  {
    question: "How do I get started with your team?",
    answer:
      "It’s easy—just contact us for a free consultation. We’ll evaluate your needs, whether it’s buying, selling, or doing home improvements, and create a customized game plan.",
  },
  {
    question: "Do you work with investors or flippers?",
    answer:
      "Yes, we work with real estate investors and property flippers throughout Tampa Bay. We provide home improvement estimates, design input, and listing services to help you maximize ROI.",
  },
  {
    question: "How do I know if it’s the right time to buy or sell in Tampa?",
    answer:
      "We monitor Tampa Bay market trends daily. Whether you’re buying or selling, we’ll give you a clear, no-fluff breakdown of timing, pricing, and competition so you can make the smartest move.",
  },
  {
    question: "What’s included when I list my home with Revitalize Real Estate?",
    answer:
      "You get more than a listing—we offer market strategy, pre-listing improvements, professional marketing, cleaning, staging guidance, and expert negotiation to help you sell fast and for top dollar.",
  },
  {
    question: "I need to buy and sell at the same time. Can you help with that?",
    answer:
      "Absolutely. We’ll create a plan to coordinate your sale and purchase so you’re never stuck between homes. We handle logistics, timing, and even offer temporary housing solutions if needed.",
  },
  {
    question: "How much is my home worth?",
    answer:
      "We provide a free, no-obligation comparative market analysis (CMA) that shows your home’s current market value—and how to increase it if needed before listing.",
  },
  {
    question: "Can I buy a fixer-upper and have us do the home improvements?",
    answer:
      "Yes, that’s our specialty. We help you find the right property and then handle everything from design to home improvement—so you get your dream home or investment at the right price.",
  },
  {
    question: "What types of financing do you help buyers with?",
    answer:
      "We connect buyers with trusted lenders offering conventional, FHA, VA, and even 100% financing programs. We’ll help you explore the best option based on your goals and budget.",
  },
  {
    question: "How do you market homes for sale?",
    answer:
      "We use a high-impact mix of professional photography, video tours, online exposure, open houses, and targeted digital ads—plus exclusive buyer lists and local agent networks.",
  },
  {
    question: "I’m relocating to Tampa—can you help with that?",
    answer:
      "Absolutely. Whether you’re moving from across Florida, out of state, or internationally, we’ve got you covered. We offer remote consultations, area insights, and virtual home tours to make your transition seamless. And if you’re relocating from another country, we can connect you with one of our trusted global real estate partners to help you sell your current property or coordinate your move with confidence. Revitalize Real Estate is part of a worldwide network—your move starts here.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => console.log(err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section className="bg-gradient-brand-light bg-background py-16 px-6 sm:px-8 lg:px-12 mx-[15px] mt-[15px] rounded-2xl border border-charcoal/5">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Left Column */}
        <div className="w-full lg:w-[480px] shrink-0 flex flex-col lg:sticky lg:top-32 self-start">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 text-copper self-start">
            <Sparkles className="h-3.5 w-3.5 text-copper" />
            FAQ Section
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-[45px] md:leading-[55px] font-bold tracking-tight text-charcoal mb-4 font-serif">
            Got Questions? <span className="text-copper italic font-serif font-bold">We've Got Answers</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-charcoal-soft/95 font-sans font-medium mb-8 max-w-lg">
            Everything you need to know before starting your project. Still curious? Reach out
            anytime.
          </p>

          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl w-full aspect-[4/3] max-h-[360px] border border-charcoal/5 group bg-[#0d1117] cursor-pointer">
            <video
              ref={videoRef}
              src={faqVideo}
              playsInline
              onEnded={handleEnded}
              className="w-full h-full object-cover"
              onClick={togglePlay}
            />
            {/* Play/Pause Overlay */}
            <div
              onClick={togglePlay}
              className={`absolute inset-0 bg-black/25 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <button
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:bg-white/35 shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6 text-white fill-white" />
                ) : (
                  <Play className="h-6 w-6 text-white fill-white translate-x-0.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Accordions Track */}
        <div className="w-full lg:flex-1 flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-xl border transition-colors duration-200 ${
                openIndex === idx
                  ? "bg-[#faf6f0] border-copper/30 shadow-md shadow-copper/5"
                  : "bg-white border-charcoal/5 hover:border-charcoal/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none group"
              >
                <span
                  className={`text-base font-bold transition-colors pr-8 font-sans ${
                    openIndex === idx ? "text-charcoal" : "text-charcoal-soft hover:text-copper"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-copper shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Smooth Grid Accordion Wrapper */}
              <div
                style={{ willChange: "grid-template-rows" }}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openIndex === idx
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`pb-5 px-5 text-charcoal-soft/90 text-sm leading-relaxed pr-6 font-sans font-medium transition-opacity duration-200 ${
                      openIndex === idx ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
