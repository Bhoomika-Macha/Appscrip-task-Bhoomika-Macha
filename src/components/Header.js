"use client";

import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <h1 className="logo">ShopEasy</h1>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <div className="header-right">
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
        />
        <button className="icon-btn" aria-label="Wishlist">
          ♥
        </button>
        <button className="icon-btn" aria-label="Cart">
          🛒
        </button>
      </div>
    </header>
  );
}
