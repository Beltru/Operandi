-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER', 'VIEWER');

-- CreateEnum
CREATE TYPE "Industria" AS ENUM ('INMOBILIARIA', 'ECOMMERCE', 'SERVICIOS', 'TECNOLOGIA', 'SALUD', 'EDUCACION', 'OTRO');

-- CreateEnum
CREATE TYPE "EstadoSuscripcion" AS ENUM ('TRIAL', 'ACTIVE', 'PAST_DUE', 'CANCELED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "TipoSoporte" AS ENUM ('EMAIL', 'CHAT', 'PRIORITARIO');

-- CreateEnum
CREATE TYPE "OrigenLead" AS ENUM ('CHATBOT_WEB', 'CHATBOT_WHATSAPP', 'CHATBOT_INSTAGRAM', 'FORMULARIO_WEB', 'CAMPAÑA_META', 'CAMPAÑA_GOOGLE', 'CAMPAÑA_TIKTOK', 'REFERIDO', 'MANUAL');

-- CreateEnum
CREATE TYPE "EstadoLead" AS ENUM ('NUEVO', 'CONTACTADO', 'CALIFICADO', 'PROPUESTA', 'NEGOCIACION', 'GANADO', 'PERDIDO', 'DESCARTADO');

-- CreateEnum
CREATE TYPE "TipoActividad" AS ENUM ('LLAMADA', 'EMAIL', 'REUNION', 'NOTA', 'TAREA', 'MENSAJE_CHATBOT');

-- CreateEnum
CREATE TYPE "TonoBot" AS ENUM ('FORMAL', 'PROFESIONAL', 'AMIGABLE', 'CASUAL');

-- CreateEnum
CREATE TYPE "CanalConversacion" AS ENUM ('WEB', 'WHATSAPP', 'INSTAGRAM', 'EMAIL');

-- CreateEnum
CREATE TYPE "EstadoConversacion" AS ENUM ('ACTIVA', 'PENDIENTE', 'RESUELTA', 'CERRADA');

-- CreateEnum
CREATE TYPE "PlataformaCampaña" AS ENUM ('META', 'GOOGLE', 'TIKTOK');

-- CreateEnum
CREATE TYPE "EstadoCampaña" AS ENUM ('BORRADOR', 'PROGRAMADA', 'ACTIVA', 'PAUSADA', 'COMPLETADA', 'CANCELADA');

-- CreateEnum
CREATE TYPE "ObjetivoCampaña" AS ENUM ('TRAFICO', 'CONVERSIONES', 'LEADS', 'ALCANCE', 'ENGAGEMENT', 'VENTAS');

-- CreateEnum
CREATE TYPE "TipoNotificacion" AS ENUM ('NUEVO_LEAD', 'MENSAJE_CHATBOT', 'CAMPAÑA_COMPLETADA', 'SUSCRIPCION_EXPIRA', 'LEAD_CALIENTE', 'TAREA_PENDIENTE');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "telefono" TEXT,
    "avatar_url" TEXT,
    "rol" "UserRole" NOT NULL DEFAULT 'USER',
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "last_login" TIMESTAMP(3),
    "organizacion_id" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organizaciones" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "industria" "Industria" NOT NULL,
    "sitio_web" TEXT,
    "telefono" TEXT,
    "direccion" TEXT,
    "logo_url" TEXT,
    "activa" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "plan_id" TEXT,
    "fecha_inicio_plan" TIMESTAMP(3),
    "fecha_fin_plan" TIMESTAMP(3),
    "estado_suscripcion" "EstadoSuscripcion" NOT NULL DEFAULT 'TRIAL',

    CONSTRAINT "organizaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planes" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "precio_mensual" DECIMAL(10,2) NOT NULL,
    "precio_anual" DECIMAL(10,2) NOT NULL,
    "max_usuarios" INTEGER NOT NULL,
    "max_leads" INTEGER NOT NULL,
    "max_campañas" INTEGER NOT NULL,
    "tiene_chatbot" BOOLEAN NOT NULL DEFAULT true,
    "tiene_crm" BOOLEAN NOT NULL DEFAULT true,
    "tiene_anuncios" BOOLEAN NOT NULL DEFAULT false,
    "tiene_analytics" BOOLEAN NOT NULL DEFAULT false,
    "soporte" "TipoSoporte" NOT NULL DEFAULT 'EMAIL',
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "planes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leads" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT,
    "telefono" TEXT,
    "empresa" TEXT,
    "cargo" TEXT,
    "origen" "OrigenLead" NOT NULL,
    "estado" "EstadoLead" NOT NULL DEFAULT 'NUEVO',
    "puntuacion" INTEGER DEFAULT 0,
    "presupuesto" DECIMAL(10,2),
    "notas" TEXT,
    "etiquetas" TEXT[],
    "ultima_interaccion" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "organizacion_id" TEXT NOT NULL,
    "asignado_a_id" TEXT,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actividades_lead" (
    "id" TEXT NOT NULL,
    "lead_id" TEXT NOT NULL,
    "tipo" "TipoActividad" NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "actividades_lead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "configuracion_bot" (
    "id" TEXT NOT NULL,
    "organizacion_id" TEXT NOT NULL,
    "nombre_bot" TEXT NOT NULL DEFAULT 'Asistente IA',
    "mensaje_bienvenida" TEXT NOT NULL,
    "tono" "TonoBot" NOT NULL DEFAULT 'PROFESIONAL',
    "idioma" TEXT NOT NULL DEFAULT 'es',
    "activo_whatsapp" BOOLEAN NOT NULL DEFAULT false,
    "activo_web" BOOLEAN NOT NULL DEFAULT true,
    "activo_instagram" BOOLEAN NOT NULL DEFAULT false,
    "horario_inicio" TEXT DEFAULT '09:00',
    "horario_fin" TEXT DEFAULT '18:00',
    "respuesta_fuera_horario" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "configuracion_bot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversaciones" (
    "id" TEXT NOT NULL,
    "canal" "CanalConversacion" NOT NULL,
    "estado" "EstadoConversacion" NOT NULL DEFAULT 'ACTIVA',
    "lead_id" TEXT,
    "organizacion_id" TEXT NOT NULL,
    "asignado_a_id" TEXT,
    "ultima_actividad" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resuelto" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "conversaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mensajes" (
    "id" TEXT NOT NULL,
    "conversacion_id" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "es_bot" BOOLEAN NOT NULL DEFAULT false,
    "es_usuario" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,
    "leido" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mensajes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campañas" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "plataforma" "PlataformaCampaña" NOT NULL,
    "estado" "EstadoCampaña" NOT NULL DEFAULT 'BORRADOR',
    "presupuesto_diario" DECIMAL(10,2),
    "presupuesto_total" DECIMAL(10,2),
    "fecha_inicio" TIMESTAMP(3),
    "fecha_fin" TIMESTAMP(3),
    "objetivo" "ObjetivoCampaña" NOT NULL,
    "audiencia" JSONB,
    "creatividades" JSONB,
    "metricas" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "organizacion_id" TEXT NOT NULL,

    CONSTRAINT "campañas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notificaciones" (
    "id" TEXT NOT NULL,
    "tipo" "TipoNotificacion" NOT NULL,
    "titulo" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "leida" BOOLEAN NOT NULL DEFAULT false,
    "accionada" BOOLEAN NOT NULL DEFAULT false,
    "fecha_accion" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "notificaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "metricas_diarias" (
    "id" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "total_leads" INTEGER NOT NULL DEFAULT 0,
    "leads_nuevos" INTEGER NOT NULL DEFAULT 0,
    "leads_convertidos" INTEGER NOT NULL DEFAULT 0,
    "conversaciones_activas" INTEGER NOT NULL DEFAULT 0,
    "mensajes_bot" INTEGER NOT NULL DEFAULT 0,
    "campañas_activas" INTEGER NOT NULL DEFAULT 0,
    "gasto_publicidad" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "ingresos_generados" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "metricas_diarias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_organizacion_id_idx" ON "users"("organizacion_id");

-- CreateIndex
CREATE INDEX "organizaciones_plan_id_idx" ON "organizaciones"("plan_id");

-- CreateIndex
CREATE INDEX "organizaciones_estado_suscripcion_idx" ON "organizaciones"("estado_suscripcion");

-- CreateIndex
CREATE UNIQUE INDEX "planes_nombre_key" ON "planes"("nombre");

-- CreateIndex
CREATE INDEX "leads_organizacion_id_idx" ON "leads"("organizacion_id");

-- CreateIndex
CREATE INDEX "leads_estado_idx" ON "leads"("estado");

-- CreateIndex
CREATE INDEX "leads_origen_idx" ON "leads"("origen");

-- CreateIndex
CREATE INDEX "leads_asignado_a_id_idx" ON "leads"("asignado_a_id");

-- CreateIndex
CREATE INDEX "leads_created_at_idx" ON "leads"("created_at");

-- CreateIndex
CREATE INDEX "actividades_lead_lead_id_idx" ON "actividades_lead"("lead_id");

-- CreateIndex
CREATE INDEX "actividades_lead_fecha_idx" ON "actividades_lead"("fecha");

-- CreateIndex
CREATE UNIQUE INDEX "configuracion_bot_organizacion_id_key" ON "configuracion_bot"("organizacion_id");

-- CreateIndex
CREATE INDEX "conversaciones_organizacion_id_idx" ON "conversaciones"("organizacion_id");

-- CreateIndex
CREATE INDEX "conversaciones_lead_id_idx" ON "conversaciones"("lead_id");

-- CreateIndex
CREATE INDEX "conversaciones_estado_idx" ON "conversaciones"("estado");

-- CreateIndex
CREATE INDEX "conversaciones_canal_idx" ON "conversaciones"("canal");

-- CreateIndex
CREATE INDEX "conversaciones_ultima_actividad_idx" ON "conversaciones"("ultima_actividad");

-- CreateIndex
CREATE INDEX "mensajes_conversacion_id_idx" ON "mensajes"("conversacion_id");

-- CreateIndex
CREATE INDEX "mensajes_created_at_idx" ON "mensajes"("created_at");

-- CreateIndex
CREATE INDEX "campañas_organizacion_id_idx" ON "campañas"("organizacion_id");

-- CreateIndex
CREATE INDEX "campañas_plataforma_idx" ON "campañas"("plataforma");

-- CreateIndex
CREATE INDEX "campañas_estado_idx" ON "campañas"("estado");

-- CreateIndex
CREATE INDEX "campañas_fecha_inicio_idx" ON "campañas"("fecha_inicio");

-- CreateIndex
CREATE INDEX "notificaciones_user_id_idx" ON "notificaciones"("user_id");

-- CreateIndex
CREATE INDEX "notificaciones_leida_idx" ON "notificaciones"("leida");

-- CreateIndex
CREATE INDEX "notificaciones_tipo_idx" ON "notificaciones"("tipo");

-- CreateIndex
CREATE INDEX "notificaciones_created_at_idx" ON "notificaciones"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "metricas_diarias_fecha_key" ON "metricas_diarias"("fecha");

-- CreateIndex
CREATE INDEX "metricas_diarias_fecha_idx" ON "metricas_diarias"("fecha");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_organizacion_id_fkey" FOREIGN KEY ("organizacion_id") REFERENCES "organizaciones"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organizaciones" ADD CONSTRAINT "organizaciones_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "planes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leads" ADD CONSTRAINT "leads_organizacion_id_fkey" FOREIGN KEY ("organizacion_id") REFERENCES "organizaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leads" ADD CONSTRAINT "leads_asignado_a_id_fkey" FOREIGN KEY ("asignado_a_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actividades_lead" ADD CONSTRAINT "actividades_lead_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "leads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configuracion_bot" ADD CONSTRAINT "configuracion_bot_organizacion_id_fkey" FOREIGN KEY ("organizacion_id") REFERENCES "organizaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversaciones" ADD CONSTRAINT "conversaciones_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "leads"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversaciones" ADD CONSTRAINT "conversaciones_organizacion_id_fkey" FOREIGN KEY ("organizacion_id") REFERENCES "organizaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversaciones" ADD CONSTRAINT "conversaciones_asignado_a_id_fkey" FOREIGN KEY ("asignado_a_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensajes" ADD CONSTRAINT "mensajes_conversacion_id_fkey" FOREIGN KEY ("conversacion_id") REFERENCES "conversaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campañas" ADD CONSTRAINT "campañas_organizacion_id_fkey" FOREIGN KEY ("organizacion_id") REFERENCES "organizaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notificaciones" ADD CONSTRAINT "notificaciones_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
