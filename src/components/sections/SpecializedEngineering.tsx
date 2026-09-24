'use client';

import React, { useState } from "react";
import { 
  Droplet, 
  Ruler, 
  CheckCircle2, 
  ScanSearch, 
  Calculator, 
  Crosshair, 
  Layers, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function SpecializedEngineering() {
  const [activeTab, setActiveTab] = useState<'quote' | 'formulator'>('quote');

  return (
    <section className="bg-slate-50 py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text & Features */}
          <div className="space-y-10">
            <div>
              <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide mb-4 shadow-sm">
                INGENIERÍA ESPECIALIZADA
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1528] mb-6 leading-tight">
                El Diferenciador Técnico que Otros ERPs No Tienen
              </h2>
              <p className="text-slate-500 text-lg">
                FlexOS Control entiende la industria flexográfica real. No es un ERP genérico adaptado, es un sistema diseñado desde cero para física de tintas, cálculo volumétrico por BCM y gestión de herramentales.
              </p>
            </div>

            <div className="space-y-5">

              {/* Feature 1: 4 Cotizadores & BCM */}
              <div 
                onClick={() => setActiveTab('quote')}
                className={`cursor-pointer rounded-2xl p-6 shadow-sm border transition-all relative overflow-hidden group ${
                  activeTab === 'quote' 
                    ? 'bg-white border-amber-400 shadow-md ring-1 ring-amber-400/20' 
                    : 'bg-white border-slate-100 hover:border-amber-200'
                }`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-amber-500 to-orange-500 rounded-l-2xl"></div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0 shadow-md text-white">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-slate-800">4 Cotizadores Técnicos & Consumo BCM</h3>
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full tracking-wider uppercase">
                        PRO V6
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm mb-3 leading-relaxed">
                      Modelado físico volumétrico de tinta según rodillo Anilox con doble transferencia química. Incluye analizador de arte con <strong>pipeta para colores directos</strong>, descuento sustractivo CMYK y desglose en 7 costos por escala.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-200">Autoadheribles & Mangas</span>
                      <span className="bg-orange-50 text-orange-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-orange-200">Pipeta de Color Directo</span>
                      <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">Descuento CMYK Real</span>
                      <span className="bg-purple-50 text-purple-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-purple-200">Stickyback & Suajes</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Feature 2: Formulador y Recetario */}
              <div 
                onClick={() => setActiveTab('formulator')}
                className={`cursor-pointer rounded-2xl p-6 shadow-sm border transition-all relative overflow-hidden group ${
                  activeTab === 'formulator' 
                    ? 'bg-white border-blue-400 shadow-md ring-1 ring-blue-400/20' 
                    : 'bg-white border-slate-100 hover:border-blue-200'
                }`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500 rounded-l-2xl"></div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shrink-0 shadow-md text-white">
                    <Droplet className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">Formulador y Recetario de Tintas</h3>
                    <p className="text-slate-500 text-sm mb-3 leading-relaxed">
                      Mezclas precisas para CMYK, Guía de Color y colores especiales. Calcula costos por kg, genera recetas reproducibles y controla la consistencia entre lotes con espectrofotómetro (Delta E &le; 2.0).
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full">CMYK & Colores Directos</span>
                      <span className="bg-purple-100 text-purple-600 text-[10px] font-bold px-2 py-1 rounded-full">Delta E CIE Lab</span>
                      <span className="bg-emerald-100 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-full">Control de viscosidad</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3: Herramental */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex gap-6 items-start relative overflow-hidden group hover:border-emerald-200 transition-colors">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-400 rounded-l-2xl"></div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0 shadow-md text-white">
                  <Ruler className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">Calculadora Paramétrica de Herramental</h3>
                  <p className="text-slate-500 text-sm mb-3 leading-relaxed">
                    Parámetros automáticos para suajes, engranes Z (paso 1/8"), planchas y cilindros magnéticos. Evita errores de setup y elimina el descarte en prensa.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-full">Engranajes Z (1/8")</span>
                    <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full">Cilindros magnéticos</span>
                    <span className="bg-cyan-100 text-cyan-700 text-[10px] font-bold px-2 py-1 rounded-full">Planchas Cyrel</span>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full">Cálculo de anilox</span>
                  </div>
                </div>
              </div>

              {/* Feature 4: Gemini AI Vision */}
              <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-6 shadow-lg border border-violet-400/20 flex gap-6 items-start relative overflow-hidden group">
                <div className="absolute inset-0 bg-violet-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-violet-300/60 rounded-l-2xl"></div>
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0 shadow-md relative z-10 text-white">
                  <ScanSearch className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white">Visión Artificial & Calidad Pre-prensa</h3>
                    <span className="inline-flex items-center gap-1 bg-white/20 text-white text-[10px] font-black px-2 py-0.5 rounded-full tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                      GEMINI AI
                    </span>
                  </div>
                  <p className="text-violet-100 text-sm mb-3 leading-relaxed">
                    Auditoría inteligente de textos OCR, ortografía en español e inspección visual de imposición para cotejar el arte maestro contra la propuesta de preprensa.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded-full">Auditoría OCR</span>
                    <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded-full">Inspección de Imposición</span>
                    <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded-full">Reportes Técnicos PDF</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* Right Column - Interactive UI Mockup */}
          <div className="relative mt-8 lg:mt-0 lg:ml-10 xl:ml-16">
            
            {/* The App Window */}
            <div className="bg-[#131b2b] rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 pb-2 flex flex-col relative z-0">
              
              {/* Window Header with Tab Switcher */}
              <div className="px-4 py-3 bg-[#182335] flex items-center justify-between border-b border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  <span className="ml-2 text-xs text-slate-400 font-medium hidden sm:inline">FlexOS Control Suite V6</span>
                </div>
                
                {/* View Switcher Tabs */}
                <div className="flex bg-slate-900/60 p-0.5 rounded-lg border border-slate-700/60 text-xs">
                  <button
                    onClick={() => setActiveTab('quote')}
                    className={`px-3 py-1 rounded-md font-medium transition-all ${
                      activeTab === 'quote' 
                        ? 'bg-amber-500 text-slate-950 shadow-sm font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Cotizador BCM & Arte
                  </button>
                  <button
                    onClick={() => setActiveTab('formulator')}
                    className={`px-3 py-1 rounded-md font-medium transition-all ${
                      activeTab === 'formulator' 
                        ? 'bg-blue-600 text-white shadow-sm font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Formulador de Tintas
                  </button>
                </div>
              </div>
              
              {/* Tab 1: Cotizador BCM & Arte */}
              {activeTab === 'quote' && (
                <div className="p-5 sm:p-6 space-y-4">
                  
                  {/* Top Art Inspection Bar */}
                  <div className="bg-[#1b2538] rounded-xl p-3.5 border border-slate-700/40 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-rose-500 via-amber-500 to-sky-500 p-0.5 flex items-center justify-center shrink-0 shadow-sm">
                        <div className="w-full h-full bg-slate-900 rounded-[6px] flex items-center justify-center">
                          <Crosshair className="w-5 h-5 text-rose-400" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-bold text-xs">Etiqueta_Bebida_750ml.pdf</span>
                          <span className="bg-rose-500/20 text-rose-300 text-[10px] font-bold px-1.5 py-0.2 rounded border border-rose-500/30">
                            Pipeta Activa
                          </span>
                        </div>
                        <p className="text-slate-400 text-[11px]">Color Directo 485 (14.2% Cobertura) • Descuento CMYK Aplicado</p>
                      </div>
                    </div>
                    <span className="text-emerald-400 font-mono text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                      -0% Doble Cobro
                    </span>
                  </div>

                  {/* Physical Anilox Volumetric Table */}
                  <div className="bg-[#1b2538] rounded-xl p-4 border border-slate-700/30 space-y-2.5 text-xs font-mono">
                    <div className="flex justify-between items-center text-slate-400 pb-1.5 border-b border-slate-700/50 text-[11px]">
                      <span>Torre / Color</span>
                      <span>Anilox (BCM)</span>
                      <span>Consumo g/m²</span>
                      <span>KG Requeridos</span>
                    </div>

                    <div className="flex justify-between items-center text-slate-200">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> T1 Cyan Proceso
                      </span>
                      <span className="text-slate-300">800 LPI / 2.0 BCM</span>
                      <span className="text-slate-300">0.411 g/m²</span>
                      <span className="text-emerald-400 font-bold">0.14 kg</span>
                    </div>

                    <div className="flex justify-between items-center text-slate-200">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> T2 Color Directo 485
                      </span>
                      <span className="text-slate-300">360 LPI / 3.5 BCM</span>
                      <span className="text-slate-300">1.047 g/m²</span>
                      <span className="text-emerald-400 font-bold">0.36 kg</span>
                    </div>

                    <div className="flex justify-between items-center text-slate-200">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span> T3 Blanco Opaco
                      </span>
                      <span className="text-slate-300">200 LPI / 8.5 BCM</span>
                      <span className="text-slate-300">2.680 g/m²</span>
                      <span className="text-emerald-400 font-bold">0.92 kg</span>
                    </div>
                  </div>

                  {/* 7-Pillar Breakdown Strip (Letras Chiquitas) */}
                  <div className="bg-[#182335] rounded-xl p-3 border border-slate-700/30">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5">
                      Desglose Paramétrico por Escala (10k Unidades):
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px] text-slate-300 font-mono">
                      <div>Sustrato: <span className="text-white font-bold">$1,420</span></div>
                      <div>Tintas BCM: <span className="text-amber-400 font-bold">$340</span></div>
                      <div>Stickyback: <span className="text-purple-400 font-bold">$85</span></div>
                      <div>Suajes: <span className="text-sky-400 font-bold">$45</span></div>
                      <div>Grabados: <span className="text-white font-bold">$600</span></div>
                      <div>Empaque: <span className="text-white font-bold">$95</span></div>
                      <div>Prensa/MO: <span className="text-emerald-400 font-bold">$820</span></div>
                      <div>Total Costo: <span className="text-white font-bold">$3,405</span></div>
                    </div>
                  </div>

                  {/* Bottom Ribbon: Real Margin Formula */}
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-3.5 flex justify-between items-center shadow-lg text-slate-950">
                    <div>
                      <span className="text-[11px] font-bold block opacity-90">Precio Final • Margen Real 35%</span>
                      <span className="text-[10px] font-medium opacity-90">Margen comercial real garantizado</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black tracking-tight leading-none">$5,238.46</span>
                      <span className="text-[10px] font-bold block uppercase opacity-85">MXN • Sin fugas de markup</span>
                    </div>
                  </div>

                </div>
              )}

              {/* Tab 2: Formulador de Tintas */}
              {activeTab === 'formulator' && (
                <div className="p-6">
                  
                  {/* Color swatches */}
                  <div className="flex gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-sky-400 shadow-sm"></div>
                    <div className="w-14 h-14 rounded-lg bg-[#182335]"></div>
                    <div className="w-14 h-14 rounded-lg bg-amber-400 shadow-sm"></div>
                    <div className="w-14 h-14 rounded-lg bg-slate-900 shadow-sm"></div>
                  </div>

                  {/* Recipe Container */}
                  <div className="bg-[#1b2538] rounded-xl p-5 mb-4 border border-slate-700/30">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-slate-300 font-medium text-sm">Receta: Guía de Color 485 C</span>
                      <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-1 rounded">Aprobada</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                        <span className="text-slate-400 text-sm">Cian proceso</span>
                        <span className="text-white text-sm font-medium">42.5%</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                        <span className="text-slate-400 text-sm">Magenta proceso</span>
                        <span className="text-white text-sm font-medium">78.2%</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                        <span className="text-slate-400 text-sm">Amarillo proceso</span>
                        <span className="text-white text-sm font-medium">91.0%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Negro proceso</span>
                        <span className="text-white text-sm font-medium">2.5%</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Total Ribbon */}
                  <div className="bg-blue-600 rounded-xl p-4 flex justify-between items-center">
                    <span className="text-white/90 text-sm font-semibold">Costo por kg</span>
                    <span className="text-white text-xl font-bold">$127.50 MXN</span>
                  </div>

                </div>
              )}

            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 md:-right-8 bg-white rounded-xl shadow-2xl p-4 flex items-center gap-4 z-10 border border-slate-100 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-800 font-extrabold text-sm leading-tight">4 Cotizadores Especializados</p>
                <p className="text-slate-500 text-xs mt-0.5">Autoadheribles, Mangas & BCM</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
