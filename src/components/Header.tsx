"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B131E]/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-800"
          : "bg-[#0B131E]/80 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none py-3.5 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-36 sm:w-44 h-10 transition-transform group-hover:scale-105">
            <Image
              src="/images/logo.svg"
              alt="Kaizen Ingeniería Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {SITE_DATA.navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm lg:text-base font-medium transition-colors duration-200 py-1 ${
                  isActive
                    ? "text-[#E32819] font-bold"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E32819] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Phone */}
        <div className="hidden lg:flex items-center gap-3 pl-4">
          <a
            href={`tel:${SITE_DATA.company.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-3 text-left group bg-[#16212F]/80 hover:bg-[#1C2A3C] border border-gray-800 hover:border-gray-700 px-4 py-2 rounded-lg transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-[#E32819] flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                LLÁMANOS
              </span>
              <span className="text-sm font-extrabold text-white group-hover:text-[#E32819] transition-colors">
                {SITE_DATA.company.phoneFormatted}
              </span>
            </div>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${SITE_DATA.company.phone.replace(/\s+/g, "")}`}
            aria-label="Llamar"
            className="w-9 h-9 rounded-lg bg-[#E32819] flex items-center justify-center text-white"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B131E] border-b border-gray-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3">
            {SITE_DATA.navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-base font-semibold py-2 border-b border-gray-800/60 ${
                    isActive ? "text-[#E32819]" : "text-gray-200 hover:text-[#E32819]"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <a
              href={`tel:${SITE_DATA.company.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 w-full bg-[#E32819] hover:bg-[#B8180B] text-white font-bold py-3 rounded-lg text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar: {SITE_DATA.company.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
