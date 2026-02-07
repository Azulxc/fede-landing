import type { Metadata } from "next";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Los muertos que contamos — Federico Giobergia",
  description:
    "Descubrí Los muertos que contamos, la próxima novela de Federico Giobergia. Lanzamiento primer semestre 2026.",
};

export default function Libro() {
  return (
    <>
      {/* Book Hero */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="relative w-72 h-[28rem] bg-stone-900 rounded-sm shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                <div className="w-16 h-px bg-stone-500 mb-8" />
                <p className="text-stone-400 text-xs tracking-[0.3em] uppercase mb-4">
                  Federico Giobergia
                </p>
                <h1 className="font-serif text-3xl text-white leading-snug">
                  Los muertos
                  <br />
                  que contamos
                </h1>
                <div className="w-16 h-px bg-stone-500 mt-8" />
                <p className="text-stone-500 text-xs tracking-wider uppercase mt-8">
                  Novela
                </p>
              </div>
              {/* Book spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-stone-800" />
            </div>
          </div>

          {/* Book Details */}
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-stone-400 mb-3">
              Próximo lanzamiento
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
              Los muertos que contamos
            </h2>

            <div className="space-y-4 text-stone-600 leading-relaxed font-body">
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

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-stone-500">
              <div>
                <span className="text-stone-900 font-medium">Género:</span>{" "}
                Ficción
              </div>
              <div>
                <span className="text-stone-900 font-medium">
                  Lanzamiento:
                </span>{" "}
                Primer semestre 2026
              </div>
              <div>
                <span className="text-stone-900 font-medium">Editorial:</span>{" "}
                Por confirmar
              </div>
            </div>

            <div className="mt-8">
              <button className="px-8 py-3 bg-stone-900 text-white text-sm font-medium rounded-md hover:bg-stone-800 transition-colors cursor-pointer">
                Pre-ordenar (próximamente)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Excerpt */}
      <section className="py-24 px-6 bg-stone-100/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-stone-400 mb-8">
            Extracto
          </p>
          <blockquote className="font-serif text-xl md:text-2xl text-stone-800 leading-relaxed italic">
            &laquo;Los muertos no se van del todo. Se quedan en las esquinas de
            las habitaciones, en el olor del café por la mañana, en las palabras
            que decimos sin saber que las heredamos de ellos. Contarlos es la
            única forma de dejarlos ir. Y sin embargo, cada vez que los
            contamos, los hacemos volver.&raquo;
          </blockquote>
          <p className="mt-6 text-sm text-stone-500">— Capítulo 1</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-stone-900 mb-3">
            No te pierdas el lanzamiento
          </h2>
          <p className="text-stone-500 mb-8">
            Suscribite para recibir noticias sobre la fecha de lanzamiento y
            contenido exclusivo.
          </p>
          <Newsletter />
        </div>
      </section>
    </>
  );
}
