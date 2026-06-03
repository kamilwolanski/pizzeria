import Image from 'next/image';
import { Container } from '../container';
import { ArrowLink } from '../ui/arrow-link';
import { heroFeatures } from '../../features/home/home-data';

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[calc(100svh-148px)] bg-[#050505] text-white md:min-h-[660px]"
    >
      <Image
        src="/pizza-hero.png"
        alt=""
        width={1920}
        height={1080}
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 h-full w-full object-cover object-[62%_center] md:object-center lg:left-auto lg:right-0 lg:w-[90%] 2xl:w-[85%] 3xl:w-[75%]"
      />
      <div className="hero-overlay absolute inset-0 z-10" />

      <Container className="relative z-20 flex min-h-[inherit] flex-col justify-center py-12 sm:py-16 md:py-16">
        <div className="max-w-[520px]">
          <h1 className="m-0 font-heading text-5xl font-extrabold uppercase leading-none text-brand-white [text-shadow:0_2px_0_rgba(0,0,0,.35)] sm:text-6xl lg:text-[88px]">
            Prawdziwa
            <span className="block text-white">
              <i className="not-italic text-(--c-green)">Pi</i>zz
              <i className="not-italic text-(--c-red)">a</i>
            </span>
            Neapolitańska
          </h1>

          <div className="tricolor" />

          <p className="m-0 max-w-[430px] font-base text-base font-medium leading-[1.55] sm:text-lg text-brand-white">
            Prosto z Neapolu na Twój stół - nasza pizza powstaje z najlepszych włoskich
            składników i dojrzewa 24 godziny. Jeden kęs i poczujesz smak prawdziwej Italii.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <ArrowLink href="/zamowienie">Zamów online</ArrowLink>
            <ArrowLink href="#menu" variant="ghost">
              Zobacz menu
            </ArrowLink>
          </div>
        </div>

        <div className="mt-10 grid max-w-[840px] gap-4 sm:grid-cols-3 lg:mt-14">
          {heroFeatures.map((feature, index) => (
            <div
              key={feature.icon}
              className="relative grid min-h-[58px] grid-cols-[50px_1fr] items-center gap-4 rounded-lg bg-black/24 p-4 sm:rounded-none sm:bg-transparent sm:px-6"
            >
              <Image src={feature.icon} alt="" width={50} height={50} unoptimized />
              <p className="m-0 font-base text-sm font-semibold leading-[1.35] text-brand-white">
                {feature.lines[0]}
                <br />
                {feature.lines[1]}
              </p>
              {index < heroFeatures.length - 1 && (
                <div className="absolute right-0 hidden h-10 w-[2px] bg-white/15 sm:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
