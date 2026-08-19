"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, CheckCircle2, FileSpreadsheet, ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export default function FeatureCards() {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Card 1: Enfoque en seguridad */}
        <div className="bg-white rounded-lg p-6 shadow-xl shadow-gray-900/5 border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-red-50 text-[#E32819] flex items-center justify-center transition-transform group-hover:scale-110">
              <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 leading-snug">
              {SITE_DATA.features[0].title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {SITE_DATA.features[0].description}
            </p>
          </div>
        </div>

        {/* Card 2: Profesionalismo y experiencia */}
        <div className="bg-white rounded-lg p-6 shadow-xl shadow-gray-900/5 border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-red-50 text-[#E32819] flex items-center justify-center transition-transform group-hover:scale-110">
              <Award className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 leading-snug">
              {SITE_DATA.features[1].title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {SITE_DATA.features[1].description}
            </p>
          </div>
        </div>

        {/* Card 3: Calidad garantizada */}
        <div className="bg-white rounded-lg p-6 shadow-xl shadow-gray-900/5 border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-red-50 text-[#E32819] flex items-center justify-center transition-transform group-hover:scale-110">
              <CheckCircle2 className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 leading-snug">
              {SITE_DATA.features[2].title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {SITE_DATA.features[2].description}
            </p>
          </div>
        </div>

        {/* Card 4: Red Highlight Card */}
        <div className="bg-[#E32819] rounded-lg p-6 text-white shadow-xl shadow-red-900/20 flex flex-col justify-between hover:bg-[#D32011] transition-all duration-300 group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-white/15 text-white flex items-center justify-center backdrop-blur-sm transition-transform group-hover:scale-110">
              <FileSpreadsheet className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="text-lg font-extrabold text-white leading-snug">
              {SITE_DATA.features[3].title}
            </h3>
            <p className="text-sm text-white/90 leading-relaxed">
              {SITE_DATA.features[3].description}
            </p>
          </div>
          <div className="pt-5">
            <Link
              href={SITE_DATA.features[3].ctaHref || "#contacto"}
              className="inline-flex items-center gap-2 border border-white/40 hover:border-white hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded transition-all"
            >
              <span>{SITE_DATA.features[3].cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
