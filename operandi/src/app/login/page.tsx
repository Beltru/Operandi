"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/lib/icons";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simular autenticacion
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Por ahora, redirigir al dashboard
    router.push("/dashboard");
  };

  const handleGoogleLogin = () => {
    // Implementar OAuth con Google
    console.log("Google login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">O</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Operandi</span>
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bienvenido de nuevo
          </h1>
          <p className="text-gray-600 mb-8">
            Ingresa a tu cuenta para continuar
          </p>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors mb-6"
          >
            {Icons.google}
            <span className="font-medium text-gray-700">Continuar con Google</span>
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gradient-to-br from-violet-50 via-white to-indigo-50 text-gray-500">
                o continua con email
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                {error}
              </div>
            )}

            <Input
              label="Email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              icon={Icons.email}
            />

            <Input
              label="Contrasena"
              type="password"
              placeholder="********"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                />
                <span className="text-sm text-gray-600">Recordarme</span>
              </label>
              <a href="#" className="text-sm text-violet-600 hover:text-violet-700 font-medium">
                Olvidaste tu contrasena?
              </a>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={loading}
            >
              {loading ? "Ingresando..." : "Iniciar Sesion"}
            </Button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            No tienes una cuenta?{" "}
            <Link href="/registro" className="text-violet-600 hover:text-violet-700 font-medium">
              Registrate gratis
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Visual */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-violet-600 to-indigo-700 items-center justify-center p-12">
        <div className="max-w-lg text-white">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
              {Icons.sparkles}
              <span>Potenciado por IA</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Automatiza. Escala. Crece.
            </h2>
            <p className="text-violet-100 text-lg">
              Mas de 500 empresas ya estan transformando sus ventas con Operandi.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl font-bold mb-1">45%</div>
              <div className="text-violet-200 text-sm">Aumento en ventas</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-violet-200 text-sm">Chatbot activo</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl font-bold mb-1">2.5M</div>
              <div className="text-violet-200 text-sm">Leads generados</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl font-bold mb-1">20h</div>
              <div className="text-violet-200 text-sm">Ahorro semanal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
