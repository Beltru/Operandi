# Operandi Recover: Motor de Recuperación de Ventas y Cobranza

## 🎯 Objetivo
Maximizar la facturación recuperando "dinero que quedó sobre la mesa": pagos rechazados, usuarios que iniciaron compra pero no terminaron, y remarketing a interesados. Convertir "casi clientes" en clientes.

## 🛠️ Stack Tecnológico
- **Core:** Node.js (Motor de Workflows).
- **Mensajería:**
    - WhatsApp: Evolution API (Self-hosted) o Twilio / Meta Cloud API.
    - Email: Resend / SendGrid.
- **Scheduling:** BullMQ / Redis (Crucial para manejar los tiempos de espera "Esperar 2 horas").
- **Integraciones:** Mercado Pago (Webhooks de pagos), Mercado Libre (Orders).

## ⚙️ Arquitectura del Servicio

### 1. Inputs (Disparadores)
- **Webhook Mercado Pago:** `payment.created` con status `rejected` o `in_process`.
- **Webhook Mercado Libre:** `orders_v2` (Orden creada pero sin pago completado - *nota: esto es limitado en ML, a veces no llega el dato del usuario hasta que paga, depende del canal*).
- **Input Manual / CSV:** Base de datos de clientes antiguos para campañas de reactivación.

### 2. Proceso Lógico (Máquina de Estados)
El servicio funciona como una serie de "Workflows" o "Embudos":

#### Flujo A: Pago Rechazado (Urgencia Alta)
1.  **Evento:** Pago rechazado por "Fondos insuficientes".
2.  **Acción Inmediata (0 min):** Enviar WhatsApp: *"Hola [Nombre], vimos que tu pago no pasó. ¿Querés probar con este Link de Pago o Transferencia con 5% off?"*.
3.  **Espera:** 2 horas.
4.  **Verificación:** ¿Ya pagó? (Consultar API).
    - Sí -> **Fin**.
    - No -> **Acción (Email):** Enviar recordatorio.

#### Flujo B: Remarketing (Visitantes Recurrentes)
*(Requiere integración más profunda o Mercado Shops)*
1.  **Evento:** Usuario pregunta 3 veces en la misma publicación pero no compra.
2.  **Acción:** Oferta relámpago automatizada por la mensajería de la pregunta (si está habilitado) o alerta al vendedor humano.

### 3. Outputs (Salidas)
- **Mensajes Salientes:** WhatsApp Templates, Emails transaccionales.
- **Alertas Internas:** Slack/Telegram al equipo de ventas ("Cliente X quiere comprar YA, llamalo").

## 📋 Features Clave

### MVP (Fase 1)
- Recuperación de Pagos Rechazados (Webhook MP -> WhatsApp).
- Plantillas de mensajes predefinidas.
- Dashboard simple: "$ Recuperado este mes".

### Versión Full (SaaS)
- **Editor de Flujos Visual:** UI tipo "Drag & Drop" (como n8n o ActiveCampaign) para que el usuario arme sus propias secuencias.
- **Segmentación Inteligente:** "Solo enviar WhatsApp si el ticket es mayor a $50.000".
- **Pruebas A/B:** Probar dos mensajes distintos para ver cuál recupera más ventas.
- **Link de Pago Generator:** Generar links de Mercado Pago / Mobbex al vuelo.

## ⚠️ Riesgos y Mitigación
- **Spam / Bloqueo de WhatsApp:** Ser demasiado invasivo.
    - *Solución:* Usar WhatsApp Business API oficial. Respetar las reglas de "Opt-in" siempre que sea posible. Limitar la frecuencia de mensajes.
- **Doble Contacto:** Que el bot le escriba a alguien que ya está hablando con un humano.
    - *Solución:* Chequear estado de la conversación antes de disparar.
