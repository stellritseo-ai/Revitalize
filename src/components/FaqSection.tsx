import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are you licensed in Arizona?",
    answer: "Yes — we're a fully licensed Arizona general contractor (ROC #328501), insured, and bonded for both residential and commercial work."
  },
  {
    question: "Do you handle residential & commercial?",
    answer: "Absolutely. Our team is equipped to handle everything from custom home builds and kitchen remodels to large-scale commercial tenant improvements."
  },
  {
    question: "Can I schedule a video meeting?",
    answer: "Yes, we offer virtual consultations for your convenience to discuss your project scope, budget, and timeline before an on-site visit."
  },
  {
    question: "Do you offer financing?",
    answer: "We partner with several local lenders to offer flexible financing options for qualified homeowners. Contact us for more details."
  },
  {
    question: "How do you handle electrical & plumbing?",
    answer: "We have an in-house team of licensed electricians and plumbers, and we also partner with top-tier specialized sub-contractors when needed, ensuring all work is fully permitted and up to code."
  },
  {
    question: "Where do materials come from?",
    answer: "We source our materials from trusted local Arizona suppliers as well as premium national brands to ensure the highest quality and durability for your build."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gradient-to-r from-[#F0F6FE] to-[#FDF7EE] py-[40px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[10px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

        {/* Left Column */}
        <div className="w-full lg:w-[500px] shrink-0 flex flex-col">
          {/* Badge */}
          <div className="inline-flex rounded-full bg-gradient-to-r from-[#12305B] to-[#C75A2A] mb-6 self-start shadow-sm">
            <div className="px-6 py-1.5 text-white text-[15px] font-bold tracking-wide">
              FAQ's
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-[35px] font-extrabold text-[#0F172A] mb-5 leading-tight tracking-tight">
            Got Questions? We've Got Answers.
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-10 max-w-lg leading-relaxed font-medium">
            Everything you need to know before starting your project. Still curious? Reach out anytime.
          </p>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl w-full max-h-[400px]">
            <img
              src="/faq.jpg"
              alt="Premium Custom Home in Arizona"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
        </div>

        {/* Right Column - Accordion */}
        <div className="w-full lg:flex-1 bg-[#FCF9F5] border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">
          <div className="flex flex-col">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-gray-200/80 last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-[20px] flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-[17px] md:text-lg font-bold text-[#0F172A] group-hover:text-[#C75A2A] transition-colors pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#C75A2A] shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-48 opacity-100 pb-6" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-gray-700 text-[15px] leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
