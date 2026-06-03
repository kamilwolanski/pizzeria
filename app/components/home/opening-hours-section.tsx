import Image from 'next/image';
import { openingHours } from '../../features/shared/site-data';
import { Container } from '../container';
import { SectionTitle } from '../ui/section-title';

export function OpeningHoursSection() {
  return (
    <section className="relative overflow-hidden bg-[#101010] text-white">
      <Image
        src="/kneading_the_dough.png"
        alt=""
        width={600}
        height={600}
        sizes="15vw"
        unoptimized
        className="absolute right-0 w-[650px] object-cover hidden md:block"
        style={{
          WebkitMaskImage:
            'linear-gradient(to left, black 45%, rgba(0,0,0,.8) 60%, rgba(0,0,0,.3) 80%, transparent 100%)',
          maskImage:
            'linear-gradient(to left, black 45%, rgba(0,0,0,.8) 60%, rgba(0,0,0,.3) 80%, transparent 100%)',
        }}
      />
      <Image
        src="/kneading_the_dough.png"
        alt=""
        fill
        sizes="15vw"
        unoptimized
        className="absolute right-0 object-cover md:hidden"
      />
      <div className="absolute inset-0 bg-black/80 md:hidden" />

      <Container className="relative py-9 sm:py-11">
        <Image
          src="/leaf.png"
          alt=""
          width={400}
          height={400}
          unoptimized
          className="pointer-events-none absolute -left-48 top-8 z-0 hidden opacity-45 md:block"
        />

        <div className="relative z-10 mx-auto grid w-fit gap-8 lg:grid-cols-[minmax(0,520px)_1px_minmax(260px,360px)] lg:items-center lg:justify-center lg:gap-10">
          <div>
            <SectionTitle>Godziny otwarcia</SectionTitle>
            <div className="mt-6 grid gap-2 font-base sm:grid-cols-2 sm:gap-x-10">
              {openingHours.map(([day, hour]) => {
                const isWeekend = day === 'Sobota' || day === 'Niedziela';
                return (
                  <div
                    key={day}
                    className={`flex justify-between gap-6 text-sm ${
                      isWeekend ? 'font-black text-(--c-red)' : ''
                    }`}
                  >
                    <span>{day}</span>
                    <strong className={isWeekend ? 'font-black' : 'font-medium'}>{hour}</strong>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden h-36 w-px bg-white/15 lg:block" />

          <div className="flex items-center gap-4">
            <Image src="/icons/clock.png" alt="" width={70} height={70} unoptimized />
            <p className="m-0 font-base text-base font-semibold uppercase">
              Zamówienia online <br />
              przyjmujemy do 30 minut <br />
              <span className="text-green-600">przed zamknięciem.</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
