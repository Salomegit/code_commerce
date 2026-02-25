import React, { useState } from 'react';

type ProductCardProps = {
  emoji: string;
  category: string;
  name: string;
  price: string;
  badge?: string;
};

export function ProductCard({ emoji, category, name, price, badge }: ProductCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      style={{
        transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${hovered ? 1.04 : 1})`,
        transition: hovered ? "transform 0.1s ease" : "transform 0.5s cubic-bezier(.23,1,.32,1)",
        background: "white",
        borderRadius: "20px",
        padding: "24px",
        cursor: "pointer",
        boxShadow: hovered ? "0 24px 64px rgba(234,88,12,0.15), 0 4px 16px rgba(0,0,0,0.08)" : "0 4px 20px rgba(0,0,0,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {badge && (
        <span style={{
          position: "absolute", top: 16, right: 16,
          background: "linear-gradient(135deg, #f59e0b, #ea580c)",
          color: "white", fontSize: "11px", fontWeight: 700,
          padding: "3px 10px", borderRadius: "999px", letterSpacing: "0.5px"
        }}>{badge}</span>
      )}
      <div style={{
        height: 160, display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 80, marginBottom: 16,
        filter: hovered ? "drop-shadow(0 8px 16px rgba(234,88,12,0.3))" : "none",
        transition: "filter 0.3s ease",
      }}>{emoji}</div>
      <p style={{ fontSize: 11, color: "#f59e0b", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 4 }}>{category}</p>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, color: "#1a1a1a", marginBottom: 8 }}>{name}</h3>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, color: "#ea580c" }}>${price} USD</span>
        <button style={{
          width: 36, height: 36, borderRadius: "50%",
          background: hovered ? "linear-gradient(135deg, #f59e0b, #ea580c)" : "#f5f5f5",
          border: "none", cursor: "pointer", fontSize: 18,
          transition: "all 0.3s ease", color: hovered ? "white" : "#666",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>+</button>
      </div>
    </div>
  );
}