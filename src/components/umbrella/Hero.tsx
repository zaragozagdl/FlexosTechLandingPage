"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  Layers, 
  Activity, 
  Cpu, 
  Gauge, 
  ShieldCheck, 
  Radio, 
  Database,
  Sliders,
  CheckCircle2,
  Boxes
} from "lucide-react";

export default function UmbrellaHero() {
  const [speed, setSpeed] = useState(242);
  const [oee, setOee] = useState(94.6);
  const [toolingCycles, setToolingCycles] = useState(842100);

  // Subtle simulated telemetry fluctuations for live mission-control feeling
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(Math.floor(238 + Math.random() * 8));
      setOee(+(94.2 + Math.random() * 0.8).toFixed(1));
      setToolingCycles((prev) => prev + Math.floor(Math.random() * 3));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden blueprint-grid">
      {/* Background radial gradients for deep tech depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Block */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a0f1d] border border-cyan-500/40 text-cyan-400 font-mono-tech text-xs tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>INFRAESTRUCTURA DE SOFTWARE PARA INDUSTRIA 4.0</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6"
          >
            Ingeniería de software a medida, apps móviles y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-400">
              hardware industrial de alta precisión.
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-10 font-normal"
          >
            <strong>FlexOS Technologies</strong> es una firma de ingeniería tecnológica de espectro completo: construimos plataformas web complejas, aplicaciones móviles nativas, integración de PLCs y hardware IoT a medida, además de desarrollar y operar nuestras suites líderes <strong>FlexOS Control</strong> y <strong>Die Tracker Pro</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo("servicios-ingenieria")}
              className="btn-tech-primary px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/25"
            >
              <span>Desarrollo de Software & Hardware</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("ecosistema")}
              className="px-6 py-3.5 rounded-lg border border-[#1e293b] hover:border-cyan-500/40 text-xs sm:text-sm font-mono-tech text-slate-300 hover:text-white bg-[#0b1120]/80 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Ver Plataformas SaaS Insignia</span>
            </button>
          </motion.div>
        </div>

        {/* Hero Interactive Element: Mission Control Composite */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Main Console Frame */}
          <div className="tech-card rounded-2xl p-4 sm:p-6 border border-[#1e293b] shadow-2xl relative overflow-hidden">
            
            {/* Top Bar of the Console */}
            <div className="flex flex-wrap items-center justify-between pb-4 mb-5 border-b border-[#1e293b] gap-3">
              <div className="flex items-center gap-3 font-mono-tech text-xs">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#070b16] border border-[#1e293b] text-cyan-400 font-bold">
                  <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                  NODE_CLUSTER_MX01
                </span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-400">TELEMETRY_ENGINE: ACTIVE</span>
              </div>
              <div className="flex items-center gap-4 font-mono-tech text-xs text-slate-400">
                <span>LATENCY: <strong className="text-emerald-400">12ms</strong></span>
                <span>AVAILABILITY: <strong className="text-cyan-400">99.99%</strong></span>
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
              </div>
            </div>

            {/* Simulated Live Grid: 4 Stream Panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              
              {/* Panel 1: Machine Speed */}
              <div className="bg-[#070b16]/90 p-4 rounded-xl border border-[#1e293b] hover:border-cyan-500/30 transition-all">
                <div className="flex items-center justify-between text-slate-400 font-mono-tech text-xs mb-2">
                  <span>PRENSA_FLEXO_01</span>
                  <Gauge className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono-tech text-3xl font-extrabold text-white">{speed}</span>
                  <span className="font-mono-tech text-xs text-cyan-400">m / min</span>
                </div>
                <div className="w-full bg-[#1e293b] h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-sky-400 h-full rounded-full" style={{ width: `${(speed / 300) * 100}%` }} />
                </div>
                <div className="flex justify-between font-mono-tech text-[10px] text-slate-500 mt-1.5">
                  <span>Min: 0</span>
                  <span>Opt: 250</span>
                  <span>Max: 300</span>
                </div>
              </div>

              {/* Panel 2: OEE Gauge */}
              <div className="bg-[#070b16]/90 p-4 rounded-xl border border-[#1e293b] hover:border-emerald-500/30 transition-all">
                <div className="flex items-center justify-between text-slate-400 font-mono-tech text-xs mb-2">
                  <span>EFICIENCIA OEE</span>
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono-tech text-3xl font-extrabold text-emerald-400">{oee}%</span>
                  <span className="font-mono-tech text-xs text-emerald-300">REALTIME</span>
                </div>
                <div className="w-full bg-[#1e293b] h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full" style={{ width: `${oee}%` }} />
                </div>
                <div className="flex justify-between font-mono-tech text-[10px] text-slate-500 mt-1.5">
                  <span>D: 97.1%</span>
                  <span>R: 98.4%</span>
                  <span>C: 99.1%</span>
                </div>
              </div>

              {/* Panel 3: Tooling Lifecycle (Die Tracker Integration) */}
              <div className="bg-[#070b16]/90 p-4 rounded-xl border border-[#1e293b] hover:border-amber-500/30 transition-all">
                <div className="flex items-center justify-between text-slate-400 font-mono-tech text-xs mb-2">
                  <span>SUAJE_ROTATIVO_4821</span>
                  <Boxes className="w-4 h-4 text-amber-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono-tech text-2xl font-extrabold text-white">{(toolingCycles / 1000).toFixed(1)}k</span>
                  <span className="font-mono-tech text-xs text-amber-400">Revoluciones</span>
                </div>
                <div className="w-full bg-[#1e293b] h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: "84%" }} />
                </div>
                <div className="flex justify-between font-mono-tech text-[10px] text-slate-500 mt-1.5">
                  <span>Vida Útil: 84%</span>
                  <span className="text-amber-400">Afilado Próximo</span>
                </div>
              </div>

              {/* Panel 4: Cloud ERP Sync Nodes (Flexos Control Integration) */}
              <div className="bg-[#070b16]/90 p-4 rounded-xl border border-[#1e293b] hover:border-cyan-500/30 transition-all">
                <div className="flex items-center justify-between text-slate-400 font-mono-tech text-xs mb-2">
                  <span>SYNC ERP CLOUD</span>
                  <Database className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono-tech text-3xl font-extrabold text-cyan-300">18 / 18</span>
                  <span className="font-mono-tech text-xs text-slate-400">Órdenes OP</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-mono-tech text-xs mt-3">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>CFDI 4.0 3-Way Match OK</span>
                </div>
                <div className="flex justify-between font-mono-tech text-[10px] text-slate-500 mt-1">
                  <span>Piso: SINCRONIZADO</span>
                  <span>SAT: VÁLIDO</span>
                </div>
              </div>

            </div>

            {/* Bottom Status Feed inside Console */}
            <div className="p-3 rounded-lg bg-[#04060a] border border-[#1e293b]/70 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">$ flexos-runtime --watch</span>
                <span className="text-slate-600">::</span>
                <span className="text-slate-300">Telemetry engine connected to 32 plant PLC encoders</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-500">PLATFORMS:</span>
                <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-bold">FLEXOS CONTROL</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">DIE TRACKER PRO</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
