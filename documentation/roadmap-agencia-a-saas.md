# Roadmap Estratégico: De Agencia a SaaS en 6 Meses (Modelo Service-as-a-Software)

**Objetivo:** Validar los dolores del mercado e-commerce argentino mediante servicios de agencia, generar flujo de caja inmediato, y transicionar exitosamente a un producto SaaS propio en un plazo de 6 meses.

**Estrategia:** Paralelizar la validación comercial (Ventas) con la construcción tecnológica (Producto) aprovechando la sociedad.

---

## Roles y Responsabilidades

### 1. Rol Comercial & Estrategia (Vos)
*   **Foco Principal:** Generación de Demanda (Outbound Marketing) y Ventas.
*   **Herramienta Clave:** **Apollo.io** (Prospección masiva y emails en frío).
*   **Objetivo:** Conseguir clientes, entender el "dolor" real, y asegurar el flujo de caja ("Nafta" para el proyecto).
*   **KPI:** # de Clientes Pagos, MRR (Ingreso Recurrente Mensual), Feedback cualitativo.

### 2. Rol Técnico & Producto (Socio)
*   **Foco Principal:** Delivery (Entrega del servicio) y Desarrollo SaaS.
*   **Herramienta Clave:** **n8n** (Para MVP rápido) -> **Next.js/Node.js** (Para SaaS final).
*   **Objetivo:** Resolver el problema manualmente primero, estandarizar la solución, y codificarla en un producto escalable.
*   **KPI:** Tiempos de implementación, Estabilidad de la plataforma, Funcionalidades del MVP.

---

## Cronograma de Ejecución (6 Meses)

### Fase 1: "La Cacería y el Laboratorio" (Mes 1-2)
*El objetivo es validar hipótesis y facturar. No escribir código perfecto, sino solucionar problemas.*

*   **Comercial:**
    *   Configuración de **Apollo.io** (Warm-up de dominio, segmentación: Mercado Libre Platinum/Gold, TiendaNube, Shopify Argentina).
    *   Campaña de Cold Email agresiva (foco en "Solución Inmediata": Facturación AFIP, Respuestas 24/7).
    *   Venta de servicios de agencia "Custom" (High Ticket Setup).
    *   **Meta:** 5-10 Clientes Pagos.
*   **Técnico:**
    *   Implementación de soluciones usando **n8n** (Low-code) y scripts rápidos.
    *   Validación técnica: ¿Qué APIs fallan? ¿Qué lógica pide siempre el cliente?
    *   Identificación del "Core Feature": ¿Cuál es la funcionalidad que todos piden? (Probablemente Facturación o Dashboard de Precios).

### Fase 2: "Estandarización y Construcción" (Mes 3-4)
*El objetivo es dejar de hacer cosas a medida y empezar a construir el activo propio.*

*   **Comercial:**
    *   Detección de patrones en las ventas.
    *   "Paquetización" de la oferta. Dejar de vender "lo que quieras" y vender "El Pack Operandi".
    *   Feedback loop con el Socio: "El mercado pide X, dejemos de gastar tiempo en Y".
*   **Técnico:**
    *   **Freeze Operativo:** Minimizar el tiempo dedicado a implementaciones manuales (delegar o automatizar al máximo).
    *   **Construcción del MVP SaaS:** Inicio del desarrollo en Next.js + Node.js + Base de Datos propia.
    *   El código debe replicar la lógica validada en la Fase 1, pero de forma multi-tenant (escalable para muchos usuarios).

### Fase 3: "La Migración y Lanzamiento" (Mes 5-6)
*El objetivo es transformar el servicio en producto y escalar.*

*   **La Jugada Maestra (Migración):**
    *   Ofrecer a los clientes actuales de agencia una migración gratuita y anticipada al nuevo SaaS ("Versión Beta Exclusiva").
    *   Incentivo: Descuento en el fee mensual o funcionalidades extra.
*   **Técnico:**
    *   Despliegue del SaaS en producción.
    *   Migración de los clientes "manuales" a la plataforma automática.
    *   Fin del mantenimiento manual -> El socio se dedica 100% a mejorar el producto.
*   **Comercial:**
    *   Cambio de Pitch en Apollo: De "Contrata mi Agencia" a "Prueba nuestro Software".
    *   Lanzamiento oficial con casos de éxito reales ("Ya lo usan 15 e-commerce líderes").

---

## Factores Clave de Éxito

1.  **No enamorarse del código:** Enamorarse del problema del cliente. Si pagan por un Excel, vendemos Excel hasta tener el SaaS.
2.  **Velocidad de Ventas:** Usar Apollo desde el día 1 garantiza que cuando el software exista, habrá a quién vendérselo.
3.  **Foco en Argentina (Nicho):** No competir con Shopify global. Competir en la "trinchera" argentina (AFIP, Inflación, Dólar). Ahí está la ventaja competitiva.

---

## Stack Tecnológico Propuesto

*   **Prospección:** Apollo.io
*   **Prototipado/Agencia:** n8n, Google Sheets, Scripts Python/Node.
*   **SaaS Final:**
    *   Frontend: Next.js (React).
    *   Backend: Node.js (NestJS o Express).
    *   Base de Datos: PostgreSQL / Supabase.
    *   Infraestructura: Vercel / AWS.
    *   Integraciones: Afip SDK, Mercado Libre API.
