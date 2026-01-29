"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function Home() {
  const { content } = useLanguage();
  const {
    tagline,
    amazonUrl,
    heroStory,
    trustBadges,
    videos,
    benefits,
    howItWorks,
    colorVariants,
    pillars,
    careSteps,
    reviews,
    guarantee,
    faqs,
    pages: { home: t },
  } = content;

  return (
    <div className="bg-mist-20 text-ink-900">
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
              {heroStory.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[17px] leading-relaxed text-ink-500">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/ciencia"
                className="text-sm font-semibold text-ink-700 underline-offset-8 hover:underline"
              >
                {t.heroLink}
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.3em] text-ink-600">
              {trustBadges.map((badge) => (
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

      <section className="border-b border-mist-160/50 bg-mist-20">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-ink-500">
                {t.videoSection.tag}
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                {t.videoSection.title}
              </h2>
              <p className="text-sm text-ink-500 sm:text-base">
                {t.videoSection.copy1}
              </p>
              <p className="text-sm text-ink-500 sm:text-base">
                {t.videoSection.copy2}
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-mist-160/50 bg-white/70 shadow-[0_40px_90px_-60px_rgba(27,29,36,0.35)]">
              <div className="relative bg-ink-900/5" style={{ aspectRatio: "16 / 9" }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  poster="/images/encuentro/encuentro-gris-oscuro-ducha-uso.jpg"
                  className="h-full w-full object-contain"
                >
                  <source src={videos[0]?.src} type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
                <span className="absolute left-6 top-6 rounded-full bg-ink-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-cameo-220">
                  {videos[0]?.label}
                </span>
              </div>
              <div className="space-y-3 px-6 py-6">
                <p className="text-sm text-ink-500">{videos[0]?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="producto" className="border-y border-mist-160/50 bg-mist-80">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
              {t.benefitsSection.tag}
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              {t.benefitsSection.title}
            </h2>
            <p className="mt-4 text-base text-ink-500">
              {t.benefitsSection.copy}
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="flex flex-col gap-4 rounded-[32px] border border-mist-160/55 bg-mist-20/94 px-8 py-10 shadow-[0_36px_72px_-48px_rgba(24,26,32,0.32)]"
              >
                <span className="h-1 w-12 rounded-full bg-rose-220/70" />
                <h3 className="text-[20px] font-semibold text-ink-900">
                  {benefit.title}
                </h3>
                <p className="text-sm text-ink-500">{benefit.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
                {howItWorks.map((item, index) => (
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
              {colorVariants.map((variant) => (
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

      <section id="ciencia" className="py-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-700">
              {t.scienceSection.tag}
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {t.scienceSection.title}
            </h2>
            <p className="text-base text-ink-500">
              {t.scienceSection.copy}
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="rounded-[28px] border border-mist-160/55 bg-mist-20/94 p-7 shadow-[0_28px_60px_-48px_rgba(24,26,32,0.28)]"
                >
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.26em] text-ink-700">
                    {pillar.label}
                  </h3>
                  <p className="mt-3 text-sm text-ink-500">{pillar.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-base)] border border-mist-160/60 bg-mist-20 p-6 shadow-[0_28px_60px_-48px_rgba(24,26,32,0.28)]">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-ink-700">
                {t.scienceSection.internalTests}
              </h3>
              <ul className="space-y-2 text-sm text-ink-500">
                {t.scienceSection.testsList.map((test) => (
                  <li key={test}>{test}</li>
                ))}
              </ul>
              <Link
                href="/ciencia"
                className="text-sm font-semibold text-ink-700 underline-offset-6 hover:underline"
              >
                {t.scienceSection.link}
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                {careSteps.map((step, index) => (
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

      <section className="border-y border-mist-160/55 bg-mist-80/85 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-700">
              {t.reviewsSection.tag}
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              {t.reviewsSection.title}
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote
                key={review.name}
                className="flex h-full flex-col justify-between gap-6 rounded-[var(--radius-base)] border border-mist-160/55 bg-mist-80/90 p-8"
              >
                <p className="text-sm text-ink-500">“{review.quote}”</p>
                <footer className="text-xs uppercase tracking-[0.25em] text-ink-700">
                  {review.name}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/opiniones"
              className="text-sm font-semibold text-ink-700 underline-offset-6 hover:underline"
            >
              {t.reviewsSection.link}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist-80 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-700">
                {t.warrantySection.tag}
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                {guarantee.headline}
              </h2>
              <ul className="space-y-3 text-sm text-ink-600">
                {guarantee.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-[18px] border border-mist-160/60 bg-white/70 px-4 py-3"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-220" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/garantia"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 underline-offset-6 hover:underline"
              >
                {t.warrantySection.link}
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {faqs.slice(0, 2).map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[18px] border border-mist-160/55 bg-mist-20/94 p-5 shadow-[0_18px_40px_-28px_rgba(24,26,32,0.28)]"
                >
                  <h3 className="text-sm font-semibold text-ink-800">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-700/25 bg-ink-900 py-[72px] text-mist-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-mist-40/70">
                {t.atmosphereSection.tag}
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                {t.atmosphereSection.title}
              </h2>
              <p className="text-sm text-mist-40/80 sm:text-base">
                {t.atmosphereSection.copy}
              </p>
            </div>

            <article className="overflow-hidden rounded-[1.75rem] border border-mist-40/30 bg-ink-800/70 shadow-[0_30px_70px_-50px_rgba(6,8,12,0.6)]">
              <div className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/encuentro/encuentro-rosa-ducha-uso.jpg"
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                >
                  <source src={videos[1]?.src} type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
                <span className="absolute left-5 top-5 rounded-full bg-ink-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-cameo-220">
                  {videos[1]?.label}
                </span>
              </div>
              <div className="space-y-3 px-6 py-6">
                <p className="text-sm text-mist-40/80">{videos[1]?.description}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center lg:inset-x-auto lg:left-1/2 lg:w-auto lg:-translate-x-1/2">
        <Link
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-rose-220 px-5 py-2 text-xs font-serif font-semibold uppercase tracking-[0.12em] text-ink-900 shadow-[0_20px_45px_-24px_rgba(176,117,98,0.55)] transition hover:-translate-y-0.5 hover:bg-rose-260"
        >
          {t.cta}
        </Link>
      </div>
    </div>
  );
}
