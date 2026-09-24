"use client";

import { 
  Cpu, 
  TrendingDown, 
  Cloud, 
  ShieldCheck, 
  Network, 
  Lock, 
  Activity, 
  Layers,
  Terminal,
  Server
} from "lucide-react";

export default function CoreCapabilities() {
  const capabilities = [
    {
      icon: Cpu,
      code: "CAP-01 // EDGE-COMPUTING",
      title: "Telemetría y Edge Computing en Prensa",
      desc: "Captura de pulsos de máquina a nivel milisegundo mediante microcontroladores ESP32 y encoders rotativos. Procesamiento en el borde para cálculo instantáneo de velocidad y metros producidos sin latencia.",
      accent: "#00e5ff",
    },
    {
      icon: TrendingDown,
      code: "CAP-02 // MERMA-OPTIMIZATION",
      title: "Algoritmos de Reducción de Merma",
      desc: "Modelado matemático de puesta a punto, cálculo exacto de desarrollo volumétrico de tintas por rodillo anilox (BCM) y doble transferencia química para reducir el desperdicio de sustrato en más de un 35%.",
      accent: "#10b981",
    },
    {
      icon: Cloud,
      code: "CAP-03 // HIGH-AVAILABILITY",
      title: "Arquitectura Cloud Distribuida (99.99%)",
      desc: "Infraestructura sin servidor distribuida geográficamente con replicación en tiempo real. Garantiza operación continua en piso de manufactura aún ante caídas intermitentes de conectividad externa.",
      accent: "#0ea5e9",
    },
    {
      icon: ShieldCheck,
      code: "CAP-04 // PHARMA-GRADE-TRACE",
      title: "Trazabilidad Grado Farmacéutico",
      desc: "Genealogía bidireccional 360° desde el lote de resina o bobina madre hasta la caja final. Cumplimiento de normativas de empaque crítico, registros de no conformidad (NCR) y acciones correctivas (CAPA).",
      accent: "#f59e0b",
    },
    {
      icon: Network,
      code: "CAP-05 // LEGACY-PLC-INTEROP",
      title: "Integración con PLC, Sensores y ERPs",
      desc: "Conectores bidireccionales nativos hacia PLCs Siemens, Allen-Bradley y Omron, además de sincronización fiscal 3-Way Match con CFDI 4.0 y pasarelas hacia SAP, Oracle o Microsoft Dynamics.",
      accent: "#8b5cf6",
    },
    {
      icon: Lock,
      code: "CAP-06 // PLANT-DATA-ISOLATION",
      title: "Seguridad y Aislamiento de Planta",
      desc: "Cifrado integral en tránsito y en reposo (AES-256 / TLS 1.3), particionamiento seguro de bases de datos multi-tenant y estricto control de acceso basado en roles operativos y firmas biométricas.",
      accent: "#ec4899",
    },
  ];

  return (
    <section id="capacidades" className="py-24 relative overflow-hidden bg-[#060911] blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d1424] border border-[#1e293b] font-mono-tech text-xs text-cyan-400 uppercase tracking-widest mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>INGENIERÍA & ARQUITECTURA DIGITAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Capacidades Técnicas Fundamentales
          </h2>
          <p className="text-base text-slate-300">
            Diseñamos soluciones donde la física del proceso de impresión se encuentra con la ingeniería de software moderna de alto desempeño.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.code}
              className="tech-card rounded-2xl p-6 sm:p-7 border border-[#1e293b] hover:border-cyan-500/40 transition-all duration-300 group shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Tech Code + Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-tech text-[11px] font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {cap.code}
                  </span>
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${cap.accent}15`, border: `1px solid ${cap.accent}30` }}
                  >
                    <cap.icon className="w-5 h-5" style={{ color: cap.accent }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              {/* Bottom tech indicator */}
              <div className="mt-5 pt-3 border-t border-[#1e293b]/70 flex items-center justify-between text-[11px] font-mono-tech text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cap.accent }} />
                  READY FOR DEPLOYMENT
                </span>
                <span className="text-slate-400">SYS_OK</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
