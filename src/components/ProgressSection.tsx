import { Star } from "lucide-react";

const progressItems = [
  "Expertise",
  "Quality",
  "Trust",
  "20+ Years Of Experience",
  "Licensed & Insured",
  "Licensed · Insured · Bonded",
];

export function ProgressSection() {
  return (
    <section className="bg-gradient-to-r from-[#D69873] to-[#975033] py-[20px] mx-[15px] mt-[15px] rounded-[10px] overflow-hidden border border-white/10">
      <div className="flex w-max animate-marquee !mt-0">
        {/* We duplicate the list 4 times to ensure it covers wide screens and seamlessly loops */}
        {[...Array(4)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex items-center shrink-0">
            {progressItems.map((item, index) => (
              <div key={`${arrayIndex}-${index}`} className="flex items-center">
                <span className="text-white text-[18px] font-semibold tracking-wider whitespace-nowrap px-6">
                  {item}
                </span>
                <Star className="w-5 h-5 text-white fill-white mx-6" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
