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
  metadataBase: new URL("https://flexostechnologies.com"),
  title: {
    default: "FlexOS Technologies | Industrial Software Engineering & Next-Gen Manufacturing Systems",
    template: "%s | FlexOS Technologies",
  },
  description:
    "Elite industrial software engineering house specialized in next-gen manufacturing ERPs, telemetry, and asset-traceability systems. Creators of FlexOS Control and Die Tracker Pro.",
  keywords: [
    "FlexOS Technologies",
    "industrial software engineering",
    "manufacturing ERP",
    "die tracker",
    "flexos control",
    "flexographic telemetry",
    "industrial IoT ESP32",
    "tooling lifecycle",
    "Industry 4.0 software",
    "suajes y troqueles",
    "trazabilidad industrial"
  ],
  authors: [{ name: "FlexOS Technologies SAS de CV" }],
  creator: "FlexOS Technologies",
  publisher: "FlexOS Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://flexostechnologies.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "FlexOS Technologies | Mission-Critical Industrial Software",
    description:
      "Architecting the digital foundation of modern manufacturing plants: real-time telemetry, asset lifecycle traceability, and cloud-native ERPs.",
    url: "https://flexostechnologies.com",
    siteName: "FlexOS Technologies",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlexOS Technologies | Next-Gen Industrial Software",
    description: "Next-gen industrial software: FlexOS Control (ERP/MES) & Die Tracker (Asset Lifecycle).",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://flexostechnologies.com/#organization",
      "name": "FlexOS Technologies SAS de CV",
      "url": "https://flexostechnologies.com",
      "logo": "https://flexostechnologies.com/logo_technologies.png",
      "description": "Elite industrial software engineering house specialized in next-gen manufacturing ERPs, telemetry, and asset-traceability systems.",
      "knowsAbout": [
        "Industrial ERP and MES Architecture",
        "Tooling and Die Lifecycle Management",
        "Rotary and Flat Die Tracking",
        "High-Speed Flexographic Telemetry",
        "IoT ESP32 Plant-Floor Integration",
        "OEE Real-Time Analytics"
      ],
      "brand": [
        {
          "@type": "Brand",
          "name": "FlexOS Control",
          "url": "https://flexoscontrol.com"
        },
        {
          "@type": "Brand",
          "name": "Die Tracker Pro",
          "url": "https://dietrackerpro.com"
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
