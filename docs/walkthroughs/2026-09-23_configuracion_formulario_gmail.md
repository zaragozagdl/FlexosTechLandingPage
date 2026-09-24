# Walkthrough: Solución al Error del Formulario y Configuración de Gmail

**Fecha:** 2026-09-23  
**Objetivo:** Diagnosticar la causa del error en el envío del formulario de contacto y adaptar el backend (`api/contacto/route.ts`) para soportar cuentas personales o corporativas de Gmail de forma robusta con contraseñas de aplicación de Google.

---

## 1. Diagnóstico del Error

Al probar la conexión directa de transporte SMTP contra Google con las credenciales previas, el servidor de Google arrojó el siguiente error:
```text
ERROR: Invalid login: 534-5.7.9 Please log in with your web browser and then try again.
For more information, go to https://support.google.com/mail/?p=WebLoginRequired
```
**Causa:** Google bloquea el acceso de aplicaciones de terceros mediante contraseñas tradicionales o credenciales no validadas con 2FA. Para enviar correos desde cualquier cuenta de Gmail o Google Workspace mediante Nodemailer, es obligatorio utilizar una **Contraseña de Aplicación de 16 caracteres** generada con la Verificación en 2 Pasos activada.

Además, si el portal se encuentra desplegado en producción (Vercel, Netlify, etc.), las variables de entorno de `.env.local` no viajan en el repositorio git por seguridad y deben cargarse en el panel del proveedor de hosting.

---

## 2. Mejoras Implementadas en el Código

1. **Adaptación Dinámica del Botón y Textos en `src/components/sections/ContactForm.tsx`:**
   - Anteriormente, el botón de envío indicaba de forma fija `"Enviar Postulación al Programa MVP"` aun cuando el usuario cambiaba el asunto/interés a "Demostración de FlexOS Control" o "Cotización de Licenciamiento".
   - Se crearon variables condicionales (`isMVP`, `isDemo`, `isCotizacion` basadas en `form.tipoSolicitud`).
   - El texto del botón de envío ahora conmuta dinámicamente:
     - **MVP:** `"Enviar Postulación al Programa MVP"` (Cargando: `"Procesando Postulación..."`)
     - **Demo:** `"Solicitar Demostración Técnica"` (Cargando: `"Enviando Solicitud de Demo..."`)
     - **Cotización:** `"Solicitar Cotización de Licenciamiento"` (Cargando: `"Enviando Solicitud de Cotización..."`)
     - **Otro / General:** `"Enviar Formulario de Contacto"` (Cargando: `"Enviando Mensaje..."`)
   - Asimismo, el encabezado del formulario (`formHeaderTitle`), el título de confirmación (`successTitle`) y el mensaje de agradecimiento (`successMessage`) se adaptan al contexto seleccionado.

2. **Soporte Dinámico de Gmail en `src/app/api/contacto/route.ts`:**
   - Se configuró el transporte con `service: "gmail"`, que automatiza puertos, cifrado TLS y hosts de Google.
   - Soporte para variables estandarizadas: `GMAIL_USER` y `GMAIL_APP_PASS` (manteniendo compatibilidad con `WORKSPACE_EMAIL` y `WORKSPACE_APP_PASS`).
   - Si no se define `DEST_EMAIL`, el sistema envía automáticamente el formulario al mismo correo del remitente (`GMAIL_USER`), garantizando que lleguen a su bandeja de entrada.
   - Limpieza automática de espacios en blanco (`replace(/\s+/g, "")`), evitando fallas si la contraseña de aplicación de 16 letras se copia con espacios desde Google.
   - Validación previa de credenciales y registro detallado de errores en el servidor.

3. **Plantilla de Entorno `.env.example`:**
   - Creado como guía documentada para saber qué variables deben configurarse en local y en producción.

---

## 3. Verificación de Compilación

- **Comando:** `npm run build`
- **Resultado:** Compilación exitosa con Turbopack (código 0, 13 páginas estáticas y endpoint dinámico `/api/contacto` generados sin errores).

