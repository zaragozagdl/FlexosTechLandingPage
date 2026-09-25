"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Monitor,
  Key,
  UserCheck,
  Lightbulb,
  AlertTriangle,
  Shield,
  Ban,
  RefreshCw,
  Scale,
  Mail,
  ChevronDown,
} from "lucide-react";

interface Section {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const CheckIcon = () => (
  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
    <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

export default function TermsConditions() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggle = (id: number) => setOpenSection(openSection === id ? null : id);

  const sections: Section[] = [
    {
      id: 1,
      icon: <FileText className="w-5 h-5 text-white" />,
      title: "Aceptación de los Términos",
      content: (
        <p className="text-slate-300 leading-relaxed">
          Al acceder y utilizar el portal web, los servicios de desarrollo o cualquiera de las plataformas y servicios provistos por{" "}
          <span className="text-cyan-400 font-semibold">FlexOS Technologies SAS de CV</span>, usted reconoce haber leído, entendido y aceptado los presentes Términos y Condiciones de Servicio. Si no está de acuerdo con cualquiera de estas estipulaciones, deberá abstenerse de utilizar nuestras plataformas o contratar nuestros servicios.
        </p>
      ),
    },
    {
      id: 2,
      icon: <Monitor className="w-5 h-5 text-white" />,
      title: "Alcance de los Servicios y Ecosistema Tecnológico",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">
            <span className="text-white font-semibold">FlexOS Technologies SAS de CV</span> es una firma especializada en ingeniería de software industrial, automatización y plataformas SaaS de manufactura que provee:
          </p>
          <ul className="space-y-2.5">
            {[
              "Plataformas SaaS Industriales: FlexOS Control (ERP/MES flexográfico), Die Tracker Pro (gestión de herramentales) y KromaNode Lab.",
              "Desarrollo de Software Web a Medida: Portales cloud de alto rendimiento, arquitecturas distribuidas y sistemas de misión crítica.",
              "Aplicaciones Móviles Nativas: Soluciones de piso y corporativas en iOS y Android con sincronización en tiempo real.",
              "Automatización Industrial & Hardware IoT: Programación de PLCs (Siemens, Allen-Bradley, Omron), telemetría MQTT/OPC-UA e interfaces HMI.",
              "Consultoría Técnica y Despliegue en Planta: Capacitación, acompañamiento operativo y acuerdos de nivel de servicio (SLA).",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-slate-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      icon: <Key className="w-5 h-5 text-white" />,
      title: "Licenciamiento de Software y Propiedad Intelectual",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            <span className="text-white font-semibold">FlexOS Technologies SAS de CV</span> otorga al cliente una licencia{" "}
            <span className="text-cyan-400 font-medium">no exclusiva, intransferible y de uso temporal o conforme a contrato</span> para el uso de sus plataformas SaaS o entregables a medida.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Todos los derechos de propiedad intelectual, marcas registradas, código fuente, algoritmos, modelos de datos, arquitectura de software y secretos comerciales relativos a FlexOS Control, Die Tracker Pro y la infraestructura base son y permanecerán como propiedad exclusiva de FlexOS Technologies SAS de CV.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      icon: <UserCheck className="w-5 h-5 text-white" />,
      title: "Responsabilidades y Obligaciones del Cliente",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">El cliente y sus usuarios autorizados se comprometen a:</p>
          <ul className="space-y-2.5">
            {[
              "Mantener la estricta confidencialidad de las credenciales y tokens de acceso a los sistemas.",
              "No intentar realizar ingeniería inversa, descompilar ni replicar el código de las plataformas.",
              "Proveer información verídica y mantener actualizados los datos de contacto y facturación.",
              "Utilizar las plataformas y servicios dentro del marco de la legalidad vigente.",
              "Asegurar la compatibilidad eléctrica y de red en instalaciones físicas de hardware o integración con PLCs.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-slate-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 5,
      icon: <AlertTriangle className="w-5 h-5 text-white" />,
      title: "Garantías y Nivel de Servicio (SLA)",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Nuestros servicios en la nube están diseñados bajo arquitecturas de alta disponibilidad con un objetivo de uptime del 99.9%. Las ventanas de mantenimiento programado se notificarán con anticipación razonable.
          </p>
          <div className="p-4 rounded-xl bg-[#0b1222] border border-[#1e293b]">
            <p className="text-slate-400 text-xs leading-relaxed">
              En ningún caso FlexOS Technologies SAS de CV será responsable por pérdidas indirectas de producción causadas por fallas en el suministro eléctrico del cliente, interrupciones de conectividad a internet de terceros o mala manipulación de maquinaria de planta por personal no autorizado.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      icon: <Shield className="w-5 h-5 text-white" />,
      title: "Protección de Datos y Confidencialidad",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            El tratamiento de datos personales se rige por nuestro{" "}
            <Link href="/privacidad" className="text-cyan-400 hover:underline font-medium">
              Aviso de Privacidad
            </Link>
            . Las partes reconocen que cualquier información técnica, operativa, recetas de color o formulaciones de manufactura compartidas durante la relación contractual tienen carácter de Secreto Industrial y están protegidas por la Ley Federal de Protección a la Propiedad Industrial.
          </p>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30">
            <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <p className="text-cyan-300 text-sm">
              Garantizamos estricta confidencialidad bajo estándares NDA y protocolos de seguridad en la nube.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      icon: <Ban className="w-5 h-5 text-white" />,
      title: "Suspensión y Terminación",
      content: (
        <p className="text-slate-300 leading-relaxed">
          FlexOS Technologies se reserva el derecho de suspender o revocar el acceso a las plataformas en caso de incumplimiento grave de estos términos, omisión de pago o violaciones de propiedad intelectual. El cliente podrá solicitar la rescisión de su servicio conforme a las condiciones acordadas en su contrato comercial mediante comunicación a{" "}
          <span className="text-cyan-400 font-mono-tech">contacto@flexostechnologies.com</span>.
        </p>
      ),
    },
    {
      id: 8,
      icon: <Scale className="w-5 h-5 text-white" />,
      title: "Legislación Aplicable y Jurisdicción",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Estos Términos y Condiciones se rigen e interpretan de conformidad con las leyes vigentes de los{" "}
            <span className="text-white font-medium">Estados Unidos Mexicanos</span>.
          </p>
          <div className="p-4 rounded-xl bg-[#0b1222] border border-[#1e293b]">
            <p className="text-slate-300 text-sm">
              <span className="font-semibold text-white">Jurisdicción:</span> Para cualquier controversia, las partes se someten expresamente a la jurisdicción de los tribunales competentes de la ciudad de{" "}
              <span className="text-cyan-400 font-medium">Guadalajara, Jalisco, México</span>, renunciando a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="py-16 px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-800/40 mb-6">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-mono-tech uppercase tracking-wider">Marco Contractual & Licenciamiento</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Términos y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400">
              Condiciones
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Condiciones generales de uso, licenciamiento de software y servicios de ingeniería provistos por{" "}
            <span className="text-slate-200 font-medium">FlexOS Technologies SAS de CV</span>.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-slate-500 font-mono-tech text-xs">
            <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
            <span>Última actualización: Septiembre 2026 • FlexOS Technologies SAS de CV</span>
          </div>
        </div>

        {/* Sections Accordion */}
        <div className="space-y-3">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-[#080d1a]/90 backdrop-blur-md rounded-2xl overflow-hidden border border-[#1e293b] hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              <button
                onClick={() => toggle(section.id)}
                className="w-full flex items-center gap-4 p-5 sm:p-6 text-left group"
                aria-expanded={openSection === section.id}
                id={`terms-section-${section.id}`}
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400 transition-colors">
                  {section.icon}
                </div>

                <div className="flex-1">
                  <span className="text-[10px] font-mono-tech text-cyan-400/70 uppercase tracking-widest block">
                    SECCIÓN {section.id.toString().padStart(2, "0")}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {section.title}
                  </h2>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                    openSection === section.id ? "rotate-180 text-cyan-400" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openSection === section.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 sm:px-6 pb-6 border-t border-[#1e293b]/70 pt-5 text-sm">
                    {section.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6 text-sm">
            ¿Tiene alguna duda legal o requiere un acuerdo contractual personalizado?
          </p>
          <Link
            href="/#contacto"
            id="terms-contact-cta"
            className="btn-tech-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg shadow-cyan-500/20"
          >
            <Mail className="w-4 h-4" />
            <span>Contactar al Área Legal y Comercial</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
