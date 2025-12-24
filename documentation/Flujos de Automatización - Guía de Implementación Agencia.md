# Flujos de Automatización - Guía de Implementación para Agencia

## Estrategia: Agencia → SaaS

```
FASE 1 (Ahora)                    FASE 2 (Después)
┌─────────────────┐               ┌─────────────────┐
│    AGENCIA      │               │      SAAS       │
│                 │               │                 │
│ • Flujos en     │    Aprender   │ • Flujos en     │
│   Make/n8n      │ ───────────▶  │   código propio │
│ • Servicio      │    Escalar    │ • Self-service  │
│   personalizado │               │ • Multi-tenant  │
│ • Cobro mensual │               │ • Planes        │
└─────────────────┘               └─────────────────┘
```

**Decisión estratégica:** Comenzar como agencia de automatización para e-commerce, validar los flujos con clientes reales, aprender del mercado, y luego productizar todo en un SaaS.

---

## Resumen de los 6 Flujos

| # | Flujo | Trigger | Acción | Valor para el cliente |
|---|-------|---------|--------|----------------------|
| 1 | Recuperación de Carritos | Carrito abandonado | WhatsApp a los 30-45 min | Recuperar ventas perdidas |
| 2 | Bot Pre-Venta ML | Nueva pregunta en ML | Respuesta automática IA | Vender 24/7 |
| 3 | Seguimiento Logístico | "¿Dónde está mi pedido?" | Consulta tracking + respuesta | Reducir soporte |
| 4 | Pago Fallido | Pago rechazado | WhatsApp con alternativas | Recuperar ventas |
| 5 | Bienvenida Post-Compra | Orden confirmada | WhatsApp de gracias + upsell | Fidelización |
| 6 | Review/Feedback | 7 días post-entrega | Pedir reseña | Reputación |

---

## FLUJO 1: Recuperación de Carritos Abandonados

**El más importante - Este es nuestro "producto estrella"**

### Diagrama del Flujo

```
┌─────────────────────────────────────────────────────────────────┐
│                    RECUPERACIÓN DE CARRITOS                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TRIGGER: Webhook de TiendaNube/Shopify                         │
│           Evento: "checkout/created" o "checkout/updated"        │
│                                                                  │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐      │
│  │ Webhook │───▶│ Guardar │───▶│ Esperar │───▶│Verificar│      │
│  │ Carrito │    │ en Sheet│    │ 35 min  │    │ si pagó │      │
│  └─────────┘    └─────────┘    └─────────┘    └────┬────┘      │
│                                                     │            │
│                                    ┌────────────────┴───────┐   │
│                                    │                        │   │
│                                    ▼                        ▼   │
│                              ┌─────────┐              ┌────────┐│
│                              │ NO pagó │              │ YA pagó││
│                              │ Enviar  │              │ No     ││
│                              │WhatsApp │              │ enviar ││
│                              └─────────┘              └────────┘│
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Configuración en Make/n8n/Zapier

#### Módulos necesarios:

1. **Webhook (Trigger)**
   - URL única por cliente
   - Recibe: `checkout_id`, `customer_phone`, `customer_name`, `customer_email`, `total`, `products[]`, `checkout_url`

2. **Google Sheets - Agregar fila**
   - Guardar el carrito con timestamp
   - Columnas: `checkout_id`, `telefono`, `nombre`, `email`, `total`, `url_checkout`, `fecha_abandono`, `estado`

3. **Delay - 35 minutos**
   - Esperar antes de enviar (el cliente puede volver solo)

4. **HTTP Request - Verificar si ya pagó**
   - Llamar API de TiendaNube: `GET /orders?customer_email={email}&created_at_min={timestamp}`
   - Si hay orden → no enviar
   - Si no hay orden → continuar

5. **Router/Filtro**
   - Condición: `orders.length == 0`

6. **WhatsApp Business API - Enviar Template**
   - Template pre-aprobado tipo "Marketing"
   - Variables: `{{nombre}}`, `{{total}}`, `{{link}}`

7. **Google Sheets - Actualizar estado**
   - Marcar como "ENVIADO" o "RECUPERADO"

### Template de WhatsApp (para aprobar en Meta)

```
Nombre: carrito_abandonado_v1
Categoría: Marketing
Idioma: Español (Argentina)

Contenido:
────────────────────────────────
Hola {{1}} 👋

Vimos que dejaste productos en tu carrito por ${{2}}.

¿Tuviste algún problema para completar la compra?
Estamos acá para ayudarte.

