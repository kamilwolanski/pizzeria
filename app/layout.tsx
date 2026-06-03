import type { Metadata } from "next";
import "./globals.css";
import { Inter, Oswald, Bebas_Neue } from "next/font/google";
import { HeaderNav } from "./components/header-nav";

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
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
