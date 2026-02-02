"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function HistorySection() {
  const { content } = useLanguage();
  const {
    pages: { home: t },
  } = content;

  return (
    <section className="border-y border-ink-700/25 bg-ink-900 text-mist-40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-[72px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div className="space-y-4 text-mist-40">
          <p className="text-xs uppercase tracking-[0.3em]">{t.historySection.tag}</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {t.historySection.title}
          </h2>
          <div className="space-y-4 text-base text-mist-40/85">
            <p>
              {t.historySection.copy1}
            </p>
            <p>
              {t.historySection.copy2}
            </p>
          </div>
          <Link
            href="/historia"
            className="inline-flex items-center gap-2 text-sm font-semibold text-rose-160 underline-offset-8 hover:underline"
          >
            {t.historySection.link}
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-[var(--radius-base)] shadow-[0_50px_80px_-60px_rgba(0,0,0,0.55)]">
          <Image
            src="/images/encuentro/encuentro-gris-oscuro-ducha-uso.jpg"
            alt="Alfombrilla DIATOMUSA gris oscuro en baño contemporáneo"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
