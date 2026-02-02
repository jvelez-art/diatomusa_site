"use client";

import Link from "next/link";
import { SITE_CONFIG, CTA_TEXT } from "@/config/site-config";
// import { cn } from "@/lib/utils"; 
// Actually, looking at previous file reads, I didn't see a lib/utils. I'll stick to standard className strings if no util exists.

interface SmartCTAProps {
  className?: string;
  variant?: "primary" | "secondary" | "sticky";
}

export default function SmartCTA({ className = "", variant = "primary" }: SmartCTAProps) {
  const isPreLaunch = SITE_CONFIG.mode === "PRE_LAUNCH";
  const label = isPreLaunch ? CTA_TEXT.PRE_LAUNCH : CTA_TEXT.LIVE;
  const href = isPreLaunch 
    ? `mailto:${SITE_CONFIG.contactEmail}?subject=Lista de Espera &body=Hola, quiero estar en la lista para el lanzamiento en España.` 
    : SITE_CONFIG.amazonUrl;

  const baseStyles = "inline-flex items-center justify-center gap-2 transition-all duration-300";
  
  const variants = {
    primary: "bg-rose-220 text-ink-900 hover:bg-rose-260 font-serif font-semibold uppercase tracking-[0.12em] px-6 py-3 rounded-full shadow-[0_20px_45px_-24px_rgba(176,117,98,0.55)] hover:-translate-y-0.5",
    secondary: "text-ink-700 underline underline-offset-8 hover:text-rose-220 font-semibold text-sm",
    sticky: "bg-rose-220 text-ink-900 hover:bg-rose-260 px-5 py-2 text-xs font-serif font-semibold uppercase tracking-[0.12em] rounded-full shadow-[0_20px_45px_-24px_rgba(176,117,98,0.55)] hover:-translate-y-0.5"
  };

  const appliedStyle = variant === "sticky" ? variants.sticky : (variant === "secondary" ? variants.secondary : variants.primary);

  return (
    <Link
      href={href}
      target={isPreLaunch ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={`${baseStyles} ${appliedStyle} ${className}`}
    >
      {label}
      {isPreLaunch && (
        <span className="ml-1 text-[10px] opacity-70">
           🇪🇸
        </span>
      )}
    </Link>
  );
}
