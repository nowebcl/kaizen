"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export default function ClientsCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? SITE_DATA.clients.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % SITE_DATA.clients.length);
  };

  return (
    <section className="py-14 bg-[#090F17] border-y border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Empresas que confían en nosotros
        </h3>

        <div className="relative flex items-center justify-between gap-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Anterior cliente"
            className="w-8 h-8 rounded-full bg-[#131E2C] hover:bg-[#E32819] text-gray-400 hover:text-white flex items-center justify-center transition-colors flex-shrink-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Logos Grid / Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full items-center justify-items-center">
            {SITE_DATA.clients.map((client, idx) => (
              <div
                key={idx}
                className="w-full max-w-[220px] h-16 sm:h-20 bg-white/95 hover:bg-white rounded-lg p-2 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-700/50"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            aria-label="Siguiente cliente"
            className="w-8 h-8 rounded-full bg-[#131E2C] hover:bg-[#E32819] text-gray-400 hover:text-white flex items-center justify-center transition-colors flex-shrink-0"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
