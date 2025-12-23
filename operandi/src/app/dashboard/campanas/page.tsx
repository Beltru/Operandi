"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/lib/icons";

const campaigns = [
  { id: 1, name: "Propiedades Premium Palermo", platform: "Meta", status: "Activa", budget: "$1,500", spent: "$892", leads: 47, cpl: "$18.98", conversions: 8, roi: "340%", startDate: "15 Nov", endDate: "15 Dic" },
  { id: 2, name: "Retargeting Carritos Abandonados", platform: "Google", status: "Activa", budget: "$800", spent: "$456", leads: 32, cpl: "$14.25", conversions: 12, roi: "520%", startDate: "01 Dic", endDate: "31 Dic" },
  { id: 3, name: "Nuevos Departamentos Belgrano", platform: "Meta", status: "Activa", budget: "$2,000", spent: "$1,234", leads: 89, cpl: "$13.87", conversions: 15, roi: "280%", startDate: "10 Nov", endDate: "10 Dic" },
  { id: 4, name: "Black Friday E-commerce", platform: "TikTok", status: "Pausada", budget: "$500", spent: "$500", leads: 28, cpl: "$17.86", conversions: 5, roi: "180%", startDate: "24 Nov", endDate: "27 Nov" },
  { id: 5, name: "Locales Comerciales Centro", platform: "Google", status: "Activa", budget: "$1,200", spent: "$678", leads: 34, cpl: "$19.94", conversions: 6, roi: "210%", startDate: "01 Dic", endDate: "20 Dic" },
  { id: 6, name: "Temporada Navidad", platform: "Meta", status: "Programada", budget: "$3,000", spent: "$0", leads: 0, cpl: "-", conversions: 0, roi: "-", startDate: "20 Dic", endDate: "26 Dic" },
];

const platformColors: Record<string, { bg: string; text: string; icon: string }> = {
  "Meta": { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-700 dark:text-blue-400", icon: "M" },
  "Google": { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-700 dark:text-red-400", icon: "G" },
  "TikTok": { bg: "bg-gray-900 dark:bg-white", text: "text-white dark:text-gray-900", icon: "T" },
};

const statusColors: Record<string, string> = {
  "Activa": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Pausada": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  "Programada": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Finalizada": "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400",
};

export default function CampanasPage() {
  const { theme } = useTheme();
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Campanas</h1>
          <p className={theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}>Gestiona tus campanas publicitarias</p>
        </div>
        <div className="flex gap-3">
          <div className={`flex rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-100'}`}>
            <button
              onClick={() => setView("grid")}
              className={`px-3 py-2 ${view === 'grid' ? 'bg-violet-600 text-white' : theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-3 py-2 ${view === 'list' ? 'bg-violet-600 text-white' : theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <Button variant="primary" size="sm" icon={Icons.plus}>
            Nueva Campana
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Gasto Total", value: "$3,760", change: "de $9,000" },
          { label: "Leads Generados", value: "230", change: "+34% vs mes ant." },
          { label: "CPL Promedio", value: "$16.35", change: "-12% vs mes ant." },
          { label: "ROI Promedio", value: "306%", change: "+45% vs mes ant." },
        ].map((stat, i) => (
          <div key={i} className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-4`}>
            <p className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>{stat.label}</p>
            <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{stat.value}</p>
            <p className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Campaigns Grid/List */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${platformColors[campaign.platform].bg} ${platformColors[campaign.platform].text}`}>
                  {platformColors[campaign.platform].icon}
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[campaign.status]}`}>
                  {campaign.status}
                </span>
              </div>

              <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{campaign.name}</h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>{campaign.startDate} - {campaign.endDate}</p>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className={theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}>Presupuesto</span>
                  <span className={theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}>{campaign.spent} / {campaign.budget}</span>
                </div>
                <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-200'}`}>
                  <div
                    className="h-2 rounded-full bg-violet-600"
                    style={{ width: `${(parseFloat(campaign.spent.replace('$', '').replace(',', '')) / parseFloat(campaign.budget.replace('$', '').replace(',', ''))) * 100}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-zinc-800">
                <div className="text-center">
                  <p className={`text-lg font-bold ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{campaign.leads}</p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>Leads</p>
                </div>
                <div className="text-center">
                  <p className={`text-lg font-bold ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{campaign.cpl}</p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>CPL</p>
                </div>
                <div className="text-center">
                  <p className={`text-lg font-bold text-green-600`}>{campaign.roi}</p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>ROI</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl overflow-hidden`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={theme === 'dark' ? 'border-b border-zinc-800 bg-zinc-900' : 'border-b border-gray-200 bg-slate-50'}>
                  <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Campana</th>
                  <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Plataforma</th>
                  <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Estado</th>
                  <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Gastado</th>
                  <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Leads</th>
                  <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>CPL</th>
                  <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>ROI</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody className={`divide-y ${theme === 'dark' ? 'divide-zinc-800' : 'divide-gray-100'}`}>
                {campaigns.map((campaign) => (
                  <tr key={campaign.id} className={`${theme === 'dark' ? 'hover:bg-zinc-800/50' : 'hover:bg-gray-50'}`}>
                    <td className="p-4">
                      <div className={`font-medium ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{campaign.name}</div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>{campaign.startDate} - {campaign.endDate}</div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg text-sm font-medium ${platformColors[campaign.platform].bg} ${platformColors[campaign.platform].text}`}>
                        {campaign.platform}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[campaign.status]}`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}`}>{campaign.spent} / {campaign.budget}</td>
                    <td className={`p-4 font-medium ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{campaign.leads}</td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}`}>{campaign.cpl}</td>
                    <td className="p-4 font-medium text-green-600">{campaign.roi}</td>
                    <td className="p-4">
                      <button className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-zinc-700 text-zinc-400' : 'hover:bg-gray-100 text-gray-400'}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
