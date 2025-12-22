import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/lib/icons";

const features = [
  {
    icon: Icons.cart,
    title: "Recuperacion de Carritos",
    description: "Chatbot automatico que recupera hasta el 35% de carritos abandonados via WhatsApp con mensajes personalizados.",
  },
  {
    icon: Icons.chat,
    title: "Atencion al Cliente 24/7",
    description: "Responde consultas sobre productos, stock, envios y devoluciones sin intervencion humana.",
  },
  {
    icon: Icons.megaphone,
    title: "Publicidad Automatizada",
    description: "Campanas dinamicas en Meta y Google que se optimizan solas segun tu catalogo y rendimiento.",
  },
  {
    icon: Icons.sparkles,
    title: "Recomendaciones IA",
    description: "Sugiere productos personalizados a cada cliente basado en su historial y preferencias.",
  },
  {
    icon: Icons.chart,
    title: "Analytics de Ventas",
    description: "Dashboard con metricas en tiempo real: CAC, LTV, conversion por canal y productos top.",
  },
  {
    icon: Icons.users,
    title: "Segmentacion Avanzada",
    description: "Crea audiencias basadas en comportamiento de compra para campanas ultra-segmentadas.",
  },
];

const stats = [
  { value: "35%", label: "Carritos recuperados" },
  { value: "50%", label: "Reduccion en CAC" },
  { value: "3x", label: "Aumento en conversion" },
  { value: "24/7", label: "Soporte automatico" },
];

const integrations = [
  "Shopify", "WooCommerce", "TiendaNube", "Mercado Libre", "Meta Ads", "Google Ads"
];

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                {Icons.cart}
                <span>Solucion para E-commerce</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Escala tus ventas online con IA
              </h1>

              <p className="text-xl text-indigo-100 mb-10">
                Recupera carritos abandonados, automatiza atencion al cliente y optimiza tus campanas.
                Todo en una plataforma integrada con tu tienda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/registro">
                  <Button variant="secondary" size="lg" className="!bg-white !text-indigo-700">
                    Comenzar Gratis
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white/10">
                    Ver Demo
                  </Button>
                </Link>
              </div>

              {/* Integrations */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-sm text-indigo-200 mb-4">Integra con tu plataforma favorita</p>
                <div className="flex flex-wrap gap-3">
                  {integrations.map((name, i) => (
                    <span key={i} className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-indigo-200">{stat.label}</div>
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
              Herramientas para vender mas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Desde la captacion hasta la fidelizacion, optimiza cada etapa del customer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Recovery Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Recupera hasta el 35% de tus carritos abandonados
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nuestro chatbot de WhatsApp contacta automaticamente a los clientes que abandonaron su carrito,
                enviando mensajes personalizados con descuentos dinamicos.
              </p>

              <div className="space-y-6">
                {[
                  "Mensaje automatico a los 30 minutos del abandono",
                  "Descuentos personalizados segun valor del carrito",
                  "Recordatorios con productos vistos recientemente",
                  "Link directo a checkout con carrito precargado",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-green-500">{Icons.check}</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/registro">
                  <Button variant="primary" size="lg">
                    Activar Recuperacion de Carritos
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual mockup */}
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900">WhatsApp Business</div>
                    <div className="text-sm text-gray-500">Operandi Bot</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-gray-800">Hola Maria! Vimos que dejaste productos en tu carrito.</p>
                  </div>
                  <div className="bg-green-50 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-gray-800">Tienes 10% OFF si completas tu compra en las proximas 2 horas.</p>
                  </div>
                  <div className="bg-green-50 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-gray-800 mb-3">Usa el codigo: VUELVE10</p>
                    <button className="w-full bg-green-500 text-white py-2 rounded-lg font-medium">
                      Completar Compra
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Metricas que importan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dashboard en tiempo real con las metricas clave para escalar tu e-commerce.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Ventas del Mes", value: "$127,430", change: "+23%" },
                { label: "Carritos Recuperados", value: "342", change: "+35%" },
                { label: "Tasa de Conversion", value: "4.8%", change: "+0.8%" },
                { label: "Ticket Promedio", value: "$85", change: "+12%" },
              ].map((metric, i) => (
                <div key={i} className="bg-white/5 backdrop-blur rounded-xl p-6">
                  <div className="text-gray-400 text-sm mb-2">{metric.label}</div>
                  <div className="text-white text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="text-green-400 text-sm">{metric.change}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white/5 backdrop-blur rounded-xl p-6 h-48 flex items-end justify-between gap-2">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-400 rounded-t-lg"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 text-yellow-400 mb-8">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{Icons.star}</span>
            ))}
          </div>
          <p className="text-2xl sm:text-3xl text-gray-700 mb-8 leading-relaxed">
            "El chatbot de Operandi recupero el 32% de nuestros carritos abandonados el primer mes.
            Nunca pense que la IA pudiera hacer tanta diferencia en nuestro e-commerce."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              JL
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Juan Lopez</div>
              <div className="text-gray-500">Fundador, TechStore MX</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Listo para escalar tu e-commerce?
              </h2>
              <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto">
                Conecta tu tienda en minutos y comienza a recuperar ventas perdidas.
                14 dias de prueba gratis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/registro">
                  <Button variant="secondary" size="lg" className="!bg-white !text-indigo-700">
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
