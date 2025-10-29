import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Felipe Figueiredo | DevOps Engineer / SRE",
  description: "Portfolio profissional de Felipe Figueiredo - DevOps Engineer e SRE especializado em automação, infraestrutura em nuvem, CI/CD e desenvolvimento backend.",
  keywords: "DevOps, SRE, AWS, Docker, Terraform, Ansible, CI/CD, PHP, Python, JavaScript, Linux",
  authors: [{ name: "Felipe Figueiredo" }],
  openGraph: {
    title: "Felipe Figueiredo | DevOps Engineer / SRE",
    description: "Portfolio profissional de Felipe Figueiredo - DevOps Engineer e SRE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}