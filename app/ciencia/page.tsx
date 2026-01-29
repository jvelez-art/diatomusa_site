"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function CienciaPage() {
  const { content } = useLanguage();
  const {
    howItWorks,
    pillars,
    pages: { science: t },
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
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">{t.howItWorksTitle}</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {howItWorks.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[18px] border border-mist-160/60 bg-white/80 p-5"
                  >
                    <span className="numeric text-lg text-rose-220">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink-800">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-ink-500">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-base)] border border-mist-160/60 shadow-[0_32px_70px_-48px_rgba(20,22,28,0.4)]">
              <Image
                src="/images/encuentro/encuentro-gris-oscuro-micro-poros.jpg"
                alt="Detalle de microcapilaridad en la diatomita"
                width={1200}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-mist-160/60 bg-mist-120">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <h2 className="text-2xl font-semibold">{t.pillarsTitle}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="rounded-[20px] border border-mist-160/60 bg-white/70 p-6"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-ink-700">
                  {pillar.label}
                </p>
                <p className="mt-3 text-sm text-ink-500">{pillar.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist-20">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <h2 className="text-2xl font-semibold">{t.testsTitle}</h2>
          <div className="mt-6 space-y-3 rounded-[20px] border border-mist-160/60 bg-white/80 p-6 text-sm text-ink-600">
            {t.testsList.map((test) => (
              <p key={test}>{test}</p>
            ))}
          </div>
          <Link
            href="/producto"
            className="mt-6 inline-flex text-sm font-semibold text-ink-700 underline-offset-6 hover:underline"
          >
            {t.backLink}
          </Link>
        </div>
      </section>
    </div>
  );
}
