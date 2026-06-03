export function formatPrice(n: number): string {
  return `${n.toFixed(2).replace('.', ',')} zł`;
}

export function pluralProducts(n: number): string {
  if (n === 1) return '1 produkt';
  if (n >= 2 && n <= 4) return `${n} produkty`;
  return `${n} produktów`;
}

export function getMinOrderForLocality(
  localityId: string | undefined,
  areas: ReadonlyArray<{ id: string; minOrder: number }>,
): number {
  if (!localityId) {
    return 50;
  }
  return areas.find((area) => area.id === localityId)?.minOrder ?? 50;
}
