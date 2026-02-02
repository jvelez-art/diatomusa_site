"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function AtmosphereSection() {
  const { content } = useLanguage();
  const {
    videos,
    pages: { home: t },
  } = content;

  return (
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
  );
}
