"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function ScienceSection() {
  const { content } = useLanguage();
  const {
    pillars,
    pages: { home: t },
  } = content;

  return (
    <section id="ciencia" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-700">
            {t.scienceSection.tag}
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {t.scienceSection.title}
          </h2>
          <p className="text-base text-ink-500">
            {t.scienceSection.copy}
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar: { label: string; content: string }) => (
              <div
                key={pillar.label}
                className="rounded-[28px] border border-mist-160/55 bg-mist-20/94 p-7 shadow-[0_28px_60px_-48px_rgba(24,26,32,0.28)]"
              >
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.26em] text-ink-700">
                  {pillar.label}
                </h3>
                <p className="mt-3 text-sm text-ink-500">{pillar.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[var(--radius-base)] border border-mist-160/60 bg-mist-20 p-6 shadow-[0_28px_60px_-48px_rgba(24,26,32,0.28)]">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-ink-700">
              {t.scienceSection.internalTests}
            </h3>
            <ul className="space-y-2 text-sm text-ink-500">
              {t.scienceSection.testsList.map((test: string) => (
                <li key={test}>{test}</li>
              ))}
            </ul>
            <Link
              href="/ciencia"
              className="text-sm font-semibold text-ink-700 underline-offset-6 hover:underline"
            >
              {t.scienceSection.link}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
