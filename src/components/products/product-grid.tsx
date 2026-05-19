"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  getProductCategories,
  filterProductsByCategory,
  type Product,
} from "@/lib/products";
import { cn } from "@/lib/utils";
import { ProductsPagination } from "./products-pagination";

const DEFAULT_PAGE_SIZE = 12;

type ProductGridProps = {
  limit?: number;
  showFilters?: boolean;
  pageSize?: number;
  className?: string;
};

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl border border-slate/10 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-accent/10"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-slate">
              No image
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="absolute bottom-4 left-4 max-w-[90%] truncate rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
            {product.category}
          </span>
        </div>
        <div className="p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent line-clamp-1">
            {product.category}
          </span>
          <h3 className="mt-1 font-display text-lg font-bold text-navy line-clamp-2 transition-colors group-hover:text-accent">
            {product.name}
          </h3>
          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate transition-colors group-hover:text-accent">
            View details
            <ExternalLink className="h-3.5 w-3.5" />
          </span>
        </div>
      </a>
    </motion.article>
  );
}

export function ProductGrid({
  limit,
  showFilters = true,
  pageSize = DEFAULT_PAGE_SIZE,
  className,
}: ProductGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const categories = useMemo(() => getProductCategories(), []);
  const [active, setActive] = useState("All");
  const [page, setPage] = useState(1);

  const paginated = !limit;

  const filtered = useMemo(
    () => filterProductsByCategory(active),
    [active]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [active]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const items = useMemo(() => {
    if (limit) return filtered.slice(0, limit);
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize, limit]);

  const handlePageChange = (next: number) => {
    setPage(next);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCategoryChange = (cat: string) => {
    setActive(cat);
  };

  return (
    <div ref={gridRef} className={className}>
      {showFilters && !limit && (
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                active === cat
                  ? "gradient-accent text-white shadow-lg shadow-accent/25"
                  : "border border-slate/20 bg-white text-slate hover:border-accent hover:text-accent"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {!limit && (
        <p className="mb-8 mt-6 text-center text-sm text-slate">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          {active !== "All" ? ` in ${active}` : ""}
        </p>
      )}

      <motion.div
        layout
        className={cn(
          "grid gap-6",
          limit
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        )}
      >
        <AnimatePresence mode="popLayout">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>

      {items.length === 0 && (
        <p className="py-16 text-center text-slate">No products in this category.</p>
      )}

      {paginated && filtered.length > 0 && (
        <ProductsPagination
          page={page}
          totalPages={totalPages}
          totalItems={filtered.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
