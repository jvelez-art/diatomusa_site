"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site-config";
import WaitlistModal from "@/components/WaitlistModal";
import { useLanguage } from "@/components/LanguageContext";

interface SmartCTAProps {
  className?: string;
  variant?: "primary" | "secondary" | "sticky";
}

export default function SmartCTA({ className = "", variant = "primary" }: SmartCTAProps) {
  const { content } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const isPreLaunch = SITE_CONFIG.mode === "PRE_LAUNCH";
  // The logic for label is now dynamic based on content
  const label = isPreLaunch ? content.smartCTA.preLaunch : content.smartCTA.live;
  
  const baseStyles = "inline-flex items-center justify-center gap-2 transition-all duration-300";
  
  const variants = {
    primary: "bg-rose-220 text-ink-900 hover:bg-rose-260 font-serif font-semibold uppercase tracking-[0.12em] px-6 py-3 rounded-full shadow-[0_20px_45px_-24px_rgba(176,117,98,0.55)] hover:-translate-y-0.5",
    secondary: "text-ink-700 underline underline-offset-8 hover:text-rose-220 font-semibold text-sm",
    sticky: "bg-rose-220 text-ink-900 hover:bg-rose-260 px-5 py-2 text-xs font-serif font-semibold uppercase tracking-[0.12em] rounded-full shadow-[0_20px_45px_-24px_rgba(176,117,98,0.55)] hover:-translate-y-0.5"
  };

  const appliedStyle = variant === "sticky" ? variants.sticky : (variant === "secondary" ? variants.secondary : variants.primary);

  // If in PRE_LAUNCH mode, we use a button to open the modal
  if (isPreLaunch) {
    return (
      <>
        <button
          onClick={() => setIsModalOpen(true)}
          className={`${baseStyles} ${appliedStyle} ${className}`}
        >
          {label}
          <span className="ml-1 text-[10px] opacity-70">
             🇪🇸
          </span>
        </button>
        
        <WaitlistModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </>
    );
  }

  // If in LIVE mode, standard link to Amazon
  return (
    <Link
      href={SITE_CONFIG.amazonUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${appliedStyle} ${className}`}
    >
      {label}
    </Link>
  );
}
