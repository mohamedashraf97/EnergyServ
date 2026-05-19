/**
 * Fetches all products from A ONE Resources WooCommerce Store API
 * Endpoint: https://aoneresources.com/wp-json/wc/store/v1/products
 *
 * Run: node scripts/fetch-products.mjs
 */

import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const API_BASE = "https://aoneresources.com/wp-json/wc/store/v1/products";
const PER_PAGE = 100;

function decodeHtml(str) {
  if (!str) return str;
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#038;/g, "&");
}

/** @typedef {object} StoreProduct */
/** @typedef {{ id: number; name: string; slug: string; permalink: string; images: { src: string; thumbnail: string }[]; categories: { id: number; name: string; slug: string }[] }} StoreProduct */

/**
 * @param {StoreProduct} p
 */
function mapProduct(p) {
  const category =
    p.categories?.length > 0
      ? p.categories.map((c) => decodeHtml(c.name)).join(", ")
      : "Uncategorized";

  const image =
    p.images?.[0]?.src ||
    p.images?.[0]?.thumbnail ||
    "";

  return {
    id: p.id,
    slug: p.slug,
    name: decodeHtml(p.name?.trim()) || "Untitled Product",
    image,
    link: p.permalink,
    category,
    categories: (p.categories || []).map((c) => ({
      id: c.id,
      name: decodeHtml(c.name),
      slug: c.slug,
    })),
  };
}

async function fetchPage(page) {
  const url = new URL(API_BASE);
  url.searchParams.set("per_page", String(PER_PAGE));
  url.searchParams.set("page", String(page));

  const res = await fetch(url.toString(), {
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} on page ${page}: ${url}`);
  }

  const data = await res.json();
  const totalPages = parseInt(res.headers.get("x-wp-totalpages") || "1", 10);
  const total = parseInt(res.headers.get("x-wp-total") || String(data.length), 10);

  return { products: data, totalPages, total };
}

async function fetchAllProducts() {
  const all = [];
  let page = 1;
  let totalPages = 1;
  let total = 0;

  console.log(`Using API: ${API_BASE}`);

  do {
    console.log(`Fetching page ${page}/${totalPages}...`);
    const { products, totalPages: tp, total: t } = await fetchPage(page);
    totalPages = tp;
    total = t;
    all.push(...products);
    page++;
  } while (page <= totalPages);

  return { products: all.map(mapProduct), meta: { total, source: API_BASE, fetchedAt: new Date().toISOString() } };
}

async function main() {
  try {
    const output = await fetchAllProducts();
    const outPath = join(__dirname, "..", "src", "data", "products.json");
    writeFileSync(outPath, JSON.stringify(output, null, 2), "utf-8");
    console.log(`Saved ${output.products.length} products to ${outPath}`);
  } catch (err) {
    console.error("Fetch failed:", err.message);
    process.exit(1);
  }
}

main();
