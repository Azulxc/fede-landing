import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre mí — Federico Giobergia",
  description:
    "Conocé a Federico Giobergia, escritor argentino de ficción contemporánea.",
};

export default function SobreMi() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24">
        <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-8">
          [ Sobre el autor ]
        </p>
        <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.03em]">
          Federico
          <br />
          Giobergia
        </h1>
      </section>

      {/* Content */}
      <section className="border-t border-black px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Photo - sticky on desktop */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-24">
              <div className="relative aspect-[3/4] bg-stone-300 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&crop=face"
                  alt="Federico Giobergia"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-6 md:col-start-7">
            <div className="space-y-6 text-[0.9375rem] leading-relaxed text-stone-700">
              <p>
                Federico Giobergia nació en Buenos Aires, Argentina. Desde joven
                encontró en la escritura una forma de explorar las complejidades
                de la condición humana, los vínculos familiares y los fantasmas
                que habitan la memoria colectiva.
              </p>
              <p>
                Su obra se caracteriza por una prosa intimista y una mirada
                aguda sobre lo cotidiano, donde lo extraordinario se esconde en
                los detalles más simples. Influenciado por autores como Julio
                Cortázar, Samanta Schweblin y Juan José Saer, su escritura
                transita entre lo real y lo fantástico.
              </p>
              <p>
                Actualmente trabaja en su próximo libro,{" "}
                <em>Los muertos que contamos</em>, una novela que explora los
                límites entre la memoria y el olvido, entre lo que elegimos
                recordar y lo que nos negamos a olvidar.
              </p>
            </div>

            <blockquote className="mt-12 pt-12 border-t border-stone-400">
              <p className="font-serif text-[clamp(1.25rem,2vw,1.75rem)] italic leading-[1.4]">
                &ldquo;Escribo para entender lo que no puedo decir en voz alta.
                Cada historia es un intento de ordenar el caos que llevamos
                dentro.&rdquo;
              </p>
            </blockquote>

            <div className="mt-12 pt-12 border-t border-stone-400 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-2">
                  Género
                </p>
                <p className="text-[0.9375rem]">Ficción contemporánea</p>
              </div>
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-2">
                  Ubicación
                </p>
                <p className="text-[0.9375rem]">Buenos Aires, Argentina</p>
              </div>
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-2">
                  Próximo libro
                </p>
                <p className="text-[0.9375rem]">
                  <Link
                    href="/libro"
                    className="underline underline-offset-4 decoration-stone-400 hover:decoration-black transition-colors"
                  >
                    Los muertos que contamos
                  </Link>
                </p>
              </div>
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-2">
                  Contacto
                </p>
                <p className="text-[0.9375rem]">
                  <a
                    href="#"
                    className="underline underline-offset-4 decoration-stone-400 hover:decoration-black transition-colors"
                  >
                    hola@federicogiobergia.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
