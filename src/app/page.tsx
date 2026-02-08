import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        id="inicio"
        className="min-h-screen flex flex-col justify-between px-6 md:px-12 pt-20 pb-6"
      >
        <div className="flex-1 flex items-end pb-8 md:pb-16">
          <div>
            <h1 className="text-[clamp(3.5rem,12vw,13rem)] font-black uppercase leading-[0.85] tracking-[-0.03em]">
              Federico
              <br />
              Giobergia
            </h1>
            <p className="mt-4 md:mt-6 text-[clamp(1rem,2vw,1.5rem)] uppercase tracking-[0.2em] text-stone-500">
              Escritor
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-end gap-4 border-t border-black pt-4 text-[0.6875rem] uppercase tracking-[0.15em] text-stone-500">
          <span>Nuevo libro — 2026</span>
          <span className="hidden sm:inline">IG, TW, GR</span>
          <span>Scroll &darr;</span>
          <span>&copy;2026</span>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section
        id="sobre-mi"
        className="scroll-mt-14 border-t border-black px-6 md:px-12 py-16 md:py-24"
      >
        <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-12 md:mb-16">
          [ Sobre el autor ]
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <div className="relative aspect-[3/4] bg-stone-300 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&crop=face"
                alt="Federico Giobergia"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="text-[0.9375rem] leading-relaxed text-stone-700">
              Federico Giobergia nació en Buenos Aires, Argentina. Desde joven
              encontró en la escritura una forma de explorar las complejidades
              de la condición humana, los vínculos familiares y los fantasmas
              que habitan la memoria colectiva.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-stone-700">
              Su obra se caracteriza por una prosa intimista y una mirada aguda
              sobre lo cotidiano, donde lo extraordinario se esconde en los
              detalles más simples.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[0.9375rem] leading-relaxed text-stone-700">
              Influenciado por autores como Julio Cortázar, Samanta Schweblin y
              Juan José Saer, su escritura transita entre lo real y lo
              fantástico con una voz propia que explora los bordes de lo
              cotidiano.
            </p>
            <div className="mt-8 pt-8 border-t border-stone-400">
              <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-2">
                Contacto
              </p>
              <p className="text-[0.9375rem]">
                <Link
                  href="/#newsletter"
                  className="underline underline-offset-4 decoration-stone-400 hover:decoration-black transition-colors"
                >
                  Escribime
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOOK ═══ */}
      <section
        id="libro"
        className="scroll-mt-14 border-t border-black px-6 md:px-12 py-16 md:py-24"
      >
        <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-12 md:mb-16">
          [ Nuevo libro ]
        </p>

        {/* Title row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-end">
          <div className="md:col-span-2">
            <span className="text-[clamp(3rem,7vw,7rem)] font-black leading-none tracking-tight">
              01
            </span>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-[clamp(2.5rem,6.5vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.02em]">
              Los muertos
              <br />
              que contamos
            </h2>
          </div>
        </div>

        {/* Full-width image */}
        <div className="mt-12 md:mt-16 relative aspect-[2.5/1] bg-stone-300 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1400&h=600&fit=crop"
            alt="Los muertos que contamos"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Details row */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
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
            <p className="text-[0.9375rem] leading-relaxed text-stone-700">
              En un pueblo donde los muertos pesan más que los vivos, Martín
              regresa después de veinte años para enfrentarse a la historia que
              su familia eligió callar. Los secretos enterrados tienen la
              costumbre de abrirse paso entre la tierra, y las voces de los que
              ya no están empiezan a contar su propia versión de los hechos.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-stone-700">
              Una novela sobre la memoria, la culpa y los lazos invisibles que
              nos atan a quienes creímos haber perdido.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <div className="flex flex-col gap-4 text-[0.8125rem] text-stone-600">
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.15em] text-stone-500 mb-1">
                  Género
                </p>
                <p>Ficción</p>
              </div>
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.15em] text-stone-500 mb-1">
                  Editorial
                </p>
                <p>Por confirmar</p>
              </div>
              <div className="mt-4">
                <button className="text-[0.8125rem] underline underline-offset-4 decoration-stone-400 font-medium hover:decoration-black transition-colors cursor-pointer">
                  Pre-ordenar &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EXCERPT ═══ */}
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

      {/* ═══ NEWSLETTER ═══ */}
      <section
        id="newsletter"
        className="scroll-mt-14 border-t border-black px-6 md:px-12 py-16 md:py-24"
      >
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
