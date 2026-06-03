import Image from 'next/image';
import { contact } from '../../features/shared/site-data';
import { Container } from '../container';
import { ArrowLink } from '../ui/arrow-link';

export function SiteFooter() {
  return (
    <footer id="kontakt" className="bg-(--c-paper)">
      <Container className="py-9 sm:py-10">
        <div className="grid gap-8 font-base md:grid-cols-3 md:gap-9 md:[&>div:not(:last-child)]:border-r md:[&>div:not(:last-child)]:border-[rgba(45,39,31,.2)]">
          <div className="md:pr-6">
            <p className="m-0 max-w-[300px] text-sm font-semibold leading-[1.45]">
              <b>Galio Pizza</b> - prawdziwa pizza neapolitańska w Orzechówce. Dziękujemy, że
              jesteś z nami!
            </p>
          </div>

          <div className="md:pr-6">
            <h2 className="m-0 font-heading text-3xl uppercase sm:text-4xl">Kontakt</h2>
            <div className="mt-4 flex flex-col gap-3">
              <p className="m-0 flex items-center gap-3 text-sm font-semibold">
                <Image src="/footer/telephone.png" width={24} height={24} alt="" />
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
              <p className="m-0 flex items-start gap-3 text-sm font-semibold leading-[1.45]">
                <Image src="/footer/location.png" width={24} height={24} alt="" />
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
            <h2 className="m-0 font-heading text-3xl uppercase sm:text-4xl">Zamów online</h2>
            <p className="my-4 max-w-[275px] text-sm font-semibold leading-[1.45]">
              Szybko, wygodnie i bez kolejki.
            </p>
            <ArrowLink href="/zamowienie">Zamów online</ArrowLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}
