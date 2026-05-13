import { CheckCircle2 } from "lucide-react";

interface ServiceDetailProps {
  title: string;
  description: string[];
  features: string[];
  image: string;
}

export function ServiceDetailContent({ title, description, features, image }: ServiceDetailProps) {
  return (
    <section className="bg-gradient-to-r from-[#F0F6FE] to-[#FDF7EE] py-[40px] md:py-[60px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[10px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="inline-flex rounded-full bg-gradient-to-r from-[#12305B] to-[#C75A2A] mb-6 self-start shadow-sm">
            <div className="px-6 py-1.5 text-white text-[15px] font-bold tracking-wide">
              Service Overview
            </div>
          </div>
          
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0F172A] mb-6 leading-tight tracking-tight">
            {title}
          </h2>
          
          <div className="space-y-4 mb-8">
            {description.map((p, idx) => (
              <p key={idx} className="text-gray-700 text-lg leading-relaxed font-medium">
                {p}
              </p>
            ))}
          </div>

          <h3 className="text-xl font-bold text-[#0F172A] mb-5">What's Included</h3>
          <ul className="space-y-4 mb-10">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-4 text-[#0F172A] font-semibold text-[17px]">
                <CheckCircle2 className="w-6 h-6 text-[#C75A2A] shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative lg:sticky lg:top-32">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[400px] md:h-[600px] w-full border border-white/50">
            <img 
              src={image} 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
