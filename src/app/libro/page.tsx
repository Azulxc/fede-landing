import type { Metadata } from "next";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Los muertos que contamos — Federico Giobergia",
  description:
    "Descubrí Los muertos que contamos, la próxima novela de Federico Giobergia. Lanzamiento primer semestre 2026.",
};

export default function Libro() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24">
        <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-8">
          [ Nuevo libro — 2026 ]
        </p>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-end">
          <div className="md:col-span-2">
            <span className="text-[clamp(3rem,7vw,7rem)] font-light leading-none tracking-tight text-stone-400">
              01
            </span>
          </div>
          <div className="md:col-span-10">
            <h1 className="text-[clamp(2.5rem,8vw,9rem)] font-medium uppercase leading-[0.85] tracking-[-0.02em]">
              Los muertos
              <br />
              que contamos
            </h1>
          </div>
        </div>
      </section>

      {/* Book cover + image row */}
      <section className="px-6 md:px-12 pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* CSS Book Cover */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-56 md:w-64 aspect-[2/3] bg-[#1a1a1a] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-12 h-px bg-stone-500 mb-6" />
                <p className="text-stone-400 text-[0.6875rem] tracking-[0.3em] uppercase mb-4">
                  Federico Giobergia
                </p>
                <h3 className="font-serif text-[1.625rem] text-white leading-snug italic">
                  Los muertos
                  <br />
                  que contamos
                </h3>
                <div className="w-12 h-px bg-stone-500 mt-6" />
                <p className="text-stone-500 text-[0.625rem] tracking-[0.2em] uppercase mt-6">
                  Cuentos
                </p>
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#111]" />
            </div>
          </div>

          {/* Atmospheric image */}
        </div>
      </section>

      {/* Synopsis */}
      <section className="px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <p className="text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1.1] tracking-tight">
              Primer
              <br />
              semestre,
              <br />
              <span className="inline-block ml-8 md:ml-16">2026</span>
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-5">
            <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-6">
              Sinopsis
            </p>
            <div className="space-y-4 text-[0.9375rem] leading-relaxed text-stone-700">
              <p>
                <em>Los muertos que contamos</em> es una antología de relatos sobre 
                la memoria, la culpa y los lazos invisibles que nos atan a quienes
                creímos haber perdido. Explora el paso de lo extraño y lo paranormal 
                dentro de la cotidianeidad.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <div className="flex flex-col gap-6 text-[0.8125rem] text-stone-600">
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.15em] text-stone-500 mb-1">
                  Género
                </p>
                <p>Ficción</p>
              </div>
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.15em] text-stone-500 mb-1">
                  Formato
                </p>
                <p>Antología</p>
              </div>
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.15em] text-stone-500 mb-1">
                  Editorial
                </p>
                <p>Orsai</p>
              </div>
                <div className="mt-2">
                  <Link 
                    href="https://tienda.orsai.org/products/los-muertos-que-contamos" 
                    className="text-[0.8125rem] underline underline-offset-4 decoration-stone-400 font-medium hover:decoration-[#1a1a1a] transition-colors cursor-pointer"
                  >
                    Pre-comprar &rarr;
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excerpt */}
      <section className="px-6 md:px-12 py-20 md:py-32">
        <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-12 md:mb-16">
          [ Extracto — El problema de Salomé ]
        </p>
        <blockquote className="font-serif text-[clamp(1.25rem,2.5vw,2.25rem)] italic leading-[1.4] max-w-5xl">
          &ldquo; Los momentos de imaginar cosas en ocasiones eran más intensos que otros. 
          A veces solo imaginaba escenas extrañas, a veces escuchaba sonidos en distintas 
          partes de la casa y a veces, en los momentos de mayor intensidad, veía sombras o 
          bultos moverse por el rabillo del ojo. Pero desde hacía varios meses había aparecido 
          algo nuevo en su repertorio de delirios de las 3 de la madrugada, había empezado
           a tener pensamientos intrusivos.&rdquo;
        </blockquote>
      </section>

      {/* Image grid */}

      {/* Newsletter */}
      <section className="px-6 md:px-12 py-20 md:py-32">
        <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-12 md:mb-16">
          [ Newsletter ]
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <h2 className="text-[clamp(2rem,4.5vw,4.5rem)] font-medium uppercase leading-[0.85] tracking-[-0.02em]">
            No te pierdas
            <br />
            el lanzamiento
          </h2>
          <div className="flex flex-col justify-end">
            <Newsletter />
          </div>
        </div>
      </section>
    </>
  );
}
