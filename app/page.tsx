import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Container } from "./components/container";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="
        relative inline-block
        font-heading text-3xl font-bold uppercase sm:text-4xl
        after:absolute
        after:left-0
        after:-bottom-3
        after:h-[2px]
        after:w-24
        after:rounded-full
        after:bg-[var(--color-brand-gold)]
        after:shadow-[0_0_8px_rgba(212,175,55,.25)]
      "
    >
      {children}
    </h2>
  );
}

const pizzas = [
  {
    name: "Margherita",
    description:
      "Pomidory san marzano, mozzarella fior di latte, bazylia, oliwa",
    price: "25,00 zł",
  },
  {
    name: "Diavola",
    description:
      "Pomidory san marzano, mozzarella fior di latte, spianata calabria, pomidorki",
    price: "29,00 zł",
    hot: true,
  },
  {
    name: "Parma",
    description:
      "Pomidory san marzano, mozzarella fior di latte, prosciutto crudo, rukola, grana padano",
    price: "30,00 zł",
  },
  {
    name: "Quattro Formaggi",
    description:
      "Pomidory san marzano, mozzarella fior di latte, gorgonzola, grana padano, ricotta",
    price: "31,00 zł",
  },
];

const heroFeatures = [
  {
    icon: "/icons/basil.png",
    label: (
      <>
        Najlepsze włoskie
        <br />
        składniki
      </>
    ),
  },
  {
    icon: "/icons/clock.png",
    label: (
      <>
        Ciasto dojrzewające
        <br />
        24 godziny
      </>
    ),
  },
  {
    icon: "/icons/pizza-oven.png",
    label: (
      <>
        Piec neapolitański
        <br />
        450°C
      </>
    ),
  },
];

const openingHours = [
  ["Poniedziałek", "15:00 - 21:00"],
  ["Wtorek", "15:00 - 21:00"],
  ["Środa", "15:00 - 21:00"],
  ["Czwartek", "15:00 - 21:00"],
  ["Piątek", "15:00 - 22:00"],
  ["Sobota", "14:00 - 22:00"],
  ["Niedziela", "14:00 - 21:00"],
] as const;

const contact = {
  phone: "695 561 593",
  phoneHref: "tel:+48695561593",
  email: "galiopizza@interia.pl",
  addressLines: ["Orzechówka 319C", "36-220 Jasienica Rosielna"],
  mapsUrl: "https://maps.google.com/?q=Orzechówka+319C",
};

function ArrowLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "dark" | "map";
  className?: string;
}) {
  const styles = {
    primary: "bg-red-700 text-brand-white border-red-700",
    ghost: "border-brand-gold/80 bg-black/10 text-brand-white",
    dark: "border-brand-gold/80 bg-[#fffbf4] text-ink",
    map: "border-brand-gold text-brand-white",
  };

  return (
    <a className={`btn-base ${styles[variant]} ${className}`} href={href}>
      {children}
      <FaLongArrowAltRight aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
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
                <i className="not-italic text-[var(--c-green)]">Pi</i>zz
                <i className="not-italic text-[var(--c-red)]">a</i>
              </span>
              Neapolitańska
            </h1>

            <div className="tricolor" />

            <p className="m-0 max-w-[430px] font-base text-base font-medium leading-[1.55]  sm:text-lg text-brand-white">
              Prosto z Neapolu na Twój stół - nasza pizza powstaje z najlepszych
              włoskich składników i dojrzewa 24 godziny. Jeden kęs i poczujesz
              smak prawdziwej Italii.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <ArrowLink href="#zamow">Zamów online</ArrowLink>
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
                <Image
                  src={feature.icon}
                  alt=""
                  width={50}
                  height={50}
                  unoptimized
                />
                <p className="m-0 font-base text-sm font-semibold leading-[1.35] text-brand-white">
                  {feature.label}
                </p>
                {index < heroFeatures.length - 1 && (
                  <div className="absolute right-0 hidden h-10 w-[2px] bg-white/15 sm:block" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="menu" className="relative overflow-hidden pt-8 pb-15">
        {/* <Image
          src="/menu-bg.png"
          alt=""
          fill
          sizes="100vw"
          unoptimized
          className="-z-10 object-cover"
        /> */}

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
        {/* <Image
          src="/right.png"
          alt=""
          height={500}
          width={500}
          sizes="15vw"
          unoptimized
          className="absolute right-0 top-0 z-0 hidden w-[15%] object-contain 3xl:block"
        /> */}

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
                Nasze pizze
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
            <div className="tricolor tricolor-title" />
          </div>

          <div className="my-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pizzas.map((pizza) => (
              <article
                key={pizza.name}
                className="overflow-hidden bg-[#fffbf4] rounded-3xl shadow-lg border border-[rgba(38,34,29,.18)]  shadow-[0_1px_0_rgba(255,255,255,.55)]"
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
                    {pizza.hot && (
                      <span
                        className="text-lg text-[var(--c-red)]"
                        aria-label="ostra"
                      >
                        🌶️
                      </span>
                    )}
                  </h3>
                  <p className="m-0 mb-4 min-h-[58px] font-base text-sm font-semibold leading-[1.45]">
                    {pizza.description}
                  </p>
                  <strong className="font-heading text-xl font-black text-[var(--c-red)]">
                    {pizza.price}
                  </strong>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center">
            <ArrowLink href="#pelne-menu" variant="dark">
              Zobacz pełne menu
            </ArrowLink>
          </div>

          <p className="mx-auto mt-7 flex max-w-[620px] items-center justify-center gap-3 text-center font-base font-bold">
            <Image
              src="/icons/pizza.png"
              alt=""
              width={40}
              height={40}
              unoptimized
            />
            <span>
              Wszystkie nasze pizze przygotowujemy w jednym rozmiarze -{" "}
              <strong className="text-[var(--c-red)]">32 cm</strong>
            </span>
          </p>
        </Container>
      </section>

      <section
        id="onas"
        className="relative bg-[var(--c-paper)] border-t border-t-[#ccbfa7] "
      >
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
            <div className="px-4 py-8 sm:px-8 lg:px-10 lg:py-10 xl:px-10 ">
              <SectionTitle>O nas</SectionTitle>
              <p className="my-6 max-w-[360px] font-base font-semibold leading-[1.55]">
                Jesteśmy małą pizzerią z pasją do neapolitańskiej tradycji.
                Nasze ciasto dojrzewa 24 godziny, a pizze wypiekamy w piecu o
                bardzo wysokiej temperaturze, dzięki czemu są lekkie, chrupiące
                i pełne smaku.
              </p>
              <p className="signature my-6">Galio Pizza</p>
            </div>

            <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[520px] my-6 shadow-lg rounded-4xl">
              <Image
                src="/pizza.jpg"
                alt="Biały lokal Galio Pizza z oknem odbioru"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover rounded-4xl "
              />
            </div>

            {/* <aside className="relative isolate bg-[#101010] px-4 py-8 text-brand-white before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-[#101010] before:content-[''] sm:px-8 lg:px-8 lg:py-10 lg:before:left-0 lg:before:translate-x-0 lg:after:absolute lg:after:inset-y-0 lg:after:left-full lg:after:-z-10 lg:after:w-[100vw] lg:after:bg-[#101010] lg:after:content-[''] xl:px-10">
              <SectionTitle>Odbiór u nas</SectionTitle>

              <address className="my-5 flex items-start gap-4 font-base font-semibold not-italic leading-[1.5]">
                <Image
                  src="/icons/location.png"
                  alt=""
                  width={30}
                  height={30}
                  unoptimized
                />
                <span>
                  {contact.addressLines.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </span>
              </address>

              <div className="mb-6 flex items-center gap-4 font-base text-sm font-semibold">
                <Image
                  src="/icons/telephone.png"
                  alt=""
                  width={30}
                  height={30}
                  unoptimized
                />
                <a href={contact.phoneHref}>{contact.phone}</a>
              </div>

              <div className="relative h-52 overflow-hidden rounded-lg sm:h-64 lg:h-56 xl:h-64">
                <Image
                  src="/mapa.png"
                  alt="Mapa dojazdu do Galio Pizza"
                  fill
                  sizes="(max-width: 1024px) 100vw, 430px"
                  className="object-cover"
                />
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0"
                  aria-label="Otwórz mapę dojazdu"
                />
              </div>

              <div className="mt-5">
                <ArrowLink href={contact.mapsUrl} variant="map">
                  Zobacz na mapie
                </ArrowLink>
              </div>
            </aside> */}
          </div>
        </Container>
      </section>

      <Container>
        <section className="mb-8 rounded-[24px] bg-[#101010] px-4 py-7 text-white sm:px-6 lg:px-10 lg:py-8">
          <SectionTitle>Odbiór u nas</SectionTitle>

          <div className="mt-8 flex flex-col gap-6 lg:mt-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Adres */}

            <div className="flex w-full items-start gap-4 lg:w-auto lg:items-center">
              <Image
                src="/icons/location.png"
                alt=""
                width={34}
                height={34}
                unoptimized
              />

              <div className="font-base text-base font-semibold leading-relaxed sm:text-lg lg:text-xl">
                {contact.addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>

            {/* Separator */}
            <div className="hidden h-16 w-px bg-[#C7962B]/40 lg:block" />

            {/* Telefon */}
            <div className="flex w-full items-center gap-4 lg:w-auto">
              <Image
                src="/icons/telephone.png"
                alt=""
                width={34}
                height={34}
                unoptimized
              />

              <a
                href={contact.phoneHref}
                className="font-base text-base font-semibold hover:text-[#C7962B] sm:text-lg lg:text-xl"
              >
                {contact.phone}
              </a>
            </div>

            {/* Separator */}
            <div className="hidden h-16 w-px bg-[#C7962B]/40 lg:block" />

            {/* Odbiór */}
            <div className="flex w-full items-center gap-4 lg:w-auto">
              <Image
                src="/icons/clock.png"
                alt=""
                width={34}
                height={34}
                unoptimized
              />

              <div>
                <div className="font-base text-base font-semibold sm:text-lg lg:text-xl">
                  Odbiór osobisty
                </div>

                <div className="font-semibold text-[#C7962B]">Zamów online</div>
              </div>
            </div>

            {/* Mapa */}
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
              "linear-gradient(to left, black 45%, rgba(0,0,0,.8) 60%, rgba(0,0,0,.3) 80%, transparent 100%)",
            maskImage:
              "linear-gradient(to left, black 45%, rgba(0,0,0,.8) 60%, rgba(0,0,0,.3) 80%, transparent 100%)",
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
                  const isWeekend = day === "Sobota" || day === "Niedziela";

                  return (
                    <div
                      key={day}
                      className={`flex justify-between gap-6 text-sm ${
                        isWeekend ? "font-black text-[var(--c-red)]" : ""
                      }`}
                    >
                      <span>{day}</span>
                      <strong
                        className={isWeekend ? "font-black" : "font-medium"}
                      >
                        {hour}
                      </strong>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hidden h-36 w-px bg-white/15 lg:block" />

            <div className="flex items-center gap-4">
              <Image
                src="/icons/clock.png"
                alt=""
                width={70}
                height={70}
                unoptimized
              />
              <p className="m-0 font-base text-base font-semibold uppercase">
                Zamówienia online <br />
                przyjmujemy do 30 minut <br />
                <span className="text-green-600">przed zamknięciem.</span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <footer id="kontakt" className="bg-[var(--c-paper)]">
        <Container className="py-9 sm:py-10">
          <div className="grid gap-8 font-base md:grid-cols-3 md:gap-9 md:[&>div:not(:last-child)]:border-r md:[&>div:not(:last-child)]:border-[rgba(45,39,31,.2)]">
            <div className="md:pr-6">
              <p className="m-0 max-w-[300px] text-sm font-semibold leading-[1.45]">
                <b>Galio Pizza</b> - prawdziwa pizza neapolitańska w Orzechówce.
                Dziękujemy, że jesteś z nami!
              </p>
            </div>

            <div className="md:pr-6">
              <h2 className="m-0 font-heading text-3xl uppercase sm:text-4xl">
                Kontakt
              </h2>
              <div className="mt-4 flex flex-col gap-3">
                <p className="m-0 flex items-center gap-3 text-sm font-semibold">
                  <Image
                    src="/footer/telephone.png"
                    width={24}
                    height={24}
                    alt=""
                  />
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </p>
                <p className="m-0 flex items-start gap-3 text-sm font-semibold leading-[1.45]">
                  <Image
                    src="/footer/location.png"
                    width={24}
                    height={24}
                    alt=""
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
                  <Image src="/footer/mail.png" width={24} height={24} alt="" />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              </div>
            </div>

            <div id="zamow">
              <h2 className="m-0 font-heading text-3xl uppercase sm:text-4xl">
                Zamów online
              </h2>
              <p className="my-4 max-w-[275px] text-sm font-semibold leading-[1.45]">
                Szybko, wygodnie i bez kolejki.
              </p>
              <ArrowLink href="#zamow">Zamów online</ArrowLink>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
