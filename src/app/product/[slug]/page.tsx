'use client';

import React, { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Plus, Minus, ShoppingCart, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const product = PRODUCTS.find((p) => p.slug === slug);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container section flex-center" style={{ minHeight: '60vh' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Product Not Found</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
            We couldn't find the draft beer equipment you were looking for.
          </p>
          <Link href="/shop" className="btn btn-primary">
            Back to Catalogue
          </Link>
        </div>
      </div>
    );
  }

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="container section animate-fade-in" style={{ minHeight: '80vh' }}>
      {/* Breadcrumbs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        <Link href="/">Home</Link>
        <ChevronRight size={14} />
        <Link href="/shop">Shop Gear</Link>
        <ChevronRight size={14} />
        <Link href={`/shop?category=${product.category}`}>{product.categoryLabel}</Link>
        <ChevronRight size={14} />
        <span style={{ color: '#fff' }}>{product.name}</span>
      </div>

      {/* Main product display split */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px' }} className="grid-cols-2">
        {/* Left Side: Product Image Display */}
        <div>
          <div style={{
            position: 'relative',
            aspectRatio: '4/3',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)'
          }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = 'none';
              }}
            />
            {/* SVG fallbacks matching the product category */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'radial-gradient(circle, rgba(217, 119, 6, 0.12) 0%, rgba(11, 15, 23, 0.9) 100%)',
              color: '#fff',
              zIndex: -1
            }}>
              {product.category === 'kegerators' && (
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/><path d="M9 6h6"/></svg>
              )}
              {product.category === 'tapping' && (
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h12"/><path d="M12 2v16"/><path d="m8 6 4-4 4 4"/></svg>
              )}
              {product.category === 'gas' && (
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 0-5 5v11a3 3 0 0 0 6 0V7a5 5 0 0 0-1-5Z"/><path d="M9 7h6"/></svg>
              )}
              {product.category === 'towers' && (
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18"/><path d="M10 8h4"/><path d="M10 12h4"/></svg>
              )}
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Draft Beer Systems
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Product Details & Purchase Trigger */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <span className="badge badge-primary" style={{ marginBottom: '8px' }}>
              {product.categoryLabel}
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              {product.name}
            </h1>
            <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span>SKU: <strong style={{ color: '#fff' }}>{product.sku}</strong></span>
              <span>•</span>
              <span>Shipping Weight: <strong style={{ color: '#fff' }}>{product.weight}</strong></span>
            </div>
          </div>

          <div style={{
            padding: '20px 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Price</span>
            <span style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-light)' }}>
              ${product.price.toFixed(2)}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--success)', display: 'block', marginTop: '6px', fontWeight: 600 }}>
              ✓ In Stock & Ready to Ship (Standard Handling: 1-2 Days)
            </span>
          </div>

          <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>
            {product.shortDescription}
          </p>

          {/* Add to Cart Actions */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '10px', flexWrap: 'wrap' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'var(--bg-input)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              height: '46px',
              padding: '0 8px'
            }}>
              <button
                onClick={handleDecrement}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: 'var(--text-muted)' }}
              >
                <Minus size={14} />
              </button>
              <span style={{ width: '40px', textAlign: 'center', fontWeight: 600, fontSize: '1.05rem' }}>
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: 'var(--text-muted)' }}
              >
                <Plus size={14} />
              </button>
            </div>

            <button
              onClick={() => addToCart(product, quantity)}
              className="btn btn-primary"
              style={{ height: '46px', flex: 1, minWidth: '200px' }}
            >
              Add to Shopping Cart <ShoppingCart size={18} />
            </button>
          </div>

          {/* Fast Policy GMC Badges */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '12px',
            backgroundColor: 'rgba(255,255,255,0.01)',
            padding: '16px',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            marginTop: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem' }}>
              <Truck size={16} style={{ color: 'var(--primary)' }} />
              <span>
                {product.price >= 150 ? 'Free Shipping' : '$9.99 Shipping'}<br />
                <span style={{ color: 'var(--text-muted)' }}>4-9 days transit</span>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem' }}>
              <RotateCcw size={16} style={{ color: 'var(--primary)' }} />
              <span>
                30-Day Returns<br />
                <span style={{ color: 'var(--text-muted)' }}>No restocking fee</span>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem' }}>
              <ShieldCheck size={16} style={{ color: 'var(--primary)' }} />
              <span>
                Stripe Secure<br />
                <span style={{ color: 'var(--text-muted)' }}>Encrypted payment</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Technical Specifications Tabs */}
      <div style={{ marginTop: '80px', borderTop: '1px solid var(--border)', paddingTop: '50px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '50px'
        }} className="grid-cols-2">
          
          {/* Detailed Description */}
          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '20px', color: '#fff' }}>Product Overview</h2>
            <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1rem' }}>
              <p style={{ marginBottom: '16px' }}>{product.description}</p>
              <p>
                All Draft Beer components supplied by Beer Craft Gear are designed and tested to withstand high pressure, maintain thermal efficiency, and guarantee long-lasting performance in busy settings. We partner with leading transport agencies to ensure this item arrives safely and securely at your location.
              </p>
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '20px', color: '#fff' }}>Technical Specifications</h2>
            <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <tbody>
                  {Object.entries(product.specs).map(([key, value], idx) => (
                    <tr
                      key={key}
                      style={{
                        borderBottom: idx === Object.entries(product.specs).length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.05)',
                        backgroundColor: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.01)' : 'transparent'
                      }}
                    >
                      <td style={{ padding: '14px 20px', fontWeight: 600, color: '#fff', width: '40%' }}>{key}</td>
                      <td style={{ padding: '14px 20px', color: 'var(--text-muted)' }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
