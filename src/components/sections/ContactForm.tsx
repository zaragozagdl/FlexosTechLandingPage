"use client";

import { useState } from "react";
import {
  Mail, Phone, MapPin, Send, CheckCircle,
  AlertCircle, Loader2, User, Building2,
  MessageSquare, Users2, ChevronDown, Sparkles,
  ShieldCheck, Award, Cpu, Wrench, Check
} from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const companySizes = [
  "1 – 10 empleados",
  "11 – 50 empleados",
  "51 – 200 empleados",
  "201 – 500 empleados",
  "Más de 500 empleados",
];

const plantProcesses = [
  "Flexografía Banda Angosta (Etiquetas)",
  "Flexografía Banda Media / Ancha (Empaque Flexible)",
  "Manga Termoencogible (Shrink Sleeve)",
  "Conversión Digital / Híbrida",
  "Cartón Corrugado / Plegadizo",
  "Acabados Especiales / Estampado / Troquel",
  "Otro proceso de conversión",
];

export default function ContactForm() {
  const [form, setForm] = useState<{
    nombre: string;
    apellido: string;
    empresa: string;
    tamano: string;
    procesos: string[];
    tipoSolicitud: string;
    email: string;
    telefono: string;
    mensaje: string;
  }>({
    nombre: "",
    apellido: "",
    empresa: "",
    tamano: "",
    procesos: [],
    tipoSolicitud: "Programa MVP (Empresa Pionera con Acompañamiento)",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isMVP = form.tipoSolicitud.includes("MVP");
  const isDemo = form.tipoSolicitud.includes("Demostración");
  const isCotizacion = form.tipoSolicitud.includes("Cotización");

  const submitButtonText = isMVP
    ? "Enviar Postulación al Programa MVP"
    : isDemo
    ? "Solicitar Demostración Técnica"
    : isCotizacion
    ? "Solicitar Cotización de Licenciamiento"
    : "Enviar Formulario de Contacto";

  const loadingButtonText = isMVP
    ? "Procesando Postulación..."
    : isDemo
    ? "Enviando Solicitud de Demo..."
    : isCotizacion
    ? "Enviando Solicitud de Cotización..."
    : "Enviando Mensaje...";

  const successTitle = isMVP
    ? "¡Postulación Recibida con Éxito!"
    : isDemo
    ? "¡Solicitud de Demostración Recibida!"
    : isCotizacion
    ? "¡Solicitud de Cotización Recibida!"
    : "¡Mensaje Enviado con Éxito!";

  const successMessage = isMVP
    ? "Muchas gracias. Uno de nuestros directores técnicos revisará el perfil de su planta y se comunicará personalmente para coordinar la sesión de evaluación."
    : "Muchas gracias por contactarnos. Nuestro equipo técnico revisará los requerimientos de su planta y se comunicará en menos de 24 horas hábiles.";

  const formHeaderTitle = isMVP
    ? "Formulario de Postulación al Programa MVP"
    : isDemo
    ? "Solicitud de Demostración Técnica"
    : isCotizacion
    ? "Solicitud de Cotización de Licenciamiento"
    : "Formulario de Contacto & Solicitud";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleProceso = (proc: string) => {
    setForm((prev) => {
      const exists = prev.procesos.includes(proc);
      return {
        ...prev,
        procesos: exists
          ? prev.procesos.filter((p) => p !== proc)
          : [...prev.procesos, proc],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: `${form.nombre} ${form.apellido}`,
          empresa: form.empresa,
          tamano: form.tamano,
          tipoPlanta: form.procesos.join(", "),
          procesos: form.procesos,
          tipoSolicitud: form.tipoSolicitud,
          email: form.email,
          telefono: form.telefono,
          mensaje: form.mensaje,
        }),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        setForm({
          nombre: "",
          apellido: "",
          empresa: "",
          tamano: "",
          procesos: [],
          tipoSolicitud: "Programa MVP (Empresa Pionera con Acompañamiento)",
          email: "",
          telefono: "",
          mensaje: "",
        });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Error al enviar. Intente más tarde.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Error de conexión. Verifique su internet e intente de nuevo.");
    }
  };

  // Shared input classes
  const inputCls =
    "w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-flexos-blue focus:ring-1 focus:ring-flexos-blue transition-colors";

  const labelCls = "flex items-center gap-1.5 text-sm font-medium text-slate-300 mb-2";

  return (
    <section id="contacto">
      {/* MVP Callout Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 text-white py-16 border-t border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            Convocatoria de Empresas Pioneras (MVP)
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            ¿Listo para Impulsar su Planta con FlexOS Suite V6?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            Súmese al selecto grupo de empresas convertidoras que probarán la suite completa con 
            <strong> acompañamiento consultivo y técnico personalizado</strong> en cada etapa de la implementación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#formulario" 
              className="bg-flexos-blue hover:bg-cyan-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
            >
              Postular mi Empresa al Programa MVP
            </a>
            <a 
              href="#asistente-capacitacion" 
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-xl font-bold transition-colors"
            >
              Ver Asistente Virtual & Capacitación
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="formulario" className="bg-[#0b1120] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Info & MVP Perks Panel */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flexos-blue/10 border border-flexos-blue/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
                Programa Selecto de Adopción
              </div>
              <h3 className="text-4xl font-extrabold mb-4 tracking-tight">
                Postulación & Contacto Directo
              </h3>
              <p className="text-slate-300 text-base mb-8 leading-relaxed">
                A diferencia de los ERPs tradicionales donde le entregan un software y se van, en FlexOS nos 
                comprometemos a acompañarlo en la migración de fichas técnicas, parametrización de prensas y capacitación de su cuadrilla.
              </p>

              {/* MVP Pillars Box */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 mb-8 space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  Beneficios del Grupo Pionero MVP:
                </h4>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Acompañamiento 1 a 1:</strong> Consultores especializados en flexografía asignados para la puesta a punto de su planta.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Acceso Total a la Suite V6:</strong> Cotizadores, MES móvil, Telemetría ESP32, conciliación 3-Way Match y Asistente Virtual por voz.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Condiciones Comerciales Fundadoras:</strong> Tarifas preferenciales y congeladas de por vida para las empresas seleccionadas.
                  </p>
                </div>
              </div>

              {/* Direct Info */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-flexos-blue flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Línea Directa</div>
                    <div className="font-semibold text-base text-slate-200">+52 334 874 2297</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-flexos-blue flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Dirección Comercial</div>
                    <div className="font-semibold text-base text-slate-200">ventas@flexoscontrol.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-flexos-blue flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Sede</div>
                    <div className="font-semibold text-base text-slate-200">Guadalajara, Jalisco, México.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="bg-slate-900/90 p-8 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-sm">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-white transition-all duration-200">{formHeaderTitle}</h4>
                <p className="text-slate-400 text-xs mt-1">
                  Complete los datos de su planta y nuestro equipo se comunicará en menos de 24 horas hábiles.
                </p>
              </div>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{successTitle}</h3>
                  <p className="text-slate-300 max-w-sm text-sm">
                    {successMessage}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-5 py-2 rounded-lg bg-slate-800 text-sm text-cyan-400 hover:bg-slate-700 transition-colors"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Tipo de Solicitud */}
                  <div>
                    <label htmlFor="tipoSolicitud" className={labelCls}>
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      Interés Principal <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="tipoSolicitud"
                        name="tipoSolicitud"
                        value={form.tipoSolicitud}
                        onChange={handleChange}
                        className={`${inputCls} appearance-none pr-10 text-cyan-300 font-medium`}
                      >
                        <option value="Programa MVP (Empresa Pionera con Acompañamiento)" className="bg-slate-900">
                          🌟 Deseo postularme al Programa MVP (Acompañamiento 1 a 1)
                        </option>
                        <option value="Solicitud de Demostración Comercial" className="bg-slate-900">
                          Demostración técnica en vivo
                        </option>
                        <option value="Cotización de Licenciamiento" className="bg-slate-900">
                          Cotización de licenciamiento e implantación
                        </option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Nombre + Apellido */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>
                        <User className="w-4 h-4 text-flexos-blue" />
                        Nombre <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text" name="nombre" value={form.nombre}
                        onChange={handleChange} required
                        className={inputCls} placeholder="Ej. Carlos"
                      />
                    </div>
                    <div>
                      <label className={labelCls}>
                        <User className="w-4 h-4 text-flexos-blue" />
                        Apellido <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text" name="apellido" value={form.apellido}
                        onChange={handleChange} required
                        className={inputCls} placeholder="Ej. Mendoza"
                      />
                    </div>
                  </div>

                  {/* Empresa y Tamaño */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>
                        <Building2 className="w-4 h-4 text-flexos-blue" />
                        Empresa / Planta <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text" name="empresa" value={form.empresa}
                        onChange={handleChange} required
                        className={inputCls} placeholder="Nombre de su planta"
                      />
                    </div>

                    <div>
                      <label htmlFor="tamano" className={labelCls}>
                        <Users2 className="w-4 h-4 text-flexos-blue" />
                        Tamaño de Planta
                      </label>
                      <div className="relative">
                        <select
                          id="tamano"
                          name="tamano" value={form.tamano}
                          onChange={handleChange}
                          className={`${inputCls} appearance-none pr-10`}
                        >
                          <option value="" className="bg-slate-900">N° de Empleados</option>
                          {companySizes.map((s) => (
                            <option key={s} value={s} className="bg-slate-900">{s}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Procesos de Planta (Selección Múltiple) */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                        <Cpu className="w-4 h-4 text-cyan-400" />
                        Líneas / Procesos de su Planta
                      </label>
                      <span className="text-xs text-slate-400 font-normal">
                        {form.procesos.length > 0
                          ? `${form.procesos.length} seleccionado${form.procesos.length > 1 ? "s" : ""}`
                          : "(Puede marcar varios)"}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {plantProcesses.map((proc) => {
                        const isSelected = form.procesos.includes(proc);
                        return (
                          <button
                            key={proc}
                            type="button"
                            onClick={() => toggleProceso(proc)}
                            className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs font-medium text-left transition-all ${
                              isSelected
                                ? "bg-cyan-950/70 border-cyan-500/80 text-cyan-200 shadow-sm shadow-cyan-500/20"
                                : "bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                                isSelected
                                  ? "bg-cyan-500 text-slate-950 font-bold"
                                  : "border border-slate-600 bg-slate-850"
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span className="leading-snug">{proc}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Email Corporativo + Teléfono */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>
                        <Mail className="w-4 h-4 text-flexos-blue" />
                        Email Corporativo <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email" name="email" value={form.email}
                        onChange={handleChange} required
                        className={inputCls} placeholder="direccion@suempresa.com"
                      />
                    </div>

                    <div>
                      <label className={labelCls}>
                        <Phone className="w-4 h-4 text-flexos-blue" />
                        Teléfono / WhatsApp <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel" name="telefono" value={form.telefono}
                        onChange={handleChange} required
                        className={inputCls} placeholder="+52 (33) 1234-5678"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className={labelCls}>
                      <MessageSquare className="w-4 h-4 text-flexos-blue" />
                      Detalles de su Planta o Desafíos Actuales
                    </label>
                    <textarea
                      name="mensaje" rows={3} value={form.mensaje}
                      onChange={handleChange}
                      className={`${inputCls} resize-none`}
                      placeholder="Cuéntenos qué prensas tienen, si requieren control de mermas, cotizador o asistencia en piso..."
                    />
                  </div>

                  {/* Error display */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 bg-red-950/60 border border-red-500/40 rounded-xl text-red-300 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-flexos-blue to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {loadingButtonText}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {submitButtonText}
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500 mt-2">
                    Sus datos están protegidos bajo nuestra política de confidencialidad industrial.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
