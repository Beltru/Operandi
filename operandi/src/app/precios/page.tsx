"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/lib/icons";

const plans = [
  {
    name: "Starter",
    description: "Perfecto para empezar a automatizar tu negocio.",
    priceMonthly: 99,
    priceYearly: 79,
    features: [
      "Chatbot basico (500 conversaciones/mes)",
      "CRM con 1,000 contactos",
      "1 campana publicitaria activa",
      "Reportes basicos",
      "Integraciones: WhatsApp, Email",
      "Soporte por email",
    ],
    cta: "Comenzar Gratis",
    popular: false,
  },
  {
    name: "Professional",
    description: "Para equipos que buscan escalar rapidamente.",
    priceMonthly: 299,
    priceYearly: 249,
    features: [
      "Chatbot avanzado (ilimitado)",
      "CRM con 10,000 contactos",
      "5 campanas publicitarias activas",
      "Automatizaciones avanzadas",
      "Scoring de leads con IA",
      "Integraciones premium (Meta, Google, TikTok)",
      "API access",
      "Soporte prioritario 24/7",
    ],
    cta: "Comenzar Gratis",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Solucion personalizada para grandes empresas.",
    priceMonthly: null,
    priceYearly: null,
    features: [
      "Todo de Professional",
      "Contactos ilimitados",
      "Campanas ilimitadas",
      "Chatbots personalizados",
      "API dedicada",
      "Integraciones custom",
      "Customer Success Manager dedicado",
      "SLA garantizado 99.9%",
      "Onboarding personalizado",
    ],
    cta: "Contactar Ventas",
    popular: false,
  },
];

const faqs = [
  {
    question: "Puedo cambiar de plan en cualquier momento?",
    answer: "Si, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplican inmediatamente y ajustamos la facturacion de forma prorrateada.",
  },
  {
    question: "Hay un periodo de prueba gratuito?",
    answer: "Si, ofrecemos 14 dias de prueba gratuita en los planes Starter y Professional. No requiere tarjeta de credito para comenzar.",
  },
  {
    question: "Que metodos de pago aceptan?",
    answer: "Aceptamos todas las tarjetas de credito principales (Visa, Mastercard, American Express), transferencias bancarias y MercadoPago para America Latina.",
  },
  {
    question: "Que pasa si supero los limites de mi plan?",
    answer: "Te notificaremos cuando estes cerca del limite. Puedes actualizar tu plan o comprar creditos adicionales segun tus necesidades.",
  },
  {
    question: "Ofrecen descuentos para ONGs o startups?",
    answer: "Si, tenemos programas especiales para organizaciones sin fines de lucro y startups en etapa temprana. Contactanos para mas informacion.",
  },
  {
    question: "Como funciona el soporte?",
    answer: "El plan Starter incluye soporte por email. Professional tiene chat en vivo 24/7 y acceso a nuestro equipo de Customer Success. Enterprise tiene un manager dedicado.",
  },
];

export default function PreciosPage() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Planes simples, resultados{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              extraordinarios
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Elige el plan que mejor se adapte a tu negocio. Sin compromisos, cancela cuando quieras.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-gray-100 p-1 rounded-full">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!annual ? "bg-white shadow text-gray-900" : "text-gray-600"}`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${annual ? "bg-white shadow text-gray-900" : "text-gray-600"}`}
            >
              Anual
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-violet-600 to-indigo-700 text-white relative"
                    : "bg-white border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MAS POPULAR
                  </div>
                )}

                <div className={`text-sm font-medium mb-2 ${plan.popular ? "text-violet-200" : "text-gray-500"}`}>
                  {plan.name}
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  {plan.priceMonthly ? (
                    <>
                      <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                        ${annual ? plan.priceYearly : plan.priceMonthly}
                      </span>
                      <span className={plan.popular ? "text-violet-200" : "text-gray-500"}>/mes</span>
                    </>
                  ) : (
                    <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                      Custom
                    </span>
                  )}
                </div>

                <p className={`mb-8 ${plan.popular ? "text-violet-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>

                <Link href={plan.name === "Enterprise" ? "/contacto" : "/registro"}>
                  <Button
                    variant={plan.popular ? "secondary" : "outline"}
                    fullWidth
                    className={plan.popular ? "!bg-white !text-violet-700 hover:!bg-violet-50" : ""}
                  >
                    {plan.cta}
                  </Button>
                </Link>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={plan.popular ? "text-violet-200" : "text-green-500"}>
                        {Icons.check}
                      </span>
                      <span className={plan.popular ? "text-white" : "text-gray-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Compara todos los planes
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-medium text-gray-500">Caracteristica</th>
                  <th className="text-center py-4 px-4 font-medium text-gray-900">Starter</th>
                  <th className="text-center py-4 px-4 font-medium text-violet-600">Professional</th>
                  <th className="text-center py-4 px-4 font-medium text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: "Conversaciones chatbot", starter: "500/mes", pro: "Ilimitadas", enterprise: "Ilimitadas" },
                  { feature: "Contactos CRM", starter: "1,000", pro: "10,000", enterprise: "Ilimitados" },
                  { feature: "Campanas activas", starter: "1", pro: "5", enterprise: "Ilimitadas" },
                  { feature: "Usuarios del equipo", starter: "2", pro: "10", enterprise: "Ilimitados" },
                  { feature: "WhatsApp Business", starter: true, pro: true, enterprise: true },
                  { feature: "Instagram DMs", starter: false, pro: true, enterprise: true },
                  { feature: "Scoring de leads IA", starter: false, pro: true, enterprise: true },
                  { feature: "Automatizaciones", starter: "Basicas", pro: "Avanzadas", enterprise: "Custom" },
                  { feature: "Integraciones", starter: "5", pro: "15+", enterprise: "Ilimitadas" },
                  { feature: "API access", starter: false, pro: true, enterprise: true },
                  { feature: "Reportes", starter: "Basicos", pro: "Avanzados", enterprise: "Custom" },
                  { feature: "Soporte", starter: "Email", pro: "24/7 Chat", enterprise: "Dedicado" },
                  { feature: "SLA", starter: "99%", pro: "99.5%", enterprise: "99.9%" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <span className="text-green-500 inline-flex justify-center">{Icons.check}</span>
                        ) : (
                          <span className="text-gray-300">-</span>
                        )
                      ) : (
                        <span className="text-gray-600">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-violet-50/50">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <span className="text-green-500 inline-flex justify-center">{Icons.check}</span>
                        ) : (
                          <span className="text-gray-300">-</span>
                        )
                      ) : (
                        <span className="text-violet-700 font-medium">{row.pro}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <span className="text-green-500 inline-flex justify-center">{Icons.check}</span>
                        ) : (
                          <span className="text-gray-300">-</span>
                        )
                      ) : (
                        <span className="text-gray-600">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Preguntas frecuentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className={`transition-transform ${openFaq === i ? "rotate-180" : ""}`}>
                    {Icons.chevronDown}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}
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
                Todavia tienes dudas?
              </h2>
              <p className="text-lg text-violet-100 mb-10 max-w-2xl mx-auto">
                Agenda una demo personalizada con nuestro equipo y te mostraremos como Operandi puede transformar tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button variant="secondary" size="lg" className="!bg-white !text-violet-700">
                    Agendar Demo
                  </Button>
                </Link>
                <Link href="/registro">
                  <Button variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white/10">
                    Comenzar Gratis
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
