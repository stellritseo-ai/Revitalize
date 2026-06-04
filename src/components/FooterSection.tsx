import React from "react";
import { MapPin, Phone, Mail, Instagram, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

/* ─── Brand Icons ──────────────────────────────────────────────────────────── */
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const socials = [
  { icon: <FacebookIcon />, label: "Facebook", href: "#" },
  { icon: <Instagram className="w-4 h-4" />, label: "Instagram", href: "#" },
  { icon: <GoogleIcon />, label: "Google", href: "#" },
  { icon: <XIcon />, label: "X", href: "#" },
];

const services = [
  { label: "Residential Remodeling", to: "/services/construction" },
  { label: "Bathroom Remodeling", to: "/services/remodeling" },
  { label: "Kitchen Remodeling", to: "/services/remodeling" },
  { label: "Floor, Pavers & Carpentry", to: "/services/specialty-trade" },
  { label: "Real Estate Services", to: "/services/finishing-systems" },
  { label: "Professional Cleaning", to: "/services" },
  { label: "Premium Cabinet Sales", to: "/services" },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact Us", to: "/contact" },
  { label: "Free Estimate", to: "/contact" },
];

const seoLinks = [
  { label: "General Contractor Tampa FL", to: "/services" },
  { label: "Residential Remodeling St. Petersburg", to: "/services/construction" },
  { label: "Kitchen Remodeling Clearwater", to: "/services/remodeling" },
  { label: "Real Estate Services Brandon", to: "/services/finishing-systems" },
];

export function FooterSection() {
  return (
    <footer
      className="mx-[15px] mt-[15px] rounded-2xl overflow-hidden font-sans"
      style={{
        background: "linear-gradient(160deg, #0d1117 0%, #0f1620 50%, #110d0a 100%)",
      }}
    >
      {/* ── Copper top accent line ───────────────────────────────────── */}
      <div
        className="h-[3px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #D69873 30%, #975033 70%, transparent 100%)",
        }}
      />

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 pt-16 pb-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-14">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-4">
            {/* Logo / wordmark */}
            <div className="mb-5">
              <span
                className="text-2xl font-black tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #D69873 0%, #975033 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Revitalize
              </span>
              <span className="text-white text-2xl font-black tracking-tight"> Real Estate</span>
            </div>

            <p className="text-white/50 text-[14px] leading-[26px] mb-6 max-w-xs font-medium">
              Tampa Bay's trusted partner for real estate, remodeling & home renovation.
              Licensed, insured and serving 14+ cities across the Tampa Bay area.
            </p>

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/20 bg-copper/8 px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-copper" />
              <span className="text-copper text-[11px] font-bold uppercase tracking-widest">
                Licensed · Insured · Bonded
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black uppercase tracking-[0.18em] text-copper mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="group flex items-center gap-1.5 text-white/50 hover:text-white transition-colors duration-200 text-[13px] font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-copper/40 group-hover:bg-copper transition-colors duration-200 shrink-0" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.18em] text-copper mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="group flex items-center gap-1.5 text-white/50 hover:text-white transition-colors duration-200 text-[13px] font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-copper/40 group-hover:bg-copper transition-colors duration-200 shrink-0" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black uppercase tracking-[0.18em] text-copper mb-6">
              Contact Us
            </h4>

            <ul className="space-y-4 mb-8">
              <li>
                <a
                  href="tel:8139456736"
                  className="group flex items-start gap-3 hover:opacity-90 transition-opacity"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: "linear-gradient(135deg, #D69873 0%, #975033 100%)",
                      boxShadow: "0 2px 8px rgba(214,152,115,0.3)",
                    }}
                  >
                    <Phone className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-0.5">Phone</p>
                    <p className="text-white text-[14px] font-bold">(813) 945-6736</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@revitalizerealestate.com"
                  className="group flex items-start gap-3 hover:opacity-90 transition-opacity"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-white/6 border border-white/8">
                    <Mail className="w-3.5 h-3.5 text-white/60" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-0.5">Email</p>
                    <p className="text-white/80 text-[13px] font-medium">revitalizerealestate@gmail.com</p>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-white/6 border border-white/8">
                  <MapPin className="w-3.5 h-3.5 text-white/60" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-0.5">Location</p>
                  <p className="text-white/80 text-[13px] font-medium">Tampa Bay, FL & Surrounding</p>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <Link
              to="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-[12px] font-bold tracking-wide transition-all duration-300 hover:scale-[1.04]"
              style={{
                background: "linear-gradient(135deg, #D69873 0%, #975033 100%)",
                boxShadow: "0 4px 16px rgba(214,152,115,0.25)",
              }}
            >
              Get Free Estimate
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ── SEO Keywords Row ─────────────────────────────────────────── */}
        <div
          className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-x-6 gap-y-3 py-6 mb-6 border-y"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          {seoLinks.map((loc) => (
            <a
              key={loc.label}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-white/30 hover:text-white/60 text-[12px] font-medium transition-colors duration-200"
            >
              {loc.label}
            </a>
          ))}
        </div>

        {/* ── Bottom Bar ───────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-white/30 text-[12px] font-medium">
          <p>© 2026 Revitalize Real Estate. All Rights Reserved.</p>
          <p>
            Designed &amp; Developed by{" "}
            <a
              href="#"
              className="text-copper/70 hover:text-copper transition-colors duration-200 font-bold"
            >
              StellR IT LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
