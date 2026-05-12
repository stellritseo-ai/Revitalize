import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Facebook, Instagram, PhoneCall, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/" },
  { label: "Services", to: "/" },
  { label: "Financing", to: "/" },
  { label: "Project Gallery", to: "/" },
  { label: "Reviews", to: "/" },
  { label: "Contact", to: "/" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="sticky top-0 z-50 bg-background shadow-[var(--shadow-nav)]">
      {/* Top utility bar */}
      <div
        className="text-white text-xs sm:text-sm"
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
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`px-2.5 xl:px-4 py-2 rounded-full text-[13px] xl:text-sm font-medium whitespace-nowrap transition ${
                  active === item.label
                    ? "bg-brand-blue-deep text-white"
                    : "text-foreground hover:text-brand-blue-deep"
                }`}
              >
                {item.label}
              </button>
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
            <button className="rounded-full px-3 xl:px-5 py-2 text-white font-semibold text-[13px] xl:text-sm bg-brand-blue-deep hover:bg-brand-blue transition whitespace-nowrap">
              Quote With AI
            </button>
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
              <button
                key={item.label}
                onClick={() => { setActive(item.label); setOpen(false); }}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
                  active === item.label ? "bg-brand-blue-deep text-white" : "hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a href="tel:6028168177" className="rounded-full px-4 py-2.5 text-white font-semibold text-sm text-center" style={{ background: "linear-gradient(90deg, var(--brand-orange), oklch(0.58 0.2 35))" }}>
                (602) 816 8177
              </a>
              <button className="rounded-full px-5 py-2.5 text-white font-semibold text-sm bg-brand-blue-deep">
                Quote With AI
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
