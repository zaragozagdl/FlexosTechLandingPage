# Walkthrough: Diagnóstico y Optimización para Indexación en Google Search

**Fecha:** 2026-09-20  
**Objetivo:** Diagnosticar por qué la página no aparece en las búsquedas de Google Search, corregir brechas técnicas de metadatos (páginas sin etiquetas de indexación individual) y definir la guía operativa exacta para indexar y posicionar el dominio `https://flexoscontrol.com`.

---

## 1. Diagnóstico del Estado Actual en Google

Al auditar la presencia de `flexoscontrol.com` en motores de búsqueda, se identificaron los siguientes hallazgos:
1. **Google AI & Vertex AI Search ya conocen la página:** En consultas generativas de IA sobre "flexoscontrol.com" o "flexos control erp flexografia", el motor ya cita a `flexoscontrol.com` como fuente oficial primaria de Guadalajara, México.
2. **Google Search Tradicional (Indexación Orgánica):**
   - El dominio es reciente o de baja densidad de enlaces entrantes (backlinks).
   - Googlebot puede tardar días o semanas en indexar un sitio nuevo a menos que se le solicite manualmente mediante **Google Search Console**.
3. **Brecha en Metadatos de Subpáginas:**
   - Páginas clave como `/modulos`, `/precios` y `/analitica-oee` carecían de su bloque `export const metadata: Metadata` individual, lo que provocaba que heredaran únicamente el título genérico raíz en vez de palabras clave específicas de búsqueda ("Módulos ERP Flexografía", "Precios ERP", "Analítica OEE Prensas").

---

## 2. Optimizaciones de Código Implementadas

1. **Metadatos Dedicados y Canónicos por Página:**
   - **`src/app/modulos/page.tsx`:** Título *"Módulos del Sistema ERP & MES | FlexOS Control"*, descripción orientada a módulos técnicos, keywords específicas y `canonical: "https://flexoscontrol.com/modulos"`.
   - **`src/app/precios/page.tsx`:** Título *"Planes, Precios y Programa Pionero MVP | FlexOS Control"*, descripción y canonical dedicado.
   - **`src/app/analitica-oee/page.tsx`:** Título *"Analítica OEE y Telemetría IoT en Tiempo Real | FlexOS Control"*, keywords de telemetría y OEE, y canonical dedicado.
   - **`src/app/caracteristicas/page.tsx`:** Incorporación de keywords y canonical dedicado.
2. **Enriquecimiento de Keywords en Root Layout (`layout.tsx`):**
   - Se añadieron términos con alta intención de búsqueda comercial: *"software para flexografía"*, *"sistema ERP para imprenta flexográfica"*, *"software de etiquetas autoadheribles"*, *"cotizador de etiquetas flexo"*, *"software flexografía México"*.
3. **Verificación de `robots.txt` y `sitemap.xml`:**
   - Rutas activas, accesibles públicamente y entregando código 200 sin bloqueos a rastreadores.

---

## 3. Guía Operativa para Lograr Indexación Inmediata en Google Search Console

Para que Google muestre la página en sus resultados de búsqueda de inmediato, se deben ejecutar los siguientes pasos en la consola oficial:

1. **Acceder a Google Search Console:**  
   Ir a [search.google.com/search-console](https://search.google.com/search-console).
2. **Verificar la Propiedad:**  
   Agregar la propiedad de tipo **Prefijo de la URL** con `https://flexoscontrol.com`. La etiqueta de verificación HTML ya está integrada en el código fuente (`layout.tsx`):
   `<meta name="google-site-verification" content="1YZO7GB_ozwzJXqvtyiA1Mflav3Z3YkorzAC-FhhJq0" />`.
3. **Enviar el Sitemap:**  
   En la barra lateral izquierda, ir a **Sitemaps** e ingresar `sitemap.xml` (URL completa: `https://flexoscontrol.com/sitemap.xml`).
4. **Solicitar Indexación Manual (Forzar Rastreo):**  
   En la barra superior *"Inspeccionar las URLs de https://flexoscontrol.com"*, ingresar:
   - `https://flexoscontrol.com` &rarr; Clic en **"SOLICITAR INDEXACIÓN"**.
   - `https://flexoscontrol.com/modulos` &rarr; Clic en **"SOLICITAR INDEXACIÓN"**.
   - `https://flexoscontrol.com/caracteristicas` &rarr; Clic en **"SOLICITAR INDEXACIÓN"**.
   - `https://flexoscontrol.com/analitica-oee` &rarr; Clic en **"SOLICITAR INDEXACIÓN"**.
5. **Crear Perfil de Empresa en Google (Google Business Profile):**  
   Dar de alta *FlexOS Technologies SAS de CV* vinculando el sitio web. Esto genera presencia inmediata en el Knowledge Panel de Google.

---

## 4. Verificación de Compilación

- **Comando:** `npm run build`
- **Resultado:** Compilación limpia con Turbopack exitosa (código 0).
