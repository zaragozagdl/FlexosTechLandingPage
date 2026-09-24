import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import PrivacyPolicy from "@/components/sections/PrivacyPolicy";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | FlexOS Control",
  description:
    "Conoce cómo FlexOS Control recolecta, usa y protege tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP).",
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
}
