import Image from "next/image";
import { heroStory, tagline } from "@/data/content";

export default function HistoriaPage() {
  return (
    <div className="bg-mist-20 text-ink-900">
      <section className="border-b border-mist-160/60 bg-mist-80">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-600">
            Historia
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            DIATOMUSA — {tagline}
          </h1>
          <p className="mt-4 max-w-3xl text-base text-ink-600">
            Nacimos en el País Vasco, combinando investigación en microcapilaridad con una mirada editorial. Cada pieza es una escena de calma que ordena el baño.
          </p>
        </div>
      </section>

      <section className="bg-mist-20">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <h2 className="text-2xl font-semibold">{heroStory.title}</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-600">
            {heroStory.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-mist-160/60 bg-ink-900 text-mist-40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em]">
              Origen y método
            </p>
            <p className="text-sm text-mist-40/85">
              Equipo con formación en física de nanoestructuras y materiales
              avanzados. Ensayos internos de absorción, antideslizante y
              durabilidad. Atención y garantía desde España.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-base)] shadow-[0_42px_70px_-50px_rgba(0,0,0,0.55)]">
            <Image
              src="/images/encuentro/encuentro-gris-oscuro-ducha-uso.jpg"
              alt="Alfombrilla DIATOMUSA gris oscuro en baño contemporáneo"
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
