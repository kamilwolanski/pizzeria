import Image from 'next/image';
import { Container } from '../container';
import { ArrowLink } from '../ui/arrow-link';
import { homeMenuPizzas } from '../../features/home/home-data';

export function MenuSection() {
  return (
    <section id="menu" className="relative overflow-hidden pt-8 pb-15">
      <Image
        src="/basil_bowl_2.png"
        alt=""
        height={500}
        width={500}
        sizes="15vw"
        unoptimized
        className="absolute -left-50 top-0 z-0 hidden object-contain xl:block opacity-85"
      />
      <Image
        src="/tomatoes.png"
        alt=""
        height={450}
        width={450}
        sizes="15vw"
        unoptimized
        className="absolute -right-40 -bottom-20 z-0 hidden object-contain xl:block opacity-85"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 text-center sm:gap-4">
            <Image
              src="/left-leaf.png"
              alt=""
              width={72}
              height={72}
              unoptimized
              className="w-14 sm:w-[72px]"
            />
            <h2 className="m-0 font-heading text-4xl font-semibold uppercase sm:text-5xl">
              Nasze specjalności
            </h2>
            <Image
              src="/right-leaf.png"
              alt=""
              width={72}
              height={72}
              unoptimized
              className="w-14 sm:w-[72px]"
            />
          </div>
          <div className="tricolor tricolor-title w-[300px]" />
        </div>

        <div className="my-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeMenuPizzas.map((pizza) => (
            <article
              key={pizza.name}
              className="overflow-hidden bg-brand-white rounded-3xl shadow-lg border border-[rgba(38,34,29,.18)] shadow-[0_1px_0_rgba(255,255,255,.55)]"
            >
              <div className="relative h-[180px] overflow-hidden bg-[#1a100a]">
                <Image
                  src="/pizza-hero.png"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="m-0 mb-2 flex items-center gap-2 font-heading text-2xl font-semibold uppercase tracking-wide">
                  {pizza.name}
                  {'hot' in pizza && pizza.hot && (
                    <span className="text-lg text-(--c-red)" aria-label="ostra">
                      🌶️
                    </span>
                  )}
                </h3>
                <p className="m-0 mb-4 min-h-[58px] font-base text-sm font-semibold leading-[1.45]">
                  {pizza.description}
                </p>
                <strong className="font-heading text-xl font-black text-(--c-red)">
                  {pizza.price}
                </strong>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <ArrowLink href="/zamowienie" variant="dark">
            Przejdź do zamówienia
          </ArrowLink>
        </div>

        <p className="mx-auto mt-7 flex max-w-[620px] items-center justify-center gap-3 text-center font-base font-bold">
          <Image src="/icons/pizza.png" alt="" width={40} height={40} unoptimized />
          <span>
            Wszystkie nasze pizze przygotowujemy w jednym rozmiarze -{' '}
            <strong className="text-(--c-red)">32 cm</strong>
          </span>
        </p>
      </Container>
    </section>
  );
}
