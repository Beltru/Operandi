"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/lib/icons";

type Tab = "general" | "sistema" | "integraciones" | "notificaciones" | "seguridad";

export default function ConfiguracionPage() {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<Tab>("general");
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    leads: true,
    campaigns: false,
    reports: true,
  });

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "general", label: "General", icon: Icons.settings },
    { id: "sistema", label: "Sistema", icon: Icons.sparkles },
    { id: "integraciones", label: "Integraciones", icon: Icons.grid },
    { id: "notificaciones", label: "Notificaciones", icon: Icons.bell },
    { id: "seguridad", label: "Seguridad", icon: Icons.shield },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Configuracion</h1>
        <p className={theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}>Administra las preferencias de tu cuenta</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Tabs */}
        <div className={`lg:w-64 ${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-4`}>
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === tab.id
                    ? 'bg-violet-600 text-white'
                    : theme === 'dark'
                    ? 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* General Settings */}
          {activeTab === "general" && (
            <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-6 space-y-6`}>
              <h2 className={`text-lg font-semibold ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Informacion de la Empresa</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
                    Nombre de la Empresa
                  </label>
                  <input
                    type="text"
                    defaultValue="Mi Empresa S.A."
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border-zinc-700 text-zinc-100'
                        : 'bg-white border-gray-200 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-violet-500`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
                    Email de Contacto
                  </label>
                  <input
                    type="email"
                    defaultValue="contacto@miempresa.com"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border-zinc-700 text-zinc-100'
                        : 'bg-white border-gray-200 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-violet-500`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
                    Telefono
                  </label>
                  <input
                    type="tel"
                    defaultValue="+54 11 1234-5678"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border-zinc-700 text-zinc-100'
                        : 'bg-white border-gray-200 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-violet-500`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
                    Pais
                  </label>
                  <select
                    defaultValue="AR"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark'
                        ? 'bg-zinc-800 border-zinc-700 text-zinc-100'
                        : 'bg-white border-gray-200 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-violet-500`}
                  >
                    <option value="AR">Argentina</option>
                    <option value="MX">Mexico</option>
                    <option value="CO">Colombia</option>
                    <option value="CL">Chile</option>
                    <option value="ES">Espana</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button variant="primary">Guardar Cambios</Button>
              </div>
            </div>
          )}

          {/* Sistema Settings */}
          {activeTab === "sistema" && (
            <div className="space-y-6">
              <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-6`}>
                <h2 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Apariencia</h2>

                <div className="space-y-6">
                  <div>
                    <label className={`block text-sm font-medium mb-4 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
                      Tema de la Aplicacion
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button
                        onClick={() => setTheme('light')}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          theme === 'light'
                            ? 'border-violet-600 bg-violet-50'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                            </svg>
                          </div>
                          <div className="text-left">
                            <p className="font-semibold text-gray-900">Modo Claro</p>
                            <p className="text-sm text-gray-500">Interfaz con fondo blanco</p>
                          </div>
                          {theme === 'light' && (
                            <span className="ml-auto text-violet-600">{Icons.check}</span>
                          )}
                        </div>
                      </button>

                      <button
                        onClick={() => setTheme('dark')}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          theme === 'dark'
                            ? 'border-violet-600 bg-zinc-800'
                            : 'border-zinc-700 hover:border-zinc-600 bg-zinc-900'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${theme === 'dark' ? 'bg-zinc-700' : 'bg-zinc-800'}`}>
                            <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="text-left">
                            <p className={`font-semibold ${theme === 'dark' ? 'text-zinc-100' : 'text-zinc-300'}`}>Modo Oscuro</p>
                            <p className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>Interfaz con fondo oscuro</p>
                          </div>
                          {theme === 'dark' && (
                            <span className="ml-auto text-violet-400">{Icons.check}</span>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-6`}>
                <h2 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Preferencias Regionales</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
                      Idioma
                    </label>
                    <select
                      defaultValue="es"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-zinc-100'
                          : 'bg-white border-gray-200 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-violet-500`}
                    >
                      <option value="es">Espanol</option>
                      <option value="en">English</option>
                      <option value="pt">Portugues</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
                      Zona Horaria
                    </label>
                    <select
                      defaultValue="America/Buenos_Aires"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-zinc-100'
                          : 'bg-white border-gray-200 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-violet-500`}
                    >
                      <option value="America/Buenos_Aires">Buenos Aires (GMT-3)</option>
                      <option value="America/Mexico_City">Ciudad de Mexico (GMT-6)</option>
                      <option value="America/Bogota">Bogota (GMT-5)</option>
                      <option value="Europe/Madrid">Madrid (GMT+1)</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
                      Formato de Fecha
                    </label>
                    <select
                      defaultValue="DD/MM/YYYY"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-zinc-100'
                          : 'bg-white border-gray-200 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-violet-500`}
                    >
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
                      Moneda
                    </label>
                    <select
                      defaultValue="USD"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-zinc-100'
                          : 'bg-white border-gray-200 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-violet-500`}
                    >
                      <option value="USD">USD ($)</option>
                      <option value="ARS">ARS ($)</option>
                      <option value="MXN">MXN ($)</option>
                      <option value="EUR">EUR (€)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Integraciones */}
          {activeTab === "integraciones" && (
            <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-6`}>
              <h2 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Integraciones Conectadas</h2>

              <div className="space-y-4">
                {[
                  { name: "WhatsApp Business", status: "connected", icon: "W" },
                  { name: "Meta Ads", status: "connected", icon: "M" },
                  { name: "Google Ads", status: "disconnected", icon: "G" },
                  { name: "Shopify", status: "disconnected", icon: "S" },
                  { name: "WooCommerce", status: "disconnected", icon: "W" },
                ].map((integration, i) => (
                  <div key={i} className={`flex items-center justify-between p-4 rounded-lg ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-50'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold ${
                        integration.status === 'connected'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : theme === 'dark' ? 'bg-zinc-700 text-zinc-400' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {integration.icon}
                      </div>
                      <div>
                        <p className={`font-medium ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{integration.name}</p>
                        <p className={`text-sm ${integration.status === 'connected' ? 'text-green-600' : theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>
                          {integration.status === 'connected' ? 'Conectado' : 'No conectado'}
                        </p>
                      </div>
                    </div>
                    <Button variant={integration.status === 'connected' ? 'outline' : 'primary'} size="sm">
                      {integration.status === 'connected' ? 'Desconectar' : 'Conectar'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notificaciones */}
          {activeTab === "notificaciones" && (
            <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-6`}>
              <h2 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Preferencias de Notificaciones</h2>

              <div className="space-y-6">
                {[
                  { id: "email", label: "Notificaciones por Email", description: "Recibe actualizaciones importantes en tu correo" },
                  { id: "push", label: "Notificaciones Push", description: "Alertas en tiempo real en tu navegador" },
                  { id: "leads", label: "Nuevos Leads", description: "Aviso cuando llegue un nuevo lead" },
                  { id: "campaigns", label: "Alertas de Campanas", description: "Cuando una campana necesita atencion" },
                  { id: "reports", label: "Reportes Semanales", description: "Resumen de rendimiento cada semana" },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div>
                      <p className={`font-medium ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{item.label}</p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>{item.description}</p>
                    </div>
                    <button
                      onClick={() => setNotifications({ ...notifications, [item.id]: !notifications[item.id as keyof typeof notifications] })}
                      className={`relative w-14 h-8 rounded-full transition-colors ${
                        notifications[item.id as keyof typeof notifications]
                          ? 'bg-violet-600'
                          : theme === 'dark' ? 'bg-zinc-700' : 'bg-gray-200'
                      }`}
                    >
                      <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                        notifications[item.id as keyof typeof notifications] ? 'translate-x-7' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Seguridad */}
          {activeTab === "seguridad" && (
            <div className="space-y-6">
              <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-6`}>
                <h2 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Cambiar Contrasena</h2>

                <div className="space-y-4 max-w-md">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
                      Contrasena Actual
                    </label>
                    <input
                      type="password"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-zinc-100'
                          : 'bg-white border-gray-200 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-violet-500`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
                      Nueva Contrasena
                    </label>
                    <input
                      type="password"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-zinc-100'
                          : 'bg-white border-gray-200 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-violet-500`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
                      Confirmar Nueva Contrasena
                    </label>
                    <input
                      type="password"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === 'dark'
                          ? 'bg-zinc-800 border-zinc-700 text-zinc-100'
                          : 'bg-white border-gray-200 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-violet-500`}
                    />
                  </div>
                  <Button variant="primary">Actualizar Contrasena</Button>
                </div>
              </div>

              <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-6`}>
                <h2 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Autenticacion de Dos Factores</h2>

                <div className="flex items-center justify-between">
                  <div>
                    <p className={theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}>Agrega una capa extra de seguridad a tu cuenta</p>
                    <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>Estado: No configurado</p>
                  </div>
                  <Button variant="outline">Configurar 2FA</Button>
                </div>
              </div>

              <div className={`${theme === 'dark' ? 'bg-red-900/20 border-red-900/50' : 'bg-red-50 border-red-200'} border rounded-xl p-6`}>
                <h2 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-red-400' : 'text-red-700'}`}>Zona de Peligro</h2>
                <p className={`mb-4 ${theme === 'dark' ? 'text-red-300' : 'text-red-600'}`}>
                  Una vez que elimines tu cuenta, no hay vuelta atras. Por favor, asegurate.
                </p>
                <Button variant="outline" className="!border-red-500 !text-red-500 hover:!bg-red-500 hover:!text-white">
                  Eliminar Cuenta
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
