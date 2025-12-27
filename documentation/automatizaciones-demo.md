# Automatizaciones Demo para Clientes

Guía de las automatizaciones que desarrollamos para mostrar a potenciales clientes.

---

## 1. Recuperar Ventas Fallidas e Interesados (Remarketing)

### El Desafío (Realidad Técnica)
En Mercado Libre, **no existe el "carrito abandonado" tradicional** (no obtienes el dato del usuario si no compra). Por eso, atacamos el problema con dos estrategias complementarias:

#### A. Recuperación de Pagos Rechazados (Venta casi cerrada)
- **Cómo funciona:**
  - Webhook de `orders_v2` detecta una orden creada pero con pago rechazado/pendiente.
  - **Si el cliente ya preguntó antes:** El bot busca el historial y le escribe por la pregunta abierta: *"Hola, vimos que intentaste comprar. ¿Tuviste problemas con el pago?"*.
  - **Si es cliente recurrente:** Se cruza el ID en tu CRM y se dispara WhatsApp automático.
- **Herramienta:** n8n + API de Mercado Libre (`/orders`, `/questions`).

#### B. Perseguir a los que "Solo miran" (Product Ads)
- **Cómo funciona:**
  - Si visitaron tu publicación pero no compraron, activamos el algoritmo de **Retargeting de Mercado Ads**.
  - **Automatización:** Un script monitorea el tráfico y ajusta automáticamente el presupuesto (bidding) de Product Ads en horarios pico o fechas especiales para "volver a aparecerle" a esos interesados.
- **Herramienta:** n8n + API de Mercado Ads (`/advertising/campaigns`).

### Plataforma recomendada
**n8n** (self-hosted o cloud)
- Más control sobre la lógica
- Sin límites de ejecuciones
- Fácil integrar con WhatsApp Business API (via Twilio, 360dialog, o Evolution API)

### Cómo mostrar la demo
- Video Loom de 2 min: simular abandono → mostrar mensaje llegando al WhatsApp
- Screenshot del flujo en n8n
- Métricas ficticias pero realistas: "Recupera 15-25% de carritos"

---

## 2. Responder preguntas 24/7 (Bot ML)

### Cómo funciona
- Webhook de Mercado Libre (API de preguntas)
- IA (GPT-4/Claude) analiza la pregunta + info del producto
- Responde automáticamente vía API de ML
- Puede consultar stock en tiempo real

### Plataforma recomendada
**n8n**
- Necesitás llamar a la API de ML (OAuth)
- Integración con OpenAI/Anthropic
- Lógica condicional (no responder si es reclamo, escalar a humano)

### Cómo mostrar la demo
- Video: pregunta en ML → respuesta automática en segundos
- Mostrar el prompt que usás para entrenar la IA
- Antes/después: "Tiempo de respuesta: 4 horas → 30 segundos"

---

## 3. Informar estado de envíos

### Cómo funciona
- Cliente pregunta "¿dónde está mi pedido?" por WhatsApp
- Bot extrae número de orden/seguimiento
- Consulta API de Mercado Envíos, Andreani, Correo Argentino, etc.
- Responde con estado actual + fecha estimada

### Plataforma recomendada
**n8n**
- Múltiples integraciones de APIs de logística
- IA para entender la intención del mensaje

### Cómo mostrar la demo
- Video: mensaje entrante → respuesta con tracking en 5 seg
- Mostrar las diferentes APIs que soportás

---

## 4. Recuperar pagos fallidos

### Cómo funciona
- Webhook de Mercado Pago/Stripe detecta pago rechazado
- Mensaje a WhatsApp explicando el problema (fondos, tarjeta vencida, etc.)
- Ofrece alternativas: otro medio de pago, link de pago manual
- Follow-up a las 24hs si no pagó

### Plataforma recomendada
**n8n** o **Make**
- Make es más visual si querés mostrar el flujo al cliente
- n8n si necesitás lógica más compleja

### Cómo mostrar la demo
- Simular un pago fallido → mensaje explicativo
- Mostrar las diferentes razones de rechazo y cómo se manejan

---

## 5. Fidelización y Post-Venta (Vía WhatsApp - Off Platform)

### Cómo funciona
- **Disparador:** Webhook de orden `paid` (Pago aprobado).
- **Acceso a Datos:** En este punto, Mercado Libre **SÍ libera los datos del comprador** (Teléfono/Nombre).
- **Flujo Automático (n8n):**
  1. Se guarda el contacto en tu CRM/Base de Datos.
  2. **Día 0 (Inmediato):** WhatsApp automático de bienvenida + Factura + Guía de uso (Valor real).
  3. **Día 7:** WhatsApp de seguimiento: "¿Te llegó todo bien? ¿Necesitás ayuda?".
  4. **Día 30:** WhatsApp de reactivación/Cross-selling (Oferta especial).
