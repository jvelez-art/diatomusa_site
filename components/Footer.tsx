"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function Footer() {
  const { content } = useLanguage();
  const { navigation, footer } = content;

  return (
    <footer className="w-full border-t border-mist-120 bg-mist-40 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-ink-900">
              DIATOMUSA
            </h3>
            <p className="text-sm leading-relaxed text-ink-500 font-serif">
              {footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-ink-900">{footer.explore}</h4>
            <ul className="space-y-3 text-sm text-ink-500">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-rose-260">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-ink-900">{footer.support}</h4>
            <ul className="space-y-3 text-sm text-ink-500">
              <li>
                <Link href="/cuidado" className="hover:text-rose-260">
                  {content.navigation.find((n) => n.href === "/cuidado")?.label || "Uso y Cuidado"}
                </Link>
              </li>
              <li>
                <Link href="/garantia" className="hover:text-rose-260">
                  {content.navigation.find((n) => n.href === "/garantia")?.label || "Garantía"}
                </Link>
              </li>
              <li>
                <Link href="/comprar" className="hover:text-rose-260">
                  {content.navigation.find((n) => n.href === "/comprar")?.label || "Comprar"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-ink-900">{footer.legal}</h4>
            <ul className="space-y-3 text-sm text-ink-500">
              <li>
                <Link href="/aviso-legal" className="hover:text-rose-260">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-rose-260">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-rose-260">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-mist-120 pt-8 text-xs text-ink-400 md:flex-row">
          <p>© {new Date().getFullYear()} DIATOMUSA. {footer.rights}</p>
          <p>{footer.designedIn}</p>
        </div>
      </div>
    </footer>
  );
}
