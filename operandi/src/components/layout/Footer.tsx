import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logotexto.png"
                alt="Operandi"
                width={140}
                height={36}
                className="h-9 w-auto rounded-3xl object-contain invert"
              />
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
              <li><Link href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/carreras" className="hover:text-white transition-colors">Carreras</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-white transition-colors">Terminos</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link></li>
              <li><Link href="/seguridad" className="hover:text-white transition-colors">Seguridad</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            {new Date().getFullYear()} Operandi. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacidad" className="hover:text-white transition-colors">Politica de Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">Terminos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
