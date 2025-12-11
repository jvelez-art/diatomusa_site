import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-mist-40 border-t border-mist-120 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <h3 className="font-serif text-lg font-bold text-ink-900">DIATOMUSA</h3>
                        <p className="text-sm text-ink-500 leading-relaxed max-w-xs">
                            La ciencia del confort cotidiano. Alfombrillas de baño de diatomita que unen ingeniería de materiales con diseño minimalista.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-ink-900 mb-4">Explorar</h4>
                        <ul className="space-y-3 text-sm text-ink-500">
                            <li><Link href="/" className="hover:text-rose-260">Inicio</Link></li>
                            <li><Link href="/producto" className="hover:text-rose-260">Producto</Link></li>
                            <li><Link href="/ciencia" className="hover:text-rose-260">Ciencia</Link></li>
                            <li><Link href="/historia" className="hover:text-rose-260">Historia</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-ink-900 mb-4">Soporte</h4>
                        <ul className="space-y-3 text-sm text-ink-500">
                            <li><Link href="/cuidado" className="hover:text-rose-260">Uso y Cuidado</Link></li>
                            <li><Link href="/faq" className="hover:text-rose-260">Preguntas Frecuentes</Link></li>
                            <li><Link href="/contacto" className="hover:text-rose-260">Contacto</Link></li>
                            <li><Link href="/garantia" className="hover:text-rose-260">Garantía</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-ink-900 mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-ink-500">
                            <li><Link href="/aviso-legal" className="hover:text-rose-260">Aviso Legal</Link></li>
                            <li><Link href="/privacidad" className="hover:text-rose-260">Privacidad</Link></li>
                            <li><Link href="/cookies" className="hover:text-rose-260">Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-mist-120 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-400">
                    <p>© {new Date().getFullYear()} DIATOMUSA. Todos los derechos reservados.</p>
                    <p>Diseñado en España.</p>
                </div>
            </div>
        </footer>
    );
}
