# Operandi Logistics: Torre de Control de Envíos

## 🎯 Objetivo
Reducir la ansiedad del comprador y las consultas de "¿dónde está mi pedido?" mediante seguimiento proactivo y notificaciones en tiempo real, unificando múltiples logísticas (Correo, Flex, Envíos propios).

## 🛠️ Stack Tecnológico
- **Core:** Node.js.
- **Conectividad:** Webhooks (si la logística lo soporta) o Polling (Consultas periódicas a APIs).
- **Integraciones:** Mercado Envíos, Andreani, Correo Argentino, Urbano, Partners de Flex.

## ⚙️ Arquitectura del Servicio

### 1. Inputs (Entradas)
- **Código de Seguimiento (Tracking ID):** Detectado en la orden de Mercado Libre o ingresado manualmente.
- **Cambios de Estado:** Webhooks de Mercado Envíos (`shipments`).

### 2. Normalización de Estados
Cada empresa llama a los estados de forma distinta. Logistics debe traducirlos a un lenguaje común para el usuario:
- *Andreani:* "En distribución".
- *Correo Arg:* "En poder del cartero".
- **Operandi Status:** "Saliendo a tu domicilio 🚚".

### 3. Workflow de Comunicación
1.  **Etapa: Preparación.** -> *"¡Hola! Ya estamos empaquetando tu pedido. Sale hoy mismo."*
2.  **Etapa: Despacho.** -> *"Ya lo tiene el correo. Tu código es XXX. Seguilo acá: [Link]."*
3.  **Etapa: En Reparto (Critical).** -> *"¡Atenti! Está llegando hoy. ¿Hay alguien para recibirlo?"* (Esto baja drásticamente las devoluciones por "Ausente").
4.  **Etapa: Entregado.** -> *"¡Que lo disfrutes! ¿Te llegó todo bien?"* (Disparador optativo de encuesta de satisfacción).

### 4. Outputs (Salidas)
- Mensajes de WhatsApp / Email con actualizaciones de estado.
- Dashboard interno de "Envíos con Problemas" (Demorados, Siniestrados, Devoluciones).

## 📋 Features Clave

### MVP (Fase 1)
- Seguimiento de Mercado Envíos básico.
- Notificación de "En camino" y "Entregado" por WhatsApp.

### Versión Full (SaaS)
- **Integración Multi-Operador:** Soportar Andreani/Correo Arg para ventas fuera de ML (TiendaNube/Shopify).
- **Detección de Anomalías:** Alerta roja automática si un paquete no se mueve por 48hs (para iniciar reclamo en el correo antes que el cliente se queje).
- **Analítica Logística:** "Andreani tarda promedio 3 días, Correo Arg tarda 5 días". Ayuda a elegir mejor proveedor.
- **Prueba de Entrega (POD):** Guardar foto de la entrega si el correo la provee.

## ⚠️ Riesgos y Mitigación
- **Costos de WhatsApp:** Mandar 4 mensajes por pedido puede ser caro.
    - *Solución:* Usar Email para estados intermedios y WhatsApp solo para "En Reparto" (El más crítico).
- **Polling excesivo:** Bloqueo de APIs de correos por consultar demasiado seguido.
    - *Solución:* Ajustar frecuencia de actualización inteligente (Si está "En viaje larga distancia", chequear cada 6hs. Si está "En sucursal destino", chequear cada 30 min).
