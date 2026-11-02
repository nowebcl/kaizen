"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export default function ClientsCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = 8; // 2 rows of 4 logos
  const totalPages = Math.ceil(SITE_DATA.clients.length / itemsPerPage);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const currentClients = SITE_DATA.clients.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section
      className="py-14 bg-[#090F17] border-y border-gray-800/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E32819] block mb-1">
              RESPALDO Y TRAYECTORIA
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Empresas de confianza que trabajan con nosotros
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Anteriores empresas"
              className="w-9 h-9 rounded-lg bg-[#131E2C] hover:bg-[#E32819] text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-gray-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Siguientes empresas"
              className="w-9 h-9 rounded-lg bg-[#131E2C] hover:bg-[#E32819] text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-gray-800"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Logos Grid (8 logos per view) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 w-full items-center justify-items-center animate-in fade-in duration-300">
          {currentClients.map((client, idx) => (
            <div
              key={`${currentPage}-${idx}`}
              className="w-full h-20 sm:h-24 bg-white rounded-xl p-3 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] border border-gray-200 group relative"
              title={client.name}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`Logo de ${client.name} - Cliente Kaizen Ingeniería`}
                  fill
                  className="object-contain p-2 filter group-hover:contrast-105 transition-all"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              aria-label={`Página de clientes ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === i ? "w-8 bg-[#E32819]" : "w-2 bg-gray-700 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
