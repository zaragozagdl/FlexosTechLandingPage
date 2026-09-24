import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-slate-400 py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Column 1 & 2: Product Brand */}
          <div className="md:col-span-2 space-y-4">
            <a href="/" className="inline-block">
              <Image
                src="/logo_control.png"
                alt="FlexOS Control"
                width={240}           
                height={60}
                className="h-[55px] w-auto object-contain"
              />
            </a>
            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              El Sistema ERP/MES integral diseñado exclusivamente para transformar y escalar plantas convertidoras de etiquetas autoadheribles, empaque flexible y manga termoencogible.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-cyan-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              FlexOS Suite PRO V6 • Operación y Convocatoria MVP Activa
            </div>
          </div>
          
          {/* Column 3: Ecosistema & Productos */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Ecosistema & Productos</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#caracteristicas" className="hover:text-cyan-400 transition-colors">Capacidades Core</a></li>
              <li><a href="/#asistente-capacitacion" className="hover:text-cyan-400 transition-colors">Asistente Virtual por Voz</a></li>
              <li><a href="/modulos" className="hover:text-cyan-400 transition-colors">10 Módulos Nativos</a></li>
              <li><a href="/analitica-oee" className="hover:text-cyan-400 transition-colors">Analítica OEE Industrial</a></li>
              <li><a href="/precios" className="hover:text-cyan-400 transition-colors">Precios y Planes</a></li>
              <li className="pt-2 border-t border-slate-800/80">
                <a 
                  href="https://dietrackerpro.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 font-medium transition-colors"
                >
                  <span>DieTracker Pro Suite</span>
                  <span className="text-[10px] bg-red-950/80 text-red-400 border border-red-800/60 px-1.5 py-0.5 rounded font-bold">Troqueles</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://flexos.tech" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  <span>FlexOS Technologies</span>
                  <span className="text-[10px] bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 px-1.5 py-0.5 rounded font-bold">Matriz</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Soluciones & Legal */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Compañía & Soporte</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#contacto" className="hover:text-cyan-400 transition-colors text-cyan-300 font-medium">🌟 Programa MVP Pioneros</a></li>
              <li><a href="/#preguntas-frecuentes" className="hover:text-cyan-400 transition-colors">Preguntas Frecuentes (FAQ)</a></li>
              <li><a href="/#contacto" className="hover:text-cyan-400 transition-colors">Agendar Demostración</a></li>
              <li><a href="/privacidad" className="hover:text-cyan-400 transition-colors">Aviso de Privacidad</a></li>
              <li><a href="/terminos" className="hover:text-cyan-400 transition-colors">Términos de Servicio</a></li>
            </ul>
          </div>
        </div>
        
        {/* Corporate Endorsement Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Una solución desarrollada e impulsada por
            </span>
            <a
              href="https://flexos.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity"
              title="FlexOS Technologies SAS de CV"
            >
              <Image
                src="/logo_technologies.png"
                alt="FlexOS Technologies SAS de CV"
                width={260}
                height={55}
                className="h-[38px] sm:h-[44px] w-auto object-contain"
              />
            </a>
          </div>

          <div className="text-xs text-slate-400 text-center md:text-right">
            <p className="text-slate-300 font-medium">
              Guadalajara, Jalisco, México •{" "}
              <a 
                href="https://flexos.tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-400 hover:underline font-semibold"
              >
                flexos.tech
              </a>
            </p>
            <p className="text-slate-500">Innovación y Software de Misión Crítica para Flexografía y Empaque</p>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-6 pt-6 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} FlexOS Technologies SAS de CV. Todos los derechos reservados.</p>
          <p>
            Ecosistema:{" "}
            <a href="/" className="text-slate-400 hover:text-cyan-400 transition-colors">FlexOS Control</a>
            {" • "}
            <a 
              href="https://dietrackerpro.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-red-400 transition-colors"
            >
              DieTracker Pro
            </a>
            {" • "}
            <a 
              href="https://flexos.tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              flexos.tech
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
