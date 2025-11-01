"use client";
import { useState } from "react";
import "./Filters.css";

const sections = [
  { title: "CUSTOMIZABLE", options: [] },
  { title: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
  { title: "OCCASION", options: ["Casual", "Party", "Work"] },
  { title: "FABRIC", options: ["Cotton", "Silk", "Linen"] },
  { title: "SUITABLE FOR", options: ["All Seasons", "Winter Only"] },
  { title: "PATTERN", options: ["Solid", "Printed", "Embroidered"] },
];

export default function Filters({ visible }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <aside className="filters" style={{ display: visible ? "block" : "none" }}>
      {sections.map((sec, i) => (
        <div className="acc" key={sec.title}>
          <button
            className="acc-head"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {sec.title}
            <span>{openIndex === i ? "−" : "+"}</span>
          </button>

          <div className={`acc-body ${openIndex === i ? "open" : ""}`}>
            {sec.options.length ? (
              <ul>
                {sec.options.map(opt => (
                  <li key={opt} className="option-row">
                    <label>
                      <input type="checkbox" /> {opt}
                    </label>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="subtle">All</span>
            )}
          </div>
        </div>
      ))}
    </aside>
  );
}
