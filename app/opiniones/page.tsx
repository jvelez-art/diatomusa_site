"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function OpinionesPage() {
  const { content } = useLanguage();
  const {
    reviews,
    pages: { reviews: t },
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <blockquote
                key={review.name}
                className="flex h-full flex-col justify-between gap-6 rounded-[var(--radius-base)] border border-mist-160/60 bg-white/70 p-8 shadow-sm"
              >
                <p className="text-sm text-ink-600 italic">“{review.quote}”</p>
                <footer className="text-xs uppercase tracking-[0.25em] text-ink-700 font-semibold">
                  {review.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
