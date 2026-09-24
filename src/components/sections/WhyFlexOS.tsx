import { Check } from "lucide-react";

export default function WhyFlexOS() {
  return (
    <section className="bg-[#f4faff] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decoration blob */}
            <div className="absolute -inset-4 bg-blue-100/50 rounded-[3rem] blur-xl -z-10 transform -rotate-3"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
              alt="Operador de máquina flexográfica usando FlexOS Control" 
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl relative z-10 border-4 border-white/50"
            />
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1528] mb-6 leading-tight">
                ¿Por qué elegir FlexOS Control?
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Diseñado específicamente para las necesidades únicas de la industria flexográfica, con funcionalidades que realmente impactan su rentabilidad.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Item 1 */}
              <div className="flex items-start gap-4 group">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold mb-1">Reducción de costos operativos</h4>
                  <p className="text-slate-500 text-sm">
                    Identifique ineficiencias y optimice recursos con datos en tiempo real.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4 group">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold mb-1">Trazabilidad completa</h4>
                  <p className="text-slate-500 text-sm">
                    Rastree cada producto desde materia prima hasta entrega final.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4 group">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold mb-1 flex items-center gap-2 flex-wrap">
                    Cumplimiento normativo
                  </h4>
                  <p className="text-slate-500 text-sm mt-1 flex items-center flex-wrap gap-2">
                    Facturación CFDI 4.0 y códigos SAT integrados 
                    <span className="bg-amber-100/80 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full inline-block">
                      (En desarrollo)
                    </span>
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-4 group">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-purple-500 group-hover:scale-110 transition-transform" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-slate-800 font-bold mb-1">Interfaz intuitiva</h4>
                  <p className="text-slate-500 text-sm">
                    Curva de aprendizaje mínima con terminal de voz manos libres.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
