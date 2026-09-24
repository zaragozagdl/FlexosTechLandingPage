"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, ShieldCheck, Cpu, Volume2, Calculator, CheckCircle2 } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    category: "General & Producto",
    question: "¿Qué es FlexOS Control y por qué es diferente a un ERP convencional?",
    answer:
      "FlexOS Control es una plataforma integral ERP/MES desarrollada específicamente para la industria de la flexografía, empaque flexible y producción de etiquetas. A diferencia de ERPs genéricos (como SAP, Odoo o Business One), FlexOS incorpora de forma nativa cálculos técnicos de cilindros (paso de engrane Z 1/8\"), mermas de arranque y corrida, geometría de Layflat para mangas termoencogibles, control de anilox por volumen BCM, formulación de tintas y telemetría de prensas en tiempo real."
  },
  {
    category: "Capacitación & Asistente",
    question: "¿Cómo funciona el Asistente Virtual por voz y la capacitación in-app?",
    answer:
      "FlexOS Suite PRO V6 integra un tutor pedagógico interactivo con voz natural en español de México (es-MX). El asistente guía al personal de planta y administración mediante tours paso a paso directamente sobre las pantallas del sistema, explicando cada campo y fundamentando los criterios y algoritmos industriales (engranajes, cálculo de bobinas, márgenes de cotización). Esto reduce el tiempo de inducción y la curva de aprendizaje en más de un 70% sin necesidad de manuales extensos."
  },
  {
    category: "Programa MVP",
    question: "¿En qué consiste el Programa de Empresas Pioneras (MVP) y qué incluye el acompañamiento?",
    answer:
      "Es una convocatoria exclusiva para un selecto grupo de empresas convertidoras que deseen implementar FlexOS Suite V6 con consultoría dedicada. El programa incluye un ingeniero y consultor flexográfico asignado 1 a 1 para apoyar en la configuración del parque de maquinaria, migración de catálogos y fichas técnicas, parametrización de costos y capacitación de operadores en piso. Además, las empresas seleccionadas reciben condiciones comerciales y tarifas preferenciales vitalicias."
  },
  {
    category: "Piso & Telemetría",
    question: "¿Cómo se conecta la telemetría IoT con ESP32 a las prensas flexográficas?",
    answer:
      "FlexOS se conecta físicamente a las impresoras mediante microcontroladores industriales ESP32 y encoders rotativos. Los pulsos generados por el paso del material se transmiten en milisegundos a Firebase Realtime Database, calculando la velocidad real (m/min), metros producidos y tiempos muertos. Esta información alimenta de forma instantánea los tableros OEE (Disponibilidad, Rendimiento, Calidad) y pantallas Andon en piso sin necesidad de intervención manual."
  },
  {
    category: "Finanzas & Fiscal",
    question: "¿Qué es la conciliación 3-Way Match con CFDI 4.0 del SAT?",
    answer:
      "Es un motor de auditoría fiscal automatizado que procesa directamente en el navegador los archivos XML CFDI 4.0 de los proveedores. Contrasta milimétricamente tres puntos de control: los precios del XML del SAT, las cantidades acordadas en la Orden de Compra (PO) y el metraje o peso ingresado físicamente en Almacén. Esto garantiza cero sobrecostos y alimenta el calendario de pagos para liquidaciones bancarias SPEI con control de complementos de pago (REP)."
  },
  {
    category: "Tintas & Color",
    question: "¿Cómo apoya el asistente espectrofotométrico en el laboratorio de tintas?",
    answer:
      "El asistente de colorimetría trabaja en el espacio de color CIE L*a*b*. Al ingresar las lecturas de un espectrofotómetro, calcula la desviación cromática Delta E 2000 (ΔE₀₀). Si el tono está fuera de tolerancia (ΔE > 2.0), el algoritmo indica con precisión cuántos gramos de base o toner deben agregarse a la cubeta de tinta a pie de prensa para regresar el color al estándar sin desperdiciar insumos."
  },
  {
    category: "Calidad & Trazabilidad",
    question: "¿FlexOS Control ayuda en auditorías de certificación ISO 9001:2015?",
    answer:
      "Sí. FlexOS integra un Sistema de Gestión de Calidad (QMS) nativo que gestiona inspecciones en recepción, proceso y producto terminado, reportes de No Conformidad (NCR) y planes de acción correctiva/preventiva (CAPA) con la metodología de los 5 Porqués. Asimismo, mantiene una trazabilidad 360° bidireccional que enlaza desde el lote de materia prima y bobina hasta el cliente final y la factura digital."
  },
  {
    category: "Cotización & Costeo",
    question: "¿Cómo calculan los cotizadores técnicos de FlexOS el consumo exacto de tinta y herramentales?",
    answer:
      "FlexOS Suite PRO V6 cuenta con 4 cotizadores especializados (Autoadheribles y Mangas Termoencogibles, Estándar y Avanzados). Aplica física volumétrica real basada en el volumen BCM de los rodillos anilox y doble transferencia química según el tipo de tinta (Base Agua, Base UV o Base Solvente). Incorpora un analizador interactivo de arte con pipeta para muestrear colores directos y tintas especiales, aplicando descuento sustractivo a la cuatricromía para evitar doble cobro de tinta. Además, desglosa 7 factores de costo por escala: sustrato, tintas BCM, cinta de montaje (Stickyback), reposición de suaje por metro lineal, grabados Cyrel, empaque y mano de obra/prensa, calculando el precio final con margen comercial real sin las pérdidas habituales del markup simple."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="preguntas-frecuentes" className="py-24 bg-[#080d1a] relative overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-flexos-blue/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-flexos-blue/10 border border-flexos-blue/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            Base de Conocimiento & Preguntas Frecuentes
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Preguntas Frecuentes sobre <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-flexos-blue via-cyan-400 to-emerald-400">
              FlexOS Suite PRO V6
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Respuestas claras y técnicas sobre la arquitectura, el asistente virtual, la integración de planta y nuestro programa de acompañamiento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-950/30"
                    : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 font-semibold shrink-0 hidden sm:inline">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helper */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">¿Tiene una duda técnica o requerimiento especial?</p>
              <p className="text-xs text-slate-400">Nuestros ingenieros de planta están listos para asesorarle.</p>
            </div>
          </div>
          <a
            href="#contacto"
            className="px-6 py-2.5 rounded-xl bg-flexos-blue hover:bg-cyan-500 text-white text-sm font-bold transition-all shadow-md shrink-0"
          >
            Hablar con un Ingeniero
          </a>
        </div>

      </div>
    </section>
  );
}