👉 Completá tu compra: {{3}}

Si tenés dudas sobre envío, stock o medios de pago,
respondé este mensaje y te ayudamos al instante.
────────────────────────────────

Botón: [Completar compra] → URL dinámica
```

### Datos que necesitamos del cliente

| Dato | Para qué |
|------|----------|
| API Key TiendaNube/Shopify | Verificar órdenes |
| WhatsApp Business verificado | Enviar mensajes |
| Número de teléfono aprobado | ID del número en Meta |
| Template aprobado | Sin esto Meta bloquea |

### Métricas a trackear

- Carritos recibidos por día
- Mensajes enviados
- Tasa de apertura (si WA lo permite)
- Carritos recuperados (ventas post-mensaje)
- Revenue recuperado

---

## FLUJO 2: Bot Pre-Venta Mercado Libre

**Responder preguntas automáticamente con IA**

### Diagrama del Flujo

```
┌─────────────────────────────────────────────────────────────────┐
│                    BOT PRE-VENTA MERCADO LIBRE                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TRIGGER: Webhook ML (tópico: questions)                        │
│                                                                  │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐      │
│  │ Nueva   │───▶│ Obtener │───▶│ Obtener │───▶│ Generar │      │
│  │Pregunta │    │ Pregunta│    │ Producto│    │Respuesta│      │
│  └─────────┘    └─────────┘    └─────────┘    └────┬────┘      │
│                                                     │            │
│                                                     ▼            │
│                                               ┌─────────┐       │
│                                               │ Publicar│       │
│                                               │Respuesta│       │
│                                               │   ML    │       │
│                                               └─────────┘       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Configuración en Make/n8n/Zapier

#### Módulos necesarios:

1. **Webhook (Trigger)**
   - Recibe notificación de ML
   - Payload: `{ "topic": "questions", "resource": "/questions/123", "user_id": 456 }`

2. **HTTP Request - Obtener pregunta**
   - Endpoint: `GET https://api.mercadolibre.com/questions/{question_id}`
   - Headers: `Authorization: Bearer {access_token}`
   - Respuesta ejemplo:
   ```json
   {
     "id": 123,
     "text": "Hola, tienen talle M?",
     "item_id": "MLA123",
     "status": "UNANSWERED"
   }
   ```

3. **HTTP Request - Obtener producto**
   - Endpoint: `GET https://api.mercadolibre.com/items/{item_id}`
   - Obtener: título, precio, stock, atributos (talles, colores)

4. **OpenAI/Claude - Generar respuesta**
   - Prompt del sistema:
   ```
   Eres un vendedor experto de e-commerce argentino. Tu objetivo es VENDER.

   REGLAS:
   - Sé breve (máximo 3 oraciones)
   - Siempre confirma stock si está disponible
   - Si preguntan por talle/color, verifica en los atributos
   - Usa tono amigable pero profesional
   - Termina invitando a comprar
   - NO uses emojis excesivos
   - NO inventes información que no esté en el producto

   PRODUCTO:
   Título: {{titulo}}
   Precio: ${{precio}}
   Stock: {{stock}} unidades
   Atributos: {{atributos}}

   PREGUNTA DEL CLIENTE:
   {{pregunta}}

   Genera una respuesta de venta:
   ```

5. **HTTP Request - Publicar respuesta**
   - Endpoint: `POST https://api.mercadolibre.com/answers`
   - Body: `{ "question_id": 123, "text": "¡Hola! Sí, tenemos talle M disponible..." }`

6. **Google Sheets - Log**
   - Registrar: pregunta, respuesta generada, item_id, timestamp

### Consideraciones técnicas de Mercado Libre

| Aspecto | Detalle |
|---------|---------|
| OAuth | El cliente debe autorizar nuestra app en ML |
| Rate Limit | 10,000 requests/hora por app |
| Tiempo de respuesta | ML premia respuestas rápidas (<1 hora) |
| Filtros | No responder preguntas ya respondidas (`status: ANSWERED`) |
| Idioma | Detectar si la pregunta es spam o no relevante |

### Ejemplos de respuestas IA

**Pregunta:** "Tienen talle M?"
**Respuesta:** "¡Hola! Sí, tenemos talle M disponible con stock. Comprá tranquilo que sale hoy mismo. ¿Te lo reservo?"

**Pregunta:** "Hacen envíos a Córdoba?"
**Respuesta:** "¡Hola! Sí, hacemos envíos a todo el país por Mercado Envíos. A Córdoba llega en 3-5 días hábiles. ¡Esperamos tu compra!"

