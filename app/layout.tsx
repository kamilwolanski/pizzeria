import type { Metadata } from "next";
import "./globals.css";
import { Container, Icon } from "./page";
import Image from "next/image";
import { Inter, Oswald, Bebas_Neue } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
export const metadata: Metadata = {
  title: "Galio Pizza - Pizza Neapolitanska",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`h-full antialiased ${bebas.variable} ${oswald.variable} ${inter.variable}`}>
      <body className='min-h-full flex flex-col'>
        {/* NAV */}
        <header className="bg-[#050505]">
          <Container className="">
            <header
              className="
              grid grid-cols-[150px_1fr_auto] items-center gap-x-12
              max-[1100px]:grid-cols-[126px_1fr]
              max-[720px]:grid-cols-1 max-[720px]:gap-y-4
              py-4
            "
            >
              <a
                className="inline-flex w-fit"
                href="#top"
                aria-label="Galio Pizza"
              >
                {/* <Image
                  src="/logo.jpg"
                  alt="Galio Pizza"
                  width={120}
                  height={50}
                /> */}
                {/* <Logo /> */}
              </a>

              <nav
                className="
                flex justify-center gap-[54px]
                uppercase font-[Impact,'Arial_Narrow',sans-serif] text-base text-[#f8f8f8]
                max-[1100px]:justify-end max-[1100px]:gap-7
                max-[720px]:justify-start max-[720px]:gap-5 max-[720px]:pt-0 max-[720px]:overflow-x-auto
              "
                aria-label="Glowne menu"
              >
                {(["Strona główna", "Menu", "O nas", "Kontakt"] as const).map(
                  (label, i) => {
                    const hrefs = ["#top", "#menu", "#onas", "#kontakt"];
                    return (
                      <a
                        key={label}
                        href={hrefs[i]}
                        className={`relative pb-[15px]${
                          i === 0
                            ? " after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[var(--c-red)]"
                            : ""
                        }`}
                      >
                        {label}
                      </a>
                    );
                  },
                )}
              </nav>

              <div className="flex gap-6 items-center max-[1100px]:col-start-2 max-[1100px]:pt-0 max-[720px]:col-auto max-[720px]:flex-wrap">
                {/* <button type="button" className="btn-base btn-cart">
                  <Icon name="cart" />
                  <span>0,00 zł</span>
                </button> */}
                <a className="bg-red-700 text-white text-sm px-6 py-3 rounded-full font-semibold uppercase" href="#zamow">
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
