"use client";

import { useState } from "react";
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
  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center">
    <svg className="w-3 h-3 text-[#10b981]" viewBox="0 0 12 12" fill="none">
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
      title: "Aceptación de Términos",
      content: (
        <p className="text-slate-600 leading-relaxed">
          Al acceder y utilizar la plataforma{" "}
          <span className="text-[#0ea5e9] font-semibold">FlexOS Control</span>, usted reconoce
          haber leído, entendido y aceptado los presentes Términos y Condiciones. Si no está
          de acuerdo con estos términos, por favor no utilice nuestros servicios.
        </p>
      ),
    },
    {
      id: 2,
      icon: <Monitor className="w-5 h-5 text-white" />,
      title: "Descripción del Servicio",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">
            <span className="text-slate-800 font-semibold">FlexOS Control</span> es una
            plataforma ERP/MES diseñada específicamente para la industria flexográfica que
            incluye:
          </p>
          <ul className="space-y-2.5">
            {[
              "Módulo de Ingeniería y Herramental",
              "Módulo de Producción y Piso",
              "Módulo de Ventas y CRM",
              "Módulo de Almacén y Logística",
              "Módulo de Gestión de Proyectos",
              "Módulo de Analítica e Industria 4.0",
              "Módulo de Recursos Humanos",
              "Módulo de Administración y Finanzas",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-slate-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-500 text-sm italic">
            Los módulos disponibles dependen del plan de suscripción contratado.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      icon: <Key className="w-5 h-5 text-white" />,
      title: "Licencia de Uso",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 leading-relaxed">
            <span className="text-slate-800 font-semibold">FlexOS Technologies SAS de CV</span>{" "}
            otorga al cliente una licencia{" "}
            <span className="text-slate-800 font-medium">
              no exclusiva, intransferible y limitada
            </span>{" "}
            para utilizar la plataforma FlexOS Control conforme al plan de suscripción
            contratado.
          </p>
          <div className="p-4 rounded-xl bg-red-50 border border-red-200">
            <p className="text-red-700 text-sm font-medium mb-2 flex items-center gap-2">
              <Ban className="w-4 h-4" /> Queda estrictamente prohibido:
            </p>
            <ul className="space-y-1.5">
              {[
                "Copiar, modificar o distribuir el software",
                "Vender o sublicenciar el acceso a terceros",
                "Realizar ingeniería inversa o descompilar el código",
                "Usar el servicio para fines ilegales o no autorizados",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-red-600 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      icon: <UserCheck className="w-5 h-5 text-white" />,
      title: "Cuentas de Usuario",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">El usuario es responsable de:</p>
          <ul className="space-y-3">
            {[
              "Mantener la confidencialidad de sus credenciales de acceso",
              "Todas las actividades que ocurran bajo su cuenta",
              "Notificar inmediatamente cualquier uso no autorizado",
              "Proporcionar información veraz y actualizada en su perfil",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-slate-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
            <p className="text-blue-700 text-sm">
              <span className="font-semibold">Nota:</span> FlexOS Control no será responsable
              de pérdidas derivadas del uso no autorizado de su cuenta cuando el usuario haya
              omitido notificarnos oportunamente.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      icon: <Lightbulb className="w-5 h-5 text-white" />,
      title: "Propiedad Intelectual",
      content: (
        <p className="text-slate-600 leading-relaxed">
          Todo el contenido, software, diseño, código fuente, algoritmos y demás elementos de{" "}
          <span className="text-[#0ea5e9] font-semibold">FlexOS Control</span> son propiedad
          intelectual de{" "}
          <span className="text-slate-800 font-medium">FlexOS Technologies SAS de CV</span>
          Está prohibida la reproducción total o parcial sin autorización expresa. Las marcas
          comerciales, logotipos y nombres de productos son propiedad de sus respectivos
          dueños.
        </p>
      ),
    },
    {
      id: 6,
      icon: <AlertTriangle className="w-5 h-5 text-white" />,
      title: "Limitación de Responsabilidad",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 leading-relaxed">
            FlexOS Control se proporciona{" "}
            <span className="text-slate-800 font-medium">"tal cual"</span> sin garantías de
            ningún tipo. No garantizamos que el servicio sea ininterrumpido, seguro o libre de
            errores.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                title: "Daños directos",
                color: "bg-amber-50 border-amber-200 text-amber-700",
              },
              {
                title: "Daños indirectos",
                color: "bg-amber-50 border-amber-200 text-amber-700",
              },
              {
                title: "Daños incidentales",
                color: "bg-amber-50 border-amber-200 text-amber-700",
              },
              {
                title: "Daños consecuentes",
                color: "bg-amber-50 border-amber-200 text-amber-700",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`px-4 py-3 rounded-lg border text-sm font-medium ${item.color}`}
              >
                {item.title}
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm">
            En ningún caso FlexOS Technologies SAS de CV será responsable por los daños listados arriba
            derivados del uso del software.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      icon: <Shield className="w-5 h-5 text-white" />,
      title: "Protección de Datos",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 leading-relaxed">
            El tratamiento de datos personales dentro de la plataforma se rige por nuestra{" "}
            <a href="/privacidad" className="text-[#0ea5e9] hover:underline font-medium">
              Política de Privacidad
            </a>
            . El cliente es responsable de obtener los consentimientos necesarios de sus propios
            usuarios y clientes para el tratamiento de sus datos en el sistema.
          </p>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200">
            <Shield className="w-5 h-5 text-[#0ea5e9] flex-shrink-0" />
            <p className="text-blue-700 text-sm">
              Cumplimos con la LFPDPPP y los estándares internacionales de seguridad de datos.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      icon: <Ban className="w-5 h-5 text-white" />,
      title: "Suspensión y Terminación",
      content: (
        <p className="text-slate-600 leading-relaxed">
          Nos reservamos el derecho de{" "}
          <span className="text-slate-800 font-medium">suspender o terminar</span> el acceso
          a la plataforma en caso de incumplimiento de estos términos, falta de pago, o a
          nuestra sola discreción. El usuario puede cancelar su suscripción en cualquier
          momento mediante notificación por escrito a{" "}
          <span className="text-[#0ea5e9]">soporte@flexoscontrol.com</span>.
        </p>
      ),
    },
    {
      id: 9,
      icon: <RefreshCw className="w-5 h-5 text-white" />,
      title: "Modificaciones",
      content: (
        <p className="text-slate-600 leading-relaxed">
          Nos reservamos el derecho de{" "}
          <span className="text-slate-800 font-medium">modificar estos términos</span> en
          cualquier momento. Los cambios entrarán en vigor al ser publicados. El uso continuo
          de la plataforma después de los cambios constituye aceptación de los nuevos términos.
          Le notificaremos cambios materiales por correo electrónico.
        </p>
      ),
    },
    {
      id: 10,
      icon: <Scale className="w-5 h-5 text-white" />,
      title: "Ley Aplicable",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600 leading-relaxed">
            Estos términos se rigen por las{" "}
            <span className="text-slate-800 font-medium">
              leyes de los Estados Unidos Mexicanos
            </span>
            . Cualquier disputa será resuelta ante los tribunales competentes de{" "}
            <span className="text-[#0ea5e9] font-medium">Guadalajara, Jalisco, México</span>.
          </p>
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
            <p className="text-slate-600 text-sm">
              <span className="font-semibold text-slate-700">Jurisdicción:</span> Guadalajara,
              Jalisco, México — renunciando a cualquier otro fuero que pudiera corresponder.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Subtle background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0ea5e9]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#10b981]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 mb-6">
              <FileText className="w-4 h-4 text-[#0ea5e9]" />
              <span className="text-[#0ea5e9] text-sm font-medium">Términos Legales</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Términos y{" "}
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Condiciones
              </span>
            </h1>

            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Condiciones de uso de la plataforma{" "}
              <span className="text-slate-700 font-medium">FlexOS Control</span>
            </p>

            <div className="mt-4 flex items-center justify-center gap-2">
              <RefreshCw className="w-4 h-4 text-slate-400" />
              <span className="text-slate-400 text-sm">Última actualización: Marzo 2026</span>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-3">
            {sections.map((section) => (
              <div
                key={section.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#0ea5e9]/40 hover:shadow-md transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggle(section.id)}
                  className="w-full flex items-center gap-4 p-6 text-left group"
                  aria-expanded={openSection === section.id}
                  id={`terms-section-${section.id}`}
                >
                  {/* Badge */}
                  <div className="w-10 h-10 rounded-xl bg-[#0ea5e9] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(14,165,233,0.3)] group-hover:shadow-[0_4px_18px_rgba(14,165,233,0.5)] transition-shadow duration-300">
                    {section.icon}
                  </div>

                  <div className="flex-1">
                    <span className="text-xs font-semibold text-[#0ea5e9]/50 uppercase tracking-widest">
                      Sección {section.id}
                    </span>
                    <h2 className="text-lg font-bold text-slate-800 group-hover:text-[#0ea5e9] transition-colors duration-200">
                      {section.title}
                    </h2>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      openSection === section.id ? "rotate-180 text-[#0ea5e9]" : ""
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
                    <div className="px-6 pb-6 border-t border-slate-100 pt-5">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <p className="text-slate-400 mb-6">
              ¿Tiene alguna pregunta sobre los términos y condiciones?
            </p>
            <a
              href="/#contacto"
              id="terms-contact-cta"
              className="inline-flex items-center gap-2 bg-[#0ea5e9] hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_8px_30px_rgba(14,165,233,0.45)] hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              Contactar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
