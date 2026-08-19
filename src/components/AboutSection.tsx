"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Red Offset Accent Block */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Red geometric accent bottom-left */}
              <div className="absolute -bottom-4 -left-4 w-32 h-16 bg-[#E32819] rounded-bl-lg -z-0" />
              
              {/* Main Photo */}
              <div className="relative z-10 w-full h-[320px] sm:h-[400px] rounded-lg overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src={SITE_DATA.about.image}
                  alt="Equipo técnico e ingenieros de Kaizen en faena"
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute top-4 right-4 z-20 bg-[#0B131E]/90 backdrop-blur-sm text-white px-4 py-2 rounded shadow-lg border border-gray-700">
                <span className="text-xs font-bold text-[#E32819] uppercase tracking-wider block">Experiencia</span>
                <span className="text-sm font-black">{SITE_DATA.company.yearsExperience}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E32819]">
                {SITE_DATA.about.tag}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-950 leading-tight">
              {SITE_DATA.about.title}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              {SITE_DATA.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <div className="w-5 h-5 rounded-full bg-red-100 text-[#E32819] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Normas NACE, SSPC e ISO</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <div className="w-5 h-5 rounded-full bg-red-100 text-[#E32819] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Cobertura en faenas mineras</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={SITE_DATA.about.ctaHref}
                className="inline-flex items-center gap-3 bg-[#E32819] hover:bg-[#B8180B] active:scale-95 text-white font-bold text-sm px-6 py-3 rounded shadow-md shadow-red-900/20 transition-all uppercase tracking-wider group"
              >
                <span>{SITE_DATA.about.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
