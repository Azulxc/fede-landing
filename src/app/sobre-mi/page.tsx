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
        <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-medium uppercase leading-[0.85] tracking-[-0.02em]">
          Federico
          <br />
          Giobergia
        </h1>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Photo - sticky on desktop */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-24">
              <div className="relative aspect-[3/4] bg-stone-300 overflow-hidden">
                <Image
                  src="/img180v2.jpg"
                  alt="Federico Giobergia"
                  fill
                  priority={true}
                  quality={100}
                  className="object-cover grayscale"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-6 md:col-start-7">
            <div className="space-y-6 text-[0.9375rem] leading-relaxed text-stone-700">
              <p>
                Federico Giobergia nació en Santa Fe, Argentina. Desde joven 
                encontró en la escritura una forma de explorar las complejidades 
                de las tradiciones, los vínculos familiares, la muerte y los 
                fantasmas que habitan la memoria colectiva.
              </p>
              <p>
               Su obra se caracteriza por una prosa íntima y una mirada aguda sobre lo 
               cotidiano, donde lo extraordinario se esconde en los detalles más simples, 
               buscando retratar lo extraño, lo fantástico y lo paranormal en el día a día.
              </p>
              <p>
                Su próximo libro, {" "}
                <em>Los muertos que contamos</em>, 
                reúne una colección de cuentos que exploran la memoria, 
                el duelo, la culpa y las cosas que se niegan a morir.
              </p>
            </div>

            <blockquote className="mt-12 pt-12 border-t border-stone-400/40">
              <p className="font-serif text-[clamp(1.25rem,2vw,1.75rem)] italic leading-[1.4]">
                &ldquo;Escribo para entender lo que no puedo decir en voz alta.
                Cada historia es un intento de ordenar el caos que llevamos
                dentro.&rdquo;
              </p>
            </blockquote>

            <div className="mt-12 pt-12 border-t border-stone-400/40 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-2">
                  Género
                </p>
                <p className="text-[0.9375rem]">Ficción | Paranormal</p>
              </div>
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-2">
                  Ubicación
                </p>
                <p className="text-[0.9375rem]">Santa Fe, Argentina</p>
              </div>
              <div>
                <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-stone-500 mb-2">
                  Último libro
                </p>
                <p className="text-[0.9375rem]">
                  <Link
                    href="/libro"
                    className="underline underline-offset-4 decoration-stone-400 hover:decoration-[#1a1a1a] transition-colors"
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
                    className="underline underline-offset-4 decoration-stone-400 hover:decoration-[#1a1a1a] transition-colors"
                  >
                    hola@fedegiobergia.com.ar
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
