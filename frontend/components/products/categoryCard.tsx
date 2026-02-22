import React, { useState } from "react";

type CategoryCardProps = {
  emoji: string;
  title: string;
  desc: string;
  count: number;
};


export function CategoryCard({ emoji, title, desc, count }: CategoryCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "linear-gradient(135deg, #fef3c7, #fff7ed)" : "white",
        borderRadius: "18px", padding: "28px 24px",
        border: hovered ? "2px solid #f59e0b" : "2px solid transparent",
        cursor: "pointer", transition: "all 0.3s ease",
        boxShadow: hovered ? "0 12px 40px rgba(245,158,11,0.15)" : "0 2px 12px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ fontSize: 48, marginBottom: 12 }}>{emoji}</div>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, color: "#1a1a1a", marginBottom: 6 }}>{title}</h3>
      <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6, marginBottom: 12 }}>{desc}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 12, color: "#f59e0b", fontWeight: 700 }}>{count} products</span>
        <span style={{
          color: "#ea580c", fontWeight: 700, fontSize: 13,
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          transition: "transform 0.3s ease"
        }}>View All →</span>
      </div>
    </div>
  );
}