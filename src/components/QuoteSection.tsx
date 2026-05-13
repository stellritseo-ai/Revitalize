import React, { useState } from "react";
import { Upload, ChevronDown } from "lucide-react";

export function QuoteSection() {
  const [meetingType, setMeetingType] = useState('in-person');

  return (
    <section className="relative py-[40px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[10px] bg-[#09152A] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/quote-bg.jpg')] bg-cover bg-center opacity-40"
      ></div>
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09152A]/20 to-[#09152A]/60"></div>

      <div className="relative z-10 max-w-[1064px] mx-auto w-full">

        {/* Main Card */}
        <div className="bg-gradient-to-b from-[#C45E28] via-[#4F2D3D] to-[#0A1A3A] rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 min-h-fit md:min-h-[636px] flex flex-col justify-center">

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="px-6 py-1.5 rounded-full bg-gradient-to-r from-[#12305B]/80 to-[#C75A2A]/80 border border-white/10 text-white text-[15px] font-semibold tracking-wide shadow-lg backdrop-blur-sm">
              Request a Quote
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-[38px] font-extrabold text-white text-center mb-10 tracking-tight">
            Ready To Start? Let's Talk About Your Project.
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-4">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Jane Smith"
                className="bg-white text-gray-800 placeholder-gray-400 px-4 py-3.5 rounded-md w-full outline-none focus:ring-2 focus:ring-[#C75A2A] transition-shadow text-[15px] font-medium"
              />
              <input
                type="email"
                placeholder="Jane@email.com"
                className="bg-white text-gray-800 placeholder-gray-400 px-4 py-3.5 rounded-md w-full outline-none focus:ring-2 focus:ring-[#C75A2A] transition-shadow text-[15px] font-medium"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-white text-gray-800 placeholder-gray-400 px-4 py-3.5 rounded-md w-full outline-none focus:ring-2 focus:ring-[#C75A2A] transition-shadow text-[15px] font-medium"
              />
              <div className="relative">
                <select
                  defaultValue=""
                  className="bg-white text-gray-600 px-4 py-3.5 rounded-md w-full outline-none focus:ring-2 focus:ring-[#C75A2A] transition-shadow appearance-none text-[15px] font-medium cursor-pointer"
                >
                  <option value="" disabled className="text-gray-400">Select a Service</option>
                  <option value="roofing">Construction</option>
                  <option value="remodel">Remodeling</option>
                  <option value="custom">Specialty Trade</option>
                  <option value="commercial">Finishing & Systems</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Row 3 */}
            <input
              type="text"
              placeholder="Project Address"
              className="bg-white text-gray-800 placeholder-gray-400 px-4 py-3.5 rounded-md w-full outline-none focus:ring-2 focus:ring-[#C75A2A] transition-shadow text-[15px] font-medium"
            />

            {/* Row 4 */}
            <textarea
              placeholder="Write Your Message"
              rows={5}
              className="bg-white text-gray-800 placeholder-gray-400 px-4 py-4 rounded-md w-full outline-none focus:ring-2 focus:ring-[#C75A2A] transition-shadow resize-none text-[15px] font-medium mb-2"
            ></textarea>

            {/* Bottom Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 mt-2">

              {/* Upload box */}
              <div className="w-full md:w-auto md:flex-1 max-w-sm">
                <label className="flex items-center justify-center gap-3 border border-dashed border-white/30 bg-[#0B1E3F]/30 rounded-lg py-3.5 px-6 cursor-pointer hover:bg-white/10 transition-colors">
                  <Upload className="w-4 h-4 text-white" />
                  <span className="text-white text-[14px] font-medium tracking-wide">Drop plans, Photos or PDFs</span>
                  <input type="file" className="hidden" />
                </label>
              </div>

              {/* Radio Buttons */}
              <div className="flex items-center gap-6 text-white text-[15px] font-semibold tracking-wide">
                <span>Preferred Meeting</span>

                <div
                  className="flex items-center gap-2.5 cursor-pointer"
                  onClick={() => setMeetingType('in-person')}
                >
                  <div className="w-[18px] h-[18px] rounded-full border-2 border-white flex items-center justify-center">
                    {meetingType === 'in-person' && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
                  </div>
                  <span>In-Person</span>
                </div>

                <div
                  className="flex items-center gap-2.5 cursor-pointer"
                  onClick={() => setMeetingType('video')}
                >
                  <div className="w-[18px] h-[18px] rounded-full border-2 border-white flex items-center justify-center">
                    {meetingType === 'video' && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
                  </div>
                  <span>Video</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-2">
              <button
                type="button"
                className="px-14 py-3.5 rounded-full bg-gradient-to-r from-[#12305B] to-[#C75A2A] text-white font-bold text-[15px] border border-white/20 shadow-xl hover:opacity-90 hover:scale-[1.02] transition-all"
              >
                Send Now
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
