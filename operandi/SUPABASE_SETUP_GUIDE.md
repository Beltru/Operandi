# 🚀 Guía Completa de Configuración Supabase + Prisma - Operandi

Esta guía te llevará paso a paso para configurar la base de datos de Operandi en Supabase usando Prisma.

---

## ✅ Lo que ya está hecho

- ✅ Instalación de dependencias (Prisma, Supabase)
- ✅ Schema de Prisma definido con todos los modelos
- ✅ Configuración de Prisma para Supabase
- ✅ Migraciones iniciales creadas
- ✅ Auth triggers preparados

---

## 📋 Pasos de Configuración

### **Paso 1: Verificar tu proyecto Supabase**

Ya tienes un proyecto Supabase configurado:
- **URL**: `https://ecfotvjaknrgtvbinieo.supabase.co`
- **Database**: `postgres`

### **Paso 2: (OPCIONAL) Crear usuario dedicado para Prisma**

**Recomendación de Supabase**: Usar un usuario dedicado con permisos específicos.

1. Ve a Supabase → **SQL Editor**
2. Ejecuta el script: [`supabase/migrations/00_setup_prisma_user.sql`](supabase/migrations/00_setup_prisma_user.sql)

```sql
-- Este script crea el usuario "prisma" con los permisos necesarios
create user "prisma" with password 'operandi2026!' bypassrls createdb;
grant "prisma" to "postgres";
-- ... (ver archivo completo)
```

3. **Si ejecutas este script**, actualiza tu `.env`

**Si prefieres usar el usuario `postgres` (actual)**, omite este paso.

---

### **Paso 3: Verificar que la migración se aplicó correctamente**

La migración inicial ya fue aplicada. Para verificar:

```bash
npx prisma studio
```

Esto abrirá una interfaz web donde deberías ver todas las tablas:
- ✅ users
- ✅ organizaciones
- ✅ planes
- ✅ leads
- ✅ conversaciones
- ✅ mensajes
- ✅ campañas
- ✅ notificaciones
- ✅ metricas_diarias
- ✅ Y más...

---

### **Paso 4: Configurar Auth Triggers en Supabase**

Los triggers sincronizan automáticamente `auth.users` (Supabase Auth) con `public.users` (tu tabla).

1. Ve a Supabase → **SQL Editor**
2. Crea una nueva query
3. Copia y pega el contenido completo de: [`supabase/migrations/01_auth_triggers.sql`](supabase/migrations/01_auth_triggers.sql)
4. Ejecuta el script (botón **Run** o `Ctrl+Enter`)

Esto creará:
- ✅ `handle_new_user()` - Función para crear usuarios
- ✅ `handle_user_updated()` - Función para actualizar usuarios
- ✅ `handle_user_deleted()` - Función para marcar usuarios inactivos
- ✅ Triggers en `auth.users` para ejecutar estas funciones

---

### **Paso 5: Configurar Autenticación en Supabase**

#### Habilitar Email/Password

1. Ve a **Authentication** → **Providers**
2. Asegúrate que **Email** esté habilitado ✅
3. Configura las URLs:
   - **Site URL**: `http://localhost:3000`
   - **Redirect URLs**: Agregar:
     - `http://localhost:3000/auth/callback`
     - `https://tudominio.com/auth/callback` (para producción)

#### (Opcional) Configurar Google OAuth

