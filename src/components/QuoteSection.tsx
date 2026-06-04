import React from "react";
import { ChevronDown, Send } from "lucide-react";
import quoteBgVideo from "../assets/video/04b45dfc-4db8-4375-b262-2eef763f0401.mp4";

const inputCls =
  "bg-white/10 border border-white/15 text-white placeholder-white/40 px-4 py-3.5 rounded-xl w-full outline-none focus:border-copper/70 focus:ring-2 focus:ring-copper/25 transition-all duration-200 text-[15px] font-medium";

export function QuoteSection() {
  return (
    <section className="relative py-[50px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-2xl bg-[#09152A] overflow-hidden">

      {/* ── Background Video ─────────────────────────────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.42 }}
      >
        <source src={quoteBgVideo} type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09152A]/65 via-[#09152A]/40 to-[#09152A]/75" />

      {/* ── Content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1064px] mx-auto w-full">

        {/* Glass Card */}
        <div
          className="rounded-2xl p-8 md:p-12 flex flex-col justify-center border border-white/10"
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            background: "rgba(9, 21, 42, 0.52)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07)",
          }}
        >

          {/* Badge */}
          <div className="flex justify-center mb-7">
            <span
              className="px-6 py-2 rounded-full text-white text-[13px] font-bold tracking-[0.12em] uppercase border border-white/15"
              style={{
                background: "linear-gradient(135deg, rgba(151,80,51,0.7) 0%, rgba(214,152,115,0.5) 100%)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 2px 12px rgba(214,152,115,0.2)",
              }}
            >
              Request a Quote
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-[38px] font-extrabold text-white text-center mb-10 tracking-tight leading-snug">
            Ready To Start?{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D69873 0%, #c07a50 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Let's Talk
            </span>{" "}
            About Your Project.
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-4">

            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className={inputCls}
              />
              <input
                type="email"
                placeholder="Email Address"
                className={inputCls}
              />
            </div>

            {/* Row 2: Phone + Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className={inputCls}
              />
              <div className="relative">
                <select
                  defaultValue=""
                  className={inputCls + " appearance-none cursor-pointer"}
                  style={{ colorScheme: "dark" }}
                >
                  <option value="" disabled className="bg-[#09152A]">Select a Service</option>
                  <option value="buy" className="bg-[#09152A]">Residential Remodeling</option>
                  <option value="sell" className="bg-[#09152A]">Bathroom Remodeling</option>
                  <option value="kitchen" className="bg-[#09152A]">Kitchen Remodeling</option>
                  <option value="bathroom" className="bg-[#09152A]">Floor, Pavers & Carpentry</option>
                  <option value="full" className="bg-[#09152A]">Real Estate Services</option>
                  <option value="pre-list" className="bg-[#09152A]">Home evaluation</option>
                  <option value="invest" className="bg-[#09152A]">PROFESSIONAL CLEANING SERVICES</option>
                  <option value="consult" className="bg-[#09152A]">Premium Cabinet Sales & Custom Design Services</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Row 3: Project Address */}
            <input
              type="text"
              placeholder="Project Address (optional)"
              className={inputCls}
            />

            {/* Row 4: Message */}
            <textarea
              placeholder="Write your message — tell us about your project, timeline, or budget..."
              rows={5}
              className={inputCls + " resize-none"}
            />

            {/* Submit */}
            <div className="flex justify-center mt-3">
              <button
                type="submit"
                className="group flex items-center gap-3 px-14 py-4 rounded-full text-white font-bold text-[15px] tracking-wide border border-white/15 shadow-xl hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(214,152,115,0.4)] transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #D69873 0%, #975033 100%)",
                  boxShadow: "0 8px 28px rgba(214,152,115,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                <Send className="w-4 h-4" />
                Send Now
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
