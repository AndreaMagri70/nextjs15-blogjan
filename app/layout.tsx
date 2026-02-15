// app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mio Blog Personale",
  description: "Benvenuti sul mio blog creato con Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={`${geist.className} antialiased bg-white text-slate-900`}>
        {/* Navbar Semplice */}
        <header className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
          <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="font-bold text-xl tracking-tight">BLOG.JS</span>
            <div className="flex gap-6 text-sm font-medium">
              <a href="#" className="hover:text-blue-600 transition">Articoli</a>
              <a href="#" className="hover:text-blue-600 transition">Chi sono</a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="border-t py-12 mt-20 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Mio Blog - Creato con Next.js
        </footer>
      </body>
    </html>
  );
}