"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function VideoIntroSection() {
  const { content } = useLanguage();
  const {
    videos,
    pages: { home: t },
  } = content;

  return (
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
  );
}
