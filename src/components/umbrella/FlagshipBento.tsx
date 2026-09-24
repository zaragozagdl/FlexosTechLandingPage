"use client";

import Image from "next/image";
import { 
  ArrowUpRight, 
  ExternalLink, 
  Layers, 
  Activity, 
  Boxes, 
  Cpu, 
  CheckCircle2, 
  QrCode, 
  Gauge, 
  ShieldCheck,
  TrendingUp,
  Sparkles
} from "lucide-react";

export default function FlagshipBento() {
  return (
    <section id="ecosistema" className="py-24 relative overflow-hidden bg-[#070a12] border-t border-[#1e293b]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d1424] border border-[#1e293b] font-mono-tech text-xs text-cyan-400 uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>PLATAFORMAS INSIGNIA // PROOF OF CAPABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Nuestros Productos Propios de Clase Mundial
          </h2>
          <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
            Diseñadas, programadas y operadas íntegramente por <strong>FlexOS Technologies</strong>. Estas plataformas demuestran nuestra capacidad de construir software de altísima complejidad para manufactura avanzada.
          </p>
        </div>

        {/* The Bento Spotlight Grid (2 Massive Product Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* ============================================================ */}
          {/* CARD A: FLEXOS CONTROL (flexoscontrol.com)                   */}
          {/* ============================================================ */}
          <div id="flexos-control" className="tech-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#1e293b] hover:border-sky-500/50 transition-all duration-300 group shadow-2xl relative overflow-hidden">
            {/* Top gradient glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Product Badge + Logo */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/30 font-mono-tech text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  SISTEMA ERP & PISO DE PLANTA
                </div>
                <span className="font-mono-tech text-xs text-slate-500">PRO V6 • CLOUD/MES</span>
              </div>

              {/* Logo / Title */}
              <div className="mb-4">
                <Image
                  src="/logo_control.png"
                  alt="FlexOS Control"
                  width={220}
                  height={55}
                  className="h-10 sm:h-12 w-auto object-contain mb-3"
                />
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Control total de la producción flexográfica e industrial. Monitoreo en tiempo real de tirajes, mermas, tiempos muertos, cotizadores paramétricos por volumen BCM y sincronización fiscal 3-Way Match.
                </p>
              </div>

              {/* Interactive Dashboard Mockup Inside Card */}
              <div className="my-6 p-4 rounded-xl bg-[#060913] border border-[#1e293b] font-mono-tech text-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1e293b]">
                  <span className="text-slate-400 flex items-center gap-1.5 font-bold">
                    <Activity className="w-3.5 h-3.5 text-sky-400" />
                    LIVE PRODUCTION CONSOLE
                  </span>
                  <span className="text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px]">
                    TURNO MATUTINO • ACTIVO
                  </span>
                </div>

                {/* Machine Status Row */}
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded bg-[#0b1120] border border-[#1e293b]/70 flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold">OP #9421 • Etiqueta Manga UV</div>
                      <div className="text-[11px] text-slate-400">Prensa 01 (8 Colores) • Sustrato BOPP</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sky-400 font-bold">240 m/min</div>
                      <div className="text-[10px] text-slate-500">Avance: 84% (42,000 m)</div>
                    </div>
                  </div>

                  {/* Progress Meter */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded bg-[#0b1120] border border-[#1e293b]/60">
                      <div className="text-slate-400">Disponibilidad</div>
                      <div className="text-emerald-400 font-bold text-xs mt-0.5">97.8%</div>
                    </div>
                    <div className="p-2 rounded bg-[#0b1120] border border-[#1e293b]/60">
                      <div className="text-slate-400">Rendimiento</div>
                      <div className="text-sky-400 font-bold text-xs mt-0.5">96.2%</div>
                    </div>
                    <div className="p-2 rounded bg-[#0b1120] border border-[#1e293b]/60">
                      <div className="text-slate-400">Calidad ISO</div>
                      <div className="text-cyan-400 font-bold text-xs mt-0.5">99.4%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-2 mb-6 font-mono-tech text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Cotizador BCM por anilox y tintas (Agua, Solvente, UV)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Telemetría en tiempo real con microcontroladores ESP32</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Asistente interactivo por voz y tours de capacitación en planta</span>
                </li>
              </ul>
            </div>

            {/* Bottom Link Action */}
            <div className="pt-4 border-t border-[#1e293b] flex items-center justify-between">
              <span className="font-mono-tech text-xs text-slate-400">
                flexoscontrol.com
              </span>
              <a
                href="https://flexoscontrol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-sky-500/30 hover:-translate-y-0.5"
              >
                <span>Explorar flexoscontrol.com</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD B: DIE TRACKER PRO (dietrackerpro.com)                 */}
          {/* ============================================================ */}
          <div id="die-tracker" className="tech-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#1e293b] hover:border-amber-500/50 transition-all duration-300 group shadow-2xl relative overflow-hidden">
            {/* Top gradient glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Product Badge + Logo */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 font-mono-tech text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  ASSET & TOOLING LIFECYCLE
                </div>
                <span className="font-mono-tech text-xs text-slate-500">PRO V4.5 • SUAJES Y TROQUELES</span>
              </div>

              {/* Logo / Title */}
              <div className="mb-4">
                <Image
                  src="/Dietracker.png"
                  alt="Die Tracker Pro"
                  width={220}
                  height={55}
                  className="h-10 sm:h-12 w-auto object-contain mb-3"
                />
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Trazabilidad absoluta, kilometraje de corte y mantenimiento predictivo para troqueles rotativos, suajes planos de corrugado, cilindros magnéticos y anilox. Cero paros no programados por desgaste de herramental.
                </p>
              </div>

              {/* Interactive Tooling Inventory Card Inside */}
              <div className="my-6 p-4 rounded-xl bg-[#060913] border border-[#1e293b] font-mono-tech text-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1e293b]">
                  <span className="text-slate-400 flex items-center gap-1.5 font-bold">
                    <QrCode className="w-3.5 h-3.5 text-amber-400" />
                    TOOLING REVOLUTION & WEAR MONITOR
                  </span>
                  <span className="text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/20 text-[10px]">
                    TAG: #TRQ-8820-FLEXO
                  </span>
                </div>

                {/* Tooling Spec Grid */}
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded bg-[#0b1120] border border-[#1e293b]/70 flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold">Troquel Rotativo 1/8" Z=96</div>
                      <div className="text-[11px] text-slate-400">Cavidades: 4x2 • Paso: 304.8 mm</div>
                    </div>
                    <div className="text-right">
                      <div className="text-amber-400 font-bold">842,500 rev</div>
                      <div className="text-[10px] text-emerald-400">Corte Óptimo</div>
                    </div>
                  </div>

                  {/* Lifecycle Wear Heatmap */}
                  <div className="p-2.5 rounded bg-[#0b1120] border border-[#1e293b]/60">
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-400">Desgaste Acumulado de Cuchilla:</span>
                      <span className="text-amber-400 font-bold">84% de vida útil</span>
                    </div>
                    <div className="w-full bg-[#1e293b] h-2 rounded-full overflow-hidden flex">
                      <div className="bg-emerald-500 h-full" style={{ width: "65%" }} />
                      <div className="bg-amber-500 h-full" style={{ width: "19%" }} />
                      <div className="bg-slate-700 h-full" style={{ width: "16%" }} />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1.5">
                      <span>0 rev</span>
                      <span className="text-amber-400">Reafilado sugerido a 1M rev</span>
                      <span>Vida Total: 1.2M</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-2 mb-6 font-mono-tech text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Buscador inteligente de medidas por reconocimiento de voz</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Enrolamiento Zero-Touch con códigos QR y DataMatrix</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Auditorías BCM de anilox y control milimétrico de Stickyback</span>
                </li>
              </ul>
            </div>

            {/* Bottom Link Action */}
            <div className="pt-4 border-t border-[#1e293b] flex items-center justify-between">
              <span className="font-mono-tech text-xs text-slate-400">
                dietrackerpro.com
              </span>
              <a
                href="https://dietrackerpro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/25 hover:-translate-y-0.5"
              >
                <span>Conocer Die Tracker Pro</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
