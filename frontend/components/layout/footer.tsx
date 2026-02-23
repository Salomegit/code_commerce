'use client';
import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck, Headphones } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .footer-ticker-track {
          display: flex;
          gap: 48px;
          animation: ticker 20s linear infinite;
          white-space: nowrap;
        }

        /* Features: 2 cols on mobile, 4 on tablet+ */
        .footer-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: rgba(245, 158, 11, 0.08);
          border-bottom: 1px solid rgba(245, 158, 11, 0.08);
        }
        @media (min-width: 640px) {
          .footer-features-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Main grid: 1 col mobile → 2 col tablet → 4 col desktop */
        .footer-main-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 20px 32px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 640px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Newsletter: input + button wrap on very small screens */
        .footer-newsletter-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .footer-newsletter-row input {
          flex: 1 1 140px;
          min-width: 0;
          padding: 10px 14px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(245, 158, 11, 0.25);
          color: white;
          font-size: 13px;
          outline: none;
          font-family: 'DM Sans', sans-serif;
        }
        .footer-newsletter-row input:focus {
          border-color: #f59e0b;
        }

        /* Bottom bar wraps on small screens */
        .footer-bottom-bar {
          border-top: 1px solid rgba(245, 158, 11, 0.15);
          padding: 16px 20px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        
        .footer-social:hover {
          background: linear-gradient(135deg, #f59e0b, #ea580c) !important;
          color: white !important;
          transform: translateY(-3px);
        }
        
        .footer-link {
          transition: all 0.2s ease;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-size: 13px;
          display: block;
        }
        
        .footer-link:hover {
          color: #f59e0b !important;
          padding-left: 6px !important;
        }
        
        .payment-chip {
          transition: all 0.2s ease;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 8px;
          padding: 5px 12px;
          cursor: pointer;
        }
        
        .payment-chip:hover {
          border-color: #f59e0b !important;
          background: rgba(245,158,11,0.1) !important;
        }
      `}</style>

      <footer style={{ 
        background: '#111', 
        color: '#e0e0e0', 
        fontFamily: "'DM Sans', sans-serif",
        width: '100%',
        overflowX: 'hidden'
      }}>

     

        {/* ── Features Grid ──────────────────────────────────────── */}
     

        {/* ── Main Footer Body ────────────────────────────────────── */}
        <div className="footer-main-grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                borderRadius: 14,
                width: 48, height: 48,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: 16, color: '#fff',
                fontFamily: "'Syne', sans-serif",
                boxShadow: '0 8px 24px rgba(234,88,12,0.35)',
              }}>CC</div>
              <div>
                <div style={{ 
                  fontFamily: "'Syne', sans-serif", 
                  fontWeight: 800, 
                  fontSize: 18, 
                  color: '#fff' 
                }}>
                  <span style={{ color: '#f59e0b' }}>Code</span>
                  <span style={{ color: 'white' }}>Commerce</span>
                </div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: 0.5, marginTop: 2 }}>
                  Premium Tech Gear
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 20 }}>
              Your trusted destination for premium tech products. Quality, innovation, and customer satisfaction — guaranteed.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <button key={i} className="footer-social" style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  borderRadius: 10,
                  width: 38,
                  height: 38,
                  cursor: 'pointer',
                  color: 'rgba(255,255,255,0.6)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  transition: 'all 0.25s ease',
                }}>
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ 
              fontFamily: "'Syne', sans-serif",
              color: '#fff', 
              fontWeight: 700, 
              fontSize: 15, 
              letterSpacing: 0.5, 
              marginBottom: 20, 
              marginTop: 0,
              paddingBottom: 12,
              borderBottom: '1px solid rgba(245,158,11,0.15)'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['About Us', 'Shop',  'Contact Us', 'Track Order'].map(link => (
                <li key={link} style={{ marginBottom: 12 }}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 style={{ 
              fontFamily: "'Syne', sans-serif",
              color: '#fff', 
              fontWeight: 700, 
              fontSize: 15, 
              letterSpacing: 0.5, 
              marginBottom: 20, 
              marginTop: 0,
              paddingBottom: 12,
              borderBottom: '1px solid rgba(245,158,11,0.15)'
            }}>
              Customer Service
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Help Center','Terms & Conditions', 'Privacy Policy'].map(link => (
                <li key={link} style={{ marginBottom: 12 }}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 style={{ 
              fontFamily: "'Syne', sans-serif",
              color: '#fff', 
              fontWeight: 700, 
              fontSize: 15, 
              letterSpacing: 0.5, 
              marginBottom: 20, 
              marginTop: 0,
              paddingBottom: 12,
              borderBottom: '1px solid rgba(245,158,11,0.15)'
            }}>
              Get In Touch
            </h4>
            {[
              { Icon: Phone, text: '+254 700 000 000' },
              { Icon: Mail, text: 'support@codecommerce.com' },
            ].map(({ Icon, text }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 10,
                  background: 'rgba(245,158,11,0.1)',
                  border: '1px solid rgba(245,158,11,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={14} color="#f59e0b" />
                </div>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{text}</span>
              </div>
            ))}

          
          </div>
        </div>

        {/* ── Bottom Bar ─────────────────────────────────────────── */}
        <div className="footer-bottom-bar">
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
            © 2025 CodeCommerce. All rights reserved. Made with ❤️ for developers.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>We Accept:</span>
            {['VISA', 'MPESA'].map(method => (
              <span key={method} className="payment-chip" style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 0.5,
              }}>{method}</span>
            ))}
          </div>
        </div>

      </footer>
    </>
  );
}