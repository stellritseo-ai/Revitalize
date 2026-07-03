import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { User, Lock, ArrowRight, ShieldAlert } from "lucide-react";
import { toast } from "sonner";
import { loginAdmin, verifyAdminToken } from "@/lib/leads-store";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Revitalize Office — Portal Access" },
      { name: "description", content: "Authenticate to access Revitalize Group business console." }
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [checkingSession, setCheckingSession] = useState(true);

  // Check if already authenticated on mount
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("revitalize-session-token");
      if (token) {
        try {
          const res = await verifyAdminToken(token);
          if (res.valid) {
            navigate({ to: "/dashboard" });
            return;
          }
        } catch (e) {
          console.error("Auto-auth check failed:", e);
        }
      }
      setCheckingSession(false);
    };
    checkToken();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await loginAdmin(username, password);
      if (res.success && res.token) {
        toast.success("Welcome back, Administrator!");
        navigate({ to: "/dashboard" });
      } else {
        setErrorMsg("Failed to authenticate.");
      }
    } catch (err: any) {
      console.error("Login failed:", err);
      setErrorMsg(err.message || "Invalid username or password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (checkingSession) {
    return (
      <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center text-white font-sans">
        <div className="relative flex flex-col items-center gap-3">
          <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
          <p className="text-xs text-neutral-400 font-light tracking-widest uppercase mt-4">Verifying session...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4 relative font-sans"
      style={{ backgroundImage: "linear-gradient(to bottom, rgba(18, 10, 5, 0.95), rgba(18, 10, 5, 0.98))" }}
    >
      {/* Back to main website link */}
      <div className="absolute top-6 left-6">
        <a 
          href="/" 
          className="text-[10px] text-neutral-400 hover:text-white uppercase font-bold tracking-widest transition-colors"
        >
          ← Back to Site
        </a>
      </div>

      <div
        className="w-full max-w-md bg-white border border-charcoal/5 rounded-2xl shadow-2xl p-8 sm:p-10 flex flex-col items-center text-center relative z-10"
      >
        {/* Logo and Branding */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <img src={logo} alt="Revitalize Logo" className="h-12 w-auto opacity-90 object-contain mb-2 select-none" />
          <h2 className="text-xs font-extrabold uppercase tracking-[0.25em] text-copper select-none">Revitalize Office</h2>
          <h1 className="text-2xl font-bold font-serif text-neutral-900 tracking-tight mt-1">Admin Portal</h1>
          <p className="text-[11px] text-neutral-500 font-light max-w-xs mt-1">
            Access secure management controls, analytics, lead logs, and site reviews.
          </p>
        </div>

        {/* Error Notification */}
        {errorMsg && (
          <div className="w-full mb-6 text-left animate-in fade-in slide-in-from-top-2 duration-250">
            <div className="bg-rose-50 border border-rose-150 rounded-xl p-3.5 flex items-start gap-3">
              <ShieldAlert className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
              <span className="text-[11px] font-semibold text-rose-700 leading-relaxed">{errorMsg}</span>
            </div>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full text-left space-y-5">
          {/* Username Input */}
          <div className="space-y-1.5">
            <label className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Username</label>
            <div className="relative">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full bg-neutral-50/50 hover:bg-neutral-50 border border-charcoal/10 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-copper/20 focus:border-copper transition-all text-neutral-800 placeholder-neutral-400"
              />
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">Password</label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-neutral-50/50 hover:bg-neutral-50 border border-charcoal/10 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-copper/20 focus:border-copper transition-all text-neutral-800 placeholder-neutral-400"
              />
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-charcoal hover:bg-charcoal/90 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] select-none cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-85 disabled:pointer-events-none mt-2"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border border-white/20 border-t-white animate-spin"></span>
                <span>Accessing...</span>
              </span>
            ) : (
              <>
                <span>Enter Revitalize Office</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Footer bar */}
      <div className="absolute bottom-6 text-center text-[9px] text-neutral-500 font-medium tracking-wide">
        © 2026 Revitalize Group · Admin Authentication Portal
      </div>
    </div>
  );
}
