# Operandi Tax: Facturación Automática Inteligente

## 🎯 Objetivo
Eliminar la carga manual de facturar ventas de e-commerce, garantizando cumplimiento fiscal (AFIP) pero permitiendo estrategias de negocio (control de topes, exclusiones, manejo de múltiples puntos de venta).

## 🛠️ Stack Tecnológico
- **Core:** Node.js / TypeScript.
- **Fiscal:** `afip.js` (Librería open source) o integración directa vía SOAP web services de AFIP (WSAA, WSFEv1).
- **Base de Datos:** PostgreSQL (Relacional es obligatorio aquí para trazar facturas, notas de crédito, CUITs).
- **Colas:** RabbitMQ / Redis (Fundamental: AFIP se cae a menudo, el sistema debe reintentar más tarde sin perder datos).

## ⚙️ Arquitectura del Servicio

### 1. Inputs (Entradas)
- **Webhook Mercado Libre / TiendaNube:** Notificación de `order.paid`.
- **Datos de Facturación:** CUIT/DNI del comprador, Monto, Ítems, Condición Fiscal (extraído de la API de la plataforma o pedido al usuario).

### 2. Motor de Reglas (The Gatekeeper)
Antes de facturar, la venta pasa por un filtro lógico configurable por el cliente:

1.  **Validación de Datos:** ¿El CUIT es válido? (Consultar Padrón AFIP A5/A13).
2.  **Reglas de Exclusión:**
    - *"No facturar ventas menores a $500".*
    - *"Si es Tierra del Fuego, usar Punto de Venta de Exportación (E)".*
    - *"Si el cliente pidió 'Factura A', verificar que sea Responsable Inscripto".*
3.  **Tope de Facturación:** *"Avisar si estoy cerca de pasarme de categoría del Monotributo".*

### 3. Proceso de Emisión (Ejecución)
1.  **Solicitar CAE:** Conectar con AFIP WSFEv1 y pedir autorización.
2.  **Generación de PDF:** Si AFIP aprueba, generar el PDF de la factura con código QR.
3.  **Adjuntar:** Subir el PDF a la mensajería de la orden de Mercado Libre (API `/messages/attachments`).

### 4. Outputs (Salidas)
- Factura Electrónica legal (CAE).
- Nota de Crédito automática (si hay devolución).
- Libro de IVA Ventas (Excel/CSV para el contador).

## 📋 Features Clave

### MVP (Fase 1)
- Facturación automática de MELI (Factura B y A).
- Reintentos automáticos si AFIP está caído.
- Envío de factura por mensajería interna.

### Versión Full (SaaS)
- **Multi-Cuenta / Multi-CUIT:** Gestionar varias empresas desde un solo panel.
- **Smart Routing:** "Si es producto X, facturar con CUIT A. Si es producto Y, facturar con CUIT B".
- **Dashboard Impositivo:** Alerta de recategorización de Monotributo en tiempo real.
- **Conciliación:** Chequear que lo que dice MELI coincida con lo que dice AFIP.

## ⚠️ Riesgos y Mitigación
- **Errores de AFIP:** El webservice es inestable.
    - *Solución:* Arquitectura asíncrona robusta (Colas con *exponential backoff*). Nunca hacer el proceso sincrónico (esperando respuesta en el momento).
- **Datos incorrectos del usuario:** DNI inválido.
    - *Solución:* Lógica de "Fallback" -> Facturar a "Consumidor Final Genérico" si falla la validación, o poner la orden en estado "Requiere Atención Manual".
