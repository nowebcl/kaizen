"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { Eye, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { WORK_PROJECTS, WorkItem } from "@/data/projects";

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<WorkItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("TODOS");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const categories = useMemo(() => {
    const cats = ["TODOS", ...Array.from(new Set(WORK_PROJECTS.map((p) => p.category)))];
    return cats;
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

  // Current slice
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
    <section id="proyectos" className="py-12 sm:py-16 bg-[#0B131E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills (Sin título general invasivo) */}
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

        {/* Clean Photos Grid showing the exact work name */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 animate-in fade-in duration-300">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#141E2B] cursor-pointer border border-gray-800 hover:border-[#E32819] transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-red-950/40 flex flex-col justify-end"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-108"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300" />

              {/* Work Name Caption */}
              <div className="relative z-10 p-3 sm:p-4">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#E32819] block mb-0.5 opacity-90">
                  {project.category}
                </span>
                <p className="text-xs sm:text-sm font-extrabold text-white leading-tight line-clamp-2 drop-shadow-md">
                  {project.title}
                </p>
              </div>

              {/* Hover Eye indicator */}
              <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 group-hover:bg-[#E32819] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform scale-75 group-hover:scale-100 shadow-lg">
                <Eye className="w-4 h-4" />
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

      {/* Lightbox Modal with the Work Name */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-5xl max-h-[95vh] bg-[#0F1722] rounded-xl sm:rounded-2xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col">
            
            {/* Header: Work Name & Close */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#0A1018] border-b border-gray-800 z-30">
              <div className="flex items-center gap-3">
                <span className="bg-[#E32819] text-white text-[10px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                  {selectedProject.title}
                </h4>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400 font-medium hidden sm:inline">
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
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 min-h-[340px] sm:min-h-[500px] md:min-h-[580px] bg-black flex items-center justify-center p-2">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                priority
                className="object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#E32819] text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105"
                aria-label="Trabajo anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#E32819] text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105"
                aria-label="Trabajo siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Thumbnails with work title indicator */}
            <div className="p-2 sm:p-3 bg-[#0A1018] border-t border-gray-800 flex items-center gap-2 overflow-x-auto scrollbar-thin">
              {filteredProjects.map((p) => {
                const isCurrent = p.id === selectedProject.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProject(p)}
                    title={p.title}
                    className={`relative w-14 sm:w-16 h-10 sm:h-12 rounded overflow-hidden flex-shrink-0 border-2 transition-all ${
                      isCurrent
                        ? "border-[#E32819] scale-105 shadow-md"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
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
