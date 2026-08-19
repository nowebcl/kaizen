import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsGallery from "@/components/ProjectsGallery";
import ClientsCarousel from "@/components/ClientsCarousel";
import FloatingContact from "@/components/FloatingContact";

export const metadata = {
  title: "Portafolio de Proyectos | Kaizen Ingeniería Antofagasta",
  description: "Explora nuestra galería completa de proyectos en minería, estanques, revestimientos y mantención industrial.",
};

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-[#0B131E]">
      <Header />

      {/* Hero Header */}
      <section className="relative pt-36 pb-8 bg-[#0B131E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E32819]">
            PORTAFOLIO DE OBRAS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Nuestros Proyectos Ejecutados
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Obras de alto desempeño certificadas bajo normas internacionales en minería y plantas industriales.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <ProjectsGallery />

      {/* Clients Carousel */}
      <ClientsCarousel />

      <Footer />
      <FloatingContact />
    </main>
  );
}
