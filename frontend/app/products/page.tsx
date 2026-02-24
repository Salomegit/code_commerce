'use client';

import { useState } from 'react';
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

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

const CATEGORIES = ["All", "Keyboards", "Audio", "Mice", "Monitors", "Gadgets"];
const PRICES = ["All Prices", "Under $100", "$100-$200", "$200-$400", "Over $400"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #fffbeb 0%, #f9f7f4 100%)',
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        
        @media (max-width: 768px) {
          .sidebar { display: none; }
          .products-main { grid-column: span 1 !important; width: 100%; }
        }
      `}</style>
      
      <Navbar />
      
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

      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'clamp(32px, 5vw, 48px)',
        display: 'grid',
        gridTemplateColumns: '240px 1fr',
        gap: '40px'
      }}>
        
        {/* Sidebar */}
        <aside className="sidebar" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          height: 'fit-content',
          position: 'sticky',
          top: '80px'
        }}>
          {/* Category Filter */}
          <section>
            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#1a1a2e',
              marginBottom: '14px'
            }}>
              Collection
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: activeCategory === cat ? '2px solid #0f3460' : '1px solid #e5e5e5',
                    background: activeCategory === cat ? '#e8f4ff' : 'transparent',
                    color: activeCategory === cat ? '#0f3460' : '#666',
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
          </section>

          {/* Price Filter */}
          <section>
            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#1a1a2e',
              marginBottom: '14px'
            }}>
              Price
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {PRICES.map((price) => (
                <label key={price} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  color: '#555'
                }}>
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                  {price}
                </label>
              ))}
            </div>
          </section>

          {/* Promo Card */}
          <div style={{
            padding: '20px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <span style={{
                display: 'inline-block',
                background: '#f59e0b',
                color: '#1a1a2e',
                fontSize: '9px',
                fontWeight: 700,
                padding: '4px 8px',
                borderRadius: '4px',
                marginBottom: '10px',
                letterSpacing: '0.5px'
              }}>
                OFFER
              </span>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '14px',
                fontWeight: 700,
                marginBottom: '6px'
              }}>
                Bundle & Save
              </h4>
              <p style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.5
              }}>
                15% off keyboard + mouse
              </p>
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              fontSize: '60px',
              opacity: 0.08
            }}>
              ⚡
            </div>
          </div>
        </aside>

        {/* Products Section */}
        <section className="products-main">
          {/* Header with sort */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '32px',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(15,52,96,0.08)'
          }}>
            <span style={{
              color: '#0f3460',
              opacity: 0.6,
              fontSize: '13px',
              fontWeight: 500
            }}>
              {PRODUCTS.length} items
            </span>
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
                color: '#0f3460',
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '20px',
            marginBottom: '48px'
          }}>
            {PRODUCTS.map((product, i) => (
              <div
                key={i}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  border: '1px solid #f0f0f0',
                  padding: '16px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(15,52,96,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {product.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: product.badge === 'NEW' ? '#f59e0b' : product.badge === 'HOT' ? '#ea580c' : '#16a34a',
                    color: 'white',
                    fontSize: '9px',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '4px',
                    letterSpacing: '0.3px'
                  }}>
                    {product.badge}
                  </div>
                )}

                <div style={{
                  fontSize: '42px',
                  marginBottom: '12px'
                }}>
                  {product.emoji}
                </div>

                <p style={{
                  fontSize: '11px',
                  color: '#0f3460',
                  fontWeight: 600,
                  letterSpacing: '0.3px',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                  opacity: 0.7
                }}>
                  {product.category}
                </p>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '12px',
                  lineHeight: 1.3
                }}>
                  {product.name}
                </h3>
                <div style={{
                  background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '18px',
                  fontWeight: 800
                }}>
                  ${product.price}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
          }}>
            <button style={{
              padding: '8px 14px',
              border: 'none',
              background: 'white',
              color: '#0f3460',
              fontWeight: 600,
              cursor: 'pointer',
              borderRadius: '6px',
              fontSize: '13px',
              opacity: 0.6
            }}>
              ← Prev
            </button>
            {[1, 2, 3].map(n => (
              <button
                key={n}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  border: 'none',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: n === 1 ? 'linear-gradient(135deg, #f59e0b, #ea580c)' : 'white',
                  color: n === 1 ? 'white' : '#0f3460',
                  fontSize: '13px',
                  transition: 'all 0.25s ease'
                }}
              >
                {n}
              </button>
            ))}
            <button style={{
              padding: '8px 14px',
              border: 'none',
              background: 'white',
              color: '#0f3460',
              fontWeight: 600,
              cursor: 'pointer',
              borderRadius: '6px',
              fontSize: '13px',
              opacity: 0.6
            }}>
              Next →
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}