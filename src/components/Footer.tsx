import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#090d16',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      paddingTop: '60px',
      paddingBottom: '30px',
      color: 'var(--text-muted)',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Column 1: Company Intro */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <Image 
                src="/logo.png"
                alt="Beer Craft Gear"
                width={190}
                height={30}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p style={{ lineHeight: '1.6', marginBottom: '16px' }}>
              beercraftgear.com is a leading direct-to-consumer storefront for premium draft beer equipment, kegerators, and tapping gear. We are committed to supplying bars, restaurants, and home beer enthusiasts with commercial-grade draft dispensing components.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(217, 119, 6, 0.08)',
              border: '1px solid rgba(217, 119, 6, 0.2)',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '0.8rem',
              color: 'var(--primary-light)'
            }}>
              <ShieldCheck size={14} /> SSL Secured & Encrypted Checkout
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#fff', marginBottom: '20px', fontFamily: 'var(--font-display)' }}>Shop Gear</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/shop?category=kegerators">Kegerators & Cooling</Link></li>
              <li><Link href="/shop?category=tapping">Keg Tapping Systems</Link></li>
              <li><Link href="/shop?category=gas">Gas Tanks & Regulators</Link></li>
              <li><Link href="/shop?category=towers">Towers & Drip Trays</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Policies (GMC) */}
          <div>
            <h4 style={{ color: '#fff', marginBottom: '20px', fontFamily: 'var(--font-display)' }}>Customer Service</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/contact">Contact Us / Support</Link></li>
              <li><Link href="/policies/shipping">Shipping & Delivery Policy</Link></li>
              <li><Link href="/policies/returns">Refunds & Returns Policy</Link></li>
              <li><Link href="/policies/billing">Billing & Secure Payment Terms</Link></li>
              <li><Link href="/policies/privacy">Privacy Policy</Link></li>
              <li><Link href="/policies/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Address & Phone (GMC) */}
          <div>
            <h4 style={{ color: '#fff', marginBottom: '20px', fontFamily: 'var(--font-display)' }}>Contact Information</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }} />
                <span>
                  <strong>BEER BABES FAMILY LTD</strong><br />
                  163 Dalhurst Way NW<br />
                  Calgary AB T3A 1P1 CA
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} style={{ color: 'var(--primary)' }} />
                <span>+1 (416) 925-6222</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} style={{ color: 'var(--primary)' }} />
                <span>cs@beercraftgear.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Clock size={16} style={{ color: 'var(--primary)', marginTop: '3px' }} />
                <span>Mon - Fri: 9:00 AM - 5:00 PM (MST)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright, Corporate structure and Cards */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <p style={{ fontSize: '0.8rem' }}>
              © {new Date().getFullYear()} Beer Craft Gear. All Rights Reserved.
            </p>
            <p style={{ fontSize: '0.75rem', marginTop: '4px', color: '#64748b' }}>
              <strong>beercraftgear.com</strong> is a website owned and operated by <strong>BEER BABES FAMILY LTD</strong>, a registered company in Canada.
            </p>
          </div>

          {/* Simulated Card Badges */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {/* Custom styled cards for a clean look */}
            <div className="card-badge">Visa</div>
            <div className="card-badge">Mastercard</div>
            <div className="card-badge">AMEX</div>
            <div className="card-badge">Discover</div>
            <div className="card-badge">Stripe</div>
          </div>
        </div>
      </div>


    </footer>
  );
}
