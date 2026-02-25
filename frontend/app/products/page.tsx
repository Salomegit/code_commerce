'use client';
import { useState } from 'react';
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ProductCard } from "@/components/products/ProductsCard";

const PRODUCTS = [
  { emoji: "⌨️", category: "Keyboards", name: "MechPro X1", price: "199", badge: "NEW" },
  { emoji: "🖱️", category: "Mice", name: "SwiftClick Pro", price: "89" },
  { emoji: "🎧", category: "Audio", name: "DevZone Headset", price: "149", badge: "HOT" },
  { emoji: "💡", category: "Lighting", name: "RGBDesk Ultra", price: "79" },
  { emoji: "📱", category: "Gadgets", name: "HubStation 7", price: "119" },
  { emoji: "🖥️", category: "Monitors", name: "CodeView 27\"", price: "399", badge: "SALE" },
  { emoji: "⌨️", category: "Keyboards", name: "TypeFlow Pro", price: "249", badge: "NEW" },
  { emoji: "🖱️", category: "Mice", name: "PrecisionClick X", price: "129" },
  { emoji: "🎧", category: "Audio", name: "SoundForge Elite", price: "189", badge: "HOT" },
  { emoji: "💡", category: "Lighting", name: "GlowSync Pro", price: "159" },
  { emoji: "📱", category: "Gadgets", name: "ChargeHub Max", price: "89" },
  { emoji: "🖥️", category: "Monitors", name: "UltraView 32\"", price: "599" },
];

const CATEGORIES = ["All", "Keyboards", "Audio", "Mice", "Monitors", "Gadgets", "Lighting"];
const PRICES = ["All Prices", "Under $100", "$100-$200", "$200-$400", "Over $400"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePrice, setActivePrice] = useState("All Prices");
  const [sortBy, setSortBy] = useState("newest");

  // Filter products based on category and price
  const filteredProducts = PRODUCTS.filter((product) => {
    const categoryMatch = activeCategory === "All" || product.category === activeCategory;
    const price = parseInt(product.price);
    
    let priceMatch = true;
    if (activePrice === "Under $100") priceMatch = price < 100;
    else if (activePrice === "$100-$200") priceMatch = price >= 100 && price < 200;
    else if (activePrice === "$200-$400") priceMatch = price >= 200 && price < 400;
    else if (activePrice === "Over $400") priceMatch = price >= 400;
    
    return categoryMatch && priceMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "newest") return 0; // Keep original order
    if (sortBy === "price-low") return parseInt(a.price) - parseInt(b.price);
    if (sortBy === "price-high") return parseInt(b.price) - parseInt(a.price);
    return 0;
  });

  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", backgroundColor: "#f9f7f4   " }}>
        {/* Header */}
          <header style={{
        background: 'linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)',
        padding: 'clamp(40px, 8vw, 60px) 24px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-50px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)'
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 800,
            color: 'white',
            marginBottom: '8px'
          }}>
            Dev <span style={{ color: '#f59e0b' }}>Catalog</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 'clamp(14px, 2vw, 16px)',
            maxWidth: '400px'
          }}>
            Curated gear for developers. Quality hardware, crafted for performance.
          </p>
        </div>
      </header>

        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "32px", padding: "32px 20px", maxWidth: "1400px", margin: "0 auto" }}>
          {/* Sidebar */}
          <aside style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", height: "fit-content", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
            {/* Category Filter */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>
                Collection
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: activeCategory === cat ? '2px solid #ea580c' : '1px solid #e5e5e5',
                      background: activeCategory === cat ? '#fff5f0' : 'transparent',
                      color: activeCategory === cat ? '#ea580c' : '#666',
                      fontWeight: activeCategory === cat ? 600 : 500,
                      fontSize: '13px',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      textAlign: 'left'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>
                Price
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {PRICES.map((price) => (
                  <button
                    key={price}
                    onClick={() => setActivePrice(price)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: activePrice === price ? '2px solid #ea580c' : '1px solid #e5e5e5',
                      background: activePrice === price ? '#fff5f0' : 'transparent',
                      color: activePrice === price ? '#ea580c' : '#666',
                      fontWeight: activePrice === price ? 600 : 500,
                      fontSize: '13px',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      textAlign: 'left'
                    }}
                  >
                    {price}
                  </button>
                ))}
              </div>
            </div>

            {/* Promo Card */}
            <div style={{
              background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
              borderRadius: '12px',
              padding: '20px',
              color: 'white',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>OFFER</span>
              <h4 style={{ fontSize: '18px', fontWeight: 700, marginTop: '8px', marginBottom: '4px' }}>Bundle & Save</h4>
              <p style={{ fontSize: '13px', opacity: 0.9 }}>15% off keyboard + mouse</p>
              <div style={{ fontSize: '24px', marginTop: '8px' }}>⚡</div>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            {/* Header with sort */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a1a" }}>
                {sortedProducts.length} {sortedProducts.length === 1 ? 'item' : 'items'}
              </h2>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  background: 'white',
                  border: '1px solid #e5e5e5',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#1a1a1a',
                  cursor: 'pointer'
                }}
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low-High</option>
                <option value="price-high">Price: High-Low</option>
              </select>
            </div>

            {/* Products Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "48px"
            }}>
              {sortedProducts.length > 0 ? (
                sortedProducts.map((product) => (
                  <ProductCard
                    key={`${product.name}-${product.price}`}
                    emoji={product.emoji}
                    category={product.category}
                    name={product.name}
                    price={product.price}
                    badge={product.badge}
                  />
                ))
              ) : (
                <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "60px 20px", color: "#999" }}>
                  <p style={{ fontSize: "16px" }}>No products found. Try adjusting your filters.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
              <button style={{
                padding: '8px 12px',
                border: '1px solid #e5e5e5',
                background: 'white',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666'
              }}>
                ← Prev
              </button>
              {[1, 2, 3].map(n => (
                <button
                  key={n}
                  style={{
                    width: '32px',
                    height: '32px',
                    border: n === 1 ? '2px solid #ea580c' : '1px solid #e5e5e5',
                    background: n === 1 ? '#fff5f0' : 'white',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: n === 1 ? '#ea580c' : '#666',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {n}
                </button>
              ))}
              <button style={{
                padding: '8px 12px',
                border: '1px solid #e5e5e5',
                background: 'white',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 600,
                color: '#666'
              }}>
                Next →
              </button>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}