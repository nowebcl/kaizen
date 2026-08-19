import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Target, Eye, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { SITE_DATA } from "@/data/content";

export const metadata = {
  title: "Nosotros | Kaizen Ingeniería Antofagasta",
  description: "Conoce más sobre Kaizen Ingeniería, nuestra historia desde 2013, misión, visión y compromiso con la excelencia en la industria minera.",
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-[#0B131E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E32819]">
            SOBRE NOSOTROS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Kaizen Ingeniería: Innovación en Acción
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Desde 2013 entregando soluciones prácticas de ingeniería, protección anticorrosiva y mantención de infraestructura crítica en Antofagasta y todo Chile.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/experience-team.jpg"
                alt="Equipo técnico e ingenieros de Kaizen en faena minera"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#E32819] uppercase tracking-wider">
              Nuestra Trayectoria
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
              Compromiso constante con la optimización y la mejora continua
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Desde 2013, <strong>KAIZEN INGENIERÍA LTDA.</strong> ha trabajado con clientes en una amplia gama de proyectos de ingeniería innovadores. A través de nuestras actividades, nuestro objetivo es utilizar las últimas tecnologías para mejorar la operatividad y extender la vida útil de los activos industriales.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Nuestro foco principal es servir a clientes de los sectores minero, energético, marítimo e industrial con soluciones técnicas de alto estándar, garantizando seguridad, cumplimiento de plazos y excelencia en la ejecución.
            </p>
          </div>
        </div>

        {/* Misión y Visión Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="bg-[#0B131E] text-white p-8 sm:p-10 rounded-2xl border border-gray-800 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-lg bg-[#E32819] flex items-center justify-center text-white">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Nuestra Misión</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              «Proporcionar servicios de ingeniería de alta calidad que superen las expectativas de nuestros clientes. Nos comprometemos a aplicar principios de mejora continua (Kaizen) en todas nuestras actividades, buscando siempre la innovación, la eficiencia y la sostenibilidad en cada solución que ofrecemos.»
            </p>
          </div>

          <div className="bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-200 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center text-white">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-950">Nuestra Visión</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              «Aspiramos a ser líderes reconocidos a nivel regional y nacional en la entrega de soluciones ingenieriles innovadoras y sostenibles. Nos esforzamos por ser un referente de confianza en la industria, impulsando el progreso técnico y la excelencia operacional en cada desafío.»
            </p>
          </div>
        </div>

        {/* 4 Pilares Kaizen */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#E32819] uppercase tracking-wider">
              NUESTROS VALORES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-1">
              Pilares Fundamentales
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
              <div className="text-[#E32819] font-black text-2xl">01</div>
              <h4 className="font-bold text-gray-900">Innovación</h4>
              <p className="text-xs text-gray-600">Enfoques creativos y tecnologías de vanguardia para cada desafío.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
              <div className="text-[#E32819] font-black text-2xl">02</div>
              <h4 className="font-bold text-gray-900">Calidad</h4>
              <p className="text-xs text-gray-600">Cumplimiento estricto de normativas SSPC, NACE, ASTM e ISO.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
              <div className="text-[#E32819] font-black text-2xl">03</div>
              <h4 className="font-bold text-gray-900">Personalización</h4>
              <p className="text-xs text-gray-600">Soluciones a la medida de los requerimientos y presupuesto del cliente.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
              <div className="text-[#E32819] font-black text-2xl">04</div>
              <h4 className="font-bold text-gray-900">Compromiso</h4>
              <p className="text-xs text-gray-600">Comunicación transparente, cumplimiento de plazos y servicio post-venta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-[#0B131E] py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">¿Tienes un proyecto en mente?</h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Déjanos conocer tus necesidades y te entregaremos una propuesta técnica y económica personalizada en menos de 24 horas.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-[#E32819] hover:bg-[#B8180B] text-white font-bold px-8 py-3.5 rounded uppercase tracking-wider text-sm shadow-lg transition-all"
          >
            <span>SOLICITAR COTIZACIÓN</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
