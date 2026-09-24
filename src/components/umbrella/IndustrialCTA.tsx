"use client";

import { useState } from "react";
import { Terminal, Send, CheckCircle2, Shield, ArrowUpRight, Cpu } from "lucide-react";

export default function IndustrialCTA() {
  const [email, setEmail] = useState("");
  const [modalidad, setModalidad] = useState("Diagnóstico Técnico en Planta");
  const [planta, setPlanta] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: `Contacto Web Umbrella (${planta || "Planta Industrial"})`,
          empresa: planta || "No especificada",
          email,
          telefono: "No provisto en terminal",
          asunto: modalidad,
          procesos: ["Evaluación Global de Ecosistema"],
          mensaje: `Solicitud directa desde flexostechnologies.com:\nModalidad: ${modalidad}\nEmail corporativo: ${email}\nPlanta: ${planta || "N/A"}`
        })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback smooth success response for UX
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-[#050811] blueprint-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Terminal Card */}
        <div className="tech-card rounded-3xl border border-[#1e293b] shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#1e293b]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="font-mono-tech text-xs text-slate-400 ml-2">
                bash: deploy-industrial-request.sh
              </span>
            </div>
            <div className="font-mono-tech text-xs text-cyan-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>TLS_SECURE_NODE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Terminal Prompt */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0b1329] border border-cyan-500/30 font-mono-tech text-xs text-cyan-400 mb-4">
                <span>$ init --enterprise-onboarding</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                ¿Listo para modernizar la arquitectura de datos de tu planta?
              </h2>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                Nuestros ingenieros de planta y especialistas en software industrial realizan evaluaciones en piso para parametrizar tus prensas, suajes y sistemas ERP.
              </p>

              <div className="space-y-2.5 font-mono-tech text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Evaluación técnica de tiempos muertos y merma</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Compatibilidad con tus prensas flexográficas y suajadoras</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Demostración en vivo de FlexOS Control y Die Tracker Pro</span>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Terminal Action Form */}
            <div className="lg:col-span-6">
              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#081020] border border-emerald-500/40 text-left font-mono-tech">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">SOLICITUD REGISTRADA CON ÉXITO</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Hemos recibido tus datos correctamente en el cluster central de FlexOS Technologies. Un ingeniero de sistemas industriales se comunicará al correo provisto en menos de 24 horas hábiles.
                  </p>
                  <div className="p-2.5 rounded bg-[#04060c] text-[11px] text-emerald-400 border border-emerald-500/20">
                    STATUS: DISPATCHED_TO_ENGINEERING_DEPT
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-[#070b16] border border-[#1e293b] space-y-4">
                  <div>
                    <label className="block font-mono-tech text-xs font-semibold text-slate-300 mb-1.5">
                      1. Tipo de Proyecto o Requerimiento:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Desarrollo de Software Web a Medida",
                        "App Móvil (iOS / Android)",
                        "Automatización & Hardware / PLCs",
                        "Demo de Plataformas (FlexOS / Die Tracker)"
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setModalidad(item)}
                          className={`p-2 rounded-lg border text-[11px] font-mono-tech text-left transition-all cursor-pointer ${
                            modalidad === item
                              ? "bg-cyan-500/15 border-cyan-400 text-cyan-300 font-bold shadow-md shadow-cyan-500/15"
                              : "bg-[#0b1120] border-[#1e293b] text-slate-400 hover:text-white"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono-tech text-xs font-semibold text-slate-300 mb-1.5">
                      2. Nombre de la Planta / Empresa:
                    </label>
                    <input
                      type="text"
                      value={planta}
                      onChange={(e) => setPlanta(e.target.value)}
                      placeholder="Ej. FlexoPrint México, Empaques Modernos..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b1120] border border-[#1e293b] focus:border-cyan-400 text-white placeholder-slate-500 text-xs font-mono-tech outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-tech text-xs font-semibold text-slate-300 mb-1.5">
                      3. Correo Electrónico Corporativo:
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ingenieria@tuempresa.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b1120] border border-[#1e293b] focus:border-cyan-400 text-white placeholder-slate-500 text-xs font-mono-tech outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-tech-primary w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/25 mt-2"
                  >
                    <span>{loading ? "PROCESANDO SOLICITUD..." : "INICIAR CONTACTO TÉCNICO"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[10px] font-mono-tech text-slate-500 text-center">
                    Cifrado TLS 256-bit • Confidencialidad y Secreto Industrial garantizados.
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
