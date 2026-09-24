import {
  BrainCircuit,
  PenTool,
  Activity,
  DollarSign,
  LayoutDashboard,
  Smartphone,
  ShieldCheck,
  Droplet,
  Ruler,
  ScanSearch,
  Zap,
  BarChart3,
  Users,
  Truck,
  ClipboardList,
  Settings,
  Sparkles,
  Eye,
  Cpu,
  Globe,
  ArrowRight,
  Volume2,
  FileCheck2,
  Pipette,
  GraduationCap,
  Calculator,
  Crosshair
} from "lucide-react";

/* ─── Feature data types ──────────────────────────────────── */
interface Feature {
  icon: React.ElementType;
  color: string;
  bg: string;
  title: string;
  description: string;
  tags: string[];
}

/* ─── All feature data ────────────────────────────────────── */
const features: Feature[] = [
  {
    icon: Volume2,
    color: "text-cyan-600",
    bg: "bg-cyan-100",
    title: "Asistente Virtual por Voz (es-MX)",
    description:
      "Centro interactivo de capacitación in-app con narración en lenguaje natural mexicano y tours guiados paso a paso para prensistas y administradores.",
    tags: ["Voz es-MX", "Tour Guiado", "-70% Curva"],
  },
  {
    icon: FileCheck2,
    color: "text-blue-600",
    bg: "bg-blue-100",
    title: "Conciliación Fiscal 3-Way Match",
    description:
      "Validación directa del XML CFDI 4.0 contra la Orden de Compra y la recepción física de almacén, con calendario interactivo de dispersión de pagos SPEI.",
    tags: ["CFDI 4.0", "SAT", "3-Way Match"],
  },
  {
    icon: Pipette,
    color: "text-amber-600",
    bg: "bg-amber-100",
    title: "Asistente de Tintas & Colorimetría ΔE",
    description:
      "Espectrofotometría CIE L*a*b* con tolerancia ΔE₀₀ ≤ 2.0 y cálculo de dosificación compensatoria en gramos para ajuste en cubeta a pie de prensa.",
    tags: ["CIE Lab", "Delta E", "Cubeta"],
  },
  {
    icon: Cpu,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    title: "Telemetría IoT con ESP32",
    description:
      "Conexión física a encoders en prensa con respuesta en milisegundos en Firebase Realtime DB, monitoreo de pulsos y tableros Andon en pantalla completa.",
    tags: ["ESP32", "IoT", "Milisegundos"],
  },
  {
    icon: PenTool,
    color: "text-blue-600",
    bg: "bg-blue-100",
    title: "Ingeniería de Precisión CAD/CAM",
    description:
      "Generación automática de planos mecánicos vectoriales (SVG/PDF) con pistas técnicas y lógica de orientación inteligente.",
    tags: ["CAD/CAM", "SVG/PDF", "Tolerancias"],
  },
  {
    icon: Activity,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    title: "Analítica Industrial OEE",
    description:
      "Medición en tiempo real de Disponibilidad, Rendimiento y Calidad. Tableros por turno, máquina y operario.",
    tags: ["OEE", "Tiempo real", "Tableros"],
  },
  {
    icon: DollarSign,
    color: "text-yellow-600",
    bg: "bg-yellow-100",
    title: "Costeo Real Proactivo",
    description:
      "Monetización de tiempo máquina, consumo eléctrico e insumos por orden de producción. Compare utilidad estimada vs. real.",
    tags: ["Costo por O.P.", "Eléctrico", "Utilidad real"],
  },
  {
    icon: Smartphone,
    color: "text-cyan-600",
    bg: "bg-cyan-100",
    title: "Terminal de Planta con Voz",
    description:
      "Interfaz manos libres para operarios con comandos de voz, registro de paros y calculadora de devolución de bobinas.",
    tags: ["Sin teclado", "PWA Android", "Control de voz"],
  },
  {
    icon: Calculator,
    color: "text-orange-600",
    bg: "bg-orange-100",
    title: "4 Cotizadores Técnicos Flexográficos",
    description:
      "Motores especializados para Etiquetas Autoadheribles y Manga Termoencogible (Básico y Avanzados) con análisis de payback, Layflat de mangas y costeo en 7 factores.",
    tags: ["4 Motores", "Autoadheribles", "Manga Termoencogible", "Layflat"],
  },
  {
    icon: Crosshair,
    color: "text-amber-600",
    bg: "bg-amber-100",
    title: "Análisis de Tintas por Anilox BCM & Pipeta de Color Directo",
    description:
      "Física de transferencia volumétrica en 2 etapas por rodillo Anilox BCM. Muestreo puntual con pipeta en el arte y descuento sustractivo CMYK para evitar doble cobro de tinta.",
    tags: ["Anilox BCM", "Color Directo", "Descuento CMYK", "Stickyback"],
  },
  {
    icon: Truck,
    color: "text-purple-600",
    bg: "bg-purple-100",
    title: "Surtimiento Inteligente (Fulfillment)",
    description:
      "Algoritmo que cruza demanda de ventas contra stock disponible para generar automáticamente O.P. o Requisiciones.",
    tags: ["WMS", "Auto O.P.", "Stock"],
  },
  {
    icon: Droplet,
    color: "text-blue-500",
    bg: "bg-blue-100",
    title: "Formulador y Recetario de Tintas",
    description:
      "Mezclas precisas CMYK, Guía de Color y colores especiales. Costos por kg, recetas reproducibles y control entre lotes.",
    tags: ["CMYK", "Guía de Color", "Viscosidad"],
  },
  {
    icon: Ruler,
    color: "text-teal-600",
    bg: "bg-teal-100",
    title: "Calculadora Paramétrica de Herramental",
    description:
      "Parámetros automáticos para suajes, cuchillas, planchas y cilindros magnéticos. Reduce errores de setup.",
    tags: ["Suajes", "Cilindros", "Anilox"],
  },
  {
    icon: ShieldCheck,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
    title: "Auditabilidad Militar",
    description:
      "Rastreo 360° desde la materia prima hasta la entrega. Cumplimiento ISO y reportes de desviaciones automatizados.",
    tags: ["ISO", "Trazabilidad", "Auditoría"],
  },
  {
    icon: LayoutDashboard,
    color: "text-pink-600",
    bg: "bg-pink-100",
    title: "10 Módulos Nativos Unificados",
    description:
      "Inventario, Producción, Calidad, CRM, RH y más. Un ecosistema unificado sin parches ni integraciones de terceros.",
    tags: ["ERP", "MES", "Sin silos"],
  },
  {
    icon: Users,
    color: "text-rose-600",
    bg: "bg-rose-100",
    title: "Gestión de Recursos Humanos",
    description:
      "Control de asistencia, turnos, incidencias y rendimiento por operario integrado directamente con producción.",
    tags: ["RH", "Turnos", "Nómina"],
  },
  {
    icon: ClipboardList,
    color: "text-amber-600",
    bg: "bg-amber-100",
    title: "Planeación y Secuenciación de O.P.",
    description:
      "Programación visual tipo Gantt de órdenes de producción con prioridades, fechas y carga de máquina en tiempo real.",
    tags: ["Gantt", "Scheduling", "Prioridades"],
  },
  {
    icon: ScanSearch,
    color: "text-blue-600",
    bg: "bg-blue-100",
    title: "Analizador de Preprensa con IA",
    description:
      "Auditoría automática de diseños con Gemini 1.5 Flash: detección de errores ortográficos, validación de imposición y reportes PDF.",
    tags: ["IA Gemini", "OCR", "Audit PDF"],
  },
];

