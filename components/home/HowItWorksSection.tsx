"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function HowItWorksSection() {
  const { content } = useLanguage();
  const {
    howItWorks,
    pages: { home: t },
  } = content;

  return (
    <section className="border-b border-mist-160/45 bg-mist-20 text-ink-900">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
              {t.howItWorksSection.tag}
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {t.howItWorksSection.title}
            </h2>
            <p className="text-base text-ink-500">
              {t.howItWorksSection.copy}
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {howItWorks.map((item: { title: string; copy: string }, index: number) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-mist-160/55 bg-mist-40 p-5"
                >
                  <span className="numeric text-lg text-rose-220">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[var(--radius-base)]">
            <Image
              src="/images/encuentro/encuentro-gris-oscuro-micro-poros.jpg"
              alt="Detalle de microcapilaridad con alfombrilla DIATOMUSA en baño"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
