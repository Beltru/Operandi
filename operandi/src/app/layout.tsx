import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Operandi | IA que transforma tu negocio",
  description: "Automatiza tu publicidad, gestiona ventas y atiende clientes 24/7 con IA. La solucion completa para inmobiliarias y e-commerce.",
  keywords: ["IA", "inteligencia artificial", "chatbot", "inmobiliaria", "e-commerce", "ventas", "publicidad", "automatizacion"],
  openGraph: {
    title: "Operandi | IA que transforma tu negocio",
    description: "Automatiza tu publicidad, gestiona ventas y atiende clientes 24/7 con IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
