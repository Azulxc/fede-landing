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
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[0.6875rem] uppercase tracking-[0.3em] text-stone-500 mb-6">
              Escritor
            </p>
            <h1 className="text-[clamp(3.5rem,12vw,13rem)] font-medium uppercase leading-[0.85] tracking-[-0.02em]">
              Federico
              <br />
              Giobergia
            </h1>
            <p className="mt-6 font-serif text-[clamp(1rem,2vw,1.375rem)] italic text-stone-500 max-w-xl mx-auto">
              &ldquo;Escribo para entender lo que no puedo decir en voz alta. 
              Cada historia es un intento de ordenar el caos que llevamos dentro.&rdquo;
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#libro"
                className="px-6 py-3 bg-[#1a1a1a] text-[#ece8e1] text-[0.75rem] uppercase tracking-[0.15em] hover:bg-[#333] transition-colors"
              >
                Nuevo libro
              </Link>
              <Link
                href="/sobre-mi"
                className="px-6 py-3 border border-[#1a1a1a] text-[0.75rem] uppercase tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-[#ece8e1] transition-colors"
              >
                Sobre mí
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-end gap-4 pt-4 text-[0.6875rem] uppercase tracking-[0.15em] text-stone-500">
          <span>Nuevo libro — 2026</span>
          <span className="hidden sm:inline">IG, TW, GR</span>
          <span>Scroll &darr;</span>
          <span>&copy;2026</span>
        </div>
      </section>

      {/* ═══ BOOK ═══ */}
      {/* ═══ BOOK ═══ */}
      
      <section
        id="libro"
        className="scroll-mt-14 px-6 md:px-12 py-20 md:py-32"
      >
        <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-12 md:mb-16">
          [ Nuevo libro ]
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* CSS Book Cover */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 md:w-72 aspect-[2/3] bg-[#1a1a1a] shadow-2xl overflow-hidden">
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
                  Ficción &middot; 2026
                </p>
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#111]" />
            </div>
          </div>

          {/* Book Info */}
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-4">
              Próximamente — Primer semestre 2026
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium uppercase leading-[0.9] tracking-[-0.01em] mb-6">
              Los muertos
              <br />
              que contamos
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-stone-700 mb-4">
                Una antología de relatos sobre 
                la memoria, la culpa y los lazos invisibles que nos atan a quienes
                creímos haber perdido. Explora el paso de lo extraño y lo paranormal 
                dentro de la cotidianeidad.
            </p>
            <p className="font-serif text-[0.9375rem] italic text-stone-500 mb-8">
              &laquo;Mamá ya no hablaba, papá hablaba 
              lo justo y necesario y ya nadie prendía el televisor 
              o la radio. A veces parecía que ellos estaban más muertos
               por dentro que ella misma.&raquo;
            </p>
            <Link
              href="/libro"
              className="text-[0.8125rem] underline underline-offset-4 decoration-stone-400 font-medium hover:decoration-[#1a1a1a] transition-colors"
            >
              Descubrir más &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ EXCERPT ═══ */}
      <section className="px-6 md:px-12 py-20 md:py-32">
        <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-12 md:mb-16">
          [ Extracto — El problema de Salomé ]
        </p>
        <blockquote className="font-serif text-[clamp(1.25rem,2.5vw,2.25rem)] italic leading-[1.4] max-w-5xl">
          &ldquo;Los momentos de imaginar cosas en ocasiones eran más 
          intensos que otros. A veces solo imaginaba escenas extrañas, 
          a veces escuchaba sonidos en distintas partes de la casa y a 
          veces, en los momentos de mayor intensidad, veía sombras o 
          bultos moverse por el rabillo del ojo. Pero desde hacía varios 
          meses había aparecido algo nuevo en su repertorio de delirios 
          de las 3 de la madrugada, había empezado a tener pensamientos intrusivos.&rdquo;
        </blockquote>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <section
        id="newsletter"
        className="scroll-mt-14 px-6 md:px-12 py-20 md:py-32"
      >
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
