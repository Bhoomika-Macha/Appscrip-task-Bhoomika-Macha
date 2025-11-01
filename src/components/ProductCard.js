"use client";

import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { title, image, tag, status } = product;

  return (
    <article className="product-card">
      {tag && <span className="badge">{tag}</span>}
      <button className="wish">♡</button>
      <div className="product-image">
        <img src={image} alt={title} />
        {status === "oos" && <span className="oos">OUT OF STOCK</span>}
      </div>
      <h3 className="product-title">{title}</h3>
      <p className="signin">Sign in or Create an account to see pricing</p>
    </article>
  );
}
