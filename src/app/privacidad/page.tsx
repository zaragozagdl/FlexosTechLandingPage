import type { Metadata } from "next";
import UmbrellaNavbar from "@/components/umbrella/Navbar";
import PrivacyPolicy from "@/components/sections/PrivacyPolicy";
import TechnicalFooter from "@/components/umbrella/TechnicalFooter";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | FlexOS Technologies",
  description:
    "Conoce cómo FlexOS Technologies SAS de CV recolecta, procesa y protege los datos personales, telemetría y confidencialidad industrial conforme a la Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP).",
  alternates: {
    canonical: "https://flexos.tech/privacidad",
  },
};

export default function PrivacidadPage() {
  return (
    <div className="bg-[#04060a] text-slate-100 min-h-screen flex flex-col justify-between">
      <UmbrellaNavbar />
      <main className="pt-20 flex-grow">
        <PrivacyPolicy />
      </main>
      <TechnicalFooter />
    </div>
  );
}
