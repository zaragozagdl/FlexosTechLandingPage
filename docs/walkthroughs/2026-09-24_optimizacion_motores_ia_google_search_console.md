# Walkthrough - Optimización para Motores de IA y Google Search Console

## Resumen del Cambio
Se ejecutó una optimización integral y de grado de ingeniería para posicionar el portal corporativo de **FlexOS Technologies** ([flexostechnologies.com](https://flexostechnologies.com)) tanto en **Google Search Console** (SEO técnico tradicional) como en los **Motores de Búsqueda de Inteligencia Artificial** (Generative Engine Optimization / GEO: ChatGPT Search, Perplexity, Claude, Google Gemini, Microsoft Copilot).

---

## 1. Implementaciones para Motores de IA (GEO)

1. **Estándar [`public/llms.txt`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/public/llms.txt):**
   - Archivo en raíz optimizado para crawlers de IA que resume de manera estructurada y concisa la identidad corporativa de FlexOS Technologies, sus 4 pilares de ingeniería (Sistemas Web Cloud, Portales Web, Apps Móviles, Hardware/PLCs/IoT), especificaciones de sus productos insignia (**FlexOS Control** y **Die Tracker Pro**), enlaces canónicos y canales de contacto.

2. **Estándar Extendido [`public/llms-full.txt`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/public/llms-full.txt):**
   - Documentación técnica exhaustiva con detalles de arquitectura, compatibilidad de marcas de PLCs (Siemens, Allen-Bradley, Omron, Mitsubishi), protocolos industriales (OPC-UA, MQTT, Modbus), cálculo de OEE y preguntas frecuentes (FAQ) diseñadas para ser citadas con alta autoridad en respuestas generativas de IA.

3. **Schema.org Enriquecido en [`src/app/layout.tsx`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/src/app/layout.tsx):**
   - **`Organization`:** Razón social oficial (`FlexOS Technologies SAS de CV`), logotipo oficial, teléfonos, correos, catálogo de especialidades y entidades vinculadas (`sameAs`).
   - **`WebSite`:** Metadatos de portal web con idioma `es-MX`.
   - **`SoftwareApplication`:** Entidades de software estructuradas para *FlexOS Control* y *Die Tracker Pro*.
   - **`FAQPage`:** Preguntas y respuestas canónicas estructuradas que alimentan directamente a Google AI Overviews y motores generativos.

---

## 2. Implementaciones para Google Search Console & SEO Técnico

1. **Directivas en [`src/app/robots.ts`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/src/app/robots.ts):**
   - Permiso explícito de rastreo a Googlebot, Google-Extended, GoogleOther y a los bots de IA más relevantes: `GPTBot`, `ChatGPT-User`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `anthropic-ai`, `Applebot-Extended`, `bingbot`, `cohere-ai` y `Amazonbot`.
   - Sitemap apuntando a `https://flexostechnologies.com/sitemap.xml`.
   - Host canónico establecido en `https://flexostechnologies.com`.

2. **Mapa de Sitio Dinámico en [`src/app/sitemap.ts`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/src/app/sitemap.ts):**
   - Actualizada la URL base a `https://flexostechnologies.com`.
   - Ponderación de prioridades (`priority: 1.0` en home, `0.85` en características y módulos) y fechas de modificación dinámicas.

3. **Metadatos Canónicos y Verificación en [`src/app/layout.tsx`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/src/app/layout.tsx):**
   - Soporte para metaetiqueta de verificación de Google Search Console (`verification.google` parametrizable vía `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`).
   - Configuración avanzada de `googleBot` (`max-image-preview: "large"`, `max-snippet: -1`, `max-video-preview: -1`).
   - Idiomas alternos y canonical `es-MX`, `es` y `x-default`.
   - Tarjetas OpenGraph y Twitter con imágenes oficiales de marca.

---

## 3. Verificación
* **Build de Producción:** Verificado exitosamente con `npm run build` (código `0`, 13/13 rutas estáticas/dinámicas compiladas).
