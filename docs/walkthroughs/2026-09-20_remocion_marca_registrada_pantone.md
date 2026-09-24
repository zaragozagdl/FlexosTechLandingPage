# Walkthrough: Remoción Total de la Marca Registrada "Pantone"

**Fecha:** 2026-09-20  
**Objetivo:** Cumplir con los lineamientos de propiedad intelectual y marcas comerciales, eliminando toda mención a la marca registrada "Pantone" en el portal web comercial, esquemas estructurados de SEO y documentación del proyecto, sustituyéndola por terminología técnica flexográfica genérica y rigurosa ("Colores Directos", "Tintas Especiales", "Guía de Color").

---

## 1. Contexto y Requerimiento

Por instrucción directa, se identificó la necesidad de erradicar cualquier uso del término "Pantone" por tratarse de una marca registrada. En la industria de conversión flexográfica y artes gráficas, el término técnico genérico y apropiado corresponde a:
- **Colores Directos** / **Tintas Directas** (Spot Colors).
- **Colores Especiales**.
- **Guía de Color**.
- **Pipeta de Color Directo**.

---

## 2. Archivos Modificados y Cambios Aplicados

### A. Componentes de Interfaz de Usuario
1. **`src/components/sections/SpecializedEngineering.tsx`:**
   - Se reemplazó `pipeta para colores directos (Pantone)` por `pipeta para colores directos`.
   - Se actualizó el distintivo `Pipeta Pantone en Arte` por `Pipeta de Color Directo`.
   - Se actualizó el tag `CMYK & Pantone` por `CMYK & Colores Directos`.
   - En la previsualización del cotizador técnico interactivo, se cambió `Pantone 485 C` por `Color Directo 485` y la torre `T2 Pantone 485 C` por `T2 Color Directo 485`.

2. **`src/components/sections/CoreFeatures.tsx`:**
   - Se sustituyó `pipeta Pantone` por `pipeta de colores directos` en la tarjeta de los 4 cotizadores técnicos.

3. **`src/components/sections/ModulesShowcase.tsx`:**
   - Se sustituyó `pipeta Pantone` por `pipeta de colores directos` en la tarjeta de Ventas & 4 Cotizadores.

4. **`src/components/sections/AllFeatures.tsx`:**
   - Título actualizado a: `Análisis de Tintas por Anilox BCM & Pipeta de Color Directo`.
   - Tags actualizados sustituyendo `"Pipeta Pantone"` por `"Color Directo"`.

5. **`src/components/sections/FAQ.tsx`:**
   - Respuesta de costeo y consumo de tinta ajustada a: `pipeta para muestrear colores directos y tintas especiales`.

### B. Páginas y Metadatos Estructurados (SEO)
1. **`src/app/modulos/page.tsx`:**
   - Módulo de Ingeniería: `Gestión de colores directos y formulaciones`.
   - Módulo de Ventas: `Analizador interactivo de arte con pipeta para colores directos y descuento sustractivo CMYK`.

2. **`src/app/layout.tsx`:**
   - Grafo semántico Schema.org `SoftwareApplication.featureList`: reemplazado por `Analizador interactivo de arte con pipeta para colores directos y descuento sustractivo CMYK`.
   - Grafo semántico `FAQPage.acceptedAnswer`: reemplazado `colores directos (Pantone)` por `colores directos y tintas especiales`.

### C. Documentación y Memoria del Proyecto
1. **`README.md`:**
   - Actualizado a `Gestión de colores directos y formulaciones`.
2. **`docs/walkthroughs/2026-09-20_mejoras_cotizadores_v6_web.md`:**
   - Homologadas todas las referencias históricas a "Color Directo 485" y "Pipeta de Color Directo".
3. **`docs/PROJECT_MEMORY.md`:**
   - Actualizada la entrada de bitácora y agregado nuevo registro para la erradicación de la marca registrada.

---

## 3. Verificación

1. **Búsqueda Global en Workspace (`grep_search` insensible a mayúsculas/minúsculas):**
   - Coincidencias para `pantone`: **0 coincidencias** en todo el repositorio.
2. **Compilación de Producción Next.js:**
   - Verificada con `npm run build` (código de salida 0).
