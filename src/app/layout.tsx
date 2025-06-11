import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PawPrint } from 'lucide-react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siyonsiyoni",
  description: "Siyonsiyoni",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        <header className="p-4 shadow">
          <nav className="flex justify-start space-x-6">
            <a href="/" >
              <PawPrint />
            </a>
            <a href="/" className="hover:underline">Judgement Game</a>
            <a href="/about" className="hover:underline">Portfolio</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="p-4 text-center">
          © 2025
        </footer>
      </body>
    </html>
  );
}