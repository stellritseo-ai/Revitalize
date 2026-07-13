import { useState, useEffect } from "react";
import {
  Clock,
  Briefcase,
  Home,
  Hammer,
  MessageSquare,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import whyusVideo from "@/assets/whyus.mp4";

// Helper function for localization fallback
const t = (en: string, _es?: string) => en;

export function WhyChooseUsSection() {
  const [officePhone, setOfficePhone] = useState("(813) 323-0291");

  useEffect(() => {
    fetch("/api/settings?t=" + Date.now())
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.officePhone) {
          setOfficePhone(data.officePhone);
        }
      })
      .catch(() => { });
  }, []);
  const features = [
    {
      icon: Clock,
      title: t("20+ Years of Experience", "Más de 20 Años de Experiencia"),
      desc: t("Helping Tampa Bay homeowners improve, prepare, and maximize their properties with confidence.", "Ayudando a los propietarios de Tampa Bay a mejorar, preparar y maximizar sus propiedades con confianza."),
    },
    {
      icon: Briefcase,
      title: t("Real Estate & Home Improvement Expertise", "Experiencia en Bienes Raíces y Mejoras para el Hogar"),
      desc: t("One team that helps you buy, improve, and sell your home with a clear strategy from start to finish.", "Un equipo que le ayuda a comprar, mejorar y vender su casa con una estrategia clara de principio a fin."),
    },
    {
      icon: Home,
      title: t("Residential Specialists", "Especialistas Residenciales"),
      desc: t("Focused exclusively on helping homeowners throughout the Tampa Bay area.", "Enfocados exclusivamente en ayudar a los propietarios de viviendas en todo el área de Tampa Bay."),
    },
    {
      icon: Hammer,
      title: t("Quality Workmanship", "Mano de Obra de Calidad"),
      desc: t("Professional home improvements designed to enhance your lifestyle while increasing your home’s long-term value.", "Mejoras profesionales para el hogar diseñadas para mejorar su estilo de vida y al mismo tiempo aumentar el valor a largo plazo de su casa."),
    },
    {
      icon: MessageSquare,
      title: t("Transparent Communication", "Comunicación Transparente"),
      desc: t("Clear expectations, honest advice, and consistent updates throughout every project.", "Expectativas claras, asesoramiento honesto y actualizaciones constantes en cada proyecto."),
    },
    {
      icon: MapPin,
      title: t("Local & Trusted", "Local y de Confianza"),
      desc: t("Proudly serving the Tampa Bay community with integrity, experience, and results.", "Orgullosamente sirviendo a la comunidad de Tampa Bay con integridad, experiencia y resultados."),
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative py-[60px] bg-white mx-[15px] mt-[15px] rounded-[10px] border border-slate-100 overflow-hidden"
    >
      {/* Background glowing blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-copper/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-slate-100 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">

          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center h-full w-full order-2 lg:order-1"
          >
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              {/* Badge with Ping */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-copper/20 bg-copper/5 text-copper text-[10px] md:text-[11px] font-black uppercase tracking-widest mb-6 shadow-sm select-none">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-copper"></span>
                </span>
                <span>{t("Why Choose Us", "Por Qué Elegirnos")}</span>
              </div>

              <h2 className="leading-[1.2] text-neutral-900 tracking-tight font-bold text-[22px] sm:text-[28px] md:text-[35px] mt-[-10px] mb-[10px] font-serif">
                {t("Why Homeowners Choose ", "Por Qué los Propietarios Eligen a ")}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-copper-deep italic font-bold">
                  {t("Revitalize Group", "Revitalize Group")}
                </span>
              </h2>

              {/* Description */}
              <p className="text-slate-500 text-[15px] sm:text-base leading-relaxed mb-6 font-medium max-w-[95%] font-sans">
                {t(
                  "A trusted real estate and home improvement company helping homeowners, buyers, sellers, and investors maximize the value of their properties.",
                  "Una empresa de bienes raíces y mejoras para el hogar de confianza que ayuda a propietarios, compradores, vendedores e inversores a maximizar el valor de sus propiedades."
                )}
              </p>

              {/* Feature items */}
              <div className="space-y-1 mb-8 w-full text-left">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="group/item flex items-start gap-3.5 hover:bg-copper/5 p-2.5 rounded-xl transition-all duration-300"
                    >
                      <span className="text-copper mt-1 shrink-0 group-hover/item:translate-x-1.5 group-hover/item:scale-110 transition-all duration-300 ease-out">
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </span>
                      <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">
                        <strong className="font-extrabold text-[#0F172A]">{feature.title}:</strong>{" "}
                        <span className="text-slate-500 font-medium">{feature.desc}</span>
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1e293b] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-7 py-3.5 transition-all duration-300 shadow-[0_4px_14px_rgba(15,23,42,0.15)] hover:scale-[1.03] active:scale-[0.97]"
                >
                  {t("Schedule Consultation", "Programar Consulta")}
                </Link>
                <a
                  href={`tel:${officePhone.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-copper to-copper-deep hover:opacity-95 text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-7 py-3.5 transition-all duration-300 shadow-[0_4px_14px_rgba(213,124,76,0.25)] hover:scale-[1.03] active:scale-[0.97]"
                >
                  {t(`Call ${officePhone}`, `Llamar al ${officePhone}`)}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Image Showcase Card */}
          <div className="relative w-full order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 h-[340px] sm:h-[440px] lg:h-[580px] lg:sticky lg:top-[120px] w-full"
            >
              <video
                src={whyusVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500 ease-out"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />

              {/* Glassmorphic Overlay Card */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-5 shadow-lg flex items-center justify-between select-none transition-all duration-300 group-hover:bottom-6 group-hover:bg-white/95 group-hover:shadow-xl">
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t("Revitalize Quality", "Calidad Revitalize")}</p>
                  <p className="text-xs sm:text-sm font-extrabold text-[#0F172A] mt-0.5">{t("Licensed Florida Real Estate Professional", "Contratista Autorizado de Florida")}</p>
                </div>
                <span className="text-[10px] font-black text-white bg-copper border border-copper/20 px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  {t("PROPERTY SHOWCASE.", "Trabajo Activo")}
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
