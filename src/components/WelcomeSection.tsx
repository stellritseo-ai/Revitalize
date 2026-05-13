import { ChevronsRight } from "lucide-react";
import welcomeComposite from "@/assets/welcome-composite.png";
import { Link } from "@tanstack/react-router";

export function WelcomeSection() {
  return (
    <section className="relative bg-[#FBF1E6] overflow-hidden mx-[15px] rounded-[10px]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between">
          {/* Text */}
          <div className="w-full lg:w-[60%]">
            <div
              className="inline-flex items-center rounded-full px-6 py-2.5 text-white text-xs sm:text-sm font-semibold tracking-wide mb-7"
              style={{ background: "var(--gradient-brand)" }}
            >
              BUILD YOUR VISION. PERFECT YOUR HOME.
            </div>

            <h2 className="text-3xl md:text-[3rem] md:leading-[60px] font-bold tracking-tight text-foreground mb-6">
              Welcome to{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                Arizona Premiere
              </span>
              <br />
              Construction Group
            </h2>

            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-foreground/80 max-w-xl mb-10">
              <p>
                We don't just build structures — we build trust. As a locally owned, fully licensed (ROC #328501), insured, and bonded general contractor, we bring over six years of industry experience to every residential and commercial project.
              </p>
              <p>
                Whether it's a custom home, a bathroom renovation, or commercial framing, our team ensures precision, transparency, and on-time delivery. Your property is our priority.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-white font-semibold text-sm shadow-lg hover:opacity-95 transition"
                style={{ background: "var(--gradient-brand)" }}
              >
                Read More
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <ChevronsRight className="h-5 w-5" />
                </span>
              </Link>
              <Link to="/contact" className="inline-flex items-center rounded-full px-7 py-3 bg-[#023C87] hover:bg-[#03306d] transition text-white font-semibold text-sm">
                Get Free Estimate
              </Link>
            </div>
          </div>

          {/* Images */}
          <div className="relative w-full lg:w-[40%] flow-root">
            <img
              src={welcomeComposite}
              alt="Arizona Premiere Construction team and supervisor with 06+ years of experience"
              loading="lazy"
              className="h-auto object-contain"
              style={{ width: "85%", float: "right" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
