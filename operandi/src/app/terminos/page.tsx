import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terminos de Servicio</h1>
          <p className="text-gray-500 mb-12">Ultima actualizacion: Diciembre 2024</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptacion de los Terminos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Al acceder y utilizar la plataforma Operandi ("el Servicio"), usted acepta estar legalmente
                vinculado por estos Terminos de Servicio. Si no esta de acuerdo con alguno de estos terminos,
                no utilice el Servicio.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Estos terminos constituyen un acuerdo legal entre usted (ya sea individualmente o en nombre
                de una entidad) y Operandi.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descripcion del Servicio</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Operandi es una plataforma de automatizacion impulsada por inteligencia artificial que ofrece:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Gestion y automatizacion de campanas publicitarias</li>
                <li>Chatbots con inteligencia artificial para atencion al cliente</li>
                <li>Herramientas de gestion de leads y CRM</li>
                <li>Analiticas y reportes de rendimiento</li>
                <li>Integraciones con plataformas de terceros</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Registro y Cuenta</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-3">3.1 Requisitos de la cuenta</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Para utilizar el Servicio, debe crear una cuenta proporcionando informacion precisa y completa.
                Usted es responsable de mantener la confidencialidad de sus credenciales de acceso.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-3">3.2 Elegibilidad</h3>
              <p className="text-gray-600 leading-relaxed">
                Debe tener al menos 18 anos de edad y la capacidad legal para celebrar contratos vinculantes.
                Si utiliza el Servicio en nombre de una organizacion, declara que tiene autoridad para
                vincular a dicha organizacion.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Planes y Pagos</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-3">4.1 Suscripciones</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                El Servicio se ofrece bajo diferentes planes de suscripcion. Los precios y caracteristicas
                de cada plan estan disponibles en nuestra pagina de precios.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-3">4.2 Facturacion</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Las suscripciones se facturan por adelantado de forma mensual o anual, segun el plan elegido.
                Los cargos no son reembolsables excepto cuando se indique expresamente.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-3">4.3 Cambios de precio</h3>
              <p className="text-gray-600 leading-relaxed">
                Nos reservamos el derecho de modificar los precios con previo aviso de 30 dias. Los cambios
                de precio entraran en vigor en su proximo ciclo de facturacion.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Uso Aceptable</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Al utilizar el Servicio, usted acepta no:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Violar leyes o regulaciones aplicables</li>
                <li>Enviar spam o comunicaciones no solicitadas</li>
                <li>Distribuir malware o codigo malicioso</li>
                <li>Intentar acceder a sistemas o datos sin autorizacion</li>
                <li>Interferir con el funcionamiento del Servicio</li>
                <li>Revender o redistribuir el Servicio sin autorizacion</li>
                <li>Usar el Servicio para actividades fraudulentas o ilegales</li>
                <li>Violar derechos de propiedad intelectual de terceros</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Propiedad Intelectual</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-3">6.1 Nuestra propiedad</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Todo el contenido, diseno, codigo, marcas y materiales relacionados con el Servicio son
                propiedad de Operandi o de nuestros licenciantes y estan protegidos por leyes de propiedad
                intelectual.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-3">6.2 Su contenido</h3>
              <p className="text-gray-600 leading-relaxed">
                Usted conserva todos los derechos sobre el contenido que carga en la plataforma. Al hacerlo,
                nos otorga una licencia limitada para usar, almacenar y procesar dicho contenido con el fin
                de proporcionar el Servicio.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacidad y Datos</h2>
              <p className="text-gray-600 leading-relaxed">
                El uso del Servicio esta sujeto a nuestra Politica de Privacidad, que describe como
                recopilamos, usamos y protegemos su informacion. Al usar el Servicio, acepta el
                procesamiento de datos segun lo descrito en dicha politica.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitacion de Responsabilidad</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                En la maxima medida permitida por la ley:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>El Servicio se proporciona "tal cual" sin garantias de ningun tipo</li>
                <li>No garantizamos que el Servicio sera ininterrumpido o libre de errores</li>
                <li>No seremos responsables por danos indirectos, incidentales o consecuentes</li>
                <li>Nuestra responsabilidad total estara limitada al monto pagado por el Servicio en los ultimos 12 meses</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Indemnizacion</h2>
              <p className="text-gray-600 leading-relaxed">
                Usted acepta indemnizar y mantener indemne a Operandi, sus directores, empleados y agentes
                frente a cualquier reclamo, dano, perdida o gasto que surja de su uso del Servicio o de la
                violacion de estos terminos.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Terminacion</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Podemos suspender o terminar su acceso al Servicio en cualquier momento si:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Viola estos Terminos de Servicio</li>
                <li>No realiza los pagos correspondientes</li>
                <li>Su uso del Servicio representa un riesgo para otros usuarios o para nosotros</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Usted puede cancelar su cuenta en cualquier momento desde la configuracion de su cuenta.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modificaciones</h2>
              <p className="text-gray-600 leading-relaxed">
                Nos reservamos el derecho de modificar estos terminos en cualquier momento. Le notificaremos
                sobre cambios significativos con al menos 30 dias de anticipacion. El uso continuado del
                Servicio despues de los cambios constituye su aceptacion de los nuevos terminos.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Ley Aplicable</h2>
              <p className="text-gray-600 leading-relaxed">
                Estos terminos se regiran e interpretaran de acuerdo con las leyes de la Republica Argentina.
                Cualquier disputa sera sometida a la jurisdiccion exclusiva de los tribunales competentes
                de la Ciudad Autonoma de Buenos Aires.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contacto</h2>
              <p className="text-gray-600 leading-relaxed">
                Para preguntas sobre estos Terminos de Servicio:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-xl">
                <p className="text-gray-700"><strong>Operandi</strong></p>
                <p className="text-gray-600">Email: legal@operandi.ai</p>
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
