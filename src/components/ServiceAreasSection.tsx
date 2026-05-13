import React from "react";
import { MapPin } from "lucide-react";

const areas = [
  "Phoenix", "Scottsdale", "Mesa",
  "Chandler", "Glendale", "Tempe",
  "Gilbert", "Surrounding Areas"
];

export function ServiceAreasSection() {
  return (
    <section className="bg-gradient-to-r from-[#F0F6FE] to-[#FDF7EE] py-[40px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[10px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left Card */}
          <div className="w-full lg:w-[500px] shrink-0 relative rounded-3xl overflow-hidden shadow-2xl bg-[#2A3143] min-h-[300px] lg:min-h-[400px] flex flex-col">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C2C4B] via-[#4F4A5E] to-[#8E4931] opacity-95 mix-blend-normal"></div>

            {/* Dotted Pattern Overlay to mimic the world map texture */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjZmZmZmZmIi8+Cjwvc3ZnPg==')] bg-[length:24px_24px]"></div>

            <div className="relative z-10 p-[10px] h-full flex flex-col justify-center items-center text-center">

              {/* Badge */}
              <div className="inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#214378] to-[#B4502E] mb-8 shadow-xl">
                <div className="px-6 py-2 text-white text-sm font-semibold tracking-wide">
                  Service Areas
                </div>
              </div>

              {/* Text */}
              <h2 className="text-3xl md:text-[38px] font-extrabold text-white mb-4 tracking-tight">
                We Build Across The Valley
              </h2>
              <p className="text-lg text-white/70 mb-12 font-medium">
                Local expertise. Premium delivery. Right where you live.
              </p>

              {/* Areas Grid */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {areas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-4 bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 rounded-full pl-5 pr-1.5 py-1.5 backdrop-blur-md cursor-default group"
                  >
                    <span className="text-white text-sm md:text-[15px] font-semibold tracking-wide">{area}</span>
                    <div className="bg-white text-gray-800 rounded-full p-1.5 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Map */}
          <div className="w-full lg:flex-1 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C25A2A]/40 h-[400px] lg:h-auto min-h-[400px] relative group">
            {/* The provided Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1668.5971622794355!2d-111.79221051121863!3d33.23521214336887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872a54cbc39537c7%3A0x83365456408218c3!2s4960%20S%20Gilbert%20Rd%2C%20Chandler%2C%20AZ%2085249%2C%20USA!5e0!3m2!1sen!2snp!4v1778689128027!5m2!1sen!2snp"
              className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Service Area"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
