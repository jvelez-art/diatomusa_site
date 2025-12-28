import type { Metadata } from "next";
import {
  Manrope,
  Playfair_Display,
  Roboto_Mono as RobotoMono,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = RobotoMono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | DIATOMUSA",
    default: "DIATOMUSA — Sutil elegancia en tu ritual diario",
  },
  description:
    "Alfombrillas de diatomita con secado visible, higiene superior y diseño minimalista. Sutil elegancia en tu ritual diario. Compra con envío Prime en Amazon.",
  keywords: [
    "alfombrilla diatomita",
    "alfombra baño piedra",
    "alfombra baño antideslizante",
    "piedra de diatomita",
    "esterilla secado rápido",
  ],
  metadataBase: new URL("https://www.diatomusa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DIATOMUSA — Sutil elegancia en tu ritual diario",
    description:
      "Alfombrillas de diatomita que transforman tu ritual de baño en una experiencia de confort, higiene y diseño sereno.",
    url: "https://www.diatomusa.com",
    siteName: "DIATOMUSA",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIATOMUSA — Sutil elegancia en tu ritual diario",
    description:
      "Alfombrillas de diatomita con secado visible y estética minimalista.",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${manrope.variable} ${robotoMono.variable} antialiased bg-mist-20 text-ink-900 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