- **Ventaja:** Al sacar la conversación de MELI a WhatsApp, evitas las restricciones de spam de la plataforma y eres dueño de la relación con el cliente.

### Plataforma recomendada
**n8n** + API WhatsApp (Evolution API / Twilio)
- Crucial usar una API de WhatsApp que soporte envío de plantillas o sesiones activas.

### Cómo mostrar la demo
- Mostrar el JSON de la orden con el campo `buyer.phone` desbloqueado.
- Video: Compra simulada -> Mensaje de WhatsApp llegando al celular real.


---

## 7. Analizar fricciones (Auditoría)

**Esto no es una automatización** - es un servicio manual que ofrecés.
- Revisás el checkout del cliente
- Identificás puntos de abandono
- Proponés automatizaciones específicas

### Cómo mostrar
- Template de auditoría en Notion
- Checklist de los 20 puntos que revisás
- Ejemplo de auditoría real (anonimizada)

---

## 6. Dashboard de Control Total (Precios + Inflación)

**Este es nuestro producto estrella "Custom":** Una solución integral ya validada que centraliza la operación del vendedor argentino.

### Funcionalidades del Dashboard (React/Next.js + Node):
1.  **Actualización Masiva de Precios:**
    *   Conector con API Dolar (Blue/MEP/Oficial).
    *   Reglas de margen personalizadas por categoría.
    *   Botón de pánico: "Aumentar todo 10%".
2.  **Centralización de Canales:**
    *   Ver y pausar publicaciones en MELI, Shopify y TiendaNube desde un solo lugar.
3.  **Gestor de Automatizaciones:**
    *   Prender/Apagar los bots de preguntas con un switch.
4. **Reporte Real vs. Fiscal:**
    *   Visión clara de ventas totales vs. ventas facturadas.

### Cómo mostrar la demo
- Mostrar nuestro **Dashboard Web Propio** funcionando.
- Casos de éxito: "Este dashboard redujo el tiempo de actualización de precios de 4 horas a 2 minutos".

---

## 7. Facturación Inteligente y Selectiva (Smart Tax)
Una evolución de la facturación automática que permite al dueño del negocio decidir qué facturar según reglas de negocio.

- **El Problema:** Facturar el 100% de las ventas a veces no es viable fiscalmente para ciertos canales (WhatsApp, Efectivo).
- **La Solución Propuesta (Motor de Reglas):**
  - Un middleware que filtra las ventas antes de llamar a AFIP.
  - **Reglas Configurables:**
    - "Si viene de MercadoLibre -> Facturar SIEMPRE" (Obligatorio).
    - "Si venta > $X monto -> Pausar para revisión manual".
    - "Si canal es WhatsApp -> Preguntar al dueño antes de facturar".
- **Tecnología:** Node.js + Base de Datos propia (Postgres) + Afip SDK.
- **Valor Agregado:** Control fiscal total y prevención de errores o excesos de facturación automática.

---

## 8. Integrar plataformas

**Esto es un servicio paraguas** - no es una automatización específica.
- Podés mostrar los logos de las plataformas que integrás
- Casos de uso combinados (ej: TiendaNube + WhatsApp + Mercado Pago)

---


## Prioridad para desarrollar demos

| Prioridad | Automatización | Por qué |
|-----------|----------------|---------|
| 1 | Ventas Fallidas / Ads | El más vendedor, ROI claro y medible |
| 2 | Dashboard Precios | Crítico en Argentina (Inflación), producto Premium |
| 3 | Bot de ML | Diferenciador, ahorra mucho tiempo |
| 4 | Post-Venta WhatsApp | Valor agregado, dueño del cliente |
| 5 | Tracking de envíos | Útil, pero menos crítico |

---

## Plataformas recomendadas

### n8n (self-hosted o cloud) - Recomendado para todo
- Sin límites de ejecuciones (Make/Zapier cobran por operación)
- Más profesional para mostrar a clientes
- Podés hostear en un VPS barato ($5-10/mes)
- Fácil de clonar flujos para cada cliente

### Make - Alternativa
- Más visual para mostrar demos
- Mejor si el cliente quiere "ver" el flujo
- Más caro a escala

### Zapier - No recomendado
- Muy limitado y caro
