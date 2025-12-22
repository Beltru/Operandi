"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/lib/icons";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    mensaje: "",
    tipo: "demo",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Hablemos sobre tu{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              crecimiento
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nuestro equipo esta listo para ayudarte a transformar tu negocio con IA.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Conecta con nosotros
              </h2>
              <p className="text-gray-600 mb-10">
                Ya sea que quieras una demo, tengas preguntas sobre nuestros planes o necesites soporte,
                estamos aqui para ayudarte.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 shrink-0">
                    {Icons.email}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hola@operandi.ai</p>
                    <p className="text-gray-600">soporte@operandi.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                    {Icons.phone}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefono</h3>
                    <p className="text-gray-600">+54 11 1234-5678</p>
                    <p className="text-sm text-gray-500">Lun - Vie, 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                    {Icons.location}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Oficina</h3>
                    <p className="text-gray-600">Buenos Aires, Argentina</p>
                    <p className="text-sm text-gray-500">Trabajo remoto disponible</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Siguenos</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-violet-100 hover:text-violet-600 transition-colors"
                  >
                    {Icons.linkedin}
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-violet-100 hover:text-violet-600 transition-colors"
                  >
                    {Icons.twitter}
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-violet-100 hover:text-violet-600 transition-colors"
                  >
                    {Icons.instagram}
                  </a>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="mt-12 p-6 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600">
                    {Icons.questionMark}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Preguntas frecuentes</h3>
                    <p className="text-sm text-gray-600">
                      Consulta nuestra seccion de FAQ en{" "}
                      <a href="/precios#faq" className="text-violet-600 hover:underline">precios</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl shadow-gray-100/50">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                    {Icons.check}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Mensaje enviado!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Gracias por contactarnos. Nuestro equipo te respondera en menos de 24 horas.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nombre: "",
                        email: "",
                        empresa: "",
                        telefono: "",
                        mensaje: "",
                        tipo: "demo",
                      });
                    }}
                    variant="outline"
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Envia un mensaje
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Tipo de consulta */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Que te interesa?
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: "demo", label: "Agendar demo" },
                          { value: "precios", label: "Consultar precios" },
                          { value: "soporte", label: "Soporte tecnico" },
                          { value: "otro", label: "Otro" },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, tipo: option.value })}
                            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                              formData.tipo === option.value
                                ? "bg-violet-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input
                        label="Nombre"
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        required
                      />
                      <Input
                        label="Email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input
                        label="Empresa"
                        type="text"
                        placeholder="Tu empresa"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      />
                      <Input
                        label="Telefono (opcional)"
                        type="tel"
                        placeholder="+54 11 1234-5678"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Cuentanos como podemos ayudarte..."
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={loading}
                    >
                      {loading ? "Enviando..." : "Enviar mensaje"}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Al enviar, aceptas nuestra{" "}
                      <a href="#" className="text-violet-600 hover:underline">Politica de Privacidad</a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map / CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prefieres una llamada?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Agenda una videollamada de 30 minutos con nuestro equipo y te mostramos
            como Operandi puede ayudar a tu negocio.
          </p>

          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" icon={Icons.calendar}>
              Agendar Llamada
            </Button>
            <Button variant="outline" size="lg">
              Enviar WhatsApp
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-10 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-6">Empresas que confian en nosotros</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {["Inmobiliaria Plus", "CasaPro", "TechStore", "ModaLatam", "PropTech"].map((name, i) => (
                <div key={i} className="text-lg font-bold text-gray-400">{name}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
