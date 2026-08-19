"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export default function PortfolioSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image of Helicopter & Mining Team */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 group">
              <Image
                src={SITE_DATA.portfolioSection.image}
                alt="Operaciones en faenas de gran minería e infraestructura"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Sectors & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E32819]">
                {SITE_DATA.portfolioSection.tag}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
              {SITE_DATA.portfolioSection.title}
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {SITE_DATA.portfolioSection.subtitle}
            </p>

            {/* Checklist of Industries */}
            <div className="space-y-3 pt-2">
              {SITE_DATA.portfolioSection.sectors.map((sector, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full border-2 border-[#E32819] text-[#E32819] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                    <CheckCircle2 className="w-4 h-4 fill-[#E32819] text-white" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-black transition-colors">
                    {sector}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href={SITE_DATA.portfolioSection.ctaHref}
                className="inline-flex items-center gap-3 bg-[#E32819] hover:bg-[#B8180B] active:scale-95 text-white font-bold text-sm px-6 py-3.5 rounded shadow-lg shadow-red-900/20 transition-all uppercase tracking-wider group"
              >
                <span>{SITE_DATA.portfolioSection.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
