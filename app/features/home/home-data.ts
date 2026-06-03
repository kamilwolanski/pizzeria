export const homeMenuPizzas = [
  {
    name: 'Margherita',
    description: 'Pomidory san marzano, mozzarella fior di latte, bazylia, oliwa',
    price: '25,00 zł',
  },
  {
    name: 'Diavola',
    description:
      'Pomidory san marzano, mozzarella fior di latte, spianata calabria, pomidorki',
    price: '29,00 zł',
    hot: true,
  },
  {
    name: 'Parma',
    description:
      'Pomidory san marzano, mozzarella fior di latte, prosciutto crudo, rukola, grana padano',
    price: '30,00 zł',
  },
  {
    name: 'Quattro Formaggi',
    description:
      'Pomidory san marzano, mozzarella fior di latte, gorgonzola, grana padano, ricotta',
    price: '31,00 zł',
  },
] as const;

export const heroFeatures = [
  {
    icon: '/icons/basil.png',
    lines: ['Najlepsze włoskie', 'składniki'],
  },
  {
    icon: '/icons/clock.png',
    lines: ['Ciasto dojrzewające', '24 godziny'],
  },
  {
    icon: '/icons/pizza-oven.png',
    lines: ['Piec neapolitański', '450°C'],
  },
] as const;
