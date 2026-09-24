"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside 
      aria-label="Acciones rápidas de contacto y navegación"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col gap-3 items-end pointer-events-none"
    >
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        id="scroll-top-btn"
        className={`group relative pointer-events-auto w-12 h-12 rounded-full bg-[#0a0f1d]/90 border border-cyan-500/30 text-cyan-400 flex items-center justify-center backdrop-blur-md shadow-lg shadow-black/50 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:text-white hover:bg-cyan-500/20 hover:shadow-cyan-500/25 ${
          showTop 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
        <span className="absolute right-14 px-2.5 py-1 rounded bg-[#04060a]/95 border border-[#1e293b] text-[11px] font-mono-tech text-slate-200 whitespace-nowrap shadow-xl opacity-0 translate-x-2 pointer-events-none transition-all group-hover:opacity-100 group-hover:translate-x-0">
          Volver arriba
        </span>
      </button>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/523348742297?text=Hola,%20me%20interesa%20informaci%C3%B3n%20sobre%20las%20soluciones%20de%20FlexOS%20Technologies"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        id="whatsapp-fab"
        className="group relative pointer-events-auto w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-emerald-950/60 transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-2xl hover:shadow-emerald-500/40"
      >
        {/* Subtle pulsing beacon behind FAB */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10" />

        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-sm"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        <span className="absolute right-16 px-3 py-1.5 rounded bg-[#04060a]/95 border border-[#1e293b] text-xs font-mono-tech text-emerald-300 whitespace-nowrap shadow-xl opacity-0 translate-x-2 pointer-events-none transition-all group-hover:opacity-100 group-hover:translate-x-0">
          WhatsApp Directo
        </span>
      </a>
    </aside>
  );
}
