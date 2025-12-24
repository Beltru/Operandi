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
      title: 'Recuperación de Carritos',
      subtitle: 'Recuperá ventas perdidas automáticamente',
      description: 'Detectamos carritos abandonados y enviamos mensajes personalizados por WhatsApp en el momento justo.',
      color: 'bg-emerald-100',
      accent: 'text-emerald-600'
    },
    {
      title: 'Bot de Mercado Libre',
      subtitle: 'Vendé 24/7 sin intervención',
      description: 'IA que responde preguntas de clientes en segundos, consulta stock y cierra ventas mientras dormís.',
      color: 'bg-purple-100',
      accent: 'text-purple-600'
    },
    {
      title: 'Seguimiento Logístico',
      subtitle: 'Eliminá tickets de "¿Dónde está mi pedido?"',
      description: 'Respuestas automáticas con el estado real del envío directo desde Mercado Envíos o Andreani.',
      color: 'bg-blue-100',
      accent: 'text-blue-600'
    },
    {
      title: 'Pagos Fallidos',
      subtitle: 'Recuperá ventas por problemas de pago',
      description: 'Detectamos rechazos, explicamos el problema al cliente y ofrecemos alternativas de pago.',
      color: 'bg-red-100',
      accent: 'text-red-600'
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
    { icon: 'cart', title: 'Recuperar carritos abandonados', desc: 'WhatsApp automático a los 30 min' },
    { icon: 'bot', title: 'Responder preguntas 24/7', desc: 'Bot de IA para Mercado Libre' },
    { icon: 'package', title: 'Informar estado de envíos', desc: 'Tracking automático por WhatsApp' },
    { icon: 'creditCard', title: 'Recuperar pagos fallidos', desc: 'Mensajes con alternativas de pago' },
    { icon: 'gift', title: 'Fidelizar post-compra', desc: 'Bienvenida + cupón de recompra' },
    { icon: 'star', title: 'Conseguir más reseñas', desc: 'Solicitud automática a los 7 días' },
    { icon: 'chart', title: 'Analizar fricciones', desc: 'Auditoría personalizada de tu tienda' },
    { icon: 'link', title: 'Integrar plataformas', desc: 'TiendaNube, Shopify, ML, WhatsApp' }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: 'Recuperamos $47,000 en el primer mes solo con el flujo de carritos abandonados.',
      author: 'María González',
      role: 'Fundadora',
      company: 'Tienda de Moda BA'
    },
    {
      quote: 'El bot de Mercado Libre responde en segundos. Antes tardábamos horas.',
      author: 'Carlos Ruiz',
      role: 'E-commerce Manager',
      company: 'ElectroStore'
    },
    {
      quote: 'Reducimos un 60% los tickets de soporte automatizando el tracking.',
      author: 'Laura Méndez',
      role: 'CEO',
      company: 'HomeDecor AR'
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
              <a href="#automatizaciones" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                Soluciones
              </a>
              <a href="#proceso" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                Cómo Funciona
              </a>
              <a href="#casos" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                Casos de Éxito
              </a>
              <a href="#faq" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                FAQ
              </a>
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
                <a href="#automatizaciones" className="px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg">
                  Soluciones
                </a>
                <a href="#proceso" className="px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg">
                  Cómo Funciona
                </a>
                <a href="#casos" className="px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg">
                  Casos de Éxito
                </a>
                <a href="#faq" className="px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg">
                  FAQ
                </a>
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
        {/* Hero Section - Notion style */}
        <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-white to-white pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
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
                Un e-commerce.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-purple-600">
                  Cero trabajo manual.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Automatizamos los procesos que te roban tiempo: carritos abandonados, preguntas repetitivas, seguimiento de envíos.
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

            {/* Hero Image/Video Placeholder */}
            <div className="mt-16 lg:mt-20 relative">
              <div className="aspect-video max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 shadow-2xl overflow-hidden">
                {/* Placeholder for video/image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 font-medium">Video demo del producto</p>
                    <p className="text-gray-400 text-sm mt-1">Placeholder para video explicativo</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-60" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60" />
            </div>
          </div>
        </section>

        {/* Social Proof - Logo Section */}
        <section className="py-16 border-y border-gray-100 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <p className="text-center text-sm font-medium text-gray-500 mb-8">
              INTEGRAMOS CON LAS PLATAFORMAS MÁS USADAS
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
                Automatizaciones que ya funcionan
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Flujos probados en e-commerces reales de Argentina. Implementamos los que más impacto tengan en tu negocio.
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
                <div className="aspect-square rounded-2xl bg-white/50 border border-white/80 shadow-lg flex items-center justify-center">
                  {/* Placeholder for feature illustration */}
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-white shadow-lg flex items-center justify-center text-gray-600">
                      {[icons.cart, icons.bot, icons.package, icons.creditCard][activeFeature]}
                    </div>
                    <p className="text-gray-500 font-medium">Ilustración del flujo</p>
                    <p className="text-gray-400 text-sm mt-1">Placeholder para animación</p>
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
                  En vez de contratar más gente o pagar 5 herramientas diferentes, automatizamos todo en un solo lugar. Una solución, diseñada para tu negocio.
                </p>
                <div className="space-y-4">
                  {[
                    'Auditoría gratuita de tu e-commerce',
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
                Resultados reales de e-commerces en Argentina
              </p>
            </div>

            {/* Featured testimonial */}
            <div className="bg-gray-800 rounded-3xl p-8 lg:p-12 mb-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  {/* Video placeholder */}
                  <div className="aspect-video rounded-2xl bg-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-gray-400">Video testimonial</p>
                      <p className="text-gray-500 text-sm">Placeholder</p>
                    </div>
                  </div>
                </div>
                <div>
                  <blockquote className="text-2xl lg:text-3xl font-medium mb-6">
                    "Recuperamos más de $140,000 en 6 meses solo con el flujo de carritos abandonados. El ROI fue inmediato."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-gray-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Cliente Destacado</p>
                      <p className="text-gray-400">E-commerce de Moda</p>
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
                      <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
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
              <p className="text-xl text-gray-600">
                Cada e-commerce es diferente. Elegimos los flujos que más impacto tengan en tu caso.
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
                  a: 'Agendás una llamada de 30 minutos donde analizamos tu negocio: plataformas, volumen, fricciones. Con esa info, armamos una propuesta personalizada.'
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
                  q: '¿Cuánto puedo recuperar en ventas perdidas?',
                  a: 'Depende de tu volumen, pero nuestros clientes recuperan en promedio entre $30,000 y $150,000 mensuales solo con el flujo de carritos abandonados. En la auditoría te damos un estimado para tu caso.'
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
              tu e-commerce?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Agendá una auditoría gratuita de 30 minutos. Analizamos tu negocio y te mostramos exactamente qué podemos automatizar.
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
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand column */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo-sin-fondo-negro.png" alt="Operandi" className="h-8 w-auto" />
                <span className="text-xl font-bold">Operandi</span>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                Agencia de automatización con IA para e-commerce.
              </p>
              <div className="flex items-center gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a href="mailto:hola@operandi.ai" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Soluciones */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Soluciones</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Recuperación de Carritos</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Bot Mercado Libre</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Tracking Logístico</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Pagos Fallidos</a></li>
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Recursos</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Casos de Éxito</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Documentación</a></li>
              </ul>
            </div>

            {/* Integraciones */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Integraciones</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">TiendaNube</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Shopify</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Mercado Libre</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">WhatsApp Business</a></li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Empresa</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Términos</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 Operandi. Hecho con IA en Argentina.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <span>Español (Argentina)</span>
            </div>
          </div>
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
                  <span className="text-xs text-gray-500">30 min - Analizamos tu e-commerce</span>
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
