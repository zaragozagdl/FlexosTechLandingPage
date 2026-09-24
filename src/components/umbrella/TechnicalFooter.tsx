"use client";

import Image from "next/image";
import { ArrowUpRight, Radio, Shield, Terminal, Mail, Phone, MapPin } from "lucide-react";

export default function TechnicalFooter() {
  return (
    <footer className="w-full bg-[#04060a] border-t border-[#1e293b] pt-16 pb-12 font-mono-tech text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1e293b]">
          
          {/* Col 1 & 2: Brand & Architecture Summary */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="inline-block group py-1">
              <Image
                src="/logo_technologies.png"
                alt="FlexOS Technologies"
                width={220}
                height={46}
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </a>
            
            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              Casa matriz de ingeniería de software industrial especializada en sistemas de ejecución de manufactura (MES), telemetría en tiempo real y trazabilidad de activos para la industria de conversión gráfica.
            </p>

            <div className="p-3 rounded-lg bg-[#070b16] border border-[#1e293b] inline-block">
              <div className="flex items-center gap-2 text-[11px] text-slate-300">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-bold">ALL PLATFORMS OPERATIONAL</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-1">
                Cluster MX-Central • 99.99% Uptime 2026
              </div>
            </div>
          </div>

          {/* Col 3: Ecosistema de Plataformas */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 text-cyan-400">
              // PLATAFORMAS
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://flexoscontrol.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors group"
                >
                  <span className="group-hover:text-sky-400 font-bold">FlexOS Control</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-sky-400" />
                </a>
                <span className="text-[10px] text-slate-400 block font-sans">ERP & MES para Flexografía</span>
              </li>
              <li className="pt-2">
                <a 
                  href="https://dietrackerpro.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors group"
                >
                  <span className="group-hover:text-amber-400 font-bold">Die Tracker Pro</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-amber-400" />
                </a>
                <span className="text-[10px] text-slate-400 block font-sans">Gestión de Suajes & Troqueles</span>
              </li>
              <li className="pt-2">
                <a 
                  href="#ecosistema" 
                  className="hover:text-white flex items-center gap-1.5 transition-colors group"
                >
                  <span className="group-hover:text-cyan-400 font-bold">KromaNode Lab</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-cyan-400" />
                </a>
                <span className="text-[10px] text-slate-400 block font-sans">Colorimetría CIE Lab ΔE</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Servicios de Ingeniería a Medida */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 text-cyan-400">
              // SERVICIOS A MEDIDA
            </h4>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li>• Sistemas Web & Portales Cloud</li>
              <li>• Apps Móviles Nativas (iOS/Android)</li>
              <li>• Automatización & Programación PLC</li>
              <li>• Hardware IoT & Microcontroladores</li>
              <li>• Telemetría de Prensa en Tiempo Real</li>
              <li>• Integración con Maquinaria Legacy</li>
            </ul>
          </div>

          {/* Col 5: Contacto Directo */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 text-cyan-400">
              // CONTACTO TÉCNICO
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:ventas@flexos.tech" className="hover:text-white transition-colors">
                  ventas@flexos.tech
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>+52 (33) 4874-2297</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Guadalajara, Jalisco, México</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 FlexOS Technologies SAS de CV. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Shield className="w-3 h-3 text-cyan-400" />
              Secreto Industrial & Propiedad Intelectual Protegida
            </span>
            <a href="https://flexoscontrol.com/privacidad" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              Privacidad
            </a>
            <a href="https://flexoscontrol.com/terminos" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              Términos
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
