# <a id="_d6wpm54i87sz"></a>__Documentación de Integración: Ecosistema Mercado Libre para Operandi__

## <a id="_5yz0enz16zki"></a>__1\. Fundamentos de la API y Autenticación__

Todas las APIs de Mercado Libre utilizan el protocolo __OAuth 2\.0__ para la autorización\. Para interactuar con los datos de un usuario \(vendedor\), Operandi debe obtener un access\_token\.

### <a id="_eghq26w4dxxy"></a>__🔐 Flujo de Autenticación__

1. __Registro de Aplicación:__ Crear una aplicación en el[ Mercado Libre Dev Center](https://developers.mercadolibre.com.ar/)\. Se obtendrán un Client ID y un Client Secret\.
2. __Autorización:__ El usuario es redirigido a una URL de Mercado Libre para autorizar a Operandi\.
	- URL: https://auth\.mercadolibre\.com\.ar/authorization?response\_type=code&client\_id=$APP\_ID&redirect\_uri=$YOUR\_URL
3. __Intercambio de Token:__ MeLi devuelve un code que se intercambia por un access\_token y un refresh\_token\.
4. __Renovación:__ El access\_token expira cada 6 horas; debe renovarse automáticamente usando el refresh\_token\.

## <a id="_atc3hys78s3c"></a>__2\. Mercado Libre \(Gestión de Ventas y Productos\)__

Para Operandi, los recursos más importantes son los ítems, las órdenes y las preguntas\.

### <a id="_um7qo1j0fbhc"></a>__📦 Gestión de Ítems \(Productos\)__

- __Listado:__ POST /items \(crear publicación\)\.
- __Consulta:__ GET /items/$ITEM\_ID\.
- __Sincronización:__ Es vital para el bot de Operandi conocer el stock y precio real para responder consultas\.

### <a id="_9fyteqdz5i0s"></a>__🛒 Órdenes y Ventas__

- __Búsqueda de Órdenes:__ GET /orders/search?seller=$SELLER\_ID\.
- __Detalle de Orden:__ GET /orders/$ORDER\_ID\. Contiene información del comprador, estado del pago y de la entrega\.

### <a id="_ycjzm0gfj0rz"></a>__💬 Preguntas y Respuestas \(Bots\)__

Para la automatización de atención al cliente:

- __Recibir Preguntas:__ Se utiliza el tópico questions en las notificaciones\.
- __Responder:__ POST /answers\.
	- *Payload:* \{"question\_id": 12345, "text": "Hola\! Tenemos stock disponible\."\}

## <a id="_bhkw2drs2zis"></a>__3\. Mercado Pago \(Gestión de Pagos\)__

Indispensable para la validación de comisiones y el seguimiento financiero en Operandi\.

### <a id="_kt6ownwcp9v0"></a>__💳 Integración de Pagos__

- __Checkout Pro:__ Redirige al usuario a una página de Mercado Pago\.
- __API \(Checkout Transparente\):__ Permite procesar pagos sin salir de la plataforma \(requiere mayor cumplimiento de seguridad\)\.
- __Recursos:__
	- GET /v1/payments/$PAYMENT\_ID: Obtener estado detallado del pago \(approved, pending, rejected\)\.
	- GET /v1/refunds: Gestión de devoluciones\.

### <a id="_bcak7glfpwt0"></a>__🔗 Atribución de Ventas__

Para el __Plan Start__ \(comisión del 5%\), se debe cruzar el order\_id de MeLi con el payment\_id de Mercado Pago para confirmar que el dinero ha sido acreditado\.

## <a id="_7a402su61pso"></a>__4\. Mercado Envíos \(Logística y Rastreo\)__

Permite al bot de Operandi responder la pregunta más frecuente: *"¿Dónde está mi pedido?"*\.

### <a id="_dqst1xl0jgyk"></a>__🚚 Modos de Envío__

1. __ME2 \(Mercado Envíos 2\):__ El vendedor despacha por correo\.
2. __Flex:__ Entregas en el día \(mensajería propia\)\.
3. __Full:__ Mercado Libre almacena y despacha el producto\.

### <a id="_6fb68ju9q11r"></a>__📍 Seguimiento \(Tracking\)__

- __Endpoint:__ GET /shipments/$SHIPMENT\_ID\.
- __Campos clave:__
	- status: handling, shipped, delivered\.
	- substatus: out\_for\_delivery, ready\_to\_ship\.
	- tracking\_number y tracking\_url\.

## <a id="_dg3tzufui8lx"></a>__5\. Webhooks y Notificaciones \(Tiempo Real\)__

Para evitar el "caos operativo" y las tareas manuales, Operandi debe configurar un __Notification URL__\.

### <a id="_ijdsekac01v9"></a>__⚡ Tópicos de Suscripción__

- __orders\_v2:__ Notifica nuevas ventas\.
- __items:__ Cambios en stock o precio\.
- __questions:__ Consultas de posibles compradores \(disparador para el bot\)\.
- __payments:__ Cambios en el estado del pago\.
- __shipments:__ Actualizaciones de logística\.

__Estructura del Webhook:__

JSON

\{

  "resource": "/orders/123456",

  "topic": "orders\_v2",

  "user\_id": 987654,

  "application\_id": 112233,

  "sent": "2023\-10\-27T10:00:00Z",

  "attempts": 1

\}

## <a id="_ruy0me17h8ur"></a>__6\. Consideraciones Especiales para Operandi__

### <a id="_f6kvna7j2lyo"></a>__🌍 Global Selling vs\. Local AR__

- __Global Selling:__ Permite vender desde otros países hacia Argentina\. La moneda de referencia suele ser USD, pero el pago se procesa en moneda local\.
- __Local \(MLA\):__ Gestión directa en Argentina\. Operandi debe manejar el Marketplace ID MLA para todas las llamadas a la API en Argentina\.

### <a id="_eu3wsqsocvzw"></a>__🤖 Lógica para el Bot__

1. __Recepción:__ El Webhook notifica una nueva question\.
2. __Análisis:__ La IA procesa el texto\.
3. __Contexto:__ Operandi consulta GET /items/$ITEM\_ID para verificar stock\.
4. __Respuesta:__ Se envía la respuesta vía POST /answers\.
5. __Lead:__ Se registra al usuario en el CRM de Operandi para seguimiento post\-venta\.

## <a id="_g71oyyc6td59"></a>__🔗 Enlaces de Referencia para Desarrolladores__

- __Portal de Desarrolladores MeLi:__[ developers\.mercadolibre\.com\.ar](https://developers.mercadolibre.com.ar/es_ar/guia-para-producto)
- __API de Mercado Envíos:__[ developers\.mercadoenvios\.com](https://developers.mercadoenvios.com/)
- __Mercado Pago Developers:__[ mercadopago\.com\.ar/developers](https://www.mercadopago.com.ar/developers/es)

*Este documento sirve como base técnica para la implementación de los Bloques 2 y 3 del Roadmap de Operandi\.*

