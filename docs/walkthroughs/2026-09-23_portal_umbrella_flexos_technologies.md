# Walkthrough - Portal Corporativo Umbrella "FlexOS Technologies"

## Resumen del Cambio
Se diseñó e implementó la landing page corporativa de alto rendimiento para **FlexOS Technologies** (`flexostechnologies.com`) en el repositorio `Flexostech`. La plataforma funge como la casa matriz de ingeniería de software industrial, presentando sus dos soluciones insignia: **FlexOS Control** (`flexoscontrol.com`) y **Die Tracker Pro** (`dietrackerpro.com`).

---

## 1. Arquitectura y Estética "Industrial Deep Tech"
- **Paleta de Color:** Fondo obsidiana profundo (`#04060A`, `#080C14`), cuadrícula técnica *blueprint* con puntos y líneas SVG tenues, acentos en cian eléctrico (`#00E5FF` / `#06B6D4`), esmeralda de telemetría (`#10B981`) y ámbar de advertencia industrial (`#F59E0B`).
- **Sistema Tipográfico:**
  - Títulos y Display: **`Space Grotesk`** (geométrica y moderna).
  - Cuerpo de lectura: **`Inter`**.
  - Datos, telemetría y terminales: **`JetBrains Mono`**.
- **Detalles Mecánicos:** Muescas técnicas en esquinas, botones con corte biselado (*notched clip-path*), cruces de esquina de precisión (`+`) y tarjetas Bento con efecto cristal.

---

## 2. Componentes Implementados

1. **`Navbar` (`src/components/umbrella/Navbar.tsx`):**
   - Logotipo oficial de marca `public/logo_technologies.png` insertado con cápsula blanca de alto contraste y esquinas redondeadas (`rounded-xl`), garantizando máxima legibilidad para las tipografías roja, negra y el isotipo con anillo metálico.
   - Indicador de estado en tiempo real: `● SYSTEMS OPERATIONAL | v4.2`.
   - Navegación técnica actualizada: *[Plataformas SaaS]*, *[Software a Medida]*, *[Hardware & PLCs]*, *[Capacidades]*, *[Verticales]*.
   - Botones técnicos: "Acceso a Plataformas" y "Agendar Demo" con corte biselado (*notched clip-path*).

2. **`CustomEngineering` (`src/components/umbrella/CustomEngineering.tsx`):**
   - 4 Pilares de desarrollo a la medida: Sistemas Web Complejos / ERPs en la nube, Páginas Web de Alto Rendimiento, Aplicaciones Móviles Nativas (iOS/Android), y Hardware Especializado / Conexión de PLCs & IoT Industrial.
   - Banner de conectividad para integración de maquinaria legada (Siemens, Allen-Bradley, Omron, Mitsubishi) con telemetría MQTT/OPC-UA.

3. **`Hero` (`src/components/umbrella/Hero.tsx`):**
   - Distintivo superior con borde iluminado: `INFRAESTRUCTURA DE SOFTWARE PARA INDUSTRIA 4.0`.
   - Titular principal y subtítulo de alta conversión para manufactura flexográfica.
   - **Consola Interactiva de Misión Control:** Transmisión simulada en tiempo real de tacómetro de velocidad (m/min), medidor OEE (Disponibilidad, Rendimiento, Calidad), contador de revoluciones de suaje (Die Tracker) y sincronización de órdenes ERP con 3-Way Match CFDI 4.0.

4. **`TelemetryStrip` (`src/components/umbrella/TelemetryStrip.tsx`):**
   - Ticker monocromático infinito con métricas industriales en vivo (velocidad de prensa, latencia de nube 11.4 ms, merma -3.8%, BCM de anilox, nodos ESP32).

5. **`FlagshipBento` (`src/components/umbrella/FlagshipBento.tsx`):**
   - **Tarjeta A (FlexOS Control):** Mockup de consola de producción en piso, órdenes activas, OEE y enlace a `flexoscontrol.com`.
   - **Tarjeta B (Die Tracker Pro):** Monitor de revoluciones y mapa térmico de desgaste de cuchillas, código DataMatrix y enlace a `dietrackerpro.com`.

6. **`CoreCapabilities` (`src/components/umbrella/CoreCapabilities.tsx`):**
   - Matriz 3x2 de capacidades de ingeniería (Edge Computing ESP32, Algoritmos de Merma, Cloud Distribuida 99.99%, Trazabilidad Farmacéutica, Conectores PLC y Aislamiento de Planta).

7. **`IndustrialVerticals` (`src/components/umbrella/IndustrialVerticals.tsx`):**
   - Especialización en Banda Angosta, Empaque Flexible (BOPP/PE), Cartón Corrugado y Extrusión.

8. **`IndustrialCTA` (`src/components/umbrella/IndustrialCTA.tsx`):**
   - Interfaz estilo terminal Unix para onboarding técnico y solicitud de diagnóstico en planta conectado al backend `/api/contacto`.

9. **`TechnicalFooter` (`src/components/umbrella/TechnicalFooter.tsx`):**
   - Resumen de arquitectura, estado de clusters, enlaces directos a ambos productos y datos corporativos.

---

## 3. Verificación en Navegador
- **Build de Producción:** `npm run build` ejecutado exitosamente con código `0`.
- **Servidor Activo:** Desplegado en `http://localhost:3000`.
- **Captura Visual:** Se validó la carga completa del viewport y de la página completa mediante Chrome DevTools MCP (`hero_preview.png` y `fullpage_preview.png`).
