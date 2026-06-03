import Image from 'next/image';
import { contact } from '../../features/shared/site-data';
import { Container } from '../container';
import { ArrowLink } from '../ui/arrow-link';
import { SectionTitle } from '../ui/section-title';

export function PickupSection() {
  return (
    <Container>
      <section className="mb-8 rounded-[24px] bg-[#101010] px-4 py-7 text-white sm:px-6 lg:px-10 lg:py-8">
        <SectionTitle>Odbiór u nas</SectionTitle>

        <div className="mt-8 flex flex-col gap-6 lg:mt-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full items-start gap-4 lg:w-auto lg:items-center">
            <Image src="/icons/location.png" alt="" width={34} height={34} unoptimized />
            <div className="font-base text-base font-semibold leading-relaxed sm:text-lg lg:text-xl">
              {contact.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>

          <div className="hidden h-16 w-px bg-[#C7962B]/40 lg:block" />

          <div className="flex w-full items-center gap-4 lg:w-auto">
            <Image src="/icons/telephone.png" alt="" width={34} height={34} unoptimized />
            <a
              href={contact.phoneHref}
              className="font-base text-base font-semibold hover:text-[#C7962B] sm:text-lg lg:text-xl"
            >
              {contact.phone}
            </a>
          </div>

          <div className="hidden h-16 w-px bg-[#C7962B]/40 lg:block" />

          <div className="flex w-full items-center gap-4 lg:w-auto">
            <Image src="/icons/clock.png" alt="" width={34} height={34} unoptimized />
            <div>
              <div className="font-base text-base font-semibold sm:text-lg lg:text-xl">
                Odbiór osobisty
              </div>
              <div className="font-semibold text-[#C7962B]">Zamów online</div>
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <div className="relative mb-4 h-[180px] w-full overflow-hidden rounded-xl sm:h-[220px] lg:h-[170px] lg:w-[280px] lg:shrink-0">
              <Image
                src="/mapa.png"
                alt="Mapa dojazdu do Galio Pizza"
                fill
                sizes="(max-width: 1024px) 100vw, 280px"
                className="object-cover"
              />
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0"
                aria-label="Otwórz mapę"
              />
            </div>
            <ArrowLink href={contact.mapsUrl} variant="map" className="w-full">
              Zobacz na mapie
            </ArrowLink>
          </div>
        </div>
      </section>
    </Container>
  );
}
