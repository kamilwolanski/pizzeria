import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
const pizzas = [
  {
    name: "Margherita",
    desc: "Pomidory san marzano, mozzarella fior di latte, bazylia, oliwa",
    price: "25,00 zł",
    mod: "classic",
  },
  {
    name: "Diavola",
    desc: "Pomidory san marzano, mozzarella fior di latte, spianata calabria, pomidorki",
    price: "29,00 zł",
    mod: "diavola",
    hot: true,
  },
  {
    name: "Parma",
    desc: "Pomidory san marzano, mozzarella fior di latte, prosciutto crudo, rukola, grana padano",
    price: "30,00 zł",
    mod: "parma",
  },
  {
    name: "Quattro Formaggi",
    desc: "Pomidory san marzano, mozzarella fior di latte, gorgonzola, grana padano, ricotta",
    price: "31,00 zł",
    mod: "bianca",
  },
];

const daysLeft = ["Poniedziałek", "Wtorek", "Środa", "Czwartek"];
const daysRight = ["Piątek", "Sobota", "Niedziela"];
const hours: Record<string, string> = {
  Poniedziałek: "15:00 - 21:00",
  Wtorek: "15:00 - 21:00",
  Środa: "15:00 - 21:00",
  Czwartek: "15:00 - 21:00",
  Piątek: "15:00 - 22:00",
  Sobota: "14:00 - 22:00",
  Niedziela: "14:00 - 21:00",
};
const weekend = new Set(["Sobota", "Niedziela"]);

// Wrapper centrujący content do max-7xl na desktop, padding na mobile
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}

export function Icon({
  name,
  large = false,
}: {
  name: string;
  large?: boolean;
}) {
  return (
    <span
      className={`icon icon-${name}${large ? " !w-[49px] !h-[49px]" : ""}`}
      aria-hidden="true"
    />
  );
}

