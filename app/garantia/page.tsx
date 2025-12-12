import { faqs, guarantee } from "@/data/content";

export default function GarantiaPage() {
  return (
    <div className="bg-mist-20 text-ink-900">
      <section className="border-b border-mist-160/60 bg-mist-80">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-600">
            Garantía y soporte
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Cobertura y atención local
          </h1>
          <p className="mt-4 max-w-3xl text-base text-ink-600">
            Garantía de 12 meses frente a defectos de fabricación. Reemplazo o
            reembolso ágil si algo no sale como esperas.
          </p>
        </div>
      </section>

      <section className="bg-mist-20">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <h2 className="text-2xl font-semibold">{guarantee.headline}</h2>
          <ul className="mt-6 space-y-3 text-sm text-ink-600">
            {guarantee.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-[18px] border border-mist-160/60 bg-white/70 px-4 py-3"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-rose-220" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-mist-160/60 bg-mist-120">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[18px] border border-mist-160/55 bg-mist-20/94 p-5 shadow-[0_18px_40px_-28px_rgba(24,26,32,0.28)]"
              >
                <h3 className="text-sm font-semibold text-ink-800">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-ink-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
