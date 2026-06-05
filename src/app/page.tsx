import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, RotateCcw, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Beer Craft Gear | Premium Draft Beer Equipment & Systems',
  description: 'Shop commercial-grade kegerators, tapping systems, gas regulators, towers, and drip trays at Beer Craft Gear. Owned by Beer Babes Family LTD.',
};

export default function HomePage() {
  // Select featured products (first 4 items)
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div style={{ overflow: 'hidden' }} className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        backgroundColor: '#070a10',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        {/* Background Image with Dark Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}>
          <Image 
            src="/images/hero-beer.png"
            alt="Draft Beer Pour"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.35 }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, #0b0f17 30%, rgba(11, 15, 23, 0.7) 100%)'
          }} />
        </div>

        {/* Hero Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '650px' }}>
            <span className="badge badge-primary" style={{ marginBottom: '16px', padding: '6px 12px' }}>
              Premium Draft Beer Gear
            </span>
            <h1 style={{
              fontSize: '3.75rem',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '24px',
              letterSpacing: '-1px'
            }}>
              Pour the Perfect Pint <br />
              <span className="text-gradient">Every Single Time</span>
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-muted)',
              marginBottom: '36px',
              lineHeight: '1.6'
            }}>
              Discover commercial-grade draft beer equipment designed for professional bars, restaurants, and premium home dispense systems. From advanced kegerators to tap towers, we supply the best.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/shop" className="btn btn-primary">
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Banner */}
      <section style={{
        backgroundColor: '#090d16',
        padding: '30px 0',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '30px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: 'var(--primary)', display: 'flex' }}><Truck size={30} /></div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Free Standard Shipping</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>On all orders of $150.00 and over</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: 'var(--primary)', display: 'flex' }}><RotateCcw size={30} /></div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>30-Day Hassle Free Returns</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>No restocking fees, simple processing</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: 'var(--primary)', display: 'flex' }}><ShieldCheck size={30} /></div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Stripe Secure Checkout</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>PCI-DSS Level 1 secure transactions</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ color: 'var(--primary)', display: 'flex' }}><HelpCircle size={30} /></div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Expert Phone Support</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>+1 (416) 925-6222 | cs@beercraftgear.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section" style={{ backgroundColor: '#0b0f17' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Categories</span>
            <h2 style={{ fontSize: '2.25rem', marginTop: '8px' }}>Shop Draft Equipment</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '24px'
          }}>
            {/* Category 1 */}
            <Link href="/shop?category=kegerators" className="glass-card" style={{ textAlign: 'center', padding: '36px 20px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(217, 119, 6, 0.08)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyItems: 'center', color: 'var(--primary)', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/><path d="M9 6h6"/></svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#fff' }}>Kegerators</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Freestanding & undercounter beer dispensers</p>
            </Link>

            {/* Category 2 */}
            <Link href="/shop?category=tapping" className="glass-card" style={{ textAlign: 'center', padding: '36px 20px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(217, 119, 6, 0.08)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyItems: 'center', color: 'var(--primary)', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h12"/><path d="M12 2v16"/><path d="m8 6 4-4 4 4"/></svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#fff' }}>Tapping Gear</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Sankey couplers, beer faucets & shanks</p>
            </Link>

            {/* Category 3 */}
            <Link href="/shop?category=gas" className="glass-card" style={{ textAlign: 'center', padding: '36px 20px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(217, 119, 6, 0.08)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyItems: 'center', color: 'var(--primary)', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 0-5 5v11a3 3 0 0 0 6 0V7a5 5 0 0 0-1-5Z"/><path d="M9 7h6"/></svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#fff' }}>Gas Equipment</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>CO2 cylinders, regulators & manifolds</p>
            </Link>

            {/* Category 4 */}
            <Link href="/shop?category=towers" className="glass-card" style={{ textAlign: 'center', padding: '36px 20px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(217, 119, 6, 0.08)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyItems: 'center', color: 'var(--primary)', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18"/><path d="M10 8h4"/><path d="M10 12h4"/></svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#fff' }}>Towers & Drip Trays</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Stainless steel draft towers & countertops</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{ backgroundColor: '#0f172a', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="flex-between" style={{ marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Featured Equipment</span>
              <h2 style={{ fontSize: '2.25rem', marginTop: '8px' }}>Top Selling Draft Gear</h2>
            </div>
            <Link href="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary-light)', fontWeight: 600 }}>
              View All Products <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Compliance Callout */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.04) 0%, rgba(11, 15, 23, 0.95) 100%)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Shop with Absolute Confidence</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '24px' }}>
            <strong>Beer Craft Gear</strong> (beercraftgear.com) is an authorized online retail storefront owned and operated directly by <strong>BEER BABES FAMILY LTD</strong>, headquartered at 163 Dalhurst Way NW, Calgary, Alberta, Canada. We are fully registered, bonded, and compliant with all local corporate standards and international e-commerce guidelines.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/policies/shipping" style={{ textDecoration: 'underline', color: '#fff' }}>Shipping Policies</Link>
            <Link href="/policies/returns" style={{ textDecoration: 'underline', color: '#fff' }}>Return & Refund Terms</Link>
            <Link href="/policies/billing" style={{ textDecoration: 'underline', color: '#fff' }}>Billing & Payment Terms</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
