"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function NavbarLight() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Características", href: "/#caracteristicas" },
    { name: "Módulos", href: "/modulos" },
    { name: "Analítica OEE", href: "/analitica-oee" },
    { name: "Precios", href: "/precios" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Image
                src="/logo_control.png"
                alt="FlexOS Control"
                width={240}
                height={60}
                className="h-[60px] w-auto object-contain"
                priority
                unoptimized
                fetchPriority="high"
              />
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-[#0ea5e9] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex gap-3">
            <a
              href="/#contacto"
              className="text-slate-600 hover:text-slate-800 px-4 py-2 border border-slate-300 hover:border-slate-500 rounded-md text-sm font-medium transition-colors"
            >
              Solicitar Demo
            </a>
            <a
              href="/#demo"
              className="bg-[#0ea5e9] hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-[0_4px_14px_0_rgba(14,165,233,0.3)] hover:-translate-y-0.5"
            >
              Ver Demo en Vivo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-800 p-2"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-[#0ea5e9] block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contacto"
              className="text-slate-600 hover:text-[#0ea5e9] block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
