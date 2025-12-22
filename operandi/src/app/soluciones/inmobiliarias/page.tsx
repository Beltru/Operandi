import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/lib/icons";

const features = [
  {
    icon: Icons.megaphone,
    title: "Publicacion Automatica",
    description: "Publica tus propiedades en todos los portales inmobiliarios con un solo clic. Sincroniza fotos, precios y descripciones automaticamente.",
  },
  {
    icon: Icons.chat,
    title: "Chatbot Inmobiliario",
    description: "Atiende consultas 24/7, califica leads segun sus preferencias y agenda visitas sin intervencion manual.",
  },
  {
    icon: Icons.chart,
    title: "CRM Especializado",
    description: "Pipeline visual disenado para inmobiliarias. Seguimiento de leads, propiedades de interes y probabilidad de cierre.",
  },
  {
    icon: Icons.target,
    title: "Publicidad Segmentada",
    description: "Campanas en Meta y Google optimizadas para buyers y renters. Segmentacion por zona, presupuesto e interes.",
  },
  {
    icon: Icons.robot,
    title: "Matching IA",
    description: "Algoritmo que conecta automaticamente compradores con propiedades que coinciden con sus criterios.",
  },
  {
    icon: Icons.trendingUp,
    title: "Analytics de Mercado",
    description: "Informes de precios, demanda por zona y tendencias del mercado para tomar mejores decisiones.",
  },
];

const stats = [
  { value: "45%", label: "Mas leads calificados" },
  { value: "60%", label: "Menos tiempo en tareas manuales" },
  { value: "3x", label: "Mas propiedades vendidas" },
  { value: "24/7", label: "Atencion automatizada" },
];

const testimonials = [
  {
    quote: "Vendimos 15 propiedades el primer mes con Operandi. El chatbot califica leads mientras dormimos.",
    author: "Roberto Campos",
    role: "Director, Inmobiliaria Premium",
    initials: "RC",
  },
  {
    quote: "La automatizacion de publicidad nos ahorra 20 horas semanales. Ahora nos enfocamos solo en cerrar.",
    author: "Ana Martinez",
    role: "CEO, Casas & Mas",
    initials: "AM",
  },
];

export default function InmobiliariasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                {Icons.building}
                <span>Solucion para Inmobiliarias</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Vende mas propiedades con menos esfuerzo
              </h1>

              <p className="text-xl text-violet-100 mb-10">
                Automatiza la captacion de leads, publicacion de propiedades y seguimiento de clientes.
                La plataforma todo-en-uno para inmobiliarias modernas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/registro">
                  <Button variant="secondary" size="lg" className="!bg-white !text-violet-700">
                    Comenzar Gratis
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white/10">
                    Agendar Demo
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-violet-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Todo lo que tu inmobiliaria necesita
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Desde la captacion de leads hasta el cierre de ventas, automatiza cada paso del proceso inmobiliario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Como funciona
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En 3 simples pasos, transforma tu inmobiliaria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Conecta tus canales",
                description: "Integra WhatsApp, tu sitio web y portales inmobiliarios en minutos.",
              },
              {
                step: "2",
                title: "Configura tu chatbot",
                description: "Define las preguntas de calificacion y las propiedades a promocionar.",
              },
              {
                step: "3",
                title: "Recibe leads calificados",
                description: "El bot atiende, califica y agenda visitas. Tu solo cierras ventas.",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-gray-300">
                    {Icons.arrowRight}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Inmobiliarias que crecen con Operandi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-8">
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{Icons.star}</span>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 rounded-3xl p-12 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Listo para transformar tu inmobiliaria?
              </h2>
              <p className="text-lg text-violet-100 mb-10 max-w-2xl mx-auto">
                Unete a cientos de inmobiliarias que ya estan vendiendo mas con Operandi.
                Prueba gratis por 14 dias.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/registro">
                  <Button variant="secondary" size="lg" className="!bg-white !text-violet-700">
                    Comenzar Gratis
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white/10">
                    Hablar con Ventas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
