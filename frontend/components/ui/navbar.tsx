'use client';

import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, User, Globe, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-bgLight ">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-yellow-500 to-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            {/* Welcome Message */}
            <div className="flex items-center gap-2">
              <span className="font-medium">WELCOME TO CODECOMMERCE STORE</span>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-6">
              {/* Currency Selector */}
              <button className="flex items-center gap-1 hover:text-white/80 transition">
                <span className="font-medium">KES</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {/* Language Selector */}
              <button className="flex items-center gap-1 hover:text-white/80 transition">
                <Globe className="w-4 h-4" />
                <span className="font-medium">ENG</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {/* Links */}
              <a href="#" className="hidden md:inline hover:text-white/80 transition">Blog</a>
              <a href="#" className="hidden md:inline hover:text-white/80 transition">Contact Us</a>
              <a href="#" className="hidden md:inline hover:text-white/80 transition">My Account</a>

              {/* Sign In / Register */}
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <a href="#" className="font-medium hover:text-white/80 transition">Sign In</a>
                <span className="text-white/60">/</span>
                <a href="#" className="font-medium hover:text-white/80 transition">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-amber-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-rose-900 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-rose-900/20">
                <span className="text-lg">CC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black leading-none">
                  <span className="bg-gradient-to-r from-yellow-600 to-rose-900 bg-clip-text text-transparent">Code</span>
                  <span className="text-slate-900">Commerce</span>
                </span>
                <span className="text-xs text-slate-500 font-medium">Premium Tech Gear</span>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products, brands, or categories..."
                  className="w-full pl-5 pr-12 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 transition"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-500 to-rose-900 text-white p-2 rounded-lg hover:shadow-lg transition">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side Actions - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              {/* Cart */}
              <button className="relative p-3 hover:bg-amber-50 rounded-xl transition group">
                <ShoppingCart className="w-6 h-6 text-slate-700 group-hover:text-rose-900 transition" />
                <span className="absolute -top-1 -right-1 bg-rose-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md">
                  3
                </span>
              </button>

              {/* Account Button */}
              <button className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-yellow-500 to-rose-900 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-rose-900/30 hover:scale-105 transition">
                <User className="w-4 h-4" />
                <span>Account</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-amber-50 rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Search Bar */}
          <div className="lg:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-12 py-3 bg-amber-50 border-2 border-amber-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-yellow-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-500 to-rose-900 text-white p-2 rounded-lg">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-amber-200">
              <div className="flex flex-col gap-3">
                <a href="#" className="text-slate-700 hover:text-rose-900 py-2 px-4 hover:bg-amber-50 rounded-lg transition">Products</a>
                <a href="#" className="text-slate-700 hover:text-rose-900 py-2 px-4 hover:bg-amber-50 rounded-lg transition">Categories</a>
                <a href="#" className="text-slate-700 hover:text-rose-900 py-2 px-4 hover:bg-amber-50 rounded-lg transition">Deals</a>
                <a href="#" className="text-slate-700 hover:text-rose-900 py-2 px-4 hover:bg-amber-50 rounded-lg transition">Blog</a>
                <a href="#" className="text-slate-700 hover:text-rose-900 py-2 px-4 hover:bg-amber-50 rounded-lg transition">Contact</a>
                <div className="flex gap-2 mt-2">
                  <button className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-500 to-rose-900 text-white font-bold rounded-xl">
                    Sign In
                  </button>
                  <button className="relative p-3 bg-amber-50 border-2 border-amber-200 rounded-xl">
                    <ShoppingCart className="w-5 h-5 text-slate-700" />
                    <span className="absolute -top-1 -right-1 bg-rose-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                      3
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Category Navigation Bar */}
      <div className="bg-white border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            <button className="px-5 py-2 bg-gradient-to-r from-yellow-500 to-rose-900 text-white font-semibold rounded-lg whitespace-nowrap hover:shadow-md transition">
              All Categories
            </button>
            <a href="#" className="px-5 py-2 text-slate-700 font-medium hover:text-rose-900 hover:bg-amber-50 rounded-lg whitespace-nowrap transition">
              Electronics
            </a>
            <a href="#" className="px-5 py-2 text-slate-700 font-medium hover:text-rose-900 hover:bg-amber-50 rounded-lg whitespace-nowrap transition">
              Monitors
            </a>
            <a href="#" className="px-5 py-2 text-slate-700 font-medium hover:text-rose-900 hover:bg-amber-50 rounded-lg whitespace-nowrap transition">
              Components
            </a>
            <a href="#" className="px-5 py-2 text-slate-700 font-medium hover:text-rose-900 hover:bg-amber-50 rounded-lg whitespace-nowrap transition">
              Peripherals
            </a>
            <a href="#" className="px-5 py-2 text-slate-700 font-medium hover:text-rose-900 hover:bg-amber-50 rounded-lg whitespace-nowrap transition">
              Audio
            </a>
            <a href="#" className="px-5 py-2 text-slate-700 font-medium hover:text-rose-900 hover:bg-amber-50 rounded-lg whitespace-nowrap transition">
              Accessories
            </a>
            <a href="#" className="px-5 py-2 text-slate-700 font-medium hover:text-rose-900 hover:bg-amber-50 rounded-lg whitespace-nowrap transition">
              Build PC
            </a>
            <a href="#" className="px-5 py-2 text-rose-900 font-bold hover:bg-amber-50 rounded-lg whitespace-nowrap transition">
              🔥 Hot Deals
            </a>
          </div>
        </div>
      </div>

    
    </div>
  );
}