**Pregunta:** "El precio es negociable?"
**Respuesta:** "¡Hola! El precio publicado es el mejor que podemos ofrecer, ya incluye envío gratis. ¡Aprovechá que hay stock!"

---

## FLUJO 3: Seguimiento Logístico Automático

**"¿Dónde está mi pedido?" resuelto en segundos**

### Diagrama del Flujo

```
┌─────────────────────────────────────────────────────────────────┐
│                    SEGUIMIENTO LOGÍSTICO                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TRIGGER: Mensaje entrante WhatsApp con palabras clave          │
│           ("pedido", "envío", "dónde", "seguimiento")           │
│                                                                  │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐      │
│  │ Mensaje │───▶│ Buscar  │───▶│ Consultar│──▶│ Traducir│      │
│  │entrante │    │ orden   │    │ tracking │   │ estado  │      │
│  └─────────┘    │por phone│    │ API      │   │ humano  │      │
│                 └─────────┘    └─────────┘    └────┬────┘      │
│                                                     │            │
│                                                     ▼            │
│                                               ┌─────────┐       │
│                                               │ Enviar  │       │
│                                               │WhatsApp │       │
│                                               └─────────┘       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Configuración en Make/n8n/Zapier

#### Módulos necesarios:

1. **Webhook WhatsApp (Trigger)**
   - Mensaje entrante con el texto del cliente

2. **Filtro - Detectar intención**
   - Regex: `/pedido|envío|envio|dónde|donde|seguimiento|tracking|paquete/i`

3. **Google Sheets - Buscar orden**
   - Buscar por número de teléfono del cliente
   - Obtener: `order_id`, `shipment_id`, `carrier` (Mercado Envíos, Andreani, Correo)

4. **Router - Según carrier**
   - Mercado Envíos → API Mercado Libre
   - Andreani → API Andreani
   - Correo Argentino → API OCA

5. **HTTP Request - Consultar estado**
   - ML: `GET https://api.mercadolibre.com/shipments/{shipment_id}`
   - Andreani: `GET https://api.andreani.com/v1/envios/{tracking}`

6. **Mapeo de estados técnicos a lenguaje humano**

```javascript
const estadosHumanos = {
  "pending": "Tu pedido está siendo preparado 📦",
  "handling": "Estamos preparando tu paquete para el envío",
  "ready_to_ship": "Tu paquete está listo, pronto será despachado",
  "shipped": "¡Tu pedido ya fue despachado! 🚚",
  "in_transit": "Tu paquete está en camino",
  "out_for_delivery": "¡Tu pedido sale hoy para entrega! 🎉",
  "delivered": "Tu pedido fue entregado ✅",
  "not_delivered": "No pudimos entregar, se reintentará pronto"
}
```

7. **WhatsApp - Enviar respuesta**

```
¡Hola! 👋

El estado de tu pedido #{order_id} es:

📍 {estado_humano}

🔗 Seguí tu envío acá: {tracking_url}

¿Necesitás algo más?
```

### Carriers soportados en Argentina

| Carrier | API disponible | Dificultad |
|---------|---------------|------------|
| Mercado Envíos | Sí (ML API) | Fácil |
| Andreani | Sí | Media |
| Correo Argentino/OCA | Limitada | Difícil |
| Flex (ML) | Sí (ML API) | Fácil |

---

## FLUJO 4: Recuperación de Pagos Fallidos

**Cuando el pago es rechazado, no perder la venta**

### Diagrama del Flujo

```
┌─────────────────────────────────────────────────────────────────┐
│                    PAGO FALLIDO                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TRIGGER: Webhook Mercado Pago (payment.rejected)               │
│                                                                  │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐      │
│  │ Pago    │───▶│ Obtener │───▶│ Traducir│───▶│ Enviar  │      │
│  │Rechazado│    │ detalle │    │ motivo  │    │WhatsApp │      │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Configuración en Make/n8n/Zapier

#### Módulos necesarios:

1. **Webhook Mercado Pago (Trigger)**
   - Filtrar eventos: `action == "payment.updated"` y `status == "rejected"`

2. **HTTP Request - Detalle del pago**
   - Endpoint: `GET https://api.mercadopago.com/v1/payments/{payment_id}`
   - Obtener: motivo de rechazo, datos del cliente, monto

3. **Mapeo de motivos de rechazo a lenguaje humano**

