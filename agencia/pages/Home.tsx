import React, { useState } from 'react';

// Constants
const CALENDLY_URL = 'https://calendly.com/operandi/nueva-reunion';
const WHATSAPP_NUMBER = '5491158008902';
const WHATSAPP_MESSAGE = encodeURIComponent('Hola! Me interesa saber más sobre los servicios de automatización de Operandi.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const Home: React.FC = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Features for carousel
const features = [
    {
      title: 'WhatsApp Intelligent Agent',
      subtitle: 'Ventas y Atención 24/7',
      description: 'Convertimos tu WhatsApp Business en una máquina de atención autónoma. Clasificación de leads, respuestas instantáneas y gestión de turnos sin intervención humana.',
      color: 'bg-emerald-100',
      accent: 'text-emerald-600',
      metrics: [
        { label: 'Disponibilidad', value: '24/7', description: 'Sin feriados ni vacaciones' },
        { label: 'Tiempo de respuesta', value: '< 30 seg', description: 'Respuesta automática instantánea' },
        { label: 'Capacidad', value: '∞', description: 'Conversaciones simultáneas ilimitadas' }
      ]
    },
    {
      title: 'Reputación Local AI',
      subtitle: 'Dominio de Google My Business',
      description: 'Gestión automatizada de reseñas con IA. Respondemos cada comentario con enfoque en SEO local para escalar posiciones en Google Maps y atraer más clientes físicos.',
      color: 'bg-purple-100',
      accent: 'text-purple-600',
      metrics: [
        { label: 'Boost SEO Local', value: '+40%', description: 'Mejora en ranking de Maps' },
        { label: 'Engagement', value: '100%', description: 'Todas las reseñas respondidas' },
        { label: 'Tiempo ahorrado', value: '15h/mes', description: 'Gestión automatizada completa' }
      ]
    },
    {
      title: 'Prospección Automática',
      subtitle: 'Maquinaria de Prospección B2B',
      description: 'Llenamos tu agenda de reuniones calificadas. Nuestro motor identifica, califica y contacta prospectos con mensajes hiper-personalizados que generan respuestas reales.',
      color: 'bg-blue-100',
      accent: 'text-blue-600',
      metrics: [
        { label: 'Tasa de respuesta', value: '25-35%', description: 'vs 2-5% del outreach tradicional' },
        { label: 'Precisión', value: '90%', description: 'Leads calificados automáticamente' },
        { label: 'Escalabilidad', value: '500+', description: 'Contactos personalizados por día' }
      ]
    },
    {
      title: 'Revenue Recovery',
      subtitle: 'Recuperación de Pagos Fallidos',
      description: 'No pierdas ni un centavo por fricciones en el checkout. Detectamos rechazos de pagos en tiempo real y actuamos con flujos de recuperación para rescatar tu facturación.',
      color: 'bg-red-100',
      accent: 'text-red-600',
      metrics: [
        { label: 'Recuperación promedio', value: '40-60%', description: 'De pagos inicialmente rechazados' },
        { label: 'Tiempo de acción', value: '< 1 min', description: 'Detección y contacto automático' },
        { label: 'ROI directo', value: '$$$', description: 'Facturación que se iba a perder' }
      ]
    }
  ];

  // SVG Icons as components
  const icons = {
    cart: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    bot: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    package: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    creditCard: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    gift: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    star: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    chart: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    link: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    message: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    headphones: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    bolt: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    user: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    )
  };

  // Use cases with SVG icons
  const useCases = [
    { icon: 'headphones', title: 'Atención al cliente 24/7', desc: 'Respuestas automáticas inteligentes' },
    { icon: 'bolt', title: 'Calificación de leads', desc: 'Filtrado automático de oportunidades' },
    { icon: 'message', title: 'Seguimiento de clientes', desc: 'Mensajes personalizados y recordatorios' },
    { icon: 'cart', title: 'Recuperación de ventas', desc: 'Carritos, citas y oportunidades perdidas' },
    { icon: 'user', title: 'Onboarding automatizado', desc: 'Bienvenida y capacitación de clientes' },
    { icon: 'package', title: 'Gestión de operaciones', desc: 'Actualizaciones de estado automáticas' },
    { icon: 'chart', title: 'Reportes y análisis', desc: 'Dashboard personalizado de métricas' },
    { icon: 'link', title: 'Integraciones a medida', desc: 'Conectamos con tus herramientas' }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: 'Redujimos el tiempo de respuesta de 4 horas a 30 segundos. Nuestros clientes están más felices.',
      author: 'Francisco Rodriguez Moyano',
      role: 'CEO',
      company: 'RMA'
    },
    {
      quote: 'La IA califica leads automáticamente. Nuestro equipo comercial solo habla con oportunidades reales.',
      author: 'Alejandra Daniel',
      role: 'Director Comercial',
      company: 'JRA (Justicia Restaurativa Argentina)'
    },
    {
      quote: 'Automatizamos el onboarding de clientes. Lo que tomaba 2 semanas ahora toma 2 días.',
      author: 'Diego Correa',
      role: 'Productor de Seguros',
      company: ''
    }
  ];

  return (
    <div className="bg-white text-gray-900 font-display overflow-x-hidden">
      {/* Navigation - Notion style */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo-sin-fondo-negro.png" alt="Operandi" className="h-8 w-auto" />
              <span className="text-xl font-bold">Operandi</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <button
                onClick={() => document.getElementById('automatizaciones')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Soluciones
              </button>
              <button
                onClick={() => document.getElementById('proceso')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Cómo Funciona
              </button>
              <button
                onClick={() => document.getElementById('casos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Casos de Éxito
              </button>
              <button
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                FAQ
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contacto
              </a>
              <button
                onClick={() => setCalendlyOpen(true)}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
              >
                Agendar auditoría →
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in-up">
              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => { document.getElementById('automatizaciones')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg text-left"
                >
                  Soluciones
                </button>
                <button
                  onClick={() => { document.getElementById('proceso')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg text-left"
                >
                  Cómo Funciona
                </button>
                <button
                  onClick={() => { document.getElementById('casos')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg text-left"
                >
                  Casos de Éxito
                </button>
                <button
                  onClick={() => { document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                  className="px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg text-left"
                >
                  FAQ
                </button>
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <button
                    onClick={() => { setCalendlyOpen(true); setMobileMenuOpen(false); }}
                    className="w-full px-5 py-3 text-base font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    Agendar auditoría →
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section - Full Screen */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-white to-white pointer-events-none" />

          <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Agencia de Automatización con IA
              </div>

              {/* Main headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                Tu negocio.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-purple-600">
                  Cero trabajo manual.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Analizamos tus procesos, identificamos fricciones y construimos automatizaciones de IA a medida.
                <strong className="text-gray-900"> Vos enfocate en crecer.</strong>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setCalendlyOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-all hover:scale-105 shadow-lg shadow-gray-900/20"
                >
                  Agendar auditoría gratis →
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 rounded-xl transition-all hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escribinos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof - Logo Section */}
        <section className="py-16 border-y border-gray-100 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <p className="text-center text-sm font-medium text-gray-500 mb-8">
              NOS ADAPTAMOS A TUS HERRAMIENTAS
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {[
                { name: 'TiendaNube', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg> },
                { name: 'Shopify', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" /></svg> },
                { name: 'Mercado Libre', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg> },
                { name: 'WhatsApp Business', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg> },
                { name: 'Mercado Pago', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-lg">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Carousel Section - Notion 3.0 style */}
        <section id="automatizaciones" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Soluciones que se adaptan a vos
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Cada negocio es único. Analizamos tu operación y diseñamos automatizaciones personalizadas para tu caso específico.
              </p>
            </div>

            {/* Feature Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {features.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeFeature === idx
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {feature.title}
                </button>
              ))}
            </div>

            {/* Active Feature Card */}
            <div className={`rounded-3xl p-8 lg:p-12 ${features[activeFeature].color} transition-all duration-500`}>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${features[activeFeature].accent}`}>
                    {features[activeFeature].subtitle}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    {features[activeFeature].description}
                  </p>
                  <button
                    onClick={() => setCalendlyOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    Implementar esto
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
                <div className="rounded-2xl bg-white/80 border border-white shadow-lg p-8">
                  <h4 className={`${features[activeFeature].accent} font-bold text-xl mb-6`}>Impacto Directo</h4>
                  <div className="space-y-6">
                    {features[activeFeature].metrics.map((metric, idx) => (
                      <div key={idx} className="border-l-4 border-gray-900 pl-4">
                        <div className="text-4xl font-bold text-gray-900 mb-1">{metric.value}</div>
                        <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">{metric.label}</div>
                        <div className="text-sm text-gray-600">{metric.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition - Cost Comparison */}
        <section id="proceso" className="py-24 lg:py-32 border-y border-gray-100 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Más productividad.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Menos herramientas.
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  En vez de contratar más equipo o pagar múltiples herramientas, diseñamos una solución de automatización personalizada que se integra con tus sistemas existentes.
                </p>
                <div className="space-y-4">
                  {[
                    'Auditoría gratuita de tu negocio',
                    'Solución 100% personalizada',
                    'Sin contratos largos',
                    'ROI medible desde el día 1'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-100 rounded-3xl p-8 lg:p-10">
                {/* Cost comparison placeholder */}
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-500 mb-4">COMPARACIÓN DE COSTOS</p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                      <span className="text-gray-600">Empleado de soporte</span>
                      <span className="font-bold text-gray-900">$400/mes</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                      <span className="text-gray-600">Tool de email marketing</span>
                      <span className="font-bold text-gray-900">$100/mes</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                      <span className="text-gray-600">Chatbot genérico</span>
                      <span className="font-bold text-gray-900">$80/mes</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                      <span className="text-gray-600">CRM básico</span>
                      <span className="font-bold text-gray-900">$50/mes</span>
                    </div>
                    <div className="border-t-2 border-dashed border-gray-300 my-4" />
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white">
                      <span className="font-medium">Operandi (todo incluido)</span>
                      <span className="font-bold">Personalizado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="casos" className="py-24 lg:py-32 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-xl text-gray-400">
                Resultados reales de empresas en Argentina
              </p>
            </div>

            {/* Featured testimonial */}
            <div className="bg-gray-800 rounded-3xl p-8 lg:p-12 mb-8 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Giant Metric - Left Side */}
                <div className="flex flex-col items-center justify-center text-center lg:border-r lg:border-gray-700 lg:pr-8">
                  <div className="relative">
                    {/* Decorative background circle */}
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-3xl scale-150"></div>
                    {/* Main metric */}
                    <div className="relative">
                      <div className="text-7xl lg:text-8xl font-bold text-emerald-400 mb-4">-15h</div>
                      <div className="text-xl lg:text-2xl font-semibold text-gray-300 mb-2">/semana</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm lg:text-base mt-4 max-w-xs">
                    Trabajo manual eliminado automáticamente
                  </p>
                </div>
                
                {/* Testimonial - Right Side */}
                <div>
                  <blockquote className="text-2xl lg:text-3xl font-medium mb-6 leading-relaxed">
                    "La automatización eliminó <span className="text-emerald-400 font-bold">15 horas semanales</span> de trabajo manual. Ahora nuestro equipo se enfoca en lo que realmente importa."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-gray-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Tomas Aguinaga</p>
                      <p className="text-gray-400">CEO de Southdev</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other testimonials */}
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-gray-800 rounded-2xl p-6">
                  <blockquote className="text-lg mb-6">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-gray-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Todo lo que podés automatizar
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estos son solo algunos ejemplos. Nos especializamos en analizar tu negocio y diseñar <span className="text-gray-900 font-semibold">soluciones a medida</span> para tu industria, sin importar el nicho.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-200 transition-all cursor-pointer"
                >
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gray-200 group-hover:bg-primary/10 flex items-center justify-center text-gray-600 group-hover:text-primary transition-colors">
                    {icons[useCase.icon as keyof typeof icons]}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{useCase.title}</h3>
                  <p className="text-sm text-gray-500">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Preguntas frecuentes
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: '¿Cómo funciona la auditoría gratuita?',
                  a: 'Agendás una llamada de 30 minutos donde analizamos tu operación: procesos, herramientas, fricciones y oportunidades de automatización. Con esa info, armamos una propuesta personalizada.'
                },
                {
                  q: '¿Cuánto cuesta?',
                  a: 'Depende de tu negocio y de cuántos flujos necesites. Por eso hacemos la auditoría primero. No tenemos paquetes genéricos.'
                },
                {
                  q: '¿Cuánto tarda la implementación?',
                  a: 'La mayoría de las implementaciones están funcionando en menos de 7 días. Nosotros hacemos todo lo técnico.'
                },
                {
                  q: '¿Trabajan con cualquier industria?',
                  a: 'Sí. Hemos trabajado con e-commerce, servicios profesionales, salud, ventas, atención al cliente y más. Nuestro equipo se especializa en entender tu industria y adaptarse a tus necesidades específicas.'
                },
                {
                  q: '¿Necesito conocimientos técnicos?',
                  a: 'No. Nosotros nos encargamos de toda la parte técnica: integraciones, configuración, entrenamiento de la IA. Vos solo aprobás y ves los resultados.'
                }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-2xl border border-gray-200">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-gray-900">{faq.q}</span>
                    <span className="ml-4 text-gray-400 group-open:rotate-45 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              ¿Listo para automatizar
              <br />
              tu negocio?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Agendá una auditoría gratuita de 30 minutos. Analizamos tus procesos y te mostramos exactamente qué podemos automatizar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setCalendlyOpen(true)}
                className="w-full sm:w-auto px-10 py-5 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-xl transition-all hover:scale-105 shadow-xl"
              >
                Agendar auditoría gratis →
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 text-lg font-semibold text-white border-2 border-white/30 hover:border-white/50 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Escribinos por WhatsApp
              </a>
            </div>
            <p className="mt-8 text-gray-500 text-sm">
              Sin costo. Sin compromiso. Solo queremos entender tu negocio.
            </p>
          </div>
        </section>
      </main>

      {/* Footer - Notion style multi-column */}
      {/* Footer - Minimal Style */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          {/* Identity */}
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo-sin-fondo-negro.png" alt="Operandi" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900">Operandi</span>
          </div>

          {/* Description */}
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            Agencia de automatización con IA para empresas. 
            Transformamos procesos manuales en sistemas autónomos.
          </p>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Operandi. Hecho con IA en Argentina.
          </p>
        </div>
      </footer>

      {/* Calendly Modal */}
      {calendlyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setCalendlyOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[90vh] max-h-[700px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img src="/logo-sin-fondo-negro.png" alt="Operandi" className="h-8 w-auto" />
                <div>
                  <span className="font-bold text-gray-900 block">Agendar Auditoría Gratuita</span>
                  <span className="text-xs text-gray-500">30 min - Analizamos tu negocio</span>
                </div>
              </div>
              <button
                onClick={() => setCalendlyOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Calendly Embed */}
            <iframe
              src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=111827&primary_color=111827`}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Agendar auditoría con Operandi"
              style={{ height: 'calc(100% - 73px)' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
