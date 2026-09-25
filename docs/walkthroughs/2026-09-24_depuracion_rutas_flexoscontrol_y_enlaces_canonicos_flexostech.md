# Walkthrough - Depuración de Rutas de FlexOS Control y Homologación Canónica a FlexOS Technologies (flexos.tech)

## Resumen del Cambio
Se eliminaron por completo las rutas, páginas y referencias canónicas que pertenecían al producto individual **FlexOS Control** (`https://flexoscontrol.com`) y que habían quedado remanentes en el repositorio de la empresa matriz **FlexOS Technologies** (`https://flexos.tech`):
1. **Eliminación de Rutas Obsoletas de Producto:** Se eliminaron los directorios `src/app/analitica-oee/`, `src/app/caracteristicas/`, `src/app/modulos/` y `src/app/precios/`.
2. **Depuración de Enlaces Canónicos en `llms.txt`:** Se ajustó la sección de enlaces canónicos para incluir únicamente los accesos de la empresa matriz `flexos.tech` (`/`, `/#servicios-ingenieria`, `/#ecosistema`, `/#capacidades`, `/#contacto`, `/privacidad`, `/terminos`), deslindando claramente que `FlexOS Control` y `Die Tracker Pro` son productos SaaS con sus propios dominios independientes (`flexoscontrol.com` y `dietrackerpro.com`).
3. **Limpieza del Sitemap (`src/app/sitemap.ts`):** Reducción del sitemap a las 3 rutas públicas reales de FlexOS Technologies (`/`, `/privacidad`, `/terminos`).
4. **Actualización de API de Contexto (`src/app/api/ai-context/route.ts`):** Inclusión del mapa de URLs canónicas oficial de la empresa matriz.
5. **Verificación de Compilación:** `npm run build` compiló limpiamente 10/10 rutas de la aplicación con 0 errores.

---

## 1. Arquitectura Final de Rutas en `flexos.tech`

| Ruta | Tipo | Propósito |
| :--- | :--- | :--- |
| `/` | Estática (SSG) | Landing corporativa de FlexOS Technologies SAS de CV (servicios a medida, plataformas insignia, capacidades de ingeniería y contacto) |
| `/privacidad` | Estática (SSG) | Aviso de Privacidad oficial conforme a la LFPDPPP |
| `/terminos` | Estática (SSG) | Términos y Condiciones de Servicio y Licenciamiento |
| `/api/ai-context` | Dinámica (SSR) | Contexto y grafo de conocimiento para agentes de IA |
| `/api/contacto` | Dinámica (SSR) | Despacho de cotizaciones y solicitudes de contacto técnico |
| `/sitemap.xml` | Estática | Mapa de sitio canónico de `https://flexos.tech` |
| `/robots.txt` | Estática | Directivas de indexación y rastreo para Googlebot y bots de IA |

---

## 2. Verificación
* Compilación limpia con `npm run build` (Turbopack, código `0`, 10/10 rutas generadas).
