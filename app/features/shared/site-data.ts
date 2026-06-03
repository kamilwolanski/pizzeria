export const navItems = [
  { label: 'Strona główna', href: '/#top' },
  { label: 'Menu', href: '/#menu' },
  { label: 'O nas', href: '/#onas' },
  { label: 'Kontakt', href: '/#kontakt' },
] as const;

export const contact = {
  phone: '695 561 593',
  phoneHref: 'tel:+48695561593',
  email: 'galiopizza@interia.pl',
  addressLines: ['Orzechówka 319C', '36-220 Jasienica Rosielna'],
  mapsUrl: 'https://maps.google.com/?q=Orzechówka+319C',
} as const;

export const openingHours = [
  ['Poniedziałek', '15:00 - 21:00'],
  ['Wtorek', '15:00 - 21:00'],
  ['Środa', '15:00 - 21:00'],
  ['Czwartek', '15:00 - 21:00'],
  ['Piątek', '15:00 - 22:00'],
  ['Sobota', '14:00 - 22:00'],
  ['Niedziela', '14:00 - 21:00'],
] as const;
