"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { ARTICLES_DATA } from "@/data/articles";

export default function NewsSection() {
  const featuredArticles = ARTICLES_DATA.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#090F17] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E32819]">
              NOVEDADES & ARTÍCULOS TÉCNICOS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ingeniería en Antofagasta y Minería
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Publicaciones técnicas, guías normativas y soluciones especializadas para la industria y faenas mineras en la Región de Antofagasta.
            </p>
          </div>

          <Link
            href="/novedades"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#E32819] hover:text-white transition-colors uppercase tracking-wider group self-start md:self-auto"
          >
            <span>Ver todas las novedades</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-[#111A24] rounded-xl overflow-hidden border border-gray-800 hover:border-[#E32819]/60 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-red-950/20"
            >
              <div>
                {/* Image */}
                <div className="relative w-full h-48 sm:h-52 bg-black overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#E32819] text-white text-[10px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider shadow">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#E32819]" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#E32819] transition-colors leading-snug">
                    <Link href={`/novedades/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-800/60 flex items-center justify-between">
                <Link
                  href={`/novedades/${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#E32819] hover:text-white uppercase tracking-wider group-hover:translate-x-1 transition-all"
                >
                  <span>Leer artículo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
