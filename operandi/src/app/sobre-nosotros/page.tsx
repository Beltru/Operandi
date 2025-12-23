import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/lib/icons";

const team = [
  {
    name: "Martin Rodriguez",
    role: "CEO & Co-fundador",
    bio: "Ex-Google, +10 anos en tecnologia e IA",
    initials: "MR",
    color: "from-violet-500 to-indigo-600",
  },
  {
    name: "Sofia Fernandez",
    role: "CTO & Co-fundadora",
    bio: "PhD en Machine Learning, ex-Amazon",
    initials: "SF",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Lucas Mendez",
    role: "VP de Producto",
    bio: "Ex-Mercado Libre, experto en UX",
    initials: "LM",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Valentina Garcia",
    role: "VP de Ventas",
    bio: "+8 anos en ventas B2B SaaS",
    initials: "VG",
    color: "from-orange-500 to-amber-600",
  },
];

const values = [
  {
    icon: Icons.sparkles,
    title: "Innovacion Continua",
    description: "Siempre estamos buscando nuevas formas de mejorar y evolucionar nuestro producto.",
  },
  {
    icon: Icons.users,
    title: "Cliente Primero",
    description: "Cada decision que tomamos comienza con la pregunta: como beneficia esto a nuestros clientes?",
  },
  {
    icon: Icons.shield,
    title: "Transparencia",
    description: "Creemos en la comunicacion abierta y honesta con nuestro equipo y clientes.",
  },
  {
    icon: Icons.trendingUp,
    title: "Impacto Real",
    description: "No nos conformamos con metricas vanidosas. Buscamos resultados tangibles.",
  },
];

const milestones = [
  { year: "2022", event: "Fundacion de Operandi en Buenos Aires" },
  { year: "2023", event: "Lanzamiento de la primera version del producto" },
  { year: "2023", event: "Primeros 100 clientes activos" },
  { year: "2024", event: "Expansion a Mexico y Colombia" },
  { year: "2024", event: "Ronda de inversion seed de $2M" },
];

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Transformando negocios con inteligencia artificial
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Somos un equipo apasionado por la tecnologia, comprometido con ayudar a empresas
            latinoamericanas a crecer mediante la automatizacion inteligente.
          </p>
          <div className="flex flex-wrap gap-8 justify-center text-center">
            <div>
              <div className="text-4xl font-bold text-violet-600">500+</div>
              <div className="text-gray-500">Clientes activos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600">5M+</div>
              <div className="text-gray-500">Leads generados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600">10</div>
              <div className="text-gray-500">Paises</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Mision</h2>
              <p className="text-lg text-gray-600 mb-6">
                Democratizar el acceso a la inteligencia artificial para que cualquier empresa,
                sin importar su tamano, pueda competir en igualdad de condiciones.
              </p>
              <p className="text-lg text-gray-600">
                Creemos que la tecnologia debe ser una herramienta que libere el potencial humano,
                no una barrera. Por eso creamos Operandi: para automatizar lo repetitivo y permitir
                que los equipos se enfoquen en lo que realmente importa.
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Nuestra Vision</h3>
              <p className="text-violet-100 text-lg">
                Ser la plataforma de automatizacion con IA lider en Latinoamerica,
                impulsando el crecimiento de mas de 100,000 empresas para 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Nuestro Equipo</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Un equipo diverso con experiencia en las mejores empresas de tecnologia del mundo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
                  {member.initials}
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-violet-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestra Historia</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div key={i} className="relative flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold z-10">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-xl p-6">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Unite a nuestra mision</h2>
          <p className="text-violet-100 mb-8 max-w-2xl mx-auto">
            Estamos buscando personas talentosas que quieran construir el futuro de la automatizacion en Latinoamerica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/carreras">
              <Button variant="secondary" size="lg" className="!bg-white !text-violet-700">
                Ver Posiciones Abiertas
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white/10">
                Contactanos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
