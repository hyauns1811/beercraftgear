'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, Phone, Mail } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount, setCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Top GMC Trust Banner */}
      <div style={{
        backgroundColor: '#1e293b',
        color: '#94a3b8',
        fontSize: '0.75rem',
        padding: '6px 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        fontWeight: 500
      }}>
        <div className="container flex-between" style={{ flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <span>Owned and operated by <strong>FUNKY BUDDHA BREWERY LLC</strong></span>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Phone size={11} /> +1 (416) 925-6222
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Mail size={11} /> cs@beercraftgear.com
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(11, 15, 23, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'var(--transition)'
      }}>
        <div className="container flex-between" style={{ height: '76px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image 
              src="/logo.png"
              alt="Beer Craft Gear"
              width={240}
              height={38}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: 'none' }} className="desktop-nav">
            <ul style={{ display: 'flex', listStyle: 'none', gap: '32px', fontWeight: 500 }}>
              <li>
                <Link 
                  href="/" 
                  style={{ color: isActive('/') ? 'var(--primary)' : 'var(--text-main)' }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop" 
                  style={{ color: isActive('/shop') ? 'var(--primary)' : 'var(--text-main)' }}
                >
                  Shop Gear
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  style={{ color: isActive('/services') ? 'var(--primary)' : 'var(--text-main)' }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  style={{ color: isActive('/contact') ? 'var(--primary)' : 'var(--text-main)' }}
                >
                  Contact
                </Link>
              </li>
              <li style={{ position: 'relative' }}>
                <span style={{ color: 'var(--text-muted)', cursor: 'default' }}>Policies</span>
                {/* Simple Dropdown on hover */}
                <div className="dropdown" style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-20px',
                  backgroundColor: '#0f172a',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px 16px',
                  minWidth: '200px',
                  display: 'none',
                  flexDirection: 'column',
                  gap: '10px',
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 100
                }}>
                  <Link href="/policies/shipping">Shipping Policy</Link>
                  <Link href="/policies/returns">Refunds & Returns</Link>
                  <Link href="/policies/billing">Billing Terms</Link>
                  <Link href="/policies/privacy">Privacy Policy</Link>
                  <Link href="/policies/terms">Terms of Service</Link>
                </div>
              </li>
            </ul>
          </nav>

          {/* Action Area */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button 
              onClick={() => setCartOpen(true)}
              style={{
                position: 'relative',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                color: 'var(--text-main)'
              }}
              aria-label="Open cart"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  backgroundColor: 'var(--primary)',
                  color: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 5px rgba(0,0,0,0.5)'
                }}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-main)'
              }}
              className="mobile-trigger"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '76px',
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(11, 15, 23, 0.98)',
            borderBottom: '1px solid var(--border)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            zIndex: 49
          }}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>Shop Gear</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Installation Services</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontWeight: 600, color: 'var(--primary-light)' }}>Policies:</span>
              <Link href="/policies/shipping" onClick={() => setMobileMenuOpen(false)}>Shipping Policy</Link>
              <Link href="/policies/returns" onClick={() => setMobileMenuOpen(false)}>Refunds & Returns</Link>
              <Link href="/policies/billing" onClick={() => setMobileMenuOpen(false)}>Billing Terms</Link>
              <Link href="/policies/privacy" onClick={() => setMobileMenuOpen(false)}>Privacy Policy</Link>
              <Link href="/policies/terms" onClick={() => setMobileMenuOpen(false)}>Terms of Service</Link>
            </div>
          </div>
        )}
      </header>

      {/* Basic styles to manage desktop/mobile responsive navbar display */}
      <style jsx global>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-trigger {
            display: none !important;
          }
          li:hover .dropdown {
            display: flex !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-trigger {
            display: block !important;
          }
        }
        .dropdown a:hover {
          color: var(--primary) !important;
        }
      `}</style>
    </>
  );
}
