import type { Metadata } from "next";
import UmbrellaNavbar from "@/components/umbrella/Navbar";
import TermsConditions from "@/components/sections/TermsConditions";
import TechnicalFooter from "@/components/umbrella/TechnicalFooter";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Servicio | FlexOS Technologies",
  description:
    "Consulta los términos y condiciones de uso, licenciamiento de software y servicios de ingeniería industrial de FlexOS Technologies SAS de CV.",
  alternates: {
    canonical: "https://flexos.tech/terminos",
  },
};

export default function TerminosPage() {
  return (
    <div className="bg-[#04060a] text-slate-100 min-h-screen flex flex-col justify-between">
      <UmbrellaNavbar />
      <main className="pt-20 flex-grow">
        <TermsConditions />
      </main>
      <TechnicalFooter />
    </div>
  );
}
