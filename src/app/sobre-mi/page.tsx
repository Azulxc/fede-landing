import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre mí — Federico Giobergia",
  description:
    "Conocé a Federico Giobergia, escritor argentino de ficción contemporánea.",
};

export default function SobreMi() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Photo */}
          <div className="md:col-span-2">
            <div className="relative aspect-[3/4] bg-stone-200 rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&crop=face"
                alt="Federico Giobergia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <p className="text-sm tracking-[0.2em] uppercase text-stone-400 mb-3">
              Sobre el autor
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">
              Federico Giobergia
            </h1>

            <div className="space-y-4 text-stone-600 leading-relaxed font-body">
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

            <blockquote className="mt-8 pl-6 border-l-2 border-stone-300 italic text-stone-500">
              &laquo;Escribo para entender lo que no puedo decir en voz alta.
              Cada historia es un intento de ordenar el caos que llevamos
              dentro.&raquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
