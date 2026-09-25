"use client";

import { useState } from "react";
import Link from "next/link";
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

export default function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggle = (id: number) => setOpenSection(openSection === id ? null : id);

  const sections: Section[] = [
    {
      id: 1,
      icon: <User className="w-5 h-5 text-white" />,
      title: "Responsable de los Datos",
      content: (
        <p className="text-slate-300 leading-relaxed">
          <span className="text-cyan-400 font-semibold">FlexOS Technologies SAS de CV</span>, con
          domicilio en <span className="text-slate-100 font-medium">Guadalajara, Jalisco, México</span>,
          es responsable de la recolección, uso y protección de sus datos personales y telemetría industrial conforme a lo
          establecido en la{" "}
          <span className="text-cyan-400">
            Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP)
          </span>
          .
        </p>
      ),
    },
    {
      id: 2,
      icon: <Database className="w-5 h-5 text-white" />,
      title: "Datos Personales y Operativos que Recolectamos",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">Podremos recolectar los siguientes datos según la interacción con nuestros portales y servicios:</p>
          <ul className="space-y-3">
            {[
              { category: "Datos de identificación", items: "Nombre completo, RFC, CURP, razón social y firma electrónica corporativa" },
              { category: "Datos de contacto", items: "Teléfono corporativo, correo electrónico institucional y dirección fiscal" },
              { category: "Datos laborales", items: "Empresa, puesto, línea de producción o departamento técnico" },
              { category: "Datos técnicos", items: "Dirección IP, agente de navegador, identificadores de sesión y telemetría de dispositivo" },
              { category: "Datos de operación industrial", items: "Configuraciones de maquinaria, variables de proceso y registros de uso del sistema" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-slate-300 text-sm">
                  <span className="text-white font-medium">{item.category}:</span> {item.items}
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
          <p className="text-slate-300">Sus datos personales y corporativos serán utilizados para las siguientes finalidades esenciales:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Proveer plataformas SaaS, software a medida y servicios de automatización contratados",
              "Gestionar cotizaciones técnicas, consultoría y demostraciones personalizadas",
              "Soporte de ingeniería técnica, monitoreo y atención al cliente",
              "Cumplimiento estricto de obligaciones contractuales y acuerdos de confidencialidad (NDA)",
              "Envío de avisos sobre actualizaciones de seguridad y nuevas capacidades",
              "Facturación fiscal CFDI 4.0 y gestión administrativa",
              "Optimización de rendimiento de nuestras soluciones tecnológicas e IoT",
              "Análisis estadístico de confiabilidad operativa bajo anonimización",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 4,
      icon: <Share2 className="w-5 h-5 text-white" />,
      title: "Transferencia de Datos y Secreto Industrial",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">Sus datos y secretos industriales podrán ser transferidos únicamente en los siguientes supuestos:</p>
          <div className="space-y-3">
            {[
              {
                title: "Infraestructura Cloud de Grado Industrial",
                desc: "Servidores certificados (AWS / GCP / Azure) dedicados a la resiliencia, cifrado en reposo y en tránsito de las plataformas.",
              },
              {
                title: "Cumplimiento Legal y Regulatorio",
                desc: "Autoridades mexicanas competentes cuando sea estrictamente requerido por mandato judicial o ley aplicable.",
              },
              {
                title: "Empresas Filiales y Socios de Integración",
                desc: "Operadores bajo rigurosos acuerdos de confidencialidad y estándares equivalentes de protección de datos.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0b1222] border border-[#1e293b]">
                <p className="text-white font-medium mb-1">{item.title}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm italic">
            FlexOS Technologies no comercializa, no renta ni transfiere sus datos ni formulaciones industriales a terceros para fines publicitarios.
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
          <p className="text-slate-300">
            Usted tiene el derecho legal de ejercer los derechos{" "}
            <span className="text-cyan-400 font-semibold">ARCO</span> sobre sus datos personales:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { letter: "A", title: "Acceso", desc: "Conocer qué datos personales tenemos en nuestros registros, cómo se tratan y con quién se comparten." },
              { letter: "R", title: "Rectificación", desc: "Solicitar la corrección inmediata de datos desactualizados, inexactos o incompletos." },
              { letter: "C", title: "Cancelación", desc: "Solicitar la baja y eliminación de sus datos cuando considere que no están siendo tratados adecuadamente." },
              { letter: "O", title: "Oposición", desc: "Oponerse al tratamiento de sus datos para finalidades específicas no esenciales." },
            ].map((item) => (
              <div key={item.letter} className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold text-lg">{item.letter}</span>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
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
      title: "Cómo Ejercer sus Derechos ARCO",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">
            Para ejercer cualquiera de sus derechos ARCO o revocar su consentimiento, envíe su solicitud al{" "}
            <span className="text-white font-semibold">Departamento de Protección de Datos de FlexOS Technologies</span>:
          </p>
          <div className="p-5 rounded-xl bg-[#0b1222] border border-[#1e293b] space-y-4">
            {[
              { icon: <Mail className="w-4 h-4 text-cyan-400" />, text: "privacidad@flexostechnologies.com" },
              { icon: <Phone className="w-4 h-4 text-cyan-400" />, text: "+52 (33) 4874-2297" },
              { icon: <Clock className="w-4 h-4 text-cyan-400" />, text: "Plazo de respuesta: Máximo 20 días hábiles conforme a la LFPDPPP" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {item.icon}
                <span className="text-slate-300 font-mono-tech text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm">
            La solicitud deberá contener: nombre del titular, acreditación de identidad o representación legal, descripción clara de los datos objeto de la solicitud y cualquier elemento que facilite su localización.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      icon: <Cookie className="w-5 h-5 text-white" />,
      title: "Cookies y Telemetría Técnica",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">
            Nuestros portales web y consolas operativas utilizan{" "}
            <span className="text-white font-medium">cookies técnicas y tokens seguros</span> para autenticación, persistencia de sesión y analítica agregada.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { name: "Cookies Esenciales", desc: "Necesarias para autenticación, CSRF y balanceo de carga.", color: "bg-emerald-950/20 border-emerald-800/30 text-emerald-400" },
              { name: "Cookies Analíticas", desc: "Métricas de tráfico técnico y tiempos de respuesta de UI.", color: "bg-cyan-950/20 border-cyan-800/30 text-cyan-400" },
              { name: "Preferencias de Consola", desc: "Parámetros de interfaz, temas y estado de paneles.", color: "bg-purple-950/20 border-purple-800/30 text-purple-400" },
            ].map((cookie) => (
              <div key={cookie.name} className={`p-4 rounded-xl border ${cookie.color}`}>
                <p className="font-semibold text-sm mb-1">{cookie.name}</p>
                <p className="text-slate-400 text-xs">{cookie.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 8,
      icon: <RefreshCw className="w-5 h-5 text-white" />,
      title: "Modificaciones al Aviso de Privacidad",
      content: (
        <p className="text-slate-300 leading-relaxed">
          FlexOS Technologies SAS de CV se reserva el derecho de actualizar el presente aviso para reflejar cambios legislativos, jurisprudenciales o mejoras en nuestras plataformas. Toda actualización será publicada en esta misma dirección URL con su respectiva fecha de vigencia.
        </p>
      ),
    },
  ];

  return (
    <div className="py-16 px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-800/40 mb-6">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-mono-tech uppercase tracking-wider">Marco Legal LFPDPPP</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Aviso de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400">
              Privacidad
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Protección de datos personales, confidencialidad industrial y cumplimiento de la{" "}
            <span className="text-slate-200">
              Ley Federal de Protección de Datos Personales en Posesión de Particulares
            </span>
            .
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-slate-500 font-mono-tech text-xs">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
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
                id={`privacy-section-${section.id}`}
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
            ¿Tiene alguna consulta sobre el tratamiento o confidencialidad de su información?
          </p>
          <Link
            href="/#contacto"
            id="privacy-contact-cta"
            className="btn-tech-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg shadow-cyan-500/20"
          >
            <Mail className="w-4 h-4" />
            <span>Contactar al Área de Privacidad</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
