import Image from "next/image";
import Link from "next/link";
import {
  amazonUrl,
  benefits,
  colorVariants,
  howItWorks,
  tagline,
} from "@/data/content";

export default function ProductoPage() {
  return (
    <div className="bg-mist-20 text-ink-900">
      <section className="border-b border-mist-160/60 bg-mist-80">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-600">
            Producto
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Alfombrilla de diatomita DIATOMUSA — {tagline}
          </h1>
          <p className="mt-4 text-base text-ink-600">
            Secado visible en minutos, base antideslizante y diseño sereno.
            Ingeniería de materiales aplicada al baño cotidiano.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-ink-800"
            >
              Comprar en Amazon
            </Link>
            <Link
              href="/ciencia"
              className="text-sm font-semibold text-ink-700 underline-offset-6 hover:underline"
            >
              Ver la ciencia
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist-20">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Beneficios clave</h2>
              <ul className="grid gap-5">
                {benefits.map((benefit) => (
                  <li
                    key={benefit.title}
                    className="rounded-[20px] border border-mist-160/60 bg-white/70 p-4"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-ink-700">
                      {benefit.title}
                    </p>
                    <p className="mt-2 text-sm text-ink-500">{benefit.copy}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-[var(--radius-base)] border border-mist-160/60 shadow-[0_32px_70px_-48px_rgba(20,22,28,0.4)]">
              <Image
                src="/images/hero-verde.jpg"
                alt="Alfombrilla DIATOMUSA en acabado verde"
                width={1400}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-mist-160/60 bg-mist-120">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-700">
                Variantes
              </p>
              <h2 className="text-2xl font-semibold">Colores reales</h2>
              <p className="text-sm text-ink-600">
                Selecciona la variante que mejor dialogue con tu baño. Todas
                integran la misma microcapilaridad y base antideslizante.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {colorVariants.map((variant) => (
                  <div
                    key={variant.name}
                    className="flex items-center justify-between rounded-[14px] border border-mist-160/60 bg-white/75 px-4 py-3 text-sm text-ink-700"
                  >
                    <span>{variant.name}</span>
                    <span className="h-2 w-2 rounded-full bg-rose-220" />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {colorVariants.map((variant) => (
                <div
                  key={variant.image}
                  className="overflow-hidden rounded-[18px] border border-mist-160/60 shadow-[0_28px_60px_-48px_rgba(24,26,32,0.28)]"
                >
                  <Image
                    src={variant.image}
                    alt={`Alfombrilla DIATOMUSA color ${variant.name}`}
                    width={800}
                    height={640}
                    className="h-full w-full object-cover"
                  />
                  <div className="px-4 py-3 text-sm font-semibold text-ink-800">
                    {variant.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist-20">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <h2 className="text-2xl font-semibold">Cómo funciona</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
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
      </section>

      <section className="border-t border-mist-160/60 bg-ink-900 text-mist-40">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 lg:px-8">
          <h2 className="text-2xl font-semibold">Listo para tu baño</h2>
          <p className="text-sm text-mist-40/80">
            Prime, devoluciones fáciles y atención desde España. Compra segura.
          </p>
          <Link
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#667ba1ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#6f7c95]"
          >
            Comprar en Amazon
          </Link>
        </div>
      </section>
    </div>
  );
}
