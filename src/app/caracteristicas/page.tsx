import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import AllFeatures from "@/components/sections/AllFeatures";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Todas las Características | FlexOS Control",
  description:
    "Explora todas las capacidades de FlexOS Control: IA Vision con Google Gemini, Analítica OEE, Ingeniería de Precisión, Terminal de Voz y más. ERP/MES diseñado para la industria flexográfica.",
  keywords: [
    "características ERP flexografía",
    "software control de piso imprenta",
    "asistente virtual flexo",
    "trazabilidad de etiquetas",
    "automatización flexográfica"
  ],
  alternates: {
    canonical: "https://flexoscontrol.com/caracteristicas",
  },
};

export default function CaracteristicasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <AllFeatures />
      </main>
      <Footer />
    </>
  );
}
