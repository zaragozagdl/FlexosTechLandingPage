import { 
  PenTool, 
  Activity, 
  DollarSign, 
  Volume2, 
  ShieldCheck, 
  BrainCircuit, 
  Pipette, 
  FileCheck2, 
  Cpu, 
  Layers 
} from "lucide-react";

export default function CoreFeatures() {
  const features = [
    {
      Icon: Volume2,
      iconColor: "text-cyan-500",
      hoverBg: "group-hover:bg-cyan-500",
      shadowHover: "hover:shadow-[0_8px_30px_-4px_rgba(6,182,212,0.25)]",
      title: "Asistente Virtual por Voz",
      description: "Inducción y capacitación interactiva in-app con síntesis de voz natural (es-MX). Guía paso a paso al personal reduciendo la curva de aprendizaje en un 70%."
    },
    {
      Icon: Activity,
      iconColor: "text-emerald-500",
      hoverBg: "group-hover:bg-emerald-500",
      shadowHover: "hover:shadow-[0_8px_30px_-4px_rgba(16,185,129,0.25)]",
      title: "OEE & Telemetría IoT ESP32",
      description: "Monitoreo en milisegundos con encoders de prensa conectados a Firebase RTDB. Tiempos muertos, metros corridos y tableros Andon en pantalla completa."
    },
    {
      Icon: FileCheck2,
      iconColor: "text-blue-600",
      hoverBg: "group-hover:bg-blue-600",
      shadowHover: "hover:shadow-[0_8px_30px_-4px_rgba(37,99,235,0.25)]",
      title: "3-Way Match & CFDI 4.0",
      description: "Auditoría fiscal automática: concilia el XML de la factura del proveedor con la Orden de Compra y la recepción física del almacén con tolerancia cero en costos."
    },
    {
      Icon: Pipette,
      iconColor: "text-amber-500",
      hoverBg: "group-hover:bg-amber-500",
      shadowHover: "hover:shadow-[0_8px_30px_-4px_rgba(245,158,11,0.25)]",
      title: "Asistente de Tintas & ΔE",
      description: "Colorimetría CIE L*a*b* con tolerancia ΔE₀₀ ≤ 2.0. Calcula al instante los gramos de base o toner a agregar en cubeta para ajustar el tono a pie de prensa."
    },
    {
      Icon: PenTool,
      iconColor: "text-indigo-500",
      hoverBg: "group-hover:bg-indigo-500",
      shadowHover: "hover:shadow-[0_8px_30px_-4px_rgba(99,102,241,0.25)]",
      title: "Ingeniería & Planos CAD",
      description: "Cálculo de engranes Z (1/8\"), desarrollo, suajes y exportación vectorial (corte rojo, plecado azul, fotoceldas) compatible con Illustrator y AutoCAD."
    },
    {
      Icon: Layers,
      iconColor: "text-rose-500",
      hoverBg: "group-hover:bg-rose-500",
      shadowHover: "hover:shadow-[0_8px_30px_-4px_rgba(244,63,94,0.25)]",
      title: "4 Cotizadores Técnicos & BCM",
      description: "Autoadheribles y Mangas (Estándar y Avanzados): análisis de arte con pipeta de colores directos, física volumétrica por Anilox BCM y desglose en 7 costos con Stickyback y suajes."
    },
    {
      Icon: ShieldCheck,
      iconColor: "text-flexos-blue",
      hoverBg: "group-hover:bg-flexos-blue",
      shadowHover: "hover:shadow-[0_8px_30px_-4px_rgba(14,165,233,0.25)]",
      title: "SGC ISO 9001 & Trazabilidad 360",
      description: "Rastreo integral lote a lote, gestión de No Conformidades (NCR), análisis de causa raíz con 5 Porqués y evaluación continua de proveedores."
    },
    {
      Icon: BrainCircuit,
      iconColor: "text-violet-400",
      hoverBg: "group-hover:bg-violet-500",
      shadowHover: "hover:shadow-[0_12px_40px_-4px_rgba(139,92,246,0.6)]",
      title: "IA Vision: Google Gemini",
      description: "Auditoría técnica de artes maestros con OCR, ortografía en español para empaques e inspección de imposición digital pixel-perfect antes de fabricar fotopolímeros.",
      highlight: true
    }
  ];

  return (
    <section id="caracteristicas" className="bg-[#f8fafc] text-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-flexos-blue uppercase tracking-widest mb-2">Capabilities V6 PRO</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-slate-950">
            Capacidades de Nueva Generación
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            FlexOS Suite PRO V6 no es un ERP genérico: cada algoritmo, pantalla y microcontrolador IoT está forjado específicamente para el convertidor flexográfico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className={`group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                feat.highlight
                  ? `bg-gradient-to-br from-violet-600 to-indigo-700 border border-violet-400/30 shadow-[0_8px_30px_-4px_rgba(139,92,246,0.4)] ${feat.shadowHover} text-white md:col-span-2 lg:col-span-2`
                  : `bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] ${feat.shadowHover}`
              }`}
            >
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                  feat.highlight ? "bg-white/15" : `bg-slate-100/80 ${feat.hoverBg}`
                }`}>
                  <feat.Icon className={`w-6 h-6 transition-colors duration-300 ${
                    feat.highlight ? "text-white" : `${feat.iconColor} group-hover:text-white`
                  }`} />
                </div>

                {feat.highlight && (
                  <span className="inline-flex items-center gap-2 bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="tracking-widest">POWERED BY GEMINI 1.5</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                    <span className="bg-emerald-400 text-slate-950 text-[9px] font-black px-1.5 py-0.5 rounded-full ml-1">
                      ACTIVO
                    </span>
                  </span>
                )}

                <h4 className={`text-xl font-bold mb-2.5 ${
                  feat.highlight ? "text-white" : "text-slate-900"
                }`}>{feat.title}</h4>

                <p className={`text-sm leading-relaxed ${
                  feat.highlight ? "text-violet-100 text-base" : "text-slate-600"
                }`}>
                  {feat.description}
                </p>
              </div>

              {feat.highlight && (
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-violet-200">
                  <span>Auditoría de arte en segundos</span>
                  <span className="font-bold underline cursor-pointer hover:text-white">Ver demostración visual ↓</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="mt-14 text-center">
          <a
            href="/caracteristicas"
            className="inline-flex items-center gap-2 text-flexos-blue font-semibold hover:gap-3 transition-all duration-200 group text-base"
          >
            Explorar todas las características detalladas
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
