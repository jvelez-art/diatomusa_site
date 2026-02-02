"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { founders } from "@/data/founders";
import { useLanguage } from "@/components/LanguageContext";
import ContactModal from "@/components/ContactModal";

export default function FoundersSection() {
  const { content, language } = useLanguage();
  const [selectedFounder, setSelectedFounder] = useState<{ name: string; email: string } | null>(null);

  return (
    <section className="bg-mist-20 py-24 border-t border-mist-160/40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
            {content.foundersSection.tag}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
            {content.foundersSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink-500">
            {content.foundersSection.subtitle}
          </p>
        </div>

        <div className="grid gap-12 md:max-w-4xl md:mx-auto md:grid-cols-2">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative mb-6 h-48 w-48 overflow-hidden rounded-full border-2 border-mist-160/30 shadow-xl transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-ink-900">
                {founder.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-rose-260 font-semibold">
                {founder.role[language]}
              </p>
              
              <p className="mt-4 text-sm leading-relaxed text-ink-600/90 max-w-sm">
                {founder.bio[language]}
              </p>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => setSelectedFounder({ name: founder.name, email: founder.email })}
                  className="rounded-full bg-mist-40 px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-ink-700 transition-colors hover:bg-rose-220 hover:text-ink-900"
                >
                  {content.foundersSection.contactButton}
                </button>
                <Link
                  href={founder.linkedin}
                  target="_blank"
                  className="rounded-full border border-mist-160/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-ink-500 transition-colors hover:border-ink-900 hover:text-ink-900"
                >
                  {content.foundersSection.linkedinButton}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContactModal
        isOpen={!!selectedFounder}
        onClose={() => setSelectedFounder(null)}
        founderName={selectedFounder?.name || ""}
        founderEmail={selectedFounder?.email || ""}
      />
    </section>
  );
}
