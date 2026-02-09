"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/libro", label: "El libro" },
  { href: "/#newsletter", label: "Newsletter" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#ece8e1]/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-black/10">
          <Link
            href="/"
            className="text-[0.6875rem] uppercase tracking-[0.15em] font-medium"
          >
            Federico Giobergia
          </Link>

          <div className="hidden md:flex items-center gap-12">
            <span className="text-[0.6875rem] uppercase tracking-[0.15em] text-stone-500">
              Escritor
            </span>
            <span className="text-[0.6875rem] uppercase tracking-[0.15em] text-stone-500">
              Santa Fe, Argentina
            </span>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[0.6875rem] uppercase tracking-[0.15em] font-medium hover:text-stone-600 transition-colors cursor-pointer"
          >
            {menuOpen ? "Cerrar" : "Menú"}
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1a1a1a] flex flex-col justify-center px-6 md:px-12 pt-16">
          <nav className="flex flex-col gap-3 md:gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase text-white hover:text-stone-400 transition-colors leading-[0.9]"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 flex justify-between text-[0.6875rem] uppercase tracking-[0.15em] text-stone-500">
            <span>Federico Giobergia &copy; 2026</span>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/fedegiobergia" className="hover:text-white transition-colors">
                IG
              </a>
              <a href="https://x.com/FedeGiobergia" className="hover:text-white transition-colors">
                TW
              </a>
              <a href="https://www.goodreads.com/user/show/103484077-fede-giobergia" className="hover:text-white transition-colors">
                GR
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
