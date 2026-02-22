'use client';
import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck, Headphones } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        .footer-social:hover { background: linear-gradient(135deg, #f59e0b, #ea580c) !important; color: white !important; transform: translateY(-3px); }
        .footer-link:hover { color: #f59e0b !important; padding-left: 6px !important; }
        .footer-link { transition: all 0.2s ease !important; }
        .footer-social { transition: all 0.25s ease !important; }
        .payment-chip:hover { border-color: #f59e0b !important; background: rgba(245,158,11,0.1) !important; }
        .payment-chip { transition: all 0.2s ease !important; }
      `}</style>

      {/* ── Ticker / Features Bar ───────────────────────────────── */}
      <div style={{ background: 'linear-gradient(135deg, #f59e0b, #ea580c)', overflow: 'hidden', padding: '14px 0' }}>
        <div style={{ display: 'flex', gap: 64, whiteSpace: 'nowrap', animation: 'ticker 28s linear infinite' }}>
          {[...Array(2)].flatMap(() => [
            '🚀 Free Shipping on Orders KES 5,000+',
            '🛡️ 100% Secure Payment',
            '🎧 24/7 Developer Support',
            '↩️ 30-Day Easy Returns',
          ]).map((item, i) => (
            <span key={i} style={{ color: 'white', fontWeight: 700, fontSize: 13, letterSpacing: '0.5px', flexShrink: 0 }}>
              {item}
            </span>
          ))}
        </div>
        <style>{`@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </div>

      {/* ── Features Grid ──────────────────────────────────────── */}
      <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)', padding: '40px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            { Icon: Truck,       title: 'FREE SHIPPING',   sub: 'Orders over KES 5,000' },
            { Icon: Shield,      title: 'SECURE PAYMENT',  sub: '100% Protected' },
            { Icon: Headphones,  title: '24/7 SUPPORT',    sub: 'Dedicated dev support' },
            { Icon: CreditCard,  title: 'EASY RETURNS',    sub: '30-day guarantee' },
          ].map(({ Icon, title, sub }, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 16, flexShrink: 0,
                background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={22} color="#f59e0b" />
              </div>
              <div>
                <p style={{ color: 'white', fontWeight: 700, fontSize: 12, letterSpacing: '1px' }}>{title}</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginTop: 2 }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Footer Body ────────────────────────────────────── */}
      <div style={{ background: '#111', padding: '64px 0 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.4fr', gap: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(234,88,12,0.35)',
                fontFamily: "'Syne', sans-serif", fontWeight: 800, color: 'white', fontSize: 16,
              }}>CC</div>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20, lineHeight: 1 }}>
                  <span style={{ color: '#f59e0b' }}>Code</span>
                  <span style={{ color: 'white' }}>Commerce</span>
                </div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, marginTop: 3, fontWeight: 500, letterSpacing: '0.5px' }}>Premium Tech Gear</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.8, marginBottom: 24 }}>
              Your trusted destination for premium tech products. Quality, innovation, and customer satisfaction — guaranteed.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <button key={i} className="footer-social" style={{
                  width: 40, height: 40, borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.05)', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)',
                }}>
                  <Icon size={17} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", color: 'white', fontWeight: 700, fontSize: 15, marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['About Us', 'Shop', 'Blog', 'Careers', 'Contact Us', 'Track Order'].map(link => (
                <li key={link}>
                  <a href="#" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, display: 'block' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", color: 'white', fontWeight: 700, fontSize: 15, marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              Customer Service
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Help Center', 'Shipping Info', 'Returns', 'Warranty', 'Terms & Conditions', 'Privacy Policy'].map(link => (
                <li key={link}>
                  <a href="#" className="footer-link" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, display: 'block' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", color: 'white', fontWeight: 700, fontSize: 15, marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              Get In Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
              {[
                { Icon: MapPin, text: '123 Tech Street, Nairobi, Kenya' },
                { Icon: Phone,  text: '+254 700 000 000' },
                { Icon: Mail,   text: 'support@codecommerce.com' },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={14} color="#f59e0b" />
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 20 }}>
              <h4 style={{ fontFamily: "'Syne', sans-serif", color: 'white', fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Stay in the Loop</h4>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginBottom: 14 }}>New drops, deals & dev content.</p>
              {subscribed ? (
                <div style={{ textAlign: 'center', color: '#f59e0b', fontWeight: 700, fontSize: 13, padding: '8px 0' }}>
                  ✓ You're subscribed!
                </div>
              ) : (
                <div style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                    placeholder="your@email.com"
                    style={{
                      flex: 1, padding: '10px 14px', borderRadius: 10,
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                      color: 'white', fontSize: 13, outline: 'none',
                    }}
                  />
                  <button onClick={handleSubscribe} style={{
                    padding: '10px 16px', borderRadius: 10, border: 'none', cursor: 'pointer',
                    background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                    color: 'white', fontWeight: 700, fontSize: 13,
                    boxShadow: '0 4px 16px rgba(234,88,12,0.35)',
                  }}>
                    <Mail size={15} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ─────────────────────────────────────────── */}
        <div style={{ maxWidth: 1200, margin: '48px auto 0', padding: '0 40px' }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>
              © 2025 CodeCommerce. All rights reserved. Made with ❤️ for developers.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>We Accept:</span>
              <div style={{ display: 'flex', gap: 8 }}>
                {['VISA', 'MC', 'MPESA'].map(method => (
                  <div key={method} className="payment-chip" style={{
                    padding: '5px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)',
                    background: 'rgba(255,255,255,0.05)', cursor: 'pointer',
                  }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, fontWeight: 700, letterSpacing: '0.5px' }}>{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}