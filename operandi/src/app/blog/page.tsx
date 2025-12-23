import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icons } from "@/lib/icons";

const featuredPost = {
  slug: "futuro-ia-marketing-2025",
  title: "El Futuro de la IA en Marketing: Tendencias para 2025",
  excerpt: "Exploramos las principales tendencias que definiran el marketing digital impulsado por inteligencia artificial en el proximo ano.",
  category: "Tendencias",
  author: "Sofia Fernandez",
  date: "20 Dic 2024",
  readTime: "8 min",
  image: "from-violet-500 to-indigo-600",
};

const posts = [
  {
    slug: "chatbots-inmobiliarias",
    title: "Como los Chatbots estan Revolucionando las Inmobiliarias",
    excerpt: "Descubre como la IA conversacional esta transformando la forma en que las inmobiliarias interactuan con sus clientes.",
    category: "Casos de Exito",
    author: "Lucas Mendez",
    date: "18 Dic 2024",
    readTime: "5 min",
    image: "from-blue-500 to-cyan-600",
  },
  {
    slug: "recuperar-carritos-abandonados",
    title: "5 Estrategias para Recuperar Carritos Abandonados con IA",
    excerpt: "Aprende las mejores tacticas para convertir carritos abandonados en ventas usando automatizacion inteligente.",
    category: "E-commerce",
    author: "Valentina Garcia",
    date: "15 Dic 2024",
    readTime: "6 min",
    image: "from-pink-500 to-rose-600",
  },
  {
    slug: "optimizar-campanas-meta",
    title: "Guia Completa: Optimizar Campanas en Meta Ads con IA",
    excerpt: "Todo lo que necesitas saber para maximizar el ROI de tus campanas publicitarias usando inteligencia artificial.",
    category: "Publicidad",
    author: "Martin Rodriguez",
    date: "12 Dic 2024",
    readTime: "10 min",
    image: "from-orange-500 to-amber-600",
  },
  {
    slug: "metricas-clave-saas",
    title: "Las 10 Metricas Clave que Todo SaaS Debe Monitorear",
    excerpt: "Una guia practica sobre los KPIs mas importantes para medir el exito de tu negocio SaaS.",
    category: "Metricas",
    author: "Sofia Fernandez",
    date: "10 Dic 2024",
    readTime: "7 min",
    image: "from-green-500 to-emerald-600",
  },
  {
    slug: "integracion-whatsapp-business",
    title: "Integrando WhatsApp Business con tu CRM: Guia Paso a Paso",
    excerpt: "Aprende a conectar WhatsApp Business con tu sistema de gestion de clientes para automatizar la comunicacion.",
    category: "Integraciones",
    author: "Lucas Mendez",
    date: "8 Dic 2024",
    readTime: "8 min",
    image: "from-teal-500 to-cyan-600",
  },
  {
    slug: "roi-automatizacion-marketing",
    title: "Calculando el ROI de la Automatizacion de Marketing",
    excerpt: "Como medir el retorno de inversion de tus esfuerzos de automatizacion y justificar la inversion.",
    category: "Finanzas",
    author: "Valentina Garcia",
    date: "5 Dic 2024",
    readTime: "6 min",
    image: "from-purple-500 to-violet-600",
  },
];

const categories = [
  "Todos",
  "Tendencias",
  "E-commerce",
  "Inmobiliarias",
  "Publicidad",
  "Integraciones",
  "Casos de Exito",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Blog de Operandi</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, guias y tendencias sobre IA, automatizacion y crecimiento empresarial.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-violet-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <Link href={`/blog/${featuredPost.slug}`} className="block mb-16">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`aspect-video lg:aspect-auto bg-gradient-to-br ${featuredPost.image} flex items-center justify-center`}>
                <span className="text-white text-6xl font-bold opacity-20">OP</span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-sm font-medium rounded-full mb-4 w-fit">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 hover:text-violet-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime} lectura</span>
                </div>
              </div>
            </article>
          </Link>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`aspect-video bg-gradient-to-br ${post.image} flex items-center justify-center`}>
                    <span className="text-white text-4xl font-bold opacity-20">OP</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.readTime} lectura</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors">
              Cargar mas articulos
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 mx-auto mb-6">
            {Icons.email}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Suscribite a nuestro newsletter</h2>
          <p className="text-gray-600 mb-6">
            Recibe las ultimas novedades sobre IA, automatizacion y tips para hacer crecer tu negocio.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-violet-600 text-white font-medium rounded-xl hover:bg-violet-700 transition-colors"
            >
              Suscribirse
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            Sin spam. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
