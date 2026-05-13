import { CheckCircle2, ShieldCheck, Banknote } from "lucide-react";

export function FinancingSection() {
  return (
    <section className="bg-gradient-to-r from-[#F0F6FE] to-[#FDF7EE] py-[40px] md:py-[60px] px-4 md:px-8 mx-[15px] mt-[15px] rounded-[10px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="inline-flex rounded-full bg-gradient-to-r from-[#12305B] to-[#C75A2A] mb-6 self-start shadow-sm">
            <div className="px-6 py-1.5 text-white text-[15px] font-bold tracking-wide">
              Flexible Options
            </div>
          </div>
          
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#0F172A] mb-6 leading-tight tracking-tight">
            Build Now, Pay Over Time
          </h2>
          
          <p className="text-gray-700 text-lg mb-8 max-w-lg leading-relaxed font-medium">
            We believe your dream project shouldn't wait. That's why we partner with top local and national lenders to offer flexible, competitive financing options tailored to your budget.
          </p>

          <ul className="space-y-5 mb-10">
            {[
              { icon: CheckCircle2, text: "Fast, easy approval process" },
              { icon: Banknote, text: "Low monthly payment options" },
              { icon: ShieldCheck, text: "No hidden fees or prepayment penalties" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-[#0F172A] font-semibold text-[17px]">
                <item.icon className="w-6 h-6 text-[#C75A2A]" />
                {item.text}
              </li>
            ))}
          </ul>

          <button className="w-fit px-8 py-3.5 rounded-full bg-[#12305B] hover:bg-[#0D2241] text-white font-bold text-[15px] transition-colors shadow-lg">
            Apply For Financing
          </button>
        </div>

        {/* Right Image/Cards */}
        <div className="w-full lg:w-1/2 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[400px] md:h-[500px]">
            <img 
              src="/service-2.jpg" 
              alt="Financing your project" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">0% APR Promotional Financing*</h3>
                <p className="text-white/80 text-sm">Available for qualified buyers on select projects. Ask our team for details during your estimate.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
