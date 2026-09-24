# Walkthrough - Botones Flotantes de WhatsApp y Regreso Arriba (Scroll to Top)

## Resumen del Cambio
Se implementó el componente global de acciones flotantes fijas ([`FloatingActions.tsx`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/src/components/umbrella/FloatingActions.tsx)) en la esquina inferior derecha del portal de **FlexOS Technologies**, compuesto por:
1. **Burbuja Flotante de WhatsApp:** Acceso directo a chat corporativo oficial (+52 33 4874 2297) con mensaje preconfigurado y animación pulsante.
2. **Botón de Flecha hacia Arriba (Scroll-to-Top):** Botón técnico con diseño *dark glass* y acento cian que aparece automáticamente al descender más de 300px en el viewport, ejecutando un desplazamiento suave (*smooth scrolling*) hacia la cabecera.

---

## 1. Arquitectura y Componentes Creados

### Componente [`src/components/umbrella/FloatingActions.tsx`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/src/components/umbrella/FloatingActions.tsx)
* **Burbuja WhatsApp:**
  - Color oficial `#25D366` con estado hover `#20ba5a`, sombra profunda y anillo animado de pulso (*ping beacon*).
  - Enlace seguro `https://wa.me/523348742297?text=...` con atributo `rel="noopener noreferrer"`.
  - Tooltip táctico flotante: `WhatsApp Directo`.
* **Botón Regreso al Inicio:**
  - Integración con detector pasivo de scroll (`window.scrollY > 300`).
  - Transición suave de opacidad y elevación vertical (`opacity-0 translate-y-4` ↔ `opacity-100 translate-y-0`).
  - Icono `ArrowUp` de Lucide con efecto de desplazamiento hacia arriba al pasar el cursor.
  - Tooltip táctico: `Volver arriba`.

### Integración en [`src/app/layout.tsx`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/src/app/layout.tsx)
* Incorporado globalmente dentro del `<body>` del RootLayout, garantizando disponibilidad tanto en la landing corporativa como en todas las rutas secundarias (`/modulos`, `/precios`, `/analitica-oee`, etc.).

---

## 2. Verificación y Evidencia
* **Build de Producción:** Ejecución exitosa con `npm run build` (código de salida `0`, 13/13 rutas estáticas/dinámicas generadas).
* **Servidor en Vivo:** Activo en `http://localhost:3000`.
* **Captura de Pantalla:** [floating_actions_preview.png](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/floating_actions_preview.png).
