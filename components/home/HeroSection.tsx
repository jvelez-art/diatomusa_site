"use client";

import Image from "next/image";
import Link from "next/link";
import SmartCTA from "@/components/SmartCTA";
import { useLanguage } from "@/components/LanguageContext";

export default function HeroSection() {
  const { content } = useLanguage();
  const {
    tagline,
    heroStory,
    trustBadges,
    pages: { home: t },
  } = content;

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-mist-120"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(207,182,159,0.36),_transparent_72%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(145deg,_rgba(255,255,255,0.92),_rgba(221,204,186,0.42)_48%,_transparent_88%)]" />

      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-28">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.22em] text-ink-600 shadow-[0_22px_40px_-30px_rgba(20,22,28,0.35)]">
            <span>{t.heroTag}</span>
            <span className="h-1 w-1 rounded-full bg-rose-220" />
            <span>DIATOMUSA</span>
          </div>
          <p className="text-[15px] uppercase tracking-[0.32em] text-rose-260 font-semibold">
            {tagline}
          </p>
          <h1 className="font-serif text-[42px] font-bold leading-tight tracking-[0.06em] sm:text-[48px] text-ink-900">
            {t.heroHeadline}
          </h1>

          <div className="space-y-4 max-w-xl">
            <h3
              className="text-[19px] font-medium italic leading-snug tracking-[0.01em] text-ink-700"
              style={{
                fontFeatureSettings: '"liga" 1, "dlig" 1, "salt" 1, "ss01" 1',
                fontKerning: "normal",
              }}
            >
              {t.heroSubheadline}
            </h3>
            {heroStory.paragraphs.map((paragraph: string) => (
              <p key={paragraph} className="text-[17px] leading-relaxed text-ink-500">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <SmartCTA />
            <Link
              href="/ciencia"
              className="text-sm font-semibold text-ink-700 underline-offset-8 hover:underline"
            >
              {t.heroLink}
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.3em] text-ink-600">
            {trustBadges.map((badge: string) => (
              <span
                key={badge}
                className="rounded-full border border-mist-160/60 px-4 py-1"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="relative lg:self-center">
          <div className="absolute inset-0 -left-6 -z-10 rounded-[110px] bg-[radial-gradient(circle_at_center,_rgba(207,182,159,0.48),_transparent_72%)]" />
          <div className="relative overflow-hidden rounded-[28px] border border-mist-160/60 bg-mist-40 shadow-[0_85px_110px_-70px_rgba(20,22,28,0.55)] transition">
            <Image
              src="/images/encuentro/encuentro-rosa-ducha-uso.jpg"
              alt="Alfombrilla de diatomita DIATOMUSA en rosa a la salida de la ducha"
              width={1660}
              height={1240}
              className="h-full w-full object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mist-80/45 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
