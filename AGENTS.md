<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# REGLA ESTRICTA DE MEMORIA PERMANENTE Y WALKTHROUGHS

1. **Persistencia Obligatoria de Walkthroughs:**
   En cada tarea completada, sin excepción, el agente DEBE guardar un archivo de documentación tipo walkthrough en:
   `docs/walkthroughs/YYYY-MM-DD_descripcion_del_cambio.md`

2. **Registro en Memoria de Arquitectura (`docs/PROJECT_MEMORY.md`):**
   El agente DEBE registrar una nueva entrada en la tabla "BITÁCORA DE CAMBIOS Y EVOLUCIÓN (Change Ledger)" de `docs/PROJECT_MEMORY.md`, enlazando el archivo generado en `docs/walkthroughs/`.

3. **Verificación de Compilación:**
   Antes de finalizar cualquier tarea, se debe verificar el código con `npm run build` o `npm run lint`.
