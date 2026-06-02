import type { Metadata } from "next";
import "./globals.css";
import { Container } from "./components/container";
import { Inter, Oswald, Bebas_Neue } from "next/font/google";

export const metadata: Metadata = {
  title: "Galio Pizza - Pizza Neapolitańska",
  description: "Prawdziwa pizza neapolitańska z odbiorem w Orzechówce.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const navItems = [
  { label: "Strona główna", href: "#top" },
  { label: "Menu", href: "#menu" },
  { label: "O nas", href: "#onas" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`h-full antialiased ${bebas.variable} ${oswald.variable} ${inter.variable}`}
    >
      <body className="flex min-h-full flex-col">
        <header className="bg-[#050505]">
          <Container>
            <header
              className="
                grid items-center gap-4 py-4
                md:grid-cols-[auto_1fr_auto] md:gap-x-8
                lg:gap-x-12
            "
            >
              <a
                className="inline-flex w-fit items-center font-heading text-2xl font-bold uppercase leading-none text-white"
                href="#top"
                aria-label="Galio Pizza"
              >
                Galio Pizza
              </a>

              <nav
                className="
                  -mx-4 flex gap-5 overflow-x-auto px-4 pb-1
                  font-heading text-base uppercase text-[#f8f8f8]
                  md:mx-0 md:justify-center md:gap-7 md:overflow-visible md:px-0 md:pb-0
                  lg:gap-[54px]
              "
                aria-label="Główne menu"
              >
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative shrink-0 pb-2 ${
                      index === 0
                        ? "after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-[var(--c-red)] after:content-['']"
                        : ""
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="hidden md:flex items-center md:justify-end">
                <a
                  className="inline-flex h-11 items-center justify-center rounded-full bg-red-700 px-6 text-sm font-semibold uppercase text-white"
                  href="#zamow"
                >
                  Zamów online
                </a>
              </div>
            </header>
          </Container>
        </header>

        {children}
      </body>
    </html>
  );
}
