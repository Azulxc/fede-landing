"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/libro", label: "El libro" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f7]/90 backdrop-blur-md border-b border-stone-200">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-stone-900 hover:text-stone-700 transition-colors"
        >
          Federico Giobergia
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm tracking-wide transition-colors ${
                  pathname === href
                    ? "text-stone-900 font-medium"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="text-stone-900"
          >
            {menuOpen ? (
              <>
                <line
                  x1="4"
                  y1="4"
                  x2="16"
                  y2="16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="16"
                  y1="4"
                  x2="4"
                  y2="16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </>
            ) : (
              <>
                <line
                  x1="3"
                  y1="5"
                  x2="17"
                  y2="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="3"
                  y1="10"
                  x2="17"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="3"
                  y1="15"
                  x2="17"
                  y2="15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#faf9f7]">
          <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm tracking-wide transition-colors ${
                    pathname === href
                      ? "text-stone-900 font-medium"
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
