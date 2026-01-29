"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function CuidadoPage() {
  const { content } = useLanguage();
  const {
    careSteps,
    pages: { care: t },
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
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="space-y-6">
              <ul className="grid gap-6">
                {careSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex flex-col gap-2 rounded-[20px] border border-mist-160/60 bg-white/70 p-5"
                  >
                    <span className="numeric text-2xl text-accent-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-ink-600">{step}</p>
                  </li>
                ))}
              </ul>
              <div className="rounded-[20px] border border-red-100 bg-red-50/50 p-5 text-sm text-ink-700">
                <span className="block font-semibold text-red-800 uppercase tracking-widest text-xs mb-2">
                  {t.warningTitle}
                </span>
                {t.warningCopy}
              </div>
            </div>
            <div className="overflow-hidden rounded-[var(--radius-base)] border border-mist-160/60 shadow-[0_32px_70px_-48px_rgba(20,22,28,0.4)]">
              <Image
                src="/images/encuentro/encuentro-gris-oscuro-cuidado-lija-antideslizante.jpg"
                alt="Mantenimiento de la alfombrilla DIATOMUSA"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
