import { UserSearch, Truck, BadgeCheck } from "lucide-react";

export default function PortalsB2B() {
  return (
    <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-cyan-300 text-sm font-semibold mb-6 border border-blue-500/30">
          EXTENSIÓN EXTERNA
        </span>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Portales B2B que Reducen tu Carga Operativa
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
          Deje de enviar correos. FlexOS Control le da acceso controlado a sus stakeholders externos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* Cliente */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl p-8 border border-blue-500/30 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform">
              <UserSearch size={120} />
            </div>
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md">
              <UserSearch className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Portal del Cliente</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center gap-2"><span>&bull;</span> Aprobaciones de Pre-Prensa</li>
              <li className="flex items-center gap-2"><span>&bull;</span> Rastreo de Entregas GPS</li>
              <li className="flex items-center gap-2"><span>&bull;</span> Petición de Repeticiones</li>
            </ul>
          </div>

          {/* Proveedor */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-900 rounded-2xl p-8 border border-emerald-500/30 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform">
              <Truck size={120} />
            </div>
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md">
              <Truck className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Portal del Proveedor</h3>
            <ul className="space-y-3 text-emerald-100">
              <li className="flex items-center gap-2"><span>&bull;</span> Concursos de Licitación</li>
              <li className="flex items-center gap-2"><span>&bull;</span> Fechas de Recepción en Almacén</li>
              <li className="flex items-center gap-2"><span>&bull;</span> Estado de Cuentas x Pagar</li>
            </ul>
          </div>
          
          {/* Empleado */}
          <div className="bg-gradient-to-br from-orange-500 to-rose-700 rounded-2xl p-8 border border-orange-500/30 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform">
              <BadgeCheck size={120} />
            </div>
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md">
              <BadgeCheck className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Portal del Empleado</h3>
            <ul className="space-y-3 text-orange-100">
              <li className="flex items-center gap-2"><span>&bull;</span> Registro de Asistencia y Turnos</li>
              <li className="flex items-center gap-2"><span>&bull;</span> Solicitud de Permisos e Incidencias</li>
              <li className="flex items-center gap-2"><span>&bull;</span> Consulta de Nómina y Recibos</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
