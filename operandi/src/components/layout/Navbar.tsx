"use client";

import { useState } from "react";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  variant?: "default" | "dark";
}

export function Navbar({ variant = "default" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solucionesOpen, setSolucionesOpen] = useState(false);

  const isDark = variant === "dark";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isDark ? "bg-gray-900/95" : "bg-white/80"} backdrop-blur-lg border-b ${isDark ? "border-gray-800" : "border-gray-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Operandi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Soluciones Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolucionesOpen(!solucionesOpen)}
                className={`flex items-center gap-1 ${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors text-sm font-medium`}
              >
                Soluciones
                <span className={`transition-transform ${solucionesOpen ? "rotate-180" : ""}`}>
                  {Icons.chevronDown}
                </span>
              </button>
              {solucionesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <Link
                    href="/soluciones/inmobiliarias"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setSolucionesOpen(false)}
                  >
                    <span className="text-violet-600">{Icons.building}</span>
                    <div>
                      <div className="font-medium text-gray-900">Inmobiliarias</div>
                      <div className="text-xs text-gray-500">Vende mas propiedades</div>
                    </div>
                  </Link>
                  <Link
                    href="/soluciones/ecommerce"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    onClick={() => setSolucionesOpen(false)}
                  >
                    <span className="text-indigo-600">{Icons.cart}</span>
                    <div>
                      <div className="font-medium text-gray-900">E-commerce</div>
                      <div className="text-xs text-gray-500">Escala tus ventas online</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/precios" className={`${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors text-sm font-medium`}>
              Precios
            </Link>
            <Link href="/contacto" className={`${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors text-sm font-medium`}>
              Contacto
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Iniciar Sesion
              </Button>
            </Link>
            <Link href="/registro">
              <Button variant="primary" size="sm">
                Comenzar Gratis
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ${isDark ? "text-gray-300" : "text-gray-600"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? Icons.close : Icons.menu}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${isDark ? "border-gray-800" : "border-gray-100"}`}>
            <div className="flex flex-col gap-4">
              <Link
                href="/soluciones/inmobiliarias"
                className={`${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors text-sm font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Inmobiliarias
              </Link>
              <Link
                href="/soluciones/ecommerce"
                className={`${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors text-sm font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                E-commerce
              </Link>
              <Link
                href="/precios"
                className={`${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors text-sm font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Precios
              </Link>
              <Link
                href="/contacto"
                className={`${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors text-sm font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" fullWidth>
                    Iniciar Sesion
                  </Button>
                </Link>
                <Link href="/registro" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" fullWidth>
                    Comenzar Gratis
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
