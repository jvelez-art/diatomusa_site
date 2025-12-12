import Link from "next/link";
import { amazonUrl, colorVariants, trustBadges } from "@/data/content";

export default function ComprarPage() {
  return (
    <div className="bg-mist-20 text-ink-900">
      <section className="border-b border-mist-160/60 bg-mist-80">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-600">
            Comprar
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Compra segura en Amazon
          </h1>
          <p className="mt-4 max-w-3xl text-base text-ink-600">
            Prime, devoluciones ágiles y soporte directo desde España. Elige tu
            variante y abre en una nueva pestaña para comprar.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.3em] text-ink-600">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-mist-160/60 px-4 py-1"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist-20">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <h2 className="text-2xl font-semibold">Variantes disponibles</h2>
          <p className="mt-2 text-sm text-ink-600">
            Usa enlaces con UTM cuando estén disponibles; por ahora abre la
            búsqueda general en Amazon.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {colorVariants.map((variant) => (
              <Link
                key={variant.name}
                href={amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[14px] border border-mist-160/60 bg-white/80 px-4 py-3 text-sm font-medium text-ink-700 transition hover:-translate-y-0.5 hover:border-rose-220/70"
              >
                <span>{variant.name}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-rose-220">
                  Abrir Amazon
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
