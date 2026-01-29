"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function ComprarPage() {
  const { content } = useLanguage();
  const {
    amazonUrl,
    pages: { shop: t },
  } = content;

  return (
    <div className="bg-mist-20 text-ink-900">
      <section className="border-b border-mist-160/60 bg-mist-80">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-[var(--radius-base)] border border-mist-160/60 shadow-[0_32px_70px_-48px_rgba(20,22,28,0.4)]">
                <Image
                  src="/images/encuentro/encuentro-rosa-ducha-uso.jpg"
                  alt="DIATOMUSA Encuentro embalaje y producto"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 space-y-6 lg:order-2">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-600">
                {t.tag}
              </p>
              <h1 className="text-3xl font-semibold sm:text-4xl">
                {t.title}
              </h1>
              <ul className="space-y-3 text-base text-ink-600">
                {t.benefitsList.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-220 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  href={amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-rose-220 px-8 py-3 text-sm font-serif font-semibold uppercase tracking-[0.12em] text-ink-900 shadow-[0_20px_45px_-24px_rgba(176,117,98,0.55)] transition hover:-translate-y-0.5 hover:bg-rose-260"
                >
                  {t.amazonButton}
                </Link>
                <div className="mt-6 rounded-[16px] border border-mist-160/60 bg-white/60 p-4 text-xs text-ink-500">
                  <p className="font-semibold uppercase tracking-wider mb-1">
                    {t.secureTitle}
                  </p>
                  {t.secureCopy}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
