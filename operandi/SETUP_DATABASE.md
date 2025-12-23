# 🗄️ Configuración de Base de Datos - Operandi

Este proyecto usa **Prisma** como ORM y **Supabase** como proveedor de base de datos PostgreSQL y autenticación.

---

## 📋 Prerequisitos

1. Una cuenta en [Supabase](https://supabase.com)
2. Node.js y npm instalados
3. Las dependencias del proyecto instaladas (`npm install`)

---

## 🚀 Pasos de Configuración

### 1. Crear Proyecto en Supabase

1. Ve a [https://app.supabase.com](https://app.supabase.com)
2. Crea un nuevo proyecto
3. Guarda la contraseña de la base de datos (la necesitarás después)
4. Espera a que el proyecto se inicialice (puede tomar 2-3 minutos)

### 2. Obtener Credenciales

Una vez creado el proyecto:

1. Ve a **Project Settings** → **API**
2. Copia estos valores:
   - **Project URL** (ejemplo: `https://xxxxx.supabase.co`)
   - **anon/public key** (larga cadena JWT)

3. Ve a **Project Settings** → **Database**
4. En la sección **Connection string**, selecciona:
   - **Connection pooling** (para `DATABASE_URL`)
   - **Session mode** (para operaciones normales)
   - **Direct connection** (para `DIRECT_URL` - migraciones)

### 3. Configurar Variables de Entorno

Crea o actualiza el archivo `.env` en la raíz del proyecto:

```env
# Database Configuration
# Connection pooling URL (para operaciones normales)
DATABASE_URL="postgresql://postgres.xxx:[PASSWORD]@aws-0-us-west-2.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct connection URL (para migraciones)
DIRECT_URL="postgresql://postgres.xxx:[PASSWORD]@aws-0-us-west-2.pooler.supabase.com:5432/postgres"

# Supabase Configuration
NEXT_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Importante:**
- Reemplaza `[PASSWORD]` con la contraseña de tu base de datos
- El puerto `6543` es para connection pooling (usado por Prisma)
- El puerto `5432` es para conexión directa (usado para migraciones)

### 4. Ejecutar Migraciones

Una vez configuradas las variables de entorno, ejecuta:

```bash
# Crear la primera migración
npx prisma migrate dev --name init

# Esto creará:
# - Las tablas en tu base de datos
# - El historial de migraciones en prisma/migrations/
```

Si ya existen migraciones:

```bash
# Aplicar migraciones pendientes
npx prisma migrate deploy
```

### 5. Generar Cliente de Prisma

```bash
npx prisma generate
```

Este comando genera el cliente TypeScript de Prisma basado en tu schema.

### 6. (Opcional) Explorar la Base de Datos

Prisma Studio te permite ver y editar datos:

```bash
npx prisma studio
```

Esto abrirá una interfaz web en `http://localhost:5555`

---

## 🔐 Configurar Autenticación en Supabase

### Habilitar Email/Password Auth

1. En Supabase, ve a **Authentication** → **Providers**
2. Asegúrate de que **Email** esté habilitado
3. Configura las URLs de redirección:
   - **Site URL**: `http://localhost:3000` (desarrollo)
   - **Redirect URLs**:
     - `http://localhost:3000/auth/callback`
     - `https://tudominio.com/auth/callback` (producción)

### Configurar Google OAuth (Opcional)

1. Ve a **Authentication** → **Providers**
2. Habilita **Google**
3. Sigue las instrucciones para configurar credenciales de Google Cloud Console
4. Agrega las URLs de redirección:
   - `https://xxxxx.supabase.co/auth/v1/callback`

---

## 📊 Schema de Base de Datos

El proyecto incluye los siguientes modelos:

### Core Models
- **User**: Usuarios del sistema
- **Organizacion**: Empresas/organizaciones (multi-tenant)
- **Plan**: Planes de suscripción (Starter, Professional, Enterprise)

### CRM & Leads
- **Lead**: Leads/prospectos
- **ActividadLead**: Historial de actividades por lead
- **Conversacion**: Conversaciones multi-canal
- **Mensaje**: Mensajes dentro de conversaciones

### Automation
- **ConfiguracionBot**: Configuración del chatbot por organización
- **Campaña**: Campañas publicitarias (Meta, Google, TikTok)

### Notifications & Analytics
- **Notificacion**: Notificaciones para usuarios
- **MetricaDiaria**: Métricas y analytics agregados por día

---

## 🔄 Comandos Útiles

```bash
# Ver estado de migraciones
npx prisma migrate status

# Crear nueva migración
npx prisma migrate dev --name nombre_descriptivo

# Resetear base de datos (¡CUIDADO! Borra todos los datos)
npx prisma migrate reset

# Formatear schema.prisma
npx prisma format

# Validar schema
npx prisma validate

# Ver migraciones aplicadas
npx prisma migrate resolve

# Aplicar migraciones en producción
npx prisma migrate deploy
```

---

## 🛡️ Row Level Security (RLS)

Para producción, deberías configurar políticas RLS en Supabase:

```sql
-- Ejemplo: Los usuarios solo pueden ver datos de su organización
CREATE POLICY "Users can view own organization data"
ON leads
FOR SELECT
USING (auth.uid() IN (
  SELECT id FROM users WHERE organizacion_id = leads.organizacion_id
));
```

Ve a **Database** → **Policies** en Supabase para configurar RLS.

---

## 🐛 Troubleshooting

### Error: "Can't reach database server"
- Verifica que `DATABASE_URL` y `DIRECT_URL` sean correctas
- Asegúrate de que tu IP esté en la lista blanca de Supabase (Settings → Database → Connection pooling)

### Error: "Invalid API key"
- Verifica `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Regenera las claves si es necesario en Settings → API

### Migraciones fallan
- Usa `DIRECT_URL` para migraciones (puerto 5432, sin pgbouncer)
- Verifica que no haya otros procesos bloqueando la base de datos

### Prisma Client no se actualiza
- Ejecuta `npx prisma generate` después de cambiar el schema
- Reinicia tu servidor de desarrollo

---

## 📚 Recursos

- [Documentación Prisma](https://www.prisma.io/docs)
- [Documentación Supabase](https://supabase.com/docs)
- [Prisma + Supabase Guide](https://supabase.com/docs/guides/integrations/prisma)
- [Next.js + Supabase Auth](https://supabase.com/docs/guides/auth/server-side/nextjs)

---

## 🎯 Próximos Pasos

1. ✅ Configurar variables de entorno
2. ✅ Ejecutar migraciones
3. ✅ Generar Prisma Client
4. 🔲 Crear seed data (opcional)
5. 🔲 Configurar RLS policies
6. 🔲 Probar autenticación
7. 🔲 Desarrollar API routes con Prisma

---

¡Listo! Tu base de datos está configurada y lista para usar. 🎉
