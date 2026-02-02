"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import SmartCTA from "@/components/SmartCTA";

export default function StickyCTA() {
  const { content } = useLanguage();
  const {
    amazonUrl,
    pages: { home: t },
  } = content;

  return (
    <div className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center lg:inset-x-auto lg:left-1/2 lg:w-auto lg:-translate-x-1/2">
      <SmartCTA variant="sticky" />
    </div>
  );
}
