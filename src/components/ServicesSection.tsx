"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldAlert, HardHat, Wrench, Building2, Check, ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export default function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 stroke-[2]" />;
      case "Paintbrush":
        return <HardHat className="w-5 h-5 stroke-[2]" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 stroke-[2]" />;
      case "Building2":
        return <Building2 className="w-5 h-5 stroke-[2]" />;
      default:
        return <ShieldAlert className="w-5 h-5 stroke-[2]" />;
    }
  };

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E32819]">
            NUESTROS SERVICIOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            Ingeniería que agrega valor
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Entregamos soluciones integrales que mejoran la confiabilidad, seguridad y eficiencia de sus instalaciones. Cada servicio está diseñado para responder a los más altos estándares de la industria.
          </p>
        </div>

        {/* 4 Cards Grid with Real Engineers & Workers Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl hover:border-[#E32819]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo of Engineers & Technicians in Action */}
                <div className="relative w-full h-48 bg-gray-900 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Ingenieros Kaizen en faena`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Service Icon */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-[#E32819] text-white flex items-center justify-center shadow-md">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E32819] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Sub features */}
                  <ul className="space-y-2 border-t border-gray-100 pt-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#E32819] mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={`/servicios#${service.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E32819] hover:text-[#B8180B] uppercase tracking-wider group-hover:translate-x-1 transition-all"
                >
                  <span>Ver detalles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/contacto"
                  className="text-[11px] font-bold text-gray-500 hover:text-black uppercase"
                >
                  Cotizar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
