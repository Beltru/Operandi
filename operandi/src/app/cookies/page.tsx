import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Politica de Cookies</h1>
          <p className="text-gray-500 mb-12">Ultima actualizacion: Diciembre 2024</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Que son las Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Las cookies son pequenos archivos de texto que se almacenan en su dispositivo cuando visita
                un sitio web. Se utilizan ampliamente para hacer que los sitios funcionen de manera mas
                eficiente, proporcionar informacion a los propietarios del sitio y mejorar la experiencia
                del usuario.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Como Usamos las Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Utilizamos cookies y tecnologias similares para diversos propositos:
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-3">2.1 Cookies Esenciales</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Son necesarias para el funcionamiento basico del sitio. Incluyen cookies que permiten
                iniciar sesion, recordar sus preferencias de sesion y garantizar la seguridad.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-gray-700">Cookie</th>
                      <th className="text-left py-2 text-gray-700">Proposito</th>
                      <th className="text-left py-2 text-gray-700">Duracion</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-2">session_id</td>
                      <td className="py-2">Mantener la sesion activa</td>
                      <td className="py-2">Sesion</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2">csrf_token</td>
                      <td className="py-2">Seguridad del sitio</td>
                      <td className="py-2">Sesion</td>
                    </tr>
                    <tr>
                      <td className="py-2">auth_token</td>
                      <td className="py-2">Autenticacion del usuario</td>
                      <td className="py-2">30 dias</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-medium text-gray-800 mb-3">2.2 Cookies de Rendimiento</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nos ayudan a entender como los visitantes interactuan con nuestro sitio, recopilando
                informacion de forma anonima.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-gray-700">Cookie</th>
                      <th className="text-left py-2 text-gray-700">Proposito</th>
                      <th className="text-left py-2 text-gray-700">Duracion</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-2">_ga</td>
                      <td className="py-2">Google Analytics - Distinguir usuarios</td>
                      <td className="py-2">2 anos</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2">_gid</td>
                      <td className="py-2">Google Analytics - Distinguir usuarios</td>
                      <td className="py-2">24 horas</td>
                    </tr>
                    <tr>
                      <td className="py-2">_gat</td>
                      <td className="py-2">Google Analytics - Limitar tasa de solicitudes</td>
                      <td className="py-2">1 minuto</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-medium text-gray-800 mb-3">2.3 Cookies de Funcionalidad</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permiten recordar sus preferencias para proporcionar una experiencia mas personalizada.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-gray-700">Cookie</th>
                      <th className="text-left py-2 text-gray-700">Proposito</th>
                      <th className="text-left py-2 text-gray-700">Duracion</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-2">theme</td>
                      <td className="py-2">Preferencia de tema claro/oscuro</td>
                      <td className="py-2">1 ano</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2">language</td>
                      <td className="py-2">Preferencia de idioma</td>
                      <td className="py-2">1 ano</td>
                    </tr>
                    <tr>
                      <td className="py-2">sidebar_state</td>
                      <td className="py-2">Estado de la barra lateral</td>
                      <td className="py-2">30 dias</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-medium text-gray-800 mb-3">2.4 Cookies de Marketing</h3>
              <p className="text-gray-600 leading-relaxed">
                Se utilizan para rastrear visitantes en sitios web con el fin de mostrar anuncios
                relevantes y atractivos.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-gray-700">Cookie</th>
                      <th className="text-left py-2 text-gray-700">Proposito</th>
                      <th className="text-left py-2 text-gray-700">Duracion</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-2">_fbp</td>
                      <td className="py-2">Facebook Pixel</td>
                      <td className="py-2">3 meses</td>
                    </tr>
                    <tr>
                      <td className="py-2">_gcl_au</td>
                      <td className="py-2">Google Ads conversion tracking</td>
                      <td className="py-2">3 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Control de Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Puede controlar y gestionar las cookies de varias maneras:
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-3">3.1 Configuracion del navegador</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                La mayoria de los navegadores le permiten bloquear o eliminar cookies. Las instrucciones
                varian segun el navegador:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><a href="https://support.google.com/chrome/answer/95647" className="text-violet-600 hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" className="text-violet-600 hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" className="text-violet-600 hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-violet-600 hover:underline">Microsoft Edge</a></li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-3">3.2 Nuestro banner de cookies</h3>
              <p className="text-gray-600 leading-relaxed">
                Al visitar nuestro sitio por primera vez, vera un banner de cookies que le permite
                aceptar o rechazar cookies no esenciales. Puede cambiar sus preferencias en cualquier
                momento desde la configuracion de su cuenta.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies de Terceros</h2>
              <p className="text-gray-600 leading-relaxed">
                Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras paginas.
                No controlamos la difusion de estas cookies. Consulte los sitios web de estos terceros
                para obtener mas informacion sobre sus cookies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Actualizaciones</h2>
              <p className="text-gray-600 leading-relaxed">
                Podemos actualizar esta Politica de Cookies periodicamente para reflejar cambios en
                nuestras practicas o por otras razones operativas, legales o regulatorias. Le recomendamos
                revisar esta pagina regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contacto</h2>
              <p className="text-gray-600 leading-relaxed">
                Si tiene preguntas sobre nuestra Politica de Cookies:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-xl">
                <p className="text-gray-700"><strong>Operandi</strong></p>
                <p className="text-gray-600">Email: privacidad@operandi.ai</p>
                <p className="text-gray-600">Direccion: Buenos Aires, Argentina</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
