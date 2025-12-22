"use client";

import { Icons } from "@/lib/icons";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const stats = [
  {
    title: "Leads del Mes",
    value: "1,284",
    change: "+18%",
    changeType: "positive",
    icon: Icons.users,
  },
  {
    title: "Ventas Cerradas",
    value: "$127,430",
    change: "+23%",
    changeType: "positive",
    icon: Icons.chart,
  },
  {
    title: "Conversaciones Bot",
    value: "8,492",
    change: "+42%",
    changeType: "positive",
    icon: Icons.chat,
  },
  {
    title: "Tasa de Conversion",
    value: "4.8%",
    change: "+0.8%",
    changeType: "positive",
    icon: Icons.trendingUp,
  },
];

const recentLeads = [
  { name: "Maria Garcia", email: "maria@email.com", source: "WhatsApp", status: "Nuevo", time: "Hace 5 min" },
  { name: "Carlos Lopez", email: "carlos@email.com", source: "Web", status: "Contactado", time: "Hace 15 min" },
  { name: "Ana Martinez", email: "ana@email.com", source: "Instagram", status: "Calificado", time: "Hace 1 hora" },
  { name: "Pedro Sanchez", email: "pedro@email.com", source: "Meta Ads", status: "Nuevo", time: "Hace 2 horas" },
  { name: "Laura Gomez", email: "laura@email.com", source: "WhatsApp", status: "Negociando", time: "Hace 3 horas" },
];

const recentConversations = [
  {
    name: "Usuario WhatsApp",
    message: "Hola, quiero informacion sobre el departamento de 3 ambientes",
    time: "Hace 2 min",
    unread: true,
  },
  {
    name: "Web Visitor",
    message: "Cual es el precio del producto X?",
    time: "Hace 10 min",
    unread: true,
  },
  {
    name: "Instagram DM",
    message: "Hacen envios a Cordoba?",
    time: "Hace 25 min",
    unread: false,
  },
];

const campaigns = [
  { name: "Propiedades Premium", platform: "Meta", spend: "$450", leads: 32, status: "Activa" },
  { name: "Retargeting Carritos", platform: "Google", spend: "$280", leads: 18, status: "Activa" },
  { name: "Nuevos Productos", platform: "TikTok", spend: "$120", leads: 8, status: "Pausada" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Bienvenido de nuevo, Juan</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" icon={Icons.calendar}>
            Ultimos 30 dias
          </Button>
          <Button variant="primary" size="sm" icon={Icons.plus}>
            Nuevo Lead
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} padding="md">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
                  {stat.change} vs mes anterior
                </p>
              </div>
              <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                {stat.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts and Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <Card padding="lg" className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Ventas del Mes</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-violet-100 text-violet-700 rounded-lg">Ventas</button>
              <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">Leads</button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-violet-500 to-indigo-400 rounded-t-lg transition-all hover:from-violet-600 hover:to-indigo-500"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-gray-400">
                  {["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"][i]}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Conversations */}
        <Card padding="lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Conversaciones</h2>
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">2 nuevas</span>
          </div>
          <div className="space-y-4">
            {recentConversations.map((conv, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 shrink-0">
                  {Icons.chat}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 text-sm">{conv.name}</span>
                    <span className="text-xs text-gray-400">{conv.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{conv.message}</p>
                </div>
                {conv.unread && (
                  <div className="w-2 h-2 bg-violet-600 rounded-full shrink-0 mt-2"></div>
                )}
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-sm text-violet-600 hover:text-violet-700 font-medium">
            Ver todas las conversaciones
          </button>
        </Card>
      </div>

      {/* Recent Leads and Campaigns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <Card padding="lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Leads Recientes</h2>
            <button className="text-sm text-violet-600 hover:text-violet-700 font-medium">Ver todos</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                  <th className="pb-3 font-medium">Nombre</th>
                  <th className="pb-3 font-medium">Origen</th>
                  <th className="pb-3 font-medium">Estado</th>
                  <th className="pb-3 font-medium">Tiempo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentLeads.map((lead, i) => (
                  <tr key={i} className="hover:bg-gray-50 cursor-pointer">
                    <td className="py-3">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{lead.name}</div>
                        <div className="text-xs text-gray-500">{lead.email}</div>
                      </div>
                    </td>
                    <td className="py-3 text-sm text-gray-600">{lead.source}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        lead.status === "Nuevo" ? "bg-blue-100 text-blue-700" :
                        lead.status === "Contactado" ? "bg-yellow-100 text-yellow-700" :
                        lead.status === "Calificado" ? "bg-green-100 text-green-700" :
                        "bg-purple-100 text-purple-700"
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-gray-400">{lead.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Campaigns */}
        <Card padding="lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Campanas Activas</h2>
            <button className="text-sm text-violet-600 hover:text-violet-700 font-medium">Gestionar</button>
          </div>
          <div className="space-y-4">
            {campaigns.map((campaign, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    campaign.platform === "Meta" ? "bg-blue-100 text-blue-600" :
                    campaign.platform === "Google" ? "bg-red-100 text-red-600" :
                    "bg-gray-900 text-white"
                  }`}>
                    {campaign.platform[0]}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{campaign.name}</div>
                    <div className="text-xs text-gray-500">{campaign.platform} Ads</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-900 text-sm">{campaign.spend}</div>
                  <div className="text-xs text-gray-500">{campaign.leads} leads</div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  campaign.status === "Activa" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"
                }`}>
                  {campaign.status}
                </span>
              </div>
            ))}
          </div>
          <Button variant="outline" fullWidth className="mt-4">
            Crear Nueva Campana
          </Button>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card padding="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 border-0">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white text-center sm:text-left">
            <h3 className="text-xl font-bold mb-2">Configura tu chatbot de WhatsApp</h3>
            <p className="text-violet-100">Conecta tu numero y empieza a atender clientes 24/7</p>
          </div>
          <Button variant="secondary" className="!bg-white !text-violet-700 shrink-0">
            Configurar Ahora
          </Button>
        </div>
      </Card>
    </div>
  );
}
