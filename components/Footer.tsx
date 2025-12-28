import Link from "next/link";
import { amazonUrl, navigation } from "@/data/content";

export default function Footer() {
  return (
    <footer className="w-full border-t border-mist-120 bg-mist-40 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-ink-900">
              DIATOMUSA
            </h3>
            <p className="text-sm leading-relaxed text-ink-500 font-serif">
              Sutil elegancia en tu ritual diario. Alfombrillas de diatomita
              con ingeniería de materiales y diseño sereno.
            </p>
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-ink-900 px-4 py-2 text-xs font-serif font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-ink-800"
            >
              Comprar en Amazon
            </a>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-ink-900">Explorar</h4>
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
            <h4 className="mb-4 font-semibold text-ink-900">Soporte</h4>
            <ul className="space-y-3 text-sm text-ink-500">
              <li>
                <Link href="/cuidado" className="hover:text-rose-260">
                  Uso y Cuidado
                </Link>
              </li>
              <li>
                <Link href="/garantia" className="hover:text-rose-260">
                  Garantía
                </Link>
              </li>
              <li>
                <Link href="/comprar" className="hover:text-rose-260">
                  Comprar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-ink-900">Legal</h4>
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
          <p>© {new Date().getFullYear()} DIATOMUSA. Todos los derechos reservados.</p>
          <p>Diseñado en España.</p>
        </div>
      </div>
    </footer>
  );
}
