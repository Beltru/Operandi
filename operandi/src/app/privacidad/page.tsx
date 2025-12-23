import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Politica de Privacidad</h1>
          <p className="text-gray-500 mb-12">Ultima actualizacion: Diciembre 2024</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduccion</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                En Operandi, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Politica de Privacidad
                describe como recopilamos, usamos, almacenamos y protegemos su informacion personal cuando utiliza
                nuestra plataforma de automatizacion con inteligencia artificial.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Al utilizar nuestros servicios, usted acepta las practicas descritas en esta politica. Le recomendamos
                leerla detenidamente.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informacion que Recopilamos</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-3">2.1 Informacion proporcionada directamente</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Nombre y apellido</li>
                <li>Direccion de correo electronico</li>
                <li>Numero de telefono</li>
                <li>Nombre de la empresa</li>
                <li>Informacion de facturacion y pago</li>
                <li>Preferencias de comunicacion</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-3">2.2 Informacion recopilada automaticamente</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Direccion IP y ubicacion geografica aproximada</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Paginas visitadas y tiempo de permanencia</li>
                <li>Datos de uso de la plataforma</li>
                <li>Cookies y tecnologias similares</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Como Usamos su Informacion</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Utilizamos la informacion recopilada para los siguientes propositos:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                <li>Procesar transacciones y enviar notificaciones relacionadas</li>
                <li>Personalizar su experiencia en la plataforma</li>
                <li>Enviar comunicaciones de marketing (con su consentimiento)</li>
                <li>Analizar el uso de la plataforma para mejorar nuestros productos</li>
                <li>Detectar y prevenir fraudes o actividades no autorizadas</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Comparticion de Datos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                No vendemos su informacion personal a terceros. Solo compartimos datos en las siguientes circunstancias:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar la plataforma (hosting, pagos, analytics)</li>
                <li><strong>Integraciones:</strong> Cuando conecta servicios de terceros (Meta, Google, WhatsApp)</li>
                <li><strong>Requisitos legales:</strong> Cuando sea requerido por ley o autoridades competentes</li>
                <li><strong>Proteccion de derechos:</strong> Para proteger nuestros derechos, privacidad, seguridad o propiedad</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Seguridad de los Datos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Implementamos medidas de seguridad tecnicas y organizativas para proteger su informacion:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Encriptacion SSL/TLS para todas las comunicaciones</li>
                <li>Almacenamiento seguro con encriptacion en reposo</li>
                <li>Acceso restringido basado en roles</li>
                <li>Auditorias de seguridad periodicas</li>
                <li>Monitoreo continuo de amenazas</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Sus Derechos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Usted tiene los siguientes derechos sobre sus datos personales:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Acceso:</strong> Solicitar una copia de sus datos personales</li>
                <li><strong>Rectificacion:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Eliminacion:</strong> Solicitar la eliminacion de sus datos</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado</li>
                <li><strong>Oposicion:</strong> Oponerse al procesamiento de sus datos</li>
                <li><strong>Limitacion:</strong> Restringir el procesamiento en ciertas circunstancias</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Para ejercer estos derechos, contactenos a <a href="mailto:privacidad@operandi.ai" className="text-violet-600 hover:underline">privacidad@operandi.ai</a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Retencion de Datos</h2>
              <p className="text-gray-600 leading-relaxed">
                Conservamos su informacion personal mientras mantenga una cuenta activa con nosotros o segun sea necesario
                para proporcionarle servicios. Tambien podemos retener informacion para cumplir con obligaciones legales,
                resolver disputas y hacer cumplir nuestros acuerdos. Los datos de uso anonimizados pueden conservarse
                indefinidamente para fines analiticos.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Transferencias Internacionales</h2>
              <p className="text-gray-600 leading-relaxed">
                Sus datos pueden ser transferidos y procesados en servidores ubicados fuera de su pais de residencia.
                Nos aseguramos de que dichas transferencias cumplan con las leyes aplicables y que se implementen
                salvaguardas adecuadas para proteger su informacion.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cambios a esta Politica</h2>
              <p className="text-gray-600 leading-relaxed">
                Podemos actualizar esta Politica de Privacidad periodicamente. Le notificaremos sobre cambios
                significativos a traves de un aviso en nuestra plataforma o por correo electronico. Le recomendamos
                revisar esta pagina regularmente para estar informado sobre como protegemos su informacion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contacto</h2>
              <p className="text-gray-600 leading-relaxed">
                Si tiene preguntas o inquietudes sobre esta Politica de Privacidad, puede contactarnos en:
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
