import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { amazonUrl, navigation } from "@/data/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-mist-120 bg-mist-20/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-serif text-xl font-bold tracking-[0.12em] text-ink-900"
            aria-label="DIATOMUSA, volver al inicio"
          >
            DIATOMUSA
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-medium text-ink-600 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-rose-260"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-transform hover:scale-105 hover:bg-ink-800 md:flex"
          >
            <ShoppingCart className="h-4 w-4" />
            Comprar en Amazon
          </a>
          <button
            className="rounded-full p-2 text-ink-900 hover:bg-mist-40 md:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
