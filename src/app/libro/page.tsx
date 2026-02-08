import type { Metadata } from "next";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";

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
            <span className="text-[clamp(3rem,7vw,7rem)] font-black leading-none tracking-tight">
              01
            </span>
          </div>
          <div className="md:col-span-10">
            <h1 className="text-[clamp(2.5rem,8vw,9rem)] font-black uppercase leading-[0.85] tracking-[-0.03em]">
              Los muertos
              <br />
              que contamos
            </h1>
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <section className="px-6 md:px-12">
        <div className="relative aspect-[2.5/1] bg-stone-300 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1400&h=600&fit=crop"
            alt="Los muertos que contamos"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Synopsis */}
      <section className="border-t border-black px-6 md:px-12 py-16 md:py-24 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <p className="text-[clamp(1.5rem,3vw,2.5rem)] font-black leading-[1.1] tracking-tight">
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
                En un pueblo donde los muertos pesan más que los vivos, Martín
                regresa después de veinte años para enfrentarse a la historia
                que su familia eligió callar. Pero los secretos enterrados
                tienen la costumbre de abrirse paso entre la tierra, y las voces
                de los que ya no están empiezan a contar su propia versión de
                los hechos.
              </p>
              <p>
                <em>Los muertos que contamos</em> es una novela sobre la
                memoria, la culpa y los lazos invisibles que nos atan a quienes
                creímos haber perdido. Una historia donde recordar es un acto de
                valentía y olvidar, la peor de las traiciones.
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
                <p>Novela</p>
              </div>
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.15em] text-stone-500 mb-1">
                  Editorial
                </p>
                <p>Por confirmar</p>
              </div>
              <div className="mt-2">
                <button className="text-[0.8125rem] underline underline-offset-4 decoration-stone-400 font-medium hover:decoration-black transition-colors cursor-pointer">
                  Pre-ordenar &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excerpt */}
      <section className="border-t border-black px-6 md:px-12 py-16 md:py-24">
        <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-12 md:mb-16">
          [ Extracto — Capítulo 1 ]
        </p>
        <blockquote className="font-serif text-[clamp(1.25rem,2.5vw,2.25rem)] italic leading-[1.4] max-w-5xl">
          &ldquo;Los muertos no se van del todo. Se quedan en las esquinas de
          las habitaciones, en el olor del café por la mañana, en las palabras
          que decimos sin saber que las heredamos de ellos. Contarlos es la
          única forma de dejarlos ir. Y sin embargo, cada vez que los contamos,
          los hacemos volver.&rdquo;
        </blockquote>
      </section>

      {/* Second image */}
      <section className="px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="relative aspect-[4/3] bg-stone-300 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop"
              alt="Libros apilados"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] bg-stone-300 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop"
              alt="Escritura"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-black px-6 md:px-12 py-16 md:py-24 mt-16">
        <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-12 md:mb-16">
          [ Newsletter ]
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <h2 className="text-[clamp(2rem,4.5vw,4.5rem)] font-black uppercase leading-[0.85] tracking-[-0.02em]">
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
