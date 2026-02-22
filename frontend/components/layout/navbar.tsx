'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, User, Globe, ChevronDown, Zap } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [cartPulse, setCartPulse] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Pulse cart on mount for attention
  useEffect(() => {
    const t = setTimeout(() => setCartPulse(true), 1200);
    const t2 = setTimeout(() => setCartPulse(false), 2200);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  const categories = ['Electronics', 'Monitors', 'Components', 'Peripherals', 'Audio', 'Accessories', 'Build PC'];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .nav-link { transition: all 0.2s ease; }
        .nav-link:hover { color: #f59e0b !important; }
        .cat-link { transition: all 0.2s ease; position: relative; }
        .cat-link::after { content: ''; position: absolute; bottom: -2px; left: 50%; right: 50%; height: 2px; background: linear-gradient(90deg,#f59e0b,#ea580c); border-radius: 2px; transition: all 0.25s ease; }
        .cat-link:hover::after { left: 12px; right: 12px; }
        .cat-link:hover { color: #f59e0b !important; background: rgba(245,158,11,0.08) !important; }
        .search-input:focus { outline: none; }
        .cart-btn:hover .cart-icon { transform: rotate(-12deg) scale(1.15); }
        .cart-icon { transition: transform 0.25s ease; }
        @keyframes ping { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(2); opacity: 0; } }
        .cart-ping { animation: ping 0.8s ease-out; }
        .ticker-wrap { overflow: hidden; }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .ticker-inner { display: flex; gap: 56px; white-space: nowrap; animation: ticker 26s linear infinite; }
        .mob-link:hover { color: #f59e0b !important; background: rgba(245,158,11,0.06) !important; }
        
        /* Responsive styles */
        @media (max-width: 1024px) {
          .main-container { padding: 0 20px !important; }
          .category-container { padding: 0 20px !important; }
        }
        
        @media (max-width: 768px) {
          .main-container { padding: 0 16px !important; }
          .category-container { padding: 0 16px !important; }
          .desktop-search { display: none !important; }
          .desktop-account { display: none !important; }
          .mob-hamburger { display: flex !important; }
          .utility-bar { display: none !important; }
          .ticker-item { font-size: 11px !important; }
          .logo-text { font-size: 18px !important; }
          .logo-subtext { display: none !important; }
        }
        
        @media (min-width: 769px) {
          .mobile-search { display: none !important; }
          .mobile-account-cta { display: none !important; }
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Ticker Top Bar ─────────────────────────────────────── */}
        <div style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', padding: '8px 0', overflow: 'hidden' }}>
          <div className="ticker-wrap">
            <div className="ticker-inner">
              {[...Array(2)].flatMap(() => [
                '🚀 Free Shipping on Orders KES 5,000+',
                '⚡ Flash Sale: 30% Off Accessories Today',
                '🛡️ 100% Secure Payments',
                '🎧 24/7 Developer Support',
                '↩️ 30-Day Easy Returns',
                '🔥 New Arrivals — Shop Now',
              ]).map((item, i) => (
                <span key={i} className="ticker-item" style={{ color: 'white', fontWeight: 700, fontSize: 12, letterSpacing: '0.5px', flexShrink: 0 }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Utility Bar ────────────────────────────────────────── */}
        <div className="utility-bar" style={{ background: '#111', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="main-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 38 }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              {/* Currency */}
              <button style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600 }}>
                KES <ChevronDown size={11} />
              </button>
              
              <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.1)', display: 'inline-block' }} />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <User size={13} color="rgba(255,255,255,0.45)" />
                <a href="/login" className="nav-link" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, textDecoration: 'none', fontWeight: 600 }}>Sign In</a>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>/</span>
                <a href="#" className="nav-link" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, textDecoration: 'none', fontWeight: 600 }}>Register</a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Navbar ─────────────────────────────────────────── */}
        <nav style={{
          background: scrolled ? 'rgba(17,17,17,0.97)' : '#1a1a2e',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(245,158,11,0.12)',
          position: 'sticky', top: 0, zIndex: 100,
          transition: 'all 0.35s ease',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
        }}>
          <div className="main-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', height: 72, gap: 32 }}>

            {/* Logo */}
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Syne', sans-serif", fontWeight: 800, color: 'white', fontSize: 15,
                boxShadow: '0 6px 20px rgba(234,88,12,0.4)',
                flexShrink: 0,
              }}>CC</div>
              <div>
                <div className="logo-text" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20, lineHeight: 1.1 }}>
                
                </div>
                <></>
                <div className="logo-subtext" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10, fontWeight: 500, letterSpacing: '0.5px' }}>Premium Tech Gear</div>
              </div>
            </a>

            {/* Search — Desktop */}
            <div className="desktop-search" style={{ flex: 1, maxWidth: 560, position: 'relative' }}>
              <div style={{
                display: 'flex', alignItems: 'center',
                background: searchFocused ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)',
                border: `2px solid ${searchFocused ? '#f59e0b' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: 14, overflow: 'hidden',
                transition: 'all 0.25s ease',
                boxShadow: searchFocused ? '0 0 0 4px rgba(245,158,11,0.12)' : 'none',
              }}>
                <input
                  type="text"
                  placeholder="Search products, brands, categories..."
                  className="search-input"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  style={{
                    flex: 1, padding: '12px 16px', background: 'transparent',
                    border: 'none', color: 'white', fontSize: 13, fontFamily: "'DM Sans', sans-serif",
                  }}
                />
                <button style={{
                  margin: 6, padding: '8px 16px', borderRadius: 10, border: 'none', cursor: 'pointer',
                  background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Search size={16} />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
              {/* Cart - Always visible */}
              <button className="cart-btn" style={{
                position: 'relative', width: 46, height: 46, borderRadius: 14,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}>
                <ShoppingCart size={20} color="rgba(255,255,255,0.8)" className="cart-icon" />
                <span style={{
                  position: 'absolute', top: -6, right: -6,
                  background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                  color: 'white', fontSize: 10, fontWeight: 800,
                  width: 20, height: 20, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(234,88,12,0.5)',
                  border: '2px solid #1a1a2e',
                }}>3</span>
                {cartPulse && (
                  <span style={{
                    position: 'absolute', top: -6, right: -6,
                    width: 20, height: 20, borderRadius: '50%',
                    background: 'rgba(234,88,12,0.5)',
                  }} className="cart-ping" />
                )}
              </button>

              {/* Account CTA - Desktop */}
              <a href="/login" className="desktop-account" style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 20px', borderRadius: 14, textDecoration: 'none',
                background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                color: 'white', fontWeight: 700, fontSize: 13,
                boxShadow: '0 6px 20px rgba(234,88,12,0.35)',
                transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <User size={15} />
                Account
              </a>

              {/* Mobile search icon - visible only on mobile */}
              <button className="mobile-search" style={{
                display: 'none', width: 44, height: 44, borderRadius: 12,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer', alignItems: 'center', justifyContent: 'center', color: 'white',
              }}
                onClick={() => setMobileMenuOpen(true)}
              >
                <Search size={20} />
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  display: 'none', width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer', alignItems: 'center', justifyContent: 'center', color: 'white',
                }}
                className="mob-hamburger"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '16px 24px 24px' }}>
              {/* Mobile Search */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                <input
                  type="text"
                  placeholder="Search products..."
                  style={{
                    flex: 1, padding: '12px 16px', background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12,
                    color: 'white', fontSize: 13,
                  }}
                />
                <button style={{
                  padding: '12px 16px', background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                  border: 'none', borderRadius: 12, cursor: 'pointer',
                }}>
                  <Search size={16} color="white" />
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {['Products', 'Categories', 'Deals', 'Blog', 'Contact'].map(l => (
                  <a key={l} href="#" className="mob-link" style={{
                    color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: 14, fontWeight: 500,
                    padding: '10px 12px', borderRadius: 10, transition: 'all 0.2s ease',
                  }}>{l}</a>
                ))}
                <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                  <a href="/login" style={{
                    flex: 1, textAlign: 'center', padding: '12px', borderRadius: 12,
                    background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: 'white',
                    fontWeight: 700, fontSize: 14, textDecoration: 'none',
                  }}>Sign In</a>
                  <button style={{
                    position: 'relative', padding: '12px 18px', borderRadius: 12,
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                  }}>
                    <ShoppingCart size={18} color="rgba(255,255,255,0.8)" />
                    <span style={{
                      position: 'absolute', top: -4, right: -4,
                      background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                      color: 'white', fontSize: 10, fontWeight: 800,
                      width: 18, height: 18, borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>3</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* ── Category Bar ─────────────────────────────────────────── */}
        <div style={{
          background: '#111',
          borderBottom: '1px solid rgba(245,158,11,0.12)',
        }}>
          <div className="category-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', height: 48, WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* Hide scrollbar for Chrome/Safari */}
            <style>{`
              .category-container::-webkit-scrollbar { display: none; }
            `}</style>
            
            {/* All Categories pill */}
            <button style={{
              padding: '6px 18px', borderRadius: 10, border: 'none', cursor: 'pointer', flexShrink: 0,
              background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
              color: 'white', fontWeight: 700, fontSize: 13,
              boxShadow: '0 4px 12px rgba(234,88,12,0.3)',
              whiteSpace: 'nowrap',
            }}>
              All Categories
            </button>

            {categories.map(cat => (
              <a key={cat} href="#" className="cat-link" style={{
                padding: '6px 16px', borderRadius: 10, color: 'rgba(255,255,255,0.55)',
                textDecoration: 'none', fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap',
                flexShrink: 0,
              }}>{cat}</a>
            ))}

            <a href="#" style={{
              padding: '6px 16px', borderRadius: 10, textDecoration: 'none', whiteSpace: 'nowrap',
              flexShrink: 0, fontWeight: 700, fontSize: 13,
              background: 'rgba(234,88,12,0.12)', color: '#f59e0b',
              border: '1px solid rgba(234,88,12,0.25)',
            }}>
              🔥 Hot Deals
            </a>
          </div>
        </div>

      </div>
    </>
  );
}