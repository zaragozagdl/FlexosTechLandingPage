import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Pricing from "@/components/sections/Pricing";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Planes, Precios y Programa Pionero MVP | FlexOS Control",
  description:
    "Consulte los esquemas de inversión y postúlese al Programa de Empresas Pioneras MVP de FlexOS Control Suite PRO V6. Implementación y acompañamiento 1 a 1 para convertidores flexográficos.",
  keywords: [
    "precios ERP flexografía",
    "costo software etiquetas",
    "programa pionero MVP",
    "implementación ERP imprenta",
    "cotización sistema MES"
  ],
  alternates: {
    canonical: "https://flexoscontrol.com/precios",
  },
};

export default function PreciosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