export default function Home() {
  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 8% 38%, rgba(43,38,29,.08), transparent 17rem),
          radial-gradient(circle at 94% 45%, rgba(43,38,29,.08), transparent 18rem),
          #efe9dc`,
      }}
    >
      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section
        id="top"
        className="relative isolate bg-[#050505] text-white max-[720px]:min-h-[900px]"
      >
        <Image
          src="/pizza-hero.png"
          alt=""
          width={1920}
          height={1080}
          className="
    absolute
    right-0
    h-full
    w-full
    lg:w-[90%]
    2xl:w-[85%]
    3xl:w-[75%]
    object-cover
    z-[-2]
  "
        />
        <div
          className="absolute inset-0 -z-[2]"
          style={{
            background: `
              linear-gradient(90deg,rgba(0,0,0,.94) 0%,rgba(0,0,0,.77) 28%,rgba(0,0,0,.14) 66%,rgba(0,0,0,.22) 100%),
              linear-gradient(180deg,rgba(0,0,0,.38),transparent 45%,rgba(0,0,0,.52))`,
          }}
        />

        {/* HERO CONTENT */}
        <Container className="max-[720px]:pt-8 py-10">
          <h1
            className="
              m-0 max-w-[465px] uppercase
              font-heading font-extrabold
              text-[clamp(58px,6.9vw,88px)] leading-[0.98]
              text-[#f1f1f1] [text-shadow:0_2px_0_rgba(0,0,0,.35)]
              max-[720px]:text-5xl
            "
          >
            Prawdziwa
            <span className="block text-white">
              <i className="not-italic text-[var(--c-green)]">Pi</i>zz
              <i className="not-italic text-[var(--c-red)]">a</i>
            </span>
            Neapolitańska
          </h1>

          <div className="tricolor" />

          <p className="max-w-[410px] m-0 text-[#f2f2f2] text-lg leading-[1.48] font-base">
            Prosto z Neapolu na Twój stół - nasza pizza powstaje z najlepszych
            włoskich składników, dojrzewa 24 godziny. Jeden kęs i poczujesz smak
            prawdziwej Italii.
          </p>

          <div className="flex gap-6 mt-[30px] max-[720px]:flex-col">
            <a
              className="bg-red-700 text-white text-sm px-8 py-3 rounded-full font-semibold uppercase flex items-center gap-2"
              href="#zamow"
            >
              Zamów online{" "}
              <span>
                <FaLongArrowAltRight />
              </span>
            </a>
            <a className="btn-base btn-ghost" href="#menu">
              Zobacz menu
            </a>
          </div>

          <div className="grid grid-cols-3 max-w-[840px] mt-12 max-[720px]:grid-cols-1 max-[720px]:max-w-[300px] max-[720px]:gap-4 max-[720px]:mt-[34px]">
            <div className="relative min-h-[54px] px-8 grid grid-cols-[42px_1fr] items-center gap-4">
              <Image
                src="./icons/basil.png"
                alt=""
                width={52}
                height={52}
                unoptimized
              />
              <p className="m-0 font-base leading-[1.35] text-sm font-semibold">
                Najlepsze włoskie
                <br />
                składniki
              </p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-[2px] bg-white/15" />
            </div>
            <div className="relative min-h-[54px] px-8 grid grid-cols-[42px_1fr] items-center gap-4 ">
              <Image
                src="./icons/clock.png"
                alt=""
                width={52}
                height={52}
                unoptimized
              />
              <p className="m-0 font-base leading-[1.35] text-sm font-semibold">
                Ciasto dojrzewające
                <br />
                24 godziny
              </p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-[2px] bg-white/15" />
            </div>
            <div className="min-h-[54px] px-8 grid grid-cols-[42px_1fr] items-center gap-4 border-r border-white/20 last:border-r-0 max-[720px]:border-r-0">
              <Image
                src="./icons/pizza-oven.png"
                alt=""
                width={52}
                height={52}
                unoptimized
              />
              <p className="m-0 font-base leading-[1.35] text-sm font-semibold">
                Piec neapolitański
                <br />
                450°C
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════ MENU ═══════════════════════════════ */}
      <section
        id="menu"
        className="relative py-[31px] pb-[28px] overflow-hidden max-[720px]:pt-7"
      >
        <Image
          src="/menu-bg.png"
          alt=""
          fill
          sizes="100vw"
          unoptimized
          className="object-cover"
        />

        <Image
          src="/left.png"
          alt=""
          height={500}
          width={500}
          // fill
          sizes="100vw"
          unoptimized
          className="object-contain hidden 3xl:block absolute z-1 left-0 top-0  w-[15%]"
        />
        <Image
          src="/right.png"
          alt=""
          height={500}
          width={500}
          // fill
          sizes="100vw"
          unoptimized
          className="object-contain hidden 3xl:block absolute z-1 right-0 top-0  w-[15%]"
        />

        <Container className="relative">
          {/* Section title */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center gap-4 text-center">
              <Image
                src="/left-leaf.png"
                alt=""
                width={100}
                height={100}
                unoptimized
              />
              <h2 className="m-0 font-heading font-semibold uppercase text-5xl max-[720px]:text-4xl">
                Nasze pizze
              </h2>
              <Image
                src="/right-leaf.png"
                alt=""
                width={100}
                height={100}
                unoptimized
              />
            </div>
            <div className="flex h-1 w-45 justify-center items-center -mt-4 rounded-full overflow-hidden">
              <div className="w-full h-full bg-green-600"></div>
              <div className="w-full h-full bg-white"></div>
              <div className="w-full h-full bg-red-600"></div>
            </div>
          </div>
          {/* Pizza grid */}
          <div className="mt-8 mb-[22px] grid grid-cols-4 gap-[22px] max-[1100px]:grid-cols-2 max-[720px]:grid-cols-1">
            {pizzas.map((pizza) => (
              <article
                key={pizza.name}
                className="overflow-hidden border border-[rgba(38,34,29,.18)] rounded-lg bg-[rgba(244,239,229,.92)] shadow-[0_1px_0_rgba(255,255,255,.55)]"
              >
                <div
                  className={`pizza-thumb relative h-[180px] bg-[#1a100a] overflow-hidden ${pizza.mod}`}
                >
                  <Image
                    src="/pizza-hero.png"
                    alt=""
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                  />
                </div>
                <div className="min-h-[156px] p-[17px_17px_20px]">
                  <h3 className="m-0 mb-[7px] font-heading font-semibold uppercase text-2xl flex items-center gap-2 tracking-wider">
                    {pizza.name}
                    {pizza.hot && (
                      <span className="text-[var(--c-red)] text-lg">🌶️</span>
                    )}
                  </h3>
                  <p className="min-h-[57px] m-0 mb-4 text-sm font-semibold font-base leading-[1.45]">
                    {pizza.desc}
                  </p>
                  <strong className="text-[var(--c-red)] font-heading text-xl font-black">
                    {pizza.price}
                  </strong>
                </div>
              </article>
            ))}
          </div>

          <a className="btn-base btn-menu" href="#pelne-menu">
            Zobacz pełne menu <span>→</span>
          </a>

          <p className="mt-7 flex font-base items-center justify-center gap-3 font-bold max-[720px]:justify-start">
            <Image
              src="/icons/pizza.png"
              alt=""
              width={40}
              height={40}
              unoptimized
            />
            Wszystkie nasze pizze przygotowujemy w jednym rozmiarze –{" "}
            <strong className="text-[var(--c-red)] ">32 cm</strong>
          </p>
        </Container>
      </section>

      {/* ═══════════════════════════════ ABOUT ══════════════════════════════ */}
      <section id="onas" className="relative bg-[var(--c-paper)]">
        {/* <Image
          src="/bgc.png"
          alt=""
          fill
          sizes="100vw"
          unoptimized
          className="object-cover z-0 absolute inset-0"
        /> */}
        <Container className="!px-0 max-[720px]:!px-0 z-10">
          <div
            className="
              flex
              min-h-[365px]
              overflow-visible
              max-[1100px]:grid-cols-1
            "
          >
            {/* Copy */}
            <div className="px-10 py-10 max-[720px]:px-4 max-[720px]:py-8">
              <h2 className="m-0 font-heading font-bold uppercase text-4xl max-[720px]:text-3xl">
                O nas
              </h2>
              <p className="max-w-[285px] my-[25px] font-base font-semibold leading-[1.48]">
                Jesteśmy małą pizzerią z pasją do neapolitańskiej tradycji.
                Nasze ciasto dojrzewa 24 godziny, a pizze wypiekamy w piecu o
                bardzo wysokiej temperaturze, dzięki czemu są lekkie, chrupiące
                i pełne smaku.
              </p>
              <p className="signature my-[25px]">Galio Pizza </p>
            </div>

            {/* Photo — full bleed bez container */}
            <div className="relative min-h-[365px] overflow-hidden max-[720px]:min-h-[280px] grow">
              {/* <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(90deg, #efe9dc, transparent 13%, transparent 87%, #101010),
                    linear-gradient(180deg, #efe9dc 0, transparent 13%, transparent 92%, #101010)`,
                }}
              /> */}
              <Image
                src="/budka.jpg"
                alt="Bialy lokal Galio Pizza z oknem odbioru"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                className="object-cover"
              />
            </div>

            {/* Pickup panel */}
            {/* Pickup panel */}
            <aside className="w-[40%] relative bg-[#101010] text-white px-10 py-10 after:absolute after:top-0 after:left-full after:w-[100vw] after:h-full after:bg-[#101010] after:content-['']">
              <div className="absolute top-0 left-0 w-[200vw] h-full bg-[#101010] -z-10" />

              <h2 className="m-0 font-heading font-bold uppercase text-4xl max-[720px]:text-3xl">
                Odbiór u nas
              </h2>

              <div className="flex gap-4">
                <div>
                  <address className="my-5 not-italic font-base font-semibold leading-[1.5] flex items-start gap-4">
                    <Image
                      src="/icons/location.png"
                      alt=""
                      width={30}
                      height={30}
                      unoptimized
                    />
                    <p>
                      Orzechówka 319C
                      <br />
                      Orzechówka, Poland
                      <br />
                      36-220 Jasienica Rosielna
                    </p>
                  </address>

                  <div className="flex items-center gap-4 font-base font-semibold text-sm">
                    <Image
                      src="/icons/telephone.png"
                      alt=""
                      width={30}
                      height={30}
                      unoptimized
                    />
                    <a href="tel:+481234567">+48 123 452 677</a>
                  </div>

                  <div className="relative group h-200px w-full mt-6 rounded-xl overflow-hidden">
                    <Image
                      src="/mapa.png"
                      alt="Dojazd"
                      fill
                      className="object-cover rounded-xl"
                    />

                    <a
                      href="https://maps.google.com/?q=Orzechówka+319C"
                      target="_blank"
                      className="absolute inset-0"
                    />
                  </div>
                  <a
                    className="btn-base btn-map inline-flex items-center"
                    href="#mapa"
                  >
                    Zobacz na mapie
                    <span>
                      <FaLongArrowAltRight />
                    </span>
                  </a>
                </div>
                <div className="relative group h-40 w-40">
                  <Image
                    src="/mapa.png"
                    alt="Dojazd"
                    fill
                    unoptimized
                    className="object-cover rounded-xl"
                  />

                  <a
                    href="https://maps.google.com/?q=Orzechówka+319C"
                    target="_blank"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════ HOURS ═══════════════════════════════ */}
      <section className="text-white relative overflow-hidden bg-[#101010]">
        <Container className="py-[34px] pb-[42px] relative">
          <Image
            src="/leaf.png"
            alt=""
            width={400}
            height={400}
            unoptimized
            className="absolute z-10 top-10 -left-50 opacity-60"
          />
          {/* <Image src="/tomatoes.png" alt="" width={300} height={300} unoptimized className="absolute z-10 -right-50 top-0 opacity-60" /> */}

          <div className="flex items-center justify-center gap-10">
            {/* Hours copy */}
            <div>
              <h2
                className={`m-0 font-heading uppercase text-4xl max-[720px]:text-3xl text-white heading-underline`}
              >
                Godziny otwarcia
              </h2>
              <div className="mt-[23px] flex gap-[58px] max-w-[480px] max-[720px]:flex-col max-[720px]:gap-2 font-base">
                <div className="flex flex-col gap-2">
                  {daysLeft.map((day) => (
                    <div
                      key={day}
                      className="flex justify-between gap-6 text-sm min-w-[200px]"
                    >
                      <span>{day}</span>
                      <strong className="font-medium">{hours[day]}</strong>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  {daysRight.map((day) => (
                    <div
                      key={day}
                      className={`flex justify-between gap-6 text-sm min-w-[200px]${weekend.has(day) ? " text-[var(--c-red)] font-black" : ""}`}
                    >
                      <span>{day}</span>
                      <strong
                        className={
                          weekend.has(day) ? "font-black" : "font-medium"
                        }
                      >
                        {hours[day]}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-35 w-[2px] bg-white/15" />

            {/* Value strip */}
            <div className="items-center max-[1100px]:grid-cols-2 max-[720px]:grid-cols-1">
              <div className="flex items-center gap-4 justify-center">
                <Image
                  src="/icons/clock.png"
                  alt=""
                  width={70}
                  height={70}
                  unoptimized
                />
                <p className="text-base font-base uppercase font-semibold">
                  Zamówienia online <br />
                  przyjmujemy do 30 minut <br />{" "}
                  <span className="text-green-700">przed zamknięciem.</span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════ FOOTER ══════════════════════════════ */}
      <footer
        id="kontakt"
        className="relative bg-[var(--c-paper)] overflow-hidden"
      >
        <Container className="py-10">
          <div
            className="
              grid grid-cols-[1.1fr_0.9fr_1.1fr] gap-[34px]
              max-[1100px]:grid-cols-1
              [&>div]:min-h-[150px]
              [&>div:not(:last-child)]:border-r [&>div:not(:last-child)]:border-[rgba(45,39,31,.2)]
              max-[1100px]:[&>div:not(:last-child)]:border-r-0
              font-base
            "
          >
            {/* Brand */}
            <div className="gap-6 items-start">
              {/* <Logo small /> */}
              <div>
                <p className="max-w-[275px] my-3 font-semibold leading-[1.45] text-sm">
                  <b>Galio Pizza</b> - prawdziwa pizza neapolitańska w
                  Orzechówce. Dziękujemy, że jesteś z nami!
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="max-[1100px]:pl-0">
              <h2 className="m-0 font-heading uppercase text-4xl max-[720px]:text-3xl">
                Kontakt
              </h2>
              <div className="mt-3 flex flex-col gap-2">
                <p className="m-0 flex items-center gap-3 font-semibold text-sm">
                  <Image
                    src="/footer/telephone.png"
                    width={24}
                    height={24}
                    alt="Telefon"
                  />
                  695 561 593
                </p>
                <p className="m-0 flex items-start gap-3 font-semibold text-sm leading-[1.45]">
                  <Image
                    src="/footer/location.png"
                    width={24}
                    height={24}
                    alt="Telefon"
                  />

                  <span>
                    Orzechówka 319C,
                    <br />
                    36-220 Jasienica Rosielna
                  </span>
                </p>
                <p className="m-0 flex items-center gap-3 font-semibold text-sm">
                  <Image
                    src="/footer/mail.png"
                    width={24}
                    height={24}
                    alt="Telefon"
                  />
                  galiopizza@interia.pl
                </p>
              </div>
            </div>

            {/* Order */}
            <div id="zamow">
              <h2 className="m-0 font-heading uppercase text-4xl">
                Zamów online
              </h2>
              <p className="max-w-[275px] my-3 leading-[1.45] text-sm font-semibold">
                Szybko, wygodnie i bez kolejki.
              </p>
              <a
                className="bg-red-700 w-fit text-white text-sm px-8 py-3 rounded-full font-semibold uppercase flex items-center gap-2"
                href="#zamow"
              >
                Zamów online{" "}
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
