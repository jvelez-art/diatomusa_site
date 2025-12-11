import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-mist-120 bg-mist-20/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-6">
                    <Link href="/" className="font-serif text-xl font-bold tracking-tight text-ink-900">
                        DIATOMUSA
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-500">
                        <Link href="/producto" className="hover:text-rose-260 transition-colors">
                            Producto
                        </Link>
                        <Link href="/ciencia" className="hover:text-rose-260 transition-colors">
                            Ciencia & Material
                        </Link>
                        <Link href="/cuidado" className="hover:text-rose-260 transition-colors">
                            Uso y Cuidado
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://www.amazon.es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-ink-800"
                    >
                        <ShoppingCart className="h-4 w-4" />
                        Comprar en Amazon
                    </a>
                    <button className="md:hidden p-2 text-ink-900">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