```javascript
const motivosHumanos = {
  "cc_rejected_insufficient_amount": "Tu tarjeta no tiene fondos suficientes",
  "cc_rejected_bad_filled_card_number": "El número de tarjeta es incorrecto",
  "cc_rejected_bad_filled_security_code": "El código de seguridad es incorrecto",
  "cc_rejected_bad_filled_date": "La fecha de vencimiento es incorrecta",
  "cc_rejected_call_for_authorize": "Necesitás autorizar el pago con tu banco",
  "cc_rejected_card_disabled": "Tu tarjeta está inhabilitada",
  "cc_rejected_max_attempts": "Superaste el límite de intentos",
  "cc_rejected_high_risk": "El pago fue rechazado por seguridad",
  "cc_rejected_blacklist": "No pudimos procesar con esta tarjeta"
}
```

4. **WhatsApp - Enviar mensaje de recuperación**

```
Hola {{nombre}} 👋

Vimos que hubo un problema con tu pago:
{{motivo_humano}}

¿Querés intentar con otra tarjeta o preferís pagar por transferencia?

👉 Reintentar compra: {{checkout_url}}

Alternativas de pago:
• Otra tarjeta de crédito/débito
• Transferencia bancaria
• Efectivo en Rapipago/Pago Fácil

Si necesitás ayuda, respondé este mensaje.
```

### Importante

- Solo enviar si el checkout se inició desde la tienda del cliente (no spam)
- No enviar múltiples mensajes por el mismo intento fallido
- Respetar horarios (no enviar de madrugada)

---

## FLUJO 5: Bienvenida Post-Compra

**Fidelización inmediata después de la compra**

### Diagrama del Flujo

```
TRIGGER: Webhook orden pagada (order.paid)
    │
    ▼
┌─────────────────────────────┐
│ Esperar 2 horas             │
│ (no saturar al cliente)     │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│ WhatsApp de bienvenida      │
└─────────────────────────────┘
```

### Mensaje de WhatsApp

```
¡Gracias por tu compra, {{nombre}}! 🎉

Tu pedido #{{order_id}} ya está siendo preparado.

📦 Te avisamos apenas salga el envío.

Como agradecimiento, tenés un 10% OFF en tu próxima compra:
🎁 Código: GRACIAS10

¿Tenés alguna duda? Respondé este mensaje y te ayudamos.
```

### Valor agregado

- Humaniza la marca
- Reduce ansiedad post-compra
- Genera recompra con el cupón
- Abre canal de comunicación directo

---

## FLUJO 6: Solicitud de Reseña

**7 días después de la entrega**

### Diagrama del Flujo

```
TRIGGER: Webhook envío entregado (shipment.delivered)
    │
    ▼
┌─────────────────────────────┐
│ Guardar en Sheet con fecha  │
│ de entrega                  │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│ Escenario programado        │
│ (corre todos los días)      │
│                             │
│ Buscar entregas de hace     │
│ exactamente 7 días          │
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│ Enviar WhatsApp pidiendo    │
│ reseña                      │
└─────────────────────────────┘
```

### Mensaje de WhatsApp

```
¡Hola {{nombre}}! 👋

¿Qué te pareció tu compra? Tu opinión nos ayuda un montón a mejorar.

⭐ Dejá tu reseña acá: {{link_review}}

Solo te toma 1 minuto y nos ayudás a seguir creciendo.

¡Gracias por elegirnos!
```

### Por qué 7 días

- El cliente ya usó el producto
- No es tan tarde como para que se olvide
- Tiempo suficiente para formarse una opinión

---

## Estructura de Precios para la Agencia

### Planes sugeridos

| Plan | Precio Mensual | Setup Inicial | Incluye |
|------|---------------|---------------|---------|
| **Starter** | $150 USD | $200 USD | 1 flujo (Carritos abandonados) + hasta 500 mensajes WA |
| **Growth** | $350 USD | $350 USD | 3 flujos + Bot ML + hasta 2,000 mensajes WA |
| **Pro** | $600 USD | $500 USD | Todos los flujos + IA personalizada + mensajes ilimitados |

### Costos operativos por cliente (estimado)

| Concepto | Costo mensual |
|----------|---------------|
| Make.com (proporción) | $5-15 USD |
| WhatsApp mensajes (500) | $25-45 USD |
| OpenAI API (500 respuestas) | $5-15 USD |
| Google Sheets | Gratis |
| **Total aproximado** | $35-75 USD |

### Margen por plan

| Plan | Ingreso | Costo | Margen |
|------|---------|-------|--------|
| Starter | $150 | ~$40 | ~$110 (73%) |
| Growth | $350 | ~$60 | ~$290 (83%) |
| Pro | $600 | ~$100 | ~$500 (83%) |

