# Walkthrough - Ocultación del Módulo de Verticales de Manufactura

## Resumen del Cambio
A solicitud del usuario, se ocultó la sección de **Verticales de Manufactura** ([`IndustrialVerticals.tsx`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/src/components/umbrella/IndustrialVerticals.tsx)) de la página de inicio ([`src/app/page.tsx`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/src/app/page.tsx)) y se removió su respectivo enlace en la barra de navegación ([`src/components/umbrella/Navbar.tsx`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/src/components/umbrella/Navbar.tsx)).

---

## 1. Archivos Modificados

1. **[`src/app/page.tsx`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/src/app/page.tsx):**
   - Se comentó el componente `<IndustrialVerticals />` para omitir su renderizado en la landing corporativa, preservando el archivo intacto para fácil reactivación si el negocio lo requiere.

2. **[`src/components/umbrella/Navbar.tsx`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/Flexostech/src/components/umbrella/Navbar.tsx):**
   - Se removió el elemento `{ name: "Verticales", href: "#verticales" }` del arreglo `navLinks`, manteniendo la barra de navegación enfocada en:
     - *Plataformas SaaS* (`#ecosistema`)
     - *Software a Medida* (`#servicios-ingenieria`)
     - *Hardware & PLCs* (`#servicios-ingenieria`)
     - *Capacidades* (`#capacidades`)

---

## 2. Verificación
* **Build de Producción:** Verificado exitosamente con `npm run build` (código `0`, 13/13 rutas estáticas/dinámicas compiladas sin errores).
