"use client";

import { 
  Layers, 
  Package, 
  Box, 
  Sparkles, 
  Printer, 
  Check, 
  ArrowRight 
} from "lucide-react";

export default function IndustrialVerticals() {
  const verticals = [
    {
      icon: Layers,
      title: "Flexografía de Banda Angosta",
      subtitle: "Etiquetas Autoadheribles & Mangas",
      specs: [
        "Cálculo de engranes Z (paso 1/8\") y desarrollos magnéticos",
        "Control de consumo exacto de cinta Stickyback",
        "Auditoría y conteo de revoluciones en troqueles rotativos",
      ],
      tag: "NICHE: NARROW-WEB"
    },
    {
      icon: Package,
      title: "Empaque Flexible & Banda Ancha",
      subtitle: "BOPP, Polietileno & Laminaciones",
      specs: [
        "Modelado de tintas BCM con doble transferencia química",
        "Control de tensión de bobina e integración de encoders",
        "Monitoreo de tiempos de secado y solventes residuales",
      ],
      tag: "NICHE: WIDE-WEB"
    },
    {
      icon: Box,
      title: "Cartón Corrugado & Plegadizo",
      subtitle: "Cajas, Charolas & Microcorrugado",
      specs: [
        "Catálogo paramétrico de estilos de caja y empaque",
        "Compensación de doblez por calibre de flauta (E, B, C, BC)",
        "Trazabilidad de plecas, gomas y suajes planos/rotativos",
      ],
      tag: "NICHE: CORRUGATED"
    },
    {
      icon: Printer,
      title: "Extrusión & Película Tubular",
      subtitle: "Película Soplada y Cast",
      specs: [
        "Control de espesores, dosificación gravimétrica y mermas",
        "Trazabilidad de batch de resinas vírgenes y recicladas",
        "Balance de masa y rendimiento por metro lineal",
      ],
      tag: "NICHE: EXTRUSION"
    },
  ];

  return (
    <section id="verticales" className="py-24 relative overflow-hidden bg-[#070a12] border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d1424] border border-[#1e293b] font-mono-tech text-xs text-cyan-400 uppercase tracking-widest mb-4">
            <Package className="w-3.5 h-3.5" />
            <span>ESPECIALIZACIÓN DE INDUSTRIA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Verticales de Manufactura
          </h2>
          <p className="text-base text-slate-300">
            Nuestros algoritmos no son genéricos: están programados con las fórmulas matemáticas, tolerancias mecánicas y flujos específicos de cada proceso de conversión.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((vert) => (
            <div
              key={vert.title}
              className="tech-card rounded-2xl p-6 border border-[#1e293b] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-tech text-[10px] font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20">
                    {vert.tag}
                  </span>
                  <vert.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {vert.title}
                </h3>
                <p className="text-xs font-mono-tech text-slate-400 mb-5">
                  {vert.subtitle}
                </p>

                <ul className="space-y-2.5 font-mono-tech text-xs text-slate-300">
                  {vert.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-[12px] text-slate-300">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1e293b]/70 flex items-center justify-between font-mono-tech text-[11px] text-slate-400">
                <span>PARAMETRIZADO</span>
                <span className="text-emerald-400">V6 NATIVE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
