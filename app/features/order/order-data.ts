export const allPizzas = [
  {
    id: 'margherita',
    name: 'Margherita',
    description: 'Pomidory san marzano, mozzarella Fior di Latte, bazylia, oliwa',
    price: 25,
    veg: true,
  },
  {
    id: 'diavola',
    name: 'Diavola',
    description:
      'Pomidory san marzano, mozzarella Fior di Latte, spianata calabria, pomidorki',
    price: 29,
    hot: true,
  },
  {
    id: 'parma',
    name: 'Parma',
    description:
      'Pomidory san marzano, mozzarella Fior di Latte, prosciutto crudo, rukola, grana padano',
    price: 30,
  },
  {
    id: 'quattro-formaggi',
    name: 'Quattro Formaggi',
    description:
      'Pomidory san marzano, mozzarella Fior di Latte, gorgonzola, grana padano, ricotta',
    price: 31,
  },
  {
    id: 'prosciutto',
    name: 'Prosciutto',
    description:
      'Pomidory san marzano, mozzarella Fior di Latte, prosciutto cotto, pieczarki, oregano',
    price: 28,
  },
  {
    id: 'capricciosa',
    name: 'Capricciosa',
    description:
      'Pomidory san marzano, mozzarella Fior di Latte, prosciutto cotto, pieczarki, oliwki, karczochy',
    price: 31,
  },
  {
    id: 'tonno',
    name: 'Tonno',
    description:
      'Pomidory san marzano, mozzarella Fior di Latte, tuńczyk, czerwona cebula, oliwa cytrynowa',
    price: 30,
  },
  {
    id: 'bianca',
    name: 'Bianca',
    description:
      'Mozzarella Fior di Latte, gorgonzola, gruszka karmelizowana, orzechy włoskie, rukola',
    price: 29,
  },
  {
    id: 'milano',
    name: 'Milano',
    description:
      'Pomidory san marzano, mozzarella Fior di Latte, salami Milano, czosnek, czerwona cebula',
    price: 29,
  },
  {
    id: 'milano-2',
    name: 'Milano 2.0',
    description:
      'Pomidory san marzano, mozzarella Fior di Latte, salami Milano, oliwki',
    price: 28,
  },
  {
    id: 'nduja',
    name: 'Nduja',
    description:
      "Pomidory san marzano, mozzarella Fior di Latte, 'Nduja, chipsy spianata Calabria, ricotta, szczypiorek",
    price: 28,
    hot: true,
  },
  {
    id: 'salame',
    name: 'Salame',
    description:
      'Pomidory san marzano, mozzarella Fior di Latte, salami picante, grillowana papryka, pecorino romano',
    price: 30,
  },
] as const;

export const deliveryAreas = [
  { id: 'orzechowka', label: 'Orzechówka', minOrder: 50 },
  { id: 'jasienica', label: 'Jasienica Rosielna', minOrder: 50 },
  { id: 'blizne', label: 'Blizne', minOrder: 50 },
  { id: 'stara-wies', label: 'Stara Wieś', minOrder: 50 },
  { id: 'wola-komborska', label: 'Wola Komborska', minOrder: 50 },
  { id: 'brzozow', label: 'Brzozów', minOrder: 70 },
] as const;
