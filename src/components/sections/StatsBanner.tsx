export default function StatsBanner() {
  const stats = [
    { label: "Datos Ingeridos Diarios", value: "30-2M+" },
    { label: "Instalaciones Globales", value: "3+" },
    { label: "Soporte Nivel 3", value: "24/7" },
    { label: "Uptime Garantizado", value: "100%" },
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-flexos-blue to-cyan-400">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-medium text-slate-400 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
