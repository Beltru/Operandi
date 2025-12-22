import Link from "next/link";
import { Icons } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-xl font-bold text-white">Operandi</span>
            </Link>
            <p className="text-sm mb-6">
              Transformando negocios con inteligencia artificial.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">{Icons.linkedin}</a>
              <a href="#" className="hover:text-white transition-colors">{Icons.twitter}</a>
              <a href="#" className="hover:text-white transition-colors">{Icons.instagram}</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/soluciones/inmobiliarias" className="hover:text-white transition-colors">Inmobiliarias</Link></li>
              <li><Link href="/soluciones/ecommerce" className="hover:text-white transition-colors">E-commerce</Link></li>
              <li><Link href="/precios" className="hover:text-white transition-colors">Precios</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terminos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seguridad</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            {new Date().getFullYear()} Operandi. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Politica de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Terminos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
