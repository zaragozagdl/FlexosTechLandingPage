import { CheckCircle2, Factory, Globe, PenTool, Rocket, FileText, UserPlus, Briefcase, PhoneCall } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      id: "essential",
      badge: "Essential",
      title: "Cotización e Ingeniería",
      desc: "Para plantas que buscan agilidad comercial y control de activos. Optimiza tu proceso de cotización y gestión de herramentales.",
      features: [
        "Cotizador técnico avanzado",
        "Generador de planos vectoriales",
        "Gestión de herramentales",
        "Calculadora de troqueles"
      ],
      icon: <PenTool className="text-white w-6 h-6" />,
      buttonText: "Solicitar Cotización",
      buttonIcon: <FileText className="w-4 h-4 mr-2" />,
      colorTheme: {
        bg: "bg-blue-500",
        text: "text-blue-600",
        border: "border-blue-100",
        iconBg: "bg-blue-600",
        button: "bg-blue-600 hover:bg-blue-700 text-white",
        check: "text-blue-600"
      }
    },
    {
      id: "growth",
      badge: "Growth",
      title: "Operaciones y OEE",
      desc: "Para empresas que buscan digitalizar el piso de producción y eliminar mermas. Monitorea tu OEE en tiempo real.",
      features: [
        "Todo en Essential +",
        "Terminal de operador",
        "Dashboard OEE en tiempo real",
        "Planificador visual",
        "Costeo real proactivo"
      ],
      icon: <Factory className="text-white w-6 h-6" />,
      buttonText: "Hablar con un Experto",
      buttonIcon: <UserPlus className="w-4 h-4 mr-2" />,
      colorTheme: {
        bg: "bg-emerald-500",
        text: "text-emerald-500",
        border: "border-emerald-500",
        iconBg: "bg-emerald-500",
        button: "bg-emerald-500 hover:bg-emerald-600 text-white",
        check: "text-emerald-500"
      }
    },
    {
      id: "enterprise",
      badge: "Enterprise",
      title: "Gestión 360°",
      desc: "Control total de la cadena de suministro y finanzas industriales. La solución completa para plantas maduras.",
      features: [
        "Todo en Growth +",
        "Módulo de almacén y logística",
        "Gestión de proyectos",
        "Facturación CFDI 4.0",
        "Soporte prioritario 24/7"
      ],
      icon: <Globe className="text-white w-6 h-6" />,
      buttonText: "Consultar Alcance",
      buttonIcon: <Briefcase className="w-4 h-4 mr-2" />,
      colorTheme: {
        bg: "bg-amber-500",
        text: "text-amber-500",
        border: "border-amber-100",
        iconBg: "bg-amber-500",
        button: "bg-amber-500 hover:bg-amber-600 text-white",
        check: "text-amber-500"
      }
    }
  ];

  return (
    <section id="precios" className="bg-[#f8faff] py-24 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-blue-600 border border-slate-100">
            <Rocket className="w-4 h-4 ml-1" />
            <span className="pr-1">Planes Flexibles</span>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Planes que <span className="text-blue-600">crecen con tu planta</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Elige la solución que se adapte a tus necesidades actuales. Escalarás cuando tu operación lo requiera, sin compromisos rígidos.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white rounded-[2rem] p-8 flex flex-col shadow-xl shadow-slate-200/50 transition-transform hover:-translate-y-1
                ${plan.id === 'growth' ? 'border-[3px] border-emerald-400 scale-[1.03] z-10' : 'border border-slate-200 mt-2 mb-2'}
              `}
            >
              
              {/* Card Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.colorTheme.iconBg}`}>
                {plan.icon}
              </div>

              {/* Badge */}
              <div className={`text-sm font-bold mb-4 ${plan.colorTheme.text}`}>
                {plan.badge}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{plan.title}</h3>
              
              {/* Description */}
              <p className="text-slate-500 text-sm mb-8 leading-relaxed md:h-[80px] lg:h-[60px]">
                {plan.desc}
              </p>
              
              {/* Features List */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 pt-0.5 ${plan.colorTheme.check}`} />
                    <span className="text-slate-600 text-sm leading-tight">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Call to Action */}
              <a href="#contacto" className={`w-full py-4 rounded-xl flex items-center justify-center font-bold transition-all mt-auto ${plan.colorTheme.button}`}>
                {plan.buttonIcon}
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>

        {/* Footer Question */}
        <div className="mt-16 text-center flex items-center justify-center gap-2 text-slate-600">
          <PhoneCall className="w-5 h-5 text-blue-600 rotate-[15deg]" />
          <span>¿No sabes cuál plan elegir? <a href="#contacto" className="font-bold text-blue-600 hover:text-blue-800 transition-colors">Hablemos</a> y te ayudamos a encontrar la mejor opción.</span>
        </div>

      </div>
    </section>
  );
}
