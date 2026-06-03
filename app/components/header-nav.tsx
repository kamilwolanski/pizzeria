'use client';

import { usePathname } from 'next/navigation';
import { navItems } from '../features/shared/site-data';
import { Container } from './container';
import { FaArrowLeft } from 'react-icons/fa';

export function HeaderNav() {
  const pathname = usePathname();
  const isOrderPage = pathname === '/zamowienie';

  return (
    <header className="bg-[#050505]">
      <Container>
        <div
          className="
            grid items-center gap-4 py-4
            md:grid-cols-[auto_1fr_auto] md:gap-x-8
            lg:gap-x-12
          "
        >
          {/* Logo */}
          <a
            className="inline-flex w-fit items-center font-heading text-2xl font-bold uppercase leading-none text-white"
            href={isOrderPage ? '/' : '/#top'}
            aria-label="Galio Pizza"
          >
            Galio Pizza
          </a>

          {isOrderPage ? (
            /* ── Order page: back link centred ── */
            <>
              <div />
              <a
                href="/"
                className="inline-flex items-center gap-2 font-base text-sm font-semibold text-white/70 transition-colors hover:text-white"
              >
                <FaArrowLeft size={12} />
                Powrót do strony głównej
              </a>
            </>
          ) : (
            /* ── Main site: full nav + CTA ── */
            <>
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
                        ? "after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-(--c-red) after:content-['']"
                        : ''
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="hidden items-center md:flex md:justify-end">
                <a
                  className="inline-flex h-11 items-center justify-center rounded-full bg-red-700 px-6 text-sm font-semibold uppercase text-white"
                  href="/zamowienie"
                >
                  Zamów online
                </a>
              </div>
            </>
          )}
        </div>
      </Container>
    </header>
  );
}
