'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setCartOpen, 
    updateQuantity, 
    removeFromCart, 
    cartTotal,
    cartCount
  } = useCart();

  const drawerRef = useRef<HTMLDivElement>(null);
  const FREE_SHIPPING_THRESHOLD = 150;
  const shippingLeft = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);
  const progressPercent = Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCartOpen(false);
    };
    if (isCartOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // prevent bg scroll
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen, setCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      {/* Backdrop */}
      <div 
        onClick={() => setCartOpen(false)}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(4px)',
          transition: 'var(--transition)'
        }}
      />

      {/* Drawer Body */}
      <div 
        ref={drawerRef}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          backgroundColor: '#0f172a',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.5)',
          borderLeft: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1001,
          animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} style={{ color: 'var(--primary)' }} />
            <h3 style={{ fontSize: '1.25rem' }}>Your Cart ({cartCount})</h3>
          </div>
          <button 
            onClick={() => setCartOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div style={{
          padding: '16px 24px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          borderBottom: '1px solid var(--border)'
        }}>
          {shippingLeft > 0 ? (
            <p style={{ fontSize: '0.85rem', marginBottom: '8px' }}>
              Add <strong style={{ color: 'var(--primary-light)' }}>${shippingLeft.toFixed(2)}</strong> more for <strong>FREE SHIPPING!</strong>
            </p>
          ) : (
            <p style={{ fontSize: '0.85rem', marginBottom: '8px', color: 'var(--success)', fontWeight: 600 }}>
              🎉 Congrats! You qualified for Free Standard Shipping!
            </p>
          )}
          <div style={{
            width: '100%',
            height: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '3px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${progressPercent}%`,
              height: '100%',
              backgroundColor: cartTotal >= FREE_SHIPPING_THRESHOLD ? 'var(--success)' : 'var(--primary)',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>

        {/* Scrollable Item List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {cart.length === 0 ? (
            <div style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)'
              }}>
                <ShoppingBag size={30} />
              </div>
              <div>
                <h4 style={{ marginBottom: '6px' }}>Your Cart is Empty</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Browse our high-quality draft gear catalog to fill it up.
                </p>
              </div>
              <Link 
                href="/shop" 
                onClick={() => setCartOpen(false)}
                className="btn btn-primary"
                style={{ marginTop: '12px' }}
              >
                Go Shop Draft Beer Gear
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div 
                key={item.product.id}
                style={{
                  display: 'flex',
                  gap: '16px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Product Thumbnail */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '8px',
                  backgroundColor: '#1e293b',
                  overflow: 'hidden',
                  position: 'relative',
                  flexShrink: 0,
                  border: '1px solid var(--border)'
                }}>
                  <Image 
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    sizes="80px"
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      // Fallback visual if image fails to render
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Category icon fallback in case image isn't loaded */}
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}>
                    {item.product.categoryLabel.slice(0, 2)}
                  </div>
                </div>

                {/* Details */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      <Link 
                        href={`/product/${item.product.slug}`}
                        onClick={() => setCartOpen(false)}
                        style={{ color: '#fff' }}
                      >
                        {item.product.name}
                      </Link>
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      SKU: {item.product.sku}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                    {/* Quantity Selector */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border)',
                      borderRadius: '4px'
                    }}>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 8px', color: 'var(--text-muted)' }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: '0.85rem', width: '24px', textAlign: 'center', fontWeight: 600 }}>
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 8px', color: 'var(--text-muted)' }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Price and Trash */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#64748b'
                        }}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Sum */}
        {cart.length > 0 && (
          <div style={{
            padding: '24px',
            borderTop: '1px solid var(--border)',
            backgroundColor: 'rgba(11, 15, 23, 0.95)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Subtotal:</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>${cartTotal.toFixed(2)}</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Shipping and taxes calculated at checkout. Free shipping on orders over $150.00.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link 
                href="/checkout"
                onClick={() => setCartOpen(false)}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Proceed to Checkout <ArrowRight size={16} />
              </Link>
              <Link 
                href="/cart"
                onClick={() => setCartOpen(false)}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                View Full Cart
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
