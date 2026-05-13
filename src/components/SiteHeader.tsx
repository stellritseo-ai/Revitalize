import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Facebook, Instagram, PhoneCall, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { 
    label: "Services", 
    to: "/services",
    subItems: [
      { label: "Construction", to: "/services/construction" },
      { label: "Remodeling", to: "/services/remodeling" },
      { label: "Specialty Trade", to: "/services/specialty-trade" },
      { label: "Finishing & Systems", to: "/services/finishing-systems" }
    ]
  },
  { label: "Financing", to: "/financing" },
  { label: "Project Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-[15px] z-50 mx-[15px] mt-[15px] mb-0 rounded-[10px] transition-all duration-300 border ${
        isScrolled 
          ? "bg-white/85 backdrop-blur-lg shadow-2xl border-gray-200/50" 
          : "bg-background shadow-xl border-gray-100/50"
      }`}
    >
      {/* Top utility bar */}
      <div
        className="text-white text-xs sm:text-sm rounded-t-[10px] overflow-hidden"
        style={{ background: "var(--gradient-topbar)" }}
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 h-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <a href="mailto:info@arizonapremier.com" className="flex items-center gap-2 min-w-0">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 shrink-0">
                <Mail className="h-3.5 w-3.5" />
              </span>
              <span className="truncate">info@arizonapremier.com</span>
            </a>
            <span className="hidden sm:flex items-center gap-2 min-w-0">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 shrink-0">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              <span className="truncate">4960 S Gilbert Rd, Chandler, Az 85249</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            {[Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue-deep hover:bg-brand-blue transition">
                <Icon className="h-3.5 w-3.5 fill-white text-white" />
              </a>
            ))}
            <a href="#" aria-label="google" className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange hover:opacity-90 transition text-white font-bold text-xs">
              G
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-4 py-3 lg:py-4">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="Arizona Premier Construction Group LLC" className="h-12 lg:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.to}
                  activeProps={{
                    className: "bg-brand-blue-deep text-white",
                  }}
                  inactiveProps={{
                    className: "text-foreground hover:text-brand-blue-deep",
                  }}
                  className="flex items-center px-2.5 xl:px-4 py-2 rounded-full text-[13px] xl:text-sm font-medium whitespace-nowrap transition"
                >
                  {item.label}
                  {item.subItems && <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-70" />}
                </Link>

                {item.subItems && (
                  <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[99]">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.to}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-blue-deep hover:text-white transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a
              href="tel:6028168177"
              className="flex items-center gap-2 rounded-full px-3 xl:px-4 py-2 text-white font-semibold text-[13px] xl:text-sm whitespace-nowrap"
              style={{ background: "linear-gradient(90deg, var(--brand-orange), oklch(0.58 0.2 35))" }}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <PhoneCall className="h-3.5 w-3.5" />
              </span>
              (602) 816 8177
            </a>
            <Link 
              to="/contact"
              className="rounded-full px-3 xl:px-5 py-2 text-white font-semibold text-[13px] xl:text-sm bg-brand-blue-deep hover:bg-brand-blue transition whitespace-nowrap"
            >
              Quote With AI
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden pb-4 space-y-1 border-t pt-3">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeProps={{
                      className: "bg-brand-blue-deep text-white",
                    }}
                    inactiveProps={{
                      className: "hover:bg-muted text-foreground",
                    }}
                    className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                </div>
                
                {item.subItems && (
                  <div className="pl-4 space-y-1 border-l-2 border-brand-blue-deep/20 ml-6 mt-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        onClick={() => setOpen(false)}
                        className="block w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-muted transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a href="tel:6028168177" className="rounded-full px-4 py-2.5 text-white font-semibold text-sm text-center" style={{ background: "linear-gradient(90deg, var(--brand-orange), oklch(0.58 0.2 35))" }}>
                (602) 816 8177
              </a>
              <Link 
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full px-5 py-2.5 text-white font-semibold text-sm bg-brand-blue-deep text-center"
              >
                Quote With AI
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
