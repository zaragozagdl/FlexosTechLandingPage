"use client";

import { Activity, Radio, Cpu, RefreshCw } from "lucide-react";

export default function TelemetryStrip() {
  const telemetryItems = [
    { label: "PRESS_01_NILPETER", value: "240 m/min", status: "ok" },
    { label: "DIE_ID_4821", value: "LIFECYCLE 84%", status: "warn" },
    { label: "CLOUD_SYNC_LATENCY", value: "11.4 ms", status: "ok" },
    { label: "SCRAP_VARIANCE", value: "-3.8%", status: "ok" },
    { label: "OEE_AGGREGATE", value: "94.2%", status: "ok" },
    { label: "ANILOX_CHAMBER_BCM", value: "3.4 vol", status: "ok" },
    { label: "MES_ACTIVE_WORKORDERS", value: "18 IN PISO", status: "ok" },
    { label: "IOT_ESP32_NODES", value: "32/32 ONLINE", status: "ok" },
    { label: "SAT_3WAY_MATCH", value: "VERIFIED (100%)", status: "ok" },
    { label: "COLOR_LAB_DELTA_E", value: "ΔE 0.82 (PASS)", status: "ok" },
    { label: "PRESS_02_MARK_ANDY", value: "195 m/min", status: "ok" },
    { label: "WEB_TENSION_SENSOR", value: "185 N ±2", status: "ok" },
  ];

  return (
    <div className="w-full bg-[#050811] border-y border-[#1e293b] overflow-hidden py-2.5 relative select-none">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050811] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050811] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center">
        {/* Fixed Title Tag */}
        <div className="flex-shrink-0 z-20 flex items-center gap-2 pl-4 pr-3 py-0.5 bg-[#0a0f1d] border-r border-[#1e293b] font-mono-tech text-[11px] font-bold text-cyan-400 uppercase tracking-widest">
          <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
          <span>LIVE TELEMETRY FEED</span>
        </div>

        {/* Scrolling Ticker (Duplicated for Seamless Infinite Loop) */}
        <div className="overflow-hidden flex-1">
          <div className="animate-ticker flex items-center space-x-6">
            {[...telemetryItems, ...telemetryItems].map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 font-mono-tech text-xs whitespace-nowrap text-slate-400"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${
                  item.status === "warn" 
                    ? "bg-amber-400 shadow-[0_0_6px_#f59e0b]" 
                    : "bg-emerald-400 shadow-[0_0_6px_#10b981]"
                }`} />
                <span className="text-slate-500 font-semibold">{item.label}:</span>
                <span className={`font-bold ${
                  item.status === "warn" ? "text-amber-400" : "text-slate-200"
                }`}>
                  {item.value}
                </span>
                <span className="text-slate-700 mx-2">/</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
