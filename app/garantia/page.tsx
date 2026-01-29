"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function GarantiaPage() {
  const { content } = useLanguage();
  const {
    faqs,
    guarantee,
    pages: { warranty: t },
  } = content;

  return (
    <div className="bg-mist-20 text-ink-900">
      <section className="border-b border-mist-160/60 bg-mist-80">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-600">
            {t.tag}
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base text-ink-600">
            {t.copy}
          </p>
        </div>
      </section>

      <section className="bg-mist-20">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">{t.subtitle}</h2>
              <ul className="space-y-4">
                {guarantee.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-[18px] border border-mist-160/60 bg-white/70 px-5 py-4"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-rose-220 flex-shrink-0" />
                    <span className="text-sm text-ink-600">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-[20px] bg-ink-900 p-6 text-mist-40">
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">
                  {t.contactTitle}
                </h3>
                <p className="text-sm opacity-80 mb-4">
                  {t.contactCopy}
                </p>
                <a
                  href="mailto:hola@diatomusa.com"
                  className="inline-block border-b border-rose-220 pb-0.5 text-sm font-medium text-rose-220"
                >
                  hola@diatomusa.com
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">{t.faqTitle}</h2>
              <div className="grid gap-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-[20px] border border-mist-160/60 bg-white/60 p-6"
                  >
                    <h3 className="text-sm font-semibold text-ink-800">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm text-ink-500">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
