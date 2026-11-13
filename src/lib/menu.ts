import menu from '../data/menu.json';

export type MenuItem = { name: string; price: number; ingredients: string; tag?: string };
export type MenuSection = { id: string; title: string; note: string; board: string; items: MenuItem[] };

export const sections = menu.sections as MenuSection[];
export const currency = menu.currency;
export const alsoAtTheBar = menu.alsoAtTheBar;

const allItems = sections.flatMap((s) => s.items);
export const drinkCount = allItems.length;

export const lowestPrice = (sectionId: string) =>
  Math.min(...(sections.find((s) => s.id === sectionId)?.items ?? []).map((i) => i.price));

export const cheapest = allItems.reduce((a, b) => (b.price < a.price ? b : a), allItems[0]);
export const priceRange = () => {
  const prices = allItems.map((i) => i.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
};

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
  'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
/** "Sixteen" for 16, digits above twenty. */
export const countWord = (n: number, capital = false) => {
  const w = n <= 20 ? WORDS[n] : String(n);
  return capital ? w.charAt(0).toUpperCase() + w.slice(1) : w;
};
