"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { X, Loader2 } from "lucide-react";
import { subscribeAction } from "@/app/actions";
import { useLanguage } from "@/components/LanguageContext";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const { content } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const result = await subscribeAction(formData);
      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          setSuccess(false); // Reset for next time
        }, 3000);
      } else {
        setError(result.message || "Ocurrió un error.");
      }
    } catch {
      setError("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Use createPortal to ensure it's on top of everything
  // Note: Needs a mounting point, but usually document.body works fine in Next.js client components
  // If document is not available (SSR), we render null.
  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-mist-160/60 bg-white/95 p-8 shadow-2xl ring-1 ring-white/50 backdrop-blur-xl sm:p-10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-ink-400 transition-colors hover:bg-mist-40 hover:text-ink-900"
        >
          <X className="h-5 w-5" />
        </button>

        {!success ? (
          <div className="space-y-6">
            <div className="text-center">
              <span className="inline-block rounded-full bg-rose-220/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-260">
                {content.modals.waitlist.tag}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-bold text-ink-900 sm:text-3xl">
                {content.modals.waitlist.title}
              </h3>
              <p className="mt-3 text-sm text-ink-500">
                {content.modals.waitlist.subtitle}
              </p>
            </div>

            <form action={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder={content.modals.waitlist.emailPlaceholder}
                  className="w-full rounded-xl border border-mist-160/60 bg-mist-20/50 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:border-rose-220 focus:outline-none focus:ring-1 focus:ring-rose-220"
                />
              </div>

              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  name="privacy" 
                  id="privacy" 
                  required
                  className="mt-1 h-3 w-3 rounded border-mist-160 text-rose-220 focus:ring-rose-220"
                />
                <label htmlFor="privacy" className="text-xs text-ink-500">
                   {content.modals.waitlist.privacyLabel}
                </label>
              </div>

              {error && (
                <p className="text-xs font-medium text-red-500">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-rose-220 py-3 text-sm font-bold uppercase tracking-wider text-ink-900 shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-rose-260 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {content.modals.loading}
                  </>
                ) : (
                  content.modals.waitlist.submitButton
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-4 font-serif text-2xl font-bold text-ink-900">
              {content.modals.waitlist.successTitle}
            </h3>
            <p className="mt-2 text-sm text-ink-500">
              {content.modals.waitlist.successMessage}
            </p>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
