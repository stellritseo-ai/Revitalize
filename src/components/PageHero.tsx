import React from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string; // Kept for interface compatibility
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative w-full p-[15px]">
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden bg-[#0a0a0a] rounded-[10px]">
        {/* Background Video */}
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-80 transform-gpu pointer-events-none"
        />

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/30 via-brand-orange/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 h-full flex flex-col justify-end pb-12 sm:pb-16">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-[60px] leading-tight font-bold tracking-tight mb-4 text-white drop-shadow-lg">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl text-white/95 drop-shadow-md font-medium">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
