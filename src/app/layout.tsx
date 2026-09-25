import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/umbrella/FloatingActions";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flexos.tech"),
  title: {
    default: "FlexOS Technologies | Software Industrial, Apps Móviles & Automatización",
    template: "%s | FlexOS Technologies",
  },
  description:
    "Firma de ingeniería de software industrial, desarrollo de sistemas web a la medida, aplicaciones móviles nativas y hardware/IoT con PLCs. Creadores de FlexOS Control y Die Tracker Pro.",
  keywords: [
    "FlexOS Technologies",
    "ingeniería de software industrial",
    "desarrollo de software a medida",
    "aplicaciones móviles industriales",
    "automatización industrial PLCs",
    "programación PLC Siemens Allen-Bradley",
    "telemetría industrial IoT",
    "cálculo OEE tiempo real",
    "ERP manufactura",
    "MES flexografía",
    "FlexOS Control",
    "Die Tracker Pro",
    "trazabilidad de suajes",
    "Industria 4.0 México",
    "software Guadalajara Jalisco"
  ],
  authors: [{ name: "FlexOS Technologies SAS de CV", url: "https://flexos.tech" }],
  creator: "FlexOS Technologies SAS de CV",
  publisher: "FlexOS Technologies SAS de CV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://flexos.tech",
    languages: {
      "es-MX": "https://flexos.tech",
      "es": "https://flexos.tech",
      "x-default": "https://flexos.tech",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "FlexOS Technologies | Software Industrial, Apps Móviles & Automatización",
    description:
      "Ingeniería tecnológica de espectro completo: sistemas web a la medida, aplicaciones móviles nativas, automatización con PLCs y plataformas industriales líderes (FlexOS Control y Die Tracker Pro).",
    url: "https://flexos.tech",
    siteName: "FlexOS Technologies",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/logo_technologies.png",
        width: 800,
        height: 200,
        alt: "Logotipo Oficial de FlexOS Technologies",
      },
      {
        url: "/features-visual.png",
        width: 1200,
        height: 630,
        alt: "FlexOS Technologies - Consola de Control Industrial y Telemetría",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlexOS Technologies | Software Industrial, Apps Móviles & Automatización",
    description:
      "Ingeniería de software a la medida, apps móviles nativas, conexión a PLCs y plataformas industriales insignia.",
    images: ["/logo_technologies.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-token",
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://flexos.tech/#organization",
      "name": "FlexOS Technologies SAS de CV",
      "legalName": "FlexOS Technologies SAS de CV",
      "url": "https://flexos.tech",
      "logo": "https://flexos.tech/logo_technologies.png",
      "description": "Firma de ingeniería tecnológica especializada en software industrial, sistemas web a medida, aplicaciones móviles nativas, conectividad con PLCs y plataformas ERP/MES de manufactura.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Guadalajara",
        "addressRegion": "Jalisco",
        "addressCountry": "MX"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+52-33-4874-2297",
        "contactType": "sales",
        "email": "ventas@flexos.tech",
        "availableLanguage": ["Spanish", "English"]
      },
      "sameAs": [
        "https://flexoscontrol.com",
        "https://dietrackerpro.com"
      ],
      "knowsAbout": [
        "Desarrollo de Software Industrial",
        "Sistemas Web Empresariales y Cloud ERP/MES",
        "Desarrollo de Aplicaciones Móviles Nativas iOS y Android",
        "Automatización Industrial e Integración con PLCs (Siemens, Allen-Bradley, Omron)",
        "Telemetría IoT de Prensas y Sensores en Tiempo Real",
        "Cálculo y Monitoreo de OEE (Overall Equipment Effectiveness)",
        "Facturación CFDI 4.0 Mexicana y Auditoría 3-Way Match",
        "Gestión y Trazabilidad del Ciclo de Vida de Suajes y Troqueles"
      ],
      "brand": [
        {
          "@type": "Brand",
          "name": "FlexOS Control",
          "url": "https://flexoscontrol.com",
          "description": "Suite ERP & MES vertical para la industria flexográfica, conversión de empaque y etiquetas."
        },
        {
          "@type": "Brand",
          "name": "Die Tracker Pro",
          "url": "https://dietrackerpro.com",
          "description": "Plataforma líder para la gestión y ciclo de vida de suajes, troqueles y herramentales de precisión."
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://flexos.tech/#website",
      "url": "https://flexos.tech",
      "name": "FlexOS Technologies",
      "description": "Portal corporativo oficial de FlexOS Technologies SAS de CV.",
      "publisher": {
        "@id": "https://flexos.tech/#organization"
      },
      "inLanguage": "es-MX"
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://flexoscontrol.com/#software",
      "name": "FlexOS Control",
      "operatingSystem": "Web, Cloud, Windows, Linux, iOS, Android",
      "applicationCategory": "BusinessApplication, ManufacturingExecutionSystem",
      "url": "https://flexoscontrol.com",
      "publisher": {
        "@id": "https://flexostechnologies.com/#organization"
      },
      "description": "ERP y MES vertical para impresión flexográfica, empaque flexible, cálculo de OEE y facturación CFDI 4.0."
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://dietrackerpro.com/#software",
      "name": "Die Tracker Pro",
      "operatingSystem": "Web, Cloud, iOS, Android",
      "applicationCategory": "BusinessApplication, ToolManagementSystem",
      "url": "https://dietrackerpro.com",
      "publisher": {
        "@id": "https://flexostechnologies.com/#organization"
      },
      "description": "Software especializado en control del ciclo de vida, afilados, desgaste y revoluciones de suajes con DataMatrix."
    },
    {
      "@type": "FAQPage",
      "@id": "https://flexostechnologies.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué servicios de ingeniería desarrolla FlexOS Technologies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FlexOS Technologies desarrolla sistemas web complejos a la medida (ERP, MES, CRM), portales corporativos de alto rendimiento, aplicaciones móviles nativas para iOS y Android, y proyectos de hardware especializado para automatización de planta y conexión con PLCs e IoT."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué plataformas de software opera FlexOS Technologies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FlexOS Technologies opera dos suites líderes: FlexOS Control (sistema ERP/MES especializado en la industria de la flexografía y empaque) y Die Tracker Pro (plataforma de trazabilidad y mantenimiento del ciclo de vida de suajes y troqueles)."
          }
        },
        {
          "@type": "Question",
          "name": "¿Con qué marcas de PLCs y protocolos industriales se conecta FlexOS Technologies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FlexOS Technologies cuenta con conectores nativos para PLCs Siemens (S7-1200, S7-1500), Allen-Bradley / Rockwell Automation (ControlLogix, CompactLogix), Omron y Mitsubishi, empleando protocolos industriales como OPC-UA, MQTT, Ethernet/IP y Modbus TCP/RTU."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="es" 
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`} 
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#080c14] text-slate-100 blueprint-grid selection:bg-cyan-500/30 selection:text-cyan-200" suppressHydrationWarning>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
