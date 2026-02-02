"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function CareSection() {
  const { content } = useLanguage();
  const {
    careSteps,
    pages: { home: t },
  } = content;

  return (
    <section id="cuidado" className="bg-mist-80/60 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-700">
              {t.careSection.tag}
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {t.careSection.title}
            </h2>
            <p className="text-base text-ink-500">
              {t.careSection.copy}
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {careSteps.map((step: string, index: number) => (
                <li
                  key={step}
                  className="flex flex-col gap-2 rounded-[18px] border border-mist-160/55 bg-mist-20/90 p-4"
                >
                  <span className="numeric text-2xl text-accent-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs text-ink-500">{step}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center overflow-hidden rounded-[var(--radius-base)] border border-mist-160/60 bg-white/70 p-6 shadow-[0_28px_60px_-48px_rgba(24,26,32,0.28)]">
            <Image
              src="/images/encuentro/encuentro-gris-oscuro-cuidado-lija-antideslizante.jpg"
              alt="Lijado suave y base antideslizante de la alfombrilla DIATOMUSA"
              width={1000}
              height={1000}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
