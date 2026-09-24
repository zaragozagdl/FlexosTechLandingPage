# Walkthrough: Integración de las Nuevas Capacidades de Cotización Técnica V6 en el Portal Web

**Fecha:** 2026-09-20  
**Módulos / Archivos Modificados:**
- `src/components/sections/SpecializedEngineering.tsx`
- `src/components/sections/CoreFeatures.tsx`
- `src/components/sections/ModulesShowcase.tsx`
- `src/app/modulos/page.tsx`
- `src/components/sections/AllFeatures.tsx`
- `src/components/sections/FAQ.tsx`
- `src/app/layout.tsx` (Schema.org JSON-LD)
**Estado:** Completado, Verificado (`npm run build` exitoso, código 0).

---

## 1. Contexto y Requerimiento

A partir del análisis exhaustivo del código fuente y las memorias de arquitectura de **`FlexOSSuiteV6`** (`C:\Archivos_fuera_de_onedrive\Github\FlexOSSuiteV6`), se identificó la evolución técnica de los motores de cotización flexográfica:
1. **4 Cotizadores Técnicos Especializados:** Autoadheribles (Básico y Avanzado) y Manga Termoencogible (Básico y Avanzado).
2. **Modelado Físico-Volumétrico de Tintas por Anilox (BCM):** Cálculo de $\text{cm}^3 = \text{BCM} \times 1.55$ con doble transferencia química según química de tinta (*Base Agua*, *Base UV*, *Base Solvente*) y rendimiento exacto en $\text{g/m}^2$ y $\text{kg totales}$.
3. **Analizador Interactivo de Arte con Pipeta y Descuento CMYK:** Mapeo de colores directos y especiales, solapas y barnices sobre el arte con Canvas API, restando el área del color directo de la cuatricromía para evitar doble cobro de tinta.
4. **Centralización de Stickyback & Suajes:** Costeo paramétrico de cinta de montaje por desarrollo y número de grabados, junto con prorrateo de desgaste de suaje por metro lineal.
5. **Desglose de Costos en 7 Factores:** Sustrato, Tintas BCM, Stickyback, Suajes, Grabados, Empaque y Prensa/MO, con fórmula de margen comercial real $P = \text{Costo} / (1 - \text{Margen})$.

Se aprobó el plan de implementación para reflejar comercialmente estos diferenciadores en el portal web público (`FlexosWeb`).

---

## 2. Implementación Realizada

### A. Ingeniería Especializada con Mockup Interactivo (`SpecializedEngineering.tsx`)
- Se transformó el componente a interactivo (`'use client'`) con un conmutador de pestañas en la ventana de previsualización:
  - **Pestaña `Cotizador BCM & Arte`:** Simulación del arte con pipeta activa sobre Color Directo 485, tabla volumétrica de Anilox (BCM, LPI, g/m², kg requeridos), franja compacta con los 7 costos desglosados y el cálculo del precio final con margen comercial real del 35%.
  - **Pestaña `Formulador de Tintas`:** Visualización de recetas, porcentajes CMYK y costo por kilogramo.
- Se agregó la tarjeta de características dedicada a **"4 Cotizadores Técnicos & Consumo BCM"** (badge `PRO V6`) con tags de Autoadheribles & Mangas, Pipeta de Color Directo, Descuento CMYK y Stickyback.

### B. Características Clave de la Landing Page (`CoreFeatures.tsx`)
- Se actualizó la tarjeta de cotización a **"4 Cotizadores Técnicos & BCM"**, destacando los motores especializados, la física de BCM y el desglose transparente de costos por escala.

### C. Muestrario de Módulos (`ModulesShowcase.tsx`)
- Se enriqueció la tarjeta de ventas como **"Ventas & 4 Cotizadores"** con insignia destacada `4 MOTORES V6`.

### D. Catálogo de Módulos (`src/app/modulos/page.tsx`)
- En la sección **Ventas y CRM**, se incorporaron viñetas técnicas detallando los 4 cotizadores, el consumo volumétrico por BCM, el analizador interactivo de arte y el costeo paramétrico de Stickyback y suajes.

### E. Listado Completo de Capacidades (`AllFeatures.tsx`)
- Se importaron `Calculator` y `Crosshair`.
- Se añadieron dos tarjetas técnicas:
  1. **4 Cotizadores Técnicos Flexográficos** (tags: 4 Motores, Autoadheribles, Manga Termoencogible, Layflat).
  2. **Análisis de Tintas por Anilox BCM & Pipeta de Color Directo** (tags: Anilox BCM, Color Directo, Descuento CMYK, Stickyback).

### F. SEO y Optimización para Motores de IA (`FAQ.tsx` y `layout.tsx`)
- Se incorporó la pregunta y respuesta técnica sobre cómo calculan los cotizadores de FlexOS el consumo exacto de tinta y herramentales tanto en el componente de preguntas frecuentes como en el grafo Schema.org (`FAQPage` y `featureList` de `SoftwareApplication`).

---

## 3. Verificación de Compilación

- **Comando:** `npm run build`
- **Resultado:**
  - `✓ Compiled successfully in 24.8s`
  - `Finished TypeScript in 26.9s`
  - `13/13 páginas estáticas pre-renderizadas exitosamente.`
  - Código de salida: `0` (exitoso, sin errores de compilación).
