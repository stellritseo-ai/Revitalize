import React from "react";
import { MapPin } from "lucide-react";

const areas = [
  "Wesley Chapel",
  "Brandon",
  "St. Petersburg",
  "Clearwater",
  "Lutz",
  "Odessa",
  "Land O' Lakes",
  "Zephyrhills",
  "Plant City",
  "Riverview",
  "Apollo Beach",
  "Valrico",
  "Lithia",
  "Thonotosassa",
];

export function ServiceAreasSection() {
  return (
    <section className="bg-gradient-brand-light bg-background py-16 px-6 sm:px-8 lg:px-12 mx-[15px] mt-[15px] rounded-2xl border border-charcoal/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Card */}
          <div className="w-full lg:w-[550px] shrink-0 relative rounded-3xl overflow-hidden shadow-xl bg-charcoal flex flex-col">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e110a] via-charcoal to-[#954d26] opacity-95"></div>

            {/* Dotted Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjZmZmZmZmIi8+Cjwvc3ZnPg==')] bg-[length:24px_24px]"></div>

            <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col justify-center items-center text-center">
              {/* Badge */}
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 mb-8 shadow-inner backdrop-blur-md">
                <div className="px-6 py-2 text-white text-xs font-black uppercase tracking-widest">
                  Service Area
                </div>
              </div>

              {/* Text */}
              <h2 className="text-3xl md:text-[38px] leading-tight font-bold tracking-tight text-white mb-4 font-serif">
                We Build Across Tampa Bay
              </h2>
              <p className="text-base text-white/80 mb-10 font-sans font-medium">
                Local craftsmanship. Premium delivery. Proudly serving within a{" "}
                <span className="text-[#d57c4c] font-bold">50-mile radius</span> of Tampa, FL.
              </p>

              {/* Areas Grid */}
              <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
                {areas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-3 bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/15 rounded-full pl-4 pr-1 py-1 backdrop-blur-md cursor-default group"
                  >
                    <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                      {area}
                    </span>
                    <div className="bg-white text-charcoal rounded-full p-1.5 flex items-center justify-center shadow-sm group-hover:scale-115 transition-transform duration-300">
                      <MapPin className="w-3 h-3 text-[#1e110a]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Map */}
          <div className="w-full lg:flex-1 rounded-3xl overflow-hidden shadow-xl border border-charcoal/5 h-[450px] lg:h-auto min-h-[450px] relative group">
            {/* Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112599.66403342779!2d-82.43194877080673!3d28.12396776673822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b652939d5223%3A0x9b9704b240cf558b!2sTampa%2C%20FL%2033647%2C%20USA!5e0!3m2!1sen!2snp!4v1780602302595!5m2!1sen!2snp"
              className="absolute inset-0 w-full h-full border-0 grayscale-[10%] contrast-[105%] transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Tampa FL Service Area"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