---

## Requisitos Técnicos

### Cuentas necesarias

| Servicio | Para qué | Costo aproximado |
|----------|----------|------------------|
| Make.com (o n8n self-hosted) | Automatizaciones | $9-29/mes |
| WhatsApp Business API (via 360dialog o similar) | Mensajes | $0.05-0.09/mensaje |
| OpenAI API | Respuestas IA | $0.002/1K tokens |
| Google Workspace | Sheets como DB simple | Gratis o $6/mes |
| Mercado Libre Developer | Integración ML | Gratis |

### Por cada cliente nuevo necesitamos

1. ✅ Acceso a su TiendaNube/Shopify (API Key)
2. ✅ Autorización de su cuenta Mercado Libre (OAuth)
3. ✅ WhatsApp Business verificado del cliente (o usar intermediario)
4. ✅ Google Sheet compartido para logs y datos
5. ✅ Información de su negocio para personalizar mensajes

---

## Proceso de Onboarding de un Cliente

### Semana 1: Setup

| Día | Tarea |
|-----|-------|
| 1 | Llamada inicial - entender el negocio |
| 2 | Solicitar accesos (API keys, OAuth) |
| 3 | Crear escenarios en Make |
| 4 | Aprobar templates de WhatsApp |
| 5 | Testing interno |

### Semana 2: Go-live

| Día | Tarea |
|-----|-------|
| 1 | Activar webhooks en producción |
| 2 | Monitorear primeros mensajes |
| 3 | Ajustar prompts de IA si es necesario |
| 4 | Capacitar al cliente en el Sheet de métricas |
| 5 | Documentar y entregar |

### Ongoing

- Revisión semanal de métricas
- Ajustes de prompts según feedback
- Reporte mensual de resultados
- Soporte por WhatsApp/email

---

## Ideas para la Landing Page

### Secciones sugeridas

1. **Hero**
   - Título: "Recuperamos las ventas que estás perdiendo"
   - Subtítulo: "Automatizamos WhatsApp y Mercado Libre para tu e-commerce"
   - CTA: "Probá gratis por 14 días"

2. **El Problema**
   - "El 70% de los carritos se abandonan"
   - "Las preguntas en ML sin responder = ventas perdidas"
   - "Tu equipo no da abasto con el soporte"

3. **La Solución**
   - Mostrar los 6 flujos con íconos y descripción breve

4. **Cómo Funciona**
   - Paso 1: Conectamos tus plataformas
   - Paso 2: Configuramos los flujos
   - Paso 3: Vos vendés más, automáticamente

5. **Demo Interactiva**
   - Formulario donde el visitante ingresa su WhatsApp
   - Simula "abandonar un carrito"
   - Recibe el mensaje de recuperación real en su teléfono
   - **Esto demuestra el valor EN VIVO**

6. **Resultados** (cuando tengamos casos)
   - "+25% en ventas recuperadas"
   - "3 horas/día ahorradas en soporte"
   - "100% de preguntas ML respondidas en <1 hora"

7. **Precios**
   - Los 3 planes de agencia

8. **FAQ**
   - ¿Funciona con mi tienda?
   - ¿Necesito WhatsApp Business?
   - ¿Cuánto tarda la implementación?

9. **CTA Final**
   - "Agenda una demo gratuita"
   - Calendly embebido

---

## Próximos Pasos Inmediatos

### Para empezar a operar

- [ ] Crear cuenta en Make.com (plan Pro, ~$29/mes)
- [ ] Configurar WhatsApp Business API (360dialog o similar)
- [ ] Crear cuenta OpenAI API
- [ ] Registrar app en Mercado Libre Developers
- [ ] Crear templates de WhatsApp y enviar a aprobación
- [ ] Diseñar Google Sheet template para clientes
- [ ] Armar landing page básica
- [ ] Conseguir primer cliente beta (idealmente conocido)

### Para validar

- [ ] Correr 2-3 clientes beta por 1 mes gratis
- [ ] Medir resultados reales (carritos recuperados, ventas)
- [ ] Iterar sobre los flujos según feedback
- [ ] Documentar casos de éxito
- [ ] Definir precios finales basados en valor real

---

## Contacto y Dudas

Este documento es una guía viva. A medida que implementemos y aprendamos, lo iremos actualizando.

**Próxima reunión sugerida:** Definir cuál flujo implementamos primero y conseguir el primer cliente beta.
