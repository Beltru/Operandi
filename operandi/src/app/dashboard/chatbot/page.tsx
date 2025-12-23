"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/lib/icons";

const conversations = [
  { id: 1, name: "Maria Garcia", phone: "+54 11 1234-5678", channel: "WhatsApp", lastMessage: "Hola, quiero info del depto de 3 amb", status: "activa", unread: 2, time: "Hace 2 min" },
  { id: 2, name: "Carlos Lopez", phone: "+54 11 2345-6789", channel: "Web", lastMessage: "Cual es el precio del producto X?", status: "activa", unread: 1, time: "Hace 10 min" },
  { id: 3, name: "Ana Martinez", phone: "+54 11 3456-7890", channel: "Instagram", lastMessage: "Gracias por la informacion!", status: "resuelta", unread: 0, time: "Hace 25 min" },
  { id: 4, name: "Pedro Sanchez", phone: "+54 11 4567-8901", channel: "WhatsApp", lastMessage: "Me interesa agendar una visita", status: "esperando", unread: 0, time: "Hace 1 hora" },
  { id: 5, name: "Laura Gomez", phone: "+54 11 5678-9012", channel: "Web", lastMessage: "Tienen envio a Cordoba?", status: "activa", unread: 3, time: "Hace 2 horas" },
];

const chatMessages = [
  { id: 1, sender: "user", message: "Hola, quiero informacion sobre el departamento de 3 ambientes que vi en Instagram", time: "10:30 AM" },
  { id: 2, sender: "bot", message: "Hola Maria! Gracias por contactarnos. Te cuento sobre el departamento de 3 ambientes en Palermo:\n\n- 85m2 cubiertos\n- 2 dormitorios + living\n- Balcon con vista\n- Cochera incluida\n\nPrecio: USD 185,000\n\nTe gustaria agendar una visita?", time: "10:30 AM" },
  { id: 3, sender: "user", message: "Si, me interesa. Tienen disponibilidad esta semana?", time: "10:32 AM" },
  { id: 4, sender: "bot", message: "Perfecto! Tenemos disponibilidad:\n\n- Martes 15:00 - 18:00\n- Miercoles 10:00 - 13:00\n- Viernes 14:00 - 17:00\n\nQue dia y horario te queda mejor?", time: "10:32 AM" },
  { id: 5, sender: "user", message: "El miercoles a las 11 me viene bien", time: "10:35 AM" },
];

const channelColors: Record<string, string> = {
  "WhatsApp": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Web": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Instagram": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
};

export default function ChatbotPage() {
  const { theme } = useTheme();
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [message, setMessage] = useState("");
  const [botEnabled, setBotEnabled] = useState(true);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>Chatbot</h1>
          <p className={theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}>Gestiona conversaciones automatizadas</p>
        </div>
        <div className="flex gap-3">
          <div className={`flex items-center gap-3 px-4 py-2 rounded-xl ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'} border ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'}`}>
            <span className={`text-sm ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}`}>Bot</span>
            <button
              onClick={() => setBotEnabled(!botEnabled)}
              className={`w-12 h-6 rounded-full transition-colors ${botEnabled ? 'bg-green-500' : theme === 'dark' ? 'bg-zinc-700' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 rounded-full bg-white shadow transform transition-transform ${botEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
          </div>
          <Button variant="primary" size="sm" icon={Icons.settings}>
            Configurar
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Conversaciones Hoy", value: "142", change: "+23%" },
          { label: "Tasa Resolucion", value: "87%", change: "+5%" },
          { label: "Tiempo Respuesta", value: "< 1 min", change: "-30s" },
          { label: "Leads Generados", value: "34", change: "+12%" },
        ].map((stat, i) => (
          <div key={i} className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl p-4`}>
            <p className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>{stat.label}</p>
            <p className={`text-2xl font-bold ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{stat.value}</p>
            <p className="text-sm text-green-600">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Chat Interface */}
      <div className={`${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-sm'} border rounded-xl overflow-hidden`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 h-[600px]">
          {/* Conversations List */}
          <div className={`border-r ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'} overflow-y-auto`}>
            <div className={`p-4 border-b ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'}`}>
              <input
                type="text"
                placeholder="Buscar conversaciones..."
                className={`w-full px-4 py-2 rounded-lg border ${theme === 'dark' ? 'bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-500' : 'bg-slate-50 border-gray-200 text-gray-900 placeholder-gray-400'} outline-none`}
              />
            </div>
            <div className="divide-y divide-gray-100 dark:divide-zinc-800">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedChat(conv)}
                  className={`p-4 cursor-pointer transition-colors ${
                    selectedChat.id === conv.id
                      ? theme === 'dark' ? 'bg-zinc-800' : 'bg-violet-50'
                      : theme === 'dark' ? 'hover:bg-zinc-800/50' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {conv.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      {conv.status === 'activa' && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-zinc-900" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className={`font-medium text-sm ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{conv.name}</span>
                        <span className={`text-xs ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-400'}`}>{conv.time}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-1.5 py-0.5 rounded ${channelColors[conv.channel]}`}>{conv.channel}</span>
                      </div>
                      <p className={`text-sm truncate mt-1 ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>{conv.lastMessage}</p>
                    </div>
                    {conv.unread > 0 && (
                      <span className="w-5 h-5 bg-violet-600 rounded-full text-white text-xs flex items-center justify-center">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2 flex flex-col">
            {/* Chat Header */}
            <div className={`p-4 border-b ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'} flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {selectedChat.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className={`font-medium ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'}`}>{selectedChat.name}</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-500'}`}>{selectedChat.phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-zinc-800 text-zinc-400' : 'hover:bg-gray-100 text-gray-400'}`}>
                  {Icons.phone}
                </button>
                <button className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-zinc-800 text-zinc-400' : 'hover:bg-gray-100 text-gray-400'}`}>
                  {Icons.users}
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${theme === 'dark' ? 'bg-zinc-950' : 'bg-slate-100'}`}>
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] rounded-2xl p-4 ${
                    msg.sender === 'user'
                      ? 'bg-violet-600 text-white rounded-br-sm'
                      : theme === 'dark' ? 'bg-zinc-800 text-zinc-100 rounded-bl-sm' : 'bg-white text-gray-900 rounded-bl-sm shadow-sm'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{msg.message}</p>
                    <p className={`text-xs mt-2 ${msg.sender === 'user' ? 'text-violet-200' : theme === 'dark' ? 'text-zinc-500' : 'text-gray-400'}`}>
                      {msg.time} {msg.sender === 'bot' && '• Bot'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className={`p-4 border-t ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'}`}>
              <div className="flex items-center gap-3">
                <button className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-zinc-800 text-zinc-400' : 'hover:bg-gray-100 text-gray-400'}`}>
                  {Icons.plus}
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe un mensaje..."
                  className={`flex-1 px-4 py-2 rounded-xl border ${theme === 'dark' ? 'bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'} outline-none`}
                />
                <Button variant="primary" size="sm">
                  Enviar
                </Button>
              </div>
              <p className={`text-xs mt-2 ${theme === 'dark' ? 'text-zinc-500' : 'text-gray-400'}`}>
                {botEnabled ? 'El bot esta respondiendo automaticamente' : 'Bot desactivado - modo manual'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
