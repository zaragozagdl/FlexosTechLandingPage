import React from 'react';
import { 
  BrainCircuit, 
  SearchCheck, 
  FileText, 
  Layers, 
  Link as LinkIcon, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function AIPrepressAnalyzer() {
  const analyzerFeatures = [
    {
      icon: SearchCheck,
      title: "Auditoría Técnica de Diseño",
      description: "Análisis inteligente de textos (OCR), ortografía y lógica de empaque en español nativo mediante Gemini 1.5 Flash.",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: Layers,
      title: "Verificación de Imposición",
      description: "Comparativa digital 'pixel-perfect' entre el arte maestro y la propuesta de preprensa para asegurar coincidencia total.",
      color: "text-violet-400",
      bg: "bg-violet-400/10"
    },
    {
      icon: FileText,
      title: "Reportes PDF Grado Industrial",
      description: "Generación automática de documentación técnica estructurada con branding corporativo y firma de auditoría IA.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    },
    {
      icon: LinkIcon,
      title: "Trazabilidad Unificada",
      description: "Vinculación directa de archivos de diseño con ítems de cliente y fichas técnicas para un control total del historial.",
      color: "text-amber-400",
      bg: "bg-amber-400/10"
    }
  ];

  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <BrainCircuit className="w-4 h-4 text-violet-400" />
              <span className="text-violet-300 text-xs font-bold tracking-widest uppercase">Tecnología Gemini</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Analizador de Preprensa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Impulsado por IA
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
              Elimine los errores humanos en la etapa más crítica. FlexOS Control audita sus diseños originales automáticamente, detectando desviaciones técnicas antes de que lleguen a la prensa.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {analyzerFeatures.map((feat, idx) => (
                <div key={idx} className="group">
                  <div className={`w-10 h-10 rounded-lg ${feat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feat.icon className={`w-5 h-5 ${feat.color}`} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{feat.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a 
                href="#contacto"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-900/20 hover:-translate-y-1"
              >
                Solicitar Demostración de IA
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Visual Showcase (Mockup) */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl overflow-hidden">
              {/* Fake PDF Header */}
              <div className="bg-white p-8">
                <div className="flex justify-between items-start mb-8 text-slate-800">
                  <div className="w-32 h-10 bg-slate-100 rounded flex items-center justify-center font-bold text-xs">LOGOTIPO</div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-400">REPORTE TÉCNICO IA</p>
                    <p className="text-lg font-black italic">FLEXOS CONTROL</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* AI Verdict */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-emerald-800 font-black text-sm uppercase">DISEÑO VALIDADO</p>
                      <p className="text-emerald-600 text-xs">Puntaje de Confianza IA: 98.4%</p>
                    </div>
                  </div>

                  {/* Findings */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm font-medium">Textos y ortografía verificados (OK)</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm font-medium">Dimensiones vs. Ficha Técnica (MATCH)</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400 italic">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm">Generando pre-visualización de imposición...</span>
                    </div>
                  </div>

                  <div className="h-40 bg-slate-50 rounded-lg border border-dashed border-slate-200 flex items-center justify-center">
                    <p className="text-slate-300 text-xs font-medium uppercase tracking-widest">Vista Previa del Diseño</p>
                  </div>
                </div>
              </div>
              
              {/* Glass overlay with stats */}
              <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-black text-blue-400">0%</p>
                    <p className="text-[10px] text-slate-300 uppercase font-bold">Mermas</p>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <p className="text-2xl font-black text-violet-400">100%</p>
                    <p className="text-[10px] text-slate-300 uppercase font-bold">Confianza</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animated pulses */}
            <div className="absolute top-1/4 -left-4 w-3 h-3 bg-blue-500 rounded-full animate-ping" />
            <div className="absolute top-3/4 left-1/2 w-4 h-4 bg-violet-500 rounded-full animate-ping [animation-delay:1s]" />
          </div>

        </div>
      </div>
    </section>
  );
}
