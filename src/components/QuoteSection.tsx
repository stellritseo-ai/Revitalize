import React, { useState, useEffect } from "react";
import { ChevronDown, Send } from "lucide-react";
import { toast } from "sonner";
import quoteBgVideo from "../assets/video/04b45dfc-4db8-4375-b262-2eef763f0401.mp4";

const inputCls =
  "bg-white/10 border border-white/15 text-white placeholder-white/40 px-4 py-3.5 rounded-xl w-full outline-none focus:border-copper/70 focus:ring-2 focus:ring-copper/25 transition-all duration-200 text-[15px] font-medium";

export function QuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Captcha State
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  const generateCaptcha = () => {
    setCaptchaNum1(Math.floor(Math.random() * 9) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 9) + 1);
    setCaptchaAnswer("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (parseInt(captchaAnswer) !== captchaNum1 + captchaNum2) {
      toast.error("Incorrect captcha. Please solve the math problem correctly.");
      setIsSubmitting(false);
      return;
    }

    const emailTo = "revitalizerealestate@gmail.com";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailTo}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Quote Request: ${formData.name} - ${formData.service}`,
          _cc: "jitenksony@gmail.com",
          _captcha: "false",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          address: formData.address || "Not provided",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setShowPopup(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          address: "",
          message: "",
        });
        generateCaptcha();
      } else {
        throw new Error(result.message || "Failed to submit form.");
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error("Failed to submit form. Please try again.");
      generateCaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-[50px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-2xl bg-[#09152A] overflow-hidden">

      {/* ── Background Video ─────────────────────────────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 1 }}
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
                WebkitBackdropFilter: "blur(8px)",
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={inputCls}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={inputCls}
                required
              />
            </div>

            {/* Row 2: Phone + Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={inputCls}
                required
              />
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputCls + " appearance-none cursor-pointer"}
                  style={{ colorScheme: "dark" }}
                  required
                >
                  <option value="" disabled className="bg-[#09152A]">Select a Service</option>
                  <option value="Residential Remodeling" className="bg-[#09152A]">Residential Remodeling</option>
                  <option value="Bathroom Remodeling" className="bg-[#09152A]">Bathroom Remodeling</option>
                  <option value="Kitchen Remodeling" className="bg-[#09152A]">Kitchen Remodeling</option>
                  <option value="Floor, Pavers & Carpentry" className="bg-[#09152A]">Floor, Pavers & Carpentry</option>
                  <option value="Real Estate Services" className="bg-[#09152A]">Real Estate Services</option>
                  <option value="Home Evaluation" className="bg-[#09152A]">Home evaluation</option>
                  <option value="Professional Cleaning Services" className="bg-[#09152A]">PROFESSIONAL CLEANING SERVICES</option>
                  <option value="Premium Cabinet Sales & Custom Design Services" className="bg-[#09152A]">Premium Cabinet Sales & Custom Design Services</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Row 3: Project Address */}
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Project Address (optional)"
              className={inputCls}
            />

            {/* Row 4: Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message — tell us about your project, timeline, or budget..."
              rows={5}
              className={inputCls + " resize-none"}
              required
            />

            {/* Captcha challenge */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="text-white text-sm font-semibold tracking-wide text-left">
                Prove you are human: What is <span className="text-copper font-bold">{captchaNum1} + {captchaNum2}</span>?
              </div>
              <input
                type="number"
                name="captcha"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                placeholder="Enter Answer"
                className={inputCls}
                required
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center mt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-3 px-14 py-4 rounded-full text-white font-bold text-[15px] tracking-wide border border-white/15 shadow-xl hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(214,152,115,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #D69873 0%, #975033 100%)",
                  boxShadow: "0 8px 28px rgba(214,152,115,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Now"}
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Success Modal Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" 
            onClick={() => setShowPopup(false)}
          />
          
          {/* Modal Content */}
          <div 
            className="relative bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border border-charcoal/10 text-center transform scale-100 transition-all duration-300 z-10"
            style={{
              boxShadow: "0 24px 70px rgba(0,0,0,0.35)",
            }}
          >
            {/* Checkmark Icon */}
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-charcoal mb-3 font-serif">
              Quote Submitted!
            </h3>

            {/* Message */}
            <p className="text-charcoal-soft font-sans font-medium text-base mb-8">
              Your Quote have been submit. We will get back to you asap.
            </p>

            {/* Action Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="w-full py-3.5 px-6 rounded-full text-white font-bold text-base transition-all hover:opacity-90 shadow-lg shadow-copper/20 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #D69873 0%, #975033 100%)",
              }}
            >
              Back to Website
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
