import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase text-stone-400 mb-6">
            Escritor
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 leading-tight">
            Federico
            <br />
            Giobergia
          </h1>
          <p className="mt-6 text-lg md:text-xl text-stone-500 font-body italic max-w-xl mx-auto">
            &ldquo;Las historias que merecen ser contadas viven en los silencios
            entre las palabras&rdquo;
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/libro"
              className="px-8 py-3 bg-stone-900 text-white text-sm font-medium rounded-md hover:bg-stone-800 transition-colors"
            >
              Nuevo libro
            </Link>
            <Link
              href="/sobre-mi"
              className="px-8 py-3 border border-stone-300 text-stone-700 text-sm font-medium rounded-md hover:bg-stone-100 transition-colors"
            >
              Sobre mí
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-stone-400"
          >
            <path
              d="M10 3v14M5 12l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Book Preview */}
      <section className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="relative w-64 h-96 bg-stone-900 rounded-sm shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-12 h-px bg-stone-500 mb-6" />
                <p className="text-stone-400 text-xs tracking-[0.3em] uppercase mb-4">
                  Federico Giobergia
                </p>
                <h3 className="font-serif text-2xl text-white leading-snug">
                  Los muertos
                  <br />
                  que contamos
                </h3>
                <div className="w-12 h-px bg-stone-500 mt-6" />
                <p className="text-stone-500 text-xs tracking-wider uppercase mt-6">
                  Ficción
                </p>
              </div>
              {/* Book spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-stone-800" />
            </div>
          </div>

          {/* Book Info */}
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-stone-400 mb-3">
              Próximamente — 2026
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
              Los muertos que contamos
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Una historia que explora los límites entre la memoria y el olvido,
              donde los vivos cargan con las historias de quienes ya no están, y
              descubren que contar a los muertos es la única forma de mantenerlos
              vivos.
            </p>
            <p className="text-stone-500 text-sm italic mb-8">
              &laquo;Hay muertos que pesan más que los vivos. No por su
              ausencia, sino por todo lo que dejaron sin decir.&raquo;
            </p>
            <Link
              href="/libro"
              className="inline-block px-8 py-3 bg-stone-900 text-white text-sm font-medium rounded-md hover:bg-stone-800 transition-colors"
            >
              Descubrir más
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-stone-900 mb-3">
            Mantenete al tanto
          </h2>
          <p className="text-stone-500 mb-8">
            Recibí novedades sobre el lanzamiento, eventos y contenido
            exclusivo.
          </p>
          <Newsletter />
        </div>
      </section>
    </>
  );
}
