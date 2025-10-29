import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Felipe Figueiredo | DevOps Engineer",
  description: "Portfolio profissional DevOps Engineer / SRE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="min-h-screen container mx-auto p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}