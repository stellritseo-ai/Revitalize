import { ChevronsRight } from "lucide-react";
import teamImg from "@/assets/welcome-team.jpg";
import siteImg from "@/assets/welcome-site.jpg";

export function WelcomeSection() {
  return (
    <section className="relative w-full bg-[#FBF1E6] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div
              className="inline-flex items-center rounded-full px-6 py-2.5 text-white text-xs sm:text-sm font-semibold tracking-wide mb-7"
              style={{ background: "var(--gradient-brand)" }}
            >
              BUILD YOUR VISION. PERFECT YOUR HOME.
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] tracking-tight text-foreground mb-6">
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

            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-foreground/80 max-w-xl mb-9">
              <p>
                We don't just build structures — we build trust. As a locally owned, fully licensed (ROC #328501), insured, and bonded general contractor, we bring over six years of industry experience to every residential and commercial project.
              </p>
              <p>
                Whether it's a custom home, a bathroom renovation, or commercial framing, our team ensures precision, transparency, and on-time delivery. Your property is our priority.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                className="inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-white font-semibold text-sm shadow-lg hover:opacity-95 transition"
                style={{ background: "var(--gradient-brand)" }}
              >
                Read More
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <ChevronsRight className="h-5 w-5" />
                </span>
              </button>
              <button className="inline-flex items-center rounded-full px-7 py-3 bg-[#023C87] hover:bg-[#03306d] transition text-white font-semibold text-sm">
                Get Free Estimate
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="relative w-full max-w-[560px] mx-auto aspect-square">
            {/* Main team circle */}
            <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
              <img
                src={teamImg}
                alt="Arizona Premiere Construction team"
                width={960}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Years of experience badge */}
            <div
              className="absolute -top-2 -right-2 sm:top-0 sm:right-0 h-32 w-32 sm:h-40 sm:w-40 rounded-full flex flex-col items-center justify-center text-white text-center shadow-xl border-4 border-[#FBF1E6]"
              style={{ background: "var(--gradient-brand-diag)" }}
            >
              <div className="text-3xl sm:text-4xl font-bold leading-none">06+</div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold leading-tight">
                Years Of<br />Experience
              </div>
            </div>

            {/* Site supervisor circle */}
            <div className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-2 h-36 w-36 sm:h-48 sm:w-48 rounded-full overflow-hidden shadow-xl border-4 border-[#FBF1E6]">
              <img
                src={siteImg}
                alt="Construction supervisor on site"
                width={640}
                height={640}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
