"use client";

import { 
  Globe, 
  Smartphone, 
  Cpu, 
  Layers, 
  Code2, 
  Bot, 
  Workflow, 
  CheckCircle2, 
  ArrowUpRight,
  Gauge,
  Terminal,
  Zap
} from "lucide-react";

export default function CustomEngineering() {
  const servicePillars = [
    {
      icon: Globe,
      code: "ENG-01 // WEB-PLATFORMS",
      title: "Sistemas Web Complejos & Portales Cloud",
      subtitle: "Arquitecturas SaaS, ERPs y Paneles a Medida",
      desc: "Desarrollamos plataformas web de misión crítica: sistemas de gestión empresarial, portales B2B para clientes y proveedores, tableros analíticos en tiempo real y microservicios escalables en la nube.",
      tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Cloud Native"],
      accent: "#00e5ff",
    },
    {
      icon: Code2,
      code: "ENG-02 // CORPORATE-WEB",
      title: "Páginas Web Corporativas de Alto Impacto",
      subtitle: "Diseño Visual de Élite & Conversión B2B",
      desc: "Sitios web vanguardistas con estética industrial deep-tech, animaciones fluidas, tiempos de carga inferiores a 800ms, optimización SEO avanzada y posicionamiento orgánico en Google.",
      tags: ["Dark Tech UI", "Framer Motion", "Tailwind CSS", "SEO Técnico"],
      accent: "#38bdf8",
    },
    {
      icon: Smartphone,
      code: "ENG-03 // MOBILE-APPS",
      title: "Aplicaciones Móviles (iOS & Android)",
      subtitle: "Apps Nativas, Multiplataforma y Piso de Planta",
      desc: "Apps móviles de alta resistencia para operadores, inspectores de calidad y ejecutivos. Funcionamiento offline-first, escaneo de códigos QR/DataMatrix/RFID y sincronización en segundo plano.",
      tags: ["React Native", "Flutter", "Offline Sync", "Hardware Camera APIs"],
      accent: "#10b981",
    },
    {
      icon: Cpu,
      code: "ENG-04 // HARDWARE-PLC",
      title: "Hardware Especializado, PLCs & IoT",
      subtitle: "Automatización Industrial & Microcontroladores",
      desc: "Diseño y programación de hardware a pie de máquina: integración con PLCs (Siemens, Allen-Bradley, Omron), sensores industriales, microcontroladores ESP32/ARM, tableros Andon y telemetría de pulsos.",
      tags: ["Siemens S7", "Allen-Bradley", "ESP32 IoT", "Modbus / RS485", "C++ / Embedded"],
      accent: "#f59e0b",
    },
  ];

  return (
    <section id="servicios-ingenieria" className="py-24 relative overflow-hidden bg-[#050811] blueprint-grid border-t border-[#1e293b]">
      {/* Background glow accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d1424] border border-cyan-500/30 font-mono-tech text-xs text-cyan-400 uppercase tracking-widest mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>DIVISIÓN DE INGENIERÍA A MEDIDA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Desarrollo a la Medida: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-400">
              Software, Móvil y Hardware Industrial
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            No nos limitamos a nuestras plataformas insignia. <strong>FlexOS Technologies</strong> funciona como una firma de ingeniería integral: construimos desde portales web y apps de clase mundial hasta circuitos electrónicos y automatización de líneas de producción.
          </p>
        </div>

        {/* 4 Custom Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {servicePillars.map((srv) => (
            <div
              key={srv.code}
              className="tech-card rounded-3xl p-7 sm:p-9 border border-[#1e293b] hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: `${srv.accent}10` }} />

              <div>
                {/* Header Code + Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono-tech text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {srv.code}
                  </span>
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg"
                    style={{ backgroundColor: `${srv.accent}15`, border: `1px solid ${srv.accent}35` }}
                  >
                    <srv.icon className="w-6 h-6" style={{ color: srv.accent }} />
                  </div>
                </div>

                {/* Titles */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {srv.title}
                </h3>
                <p className="font-mono-tech text-xs text-cyan-400 font-semibold mb-4">
                  {srv.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {srv.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {srv.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#070b16] border border-[#1e293b] font-mono-tech text-[11px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-[#1e293b] flex items-center justify-between font-mono-tech text-xs">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: srv.accent }} />
                  DISPONIBLE PARA COTIZACIÓN
                </span>
                <a
                  href="#contacto"
                  className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 transition-colors"
                >
                  <span>Solicitar Proyecto</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Engineering Banner / Hardware Lab Showcase */}
        <div className="tech-card rounded-3xl p-6 sm:p-8 border border-amber-500/30 bg-gradient-to-r from-[#0a0f1d] via-[#101726] to-[#0a0f1d] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 font-mono-tech text-xs font-bold text-amber-400 mb-3">
                <Zap className="w-3.5 h-3.5" />
                INTEGRACIÓN DE CAMPO & LABORATORIO ELECTRÓNICO
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                ¿Tu planta requiere enlazar maquinaria existente con software moderno?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                Diseñamos interfaces hardware-software a la medida: capturadores de pulso para troqueladoras mecánicas, módulos de pesaje digital con básculas industriales, sensores de tensión de película y pasarelas IoT a medida para prensas antiguas sin puerto digital.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#contacto"
                className="btn-tech-primary px-6 py-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>Cotizar Proyecto Especial</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
