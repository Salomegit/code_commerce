  import { useState, useEffect } from 'react';
  import { MagneticButton } from '@/components/products/magneticButton';
  import { Counter } from '@/components/products/counterAnimation';
  import { CategoryCard } from '@/components/products/categoryCard';
  import { ProductCard } from '@/components/products/ProductsCard';
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
   
  function TickerTape() {
  const items = ["🚀 Free Shipping on Orders $50+", "💻 New Developer Kits Arrived", "⚡ Flash Sale: 30% Off Accessories", "🎯 Code Better with CodeCommerce", "🔥 Top Rated Gear of 2025"];
  const doubled = [...items, ...items];

  return (
    <div style={{ background: "linear-gradient(135deg, #f59e0b, #ea580c)", overflow: "hidden", padding: "12px 0", position: "relative" }}>
      <div style={{
        display: "flex", gap: 60, whiteSpace: "nowrap",
        animation: "ticker 25s linear infinite",
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ color: "white", fontWeight: 700, fontSize: 13, letterSpacing: "0.5px", flexShrink: 0 }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}


 export default function HomePage() {
   
  
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const products = [
    { emoji: "⌨️", category: "Keyboards", name: "MechPro X1", price: "199", badge: "NEW" },
    { emoji: "🖱️", category: "Mice", name: "SwiftClick Pro", price: "89" },
    { emoji: "🎧", category: "Audio", name: "DevZone Headset", price: "149", badge: "HOT" },
    { emoji: "💡", category: "Lighting", name: "RGBDesk Ultra", price: "79" },
    { emoji: "📱", category: "Gadgets", name: "HubStation 7", price: "119" },
    { emoji: "🖥️", category: "Monitors", name: "CodeView 27\"", price: "399", badge: "SALE" },
  ];

  const categories = [
    { emoji: "⌨️", title: "Keyboards & Input", desc: "Mechanical switches, wireless, ergonomic designs for every coder.", count: 48 },
    { emoji: "🎧", title: "Audio Gear", desc: "Focus-enhancing headsets and speakers for deep work sessions.", count: 32 },
    { emoji: "💡", title: "Desk Setup", desc: "RGB lighting, cable management, and aesthetic desk accessories.", count: 67 },
    { emoji: "🖥️", title: "Monitors", desc: "High-refresh, color-accurate displays built for long coding sessions.", count: 24 },
  ];

  const tabs = ["All", "Keyboards", "Audio", "Gadgets", "Monitors"];

  return (
    <>
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; background: #f9f7f4; }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        .hero-emoji { animation: float 4s ease-in-out infinite; }
        .fade-in { animation: fadeUp 0.7s ease forwards; }
        .fade-delay-1 { animation-delay: 0.1s; opacity: 0; }
        .fade-delay-2 { animation-delay: 0.25s; opacity: 0; }
        .fade-delay-3 { animation-delay: 0.4s; opacity: 0; }
      `}</style>
   
   
   
   
   
   <div style={{ paddingTop: 60 }}><TickerTape /></div>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #533483 100%)",
        minHeight: "85vh", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden"
      }}>
        {/* Decorative blobs */}
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -150, left: -50, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 70%)" }} />
        
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px", display: "flex", alignItems: "center", gap: 80, width: "100%", position: "relative" }}>
          <div style={{ flex: 1 }}>
            <div className="fade-in fade-delay-1" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: "999px", padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
              <span style={{ color: "#f59e0b", fontSize: 12, fontWeight: 700, letterSpacing: "1px" }}>NEW ARRIVALS 2025</span>
            </div>
            <h1 className="fade-in fade-delay-2" style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, color: "white", lineHeight: 1.1, marginBottom: 24 }}>
              Elevate Your<br />
              <span style={{
                background: "linear-gradient(90deg, #f59e0b, #ea580c, #f59e0b)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                animation: "shimmer 3s linear infinite"
              }}>Coding Setup</span>
            </h1>
            <p className="fade-in fade-delay-3" style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, lineHeight: 1.8, marginBottom: 36, maxWidth: 440 }}>
              Your one-stop shop for all your coding needs. Discover best-in-class peripherals, gear, and tools curated for developers who care about their craft.
            </p>
            <div className="fade-in fade-delay-3" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <MagneticButton href="#" className="">
                <span style={{
                  background: "linear-gradient(135deg, #f59e0b, #ea580c)",
                  color: "white", padding: "14px 32px", borderRadius: "12px",
                  fontSize: 15, fontWeight: 700, display: "block",
                  boxShadow: "0 8px 32px rgba(234,88,12,0.4)"
                }}>Shop Now →</span>
              </MagneticButton>
              <MagneticButton href="#" className="">
                <span style={{
                  background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)",
                  color: "white", padding: "14px 32px", borderRadius: "12px",
                  fontSize: 15, fontWeight: 600, display: "block",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}>Learn More</span>
              </MagneticButton>
            </div>
            {/* Stats row */}
            <div style={{ display: "flex", gap: 40, marginTop: 48 }}>
              {[{ n: 12000, suf: "+", label: "Customers" }, { n: 500, suf: "+", label: "Products" }, { n: 98, suf: "%", label: "Satisfaction" }].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 800, color: "#f59e0b" }}>
                    <Counter to={stat.n} suffix={stat.suf} />
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-emoji" style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ width: 380, height: 380, borderRadius: "50%", background: "rgba(245,158,11,0.08)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(245,158,11,0.15)" }}>
                <div style={{ width: 300, height: 300, borderRadius: "50%", background: "rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(245,158,11,0.2)" }}>
                  <span style={{ fontSize: 160 }}>💻</span>
                </div>
              </div>
              {/* Floating badges */}
              {[
                { emoji: "⌨️", label: "Keyboard", top: "10%", left: "-10%" },
                { emoji: "🎧", label: "Audio", bottom: "15%", right: "-8%" },
                { emoji: "🖱️", label: "Mouse", top: "50%", left: "-15%" },
              ].map((badge, i) => (
                <div key={i} style={{
                  position: "absolute", ...({ top: badge.top, left: badge.left, bottom: badge.bottom, right: badge.right }),
                  background: "rgba(255,255,255,0.12)", backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 12, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8,
                  animation: `float ${3 + i * 0.7}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`
                }}>
                  <span style={{ fontSize: 20 }}>{badge.emoji}</span>
                  <span style={{ color: "white", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
          <div>
            <p style={{ color: "#f59e0b", fontWeight: 700, fontSize: 12, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 8 }}>Handpicked for You</p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, color: "#1a1a1a" }}>Featured Products</h2>
          </div>
          {/* Tab filter */}
          <div style={{ display: "flex", gap: 8 }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                padding: "8px 18px", borderRadius: "999px", border: "none", cursor: "pointer",
                background: activeTab === tab ? "linear-gradient(135deg, #f59e0b, #ea580c)" : "#f0f0f0",
                color: activeTab === tab ? "white" : "#555",
                fontWeight: 600, fontSize: 13, transition: "all 0.25s ease"
              }}>{tab}</button>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {products.map((p, i) => <ProductCard key={i} {...p} />)}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <MagneticButton href="#">
            <span style={{
              display: "inline-block", border: "2px solid #ea580c", color: "#ea580c",
              padding: "12px 36px", borderRadius: "12px", fontWeight: 700, fontSize: 14
            }}>See All Products →</span>
          </MagneticButton>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section style={{ background: "linear-gradient(180deg, #fff7ed 0%, #f9f7f4 100%)", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#f59e0b", fontWeight: 700, fontSize: 12, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 8 }}>Browse</p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, color: "#1a1a1a" }}>Shop By Category</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {categories.map((c, i) => <CategoryCard key={i} {...c} />)}
          </div>
        </div>
      </section>

      {/* INTERACTIVE MARQUEE BANNER */}
      <section style={{ background: "linear-gradient(135deg, #1a1a2e, #0f3460)", padding: "64px 40px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontWeight: 700, fontSize: 12, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Why Developers Love Us</p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, color: "white", marginBottom: 48 }}>
          Experience Streamlined<br />
          <span style={{ color: "#f59e0b" }}>Shopping With CodeCommerce</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, maxWidth: 1000, margin: "0 auto" }}>
          {[
            { icon: "🚀", title: "Free Delivery", desc: "Free shipping on all orders over $50 — no hidden fees." },
            { icon: "⚡", title: "Lightning Fast", desc: "Same-day dispatch on in-stock items, no waiting." },
            { icon: "🛡️", title: "2-Year Warranty", desc: "Every product backed by our hassle-free warranty." },
            { icon: "💬", title: "Dev Support", desc: "Live chat with product experts who actually code." },
          ].map((f, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                width: 64, height: 64, borderRadius: 20,
                background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, margin: "0 auto 16px"
              }}>{f.icon}</div>
              <h4 style={{ fontFamily: "'Syne', sans-serif", color: "white", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{f.title}</h4>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <MagneticButton href="#">
            <span style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #f59e0b, #ea580c)",
              color: "white", padding: "16px 48px", borderRadius: "14px",
              fontWeight: 700, fontSize: 16,
              boxShadow: "0 12px 40px rgba(234,88,12,0.4)"
            }}>Start Shopping Now →</span>
          </MagneticButton>
        </div>
      </section>

<Footer />
</>
  ) }