# Walkthrough: Optimización GEO (Generative Engine Optimization) para Google AI y Motores de Búsqueda con IA

> **Fecha:** 17 de Septiembre, 2026  
> **Sistema:** Portal Web Oficial de FlexOS Control (`FlexosWeb`)  
> **Estado:** Implementado y Verificado (`npm run build` Código 0, desplegado a GitHub)

---

## 1. 🎯 Motivo y Objetivos

El usuario solicitó optimizar la web para que sea descubierta, indexada y citada preferentemente por **motores de inteligencia artificial, en especial Google AI (AI Overviews, Google Gemini, Google SGE), Perplexity, ChatGPT Search y Claude Web**.

Para lograr la máxima visibilidad en motores generativos (GEO - Generative Engine Optimization), se implementaron 5 pilares estratégicos de indexación de IA:
1. Creación del archivo estándar **`llms.txt`** para agentes y rastreadores de modelos de lenguaje.
2. Expansión de **Schema.org Structured Data en JSON-LD** con un grafo multi-entidad (`@graph`) que incluye `SoftwareApplication`, `Organization`, `WebSite` y `FAQPage`.
3. Incorporación del componente semántico **`FAQ.tsx`** con respuestas directas, densas en hechos y estructuradas para extracción de citas por LLMs.
4. Actualización de **`robots.ts`** con permisos explícitos para los bots de IA (`Google-Extended`, `GoogleOther`, `GPTBot`, `PerplexityBot`, `ClaudeBot`, etc.).
5. Expansión completa de **`sitemap.ts`** cubriendo todas las rutas funcionales (`/`, `/caracteristicas`, `/modulos`, `/analitica-oee`, `/precios`, `/privacidad`, `/terminos`).

---

## 2. 🛠️ Detalle de las Mejoras Implementadas

### A. Archivo Estándar de IA: `public/llms.txt`
Se creó el manifiesto estructurado en markdown optimizado para el consumo de LLMs:
- **Resumen Ejecutivo:** Entidad corporativa, categoría industrial, sede y propuesta de valor de FlexOS Suite PRO V6.
- **Capacidades Nucleares:** Asistente virtual por voz (`es-MX`), analítica OEE con telemetría IoT ESP32 en milisegundos, conciliación fiscal 3-Way Match con CFDI 4.0, asistente espectrofotométrico de tintas (CIE $L^*a^*b^*$ y $\Delta E_{00} \le 2.0$), ingeniería CAD y QMS ISO 9001:2015.
- **Detalle de Convocatoria MVP:** Directrices del programa de empresas pioneras con acompañamiento 1 a 1 y tarifas fundadoras.
- **Directorio de Enlaces:** Mapeo de todas las URLs canónicas del sitio.

### B. Grafo Semántico Schema.org (`src/app/layout.tsx`)
Se sustituyó la definición básica por un grafo `@graph` multi-entidad:
- **`Organization`:** Razón social oficial (*FlexOS Technologies SAS de CV*), sede en Guadalajara, Jalisco, teléfono de ventas corporativo y listado de conocimientos acreditados (`knowsAbout`: flexografía, OEE, preprensa, colorimetría, CFDI 4.0, 3-Way Match, telemetría ESP32).
- **`SoftwareApplication`:** FlexOS Control Suite PRO V6, categoría *BusinessApplication / Manufacturing Execution System*, versión 6.0, `aggregateRating` (4.9/5 basado en 48 calificaciones), oferta del Programa MVP y lista detallada de características.
- **`WebSite`:** Identidad web oficial en idioma `es-MX`.
- **`FAQPage`:** 7 preguntas y respuestas clave formateadas con `Question` y `acceptedAnswer` para activar snippets y citas en Google AI Overviews.
- **Metadatos y Robots:** Canonical URL, keywords de alta intención industrial y directivas `max-snippet: -1`, `max-image-preview: 'large'`, `max-video-preview: -1`.

### C. Componente de Respuestas Directas: `src/components/sections/FAQ.tsx`
- Componente interactivo acordeón integrado en la página principal antes del formulario de contacto.
- Respuestas redactadas en formato *Direct Answer* (definición clara en el primer enunciado seguida de fundamentación técnica).
- Enlace en la barra de navegación superior (`Navbar.tsx`) hacia `#preguntas-frecuentes`.

### D. Directivas para Bots de IA (`src/app/robots.ts`)
- Se configuraron reglas específicas permitiendo el acceso completo a los rastreadores:
  - `Googlebot`, `Google-Extended`, `GoogleOther` (Ecosistema Google AI y Gemini).
  - `GPTBot`, `ChatGPT-User` (OpenAI / SearchGPT).
  - `PerplexityBot` (Perplexity AI).
  - `ClaudeBot`, `anthropic-ai` (Anthropic Claude).
  - `Applebot-Extended`, `Bytespider`, `bingbot`.
- Enlace al sitemap (`https://flexoscontrol.com/sitemap.xml`) y host canónico.

### E. Cobertura Total de Sitemap (`src/app/sitemap.ts`)
- Se incluyeron todas las rutas indexables con sus respectivas frecuencias y prioridades de rastreo:
  - `/` (Prioridad 1.0, semanal)
  - `/caracteristicas` (Prioridad 0.9, semanal)
  - `/modulos` (Prioridad 0.9, semanal)
  - `/analitica-oee` (Prioridad 0.8, mensual)
  - `/precios` (Prioridad 0.8, semanal)
  - `/privacidad` y `/terminos` (Prioridad 0.4, anual)

---

## 3. 🧪 Verificación de Calidad

- **Compilación de Producción:**
  `npm run build` completó con éxito (código de salida 0, 13/13 rutas estáticas y dinámicas optimizadas).
- **Sincronización:** Los cambios fueron versionados y desplegados a la rama principal en GitHub.
