// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/general/Navbar";
import { AuthProvider } from "@/components/general/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mio Blog Personale",
  description: "Benvenuti sul mio blog creato con Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang="it">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased
      bg-white text-slate-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* Navbar Semplice */}
        <header className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
          <Navbar />
        </header>

        <main>{children}</main>

        <footer className="border-t py-12 mt-20 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Mio Blog - Creato con Next.js
        </footer>
      </body>
    </html>
    </AuthProvider>
  );
}