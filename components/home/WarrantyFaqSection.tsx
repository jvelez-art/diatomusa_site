"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function WarrantyFaqSection() {
  const { content } = useLanguage();
  const {
    guarantee,
    faqs,
    pages: { home: t },
  } = content;

  return (
    <section className="bg-mist-80 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-700">
              {t.warrantySection.tag}
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {guarantee.headline}
            </h2>
            <ul className="space-y-3 text-sm text-ink-600">
              {guarantee.points.map((point: string) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-[18px] border border-mist-160/60 bg-white/70 px-4 py-3"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-220" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/garantia"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 underline-offset-6 hover:underline"
            >
              {t.warrantySection.link}
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {faqs.slice(0, 2).map((faq: { question: string; answer: string }) => (
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
      </div>
    </section>
  );
}
