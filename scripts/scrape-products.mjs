/**
 * Fallback scraper when WooCommerce API is unavailable.
 * Requires: npm install -D playwright && npx playwright install chromium
 *
 * Run: node scripts/scrape-products.mjs
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SHOP_URL = "https://aoneresources.com/products/";
const OUT_PATH = join(__dirname, "..", "src", "data", "products.json");

async function scrape() {
  let chromium;
  try {
    ({ chromium } = await import("playwright"));
  } catch {
    console.error(
      "Playwright not installed. Run:\n  npm install -D playwright\n  npx playwright install chromium"
    );
    process.exit(1);
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log(`Scraping ${SHOP_URL}...`);
  await page.goto(SHOP_URL, { waitUntil: "networkidle", timeout: 60000 });

  const products = await page.evaluate(() => {
    const cards = document.querySelectorAll(
      ".products li.product, ul.products > li"
    );
    return Array.from(cards).map((el, index) => {
      const linkEl = el.querySelector("a.woocommerce-LoopProduct-link, a[href*='/product/']");
      const imgEl = el.querySelector("img");
      const titleEl = el.querySelector(
        ".woocommerce-loop-product__title, h2"
      );
      const catEl = el.querySelector(".product-category, .posted_in");

      const link = linkEl?.getAttribute("href") || "";
      const name =
        titleEl?.textContent?.trim() ||
        imgEl?.getAttribute("alt")?.trim() ||
        `Product ${index + 1}`;
      const image =
        imgEl?.getAttribute("src") ||
        imgEl?.getAttribute("data-src") ||
        "";
      const category = catEl?.textContent?.trim() || "Uncategorized";

      return {
        id: index + 1,
        slug: link.split("/").filter(Boolean).pop() || `product-${index}`,
        name,
        image,
        link,
        category,
        categories: [{ id: 0, name: category, slug: "uncategorized" }],
      };
    });
  });

  await browser.close();

  const unique = products.filter((p) => p.link && p.name);

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(
    OUT_PATH,
    JSON.stringify(
      {
        products: unique,
        meta: {
          total: unique.length,
          source: SHOP_URL,
          fetchedAt: new Date().toISOString(),
          method: "playwright-scrape",
        },
      },
      null,
      2
    ),
    "utf-8"
  );

  console.log(`Scraped ${unique.length} products → ${OUT_PATH}`);
}

scrape().catch((err) => {
  console.error(err);
  process.exit(1);
});
