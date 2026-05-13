import { Link } from "@tanstack/react-router";

const services = [
  {
    title: "Construction",
    to: "/services/construction",
    items: [
      "General Construction",
      "Residential Builds",
      "Commercial Projects",
      "New Construction",
      "Custom Projects",
    ],
    image: "/service-1.jpg",
  },
  {
    title: "Remodeling",
    to: "/services/remodeling",
    items: [
      "Kitchen Remodels",
      "Bathroom Renovations",
      "Basement Finishing",
      "Room Additions",
      "Whole Home",
    ],
    image: "/service-2.jpg",
  },
  {
    title: "Specialty Trade",
    to: "/services/specialty-trade",
    items: [
      "Roofing Services",
      "Plumbing & Piping",
      "Electrical Systems",
      "HVAC Installation",
      "Masonry Work",
    ],
    image: "/service-3.jpg",
  },
  {
    title: "Finishing & Systems",
    to: "/services/finishing-systems",
    items: [
      "Drywall Installation",
      "Interior Painting",
      "Custom Flooring",
      "Insulation Services",
      "Trim & Millwork",
    ],
    image: "/service-4.jpg",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-gradient-to-r from-[#F0F6FE] to-[#FDF7EE] py-[40px] px-4 md:px-8 lg:px-16 mx-[15px] mt-[15px] rounded-[10px]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1E3A5F] to-[#C25A2A] text-white text-sm font-medium mb-6">
            Our Services
          </div>

          <h2 className="text-3xl md:text-[40px] font-bold text-black tracking-tight mb-4 md:-mt-[15px]">
            What We Build — What We Transform
          </h2>
          <p className="text-lg text-gray-800 font-medium max-w-2xl -mt-[10px]">
            End-to-end craftsmanship across every trade your project needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[383px] rounded-[1.5rem] overflow-hidden cursor-pointer shadow-lg"
            >
              <Link to={service.to} className="absolute inset-0 z-10" aria-label={service.title} />
              
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/95 via-[#151515]/40 to-transparent transition-opacity duration-500 group-hover:from-[#151515]/95 group-hover:via-[#151515]/80 group-hover:to-black/40" />

              {/* Content Container */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end pointer-events-none">
                <h3 className="text-white text-2xl font-bold mb-0 group-hover:mb-5 transition-all duration-500 ease-out">
                  {service.title}
                </h3>

                {/* Expandable Content Grid */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <ul className="flex flex-col gap-3 mb-6">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <path d="M10 17l5-5-5-5" />
                            <path d="M15 12H3" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[#f06126] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors inline-block">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
