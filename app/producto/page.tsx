"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function ProductoPage() {
  const { content } = useLanguage();
  const {
    amazonUrl,
    benefits,
    colorVariants,
    howItWorks,
    tagline,
    pages: { product: t },
  } = content;

  return (
    <div className="bg-mist-20 text-ink-900">
      <section className="border-b border-mist-160/60 bg-mist-80">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-600">
            {t.tag}
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {t.title} {tagline}
          </h1>
          <p className="mt-4 text-base text-ink-600">
            {t.copy}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/ciencia"
              className="text-sm font-semibold text-ink-700 underline-offset-6 hover:underline"
            >
              {t.link}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist-20">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">{t.benefitsTitle}</h2>
              <ul className="grid gap-5">
                {benefits.map((benefit) => (
                  <li
                    key={benefit.title}
                    className="rounded-[20px] border border-mist-160/60 bg-white/70 p-4"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-ink-700">
                      {benefit.title}
                    </p>
                    <p className="mt-2 text-sm text-ink-500">{benefit.copy}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-[var(--radius-base)] border border-mist-160/60 shadow-[0_32px_70px_-48px_rgba(20,22,28,0.4)]">
              <Image
                src="/images/encuentro/encuentro-verde-ducha-uso.jpg"
                alt="Alfombrilla DIATOMUSA en verde a la salida de la ducha"
                width={1400}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-mist-160/60 bg-mist-120">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-700">
                {t.variantsTag}
              </p>
              <h2 className="text-2xl font-semibold">{t.variantsTitle}</h2>
              <p className="text-sm text-ink-600">
                {t.variantsCopy}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {colorVariants.map((variant) => (
                  <div
                    key={variant.name}
                    className="flex items-center justify-between rounded-[14px] border border-mist-160/60 bg-white/75 px-4 py-3 text-sm text-ink-700"
                  >
                    <span>{variant.name}</span>
                    <span className="h-2 w-2 rounded-full bg-rose-220" />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {colorVariants.map((variant) => (
                <div
                  key={variant.image}
                  className="overflow-hidden rounded-[18px] border border-mist-160/60 shadow-[0_28px_60px_-48px_rgba(24,26,32,0.28)]"
                >
                  <div className="flex items-center justify-center bg-mist-20 p-3">
                    <Image
                      src={variant.image}
                      alt={`Alfombrilla DIATOMUSA color ${variant.name}`}
                      width={800}
                      height={640}
                      className="h-56 w-full object-contain"
                    />
                  </div>
                  <div className="px-4 py-3 text-sm font-semibold text-ink-800">
                    {variant.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist-20">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <h2 className="text-2xl font-semibold">{t.howItWorksTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
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
      </section>

      <section className="border-t border-mist-160/60 bg-ink-900 text-mist-40">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 lg:px-8">
          <h2 className="text-2xl font-semibold">{t.ctaTitle}</h2>
          <p className="text-sm text-mist-40/80">
            {t.ctaCopy}
          </p>
        </div>
      </section>

      <div className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center lg:inset-x-auto lg:left-1/2 lg:w-auto lg:-translate-x-1/2">
        <Link
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-rose-220 px-5 py-2 text-xs font-serif font-semibold uppercase tracking-[0.12em] text-ink-900 shadow-[0_20px_45px_-24px_rgba(176,117,98,0.55)] transition hover:-translate-y-0.5 hover:bg-rose-260"
        >
          {t.ctaButton}
        </Link>
      </div>
    </div>
  );
}
