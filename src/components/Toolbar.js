"use client";
import { useState } from "react";
import "./Toolbar.css";

export default function Toolbar({ total, filtersOpen, onToggleFilters }) {
  const [showMenu, setShowMenu] = useState(false);
  const [sortLabel, setSortLabel] = useState("RECOMMENDED");

  const sortOptions = ["RECOMMENDED", "NEWEST FIRST", "POPULAR", "PRICE : HIGH TO LOW", "PRICE : LOW TO HIGH"];

  return (
    <div className="toolbar">
      <div className="left">
        <span className="count">{total} ITEMS</span>
        <button className="linklike" onClick={onToggleFilters}>
          {filtersOpen ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>

      <div className="right">
        <button className="sort-trigger" onClick={() => setShowMenu(!showMenu)}>
          {sortLabel} ▾
        </button>
        {showMenu && (
          <ul className="sort-menu">
            {sortOptions.map(opt => (
              <li
                key={opt}
                className={opt === sortLabel ? "active" : ""}
                onClick={() => { setSortLabel(opt); setShowMenu(false); }}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
