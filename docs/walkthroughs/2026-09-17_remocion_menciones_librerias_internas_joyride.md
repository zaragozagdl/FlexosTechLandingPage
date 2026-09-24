# Walkthrough: Remoción de Menciones a Librerías Internas (Joyride)

> **Fecha:** 17 de Septiembre, 2026  
> **Sistema:** Portal Web Oficial de FlexOS Control (`FlexosWeb`)  
> **Archivos Modificados:**  
> - `src/components/sections/VirtualAssistantTraining.tsx`  
> - `src/components/sections/AllFeatures.tsx`  
> **Estado:** Implementado y Verificado (`npm run build` Código 0)

---

## 1. 🎯 Motivo del Cambio

Por razones de secreto industrial y protección de propiedad intelectual, el usuario solicitó eliminar cualquier mención explícita al componente o librería interna `"Joyride"` de la página web de cara al público, refiriéndose a la funcionalidad únicamente como **"Tour Guiado Interactivo"**.

---

## 2. 🛠️ Detalle de las Modificaciones

1. **En [`src/components/sections/VirtualAssistantTraining.tsx`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/FlexosWeb/src/components/sections/VirtualAssistantTraining.tsx):**
   - Se sustituyó la leyenda en el badge superior del simulador de paso:
```diff
- Tour Guiado Joyride en Pantalla
+ Tour Guiado Interactivo en Pantalla
```
   - Se limpiaron los comentarios internos que hacían referencia a la librería.

2. **En [`src/components/sections/AllFeatures.tsx`](file:///c:/Archivos_fuera_de_onedrive/Github/PaginasWeb/FlexosWeb/src/components/sections/AllFeatures.tsx):**
   - Se actualizó la etiqueta dentro del array de badges del Asistente Virtual:
```diff
- tags: ["Voz es-MX", "Joyride", "-70% Curva"],
+ tags: ["Voz es-MX", "Tour Guiado", "-70% Curva"],
```

---

## 3. 🧪 Verificación

- Se ejecutó búsqueda exhaustiva de texto en todo el directorio `src/`, confirmando **cero resultados** para `"joyride"`.
- Se ejecutó `npm run build` (código de salida 0, 13/13 rutas generadas con éxito).
