"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function ColorsSection() {
  const { content } = useLanguage();
  const {
    colorVariants,
    pages: { home: t },
  } = content;

  return (
    <section className="border-y border-mist-160/55 bg-mist-120">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ink-700">
            {t.colorsSection.tag}
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            {t.colorsSection.title}
          </h2>
          <p className="mt-4 text-base text-ink-500">
            {t.colorsSection.copy}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {colorVariants.map((variant: { name: string }) => (
              <div
                key={variant.name}
                className="flex items-center justify-between rounded-[18px] border border-mist-160/60 bg-white/70 px-4 py-3 text-sm font-medium text-ink-700"
              >
                <span>{variant.name}</span>
                <span className="h-2 w-2 rounded-full bg-rose-220" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[var(--radius-base)] shadow-[0_35px_60px_-45px_rgba(56,63,79,0.35)]">
          <Image
            src="/images/encuentro/encuentro-variantes-dimensiones-colores.jpg"
            alt="Variantes de color DIATOMUSA con medidas visibles"
            width={1400}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
