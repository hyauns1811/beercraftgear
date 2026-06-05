'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="glass-card" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'relative'
    }}>
      {/* Category Badge */}
      <span className="badge badge-primary" style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        zIndex: 10
      }}>
        {product.categoryLabel}
      </span>

      {/* Image Container */}
      <Link href={`/product/${product.slug}`} style={{
        display: 'block',
        aspectRatio: '4/3',
        position: 'relative',
        borderRadius: 'var(--radius-sm)',
        backgroundColor: '#131b2e',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.03)',
        marginBottom: '16px'
      }}>
        <Image 
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          style={{
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          className="product-img"
          onError={(e) => {
            const target = e.target as HTMLElement;
            target.style.display = 'none';
          }}
        />
        {/* CSS Category Graphic Fallback */}
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
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.1) 0%, rgba(11, 15, 23, 0.7) 100%)',
          color: '#fff',
          zIndex: 0
        }}>
          {product.category === 'kegerators' && (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/><path d="M9 6h6"/></svg>
          )}
          {product.category === 'tapping' && (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h12"/><path d="M12 2v16"/><path d="m8 6 4-4 4 4"/></svg>
          )}
          {product.category === 'gas' && (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 0-5 5v11a3 3 0 0 0 6 0V7a5 5 0 0 0-1-5Z"/><path d="M9 7h6"/></svg>
          )}
          {product.category === 'towers' && (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h12c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18"/><path d="M10 8h4"/><path d="M10 12h4"/></svg>
          )}
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Draft Equipment
          </span>
        </div>
      </Link>

      {/* Info */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{
            fontSize: '1.05rem',
            fontWeight: 600,
            marginBottom: '8px',
            lineHeight: '1.4',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '44px'
          }}>
            <Link href={`/product/${product.slug}`} style={{ color: '#fff' }}>
              {product.name}
            </Link>
          </h3>
          <p style={{
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: '1.5'
          }}>
            {product.shortDescription}
          </p>
        </div>

        <div>
          {/* Price and Cart Action */}
          <div className="flex-between" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '14px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Price</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-light)' }}>
                ${product.price.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => addToCart(product, 1)}
              className="btn btn-primary btn-sm"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Add to cart"
            >
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glass-card:hover .product-img {
          transform: scale(1.06);
        }
      `}</style>
    </div>
  );
}
