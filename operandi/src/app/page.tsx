"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/lib/icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              {Icons.sparkles}
              <span>Potenciado por Inteligencia Artificial</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transforma tu negocio con{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                IA que vende
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Automatiza tu publicidad, gestiona tus ventas y atiende clientes 24/7 con nuestro chatbot inteligente.
              La solucion completa para inmobiliarias y e-commerce.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/registro">
                <Button variant="primary" size="lg" icon={Icons.arrowRight}>
                  Comenzar Prueba Gratuita
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" size="lg">
                  Ver Demo
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-gray-100">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-500 mt-1">Empresas Activas</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">2.5M</div>
                <div className="text-sm text-gray-500 mt-1">Leads Generados</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">45%</div>
                <div className="text-sm text-gray-500 mt-1">Aumento en Ventas</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-500 mt-1">Soporte Activo</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none"></div>
            <div className="bg-gradient-to-br from-violet-100 via-indigo-50 to-purple-100 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-violet-500/10">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Dashboard mockup */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="ml-4 text-sm text-gray-400">dashboard.operandi.ai</span>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl p-6 text-white">
                      <div className="text-sm font-medium opacity-80 mb-2">Ventas del Mes</div>
                      <div className="text-3xl font-bold">$127,430</div>
                      <div className="text-sm mt-2 flex items-center gap-1 text-green-200">
                        <span>+23%</span>
                        <span className="opacity-70">vs mes anterior</span>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white border border-gray-100 rounded-xl p-6">
                      <div className="text-sm font-medium text-gray-500 mb-2">Leads Activos</div>
                      <div className="text-3xl font-bold text-gray-900">1,284</div>
                      <div className="text-sm mt-2 flex items-center gap-1 text-green-600">
                        <span>+18%</span>
                        <span className="text-gray-400">vs mes anterior</span>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white border border-gray-100 rounded-xl p-6">
                      <div className="text-sm font-medium text-gray-500 mb-2">Conversaciones Bot</div>
                      <div className="text-3xl font-bold text-gray-900">8,492</div>
                      <div className="text-sm mt-2 flex items-center gap-1 text-green-600">
                        <span>+42%</span>
                        <span className="text-gray-400">vs mes anterior</span>
                      </div>
                    </div>
                  </div>
                  {/* Chart placeholder */}
                  <div className="mt-6 bg-gray-50 rounded-xl p-6 h-48 flex items-end justify-between gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-violet-500 to-indigo-400 rounded-t-lg transition-all hover:from-violet-600 hover:to-indigo-500"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas para escalar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Herramientas potentes de IA disenadas especificamente para inmobiliarias y negocios e-commerce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                {Icons.megaphone}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Publicidad Inteligente</h3>
              <p className="text-gray-600 mb-6">
                Campanas automatizadas con IA que optimizan tu presupuesto y maximizan el ROI en Meta, Google y TikTok.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-violet-600">{Icons.check}</span>
                  Segmentacion automatica
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-violet-600">{Icons.check}</span>
                  Creativos generados por IA
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-violet-600">{Icons.check}</span>
                  Optimizacion en tiempo real
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {Icons.chart}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestion de Ventas</h3>
              <p className="text-gray-600 mb-6">
                CRM inteligente que automatiza seguimientos, prioriza leads y predice cierres con precision.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-indigo-600">{Icons.check}</span>
                  Pipeline visual intuitivo
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-indigo-600">{Icons.check}</span>
                  Scoring de leads con IA
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-indigo-600">{Icons.check}</span>
                  Automatizaciones personalizadas
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                {Icons.chat}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chatbot 24/7</h3>
              <p className="text-gray-600 mb-6">
                Asistente virtual que califica leads, agenda citas y responde consultas en cualquier momento.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-purple-600">{Icons.check}</span>
                  WhatsApp, Web e Instagram
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-purple-600">{Icons.check}</span>
                  Respuestas naturales con GPT
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-purple-600">{Icons.check}</span>
                  Transferencia a humanos
                </li>
              </ul>
            </div>
          </div>

          {/* Industry specific */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/soluciones/inmobiliarias" className="block">
              <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-8 text-white hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  {Icons.building}
                </div>
                <h3 className="text-2xl font-semibold mb-3">Para Inmobiliarias</h3>
                <p className="text-violet-100 mb-6">
                  Publica propiedades automaticamente, genera tours virtuales y conecta compradores con las propiedades perfectas.
                </p>
                <span className="inline-flex items-center gap-2 bg-white text-violet-700 px-6 py-3 rounded-full font-medium">
                  Ver Solucion
                  {Icons.arrowRight}
                </span>
              </div>
            </Link>

            <Link href="/soluciones/ecommerce" className="block">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  {Icons.cart}
                </div>
                <h3 className="text-2xl font-semibold mb-3">Para E-commerce</h3>
                <p className="text-indigo-100 mb-6">
                  Recupera carritos abandonados, personaliza recomendaciones y escala tus ventas con automatizacion inteligente.
                </p>
                <span className="inline-flex items-center gap-2 bg-white text-indigo-700 px-6 py-3 rounded-full font-medium">
                  Ver Solucion
                  {Icons.arrowRight}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Por que elegir Operandi
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                No solo automatizamos, transformamos la manera en que haces negocios con tecnologia de vanguardia.
              </p>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                    {Icons.lightning}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Resultados Inmediatos</h3>
                    <p className="text-gray-600">Configuracion en menos de 24 horas. Empieza a ver resultados desde la primera semana.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    {Icons.shield}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Seguridad Empresarial</h3>
                    <p className="text-gray-600">Tus datos protegidos con encriptacion de grado bancario y cumplimiento GDPR.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                    {Icons.clock}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ahorra 20+ Horas/Semana</h3>
                    <p className="text-gray-600">Automatiza tareas repetitivas y enfocate en lo que realmente importa: cerrar ventas.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                    {Icons.users}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Soporte Dedicado</h3>
                    <p className="text-gray-600">Un Customer Success Manager asignado para asegurar tu exito con la plataforma.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-violet-100 to-indigo-100 rounded-3xl p-8">
                <div className="space-y-4">
                  {/* Notification cards */}
                  <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-4 transform hover:-translate-y-1 transition-transform">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                      {Icons.check}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Nuevo lead calificado</div>
                      <div className="text-sm text-gray-500">Maria Garcia - Interesada en depto 3 amb</div>
                    </div>
                    <div className="text-xs text-gray-400 ml-auto">Ahora</div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-4 transform hover:-translate-y-1 transition-transform">
                    <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center text-white">
                      {Icons.chat}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Chatbot: Cita agendada</div>
                      <div className="text-sm text-gray-500">Pedro Lopez - Manana 10:00 AM</div>
                    </div>
                    <div className="text-xs text-gray-400 ml-auto">2 min</div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-4 transform hover:-translate-y-1 transition-transform">
                    <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                      {Icons.chart}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Campana optimizada</div>
                      <div className="text-sm text-gray-500">CPC reducido 23% automaticamente</div>
                    </div>
                    <div className="text-xs text-gray-400 ml-auto">15 min</div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-4 transform hover:-translate-y-1 transition-transform">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      $
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Venta cerrada!</div>
                      <div className="text-sm text-gray-500">Propiedad #1284 - $185,000</div>
                    </div>
                    <div className="text-xs text-gray-400 ml-auto">1 hora</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empresas de toda Latinoamerica confian en Operandi para impulsar sus ventas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{Icons.star}</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Desde que implementamos Operandi, nuestras ventas aumentaron un 45% y el equipo ahorra mas de 25 horas semanales en tareas manuales. El chatbot es increible."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  RC
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Roberto Campos</div>
                  <div className="text-sm text-gray-500">CEO, Inmobiliaria Premium</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{Icons.star}</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "La automatizacion de publicidad nos permitio escalar de 50 a 200 propiedades sin aumentar el equipo. El ROI es impresionante, lo recomiendo totalmente."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  AM
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ana Martinez</div>
                  <div className="text-sm text-gray-500">Directora, Casas & Mas</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{Icons.star}</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "El chatbot recupero el 32% de nuestros carritos abandonados el primer mes. Nunca pense que la IA pudiera hacer tanta diferencia en nuestro e-commerce."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  JL
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Juan Lopez</div>
                  <div className="text-sm text-gray-500">Fundador, TechStore MX</div>
                </div>
              </div>
            </div>
          </div>

          {/* Logos */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500 mb-8">Empresas que confian en nosotros</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
              {["Inmobiliaria Plus", "CasaPro", "TechStore", "ModaLatam", "PropTech"].map((name, i) => (
                <div key={i} className="text-xl font-bold text-gray-400">{name}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="precios" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Planes simples, resultados extraordinarios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tu negocio. Sin compromisos, cancela cuando quieras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-sm font-medium text-gray-500 mb-2">Starter</div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="text-gray-500">/mes</span>
              </div>
              <p className="text-gray-600 mb-8">Perfecto para empezar a automatizar tu negocio.</p>
              <Link href="/registro">
                <Button variant="outline" fullWidth>
                  Comenzar Gratis
                </Button>
              </Link>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">{Icons.check}</span>
                  Chatbot basico (500 conversaciones)
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">{Icons.check}</span>
                  CRM con 1,000 contactos
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">{Icons.check}</span>
                  1 campana publicitaria
                </li>
              </ul>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-8 text-white relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                MAS POPULAR
              </div>
              <div className="text-sm font-medium text-violet-200 mb-2">Professional</div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-violet-200">/mes</span>
              </div>
              <p className="text-violet-100 mb-8">Para equipos que buscan escalar rapidamente.</p>
              <Link href="/registro">
                <Button variant="secondary" fullWidth className="!bg-white !text-violet-700">
                  Comenzar Gratis
                </Button>
              </Link>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-violet-200">{Icons.check}</span>
                  Chatbot avanzado (ilimitado)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-violet-200">{Icons.check}</span>
                  CRM con 10,000 contactos
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-violet-200">{Icons.check}</span>
                  5 campanas publicitarias
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-sm font-medium text-gray-500 mb-2">Enterprise</div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              </div>
              <p className="text-gray-600 mb-8">Solucion personalizada para grandes empresas.</p>
              <Link href="/contacto">
                <Button variant="outline" fullWidth>
                  Contactar Ventas
                </Button>
              </Link>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">{Icons.check}</span>
                  Todo de Professional
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">{Icons.check}</span>
                  Contactos ilimitados
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">{Icons.check}</span>
                  Customer Success dedicado
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/precios" className="text-violet-600 hover:text-violet-700 font-medium">
              Ver comparacion completa de planes
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 rounded-3xl p-12 sm:p-16 text-center text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Listo para transformar tu negocio?
              </h2>
              <p className="text-lg text-violet-100 mb-10 max-w-2xl mx-auto">
                Unete a mas de 500 empresas que ya estan creciendo con Operandi.
                Comienza gratis hoy, sin tarjeta de credito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/registro">
                  <Button variant="secondary" size="lg" className="!bg-white !text-violet-700" icon={Icons.arrowRight}>
                    Comenzar Prueba Gratuita
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white/10">
                    Agendar Demo
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
