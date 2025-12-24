Para pasar de la demo actual a un producto comercial exitoso, debemos priorizar las tareas que construyen la infraestructura técnica y el motor de ingresos\. Aquí tienes la hoja de ruta organizada de mayor a menor importancia:

### <a id="_wanpei1dhqz"></a>__Bloque 1: Cimientos Técnicos y Datos \(Lo más urgente\)__

Sin esto, la plataforma no puede funcionar de manera real\.

1. __Rediseño del Modelo de Datos \(schema\.prisma\):__ Actualizar el esquema para incluir tablas de Tienda \(credenciales API\), Producto \(caché de stock\), CarritoAbandonado y Orden\. Es fundamental para dejar atrás el enfoque genérico de "leads"\.
2. __Implementación de Webhooks:__ Desarrollar los puntos de entrada para recibir notificaciones en tiempo real de __TiendaNube__ y __Shopify__ cada vez que hay un nuevo carrito o venta\.
3. __Integración con WhatsApp Business API:__ Configurar la conexión oficial \(Cloud API\) para permitir el envío automatizado de mensajes, ya que es el canal principal de recuperación\.

### <a id="_b5kzn4g8mtbl"></a>__Bloque 2: El Motor de Ingresos \(Prioridad Alta\)__

Estas tareas habilitan la funcionalidad que genera dinero directamente para el cliente y para Operandi\.

4\. Lógica de Recuperación de Carritos: Programar el "trigger" que detecta el abandono, espera el tiempo configurado y dispara el mensaje de WhatsApp con el link de pago dinámico\.

5\. Atribución de Ventas y Comisiones: Desarrollar el sistema que identifica si una venta en la tienda fue gracias a Operandi, necesario para cobrar el 5% en el Plan Start\.

6\. Integración con Mercado Libre: Conectar la API de ML para centralizar preguntas pre\-venta y mensajes de post\-venta en el sistema\.

### <a id="_b5629a4pkqgk"></a>__Bloque 3: Centralización y Operación \(Prioridad Media\)__

Mejora la experiencia del usuario y "mata" el uso de múltiples pestañas y Excels\.

7\. Inbox Unificado Multicanal: Evolucionar el componente de conversaciones para que un solo chat maneje WhatsApp, Instagram y Mercado Libre\.

8\. Sincronización de Logística \(Rastreo\): Conectar con las APIs de Mercado Envíos, Andreani y Correo Argentino para que el sistema \(y el bot\) conozcan el estado de los paquetes\.

9\. Dashboard de Métricas Monetarias: Refactorizar la vista de analíticas para mostrar "Ventas Recuperadas" y "Comisiones Acumuladas" en lugar de métricas de tráfico genéricas\.

### <a id="_2w6n0ef60y3v"></a>__Bloque 4: Inteligencia y Automatización \(Prioridad Evolutiva\)__

Funcionalidades que justifican los planes de mayor costo \(Growth y Professional\)\.

10\. Chatbot de IA Especializado: Entrenar la IA con el catálogo sincronizado para responder sobre stock y talles automáticamente\.

11\. Módulo de Prevención de Abandono \(CRO\): Implementar la detección de intención de salida en el frontend para que el bot intervenga antes del abandono\.

12\. Sistema de Cupones Automáticos: Automatizar la creación de descuentos en la tienda del cliente desde el panel de Operandi\.

### <a id="_mnjf41dn8oyi"></a>__Bloque 5: Negocio y Crecimiento \(Continuo\)__

Tareas de soporte y escalabilidad\.

13\. Sistema de Pagos y Facturación: Automatizar el cobro mensual de los planes de $99 y $299 y la liquidación de comisiones\.

14\. Marketing y Pauta: Lanzar campañas enfocadas en "Recuperación de ventas" para atraer tiendas al plan gratuito y luego migrarlas\.

15\. Inteligencia Predictiva \(Fase Final\): Desarrollo del módulo Enterprise para detección de tendencias y optimización de publicaciones\.

¿Por qué este orden?

Empezamos por los datos y la conexión con las tiendas porque sin información real no hay nada que automatizar\. Luego vamos directo a la recuperación de carritos porque es el valor más tangible que el cliente está dispuesto a pagar \(el "agua en el desierto"\)\. Finalmente, pulimos la IA y las métricas avanzadas para retener a los clientes y subirlos de nivel en los planes de suscripción\.

