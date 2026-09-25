import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    organization: {
      name: "FlexOS Technologies SAS de CV",
      domain: "https://flexos.tech",
      headquarters: "Guadalajara, Jalisco, México",
      contact: {
        email: "ventas@flexos.tech",
        whatsapp: "+52 33 4874 2297",
        phone_numeric: "523348742297"
      },
      about: "Firma de ingeniería tecnológica especializada en software industrial, desarrollo web a la medida, apps móviles nativas y hardware/IoT con PLCs."
    },
    engineering_pillars: [
      {
        id: "ENG-01",
        title: "Sistemas Web Complejos & Portales Cloud",
        scope: "ERPs, MESs, CRMs a medida, microservicios y facturación CFDI 4.0 con 3-Way Match."
      },
      {
        id: "ENG-02",
        title: "Páginas Web Corporativas de Alto Impacto",
        scope: "Portales de alto rendimiento, estética industrial deep tech y SEO técnico avanzado."
      },
      {
        id: "ENG-03",
        title: "Aplicaciones Móviles (iOS & Android)",
        scope: "Apps nativas para piso de planta, escaneo de DataMatrix/QR y soporte Offline-First."
      },
      {
        id: "ENG-04",
        title: "Hardware Especializado, PLCs & IoT",
        scope: "Conexión directa a PLCs Siemens, Allen-Bradley, Omron, microcontroladores ESP32 y telemetría OEE."
      }
    ],
    flagship_products: [
      {
        name: "FlexOS Control",
        url: "https://flexoscontrol.com",
        description: "ERP & MES vertical diseñado exclusivamente para la industria de flexografía y empaque."
      },
      {
        name: "Die Tracker Pro",
        url: "https://dietrackerpro.com",
        description: "Plataforma de trazabilidad y gestión del ciclo de vida de suajes, troqueles y herramentales."
      }
    ],
    documentation_urls: {
      llms_txt: "https://flexos.tech/llms.txt",
      llms_full_txt: "https://flexos.tech/llms-full.txt",
      sitemap: "https://flexos.tech/sitemap.xml",
      robots: "https://flexos.tech/robots.txt"
    }
  });
}
