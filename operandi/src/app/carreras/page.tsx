import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/lib/icons";

const openPositions = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Ingenieria",
    location: "Remoto (LATAM)",
    type: "Tiempo completo",
    description: "Buscamos un desarrollador full stack con experiencia en React, Node.js y bases de datos SQL/NoSQL.",
  },
  {
    id: 2,
    title: "Machine Learning Engineer",
    department: "IA & Data",
    location: "Buenos Aires / Remoto",
    type: "Tiempo completo",
    description: "Desarrolla y mejora nuestros modelos de IA para chatbots y recomendaciones personalizadas.",
  },
  {
    id: 3,
    title: "Product Designer",
    department: "Producto",
    location: "Remoto (LATAM)",
    type: "Tiempo completo",
    description: "Disena experiencias excepcionales para nuestra plataforma, desde investigacion hasta UI/UX.",
  },
  {
    id: 4,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Buenos Aires",
    type: "Tiempo completo",
    description: "Ayuda a nuestros clientes a sacar el maximo provecho de Operandi y asegura su exito.",
  },
  {
    id: 5,
    title: "Account Executive",
    department: "Ventas",
    location: "Ciudad de Mexico",
    type: "Tiempo completo",
    description: "Lidera el proceso de ventas B2B en el mercado mexicano, desde prospecting hasta cierre.",
  },
  {
    id: 6,
    title: "Content Marketing Specialist",
    department: "Marketing",
    location: "Remoto (LATAM)",
    type: "Tiempo completo",
    description: "Crea contenido educativo y atractivo sobre IA, automatizacion y marketing digital.",
  },
];

const benefits = [
  {
    icon: Icons.home,
    title: "Trabajo Remoto",
    description: "Trabaja desde donde quieras. Somos un equipo distribuido por toda Latinoamerica.",
  },
  {
    icon: Icons.calendar,
    title: "Vacaciones Flexibles",
    description: "Politica de vacaciones ilimitadas. Confiamos en que tomaras el tiempo que necesites.",
  },
  {
    icon: Icons.trendingUp,
    title: "Stock Options",
    description: "Todos los empleados reciben equity. Tu exito es nuestro exito.",
  },
  {
    icon: Icons.sparkles,
    title: "Aprendizaje Continuo",
    description: "Presupuesto anual para cursos, conferencias y certificaciones.",
  },
  {
    icon: Icons.heart,
    title: "Salud y Bienestar",
    description: "Seguro de salud premium y acceso a plataformas de salud mental.",
  },
  {
    icon: Icons.laptop,
    title: "Setup de Trabajo",
    description: "Te enviamos todo lo que necesitas: laptop, monitor, silla ergonomica y mas.",
  },
];

const values = [
  {
    title: "Ownership",
    description: "Tomas responsabilidad de tu trabajo y sus resultados.",
  },
  {
    title: "Curiosidad",
    description: "Siempre estas aprendiendo y cuestionando el status quo.",
  },
  {
    title: "Colaboracion",
    description: "El exito es un deporte de equipo. Ayudas a otros a brillar.",
  },
  {
    title: "Impacto",
    description: "Te enfocas en lo que realmente mueve la aguja.",
  },
];

export default function CarrerasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Construye el futuro de la automatizacion
          </h1>
          <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
            Unite a un equipo apasionado que esta transformando la forma en que las empresas
            latinoamericanas hacen negocios con inteligencia artificial.
          </p>
          <a href="#posiciones" className="inline-block">
            <Button variant="secondary" size="lg" className="!bg-white !text-violet-700">
              Ver Posiciones Abiertas
            </Button>
          </a>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Por que unirte a Operandi?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ofrecemos un ambiente de trabajo excepcional con beneficios disenados para tu bienestar y crecimiento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Lo que buscamos</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Mas alla de las habilidades tecnicas, buscamos personas que compartan nuestros valores.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-white/5 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-violet-400 mb-4">{i + 1}</div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="posiciones" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Posiciones Abiertas</h2>
          <p className="text-gray-600 text-center mb-12">
            {openPositions.length} posiciones abiertas en este momento
          </p>

          <div className="space-y-4">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="border border-gray-200 rounded-xl p-6 hover:border-violet-300 hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg group-hover:text-violet-600 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                        {Icons.building}
                        {position.department}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                        {Icons.location}
                        {position.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                        {Icons.clock}
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">{position.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button variant="outline" size="sm">
                      Ver mas
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No encontras lo que buscas?</h2>
          <p className="text-gray-600 mb-8">
            Siempre estamos buscando talento excepcional. Enviane tu CV y te contactaremos
            cuando surja una oportunidad que encaje con tu perfil.
          </p>
          <a
            href="mailto:careers@operandi.ai"
            className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-700 transition-colors"
          >
            {Icons.email}
            careers@operandi.ai
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
