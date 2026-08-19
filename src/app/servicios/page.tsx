import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { SITE_DATA } from "@/data/content";

export const metadata = {
  title: "Servicios de Ingeniería | Kaizen Ingeniería Antofagasta",
  description: "Servicios especializados en protección anticorrosiva, revestimientos industriales, mantención de infraestructura y obras civiles.",
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-[#0B131E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E32819]">
            NUESTRA OFERTA DE VALOR
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Servicios de Ingeniería Especializada
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Soluciones integrales de alto estándar diseñadas para proteger sus activos industriales, maximizar su vida útil y asegurar la continuidad operacional.
          </p>
        </div>
      </section>

      {/* Detailed Services Listing */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {SITE_DATA.services.map((service, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-6 relative ${isEven ? "lg:order-2" : ""}`}>
                <div className="relative w-full h-[320px] sm:h-[380px] rounded-xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Ingenieros Kaizen`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : ""}`}>
                <span className="text-xs font-bold text-[#E32819] uppercase tracking-wider">
                  Servicio 0{idx + 1}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Alcances y Capacidades:
                  </h4>
                  {service.details.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#E32819] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center gap-2 bg-[#E32819] hover:bg-[#B8180B] text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-wider shadow-md transition-all"
                  >
                    <span>Cotizar este servicio</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
