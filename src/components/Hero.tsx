"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Phone, ShieldCheck } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = SITE_DATA.heroSlides;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      id="inicio"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[600px] sm:min-h-[680px] lg:min-h-[740px] flex items-center justify-center bg-[#070D15] overflow-hidden pt-24 pb-20 sm:pb-28"
    >
      {/* Background Images Slider with Ken Burns & Crossfade */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div
                className={`relative w-full h-full transform transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-110" : "scale-100"
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                />
              </div>

              {/* Multi-layered cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#070D15]/95 via-[#0B131E]/75 to-[#070D15]/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D15] via-transparent to-[#070D15]/80" />
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
            </div>
          );
        })}
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl text-left space-y-5 sm:space-y-6">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 bg-[#0B131E]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-800">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E32819] animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white">
              {slide.tag}
            </span>
          </div>

          {/* Dynamic Title with fade animation */}
          <h1
            key={`title-${currentSlide}`}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.15] tracking-tight animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            {slide.title}
          </h1>

          {/* Dynamic Subtitle */}
          <p
            key={`subtitle-${currentSlide}`}
            className="text-base sm:text-lg text-gray-200 font-normal leading-relaxed max-w-2xl text-shadow-sm animate-in fade-in slide-in-from-bottom-3 duration-500"
          >
            {slide.subtitle}
          </p>

          {/* CTA Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Link
              href={slide.ctaPrimaryHref}
              className="inline-flex items-center gap-3 bg-[#E32819] hover:bg-[#B8180B] active:scale-95 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded shadow-xl shadow-red-900/40 transition-all duration-200 uppercase tracking-wide group"
            >
              <span>{slide.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {slide.ctaSecondary && (
              <Link
                href={slide.ctaSecondaryHref || "#contacto"}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded border border-white/30 backdrop-blur-sm transition-all duration-200 uppercase tracking-wide"
              >
                <span>{slide.ctaSecondary}</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Slider Left / Right Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          aria-label="Slide anterior"
          className="pointer-events-auto w-11 h-11 rounded-full bg-black/40 hover:bg-[#E32819] text-white border border-white/10 flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 shadow-lg -translate-x-1 sm:translate-x-0"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Siguiente slide"
          className="pointer-events-auto w-11 h-11 rounded-full bg-black/40 hover:bg-[#E32819] text-white border border-white/10 flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 shadow-lg translate-x-1 sm:translate-x-0"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slider Indicators / Progress Bar */}
      <div className="absolute bottom-6 sm:bottom-8 z-30 flex items-center gap-3">
        {slides.map((s, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir al slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                isActive
                  ? "w-10 bg-[#E32819] shadow-lg shadow-red-600/50"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
