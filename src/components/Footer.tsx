import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-serif text-lg text-stone-900">
              Federico Giobergia
            </p>
            <p className="mt-2 text-sm text-stone-500">
              Escritor. Historias que merecen ser contadas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-medium text-stone-900 mb-3">
              Navegación
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-mi"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
                >
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link
                  href="/libro"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
                >
                  El libro
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm font-medium text-stone-900 mb-3">Seguime</p>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
                >
                  Goodreads
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-200 text-center">
          <p className="text-xs text-stone-400">
            &copy; 2026 Federico Giobergia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
