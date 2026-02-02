"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function ReviewsSection() {
  const { content } = useLanguage();
  const {
    reviews,
    pages: { home: t },
  } = content;

  return (
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
          {reviews.map((review: { name: string; quote: string }) => (
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
  );
}