/* ─── Component ───────────────────────────────────────────── */
export default function AllFeatures() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Subtle bg decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#0ea5e9]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative">

          {/* ── Page Header ──────────────────────────────── */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#0ea5e9]" />
              <span className="text-[#0ea5e9] text-sm font-semibold tracking-wide">
                Plataforma Completa
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Capacidades que{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Transforman
              </span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Descubra cómo FlexOS Control revoluciona cada aspecto de su operación con
              tecnologías de vanguardia diseñadas para la industria flexográfica.
            </p>
          </div>

          {/* ── GEMINI HERO CARD ──────────────────────────── */}
          <div className="relative mb-16 rounded-3xl overflow-hidden">
            {/* Rich gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-800" />
            {/* Animated mesh overlay */}
            <div className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(139,92,246,0.6) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.5) 0%, transparent 45%)",
              }}
            />
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 p-8 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side — text */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  {/* Official Google attribution badge */}
                  <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/25">
                    {/* Google multicolor G — the officially-permitted attribution mark */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="tracking-widest">POWERED BY GEMINI</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-amber-500 text-amber-950 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-400/30">
                    <Zap className="w-3 h-3" />
                    EN DESARROLLO
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  IA Vision:{" "}
                  <span className="text-violet-200">Calidad Cero Defectos</span>
                </h2>

                <p className="text-violet-100/90 text-lg leading-relaxed mb-8">
                  Google Gemini analiza fotografías de la impresión en{" "}
                  <strong className="text-white">tiempo real</strong>. Detecta hickies, mala
                  densidad, problemas de registro y desviación de color{" "}
                  <strong className="text-white">antes</strong> de que el rollo llegue a
                  inspección final — eliminando el rechazo del cliente.
                </p>

                {/* Capabilities grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: Eye, label: "Detección de Hickies" },
                    { icon: ScanSearch, label: "Master vs. Impresión" },
                    { icon: Cpu, label: "Registro de Color" },
                    { icon: Globe, label: "Defectos de Placa" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3 hover:bg-white/15 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-violet-200 flex-shrink-0" />
                      <span className="text-white text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/#contacto"
                  id="gemini-feature-cta"
                  className="inline-flex items-center gap-2 bg-white text-violet-700 hover:bg-violet-50 font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                >
                  <BrainCircuit className="w-5 h-5" />
                  Solicitar demostración de IA
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Right side — visual mockup */}
              <div className="relative">
                <div className="bg-[#111827]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  {/* Window chrome */}
                  <div className="px-4 py-3 bg-[#1f2937]/80 flex items-center gap-2 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="ml-2 text-xs text-slate-400 font-medium">
                      FlexOS Vision — Análisis en tiempo real
                    </span>
                    <span className="ml-auto flex items-center gap-1 text-emerald-400 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      LIVE
                    </span>
                  </div>

                  <div className="p-5 space-y-4">
                    {/* Scan preview bar */}
                    <div className="bg-[#1f2937] rounded-xl p-4 border border-slate-700/50">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-slate-300 text-sm font-medium">Análisis — Rollo #4821</span>
                        <span className="bg-violet-500/20 text-violet-300 text-xs font-bold px-2 py-1 rounded-full">Gemini 2.0</span>
                      </div>
                      {/* Simulated scan bar */}
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
                        <div className="h-full w-3/4 bg-gradient-to-r from-violet-500 to-blue-400 rounded-full" />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { label: "Registro", value: "99.2%", ok: true },
                          { label: "Densidad", value: "98.7%", ok: true },
                          { label: "Hickies", value: "0", ok: true },
                        ].map((stat) => (
                          <div key={stat.label} className="bg-[#111827] rounded-lg p-2.5 text-center">
                            <p className={`text-base font-bold ${stat.ok ? "text-emerald-400" : "text-red-400"}`}>
                              {stat.value}
                            </p>
                            <p className="text-slate-500 text-[10px] mt-0.5">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Detection results */}
                    <div className="space-y-2">
                      {[
                        { label: "Comparación vs. master original", status: "✓ Passed", ok: true },
                        { label: "Detección de defectos de placa", status: "✓ Passed", ok: true },
                        { label: "Análisis de color ΔE", status: "ΔE = 0.8", ok: true },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center justify-between bg-[#1f2937] rounded-lg px-3 py-2.5">
                          <span className="text-slate-300 text-xs">{row.label}</span>
                          <span className={`text-xs font-bold ${row.ok ? "text-emerald-400" : "text-red-400"}`}>
                            {row.status}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Footer verdict */}
                    <div className="bg-emerald-500/15 border border-emerald-400/30 rounded-xl px-4 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-emerald-300 font-bold text-sm">Aprobado por IA</p>
                        <p className="text-emerald-400/60 text-xs">Calidad certificada — Sin defectos detectados</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stat badge */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-2xl px-4 py-3 flex items-center gap-3 border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center">
                    <BrainCircuit className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-slate-800 text-sm font-extrabold leading-tight">-94% rechazos</p>
                    <p className="text-slate-400 text-xs">por defecto de impresión</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── All other features grid ──────────────────── */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Todas las Capacidades
            </h2>
            <p className="text-slate-500 mb-10">
              Cada módulo diseñado exclusivamente para la industria flexográfica.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#0ea5e9]/40 hover:shadow-lg transition-all duration-300 group"
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${feat.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${feat.color}`} />
                    </div>

                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#0ea5e9] transition-colors duration-200">
                      {feat.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {feat.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {feat.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Bottom CTA ───────────────────────────────── */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 70% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                ¿Listo para transformar su operación?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                Solicite una demostración personalizada y vea FlexOS Control en acción
                con sus propios datos de producción.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/#contacto"
                  id="all-features-demo-cta"
                  className="inline-flex items-center gap-2 bg-white text-[#0ea5e9] hover:bg-blue-50 font-bold px-7 py-4 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                >
                  <Sparkles className="w-5 h-5" />
                  Agendar Demo Gratuita
                </a>
                <a
                  href="/precios"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold px-7 py-4 rounded-xl transition-all duration-300"
                >
                  Ver Planes y Precios
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
