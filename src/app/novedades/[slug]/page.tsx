import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, CheckCircle2, ShieldCheck, Phone, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { ARTICLES_DATA, Article } from "@/data/articles";
import { SITE_DATA } from "@/data/content";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Artículo no encontrado | Kaizen Ingeniería",
    };
  }

  return {
    title: `${article.seoTitle} | Kaizen Ingeniería`,
    description: article.metaDescription,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      locale: "es_CL",
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES_DATA.filter((a) => a.slug !== slug).slice(0, 2);

  // Schema.org JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: `https://kaizeningenieria.cl${article.image}`,
    datePublished: "2024-08-18",
    author: {
      "@type": "Organization",
      name: "Kaizen Ingeniería SpA",
      url: "https://kaizeningenieria.cl",
    },
    publisher: {
      "@type": "Organization",
      name: "Kaizen Ingeniería",
      logo: {
        "@type": "ImageObject",
        url: "https://kaizeningenieria.cl/images/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kaizeningenieria.cl/novedades/${article.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Article Header Hero */}
      <section className="relative pt-36 pb-16 bg-[#0B131E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Link
            href="/novedades"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#E32819] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Novedades</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="bg-[#E32819] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-gray-400 pt-2 border-t border-gray-800">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#E32819]" />
              {article.date}
            </span>
            <span>•</span>
            <span>Publicado por <strong>{article.author}</strong> en Antofagasta</span>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Image */}
        <div className="relative w-full h-[320px] sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 mb-12">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Intro */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-lg sm:text-xl font-medium text-gray-900 border-l-4 border-[#E32819] pl-4 italic">
            {article.content.intro}
          </p>

          {/* Body Sections */}
          {article.content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4 pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                {sec.heading}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {sec.body}
              </p>

              {sec.bullets && (
                <ul className="space-y-2.5 my-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-[#E32819] flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-950 mb-2">
              Conclusión y Recomendaciones
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              {article.content.conclusion}
            </p>
          </div>
        </div>

        {/* Keywords Tags */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
            Palabras clave relacionadas:
          </h4>
          <div className="flex flex-wrap gap-2">
            {article.keywords.map((kw, i) => (
              <span
                key={i}
                className="text-xs font-medium bg-red-50 text-[#E32819] border border-red-100 px-3 py-1 rounded-full"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Contact Box for Antofagasta */}
        <div className="mt-14 bg-[#0B131E] text-white rounded-2xl p-8 sm:p-10 border border-gray-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E32819]">
              ATENCIÓN INMEDIATA EN ANTOFAGASTA
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              ¿Necesitas cotizar este servicio para tu faena?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Llámanos al {SITE_DATA.company.phoneFormatted} o solicita tu propuesta técnica en línea.
            </p>
          </div>

          <Link
            href="/contacto"
            className="flex-shrink-0 bg-[#E32819] hover:bg-[#B8180B] text-white font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-900/40"
          >
            SOLICITAR COTIZACIÓN
          </Link>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 mb-6">
            Otros artículos que te pueden interesar
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/novedades/${rel.slug}`}
                className="group bg-gray-50 hover:bg-white rounded-xl p-5 border border-gray-200 hover:border-[#E32819]/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#E32819]">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-gray-900 group-hover:text-[#E32819] transition-colors leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="pt-3 text-xs font-bold text-[#E32819] flex items-center gap-1 mt-2">
                  <span>Leer artículo</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
