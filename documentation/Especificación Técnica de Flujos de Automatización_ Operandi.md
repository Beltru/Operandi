# <a id="_nie6t3r1yntn"></a>__Especificación Técnica de Flujos de Automatización: Operandi__

## <a id="_gztrpn40r0jp"></a>__1\. Flujo: Recuperación de Carritos Abandonados \(WhatsApp\)__

Este es el motor de ROI del producto\. Se activa cuando un usuario deja productos en el carrito sin finalizar la compra\.

- __Disparador \(Trigger\):__ Webhook de la plataforma de e\-commerce \(checkout\.abandoned o similar\)\.
- __Lógica de Negocio:__
	- Recibir webhook con datos del cliente \(teléfono, nombre\) y link del carrito\.
	- Verificar en la base de datos si el cliente ya tiene una sesión activa para no duplicar mensajes\.
	- Programar una tarea \(*Background Job*\) para ejecutarse en __30\-45 minutos__\.
	- Antes de enviar, consultar la API de la tienda: ¿Existe una orden paga para este email/teléfono en la última hora?
	- Si no hay orden: Enviar mensaje de WhatsApp mediante __WhatsApp Business Cloud API__\.
- __APIs Utilizadas:__
	- __TiendaNube/Shopify/WooCommerce:__ Webhooks y /checkouts API\.
	- __WhatsApp Cloud API:__ Endpoint /messages \(usando un *Template* aprobado de tipo "Marketing"\)\.
- __Implementación:__ Usar una cola de tareas \(ej\. __BullMQ__ o __Upstash QStash__\) para manejar el retraso del envío y la concurrencia\.

## <a id="_1qte95xm3lvf"></a>__2\. Flujo: Atención Pre\-Venta en Mercado Libre \(Bot IA\)__

Respuesta inmediata a preguntas en publicaciones para maximizar la conversión\.

- __Disparador:__ Webhook de Mercado Libre \(tópico questions\)\.
- __Lógica de Negocio:__
	- Recibir el question\_id\.
	- Consultar el recurso /questions/$ID para obtener el texto y el item\_id\.
	- Consultar el recurso /items/$ITEM\_ID para obtener contexto técnico: descripción, stock real, colores disponibles y precio\.
	- Enviar el texto de la pregunta \+ contexto del producto a la __IA \(OpenAI/Claude\)__\.
	- Publicar la respuesta generada en Mercado Libre\.
- __APIs Utilizadas:__
	- __Mercado Libre API:__ /questions, /items, /answers\.
	- __LLM API:__ GPT\-4o o Claude 3\.5 Sonnet\.
- __Implementación:__ El "Prompt" debe instruir a la IA para ser vendedora, breve y siempre confirmar stock basado en el JSON del ítem recibido\.

## <a id="_2849fpkvb7vy"></a>__3\. Flujo: Seguimiento Logístico Automático \(Post\-Venta\)__

Reduce la carga de soporte respondiendo dudas sobre el estado del envío\.

- __Disparador:__ Mensaje entrante en WhatsApp o Mercado Libre con palabras clave \(ej: "donde esta mi pedido", "seguimiento"\)\.
- __Lógica de Negocio:__
	- Identificar al usuario por su teléfono o ID de comprador\.
	- Buscar en la base de datos la última orden activa de ese usuario\.
	- Consultar el estado del envío \(shipment\_id\) en la API correspondiente\.
	- Traducir el estado técnico \(ej: ready\_to\_ship\) a lenguaje humano \(ej: "Estamos preparando tu paquete, pronto será despachado"\)\.
- __APIs Utilizadas:__
	- __Mercado Envíos API:__ /shipments/$ID\.
	- __Logística Local \(Andreani/Correo Arg\):__ APIs de tracking de terceros\.
- __Implementación:__ Mapeo de estados de envío a mensajes pre\-definidos amigables\.

## <a id="_5y14yqucrys4"></a>__4\. Flujo: Recuperación de Pagos Fallidos__

Actúa cuando un pago es rechazado por la pasarela de pagos\.

- __Disparador:__ Webhook de __Mercado Pago__ \(tópico payments\) con estado rejected o cancelled\.
- __Lógica de Negocio:__
	- Extraer el motivo del rechazo \(ej: cc\_rejected\_insufficient\_amount\)\.
	- Enviar notificación automática por WhatsApp: *"Hola \[Nombre\], vimos que hubo un problema con tu pago \(monto insuficiente\)\. ¿Querés intentar con otra tarjeta o usar transferencia?"*\.
- __APIs Utilizadas:__
	- __Mercado Pago API:__ /v1/payments\.
	- __WhatsApp Cloud API\.__
- __Implementación:__ Solo disparar si la orden original se inició a través de la tienda propia o link de Operandi\.

## <a id="_67r7ue331k5z"></a>__5\. Flujo: Atribución de Ventas y Comisiones \(Plan Start\)__

Vital para la monetización de Operandi en el plan gratuito\.

- __Disparador:__ Webhook de orden paga \(order\.paid\)\.
- __Lógica de Negocio:__
	- Verificar si el customer\_id o teléfono tuvo una interacción con el bot o recibió un mensaje de recuperación en las últimas __72 horas__ \(ventana de atribución\)\.
	- Si existe el registro, marcar la orden como atribuida\_a\_operandi: true\.
	- Calcular el 5% del total\_amount de la orden\.
	- Sumar al saldo pendiente de la Organizacion en la base de datos\.
- __APIs Utilizadas:__
	- __Base de Datos Interna:__ Tablas de Logs de interacción y Orders\.
	- __Mercado Pago:__ Confirmación de acreditación final\.

## <a id="_fhtg92zygx6"></a>__6\. Flujo: Prevención de Abandono \(CRO\)__

Intervención en caliente para evitar que el usuario se vaya del sitio\.

- __Disparador:__ Evento de Frontend \(ej: mouseleave de la ventana o inactividad prolongada en el checkout\)\.
- __Lógica de Negocio:__
	- El script de Operandi en la web detecta el intento de salida\.
	- Abre un pequeño widget de chat o pop\-up dinámico\.
	- La IA ofrece una solución rápida: *"¿Dudas con el envío? Te ayudo ahora"* o un cupón de descuento por tiempo limitado\.
- __Implementación:__
	- __SDK Frontend:__ Un archivo JS liviano inyectado en la tienda\.
	- __Websockets:__ Para comunicación en tiempo real entre el widget y el backend de Operandi\.

## <a id="_sli2ndv5scxa"></a>__💡 Recomendaciones de Desarrollo \(Best Practices\)__

1. __Idempotencia:__ Asegurarse de que si un webhook llega dos veces \(común en MeLi\), el sistema no envíe dos mensajes iguales al cliente\. Usar el ID del recurso como clave única\.
2. __Manejo de Rate Limits:__ Las APIs de MeLi y WhatsApp tienen límites de velocidad\. Implementar un sistema de reintentos con *Exponential Backoff*\.
3. __Seguridad:__ Validar siempre la firma \(X\-Hub\-Signature o similar\) de los webhooks entrantes para asegurar que realmente vienen de TiendaNube, MeLi o Mercado Pago\.
4. __Logging:__ Guardar registro de cada mensaje enviado y su costo \(según el tier de WhatsApp\) para auditar la rentabilidad de cada plan\.

