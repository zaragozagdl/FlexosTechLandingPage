import {
  Wrench,
  Settings,
  ShoppingCart,
  Warehouse,
  FolderKanban,
  ShieldCheck,
  Calculator,
  Users,
  Truck,
  BarChart3,
  GraduationCap,
  Sparkles
} from "lucide-react";

interface Module {
  name: string;
  desc: string;
  icon: React.ElementType;
  gradient: string;
  badge?: string;
  badgeColor?: string;
}

const modules: Module[] = [
  {
    name: "Ingeniería & CAD",
    desc: "Cálculo de engranes Z, planos CAD vectoriales y calculadora de bobinas con espiral de Arquímedes.",
    icon: Wrench,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Producción & MES",
    desc: "Terminal táctil/voz, telemetría IoT ESP32 en milisegundos y tableros OEE Andon en vivo.",
    icon: Settings,
    gradient: "from-emerald-500 to-teal-600",
    badge: "IoT ESP32",
    badgeColor: "bg-emerald-500 text-slate-950",
  },
  {
    name: "Ventas & 4 Cotizadores",
    desc: "Motores especializados (Autoadheribles y Mangas), análisis de arte con pipeta de colores directos, consumo por Anilox BCM y costeo en 7 factores.",
    icon: ShoppingCart,
    gradient: "from-orange-500 to-amber-500",
    badge: "4 MOTORES V6",
    badgeColor: "bg-amber-400 text-slate-950",
  },
  {
    name: "Almacén & Lotes",
    desc: "Conciliación 3-Way Match con XML SAT, reetiquetado QR de bobinas huérfanas y trazabilidad.",
    icon: Warehouse,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Capacitación & Asistente",
    desc: "Tutor interactivo in-app con voz humana (es-MX), biblioteca de criterios técnicos y validación flexográfica en vivo.",
    icon: GraduationCap,
    gradient: "from-cyan-500 to-blue-600",
    badge: "VOZ es-MX",
    badgeColor: "bg-cyan-400 text-slate-950",
  },
  {
    name: "Gestión de Calidad (QMS)",
    desc: "Inspecciones de recibo y proceso, reportes NCR, planes CAPA con 5 Porqués y auditorías ISO 9001.",
    icon: ShieldCheck,
    gradient: "from-blue-600 to-blue-800",
  },
  {
    name: "Finanzas & Fiscalidad",
    desc: "Calendario mensual de pagos, absorción máquina/hora, pólizas Anexo 24 y P&L real vs cotizado.",
    icon: Calculator,
    gradient: "from-emerald-600 to-green-700",
    badge: "CFDI 4.0",
    badgeColor: "bg-blue-500 text-white",
  },
  {
    name: "Recursos Humanos",
    desc: "LFT 2023 Vacaciones Dignas, organigramas interactivos, cuadrillas de supervisor y destajos.",
    icon: Users,
    gradient: "from-purple-600 to-violet-700",
  },
  {
    name: "Portal Proveedores B2B",
    desc: "Scorecard continuo de proveedores, benchmarking de sustratos y validación de XML/PDF.",
    icon: Truck,
    gradient: "from-orange-500 to-rose-500",
  },
  {
    name: "Business Intelligence",
    desc: "Tableros directivos, correlación OEE a EBITDA y analítica de rentabilidad Pareto por cliente.",
    icon: BarChart3,
    gradient: "from-teal-500 to-cyan-600",
  },
];

export default function ModulesShowcase() {
  return (
    <section id="modulos" className="bg-gradient-to-b from-[#f0f6ff] to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-bold mb-4 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            ECOSISTEMA SUITE PRO V6 OPERATIVO
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Arquitectura Completa de 10 Módulos Industriales
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Un ecosistema robusto e interconectado que cubre desde la geometría del herramental hasta el Estado de Resultados de planta.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.name}
                className="relative bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Badge */}
                  {mod.badge && (
                    <span className={`absolute top-3 right-3 text-[9px] font-black tracking-wider px-2 py-0.5 rounded-full shadow-sm ${mod.badgeColor}`}>
                      {mod.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mod.gradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-blue-600 transition-colors leading-snug">
                    {mod.name}
                  </h3>

                  {/* Desc */}
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Ver detalles</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ISO 9001 & SAT CFDI 4.0 banner */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-sm rounded-2xl px-5 py-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
              ISO
            </div>
            <div className="text-left">
              <p className="text-slate-900 font-bold text-sm leading-tight">Certificable ISO 9001:2015</p>
              <p className="text-slate-500 text-xs">Módulo QMS nativo con NCRs, CAPAs e historial de proveedores</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-sm rounded-2xl px-5 py-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
              SAT
            </div>
            <div className="text-left">
              <p className="text-slate-900 font-bold text-sm leading-tight">Cumplimiento Fiscal CFDI 4.0</p>
              <p className="text-slate-500 text-xs">Validación 3-Way Match y Contabilidad Anexo 24</p>
            </div>
          </div>
        </div>

        {/* CTA link */}
        <div className="mt-10 text-center">
          <a
            href="/modulos"
            className="inline-flex items-center gap-2 text-flexos-blue font-bold hover:gap-3 transition-all duration-200 group text-base"
          >
            Explorar especificaciones completas de los módulos
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
