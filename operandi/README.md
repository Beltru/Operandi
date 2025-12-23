# Operandi

**Plataforma SaaS de IA para Automatización de Negocios**

Operandi es una solución integral que transforma la forma en que las empresas gestionan sus operaciones comerciales. Utilizando inteligencia artificial avanzada, automatizamos publicidad, gestionamos ventas y atendemos clientes 24/7, permitiendo que los negocios escalen sin límites.

## Características Principales

### Automatización Inteligente
- **Chatbot de IA 24/7**: Atención al cliente automatizada que nunca duerme
- **Gestión de Leads**: Calificación y seguimiento automático de prospectos
- **CRM Integrado**: Gestión completa de clientes y oportunidades

### Marketing Automatizado
- **Campañas Publicitarias**: Creación y gestión automática en múltiples canales
- **Meta Ads Integration**: Sincronización directa con Facebook e Instagram
- **Analytics en Tiempo Real**: Métricas y KPIs actualizados constantemente

### Multi-tenant & Escalable
- **Organizaciones**: Arquitectura multi-tenant para gestionar múltiples empresas
- **Planes Flexibles**: Trial, Básico, Profesional y Enterprise
- **WhatsApp Business**: Integración nativa para comunicación directa

## Casos de Uso

### Inmobiliarias
Automatiza la atención de consultas sobre propiedades, agenda visitas y califica leads mientras duermes.

### E-commerce
Gestiona inventario, responde consultas de productos y cierra ventas automáticamente.

### Servicios Profesionales
Agenda citas, califica prospectos y mantén tu pipeline de ventas siempre activo.

## Tech Stack

- **Frontend**: Next.js 16.1.1 + React 19 + TypeScript
- **Backend**: Next.js API Routes + Prisma ORM
- **Base de Datos**: PostgreSQL (Supabase)
- **Autenticación**: Supabase Auth (Email + OAuth Google)
- **Estado**: TanStack Query (React Query)
- **Estilos**: Tailwind CSS 4
- **ORM**: Prisma 7.2.0

## Estructura del Proyecto

```
operandi/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (auth)/       # Rutas de autenticación
│   │   ├── dashboard/    # Panel principal protegido
│   │   └── api/          # API endpoints
│   ├── components/       # Componentes React
│   │   ├── providers/    # Context providers (Auth, Query)
│   │   └── ui/           # Componentes de UI
│   ├── lib/              # Utilidades y configuración
│   │   ├── supabase/     # Clientes de Supabase
│   │   └── prisma.ts     # Cliente de Prisma
│   └── middleware.ts     # Protección de rutas
├── prisma/
│   ├── schema.prisma     # Modelos de base de datos
│   └── migrations/       # Migraciones SQL
└── supabase/
    └── migrations/       # SQL triggers y funciones
```

## Getting Started

### Prerequisitos

- Node.js 18+
- PostgreSQL (o cuenta de Supabase)
- npm/yarn/pnpm

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/operandi.git
cd operandi
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

Edita `.env` con tus credenciales de Supabase:
```env
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."
NEXT_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_SUPABASE_ANON_KEY=tu-anon-key
```

4. Ejecuta las migraciones de Prisma:
```bash
npx prisma migrate dev
```

5. Ejecuta los triggers de Supabase:
```bash
# Copia el contenido de supabase/migrations/01_auth_triggers_safe.sql
# y ejecútalo en el SQL Editor de Supabase
```

6. Inicia el servidor de desarrollo:
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## Modelos de Base de Datos

### Core
- **User**: Usuarios del sistema
- **Organizacion**: Multi-tenant organizations
- **Plan**: Planes de suscripción (Trial, Básico, Pro, Enterprise)

### CRM
- **Lead**: Prospectos y oportunidades
- **Cliente**: Clientes activos
- **Conversacion**: Historial de conversaciones
- **Mensaje**: Mensajes individuales

### Marketing
- **Campaña**: Campañas publicitarias
- **MetaCampaña**: Integración con Meta Ads
- **Anuncio**: Anuncios individuales

### Integraciones
- **IntegracionWhatsApp**: Configuración de WhatsApp Business

## Autenticación

El proyecto utiliza Supabase Auth con:
- Email/Password
- Google OAuth
- Middleware de Next.js para protección de rutas
- Triggers automáticos que sincronizan `auth.users` con `public.users`

## Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npx prisma studio    # UI para explorar la base de datos
npx prisma migrate   # Gestión de migraciones
```

## Roadmap

- [ ] Integración completa con Meta Ads API
- [ ] WhatsApp Business API
- [ ] Dashboard de analytics avanzado
- [ ] Módulo de facturación y pagos
- [ ] Mobile app (React Native)
- [ ] API pública para integraciones

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto es privado y propietario.

## Contacto

Para más información sobre Operandi, visita [www.operandi.com](https://www.operandi.com)

---

**Construido con Next.js** | Powered by Supabase & Prisma
