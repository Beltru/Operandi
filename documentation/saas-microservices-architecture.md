# Arquitectura SaaS: Operandi "Suite de Micro-Servicios"

Esta arquitectura responde a la visión de transformar la agencia en una suite de productos SaaS independientes pero integrados.

## Concepto: "The Operandi Suite"
En lugar de un solo monolito gigante, Operandi se convierte en un ecosistema de herramientas. El cliente puede contratar "Operandi Q&A" sin tener "Operandi Taxes", o contratar la suite completa.

---

## 🏗️ El Núcleo (Core Platform)
**Responsabilidad:** "El cerebro administrativo".
- Gestión de Usuarios y Organizaciones (Auth).
- Facturación del propio SaaS (Cobrarle al cliente por su uso).
- Dashboard Unificado: Muestra métricas agregadas de todos los servicios activos.
- Gestión de API Keys y Conexiones (Centralizar la conexión a Mercado Libre una sola vez).

**Tech Stack:** Next.js (Visualización) + Supabase (Auth/DB principal).

---

## 🧩 Los Micro-Servicios (Independent Products)

Cada uno de estos servicios puede:
1.  Escalar independientemente (El bot de preguntas consume mucho más CPU/GPU que el facturador).
2.  Tener su propio pricing.
3.  Caerse sin afectar al resto (Si se cae AFIP, el bot de preguntas sigue respondiendo).

### 1. Operandi Reply (Bot IA)
*El servicio de atención al cliente 24/7.*
- **Input:** Webhooks de Preguntas/Mensajes de Mercado Libre.
- **Proceso:** 
    - RAG (Retrieval Augmented Generation) sobre la documentación del producto.
    - Decisión lógica (¿Es reclamo? -> Humano. ¿Es duda? -> IA).
- **Output:** Respuesta a la API de Mercado Libre.
- **Infraestructura sugerida:** Python (FastAPI) o Node.js con LangChain.

### 2. Operandi Recover (Remarketing & Cobranza)
*El servicio de recuperación de dinero.*
- **Input:** Webhooks de Pagos Rechazados / Carritos abandonados (simulados).
- **Proceso:** Motores de estado (State Machine). "Esperar 5 min -> Enviar WhatsApp -> Esperar 24hs -> Enviar mail".
- **Output:** Mensajes vía WhatsApp API / Email.
- **Infraestructura sugerida:** Worker basado en Colas (BullMQ / Redis) para manejar los tiempos de espera.

### 3. Operandi Tax (Facturación Inteligente)
*El contador automático.*
- **Input:** Órdenes pagadas.
- **Proceso:** Aplicación de reglas fiscales (Regla de negocio: "No facturar a Tierra del Fuego", "Facturar Consumidor Final hasta $X").
- **Output:** Factura electrónica AFIP y adjunto en Mercado Libre.
- **Diferencial:** Auditoría previa a la facturación para evitar errores contables graves.

### 4. Operandi Logistics (Tracking)
*La torre de control de envíos.*
- **Input:** Código de seguimiento.
- **Proceso:** Polling a APIs de correo (Andreani, Correo Arg).
- **Output:** Notificación proactiva al cliente ("Tu paquete salió a reparto").

---

## 🚀 Ventajas de este enfoque

1.  **Venta Modular:** "Probá nuestro bot de preguntas gratis. Si te gusta, activá el módulo de facturación con un click". Baja la barrera de entrada.
2.  **Robustez:** Un error en la facturación no detiene tus ventas ni tus respuestas.
3.  **Desarrollo Especializado:** Un dev puede mejorar el algoritmo de IA sin tocar nada de la facturación.

## 🗺️ Roadmap Técnico para la Migración
1.  **Extraer Lógica:** Tomar los flujos de n8n actuales y documentar sus inputs/outputs exactos.
2.  **Contenerizar:** Convertir un flujo de n8n en una pequeña API dockerizada (o función serverless).
3.  **Centralizar Auth:** Que todos los servicios validen contra el mismo usuario de Operandi Core.
