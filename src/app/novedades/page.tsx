import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag, Search, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { ARTICLES_DATA } from "@/data/articles";

export const metadata = {
  title: "Novedades y Artículos Técnicos | Kaizen Ingeniería Antofagasta",
  description: "Artículos técnicos y guías especializadas en protección anticorrosiva, revestimientos industriales, obras civiles y mantención en Antofagasta y faenas mineras.",
  keywords: [
    "Protección anticorrosiva en Antofagasta",
    "Revestimientos industriales Antofagasta",
    "Mantenimiento industrial minería Chile",
    "Obras civiles en Antofagasta",
    "Geomembranas y tranques de relaves"
  ],
};

export default function NovedadesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 bg-[#0B131E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-900/50 px-3 py-1 rounded-full text-xs font-bold text-[#E32819] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Actualizaciones & Artículos Técnicos</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Novedades de Ingeniería en Antofagasta
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Conocimiento técnico, normativas internacionales SSPC/NACE y soluciones de ingeniería para la gran minería e industria en la Región de Antofagasta.
          </p>
        </div>
      </section>

      {/* Main Articles Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#E32819]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Article Image */}
                <div className="relative w-full h-52 bg-gray-900 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#E32819] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {article.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#E32819]" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#E32819] transition-colors leading-snug">
                    <Link href={`/novedades/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Keywords tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {article.keywords.slice(0, 2).map((kw, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500">
                  Por {article.author}
                </span>
                <Link
                  href={`/novedades/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E32819] hover:text-[#B8180B] uppercase tracking-wider group-hover:translate-x-1 transition-all"
                >
                  <span>Leer más</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Quote Box for Antofagasta */}
        <div className="mt-16 bg-[#0B131E] rounded-2xl p-8 sm:p-12 text-white text-center space-y-5 border border-gray-800 shadow-2xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E32819]">
            SERVICIOS INDUSTRIALES EN ANTOFAGASTA
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white max-w-2xl mx-auto">
            ¿Requieres asesoría técnica o cotización para faena en la Región de Antofagasta?
          </h3>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Nuestros ingenieros y especialistas en protección anticorrosiva y revestimientos están listos para evaluar tus requerimientos en terreno.
          </p>
          <div className="pt-2">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#E32819] hover:bg-[#B8180B] text-white font-bold px-8 py-3.5 rounded-lg uppercase tracking-wider text-xs sm:text-sm shadow-xl shadow-red-900/40 transition-all"
            >
              <span>SOLICITAR EVALUACIÓN TÉCNICA</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