1. En **Authentication** → **Providers**, habilita **Google**
2. Necesitarás crear credenciales en [Google Cloud Console](https://console.cloud.google.com/):
   - Ir a **APIs & Services** → **Credentials**
   - Crear **OAuth 2.0 Client ID**
   - Tipo: Web application
   - Authorized redirect URIs:
     - `https://ecfotvjaknrgtvbinieo.supabase.co/auth/v1/callback`
3. Copiar **Client ID** y **Client Secret** a Supabase

---

### **Paso 6: Probar la Autenticación**

#### Crear un usuario de prueba:

```bash
# Opción 1: Desde Supabase Dashboard
# Ve a Authentication → Users → Add User
# Email: test@operandi.com
# Password: Test123!
# User Metadata (opcional):
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "telefono": "+1234567890"
}
```

#### Opción 2: Desde tu app Next.js

Ya tienes el `AuthProvider` configurado. En cualquier componente:

```typescript
'use client'
import { useAuth } from '@/components/providers/AuthProvider'

export function TestAuth() {
  const { signUp, signIn, user } = useAuth()

  const handleSignUp = async () => {
    const { error } = await signUp(
      'test@operandi.com',
      'Test123!',
      'Juan Pérez'
    )
    if (error) console.error(error)
  }

  return (
    <div>
      {user ? (
        <p>Logged in as: {user.email}</p>
      ) : (
        <button onClick={handleSignUp}>Sign Up</button>
      )}
    </div>
  )
}
```

---

### **Paso 7: Verificar que los triggers funcionan**

1. Crea un usuario en Supabase Auth (Dashboard o código)
2. Ve a Supabase → **Table Editor** → **users**
3. Deberías ver el usuario automáticamente creado con:
   - ✅ Mismo `id` que auth.users
   - ✅ Email sincronizado
   - ✅ Nombre y apellido extraídos del metadata
   - ✅ `activo = true`
   - ✅ Timestamps actualizados

---

### **Paso 8: (Opcional) Crear datos de prueba**

Puedes crear un seed script para poblar la base de datos:

```typescript
// prisma/seed.ts
import { prisma } from '../src/lib/prisma'

async function main() {
  // Crear planes
  const starterPlan = await prisma.plan.create({
    data: {
      nombre: 'Starter',
      descripcion: 'Plan básico para pequeños negocios',
      precio_mensual: 199,
      precio_anual: 1990,
      max_usuarios: 3,
      max_leads: 500,
      max_campañas: 5,
      tiene_chatbot: true,
      tiene_crm: true,
      tiene_anuncios: false,
      tiene_analytics: false,
      soporte: 'EMAIL',
    },
  })

  console.log('✅ Plan Starter creado:', starterPlan)

  // Crear organización de prueba
  const org = await prisma.organizacion.create({
    data: {
      nombre: 'Inmobiliaria Demo',
      industria: 'INMOBILIARIA',
      sitio_web: 'https://demo.com',
      plan_id: starterPlan.id,
      estado_suscripcion: 'TRIAL',
    },
  })

  console.log('✅ Organización creada:', org)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
```

Ejecutar:
```bash
npx tsx prisma/seed.ts
```

---

## 🔐 Configurar Row Level Security (RLS)

Para seguridad en producción, habilita RLS en Supabase:

### Ejemplo: Política para `leads`

```sql
-- Habilitar RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Política: Los usuarios solo pueden ver leads de su organización
CREATE POLICY "Users can view own organization leads"
ON leads FOR SELECT
USING (
  organizacion_id IN (
    SELECT organizacion_id
    FROM users
    WHERE id = auth.uid()
  )
);

-- Política: Los usuarios pueden crear leads en su organización
CREATE POLICY "Users can create leads in own organization"
ON leads FOR INSERT
WITH CHECK (
  organizacion_id IN (
    SELECT organizacion_id
    FROM users
    WHERE id = auth.uid()
  )
);

-- Política: Los usuarios pueden actualizar leads de su organización
CREATE POLICY "Users can update own organization leads"
ON leads FOR UPDATE
USING (
  organizacion_id IN (
    SELECT organizacion_id
    FROM users
    WHERE id = auth.uid()
  )
);
```

Repite esto para cada tabla según tus necesidades de seguridad.

---

## 📊 Usar Prisma en tu código

### Ejemplo: API Route para crear un lead

```typescript
// app/api/leads/route.ts
import { prisma } from '@/lib/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  // Verificar autenticación
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Obtener datos del request
  const body = await request.json()

  // Buscar usuario en nuestra tabla
  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
  })

  if (!dbUser?.organizacion_id) {
    return NextResponse.json(
      { error: 'User has no organization' },
      { status: 400 }
    )
  }

  // Crear lead
  const lead = await prisma.lead.create({
    data: {
      nombre: body.nombre,
      email: body.email,
      telefono: body.telefono,
      origen: body.origen || 'MANUAL',
      estado: 'NUEVO',
      organizacion_id: dbUser.organizacion_id,
      asignado_a_id: user.id,
    },
  })

  return NextResponse.json(lead)
}

export async function GET(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
  })

  if (!dbUser?.organizacion_id) {
    return NextResponse.json({ error: 'No organization' }, { status: 400 })
  }

  // Obtener todos los leads de la organización
  const leads = await prisma.lead.findMany({
    where: {
      organizacion_id: dbUser.organizacion_id,
    },
    include: {
      asignado_a: {
        select: {
          nombre: true,
          apellido: true,
          email: true,
        },
      },
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  return NextResponse.json(leads)
}
```

---

## 🔄 Comandos Útiles

```bash
# Ver el estado de las migraciones
npx prisma migrate status

# Crear una nueva migración después de cambiar el schema
npx prisma migrate dev --name nombre_descriptivo

# Aplicar migraciones en producción
npx prisma migrate deploy

# Abrir Prisma Studio (GUI para ver/editar datos)
npx prisma studio

# Regenerar el cliente de Prisma después de cambios
npx prisma generate

# Formatear el schema
npx prisma format

# Validar el schema
npx prisma validate

# Resetear la base de datos (¡CUIDADO! Borra todos los datos)
npx prisma migrate reset
```

---

## 🐛 Troubleshooting

### Error: "Can't reach database server"
- ✅ Verifica que `DIRECT_URL` en `.env` sea correcta
- ✅ Verifica que tu IP esté permitida en Supabase (Settings → Database)
- ✅ Prueba la conexión directa sin pgbouncer (puerto 5432)

### Los triggers no se ejecutan
- ✅ Verifica que ejecutaste `01_auth_triggers.sql` en SQL Editor
- ✅ Revisa los logs en Supabase: Database → Logs
- ✅ Prueba crear un usuario manualmente en Authentication

### Prisma Client no se actualiza
- ✅ Ejecuta `npx prisma generate` después de cambiar el schema
- ✅ Reinicia tu servidor de desarrollo (`npm run dev`)

### Error en migraciones
- ✅ Usa `DIRECT_URL` para migraciones (puerto 5432, sin pgbouncer)
- ✅ Verifica que no haya otros procesos bloqueando la DB
- ✅ Si falla, revisa `prisma/migrations` para ver qué se aplicó

---

## 📚 Recursos

- [Documentación Prisma](https://www.prisma.io/docs)
- [Documentación Supabase](https://supabase.com/docs)
- [Prisma + Supabase Guide](https://supabase.com/docs/guides/database/prisma)
- [Supabase Auth con Next.js](https://supabase.com/docs/guides/auth/server-side/nextjs)
- [Row Level Security (RLS)](https://supabase.com/docs/guides/auth/row-level-security)

---

## ✅ Checklist Final

- [ ] Usuario Prisma creado (opcional pero recomendado)
- [ ] Variables de entorno configuradas (.env)
- [ ] Migraciones aplicadas (`npx prisma migrate dev`)
- [ ] Triggers de auth ejecutados en Supabase
- [ ] Auth providers habilitados (Email + Google opcional)
- [ ] Redirect URLs configuradas
- [ ] Usuario de prueba creado
- [ ] Trigger verificado (usuario aparece en tabla `users`)
- [ ] RLS configurado (para producción)
- [ ] API routes de prueba funcionando

---

## 🎯 Próximos Pasos

1. ✅ Configura los pasos anteriores
2. 🔲 Actualiza las páginas de login/registro para usar auth real
3. 🔲 Crea API routes para leads, conversaciones, campañas
4. 🔲 Implementa el dashboard con datos reales de Prisma
5. 🔲 Configura RLS para seguridad multi-tenant
6. 🔲 Implementa la lógica del chatbot con IA
7. 🔲 Integra APIs de Meta/Google/TikTok para campañas

---

¡Tu base de datos está lista para Operandi! 🎉
