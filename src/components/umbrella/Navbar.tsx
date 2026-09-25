"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function UmbrellaNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Plataformas SaaS", href: "/#ecosistema" },
    { name: "Software a Medida", href: "/#servicios-ingenieria" },
    { name: "Hardware & PLCs", href: "/#servicios-ingenieria" },
    { name: "Capacidades", href: "/#capacidades" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#04060a]/90 border-b border-[#1e293b] backdrop-blur-xl shadow-2xl h-16" 
          : "bg-transparent border-b border-white/[0.05] h-20"
      } flex items-center`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          
          {/* Left: Technical Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center group py-1">
              <Image
                src="/logo_technologies.png"
                alt="FlexOS Technologies"
                width={220}
                height={46}
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
              />
            </a>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-md text-xs lg:text-sm font-mono-tech text-slate-300 hover:text-cyan-300 hover:bg-white/[0.03] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Technical Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/#ecosistema"
              className="px-3.5 py-1.5 rounded-md border border-[#1e293b] hover:border-slate-500 text-xs font-mono-tech text-slate-300 hover:text-white transition-all bg-[#0a0f1d]/60"
            >
              Acceso a Plataformas
            </a>
            <a
              href="/#contacto"
              className="btn-tech-primary px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-cyan-500/20"
            >
              <span>Agendar Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.05]"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#080c14]/98 border-b border-[#1e293b] p-5 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md font-mono-tech text-sm text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-[#1e293b] flex flex-col gap-2.5">
            <a
              href="/#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-tech-primary w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Agendar Demo Técnica</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
