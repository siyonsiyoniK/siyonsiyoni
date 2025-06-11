import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PawPrint } from 'lucide-react';
import Link from "next/link";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
            <Link href="/" >
              <PawPrint />
            </Link>
            <Link href="/" className="hover:underline">Judgement Game</Link>
            <Link href="/about" className="hover:underline">Portfolio</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
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