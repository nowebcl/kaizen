"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SITE_DATA, ProjectItem } from "@/data/content";

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6; // 6 images per page (3 pages for 18 images)
  const allProjects = SITE_DATA.projects;

  const totalPages = Math.ceil(allProjects.length / itemsPerPage);

  // Get items for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = allProjects.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = useCallback(() => {
    if (!selectedProject) return;
    const currentIndex = allProjects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % allProjects.length;
    setSelectedProject(allProjects[nextIndex]);
  }, [selectedProject, allProjects]);

  const handlePrev = useCallback(() => {
    if (!selectedProject) return;
    const currentIndex = allProjects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
    setSelectedProject(allProjects[prevIndex]);
  }, [selectedProject, allProjects]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "Escape") setSelectedProject(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, handleNext, handlePrev]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="proyectos" className="py-16 sm:py-20 lg:py-28 bg-[#0B131E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E32819]">
            NUESTROS TRABAJOS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Galería de proyectos
          </h2>
          <p className="text-xs sm:text-base text-gray-400 max-w-xl mx-auto">
            Registro visual en terreno de nuestras obras y servicios industriales ejecutados.
          </p>
        </div>

        {/* Gallery Section Tabs (Galería 1, Galería 2, Galería 3) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
            const isActive = currentPage === pageNum;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 uppercase tracking-wider ${
                  isActive
                    ? "bg-[#E32819] text-white shadow-lg shadow-red-900/40 scale-105"
                    : "bg-[#141E2B] text-gray-300 hover:text-white hover:bg-[#1E2D40] border border-gray-800"
                }`}
              >
                Galería {pageNum}
              </button>
            );
          })}
        </div>

        {/* Clean Photos Grid (No Titles on images) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6 animate-in fade-in duration-300">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#141E2B] cursor-pointer border border-gray-800 hover:border-[#E32819] transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-red-950/40"
            >
              <Image
                src={project.image}
                alt="Proyecto Kaizen Ingeniería"
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-108"
              />

              {/* Clean Dark Vignette on Hover with View Icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-[#E32819] text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-200">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Navigation Controls */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2">
          {/* Previous Page */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            aria-label="Página anterior"
            className="flex items-center gap-1 px-3.5 py-2 rounded-lg bg-[#141E2B] text-gray-300 hover:text-white hover:bg-[#E32819] disabled:opacity-40 disabled:hover:bg-[#141E2B] disabled:hover:text-gray-300 border border-gray-800 transition-all text-xs font-bold"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-xs sm:text-sm font-black transition-all ${
                currentPage === pageNum
                  ? "bg-[#E32819] text-white shadow-lg shadow-red-900/50 scale-105"
                  : "bg-[#141E2B] text-gray-400 hover:text-white hover:bg-[#1E2D40] border border-gray-800"
              }`}
            >
              {pageNum}
            </button>
          ))}

          {/* Next Page */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            aria-label="Página siguiente"
            className="flex items-center gap-1 px-3.5 py-2 rounded-lg bg-[#141E2B] text-gray-300 hover:text-white hover:bg-[#E32819] disabled:opacity-40 disabled:hover:bg-[#141E2B] disabled:hover:text-gray-300 border border-gray-800 transition-all text-xs font-bold"
          >
            <span className="hidden sm:inline">Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal (Clean Photo Display without title) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-4xl max-h-[95vh] bg-[#0F1722] rounded-xl sm:rounded-2xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col">
            {/* Top Close Button & Counter */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0A1018] border-b border-gray-800 z-30">
              <span className="text-xs text-gray-400 font-medium">
                Imagen {allProjects.findIndex((p) => p.id === selectedProject.id) + 1} de {allProjects.length}
              </span>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-[#E32819] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] md:min-h-[540px] bg-black flex items-center justify-center p-2">
              <Image
                src={selectedProject.image}
                alt="Fotografía de obra Kaizen"
                fill
                priority
                className="object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#E32819] text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#E32819] text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Thumbnails */}
            <div className="p-2 sm:p-3 bg-[#0A1018] border-t border-gray-800 flex items-center gap-2 overflow-x-auto scrollbar-thin">
              {allProjects.map((p) => {
                const isCurrent = p.id === selectedProject.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProject(p)}
                    className={`relative w-12 sm:w-16 h-10 sm:h-12 rounded overflow-hidden flex-shrink-0 border-2 transition-all ${
                      isCurrent
                        ? "border-[#E32819] scale-105 shadow-md"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={p.image}
                      alt="Miniatura"
                      fill
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
