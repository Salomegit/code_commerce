import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck, Headphones } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-amber-50">
      {/* Features Bar */}
      <div className="bg-gradient-to-r from-yellow-500 to-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm">FREE SHIPPING</h3>
                <p className="text-xs text-white/80">Orders over KES 5,000</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm">SECURE PAYMENT</h3>
                <p className="text-xs text-white/80">100% Protected</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm">24/7 SUPPORT</h3>
                <p className="text-xs text-white/80">Dedicated support</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm">EASY RETURNS</h3>
                <p className="text-xs text-white/80">30-day guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-rose-900 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-rose-900/20">
                <span className="text-lg">CC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black leading-none">
                  <span className="bg-gradient-to-r from-yellow-600 to-rose-900 bg-clip-text text-transparent">Code</span>
                  <span className="text-slate-900">Commerce</span>
                </span>
                <span className="text-xs text-slate-500 font-medium">Premium Tech Gear</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              Your trusted destination for premium tech products. Quality, innovation, and customer satisfaction guaranteed.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-amber-100 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-rose-900 text-slate-700 hover:text-white rounded-lg flex items-center justify-center transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-100 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-rose-900 text-slate-700 hover:text-white rounded-lg flex items-center justify-center transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-100 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-rose-900 text-slate-700 hover:text-white rounded-lg flex items-center justify-center transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-100 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-rose-900 text-slate-700 hover:text-white rounded-lg flex items-center justify-center transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-rose-900 text-sm transition">About Us</a></li>
              <li><a href="#" className="text-slate-600 hover:text-rose-900 text-sm transition">Shop</a></li>
              <li><a href="#" className="text-slate-600 hover:text-rose-900 text-sm transition">Blog</a></li>
              <li><a href="#" className="text-slate-600 hover:text-rose-900 text-sm transition">Careers</a></li>
              <li><a href="#" className="text-slate-600 hover:text-rose-900 text-sm transition">Contact Us</a></li>
              <li><a href="#" className="text-slate-600 hover:text-rose-900 text-sm transition">Track Order</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-rose-900 text-sm transition">Help Center</a></li>
              <li><a href="#" className="text-slate-600 hover:text-rose-900 text-sm transition">Shipping Info</a></li>
              <li><a href="#" className="text-slate-600 hover:text-rose-900 text-sm transition">Returns</a></li>
              <li><a href="#" className="text-slate-600 hover:text-rose-900 text-sm transition">Warranty</a></li>
              <li><a href="#" className="text-slate-600 hover:text-rose-900 text-sm transition">Terms & Conditions</a></li>
              <li><a href="#" className="text-slate-600 hover:text-rose-900 text-sm transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-900 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600 text-sm">123 Tech Street, Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-rose-900 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600 text-sm">+254 700 000 000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-rose-900 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600 text-sm">support@codecommerce.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-slate-900 font-bold text-sm mb-3">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-amber-50 border-2 border-amber-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-yellow-500 transition"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-rose-900 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-rose-900/30 transition">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm text-center md:text-left">
              © 2024 CodeCommerce. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-slate-600 text-sm">We Accept:</span>
              <div className="flex gap-2">
                <div className="w-12 h-8 bg-amber-100 rounded border border-amber-200 flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-700">VISA</span>
                </div>
                <div className="w-12 h-8 bg-amber-100 rounded border border-amber-200 flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-700">MC</span>
                </div>
                <div className="w-12 h-8 bg-amber-100 rounded border border-amber-200 flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-700">MPESA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}