import Image from 'next/image';
import { deliveryAreas } from '../features/order/order-data';
import { contact, openingHours } from '../features/shared/site-data';
import { Container } from './container';

export function OrderFooter() {
  return (
    <footer className="bg-(--c-paper) border-t border-[rgba(45,39,31,.2)]">
      <Container className="py-8 sm:py-10">
        <div
          className="
            grid gap-8 font-base
            md:grid-cols-2
            lg:grid-cols-[minmax(200px,1fr)_minmax(180px,1fr)_minmax(200px,1fr)_minmax(180px,1fr)]
            lg:gap-6
            md:[&>div:not(:last-child)]:border-r
            md:[&>div:not(:last-child)]:border-[rgba(45,39,31,.15)]
          "
        >
          {/* ── Logo + opis ── */}
          <div className="md:pr-6">
            <p className="m-0 max-w-[280px] text-sm font-semibold leading-normal">
              <b>Galio Pizza</b> – prawdziwa pizza neapolitańska w Orzechówce.
              Dziękujemy, że jesteś z nami!
            </p>
          </div>

          {/* ── Kontakt ── */}
          <div className="md:pr-6">
            <h2 className="m-0 font-heading text-2xl uppercase sm:text-3xl">
              Kontakt
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              <p className="m-0 flex items-center gap-3 text-sm font-semibold">
                <Image src="/footer/telephone.png" width={20} height={20} alt="" />
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
              <p className="m-0 flex items-start gap-3 text-sm font-semibold leading-[1.45]">
                <Image
                  src="/footer/location.png"
                  width={20}
                  height={20}
                  alt=""
                  className="mt-0.5"
                />
                <span>
                  {contact.addressLines.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <p className="m-0 flex items-center gap-3 text-sm font-semibold">
                <Image src="/footer/mail.png" width={20} height={20} alt="" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            </div>
          </div>

          {/* ── Godziny otwarcia ── */}
          <div className="md:pr-6">
            <h2 className="m-0 font-heading text-2xl uppercase sm:text-3xl">
              Godziny otwarcia
            </h2>
            <div className="mt-4 flex flex-col gap-1.5">
              {openingHours.map(([day, hour]) => {
                const isWeekend = day === 'Sobota' || day === 'Niedziela';
                return (
                  <div
                    key={day}
                    className={`flex justify-between gap-4 text-xs ${
                      isWeekend ? 'font-black text-(--c-red)' : 'font-semibold'
                    }`}
                  >
                    <span>{day}</span>
                    <strong className={isWeekend ? 'font-black' : 'font-medium'}>
                      {hour}
                    </strong>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Obszar dostawy ── */}
          <div>
            <h2 className="m-0 font-heading text-2xl uppercase sm:text-3xl">
              Obszar dostawy
            </h2>
            <ul className="mt-4 flex flex-col gap-1.5 list-none p-0 m-0">
              {deliveryAreas.map((area) => (
                <li
                  key={area.id}
                  className="flex items-center gap-2 text-xs font-semibold"
                >
                  <span className="text-(--c-gold) font-bold text-sm">✓</span>
                  {area.label}
                  {area.minOrder === 70 && ' (od 70 zł)'}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
