import React from "react";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";

// Custom SVGs for precise brand matching
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export function FooterSection() {
  const services = [
    { label: 'Construction', to: '/services/construction' },
    { label: 'Remodeling', to: '/services/remodeling' },
    { label: 'Specialty Trade', to: '/services/specialty-trade' },
    { label: 'Finishing & Systems', to: '/services/finishing-systems' },
    { label: 'Financing', to: '/financing' }
  ];

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Our Work', to: '/gallery' },
    { label: 'Reviews', to: '/reviews' },
    { label: 'Free Estimate', to: '/contact' },
    { label: 'Contact Us', to: '/contact' }
  ];

  return (
    <footer className="bg-[#0A2B63] py-[40px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[10px] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1 - About */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <h3 className="text-xl font-bold text-white mb-6 tracking-wide">
              Arizona Premiere Construction Group LLC
            </h3>
            <p className="text-[#A3B8CC] text-[15px] leading-relaxed mb-6 font-medium">
              6 years of excellence across Phoenix, Scottsdale, Mesa & beyond. From new construction to kitchen remodels, we deliver quality craftsmanship on every project. ROC #328501.
            </p>
            <p className="text-white font-bold text-[15px] tracking-wide">
              ROC #328501 | Licensed · Insured · Bonded
            </p>
          </div>

          {/* Column 2 - Services */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-[#A3B8CC] hover:text-white transition-colors text-[15px] font-medium tracking-wide">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-[#A3B8CC] hover:text-white transition-colors text-[15px] font-medium tracking-wide">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-6 tracking-wide">Contact Us</h4>
            <div className="text-[#A3B8CC] text-[15px] font-medium mb-5 tracking-wide">
              Arizona Premiere Construction Group Llc
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="w-[18px] h-[18px] text-[#D94141] shrink-0 mt-0.5" fill="#D94141" stroke="#fff" strokeWidth={1} />
                <span className="text-[#A3B8CC] text-[15px] font-medium">Chandler, Arizona 85249</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8A9EB3] shrink-0" fill="currentColor" />
                <span className="text-[#A3B8CC] text-[15px] font-medium">(602) 816 8177</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8A9EB3] shrink-0" fill="currentColor" />
                <span className="text-[#A3B8CC] text-[15px] font-medium">info@arizonapremier.com</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a href="#" className="text-white hover:text-[#C75A2A] hover:-translate-y-1 transition-all duration-300">
                <FacebookIcon />
              </a>
              <a href="#" className="text-white hover:text-[#C75A2A] hover:-translate-y-1 transition-all duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-[#C75A2A] hover:-translate-y-1 transition-all duration-300">
                <GoogleIcon />
              </a>
              <a href="#" className="text-white hover:text-[#C75A2A] hover:-translate-y-1 transition-all duration-300">
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Location Keywords */}
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4 mb-8">
          {[
            { label: 'General Contractor Chandler Az', to: '/services' },
            { label: 'Residential Construction Phoenix', to: '/services/construction' },
            { label: 'Kitchen Remodeling Scottsdale', to: '/services/remodeling' },
            { label: 'Commercial Construction Mesa', to: '/services/construction' }
          ].map((loc) => (
            <Link 
              key={loc.label} 
              to={loc.to} 
              className="text-white text-[15px] font-medium underline underline-offset-[6px] decoration-white/40 hover:decoration-white transition-colors"
            >
              {loc.label}
            </Link>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/20 text-[#A3B8CC] text-[14px] font-medium tracking-wide">
          <p>Copyright © 2026 - Arizona Premiere Construction Group LLC. All Rights Reserved.</p>
          <p>Designed By: StellR IT LLC</p>
        </div>
        
      </div>
    </footer>
  );
}
