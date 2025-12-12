import Link from "next/link";
import Image from "next/image";
import { howItWorks, pillars } from "@/data/content";

export default function CienciaPage() {
  return (
    <div className="bg-mist-20 text-ink-900">
      <section className="border-b border-mist-160/60 bg-mist-80">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-600">
            Ciencia & material
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Microcapilaridad y diatomita: ciencia que se siente bajo los pies.
          </h1>
          <p className="mt-4 max-w-3xl text-base text-ink-600">
            Tratamiento térmico, poros calibrados y control dimensional. La
            piedra absorbe, dispersa y seca en minutos, manteniendo el baño
            ordenado y seguro.
          </p>
        </div>
      </section>

      <section className="bg-mist-20">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Cómo funciona</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {howItWorks.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[18px] border border-mist-160/60 bg-white/80 p-5"
                  >
                    <span className="numeric text-lg text-rose-220">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink-800">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-ink-500">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-base)] border border-mist-160/60 shadow-[0_32px_70px_-48px_rgba(20,22,28,0.4)]">
              <Image
                src="/images/macro-textura.jpg"
                alt="Textura macro de la diatomita"
                width={1200}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-mist-160/60 bg-mist-120">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <h2 className="text-2xl font-semibold">Pilares de producto</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="rounded-[20px] border border-mist-160/60 bg-white/70 p-6"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-ink-700">
                  {pillar.label}
                </p>
                <p className="mt-3 text-sm text-ink-500">{pillar.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist-20">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <h2 className="text-2xl font-semibold">Datos de ensayo internos</h2>
          <div className="mt-6 space-y-3 rounded-[20px] border border-mist-160/60 bg-white/80 p-6 text-sm text-ink-600">
            <p>• Absorción visible: superficie seca en minutos tras el uso.</p>
            <p>• Estabilidad: base antideslizante probada en suelos lisos.</p>
            <p>• Manchas: resistencia a manchas comunes con limpieza ligera.</p>
            <p>• Durabilidad: ciclos de ventilación y lijado fino sin degradar la pieza.</p>
          </div>
          <Link
            href="/producto"
            className="mt-6 inline-flex text-sm font-semibold text-ink-700 underline-offset-6 hover:underline"
          >
            Volver al producto
          </Link>
        </div>
      </section>
    </div>
  );
}
