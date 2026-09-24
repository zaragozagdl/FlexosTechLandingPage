import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check, Settings, Package, ShoppingCart, Users, Briefcase, Calculator, Cpu, ShieldCheck, Mail, HeadphonesIcon, TrendingUp, Link2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Módulos del Sistema ERP & MES | FlexOS Control",
  description:
    "Conozca todos los módulos de FlexOS Control: Ingeniería y Herramentales, Producción y Piso (OEE), Ventas con 4 Cotizadores Flexo, Almacén con 3-Way Match CFDI 4.0, Calidad ISO 9001 y Asistente Virtual por Voz.",
  keywords: [
    "módulos ERP flexografía",
    "cotizador técnico etiquetas",
    "manga termoencogible software",
    "control de suajes y cilindros",
    "3-Way Match CFDI 4.0",
    "sistema MES para imprentas"
  ],
  alternates: {
    canonical: "https://flexoscontrol.com/modulos",
  },
};

export default function ModulosPage() {
  const mainModules = [
    {
      title: "Ingeniería y Herramental",
      color: "blue",
      icon: <Settings className="w-6 h-6 text-white" />,
      bgIcon: "bg-blue-600",
      textIcon: "text-blue-500",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
      desc: "Gestione sus especificaciones técnicas y requerimientos de pre-prensa con cálculos precisos y parámetros automatizados.",
      features: [
        "Fichas técnicas de suajes y herramental",
        "Calculadora de desarrollo (Engranajes/Repeticiones)",
        "Control de fotopolímeros e inventario de cilindros",
        "Gestión de colores directos y formulaciones",
        "Estandarización de tolerancias de calidad"
      ]
    },
    {
      title: "Producción y Piso",
      color: "emerald",
      icon: <Cpu className="w-6 h-6 text-white" />,
      bgIcon: "bg-emerald-500",
      textIcon: "text-emerald-500",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      desc: "Control total de sus líneas de impresión con recolección de datos en tiempo real mediante terminales táctiles y de voz.",
      features: [
        "Control de tiempos caídos y mermas (OEE)",
        "Terminal de operador en cada impresora",
        "Consumo de materias primas por lote",
        "Control de velocidades e impresiones",
        "Reportes de producción por turno/operador"
      ]
    },
    {
      title: "Ventas y CRM con 4 Cotizadores Flexo",
      color: "orange",
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      bgIcon: "bg-amber-500",
      textIcon: "text-amber-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      desc: "Automatice su flujo de ventas desde la cotización rápida hasta el cierre, con 4 cotizadores técnicos especializados para autoadheribles y mangas termoencogibles.",
      features: [
        "4 Cotizadores técnicos (Autoadheribles y Mangas, Básico y Avanzado)",
        "Física volumétrica de tintas por rodillo Anilox según química de transferencia",
        "Analizador interactivo de arte con pipeta para colores directos y descuento sustractivo CMYK",
        "Costeo paramétrico de Stickyback y reposición de suajes por metro lineal",
        "Desglose transparente en 7 factores de costo y cálculo de margen comercial real",
        "Portal de autorizaciones de clientes y pipeline comercial"
      ]
    },
    {
      title: "Almacén y Logística",
      color: "purple",
      icon: <Package className="w-6 h-6 text-white" />,
      bgIcon: "bg-purple-600",
      textIcon: "text-purple-500",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
      desc: "Optimice el flujo de materiales, desde la recepción de bobinas y tintas hasta el despacho de producto terminado.",
      features: [
        "Control de inventarios por lote y ubicación",
        "Lectura mediante códigos de barras/escaner",
        "Traspasos entre almacenes (Tintas, Papel, etc.)",
        "Planeación de abastecimiento (MRP II)",
        "Generación de remisiones y rutas de entrega"
      ]
    },
    {
      title: "Gestión de Proyectos",
      color: "cyan",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      bgIcon: "bg-cyan-500",
      textIcon: "text-cyan-500",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
      desc: "Coordine el desarrollo de nuevos productos (NPD) desde el diseño hasta la aprobación de la primera corrida.",
      features: [
        "Flujos de trabajo estructurados (Workflows)",
        "Revisión y aprobación de artes (Pre-prensa)",
        "Asignación de tareas por departamento",
        "Control de tiempos de entrega (Gantt)",
        "Gestión Documental integrada"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        
        {/* Header (Mismo estilo que OEE) */}
        <section className="bg-[#111827] relative overflow-hidden py-24 pb-32">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="inline-block bg-slate-800 border border-slate-700 text-blue-400 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider mb-6">
              TODOS LOS MÓDULOS
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Módulos del Sistema
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              FlexOS Control está diseñado estratégicamente en bloques modulares que se comunican entre sí para ofrecer una vista integral de su negocio, sin perder el enfoque industrial de la flexografía.
            </p>
          </div>
        </section>

        {/* Main Modules (Alternating Layout) */}
        <section className="bg-[#f4faff] pt-16 pb-24 -mt-10 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
            {mainModules.map((module, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={index} className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100`}>
                  
                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className={`w-14 h-14 ${module.bgIcon} rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                      {module.icon}
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-800 mb-4">{module.title}</h3>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                      {module.desc}
                    </p>
                    
                    <ul className="space-y-4">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 ${module.textIcon} mt-0.5 shrink-0`} strokeWidth={3} />
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                    <img src={module.image} alt={module.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* Call to action mid-page */}
        <div className="bg-[#111827] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Necesita más información?</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Podemos armar un paquete que se ajuste exactamente a las necesidades de su planta. Hablemos de sus requerimientos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                Solicitar Demo
              </button>
              <button className="bg-transparent border border-slate-600 text-white hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                <Mail className="w-5 h-5" /> Contactar Ventas
              </button>
            </div>
          </div>
        </div>

        {/* 5 Additional Modules Section */}
        <div className="bg-[#111827] py-24 max-w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
             NÚCLEO EMPRESARIAL
            </span>
            <h3 className="text-3xl font-extrabold text-white">
              5 Módulos Adicionales para una Gestión Integral
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            
            {/* Ventas y Mercadotecnia Addon */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
               <div className="flex items-center gap-3 mb-4">
                 <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><TrendingUp className="w-6 h-6" /></div>
                 <h4 className="text-xl font-bold text-slate-800">Ventas y Facturación</h4>
               </div>
               <p className="text-slate-500 text-sm mb-6">Emisión de facturas (CFDI 4.0), complementos de pago y notas de crédito totalmente automatizadas.</p>
               <ul className="space-y-2 text-sm text-slate-600">
                 <li className="flex gap-2"><Check className="w-5 h-5 text-blue-500 shrink-0" /> Facturación Electrónica Multi-moneda</li>
                 <li className="flex gap-2"><Check className="w-5 h-5 text-blue-500 shrink-0" /> Control de comisiones a vendedores</li>
               </ul>
            </div>

            {/* Finanzas y Contabilidad Addon */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-emerald-500 hover:shadow-lg transition-shadow">
               <div className="flex items-center gap-3 mb-4">
                 <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><Calculator className="w-6 h-6" /></div>
                 <h4 className="text-xl font-bold text-slate-800">Finanzas y Contabilidad</h4>
               </div>
               <p className="text-slate-500 text-sm mb-6">Controle el flujo de efectivo, cuentas por cobrar, cuentas por pagar y contabilidad general de la empresa.</p>
               <ul className="space-y-2 text-sm text-slate-600">
                 <li className="flex gap-2"><Check className="w-5 h-5 text-emerald-500 shrink-0" /> Cuentas por Cobrar y Pagar (CxC / CxP)</li>
                 <li className="flex gap-2"><Check className="w-5 h-5 text-emerald-500 shrink-0" /> Pólizas contables automáticas</li>
               </ul>
            </div>

            {/* RRHH Addon */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
               <div className="flex items-center gap-3 mb-4">
                 <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Users className="w-6 h-6" /></div>
                 <h4 className="text-xl font-bold text-slate-800">Recursos Humanos</h4>
               </div>
               <p className="text-slate-500 text-sm mb-6">Administre al personal, asistencias, destajos de producción, bonos y prenómina sin complicaciones.</p>
               <ul className="space-y-2 text-sm text-slate-600">
                 <li className="flex gap-2"><Check className="w-5 h-5 text-purple-500 shrink-0" /> Control de accesos y asistencias</li>
                 <li className="flex gap-2"><Check className="w-5 h-5 text-purple-500 shrink-0" /> Cálculo de destajo y bonos por desempeño (OEE)</li>
               </ul>
            </div>

            {/* Proveedores Addon */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-amber-500 hover:shadow-lg transition-shadow">
               <div className="flex items-center gap-3 mb-4">
                 <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><HeadphonesIcon className="w-6 h-6" /></div>
                 <h4 className="text-xl font-bold text-slate-800">Gestión de Proveedores</h4>
               </div>
               <p className="text-slate-500 text-sm mb-6">Automatice el abastecimiento y evaluación de sus proveedores estratégicos de papel, tintas y refacciones.</p>
               <ul className="space-y-2 text-sm text-slate-600">
                 <li className="flex gap-2"><Check className="w-5 h-5 text-amber-500 shrink-0" /> Calificación y evaluación ISO 9001</li>
                 <li className="flex gap-2"><Check className="w-5 h-5 text-amber-500 shrink-0" /> Portal B2B para órdenes de compra</li>
               </ul>
            </div>
            
            {/* Center Bottom: BI */}
            <div className="md:col-span-2 flex justify-center mt-4">
              <div className="bg-white w-full md:w-2/3 p-8 rounded-2xl shadow-lg border-t-4 border-cyan-500 hover:shadow-xl transition-shadow text-center">
                 <div className="flex items-center justify-center gap-3 mb-4">
                   <div className="bg-cyan-100 p-2 rounded-lg text-cyan-600"><TrendingUp className="w-6 h-6" /></div>
                   <h4 className="text-xl font-bold text-slate-800">Business Intelligence (BI)</h4>
                 </div>
                 <p className="text-slate-500 text-sm mb-6">Dashboard directivo e indicadores clave de rendimiento (KPIs) en tiempo real para tomar el control de la planta.</p>
                 <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
                   <div className="flex gap-2 items-center"><Check className="w-5 h-5 text-cyan-500 shrink-0" /> Gráficas Interactivas 3D</div>
                   <div className="flex gap-2 items-center"><Check className="w-5 h-5 text-cyan-500 shrink-0" /> Cubos OLAP y Reportes a Medida</div>
                 </div>
              </div>
            </div>

          </div>

          </div>
        </div>

        {/* Final Blue Footer CTA */}
        <div className="bg-blue-600 py-20 px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Listo para Integrar sus Procesos?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Descubra cómo nuestras soluciones modulares pueden transformar y potencializar sus operaciones de empaque.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors shadow-lg">
               Solicitar Demo en Vivo
             </button>
             <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors border border-blue-500">
               Ver Precios
             </button>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
