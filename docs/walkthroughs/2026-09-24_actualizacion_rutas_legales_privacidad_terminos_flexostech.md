# Walkthrough - Actualización de Enlaces, Plantillas y Rutas de Privacidad y Términos

## Resumen del Cambio
Se corrigió la redirección indebida de los enlaces del pie de página que apuntaban a `flexoscontrol.com` en lugar de las rutas internas de FlexOS Technologies. Asimismo, se adaptaron las páginas y componentes legales (`/privacidad` y `/terminos`) para reflejar la identidad corporativa de **FlexOS Technologies SAS de CV**, su diseño *Dark Tech* unificado y su dominio oficial `https://flexos.tech`.

---

## 1. Modificaciones Realizadas

### A. Pie de Página Técnico (`src/components/umbrella/TechnicalFooter.tsx`)
* Se reemplazaron los enlaces externos con `target="_blank"` a `https://flexoscontrol.com/privacidad` y `https://flexoscontrol.com/terminos` por componentes `<Link>` de Next.js que navegan de forma interna y fluida a:
  * `/privacidad` (Aviso de Privacidad)
  * `/terminos` (Términos de Servicio)
* Se ajustó el enlace a `#ecosistema` para ser relativo a la raíz (`/#ecosistema`), permitiendo regresar a la sección correspondiente desde cualquier subpágina.

### B. Barra de Navegación (`src/components/umbrella/Navbar.tsx`)
* Se prefijaron los anclajes con barra diagonal (`/#ecosistema`, `/#servicios-ingenieria`, `/#capacidades`, `/#contacto`), garantizando que la navegación funcione correctamente tanto desde la landing principal como desde `/privacidad` y `/terminos`.

### C. Páginas y Metadatos Canónicos (`/privacidad` y `/terminos`)
* **`src/app/privacidad/page.tsx`:**
  * Sustitución de `Navbar` y `Footer` antiguos por `UmbrellaNavbar` y `TechnicalFooter`.
  * Metadatos actualizados: Título *"Aviso de Privacidad | FlexOS Technologies"* y descripción para FlexOS Technologies SAS de CV conforme a la LFPDPPP.
  * Canónica configurada a `https://flexos.tech/privacidad`.
* **`src/app/terminos/page.tsx`:**
  * Sustitución de `Navbar` y `Footer` antiguos por `UmbrellaNavbar` y `TechnicalFooter`.
  * Metadatos actualizados: Título *"Términos y Condiciones de Servicio | FlexOS Technologies"*.
  * Canónica configurada a `https://flexos.tech/terminos`.

### D. Componentes Legales Dark Tech
* **`src/components/sections/PrivacyPolicy.tsx`:**
  * Rediseño completo con paleta *Dark Tech* (`#04060a`, `#080d1a`, bordes `#1e293b`, acentos cian y esmeralda).
  * Corrección de correos de contacto a `privacidad@flexostechnologies.com` y `contacto@flexostechnologies.com`.
  * Teléfono corporativo: `+52 (33) 4874-2297`.
* **`src/components/sections/TermsConditions.tsx`:**
  * Rediseño con paleta *Dark Tech* homogénea.
  * Ampliación del objeto legal y alcance de servicios: plataformas SaaS (FlexOS Control, Die Tracker Pro, KromaNode Lab), desarrollo a medida (web/cloud, apps móviles iOS/Android) y automatización industrial / PLCs.
  * Jurisdicción legal fijada en Guadalajara, Jalisco, México.

### E. Homologación de Dominio Oficial (`https://flexos.tech`)
* Actualización de `sitemap.ts`, `layout.tsx`, `llms.txt` y `llms-full.txt` para mantener coherencia plena con el dominio de producción `https://flexos.tech`.

---

## 2. Verificación de Compilación
* Compilación limpia con `npm run build` (Turbopack, código `0`, 14/14 rutas estáticas y dinámicas compiladas).
