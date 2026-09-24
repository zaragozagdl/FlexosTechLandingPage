"use client";

import React, { useState } from "react";
import { 
  Volume2, 
  VolumeX, 
  Sparkles, 
  GraduationCap, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Pipette, 
  TrendingUp, 
  Calculator, 
  Play, 
  Pause,
  Compass,
  Cpu,
  HelpCircle
} from "lucide-react";

export default function VirtualAssistantTraining() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const [activeTab, setActiveTab] = useState<"voz" | "formulas" | "tintas">("voz");

  const topics = [
    {
      title: "Geometría de Cilindros & Paso de Engrane",
      badge: "Ingeniería",
      subtitle: "Estandarización de paso 1/8\" y validación de repeticiones",
      desc: "Calcula engranajes estándar, número de repeticiones y valida si el cilindro existe en el inventario físico de planta.",
      icon: Calculator,
      color: "text-blue-400",
      border: "border-blue-500/30"
    },
    {
      title: "Layflat de Manga Termoencogible",
      badge: "Cotizador Manga",
      subtitle: "Modelado geométrico con encogimiento diferencial",
      desc: "Determina el ancho exacto de bobina plana con encogimiento PETG/PVC y fondeo blanco de 8 a 12 BCM en reverso.",
      icon: Layers,
      color: "text-violet-400",
      border: "border-violet-500/30"
    },
    {
      title: "Espiral de Arquímedes Compensada",
      badge: "Almacén",
      subtitle: "Algoritmo radial con factor de compresión flexográfica",
      desc: "Conversión de bobinas huérfanas a metros lineales exactos compensando compresión radial y aire atrapado.",
      icon: Compass,
      color: "text-amber-400",
      border: "border-amber-500/30"
    },
    {
      title: "Margen Real vs Error Crítico de Markup",
      badge: "Finanzas",
      subtitle: "Protección algorítmica de utilidad en cotización",
      desc: "Elimina fugas de hasta $12.86 por cada $100 cotizados al evitar la trampa de calcular precios mediante markup simple.",
      icon: TrendingUp,
      color: "text-emerald-400",
      border: "border-emerald-500/30"
    }
  ];

  return (
    <section id="asistente-capacitacion" className="py-24 bg-[#080d1a] relative overflow-hidden border-t border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-flexos-blue/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-flexos-blue/10 border border-flexos-blue/30 text-flexos-blue text-sm font-semibold mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Novedad FlexOS Suite PRO V6</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Capacitación Continua con <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-flexos-blue via-cyan-400 to-emerald-400">
              Asistente Virtual por Voz
            </span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            Elimine las curvas de aprendizaje de meses y los manuales empolvados. FlexOS Suite V6 integra un 
            <strong className="text-white"> tutor pedagógico interactivo con voz humana (es-MX)</strong> que acompaña al personal en piso y oficina paso a paso.
          </p>
        </div>

        {/* Interactive Showcase Window */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl mb-16">
          
          {/* Top Bar of the Interactive Console */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-flexos-blue to-cyan-400 p-0.5 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">Centro de Capacitación FlexOS</h3>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                    En Vivo
                  </span>
                </div>
                <p className="text-xs text-slate-400">Modo Interactivo Asistido • Voz Natural es-MX</p>
              </div>
            </div>

            {/* Audio Voice Player Controls */}
            <div className="flex items-center gap-3 bg-slate-800/80 border border-slate-700 rounded-full px-4 py-2">
              <button 
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="w-8 h-8 rounded-full bg-flexos-blue text-white flex items-center justify-center hover:bg-blue-500 transition-colors shadow-md"
                aria-label={isPlayingAudio ? "Pausar narración" : "Reanudar narración"}
              >
                {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <div className="flex items-center gap-1.5 px-2">
                {/* Animated Voice Waveform */}
                <div className="flex items-center gap-1 h-5">
                  <span className={`w-1 bg-cyan-400 rounded-full transition-all duration-300 ${isPlayingAudio ? "h-5 animate-pulse" : "h-1.5"}`} />
                  <span className={`w-1 bg-flexos-blue rounded-full transition-all duration-200 delay-75 ${isPlayingAudio ? "h-3 animate-pulse" : "h-1.5"}`} />
                  <span className={`w-1 bg-emerald-400 rounded-full transition-all duration-300 delay-150 ${isPlayingAudio ? "h-6 animate-pulse" : "h-1.5"}`} />
                  <span className={`w-1 bg-cyan-400 rounded-full transition-all duration-200 delay-100 ${isPlayingAudio ? "h-4 animate-pulse" : "h-1.5"}`} />
                  <span className={`w-1 bg-violet-400 rounded-full transition-all duration-300 delay-200 ${isPlayingAudio ? "h-2 animate-pulse" : "h-1.5"}`} />
                </div>
                <span className="text-xs text-slate-300 font-medium ml-2 hidden sm:inline">
                  {isPlayingAudio ? "Voz Activa: Paulina (es-MX)" : "Narración Pausada"}
                </span>
              </div>

              <button 
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="text-slate-400 hover:text-white transition-colors"
                title="Silenciar / Activar audio"
              >
                {isPlayingAudio ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Interactive Tabs */}
          <div className="grid lg:grid-cols-12 gap-8 pt-8">
            
            {/* Left Column: Simulated Interactive Tour Step */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-slate-950/70 border border-slate-800 rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                Tour Guiado Interactivo en Pantalla
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                    Paso 3 de 8 • Cotizador Avanzado Flexo
                  </span>
                  <span className="text-xs text-slate-500 font-mono">ID: #tour-quote-dimensions</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">
                  Optimización de Sustrato y Repeticiones Cilíndricas
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  &ldquo;Al configurar el avance de la etiqueta, el sistema verifica automáticamente los engranes 
                  disponibles con paso de <strong>1/8 de pulgada (3.175 mm)</strong>. Si el cilindro existe en su almacén de herramentales, 
                  se activa el semáforo verde para evitar el costo y demora de fabricar uno nuevo.&rdquo;
                </p>

                {/* Simulated DOM Target Highlight */}
                <div className="bg-slate-900 border border-cyan-500/50 rounded-xl p-4 relative shadow-[0_0_25px_rgba(6,182,212,0.15)] mb-6">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2 border-b border-slate-800 pb-2">
                    <span className="font-mono text-cyan-300">Target DOM: input[name=&quot;cylinderTeeth&quot;]</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Cilindro 96T Encontrado en Planta
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                      <span className="text-[11px] text-slate-400 block">Dientes (Z)</span>
                      <span className="text-base font-bold text-white font-mono">96 Dientes</span>
                    </div>
                    <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                      <span className="text-[11px] text-slate-400 block">Desarrollo</span>
                      <span className="text-base font-bold text-cyan-400 font-mono">304.80 mm</span>
                    </div>
                    <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                      <span className="text-[11px] text-slate-400 block">Cavidades</span>
                      <span className="text-base font-bold text-emerald-400 font-mono">3 al Paso</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <HelpCircle className="w-4 h-4 text-slate-500" /> Presione &quot;Siguiente&quot; o diga &ldquo;Continuar&rdquo;
                </span>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-lg border border-slate-700 text-slate-300 text-xs font-medium hover:bg-slate-800">
                    Anterior
                  </button>
                  <button className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold flex items-center gap-1 transition-all shadow-md">
                    Siguiente <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Library of Topics with Grounded Formulas */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Search className="w-4 h-4 text-cyan-400" />
                    Biblioteca de Criterios & Metodología
                  </h4>
                  <span className="text-xs text-slate-400">30+ Temas In-App</span>
                </div>

                <div className="space-y-3">
                  {topics.map((t, idx) => {
                    const Icon = t.icon;
                    return (
                      <div 
                        key={idx}
                        className={`p-3.5 rounded-xl bg-slate-950/60 border ${t.border} hover:bg-slate-900 transition-all duration-200 group cursor-default`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs font-semibold flex items-center gap-1.5 ${t.color}`}>
                            <Icon className="w-3.5 h-3.5" />
                            {t.title}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                            {t.badge}
                          </span>
                        </div>
                        
                        <div className="text-xs text-cyan-300 font-medium bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-800/30 my-1.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          {t.subtitle}
                        </div>
                        
                        <p className="text-xs text-slate-400 leading-snug">
                          {t.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-violet-950/30 border border-violet-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Pipette className="w-5 h-5 text-violet-400 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-violet-200 block">Asistente de Tintas & Colorimetría</span>
                    <span className="text-[11px] text-slate-400">Medición CIE Lab, ΔE₀₀ ≤ 2.0 y dosificación en gramos.</span>
                  </div>
                </div>
                <span className="text-xs text-violet-400 font-bold">V6 PRO</span>
              </div>
            </div>

          </div>
        </div>

        {/* Feature Grid: Value proposition of the Virtual Assistant */}
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
              <Volume2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Explicación Verbal Fluida</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              El asistente habla en lenguaje industrial claro. Los prensistas pueden capacitarse sin quitar las manos del herramental o la prensa.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-flexos-blue/10 text-flexos-blue flex-shrink-0 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Algoritmos Flexográficos Nativos</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Cada cálculo técnico (engranajes, mermas, layflat de manga, consumo de tinta por BCM) viene automatizado y validado por el sistema.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">-70% en Curva de Aprendizaje</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Nuevos cotizadores, supervisores y prensistas comienzan a operar productivamente desde su primera semana de inducción.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
