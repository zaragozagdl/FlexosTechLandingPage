"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";

interface NavbarProps {
  variant?: "dark" | "light";
}

export default function Navbar({ variant = "dark" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLight = variant === "light";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Características", href: "/#caracteristicas" },
    { name: "Asistente Virtual", href: "/#asistente-capacitacion" },
    { name: "Módulos", href: "/modulos" },
    { name: "Analítica OEE", href: "/analitica-oee" },
    { name: "Precios", href: "/precios" },
    { name: "FAQ", href: "/#preguntas-frecuentes" },
  ];

  const navBg = isLight
    ? isScrolled
      ? "bg-white/95 border-b border-slate-200/80 shadow-md backdrop-blur-xl h-16"
      : "bg-white/80 border-b border-transparent backdrop-blur-md h-20"
    : isScrolled
    ? "bg-[#070913]/90 border-b border-white/[0.08] shadow-2xl backdrop-blur-xl h-16"
    : "bg-transparent border-b border-transparent h-20";

  const linkClass = isLight
    ? "text-slate-600 hover:text-sky-600"
    : "text-slate-300 hover:text-white";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <Image
                src="/logo_control.png"
                alt="FlexOS Control Suite PRO V6"
                width={200}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </a>
          </div>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/[0.05] ${linkClass}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#contacto"
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${
                isLight 
                  ? "border-slate-300 text-slate-700 hover:bg-slate-100" 
                  : "border-white/[0.12] text-slate-300 hover:text-white hover:bg-white/[0.06] hover:border-white/25"
              }`}
            >
              Solicitar Demo
            </a>
            <a
              href="/#contacto"
              className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
              Programa MVP
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full border-b shadow-2xl backdrop-blur-2xl transition-all ${
          isLight ? "bg-white/95 border-slate-200 text-slate-900" : "bg-[#070913]/95 border-white/[0.08] text-white"
        }`}>
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2.5 rounded-xl text-base font-medium hover:bg-white/[0.06] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
              <a
                href="/#contacto"
                className="block w-full text-center py-2.5 rounded-xl border border-white/[0.12] text-sm font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solicitar Demostración
              </a>
              <a
                href="/#contacto"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-sm font-bold shadow-lg shadow-sky-500/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                Postular a Programa MVP
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
