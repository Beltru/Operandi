# Operandi Reply: Bot de Inteligencia Artificial para Atención al Cliente

## 🎯 Objetivo
Responder preguntas de preventa y mensajes de posventa en Mercado Libre de forma automática, humana y persuasiva, reduciendo el tiempo de respuesta a segundos y aumentando la tasa de conversión.

## 🛠️ Stack Tecnológico
- **Core:** Node.js / Python (FastAPI).
- **LLM:** OpenAI API (GPT-4o / GPT-3.5-turbo) o Anthropic Claude 3.5 Sonnet.
- **Base de Datos Vectorial (RAG):** Pinecone / Supabase pgvector (para almacenar información de productos y respuestas pasadas).
- **Colas:** Redis / BullMQ (para encolar respuestas y evitar rate limits de Mercado Libre).
- **Integraciones:** Mercado Libre API (Questions, Messages, Items).

## ⚙️ Arquitectura del Servicio

### 1. Inputs (Entradas)
- **Webhook de Mercado Libre:** Tópico `questions` o `messages`.
- **Payload:** ID de pregunta/mensaje, ID de publicación (`item_id`), ID de usuario.

### 2. Proceso Lógico (The Brain)
1.  **Enriquecimiento de Contexto:**
    - Recibir la pregunta: *"¿Sirve para un Gol Trend 2012?"*.
    - Consultar a la API de MELI los detalles del `item_id`: Título, Descripción, Atributos, Precio, Stock.
    - (Opcional) Consultar Base de Datos Vectorial para ver si ya se respondió algo similar (RAG).
2.  **Análisis de Intención (Clasificación):**
    - El LLM decide:
        - ¿Es una duda técnica? -> **Responder**.
        - ¿Es un reclamo/insulto? -> **Escalar a Humano** (No responder).
        - ¿Pide descuento? -> **Aplicar Regla de Negocio** (Ej: "No hacemos descuentos").
3.  **Generación de Respuesta:**
    - Prompt del Sistema: *"Sos un vendedor experto de autopartes. Respondé corto, amable y cerrá con una pregunta para incentivar la compra. No alucines compatibilidades."*
    - Generación del texto.
4.  **Guardia de Seguridad (Sanity Check):**
    - Verificar que la respuesta no viole políticas de ML (no pasar datos de contacto, no insultar).

### 3. Outputs (Salidas)
- **POST a API Mercado Libre:** Enviar la respuesta a la pregunta o mensaje.
- **Log:** Guardar interacción para analítica (Tasa de retención, sentimiento del cliente).

## 📋 Features Clave (MVP vs. Full)

### MVP (Fase 1)
- Respuestas basadas solo en la Descripción de la Publicación.
- Detección básica de "Reclamos" para no responder automáticamente.
- Switch On/Off por publicación.

### Versión Full (SaaS)
- **RAG Avanzado:** Cargar manuales PDF o Excel de compatibilidades para que el bot "lea".
- **Multi-Turno:** Recordar el hilo de la conversación (si el usuario repregunta).
- **Modo Nocturno:** Activar solo fuera de horario comercial.
- **Aprendizaje:** Botón "Corregir respuesta" en el dashboard para que la IA aprenda del humano.

## ⚠️ Riesgos y Mitigación
- **Alucinaciones:** Que el bot diga "Sí, sirve" cuando no sirve.
    - *Solución:* Prompt restrictivo ("Si no estás 100% seguro, decí que consultás con el técnico").
- **Bloqueos de ML:** Responder demasiado rápido.
    - *Solución:* Agregar un delay aleatorio humano (ej: 15-45 segundos) en la cola de salida.
