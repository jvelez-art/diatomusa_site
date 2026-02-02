"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function BenefitsSection() {
  const { content } = useLanguage();
  const {
    benefits,
    pages: { home: t },
  } = content;

  return (
    <section id="producto" className="border-y border-mist-160/50 bg-mist-80">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
            {t.benefitsSection.tag}
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {t.benefitsSection.title}
          </h2>
          <p className="mt-4 text-base text-ink-500">
            {t.benefitsSection.copy}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit: { title: string; copy: string }) => (
            <article
              key={benefit.title}
              className="flex flex-col gap-4 rounded-[32px] border border-mist-160/55 bg-mist-20/94 px-8 py-10 shadow-[0_36px_72px_-48px_rgba(24,26,32,0.32)]"
            >
              <span className="h-1 w-12 rounded-full bg-rose-220/70" />
              <h3 className="text-[20px] font-semibold text-ink-900">
                {benefit.title}
              </h3>
              <p className="text-sm text-ink-500">{benefit.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
