import Image from "next/image";
import { Check, Link2, Sparkles } from "lucide-react";

export default function Ecosystem() {
  return (
    <section className="bg-[#0A1121] py-24 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="inline-block bg-blue-500/20 text-blue-400 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider border border-blue-500/30">
            ECOSISTEMA FLEXOS TECHNOLOGIES
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Un Ecosistema Completo para la Industria Gráfica
          </h2>
          <p className="text-slate-300 text-lg">
            FlexOS Control no está solo. Forma parte de un portafolio de soluciones especializadas que cubren cada etapa de la cadena de valor.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4 sm:px-0">
          
          {/* Card 1: FlexOS Control */}
          <div className="bg-blue-600 rounded-3xl p-8 relative shadow-2xl shadow-blue-900/50 flex flex-col items-center text-center mt-6">
            <div className="absolute -top-4 bg-sky-300 text-blue-900 text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest shadow-lg">
              ACTUAL
            </div>
            
            <div className="h-16 bg-white rounded-2xl flex items-center justify-center mb-6 px-4 shadow-md">
              <Image
                src="/logo_control.png"
                alt="FlexOS Control"
                width={180}
                height={40}
                className="h-9 w-auto object-contain"
                priority
              />
            </div>
            
            <p className="text-blue-100/90 text-sm leading-relaxed mb-8">
              ERP completo para la industria flexográfica. Gestión integral de ventas, producción, almacén y finanzas.
            </p>
            
            <div className="mt-auto flex gap-2 flex-wrap justify-center">
              <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">10 Módulos</span>
              <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">PRO V6</span>
              <span className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">Cloud</span>
            </div>
          </div>

          {/* Card 2: KromaNode Lab */}
          <div className="bg-white rounded-3xl p-8 relative shadow-xl flex flex-col items-center mt-6">
            <div className="absolute -top-4 bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest shadow-md">
              COMPLEMENTARIO
            </div>
            
            <div className="h-16 flex items-center justify-center mb-6 px-2">
              <Image
                src="/KromaNode.png"
                alt="KromaNode Lab"
                width={80}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
            
            <p className="text-slate-500 text-sm text-center leading-relaxed mb-8">
              Software especializado para el laboratorio de color. Control de calidad de tintas, formulación avanzada y gestión de estándares.
            </p>
            
            <ul className="mt-auto space-y-3 w-full text-left">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-xs sm:text-sm font-medium">Especificaciones de densidad y tonalidad</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-xs sm:text-sm font-medium">Comparación con estándares Guía de Color/ISO</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-xs sm:text-sm font-medium">Historial de batches de tinta</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Die Tracker PRO */}
          <div className="bg-white rounded-3xl p-8 relative shadow-xl flex flex-col items-center mt-6">
            <div className="absolute -top-4 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest shadow-md shadow-red-600/20">
              COMPLEMENTARIO
            </div>
            
            <div className="h-16 flex items-center justify-center mb-6 px-2">
              <Image
                src="/Dietracker.png"
                alt="Die Tracker PRO"
                width={180}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            
            <p className="text-slate-500 text-sm text-center leading-relaxed mb-8">
              Gestión integral de herramentales. Seguimiento de suajes, planchas, cilindros y herramientas de corte.
            </p>
            
            <ul className="mt-auto space-y-3 w-full text-left">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-xs sm:text-sm font-medium">Registro de ubicación en bodega</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-xs sm:text-sm font-medium">Historial de uso y mantenimiento</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 text-xs sm:text-sm font-medium">Alertas de vida útil y afilado</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Integration Bar */}
        <div className="max-w-4xl mx-auto bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Link2 className="w-6 h-6 text-sky-400" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <h4 className="text-white font-bold text-lg mb-1">Integración Nativa</h4>
            <p className="text-slate-400 text-sm">Todas las soluciones comparten datos y APIs abiertas para una operación sin fisuras.</p>
          </div>
          {/* Gemini AI Badge */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-violet-600/30 to-indigo-600/30 border border-violet-500/40 rounded-xl px-5 py-3 shrink-0 shadow-[0_0_20px_rgba(139,92,246,0.25)]">
            <div className="w-9 h-9 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-violet-300" />
            </div>
            <div>
              <p className="text-violet-200 text-[10px] font-black tracking-widest uppercase">Powered by</p>
              <p className="text-white font-bold text-sm leading-tight">Google Gemini AI</p>
              <p className="text-violet-300/80 text-[10px] leading-tight">Visión Artificial</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
