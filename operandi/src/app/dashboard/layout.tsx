"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/lib/icons";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Icons.home },
  { name: "Leads", href: "/dashboard/leads", icon: Icons.users },
  { name: "Chatbot", href: "/dashboard/chatbot", icon: Icons.chatBubble },
  { name: "Campanas", href: "/dashboard/campanas", icon: Icons.megaphone },
  { name: "Analytics", href: "/dashboard/analytics", icon: Icons.chart },
  { name: "Configuracion", href: "/dashboard/configuracion", icon: Icons.settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-100 transform transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Operandi</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-violet-50 text-violet-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className={isActive ? "text-violet-600" : "text-gray-400"}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Upgrade Card */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl p-4 text-white">
            <div className="text-sm font-medium mb-1">Plan Starter</div>
            <div className="text-xs text-violet-200 mb-3">450/500 conversaciones usadas</div>
            <div className="w-full bg-white/20 rounded-full h-2 mb-3">
              <div className="bg-white rounded-full h-2" style={{ width: "90%" }}></div>
            </div>
            <Link href="/precios">
              <button className="w-full bg-white text-violet-700 py-2 rounded-lg text-sm font-medium hover:bg-violet-50 transition-colors">
                Actualizar Plan
              </button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8">
          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setSidebarOpen(true)}
          >
            {Icons.menu}
          </button>

          {/* Search */}
          <div className="hidden sm:flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-2 flex-1 max-w-md ml-4">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar leads, campanas..."
              className="bg-transparent outline-none text-sm flex-1"
            />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative text-gray-500 hover:text-gray-700">
              {Icons.bell}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                JD
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-medium text-gray-900">Juan Demo</div>
                <div className="text-xs text-gray-500">Starter Plan</div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
