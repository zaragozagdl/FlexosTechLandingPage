"use client";

import { useState } from "react";
import {
  Shield,
  User,
  Database,
  Target,
  Share2,
  Lock,
  Settings,
  Cookie,
  RefreshCw,
  Mail,
  Phone,
  Clock,
  ChevronDown,
  Ban,
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

export default function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggle = (id: number) => setOpenSection(openSection === id ? null : id);

  const sections: Section[] = [
    {
      id: 1,
      icon: <User className="w-5 h-5 text-white" />,
      title: "Responsable de los Datos",
      content: (
        <p className="text-slate-600 leading-relaxed">
          <span className="text-[#0ea5e9] font-semibold">FlexOS Technologies SAS de CV</span>, con
          domicilio en <span className="text-slate-800 font-medium">Jalisco, México.</span>,
          es responsable de la recolección, uso y protección de sus datos personales conforme a lo
          establecido en la{" "}
          <span className="text-[#0ea5e9]">
            Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP)
          </span>
          .
        </p>
      ),
    },
    {
      id: 2,
      icon: <Database className="w-5 h-5 text-white" />,
      title: "Datos Personales que Recolectamos",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">Podremos recolectar los siguientes datos personales:</p>
          <ul className="space-y-3">
            {[
              { category: "Datos de identificación", items: "Nombre completo, RFC, CURP, firma electrónica" },
              { category: "Datos de contacto", items: "Teléfono, correo electrónico, dirección" },
              { category: "Datos laborales", items: "Empresa, puesto, departamento" },
              { category: "Datos técnicos", items: "IP, navegador, dispositivo" },
              { category: "Datos de uso", items: "Módulos utilizados, frecuencia de acceso, horas de operación" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-slate-600 text-sm">
                  <span className="text-slate-800 font-medium">{item.category}:</span> {item.items}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      icon: <Target className="w-5 h-5 text-white" />,
      title: "Finalidad del Tratamiento",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">Sus datos personales serán utilizados para las siguientes finalidades:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Proveer servicios y productos solicitados",
              "Gestionar procesos de cotización y venta",
              "Soporte técnico y atención al cliente",
              "Cumplimiento de obligaciones contractuales",
              "Envío de comunicaciones sobre actualizaciones del sistema",
              "Facturación y gestión administrativa",
              "Mejora de nuestros servicios y plataformas",
              "Análisis estadístico y de uso de la plataforma",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-slate-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 4,
      icon: <Share2 className="w-5 h-5 text-white" />,
      title: "Transferencia de Datos",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">Sus datos podrán ser transferidos únicamente en los siguientes casos:</p>
          <div className="space-y-3">
            {[
              {
                title: "Proveedores de servicios tecnológicos",
                desc: "Para el funcionamiento y mantenimiento de la plataforma (infraestructura cloud, bases de datos).",
              },
              {
                title: "Cumplimiento legal",
                desc: "Autoridades competentes cuando sea requerido por ley o resolución judicial.",
              },
              {
                title: "Filiales y subsidiarias",
                desc: "Empresas del grupo corporativo bajo los mismos estándares de protección de datos.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <p className="text-slate-800 font-medium mb-1">{item.title}</p>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm italic">
            No venderemos, cederemos ni compartiremos sus datos con terceros para fines comerciales sin su consentimiento previo.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      icon: <Lock className="w-5 h-5 text-white" />,
      title: "Derechos ARCO",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">
            Usted tiene derecho a ejercer los derechos{" "}
            <span className="text-slate-800 font-semibold">ARCO</span> sobre sus datos personales:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { letter: "A", title: "Acceso", desc: "Conocer qué datos personales tenemos, cómo los usamos y las condiciones del tratamiento." },
              { letter: "R", title: "Rectificación", desc: "Solicitar la corrección de datos inexactos o incompletos." },
              { letter: "C", title: "Cancelación", desc: "Solicitar la eliminación de sus datos de nuestros registros cuando sea procedente." },
              { letter: "O", title: "Oposición", desc: "Oponerse al tratamiento de sus datos para finalidades específicas." },
            ].map((item) => (
              <div key={item.letter} className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0ea5e9] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(14,165,233,0.25)]">
                  <span className="text-white font-bold text-lg">{item.letter}</span>
                </div>
                <div>
                  <p className="text-slate-800 font-semibold mb-1">{item.title}</p>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 6,
      icon: <Settings className="w-5 h-5 text-white" />,
      title: "Cómo Ejercer sus Derechos",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">
            Para ejercer sus derechos ARCO o revocar su consentimiento, contacte al{" "}
            <span className="text-slate-800 font-semibold">Departamento de Protección de Datos</span>:
          </p>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
            {[
              { icon: <Mail className="w-4 h-4 text-[#0ea5e9]" />, text: "privacidad@flexoscontrol.com" },
              { icon: <Phone className="w-4 h-4 text-[#0ea5e9]" />, text: "33 4874 2297" },
              { icon: <Clock className="w-4 h-4 text-[#0ea5e9]" />, text: "Respuesta en máximo 20 días hábiles" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {item.icon}
                <span className="text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm">
            Su solicitud deberá incluir: nombre completo, copia de identificación oficial, descripción clara del derecho a ejercer y cualquier documento que facilite la localización de sus datos.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      icon: <Cookie className="w-5 h-5 text-white" />,
      title: "Cookies y Tecnologías Similares",
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">
            Nuestro sitio web utiliza{" "}
            <span className="text-slate-800 font-medium">cookies</span> y tecnologías similares para
            mejorar su experiencia. Puede configurar su navegador para rechazar todas las cookies o
            para indicar cuándo se está configurando una cookie.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { name: "Cookies Esenciales", desc: "Necesarias para el funcionamiento básico del sitio.", color: "bg-green-50 border-green-200" },
              { name: "Cookies Analíticas", desc: "Nos ayudan a entender cómo se usa el sitio.", color: "bg-blue-50 border-blue-200" },
              { name: "Cookies de Marketing", desc: "Para mostrar contenido relevante.", color: "bg-purple-50 border-purple-200" },
            ].map((cookie) => (
              <div key={cookie.name} className={`p-4 rounded-lg border ${cookie.color}`}>
                <p className="text-slate-700 font-medium text-sm mb-1">{cookie.name}</p>
                <p className="text-slate-500 text-xs">{cookie.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 8,
      icon: <RefreshCw className="w-5 h-5 text-white" />,
      title: "Modificaciones a la Política",
      content: (
        <p className="text-slate-600 leading-relaxed">
          Nos reservamos el derecho de{" "}
          <span className="text-[#0ea5e9] font-medium">modificar esta política de privacidad</span>{" "}
          en cualquier momento. Los cambios serán publicados en esta página y entrarán en vigor desde
          su publicación. Le recomendamos revisar periódicamente esta política. Si continúa usando
          nuestros servicios después de la publicación de cambios, se considera que acepta las
          modificaciones.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Subtle background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0ea5e9]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#10b981]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 mb-6">
              <Shield className="w-4 h-4 text-[#0ea5e9]" />
              <span className="text-[#0ea5e9] text-sm font-medium">LFPDPPP</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Política de{" "}
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Privacidad
              </span>
            </h1>

            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Conforme a la{" "}
              <span className="text-slate-700">
                Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP)
              </span>
            </p>

            <div className="mt-4 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" />
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
                  id={`privacy-section-${section.id}`}
                >
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
              ¿Tiene alguna pregunta sobre nuestra política de privacidad?
            </p>
            <a
              href="/#contacto"
              id="privacy-contact-cta"
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
