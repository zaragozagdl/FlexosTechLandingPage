# Walkthrough: Protección de Secreto Industrial y Remoción de Fórmulas Visibles

**Fecha:** 2026-09-20  
**Objetivo:** Proteger el secreto industrial y algoritmos matemáticos propietarios de FlexOS eliminando cualquier fórmula, ecuación o constante de cálculo visible en el portal web comercial, esquemas estructurados de SEO y archivos de metadatos.

---

## 1. Contexto y Requerimiento

Por política estricta de propiedad intelectual y secreto industrial, no deben mostrarse fórmulas matemáticas o ecuaciones en la interfaz de la página web ni en archivos públicos de metadatos (`public/llms.txt`, Schema.org, componentes de landing y catálogo).

Las metodologías protegidas incluyen:
- Relación de volumen físico de tinta por rodillo Anilox (transferencia química).
- Geometría de cilindros y desarrollo según paso de engrane Z.
- Modelado de Layflat y contracción para mangas termoencogibles.
- Algoritmo de metraje en bobinas huérfanas con factor de apriete radial.
- Algoritmo de cálculo de precio con margen comercial real vs markup.

---

## 2. Archivos Modificados y Acciones Realizadas

### A. Componentes de la Aplicación
1. **`src/components/sections/VirtualAssistantTraining.tsx`:**
   - Se eliminaron las fórmulas matemáticas explícitas (`Desarrollo = Z × 3.175`, `LF = ...`, `L = [π × ...] × 1.115`, `P = Costo / (1 - Margen)`).
   - Se renombró la sección a **"Biblioteca de Criterios & Metodología"** y se sustituyó el bloque de fórmula por subtítulos técnicos metodológicos.
   - Se ajustó el título de capacidades a **"Algoritmos Flexográficos Nativos"** explicando que los cálculos vienen resueltos y validados por el sistema.

2. **`src/components/sections/SpecializedEngineering.tsx`:**
   - Se eliminó la ecuación de volumetría de tinta `(cm³ = BCM × 1.55)`, sustituyéndola por *"Modelado físico volumétrico de tinta según rodillo Anilox con doble transferencia química"*.
   - En la tarjeta resumen de precio, se reemplazó `Fórmula: P = Costo / (1 - Margen)` por `Margen comercial real garantizado`.

3. **`src/components/sections/ModulesShowcase.tsx`:**
   - Se actualizó la descripción del módulo de capacitación sustituyendo *"fórmulas flexo en vivo"* por *"criterios técnicos y validación flexográfica en vivo"*.

4. **`src/components/sections/AllFeatures.tsx`:**
   - Se eliminó la ecuación matemática en la tarjeta de análisis de tintas, conservando la explicación conceptual de física de transferencia en 2 etapas por rodillo Anilox BCM.

5. **`src/components/sections/FAQ.tsx`:**
   - Se eliminaron las fórmulas visibles en las respuestas técnicas de cotización y capacitación, orientando la explicación a los algoritmos y capacidades del sistema.

6. **`src/app/analitica-oee/page.tsx`:**
   - Se transformó el visualizador de la ecuación OEE (`D × R × C = OEE`) en un diagrama conceptual de pilares (`D` + `R` + `C` &rarr; `OEE Efectividad Global`), eliminando el formato de ecuación matemática.

### B. Páginas y Esquemas de Metadatos
1. **`src/app/modulos/page.tsx`:**
   - Se removieron las fórmulas en las viñetas del módulo de Ventas y CRM, describiendo la física volumétrica y el margen comercial real de forma ejecutiva.

2. **`src/app/layout.tsx`:**
   - Se depuraron las respuestas del esquema semántico Schema.org JSON-LD (`FAQPage`), eliminando las ecuaciones matemáticas.

3. **`public/llms.txt`:**
   - Se retiraron las fórmulas y constantes explícitas en la descripción pedagógica del asistente virtual, sustituyéndolas por el listado de capacidades y criterios de validación.

---

## 3. Verificación de Compilación

- **Comando:** `npm run build`
- **Resultado:** Compilación limpia con Turbopack exitosa (código 0).
