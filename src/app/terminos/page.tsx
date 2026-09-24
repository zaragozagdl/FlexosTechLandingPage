import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import TermsConditions from "@/components/sections/TermsConditions";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones | FlexOS Control",
  description:
    "Consulta los términos y condiciones de uso de la plataforma FlexOS Control ERP/MES para la industria flexográfica.",
};

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <TermsConditions />
      </main>
      <Footer />
    </>
  );
}
