import { PackageSearch, Boxes, FileCheck2, Factory, Truck, ArrowRight, ShieldCheck, Percent, FileText } from "lucide-react";

export default function TraceabilityFlow() {
  const steps = [
    {
      id: 1,
      title: "Recepciones",
      desc: "Entrada de materia prima con captura de lote, proveedor y fecha de caducidad",
      color: "bg-emerald-500",
      arrowColor: "text-emerald-500",
      icon: <PackageSearch className="w-8 h-8 text-white opacity-90" />,
      isHighlight: false
    },
    {
      id: 2,
      title: "Almacén",
      desc: "Transformaciones, consumos y trazabilidad de lotes FIFO/FEFO",
      color: "bg-teal-500",
      arrowColor: "text-teal-500",
      icon: <Boxes className="w-8 h-8 text-white opacity-90" />,
      isHighlight: false
    },
    {
      id: 3,
      title: "3-Way Match",
      desc: "Conciliación automática:\nOrden → Recepción → Factura CFDI 4.0",
      color: "bg-blue-500",
      arrowColor: "text-blue-500",
      icon: <FileCheck2 className="w-8 h-8 text-white opacity-90" />,
      isHighlight: true,
      badge: "AUTO"
    },
    {
      id: 4,
      title: "Producción",
      desc: "Consumo real por lote, registro de inicio/fin y scrap",
      color: "bg-purple-500",
      arrowColor: "text-purple-500",
      icon: <Factory className="w-8 h-8 text-white opacity-90" />,
      isHighlight: false
    },
    {
      id: 5,
      title: "Entrega",
      desc: "Remisión vinculada al pedido original y CFDI de egresos",
      color: "bg-orange-500",
      arrowColor: "text-orange-500",
      icon: <Truck className="w-8 h-8 text-white opacity-90" />,
      isHighlight: false
    }
  ];

  const auditFeatures = [
    {
      title: "Auditoría Completa",
      desc: "Cada producto terminado puede rastrearse hasta la materia prima exacta y el turno que lo produjo.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      colorType: "emerald"
    },
    {
      title: "Eliminación de Discrepancias",
      desc: "La conciliación automática detecta diferencias de precio, cantidad o calidad antes de pagar.",
      icon: <Percent className="w-6 h-6 text-white" />,
      colorType: "blue"
    },
    {
      title: "CFDI 4.0 Integrado",
      desc: "Complemento de pagos 2.0, relación de documentos fiscales y UUIDs cruzados automáticamente.",
      icon: <FileText className="w-6 h-6 text-white" />,
      colorType: "purple"
    }
  ];

  return (
    <section className="bg-white py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="invisible"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1528] mb-6">
            Trazabilidad 360º con Conciliación Automatizada
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto">
            Conecta cada lote de materia prima con su factura CFDI 4.0 y la remisión de salida. Sin
            inconsistencias, sin procesos manuales.
          </p>
        </div>

        {/* Cards Row Container */}
        <div className="relative mb-20">
          {/* Background traversing line */}
          <div className="hidden lg:block absolute top-[40%] left-0 w-full h-0.5 bg-teal-200/50 -z-10 translate-y-1/2"></div>
          
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-6 relative">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex-1 flex flex-col items-center group">
                
                <div 
                  className={`
                    w-full min-h-[220px] rounded-3xl p-6 flex flex-col items-center justify-start relative text-white shadow-lg transition-transform hover:-translate-y-1 relative
                    ${step.color}
                    ${step.isHighlight ? 'ring-4 ring-yellow-400 ring-offset-2' : ''}
                  `}
                >
                  {step.badge && (
                    <div className="absolute -top-3 right-4 bg-yellow-400 text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {step.badge}
                    </div>
                  )}

                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    {step.icon}
                  </div>

                  <h3 className="font-bold text-lg mb-3 tracking-wide">{step.title}</h3>
                  <p className="text-sm text-center text-white/90 leading-snug whitespace-pre-line">
                    {step.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="mt-6 flex lg:hidden xl:flex items-center justify-center">
                    <ArrowRight className={`w-5 h-5 ${step.arrowColor}`} />
                  </div>
                )}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex xl:hidden mt-6 items-center justify-center">
                    <ArrowRight className={`w-4 h-4 ${step.arrowColor}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Audit Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {auditFeatures.map((feat, idx) => {
            let containerStyles = "";
            let iconStyles = "";
            
            if (feat.colorType === 'emerald') {
              containerStyles = "bg-emerald-50/50 border-emerald-100/60";
              iconStyles = "bg-emerald-500";
            } else if (feat.colorType === 'blue') {
              containerStyles = "bg-blue-50/50 border-blue-100/60";
              iconStyles = "bg-blue-500";
            } else {
              containerStyles = "bg-purple-50/50 border-purple-100/60";
              iconStyles = "bg-purple-500";
            }
            
            return (
              <div key={idx} className={`p-6 rounded-2xl border ${containerStyles} flex flex-col items-start transition-shadow hover:shadow-md h-full`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${iconStyles}`}>
                    {feat.icon}
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg leading-tight">{feat.title}</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
