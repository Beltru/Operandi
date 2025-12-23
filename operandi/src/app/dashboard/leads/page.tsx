"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/lib/icons";

const leads = [
  { id: 1, name: "Maria Garcia", email: "maria@email.com", phone: "+54 11 1234-5678", source: "WhatsApp", status: "Nuevo", score: 85, createdAt: "Hace 5 min", value: "$15,000" },
  { id: 2, name: "Carlos Lopez", email: "carlos@email.com", phone: "+54 11 2345-6789", source: "Web", status: "Contactado", score: 72, createdAt: "Hace 15 min", value: "$8,500" },
  { id: 3, name: "Ana Martinez", email: "ana@email.com", phone: "+54 11 3456-7890", source: "Instagram", status: "Calificado", score: 91, createdAt: "Hace 1 hora", value: "$22,000" },
  { id: 4, name: "Pedro Sanchez", email: "pedro@email.com", phone: "+54 11 4567-8901", source: "Meta Ads", status: "Nuevo", score: 65, createdAt: "Hace 2 horas", value: "$5,200" },
  { id: 5, name: "Laura Gomez", email: "laura@email.com", phone: "+54 11 5678-9012", source: "WhatsApp", status: "Negociando", score: 88, createdAt: "Hace 3 horas", value: "$45,000" },
  { id: 6, name: "Roberto Diaz", email: "roberto@email.com", phone: "+54 11 6789-0123", source: "Google Ads", status: "Calificado", score: 78, createdAt: "Hace 5 horas", value: "$12,300" },
  { id: 7, name: "Sofia Torres", email: "sofia@email.com", phone: "+54 11 7890-1234", source: "Referido", status: "Ganado", score: 95, createdAt: "Hace 1 dia", value: "$185,000" },
  { id: 8, name: "Miguel Ruiz", email: "miguel@email.com", phone: "+54 11 8901-2345", source: "Web", status: "Perdido", score: 45, createdAt: "Hace 2 dias", value: "$0" },
];

const statusColors: Record<string, string> = {
  "Nuevo": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Contactado": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  "Calificado": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Negociando": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  "Ganado": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Perdido": "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400",
};

export default function LeadsPage() {
  const { theme } = useTheme();
  const [filter, setFilter] = useState("Todos");
  const [selectedLeads, setSelectedLeads] = useState<number[]>([]);

  const filters = ["Todos", "Nuevo", "Contactado", "Calificado", "Negociando", "Ganado", "Perdido"];

  const filteredLeads = filter === "Todos" ? leads : leads.filter(l => l.status === filter);

  const toggleSelect = (id: number) => {
    setSelectedLeads(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedLeads.length === filteredLeads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(filteredLeads.map(l => l.id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Leads</h1>
          <p className={theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}>Gestiona y da seguimiento a tus prospectos</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" icon={Icons.arrowRight}>
            Exportar
          </Button>
          <Button variant="primary" size="sm" icon={Icons.plus}>
            Nuevo Lead
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Leads", value: "1,284", change: "+18%" },
          { label: "Nuevos Hoy", value: "47", change: "+12%" },
          { label: "Tasa Conversion", value: "4.8%", change: "+0.5%" },
          { label: "Valor Pipeline", value: "$2.4M", change: "+23%" },
        ].map((stat, i) => (
          <div key={i} className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-4`}>
            <p className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>{stat.label}</p>
            <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{stat.value}</p>
            <p className="text-sm text-green-600 font-medium">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-4`}>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-violet-600 text-white"
                  : theme === 'dark'
                    ? "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={theme === 'dark' ? 'border-b border-zinc-800 bg-zinc-900' : 'border-b border-gray-200 bg-slate-50'}>
                <th className="p-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedLeads.length === filteredLeads.length && filteredLeads.length > 0}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                </th>
                <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Lead</th>
                <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Origen</th>
                <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Estado</th>
                <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Score</th>
                <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Valor</th>
                <th className={`p-4 text-left text-xs font-medium uppercase ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>Fecha</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody className={`divide-y ${theme === 'dark' ? 'divide-zinc-800' : 'divide-gray-100'}`}>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className={`${theme === 'dark' ? 'hover:bg-zinc-800/50' : 'hover:bg-gray-50'} cursor-pointer`}>
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedLeads.includes(lead.id)}
                      onChange={() => toggleSelect(lead.id)}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {lead.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className={`font-medium ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{lead.name}</div>
                        <div className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>{lead.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className={`p-4 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}`}>{lead.source}</td>
                  <td className="p-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[lead.status]}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-12 h-2 rounded-full ${theme === 'dark' ? 'bg-zinc-700' : 'bg-gray-200'}`}>
                        <div
                          className={`h-2 rounded-full ${lead.score >= 80 ? 'bg-green-500' : lead.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${lead.score}%` }}
                        />
                      </div>
                      <span className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>{lead.score}</span>
                    </div>
                  </td>
                  <td className={`p-4 font-medium ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{lead.value}</td>
                  <td className={`p-4 text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>{lead.createdAt}</td>
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

        {/* Pagination */}
        <div className={`p-4 flex items-center justify-between border-t ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'}`}>
          <p className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>
            Mostrando {filteredLeads.length} de {leads.length} leads
          </p>
          <div className="flex gap-2">
            <button className={`px-3 py-1 rounded-lg text-sm ${theme === 'dark' ? 'bg-zinc-800 text-zinc-300' : 'bg-gray-100 text-gray-600'}`}>
              Anterior
            </button>
            <button className="px-3 py-1 rounded-lg text-sm bg-violet-600 text-white">
              1
            </button>
            <button className={`px-3 py-1 rounded-lg text-sm ${theme === 'dark' ? 'bg-zinc-800 text-zinc-300' : 'bg-gray-100 text-gray-600'}`}>
              2
            </button>
            <button className={`px-3 py-1 rounded-lg text-sm ${theme === 'dark' ? 'bg-zinc-800 text-zinc-300' : 'bg-gray-100 text-gray-600'}`}>
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
