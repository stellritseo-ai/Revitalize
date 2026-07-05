import { useRef, useState, useEffect } from "react";
import { Star, Quote, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Helper function for localization fallback
const t = (en: string, _es?: string) => en;

const googleReviewsUrl =
  "https://www.google.com/search?sca_esv=6253cd38f2fad33d&hl=en-NP&gl=np&sxsrf=ANbL-n7cS37lAvjY_Gq5hBPjVGleH16DmQ:1780601199430&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZEiVWyMnEv3Fg7VPBZP4lRtpHcXbC4OPSbzIIOGyaaDedYDEdz7c-5t_uTFwJrQEgVgg_4bb9oLWcel1cScK-41cGunnoY7ASGDLL77Q0LojsgwVw%3D%3D&q=Revitalize+Group+Reviews&sa=X&ved=2ahUKEwjo8emvqO6UAxW73TgGHWLbCzoQ0bkNegQIKxAF&biw=1440&bih=788&dpr=2";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

interface Review {
  text: string;
  name: string;
  role: string;
  rating: number;
  initials: string;
  avatarColor: string;
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ review, isGrid = false }: { review: Review; isGrid?: boolean }) {
  return (
    <div className={cn(
      "relative bg-white border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-2xl p-6 flex flex-col gap-4 group hover:shadow-[0_6px_30px_rgba(0,0,0,0.10)] hover:border-slate-300 transition-all duration-300",
      isGrid ? "w-full" : "flex-shrink-0 w-[340px] sm:w-[380px] mx-3"
    )}>
      {/* Quotation Icon overlay */}
      <Quote className="absolute top-6 right-6 w-8 h-8 text-copper/5 pointer-events-none group-hover:text-copper/10 transition-colors duration-300" />

      {/* Rating */}
      <StarRating count={review.rating} />

      {/* Text */}
      <p className="text-slate-600 text-sm leading-relaxed font-medium flex-1">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ backgroundColor: review.avatarColor }}
        >
          {review.initials}
        </div>
        <div>
          <p className="text-slate-900 font-semibold text-sm leading-tight">
            {review.name}
          </p>
          <p className="text-slate-400 text-xs mt-0.5">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: Review[];
  direction?: "left" | "right";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const duplicated = [...items, ...items, ...items];

  const animClass =
    direction === "left" ? "marquee-track-left" : "marquee-track-right";

  return (
    <div
      className="overflow-hidden relative group/row"
      onMouseEnter={() => {
        if (trackRef.current) {
          trackRef.current.style.animationPlayState = "paused";
        }
      }}
      onMouseLeave={() => {
        if (trackRef.current) {
          trackRef.current.style.animationPlayState = "running";
        }
      }}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#F8FAFC] to-transparent" />

      <div ref={trackRef} className={`flex ${animClass}`}>
        {duplicated.map((review, i) => (
          <TestimonialCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials({ isGrid = false }: { isGrid?: boolean }) {
  const [dbReviews, setDbReviews] = useState<Array<{
    id: string; author: string; location: string; text: string; rating: number; title: string; featured: boolean;
  }>>([]);

  useEffect(() => {
    fetch("/api/reviews?t=" + Date.now())
      .then(r => r.ok ? r.json() : [])
      .then(reviews => {
        if (Array.isArray(reviews)) {
          setDbReviews(reviews.filter((r: any) => r.featured));
        }
      })
      .catch(() => {});
  }, []);

  const staticReviews: Review[] = [
    {
      text: t(
        "Revitalize Real Estate rebuilt my Tampa kitchen and handled drywall + flooring seamlessly. Their team showed up on time, stayed on budget, and even coordinated plumbing.",
        "Revitalize Real Estate reconstruyó mi cocina en Tampa y manejó los paneles de yeso y los pisos a la perfección. Su equipo se presentó a tiempo, se mantuvo dentro del presupuesto e incluso coordinó la plomería."
      ),
      name: "David R.",
      role: t("Tampa, FL", "Tampa, FL"),
      rating: 5,
      initials: "DR",
      avatarColor: "#1e110a",
    },
    {
      text: t(
        "Real pros. From framing to final paint, everything was clean and permitted correctly. Love that they offer video meetings — saved us so much time.",
        "Verdaderos profesionales. Desde la estructura hasta la pintura final, todo estuvo limpio y con los permisos correspondientes. Nos encantó que ofrecieran reuniones por video: nos ahorró mucho tiempo."
      ),
      name: "Lisa M.",
      role: t("Clearwater, FL", "Clearwater, FL"),
      rating: 5,
      initials: "LM",
      avatarColor: "#d57c4c",
    },
    {
      text: t(
        "We hired them for a full bathroom remodel. The craftsmanship is on a completely different level. Premium finish from start to finish.",
        "Los contratamos para una remodelación completa del baño. La mano de obra está en un nivel completamente diferente. Acabado premium de principio a fin."
      ),
      name: "Marcus T.",
      role: t("St. Petersburg, FL", "St. Petersburg, FL"),
      rating: 5,
      initials: "MT",
      avatarColor: "#954d26",
    },
    {
      text: t(
        "Their estimate process was surprisingly accurate. The final invoice for our master bath remodel matched the initial quote almost perfectly. No hidden fees.",
        "Su proceso de cotización fue sorprendentemente preciso. La factura final de la remodelación de nuestro baño principal coincidió casi a la perfección con la cotización inicial. Sin tarifas ocultas."
      ),
      name: "Elena P.",
      role: t("Tampa, FL", "Tampa, FL"),
      rating: 5,
      initials: "EP",
      avatarColor: "#1e110a",
    },
    {
      text: t(
        "Hired them for a commercial build-out for our new retail space. They navigated the city permitting process like pros and got us open on time.",
        "Los contratamos para una habilitación comercial para nuestro nuevo espacio minorista. Gestionaron el proceso de permisos de la ciudad como profesionales y logramos abrir a tiempo."
      ),
      name: "Robert W.",
      role: t("Wesley Chapel, FL", "Wesley Chapel, FL"),
      rating: 5,
      initials: "RW",
      avatarColor: "#d57c4c",
    },
    {
      text: t(
        "I was nervous about undertaking a whole-home improvement, but their project manager kept me informed every single day. The transformation is breathtaking.",
        "Estaba nerviosa por emprender una mejora en todo el hogar, pero su gerente de proyecto me mantuvo informada todos los días. La transformación es impresionante."
      ),
      name: "Amanda C.",
      role: t("Riverview, FL", "Riverview, FL"),
      rating: 5,
      initials: "AC",
      avatarColor: "#954d26",
    },
  ];

  const colors = ["#1e110a", "#d57c4c", "#954d26"];
  const allReviews: Review[] = [
    ...dbReviews.map((r, i) => ({
      text: r.text,
      name: r.author,
      role: r.location,
      rating: r.rating || 5,
      initials: r.author.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2),
      avatarColor: colors[i % colors.length],
    })),
    ...staticReviews,
  ];

  const row1 = allReviews.filter((_, idx) => idx % 2 === 0);
  const row2 = allReviews.filter((_, idx) => idx % 2 !== 0);

  return (
    <section
      id="reviews"
      className="relative py-[60px] bg-[#F8FAFC] overflow-hidden mx-[15px] mt-[15px] rounded-[10px] border border-slate-200"
    >
      {/* Background glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-copper/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-[#954d26]/5 blur-[100px]" />

      {/* Section Header */}
      <div className="mx-auto w-[90%] max-w-7xl text-center mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs font-black text-slate-500 uppercase tracking-widest mb-5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
          {t("Client Testimonials", "Opiniones de Clientes")}
        </div>

        <h2 className="text-[32px] sm:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight mb-[10px] font-serif">
          {t("Trusted by ", "Con la confianza de ")}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-copper-deep italic font-bold">
            {t("Tampa Bay Homeowners", "Propietarios de Tampa Bay")}
          </span>
        </h2>

        <p className={cn(
          "mx-auto max-w-2xl text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-medium",
          isGrid ? "mb-10" : "mb-8"
        )}>
          {t(
            "See what our clients say about their experience remodeling and improving their homes with Revitalize Real Estate.",
            "Vea lo que nuestros clientes dicen sobre su experiencia remodelando y mejorando sus hogares con Revitalize Real Estate."
          )}
        </p>

        {/* Google Reviews Badge */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white border border-slate-200 rounded-2xl sm:rounded-full p-4 sm:py-2.5 sm:pl-3 sm:pr-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 max-w-full">
          <div className="bg-slate-50 w-12 h-12 shrink-0 rounded-full flex items-center justify-center border border-slate-100">
            <GoogleIcon />
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2">
              <span className="font-black text-2xl text-slate-900 leading-none">5</span>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-2 gap-y-0.5 text-xs font-bold text-slate-500">
                <span className="whitespace-nowrap">{t("Based On 127+ Google Reviews", "Basado en más de 127 opiniones de Google")}</span>
                <span className="px-0.5 hidden sm:inline opacity-30">|</span>
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-copper hover:text-copper-deep underline underline-offset-2 transition-colors whitespace-nowrap"
                >
                  {t("Read All Reviews", "Leer Todas las Opiniones")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid or Marquee View */}
      {isGrid ? (
        <div className="mx-auto w-[90%] max-w-7xl relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {allReviews.map((review, idx) => (
            <TestimonialCard key={idx} review={review} isGrid={true} />
          ))}
        </div>
      ) : (
        <div className="relative z-10 flex flex-col gap-5">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>
      )}

      {/* Bottom Button */}
      {!isGrid && (
        <div className="mt-12 text-center relative z-10">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#1e110a] to-[#954d26] text-white font-bold text-sm hover:opacity-95 transition-all shadow-md hover:shadow-lg hover:scale-[1.02] transform duration-300"
          >
            {t("Read All Customer Reviews", "Leer Todas las Opiniones")}
          </a>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.3333%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          animation: marquee-left 60s linear infinite;
          width: max-content;
        }
        .marquee-track-right {
          animation: marquee-right 60s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}

export function TestimonialSection({ variant = "slider" }: { variant?: "slider" | "grid" }) {
  return <Testimonials isGrid={variant === "grid"} />;
}
