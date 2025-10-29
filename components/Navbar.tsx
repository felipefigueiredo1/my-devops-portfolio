"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  const linkClass = (href: string) =>
    `hover:text-blue-400 ${path === href ? "text-blue-500 font-bold" : ""}`;

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <span className="font-bold text-lg">Felipe Figueiredo</span>
      <div className="space-x-4">
        <Link href="/" className={linkClass("/")}>Home</Link>
        <Link href="/experience" className={linkClass("/experience")}>Experiência</Link>
        <Link href="/projects" className={linkClass("/projects")}>Projetos</Link>
        <Link href="/contact" className={linkClass("/contact")}>Contato</Link>
      </div>
    </nav>
  );
}