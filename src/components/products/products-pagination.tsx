"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductsPaginationProps = {
  page: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
};

function getPageNumbers(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis")[] = [1];

  if (current > 3) pages.push("ellipsis");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) pages.push("ellipsis");

  pages.push(total);
  return pages;
}

export function ProductsPagination({
  page,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: ProductsPaginationProps) {
  if (totalPages <= 1) return null;

  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);
  const pages = getPageNumbers(page, totalPages);

  return (
    <nav
      className="mt-12 flex flex-col items-center gap-6"
      aria-label="Product pagination"
    >
      <p className="text-sm text-slate">
        Showing <span className="font-medium text-navy">{start}</span>–
        <span className="font-medium text-navy">{end}</span> of{" "}
        <span className="font-medium text-navy">{totalItems}</span> products
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          aria-label="Previous page"
          className={cn(
            "inline-flex h-10 items-center gap-1 rounded-full border px-4 text-sm font-medium transition-colors",
            page <= 1
              ? "cursor-not-allowed border-slate/10 text-slate/40"
              : "border-slate/20 text-navy hover:border-accent hover:text-accent"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>

        <div className="flex items-center gap-1">
          {pages.map((p, i) =>
            p === "ellipsis" ? (
              <span key={`ellipsis-${i}`} className="px-2 text-slate">
                …
              </span>
            ) : (
              <button
                key={p}
                type="button"
                onClick={() => onPageChange(p)}
                aria-label={`Page ${p}`}
                aria-current={p === page ? "page" : undefined}
                className={cn(
                  "flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-medium transition-all",
                  p === page
                    ? "gradient-accent text-white shadow-lg shadow-accent/25"
                    : "border border-slate/20 text-navy hover:border-accent hover:text-accent"
                )}
              >
                {p}
              </button>
            )
          )}
        </div>

        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          aria-label="Next page"
          className={cn(
            "inline-flex h-10 items-center gap-1 rounded-full border px-4 text-sm font-medium transition-colors",
            page >= totalPages
              ? "cursor-not-allowed border-slate/10 text-slate/40"
              : "border-slate/20 text-navy hover:border-accent hover:text-accent"
          )}
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
}
