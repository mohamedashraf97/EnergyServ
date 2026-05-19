import productsData from "@/data/products.json";

export type ProductCategory = {
  id: number;
  name: string;
  slug: string;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  image: string;
  link: string;
  category: string;
  categories: ProductCategory[];
};

export type ProductsFile = {
  products: Product[];
  meta: {
    total: number;
    source: string;
    fetchedAt: string;
  };
};

const data = productsData as ProductsFile;

export const products: Product[] = data.products;
export const productsMeta = data.meta;

/** Unique category names for filter UI */
export function getProductCategories(): string[] {
  const names = new Set<string>();
  for (const p of products) {
    for (const c of p.categories) {
      names.add(c.name);
    }
    if (p.categories.length === 0 && p.category) {
      names.add(p.category);
    }
  }
  return ["All", ...Array.from(names).sort((a, b) => a.localeCompare(b))];
}

export function filterProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter(
    (p) =>
      p.category === category ||
      p.categories.some((c) => c.name === category)
  );
}
