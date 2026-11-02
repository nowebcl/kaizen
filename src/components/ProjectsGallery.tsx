"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { WORK_PROJECTS, WorkItem } from "@/data/projects";

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<WorkItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("TODOS");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const categories = useMemo(() => {
    return ["TODOS", ...Array.from(new Set(WORK_PROJECTS.map((p) => p.category)))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "TODOS") return WORK_PROJECTS;
    return WORK_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = useCallback(() => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  }, [selectedProject, filteredProjects]);

  const handlePrev = useCallback(() => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  }, [selectedProject, filteredProjects]);

  // Keyboard navigation
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

  // Lock body scroll on modal
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
    <section id="proyectos" className="py-10 sm:py-14 bg-[#0B131E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count =
              cat === "TODOS"
                ? WORK_PROJECTS.length
                : WORK_PROJECTS.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 uppercase tracking-wider flex items-center gap-2 ${
                  isActive
                    ? "bg-[#E32819] text-white shadow-lg shadow-red-900/50 scale-105"
                    : "bg-[#141E2B] text-gray-300 hover:text-white hover:bg-[#1E2D40] border border-gray-800"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-black/30 text-white" : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Clean Photos Grid - Pura imagen sin textos inventados */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 animate-in fade-in duration-300">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#141E2B] cursor-pointer border border-gray-800 hover:border-[#E32819] transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-red-950/40"
            >
              <Image
                src={project.image}
                alt="Trabajo Kaizen Ingeniería"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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

        {/* Pagination Navigation */}
        {totalPages > 1 && (
          <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              aria-label="Página anterior"
              className="flex items-center gap-1 px-3.5 py-2 rounded-lg bg-[#141E2B] text-gray-300 hover:text-white hover:bg-[#E32819] disabled:opacity-40 disabled:hover:bg-[#141E2B] disabled:hover:text-gray-300 border border-gray-800 transition-all text-xs font-bold"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Anterior</span>
            </button>

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
        )}
      </div>

      {/* Lightbox Modal - Solo imagen pura sin títulos */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-5xl max-h-[95vh] bg-[#0F1722] rounded-xl sm:rounded-2xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col">
            
            {/* Header: Solo contador y botón cerrar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#0A1018] border-b border-gray-800 z-30">
              <span className="text-xs text-gray-400 font-medium">
                {filteredProjects.findIndex((p) => p.id === selectedProject.id) + 1} de {filteredProjects.length}
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
            <div className="relative flex-1 min-h-[340px] sm:min-h-[500px] md:min-h-[600px] bg-black flex items-center justify-center p-2">
              <Image
                src={selectedProject.image}
                alt="Fotografía de obra Kaizen Ingeniería"
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

            {/* Bottom Thumbnails sin textos */}
            <div className="p-2 sm:p-3 bg-[#0A1018] border-t border-gray-800 flex items-center gap-2 overflow-x-auto scrollbar-thin">
              {filteredProjects.map((p) => {
                const isCurrent = p.id === selectedProject.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProject(p)}
                    className={`relative w-14 sm:w-16 h-10 sm:h-12 rounded overflow-hidden flex-shrink-0 border-2 transition-all ${
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
