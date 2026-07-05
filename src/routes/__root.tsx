import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Hammer, PhoneCall, Mail, Clock } from "lucide-react";
import favIcon from "@/assets/fav.png";

import { SiteHeader } from "@/components/SiteHeader";
import { FooterSection } from "@/components/FooterSection";

function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#110c08] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(151,80,51,0.15)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Glassmorphic card */}
      <div className="max-w-xl w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-[10px] shadow-2xl relative z-10 text-center flex flex-col items-center">
        {/* Animated Icon Container */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-copper/20 blur-xl rounded-full animate-pulse" />
          <div className="w-20 h-20 bg-gradient-to-br from-copper to-[#975033] rounded-[10px] flex items-center justify-center border border-white/20 shadow-lg relative">
            <img src={favIcon} alt="Revitalize Logo" className="w-12 h-12 object-contain" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-4 text-white tracking-tight">
          Enhancing Your <span className="text-copper italic font-serif">Home Journey</span>
        </h1>
        
        <p className="text-[#E2D6CF]/80 text-sm sm:text-base leading-relaxed mb-8 max-w-md font-medium">
          Revitalize Group is performing scheduled maintenance to upgrade our client portal. We are polishing our tools to deliver the best real estate and remodeling experience.
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-[10px] flex flex-col items-center justify-center text-center">
            <Clock className="w-5 h-5 text-copper mb-2 animate-pulse" />
            <span className="text-[10px] text-white/40 uppercase font-black tracking-wider">Estimated Time</span>
            <span className="text-xs font-bold mt-1 text-[#E2D6CF]">Under 1 Hour</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-[10px] flex flex-col items-center justify-center text-center">
            <Hammer className="w-5 h-5 text-copper mb-2 animate-bounce" />
            <span className="text-[10px] text-white/40 uppercase font-black tracking-wider">Current Status</span>
            <span className="text-xs font-bold mt-1 text-green-400">Deploying Upgrades</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col gap-4">
          <p className="text-xs text-[#E2D6CF]/60 font-bold uppercase tracking-wider">Need Immediate Project Support?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:8133230291"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-copper hover:bg-copper-deep text-white font-bold text-xs shadow-lg shadow-copper/20 transition-all duration-300"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Call (813) 323-0291
            </a>
            <a
              href="mailto:revitalizerealestate@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs transition-all duration-300"
            >
              <Mail className="w-3.5 h-3.5 text-copper" /> Email Our Team
            </a>
          </div>
        </div>
      </div>

      {/* Admin entry point link (subtle) */}
      <Link
        to="/login"
        className="mt-8 text-xs text-white/20 hover:text-white/40 transition duration-300 font-bold tracking-widest uppercase"
      >
        Admin Portal Login
      </Link>
    </div>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

import { Toaster } from "@/components/ui/sonner";
import { FloatingChat } from "@/components/FloatingChat";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const isAuthOrDashboard = ["/login", "/dashboard"].includes(location.pathname) || location.pathname.startsWith("/api");

  useEffect(() => {
    if (isAuthOrDashboard) return;

    fetch("/api/settings?t=" + Date.now())
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && typeof data.maintenanceMode === "boolean") {
          setMaintenanceMode(data.maintenanceMode);
        }
      })
      .catch(err => console.warn("Failed to check maintenance mode status", err));
  }, [location.pathname, isAuthOrDashboard]);

  if (maintenanceMode && !isAuthOrDashboard) {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-[#110c08]">
          <MaintenancePage />
          <Toaster />
        </div>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        {!isAuthOrDashboard && <SiteHeader />}
        <main>
          <Outlet />
        </main>
        {!isAuthOrDashboard && <FooterSection />}
        <Toaster />
        {!isAuthOrDashboard && <FloatingChat />}
      </div>
    </QueryClientProvider>
  );
}
