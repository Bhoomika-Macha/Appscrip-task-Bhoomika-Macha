"use client";
import "./ProductGrid.css";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <section className="product-grid" aria-label="Product results">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
