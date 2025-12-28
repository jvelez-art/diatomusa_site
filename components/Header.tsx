"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/content";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-mist-120 bg-mist-20/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 w-full">
          <Link
            href="/"
            className="flex items-center gap-3 font-serif text-xl font-bold tracking-[0.12em] text-ink-900"
            aria-label="DIATOMUSA, volver al inicio"
          >
            <Image
              src="/images/Logotipo_Diatomusa_simbolo.png"
              alt="DIATOMUSA"
              width={28}
              height={28}
              className="h-6 w-6"
            />
            DIATOMUSA
          </Link>
          <nav className="hidden flex-1 items-center justify-evenly text-base font-semibold text-ink-700 md:flex font-serif">
            {navigation.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors hover:text-rose-260 ${
                    isActive
                      ? "text-ink-900 underline underline-offset-[10px] decoration-rose-220"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
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
