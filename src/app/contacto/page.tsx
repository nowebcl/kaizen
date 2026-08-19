import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqContactSection from "@/components/FaqContactSection";
import FloatingContact from "@/components/FloatingContact";

export const metadata = {
  title: "Contacto | Kaizen Ingeniería Antofagasta",
  description: "Ponte en contacto con el equipo de Kaizen Ingeniería para cotizar proyectos de protección anticorrosiva, revestimientos y mantenimiento industrial.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Header */}
      <section className="relative pt-36 pb-12 bg-[#0B131E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E32819]">
            CONTACTO Y COTIZACIONES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Hablemos de tu próximo desafío
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Estamos disponibles 24/7 para requerimientos urgentes y cotizaciones técnicas en toda la Región de Antofagasta y Chile.
          </p>
        </div>
      </section>

      {/* Embedded FAQ & Contact Form Section */}
      <FaqContactSection />

      <Footer />
      <FloatingContact />
    </main>
  );
}
