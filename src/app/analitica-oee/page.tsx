import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Activity, 
  BarChart3, 
  Clock, 
  Target, 
  TrendingUp, 
  DollarSign, 
  Users, 
  FileText, 
  CheckCircle2, 
  Gauge, 
  Award,
  ArrowRight,
  Play
} from "lucide-react";

export const metadata: Metadata = {
  title: "Analítica OEE y Telemetría IoT en Tiempo Real | FlexOS Control",
  description:
    "Monitoreo OEE en milisegundos para prensas flexográficas. Conexión directa a hardware IoT ESP32, cálculo de Disponibilidad, Rendimiento y Calidad, y pantallas Andon para piso de planta.",
  keywords: [
    "OEE flexografía",
    "telemetría IoT ESP32 imprenta",
    "Overall Equipment Effectiveness flexo",
    "pantallas Andon planta",
    "monitoreo de prensas en tiempo real",
    "reducción de tiempos muertos flexografía"
  ],
  alternates: {
    canonical: "https://flexoscontrol.com/analitica-oee",
  },
};

export default function OEEPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        
        {/* --- Hero Section --- */}
        <section className="bg-[#111827] relative overflow-hidden py-24 pb-32">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium mb-8">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Analítica Industrial</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Analítica <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">OEE Industrial</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed">
              Mida, analice y optimice la efectividad de sus equipos con nuestro sistema de monitoreo OEE en tiempo real. Conozca el verdadero potencial de su planta flexográfica.
            </p>

            {/* OEE Pillars Visualizer */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-16">
              {/* D */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 w-32 md:w-40 flex flex-col items-center justify-center shadow-lg backdrop-blur-sm">
                <span className="text-4xl font-black text-emerald-400 mb-1">D</span>
                <span className="text-slate-400 text-xs md:text-sm font-medium">Disponibilidad</span>
              </div>
              <span className="text-slate-500 text-xl font-bold">+</span>
              {/* R */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 w-32 md:w-40 flex flex-col items-center justify-center shadow-lg backdrop-blur-sm">
                <span className="text-4xl font-black text-blue-400 mb-1">R</span>
                <span className="text-slate-400 text-xs md:text-sm font-medium">Rendimiento</span>
              </div>
              <span className="text-slate-500 text-xl font-bold">+</span>
              {/* C */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 w-32 md:w-40 flex flex-col items-center justify-center shadow-lg backdrop-blur-sm">
                <span className="text-4xl font-black text-amber-400 mb-1">C</span>
                <span className="text-slate-400 text-xs md:text-sm font-medium">Calidad</span>
              </div>
              <span className="text-emerald-400 text-2xl font-bold">&rarr;</span>
              {/* OEE */}
              <div className="bg-emerald-500 rounded-2xl p-4 w-36 md:w-48 flex flex-col items-center justify-center shadow-emerald-500/20 shadow-xl">
                <span className="text-4xl font-black text-white mb-1">OEE</span>
                <span className="text-emerald-100 text-xs md:text-sm font-medium">Efectividad Global</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all w-full sm:w-auto shadow-lg shadow-blue-600/20">
                <Play className="w-5 h-5 fill-current" />
                Solicitar Demo
              </button>
              <button className="bg-transparent border border-slate-600 text-white hover:bg-slate-800 px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center transition-all w-full sm:w-auto">
                Ver Capacidades
              </button>
            </div>

          </div>
        </section>

        {/* --- Los 3 Pilares del OEE --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 px-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Los 3 Pilares del OEE</h2>
              <p className="text-slate-600 text-lg">
                El OEE se calcula multiplicando tres factores fundamentales que representan cada aspecto del rendimiento de su equipo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             
              {/* Pillar: Dispensabilidad */}
              <div className="bg-emerald-500 rounded-3xl p-8 text-white shadow-xl shadow-emerald-500/10 transform transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-400/50 rounded-xl flex items-center justify-center mb-8 backdrop-blur-sm">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-5xl font-black mb-2 opacity-90">D</h3>
                <h4 className="text-2xl font-bold mb-4">Disponibilidad</h4>
                <p className="text-emerald-50 mb-8 text-sm leading-relaxed">
                  Mide el tiempo que su equipo está operando versus el tiempo planificado de producción.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-200" />
                    <span className="text-sm font-medium">Registro de paros planificados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-200" />
                    <span className="text-sm font-medium">Seguimiento de mantenimiento</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-200" />
                    <span className="text-sm font-medium">Alertas de inactividad</span>
                  </div>
                </div>
              </div>

              {/* Pillar: Rendimiento */}
              <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-600/10 transform transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-500/50 rounded-xl flex items-center justify-center mb-8 backdrop-blur-sm">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-5xl font-black mb-2 opacity-90">R</h3>
                <h4 className="text-2xl font-bold mb-4">Rendimiento</h4>
                <p className="text-blue-50 mb-8 text-sm leading-relaxed">
                  Compara la velocidad real de producción contra la velocidad máxima o nominal del equipo.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-200" />
                    <span className="text-sm font-medium">Monitoreo de velocidad</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-200" />
                    <span className="text-sm font-medium">Ciclos por minuto reales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-200" />
                    <span className="text-sm font-medium">Análisis de micro-paros</span>
                  </div>
                </div>
              </div>

              {/* Pillar: Calidad */}
              <div className="bg-amber-500 rounded-3xl p-8 text-white shadow-xl shadow-amber-500/10 transform transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-amber-400/50 rounded-xl flex items-center justify-center mb-8 backdrop-blur-sm">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-5xl font-black mb-2 opacity-90">C</h3>
                <h4 className="text-2xl font-bold mb-4">Calidad</h4>
                <p className="text-amber-50 mb-8 text-sm leading-relaxed">
                  Evalúa la producción de productos buenos versus el total de unidades producidas.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-200" />
                    <span className="text-sm font-medium">Control de rechazos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-200" />
                    <span className="text-sm font-medium">Registro de desperdicios</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-200" />
                    <span className="text-sm font-medium">Trazabilidad por lote</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- Beneficios del Monitoreo OEE --- */}
        <section className="py-24 bg-[#f8faff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Beneficios del Monitoreo OEE</h2>
              <p className="text-slate-600 text-lg">
                Transforme sus datos de producción en acciones concretas que mejoren su rentabilidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Beneficio 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Visibilidad Total</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tableros en tiempo real que muestran el estado actual de cada máquina y el OEE consolidado de la planta.
                </p>
              </div>

              {/* Beneficio 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Identificación de Pérdidas</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Detecte y cuantifique las "6 grandes pérdidas": paros, reducción de velocidad, defectos y más.
                </p>
              </div>

              {/* Beneficio 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-5 h-5 text-amber-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Mejora Continua</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Establezca metas de mejora y haga seguimiento del progreso con KPIs claros y accesibles.
                </p>
              </div>

              {/* Beneficio 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Reducción de Costos</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Identifique oportunidades de ahorro en tiempo, materiales y energía con análisis de datos.
                </p>
              </div>

              {/* Beneficio 5 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-5 h-5 text-cyan-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Empowerment de Operadores</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Involucre a su equipo en la mejora al darles visibilidad de su desempeño y herramientas de control.
                </p>
              </div>

              {/* Beneficio 6 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-5 h-5 text-indigo-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">Reportes Detallados</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Genere reportes personalizados por máquina, turno, operador o periodo con gráficas exportables.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* --- Benchmarks de la Industria --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              {/* Left Side: Graphs */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Benchmarks de la Industria</h2>
                <p className="text-slate-600 text-lg mb-12">
                  Conozca cómo se compara su rendimiento contra los estándares de la industria flexográfica.
                </p>

                <div className="space-y-8">
                  {/* Item 1 */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <h4 className="font-bold text-slate-800">World Class OEE</h4>
                        <p className="text-xs text-slate-500">El estándar maestro de la industria</p>
                      </div>
                      <span className="font-bold text-emerald-500 text-lg">85%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <h4 className="font-bold text-slate-800">Buen Rendimiento</h4>
                        <p className="text-xs text-slate-500">Meta recomendada para iniciar</p>
                      </div>
                      <span className="font-bold text-blue-500 text-lg">70%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <h4 className="font-bold text-slate-800">Promedio Industrial</h4>
                        <p className="text-xs text-slate-500">Sin sistema de monitoreo OEE</p>
                      </div>
                      <span className="font-bold text-slate-500 text-lg">60%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-500 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 mt-8 relative">
                    {/* Highlight Sparkle */}
                    <div className="absolute -left-3 -top-3 hidden md:block">
                      <div className="bg-amber-500 text-white rounded-full p-2 shadow-lg">
                        <Target className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <h4 className="font-bold text-amber-600 text-lg">Tu Objetivo con FlexOS</h4>
                        <p className="text-xs text-amber-700/70">Con nuestro sistema de analítica</p>
                      </div>
                      <span className="font-bold text-amber-500 text-2xl">85%+</span>
                    </div>
                    <div className="h-4 w-full bg-amber-100/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full relative" style={{ width: '90%' }}>
                         {/* Stripe animation effect base */}
                         <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Side: Image/Dashboards */}
              <div className="w-full lg:w-1/2 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                    alt="Monitoring Dashboards" 
                    className="w-full h-auto object-cover opacity-90"
                  />
                  {/* Overlay gradient to make it look technical */}
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
                  
                  {/* Floating Notification Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur shadow-xl rounded-xl p-4 flex gap-6 items-center">
                    <div className="flex flex-col">
                      <span className="text-emerald-600 font-black text-xl">24/7</span>
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Monitoreo</span>
                    </div>
                    <div className="w-px h-8 bg-slate-200"></div>
                    <div className="flex flex-col">
                      <span className="text-blue-600 font-black text-xl">100%</span>
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Datos en tiempo real</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- Footer CTA --- */}
        <section className="bg-[#1e293b] py-20 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para Optimizar su OEE?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Descubra cómo nuestra analítica OEE puede transformar la eficiencia de su planta. Solicite una demostración personalizada y comience a medir lo que realmente importa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all w-full sm:w-auto shadow-lg shadow-blue-600/20">
                Agendar Demo Personalizada
              </button>
              <button className="bg-transparent border border-slate-600 text-white hover:bg-slate-800 px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all w-full sm:w-auto">
                <FileText className="w-5 h-5" />
                Contactar Ventas
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
