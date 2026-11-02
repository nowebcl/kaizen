import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsGallery from "@/components/ProjectsGallery";
import ClientsCarousel from "@/components/ClientsCarousel";
import FloatingContact from "@/components/FloatingContact";

export const metadata = {
  title: "Trabajos Ejecutados en HDPE y Fibra de Vidrio | Kaizen Ingeniería Antofagasta",
  description: "Registro visual de trabajos ejecutados en HDPE, termofusión, revestimientos en fibra de vidrio (FRP), piping y piezas especiales para la gran minería e industria.",
  keywords: [
    "hdpe antofagasta",
    "hdpe en antofagasta",
    "fibra de vidrio antofagasta",
    "fibra de vidrio en antofagasta",
    "trabajos hdpe antofagasta",
    "estanques fibra de vidrio antofagasta"
  ]
};

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-[#0B131E]">
      <Header />

      {/* Top spacing for fixed header */}
      <div className="pt-24 sm:pt-28" />

      {/* Clean Gallery without title - only images with work name */}
      <ProjectsGallery />

      {/* Clients Carousel */}
      <ClientsCarousel />

      <Footer />
      <FloatingContact />
    </main>
  );
}
