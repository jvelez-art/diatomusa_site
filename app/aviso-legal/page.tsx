"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function AvisoLegalPage() {
  const { content } = useLanguage();
  const {
    pages: { legal: t },
  } = content;

  return (
    <div className="bg-mist-20 text-ink-900">
      <section className="border-b border-mist-160/60 bg-mist-80">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-600">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {t.legalNoticeTitle}
          </h1>
          <p className="mt-4 text-sm text-ink-600">
            {t.legalNoticeCopy}
          </p>
        </div>
      </section>
    </div>
  );
}
