"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Icons } from "@/lib/icons";

const timeRanges = ["7 dias", "30 dias", "90 dias", "Este ano"];

const overviewStats = [
  { label: "Ingresos Totales", value: "$45,230", change: "+12.5%", positive: true, icon: Icons.dollar },
  { label: "Leads Generados", value: "1,847", change: "+23.1%", positive: true, icon: Icons.users },
  { label: "Tasa de Conversion", value: "4.2%", change: "+0.8%", positive: true, icon: Icons.trendingUp },
  { label: "Costo por Lead", value: "$15.40", change: "-8.3%", positive: true, icon: Icons.target },
];

const channelData = [
  { name: "Meta Ads", leads: 892, spent: "$12,340", cpl: "$13.83", conversion: "4.8%", revenue: "$28,450" },
  { name: "Google Ads", leads: 567, spent: "$8,920", cpl: "$15.73", conversion: "3.9%", revenue: "$15,230" },
  { name: "WhatsApp", leads: 234, spent: "$0", cpl: "$0", conversion: "8.2%", revenue: "$8,940" },
  { name: "Organico", leads: 154, spent: "$0", cpl: "$0", conversion: "6.1%", revenue: "$5,610" },
];

const topCampaigns = [
  { name: "Propiedades Premium Palermo", leads: 89, revenue: "$12,450", roi: "340%" },
  { name: "Retargeting Carritos", leads: 67, revenue: "$8,920", roi: "520%" },
  { name: "Nuevos Departamentos", leads: 54, revenue: "$7,230", roi: "280%" },
  { name: "Black Friday", leads: 45, revenue: "$5,670", roi: "180%" },
];

const recentActivity = [
  { type: "lead", message: "Nuevo lead desde Meta Ads", time: "Hace 5 min" },
  { type: "conversion", message: "Lead convertido: Maria Garcia", time: "Hace 15 min" },
  { type: "campaign", message: "Campana 'Navidad' activada", time: "Hace 1 hora" },
  { type: "alert", message: "CPL alto en campana Google", time: "Hace 2 horas" },
  { type: "lead", message: "5 nuevos leads desde WhatsApp", time: "Hace 3 horas" },
];

export default function AnalyticsPage() {
  const { theme } = useTheme();
  const [selectedRange, setSelectedRange] = useState("30 dias");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Analytics</h1>
          <p className={theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}>Metricas y rendimiento de tu negocio</p>
        </div>
        <div className="flex gap-2">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setSelectedRange(range)}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                selectedRange === range
                  ? 'bg-violet-600 text-white'
                  : theme === 'dark'
                  ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewStats.map((stat, i) => (
          <div key={i} className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-6`}>
            <div className="flex items-center justify-between mb-4">
              <span className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-zinc-800 text-violet-400' : 'bg-violet-100 text-violet-600'}`}>
                {stat.icon}
              </span>
              <span className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <p className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>{stat.label}</p>
            <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-6`}>
          <h3 className={`font-semibold mb-6 ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Ingresos por Mes</h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {[35, 45, 40, 55, 65, 50, 70, 80, 75, 90, 85, 95].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-violet-600 to-indigo-500 rounded-t-lg transition-all hover:from-violet-500 hover:to-indigo-400"
                  style={{ height: `${height}%` }}
                />
                <span className={`text-xs ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-400'}`}>
                  {['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Leads Chart */}
        <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-6`}>
          <h3 className={`font-semibold mb-6 ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Leads por Canal</h3>
          <div className="space-y-4">
            {[
              { name: "Meta Ads", value: 48, color: "bg-blue-500" },
              { name: "Google Ads", value: 31, color: "bg-red-500" },
              { name: "WhatsApp", value: 13, color: "bg-green-500" },
              { name: "Organico", value: 8, color: "bg-purple-500" },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className={theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}>{item.name}</span>
                  <span className={theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}>{item.value}%</span>
                </div>
                <div className={`w-full h-3 rounded-full ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-100'}`}>
                  <div
                    className={`h-3 rounded-full ${item.color}`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Channel Performance Table */}
      <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl overflow-hidden`}>
        <div className={`p-6 border-b ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'}`}>
          <h3 className={`font-semibold ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Rendimiento por Canal</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`${theme === 'dark' ? 'border-b border-zinc-800 bg-zinc-800/50' : 'border-b border-gray-200 bg-slate-50'}`}>
                <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Canal</th>
                <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Leads</th>
                <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Gastado</th>
                <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>CPL</th>
                <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Conversion</th>
                <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Ingresos</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${theme === 'dark' ? 'divide-zinc-800' : 'divide-gray-100'}`}>
              {channelData.map((channel, i) => (
                <tr key={i} className={theme === 'dark' ? 'hover:bg-zinc-800/50' : 'hover:bg-gray-50'}>
                  <td className={`p-4 font-medium ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{channel.name}</td>
                  <td className={`p-4 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}`}>{channel.leads}</td>
                  <td className={`p-4 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}`}>{channel.spent}</td>
                  <td className={`p-4 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}`}>{channel.cpl}</td>
                  <td className={`p-4 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}`}>{channel.conversion}</td>
                  <td className="p-4 font-medium text-green-600">{channel.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Campaigns */}
        <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-6`}>
          <h3 className={`font-semibold mb-6 ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Top Campanas</h3>
          <div className="space-y-4">
            {topCampaigns.map((campaign, i) => (
              <div key={i} className={`flex items-center justify-between p-4 rounded-lg ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-50'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    i === 0 ? 'bg-yellow-100 text-yellow-700' :
                    i === 1 ? 'bg-gray-100 text-gray-600' :
                    i === 2 ? 'bg-orange-100 text-orange-700' :
                    'bg-violet-100 text-violet-600'
                  }`}>
                    {i + 1}
                  </div>
                  <div>
                    <p className={`font-medium ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{campaign.name}</p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>{campaign.leads} leads</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">{campaign.revenue}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>ROI: {campaign.roi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-6`}>
          <h3 className={`font-semibold mb-6 ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Actividad Reciente</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.type === 'lead' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                  activity.type === 'conversion' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                  activity.type === 'campaign' ? 'bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400' :
                  'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
                }`}>
                  {activity.type === 'lead' ? Icons.users :
                   activity.type === 'conversion' ? Icons.check :
                   activity.type === 'campaign' ? Icons.megaphone :
                   Icons.warning}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-medium ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{activity.message}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
