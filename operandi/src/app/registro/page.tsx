"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/lib/icons";

export default function RegistroPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    empresa: "",
    industria: "",
    telefono: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
      return;
    }

    setLoading(true);
    // Simular registro
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/dashboard");
  };

  const handleGoogleSignup = () => {
    console.log("Google signup");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex">
      {/* Left side - Visual */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 to-violet-700 items-center justify-center p-12">
        <div className="max-w-lg text-white">
          <h2 className="text-4xl font-bold mb-6">
            Comienza a transformar tu negocio hoy
          </h2>
          <p className="text-indigo-100 text-lg mb-10">
            Unete a cientos de empresas que ya estan usando IA para multiplicar sus ventas.
          </p>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                {Icons.check}
              </div>
              <div>
                <h3 className="font-semibold mb-1">Prueba gratuita de 14 dias</h3>
                <p className="text-indigo-200 text-sm">Sin tarjeta de credito requerida</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                {Icons.check}
              </div>
              <div>
                <h3 className="font-semibold mb-1">Configuracion en minutos</h3>
                <p className="text-indigo-200 text-sm">Nuestro equipo te guia en el proceso</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                {Icons.check}
              </div>
              <div>
                <h3 className="font-semibold mb-1">Soporte 24/7</h3>
                <p className="text-indigo-200 text-sm">Siempre disponibles para ayudarte</p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-white/10 backdrop-blur rounded-2xl p-6">
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{Icons.star}</span>
              ))}
            </div>
            <p className="text-indigo-50 mb-4">
              "En solo 2 semanas, Operandi nos ayudo a cerrar 15 ventas adicionales. El ROI fue inmediato."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center font-bold text-sm">
                MR
              </div>
              <div>
                <div className="font-medium">Maria Rodriguez</div>
                <div className="text-indigo-200 text-sm">CEO, PropiedadesTop</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center mb-8">
            <Image
              src="/logotexto.png"
              alt="Operandi"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Steps indicator */}
          <div className="flex items-center gap-3 mb-8">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${step >= 1 ? "bg-violet-600 text-white" : "bg-gray-200 text-gray-600"}`}>
              1
            </div>
            <div className={`flex-1 h-1 rounded ${step >= 2 ? "bg-violet-600" : "bg-gray-200"}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${step >= 2 ? "bg-violet-600 text-white" : "bg-gray-200 text-gray-600"}`}>
              2
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {step === 1 ? "Crea tu cuenta" : "Cuentanos sobre tu empresa"}
          </h1>
          <p className="text-gray-600 mb-8">
            {step === 1
              ? "Comienza tu prueba gratuita de 14 dias"
              : "Esta informacion nos ayuda a personalizar tu experiencia"}
          </p>

          {step === 1 && (
            <>
              {/* Google Signup */}
              <button
                onClick={handleGoogleSignup}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors mb-6"
              >
                {Icons.google}
                <span className="font-medium text-gray-700">Registrarse con Google</span>
              </button>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gradient-to-br from-violet-50 via-white to-indigo-50 text-gray-500">
                    o registrate con email
                  </span>
                </div>
              </div>
            </>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 ? (
              <>
                <Input
                  label="Nombre completo"
                  type="text"
                  placeholder="Juan Perez"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                />

                <Input
                  label="Email de trabajo"
                  type="email"
                  placeholder="juan@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  icon={Icons.email}
                />

                <Input
                  label="Contrasena"
                  type="password"
                  placeholder="Minimo 8 caracteres"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </>
            ) : (
              <>
                <Input
                  label="Nombre de tu empresa"
                  type="text"
                  placeholder="Mi Empresa S.A."
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industria
                  </label>
                  <select
                    value={formData.industria}
                    onChange={(e) => setFormData({ ...formData, industria: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all"
                    required
                  >
                    <option value="">Selecciona una opcion</option>
                    <option value="inmobiliaria">Inmobiliaria</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="servicios">Servicios</option>
                    <option value="retail">Retail</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <Input
                  label="Telefono (opcional)"
                  type="tel"
                  placeholder="+54 11 1234-5678"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  icon={Icons.phone}
                />
              </>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={loading}
            >
              {loading ? "Creando cuenta..." : step === 1 ? "Continuar" : "Crear cuenta"}
            </Button>

            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Volver atras
              </button>
            )}
          </form>

          {step === 1 && (
            <>
              <p className="mt-6 text-xs text-gray-500 text-center">
                Al registrarte, aceptas nuestros{" "}
                <a href="#" className="text-violet-600 hover:underline">Terminos de Servicio</a>
                {" "}y{" "}
                <a href="#" className="text-violet-600 hover:underline">Politica de Privacidad</a>
              </p>

              <p className="mt-8 text-center text-gray-600">
                Ya tienes una cuenta?{" "}
                <Link href="/login" className="text-violet-600 hover:text-violet-700 font-medium">
                  Inicia sesion
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
