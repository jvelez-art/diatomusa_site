"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { X, Loader2, Send } from "lucide-react";
import { sendContactEmail } from "@/app/actions";
import { useLanguage } from "@/components/LanguageContext";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  founderName: string;
  founderEmail: string;
}

export default function ContactModal({ isOpen, onClose, founderName, founderEmail }: ContactModalProps) {
  const { content } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setError(null);
    
    // Append founder info (hidden fields logic handled in server action or just passing text)
    // Ideally we pass these as arguments to the server action, but bind is cleaner.
    // simpler: append to formData just before sending, or pass as args. 
    // Let's use bind in the form action call or hidden inputs.
    formData.append("founderEmail", founderEmail);
    formData.append("founderName", founderName);

    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          setSuccess(false); 
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

  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-mist-160/60 bg-white/95 p-8 shadow-2xl ring-1 ring-white/50 backdrop-blur-xl sm:p-10">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-ink-400 transition-colors hover:bg-mist-40 hover:text-ink-900"
        >
          <X className="h-5 w-5" />
        </button>

        {!success ? (
          <div className="space-y-6">
            <div className="text-center">
              <span className="inline-block rounded-full bg-mist-40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-600">
                {content.modals.contact.tag}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-bold text-ink-900">
                {content.modals.contact.title.replace("{name}", founderName.split(' ')[0])}
              </h3>
              <p className="mt-2 text-sm text-ink-500">
                {content.modals.contact.subtitle}
              </p>
            </div>

            <form action={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="userName" className="sr-only">Name</label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    required
                    placeholder={content.modals.contact.namePlaceholder}
                    className="w-full rounded-xl border border-mist-160/60 bg-mist-20/50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-rose-220 focus:outline-none focus:ring-1 focus:ring-rose-220"
                  />
                </div>
                <div>
                  <label htmlFor="userEmail" className="sr-only">Email</label>
                  <input
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    required
                    placeholder={content.modals.contact.emailPlaceholder}
                    className="w-full rounded-xl border border-mist-160/60 bg-mist-20/50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-rose-220 focus:outline-none focus:ring-1 focus:ring-rose-220"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  placeholder={content.modals.contact.messagePlaceholder.replace("{name}", founderName.split(' ')[0])}
                  className="w-full resize-none rounded-xl border border-mist-160/60 bg-mist-20/50 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-rose-220 focus:outline-none focus:ring-1 focus:ring-rose-220"
                />
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
                  <>
                    <Send className="h-4 w-4" />
                    {content.modals.contact.submitButton}
                  </>
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
              {content.modals.contact.successTitle}
            </h3>
            <p className="mt-2 text-sm text-ink-500">
              {content.modals.contact.successMessage.replace("{name}", founderName.split(' ')[0])}
            </p>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
