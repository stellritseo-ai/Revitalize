import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ProgressSection } from "@/components/ProgressSection";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <main>
      <PageHero
        title="About Us"
        subtitle="Learn about our 6+ years of excellence across Phoenix, Scottsdale, Mesa & beyond."
        image="/hero-2.png"
      />
      <WelcomeSection />
      <WhyChooseUsSection />
      <ProgressSection />
    </main>
  );
}


function OurDifferenceSection() {
  return (
    <section className="py-32 bg-[#FBFBFB] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Why Us?</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0A2B63] mb-8">The Arizona Complete Difference</h2>
          <p className="text-xl text-[#0A2B63]/70 max-w-3xl mx-auto font-medium">We don't just complete projects; we build trust through reliability, quality craftsmanship, and an unmatched client experience.</p>
        </div>

        {/* Grid of Differences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: CheckCircle2,
              title: "Licensed & Insured",
              desc: "Full coverage for your protection."
            },
            {
              icon: Wrench,
              title: "Quality Guarantee",
              desc: "Built to last with superior materials."
            },
            {
              icon: Clock,
              title: "On Time Delivery",
              desc: "Respecting your time and schedule."
            },
            {
              icon: MessageSquare,
              title: "24/7 Support",
              desc: "Always here when you need us."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] border border-gray-200 hover:border-brand-orange hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="bg-brand-orange/10 w-20 h-20 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
                <item.icon className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-[#0A2B63] text-xl mb-3">{item.title}</h3>
              <p className="text-[#0A2B63]/60 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* <Complete>page</Complete> */ }