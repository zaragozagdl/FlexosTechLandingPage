"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Activity, 
  Cpu, 
  Mic, 
  FileCheck2, 
  Boxes, 
  FlaskConical, 
  Gauge, 
  Layers, 
  ShieldCheck, 
  TrendingDown,
  Award,
  Users
} from "lucide-react";

const keyPillars = [
  {
    icon: Layers,
    title: "Ingeniería Paramétrica",
    desc: "Cálculo volumétrico BCM de anilox, engranes Z (1/8\") y cotización de etiquetas y mangas.",
    accent: "#0ea5e9",
  },
  {
    icon: Activity,
    title: "Telemetría IoT & OEE en Vivo",
    desc: "Pulsos de prensa capturados por ESP32 en milisegundos con tableros Andon en piso.",
    accent: "#10b981",
  },
  {
    icon: Mic,
    title: "Tutor con Voz & Fiscal SAT",
    desc: "Asistente interactivo en español mexicano y conciliación 3-Way Match con XML CFDI 4.0.",
    accent: "#06b6d4",
  }
];

const subFeatures = [
  { icon: Layers, label: "Cotizador BCM & Arte", color: "#0ea5e9" },
  { icon: Cpu, label: "Telemetría IoT ESP32", color: "#10b981" },
  { icon: Mic, label: "Asistente Virtual por Voz", color: "#06b6d4" },
  { icon: FlaskConical, label: "Colorimetría CIE Lab ΔE", color: "#f59e0b" },
  { icon: FileCheck2, label: "Auditoría 3-Way Match", color: "#8b5cf6" },
  { icon: ShieldCheck, label: "QMS ISO 9001 & CAPA", color: "#ec4899" }
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Background with Ambient Glows */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/industrial-bg.png"
          alt="Planta Flexográfica de Alta Tecnología"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center opacity-30 filter contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070913]/90 via-[#070913]/80 to-[#070913]" />

        {/* Ambient Glow Orbs */}
        <div className="hidden md:block absolute top-16 left-1/4 w-[600px] h-[600px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="hidden md:block absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="hidden md:block absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Top Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-sky-500/30 bg-sky-950/40 backdrop-blur-xl text-xs sm:text-sm font-semibold text-sky-300 mb-8 shadow-lg shadow-sky-950/50"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-sky-400 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          </span>
          <span className="font-semibold text-white tracking-wide">FlexOS Suite PRO V6</span>
          <span className="text-sky-400/60">•</span>
          <span className="text-cyan-300">Oficialmente en Operación para Plantas Convertidoras</span>
        </motion.div>

        {/* Main Hero Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-5xl"
        >
          El ERP / MES Especializado para <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
            Pioneros de la Flexografía
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl text-base sm:text-xl text-slate-300 mb-12 leading-relaxed font-normal"
        >
          Diseñado milimétricamente para plantas de etiquetas autoadheribles, empaque flexible y manga termoencogible.
          Integra cotizaciones paramétricas por volumen BCM, piso en vivo con telemetría IoT, control de calidad ISO 9001 y capacitación asistida por voz.
        </motion.p>

        {/* Floating KPI Badges (Signature Polish from Dietracker) */}
        <div className="relative w-full max-w-5xl mb-12">
          {/* Top Floating Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex absolute -top-8 -left-6 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#0c1020]/90 border border-sky-500/30 backdrop-blur-xl shadow-xl shadow-sky-950/40 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-sky-400">Telemetría IoT en Vivo</div>
              <div className="text-sm font-extrabold text-white">99.8% Precisión OEE</div>
            </div>
          </motion.div>

          {/* Bottom Floating Badge */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="hidden lg:flex absolute -bottom-6 -right-6 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#0c1020]/90 border border-emerald-500/30 backdrop-blur-xl shadow-xl shadow-emerald-950/40 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-400">Control de Metraje</div>
              <div className="text-sm font-extrabold text-white">-35% Mermas de Arranque</div>
            </div>
          </motion.div>

          {/* 3 Pillar Cards (Bento Style with Glassmorphism) */}
          <div className="grid md:grid-cols-3 gap-5 text-left">
            {keyPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="group relative p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-sky-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${pillar.accent}15`, border: `1px solid ${pillar.accent}30` }}
                >
                  <pillar.icon className="w-6 h-6" style={{ color: pillar.accent }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MVP Pilot Program Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="w-full max-w-4xl bg-gradient-to-r from-slate-900/90 via-[#0c1328]/90 to-slate-900/90 border border-sky-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl mb-12 text-left relative overflow-hidden group hover:border-sky-500/60 transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                Convocatoria Exclusiva • Cupos Limitados
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Súmate al Grupo Selecto de <span className="text-cyan-400">Empresas Pioneras (MVP)</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Estamos abriendo las puertas a plantas convertidoras que deseen implementar el sistema con la 
                <strong> asesoría, acompañamiento e inducción 1 a 1 de nuestro equipo de ingeniería</strong> durante todo el proceso.
              </p>
            </div>

            <div className="w-full md:w-auto flex-shrink-0">
              <button
                onClick={() => scrollTo("contacto")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-600 hover:from-sky-600 hover:to-cyan-600 text-white px-7 py-4 rounded-xl text-base font-bold transition-all shadow-[0_0_25px_rgba(14,165,233,0.45)] hover:shadow-[0_0_35px_rgba(14,165,233,0.7)] hover:-translate-y-0.5 cursor-pointer"
              >
                Postular mi Planta
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* MVP Program Pillars */}
          <div className="grid sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/[0.08]">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 flex-shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Acompañamiento 1 a 1</h3>
                <p className="text-xs text-slate-400">Ingenieros dedicados en sitio y remoto para parametrizar y capacitar.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Suite V6 Ilimitada</h3>
                <p className="text-xs text-slate-400">Acceso a Web ERP, MES Móvil, Telemetría ESP32 y Asistente de Voz.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 flex-shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Condición Fundadora</h3>
                <p className="text-xs text-slate-400">Tarifas preferenciales vitalicias y prioridad en el roadmap del software.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Buttons / CTA Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo("contacto")}
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Solicitar Demostración Técnica
          </button>
          <a
            href="/modulos"
            className="flex items-center gap-2 text-slate-300 hover:text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-sky-500/40"
          >
            Explorar los 10 Módulos
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Interactive Tray (Inspired by Dietracker's Signature Feature Tray) */}
        <div className="w-full pt-8 border-t border-white/[0.07]">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
            Funcionalidades Principales de FlexOS Suite V6
            <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {subFeatures.map((feat) => (
              <div 
                key={feat.label}
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all duration-300 cursor-default"
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                  style={{ 
                    backgroundColor: `${feat.color}15`, 
                    border: `1px solid ${feat.color}35` 
                  }}
                >
                  <feat.icon className="w-6 h-6" style={{ color: feat.color }} />
                </div>
                <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 text-center transition-colors">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Smooth bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#070913] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
