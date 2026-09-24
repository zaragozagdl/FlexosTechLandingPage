"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const targetDate = new Date("2026-08-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 my-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both delay-300">
      <CountdownItem value={timeLeft.days} label="Días" />
      <CountdownItem value={timeLeft.hours} label="Horas" />
      <CountdownItem value={timeLeft.minutes} label="Minutos" />
      <CountdownItem value={timeLeft.seconds} label="Segundos" />
    </div>
  );
}

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[80px] md:min-w-[100px] p-4 rounded-2xl glass border border-white/10 shadow-lg group hover:border-flexos-blue/50 transition-colors duration-300">
      <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 group-hover:from-flexos-blue group-hover:to-cyan-400 transition-all duration-300">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-widest mt-1">
        {label}
      </span>
    </div>
  );
}
