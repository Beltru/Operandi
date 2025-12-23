import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icons } from "@/lib/icons";

const securityFeatures = [
  {
    icon: Icons.shield,
    title: "Encriptacion de Datos",
    description: "Todos los datos se encriptan en transito con TLS 1.3 y en reposo con AES-256.",
  },
  {
    icon: Icons.lock,
    title: "Autenticacion Segura",
    description: "Soportamos autenticacion de dos factores (2FA) y OAuth con proveedores confiables.",
  },
  {
    icon: Icons.users,
    title: "Control de Acceso",
    description: "Roles y permisos granulares para gestionar quien puede acceder a que informacion.",
  },
  {
    icon: Icons.check,
    title: "Auditorias de Seguridad",
    description: "Realizamos pruebas de penetracion y auditorias de seguridad periodicas.",
  },
];

const certifications = [
  { name: "SOC 2 Type II", status: "En proceso" },
  { name: "ISO 27001", status: "Planificado" },
  { name: "GDPR", status: "Cumplimiento" },
];

export default function SeguridadPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
            {Icons.shield}
            <span>Seguridad de nivel empresarial</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Tu seguridad es nuestra prioridad
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            En Operandi, protegemos tus datos con las mejores practicas de seguridad
            de la industria y cumplimos con los estandares internacionales.
          </p>
        </div>
      </section>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Security Features */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Nuestras Medidas de Seguridad
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Infrastructure */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Infraestructura Segura
            </h2>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-violet-400 mb-4">{Icons.cloud}</div>
                  <h3 className="text-lg font-semibold mb-2">Hosting en la Nube</h3>
                  <p className="text-gray-400 text-sm">
                    Utilizamos AWS y Google Cloud con data centers certificados ISO 27001
                    y SOC 2 en multiples regiones.
                  </p>
                </div>
                <div>
                  <div className="text-violet-400 mb-4">{Icons.refresh}</div>
                  <h3 className="text-lg font-semibold mb-2">Respaldos Automaticos</h3>
                  <p className="text-gray-400 text-sm">
                    Backups encriptados cada hora con retencion de 30 dias y
                    recuperacion ante desastres en menos de 4 horas.
                  </p>
                </div>
                <div>
                  <div className="text-violet-400 mb-4">{Icons.monitor}</div>
                  <h3 className="text-lg font-semibold mb-2">Monitoreo 24/7</h3>
                  <p className="text-gray-400 text-sm">
                    Sistemas de deteccion de intrusiones, alertas en tiempo real
                    y equipo de respuesta a incidentes disponible.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Cumplimiento y Certificaciones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {Icons.check}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    cert.status === "Cumplimiento"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Buenas Practicas que Implementamos
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    title: "Principio de minimo privilegio",
                    description: "Cada usuario y sistema solo tiene acceso a los recursos estrictamente necesarios para su funcion.",
                  },
                  {
                    title: "Desarrollo seguro",
                    description: "Seguimos OWASP Top 10 y realizamos revisiones de codigo y analisis de vulnerabilidades en cada release.",
                  },
                  {
                    title: "Gestion de vulnerabilidades",
                    description: "Programa de bug bounty activo y parches de seguridad aplicados en menos de 24 horas para vulnerabilidades criticas.",
                  },
                  {
                    title: "Capacitacion continua",
                    description: "Todo nuestro equipo recibe entrenamiento regular en seguridad de la informacion y concientizacion.",
                  },
                  {
                    title: "Politicas de retencion",
                    description: "Los datos se eliminan automaticamente segun politicas definidas cuando ya no son necesarios.",
                  },
                ].map((practice, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      {Icons.check}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{practice.title}</h3>
                      <p className="text-gray-600">{practice.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Report Vulnerability */}
          <section>
            <div className="bg-violet-50 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Reportar una Vulnerabilidad
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Si descubres una vulnerabilidad de seguridad, por favor reportala de manera responsable.
                Valoramos la contribucion de la comunidad de seguridad.
              </p>
              <a
                href="mailto:security@operandi.ai"
                className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-700 transition-colors"
              >
                {Icons.email}
                security@operandi.ai
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Respuesta garantizada en menos de 24 horas.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
