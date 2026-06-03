import Image from 'next/image';
import { Container } from '../container';
import { SectionTitle } from '../ui/section-title';

export function AboutSection() {
  return (
    <section id="onas" className="relative bg-(--c-paper) border-t border-t-[#ccbfa7]">
      <Image
        src="/basil_leafs.png"
        alt=""
        height={500}
        width={500}
        sizes="15vw"
        unoptimized
        className="absolute left-0 top-0 z-0 hidden object-contain xl:block opacity-55"
      />
      <Container className="px-0">
        <div className="grid lg:grid-cols-[minmax(280px,360px)_minmax(380px,1fr)] relative">
          <div className="px-4 py-8 sm:px-8 lg:px-10 lg:py-10 xl:px-10">
            <SectionTitle>O nas</SectionTitle>
            <p className="my-6 max-w-[360px] font-base font-semibold leading-[1.55]">
              Jesteśmy małą pizzerią z pasją do neapolitańskiej tradycji. Nasze ciasto dojrzewa
              24 godziny, a pizze wypiekamy w piecu o bardzo wysokiej temperaturze, dzięki czemu
              są lekkie, chrupiące i pełne smaku.
            </p>
            <p className="signature my-6">Galio Pizza</p>
          </div>

          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[520px] my-6 shadow-lg rounded-4xl">
            <Image
              src="/pizza.jpg"
              alt="Biały lokal Galio Pizza z oknem odbioru"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover rounded-4xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
