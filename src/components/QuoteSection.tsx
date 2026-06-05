import React, { useState } from "react";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const emailTo = "revitalizerealestate@gmail.com";
    const subjectText = `Quote Request: ${formData.name} - ${formData.service}`;
    const emailBody = `Hello Revitalize Real Estate Team,

I would like to request a quote for my project.

Here are my details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Service Requested: ${formData.service}
- Project Address: ${formData.address || "Not provided"}

Message:
${formData.message}

Thank you!`;

    if (accessKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: subjectText,
            from_name: formData.name,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            address: formData.address || "N/A",
            message: formData.message,
          }),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          toast.success("Quote Request Sent Successfully!", {
            description: "We will get back to you within 24 hours.",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            address: "",
            message: "",
          });
        } else {
          throw new Error(result.message || "Failed to submit form.");
        }
      } catch (error: any) {
        console.error("Web3Forms error:", error);
        toast.error("Direct submission failed. Redirecting to Gmail compose...");
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
          emailTo
        )}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(emailBody)}`;
        window.open(gmailUrl, "_blank");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast.info("Opening Gmail to send your request...");
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        emailTo
      )}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(emailBody)}`;
      window.open(gmailUrl, "_blank");
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
    </section>
  );
}
