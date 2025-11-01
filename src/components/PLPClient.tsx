"use client";

import { useState, useEffect } from "react";
import Hero from "./Hero";
import Toolbar from "./Toolbar";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid";

type Product = {
  id: number;
  title: string;
  image: string;
  tag?: string;
  status?: string;
};

type Props = {
  products: Product[];
  total: number;
};

export default function PLPClient({ products, total }: Props) {
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 992);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <Hero />
      <Toolbar
        total={total}
        filtersOpen={filtersOpen}
        onToggleFilters={() => setFiltersOpen(!filtersOpen)}
      />
      <div className={`page-wrap ${filtersOpen ? "" : "no-filters"}`}>
        {filtersOpen && <Filters visible />}
        <ProductGrid products={products} />
      </div>
    </>
  );
}
