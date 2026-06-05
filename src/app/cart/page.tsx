'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    cartTotal, 
    cartCount 
  } = useCart();

  const FREE_SHIPPING_THRESHOLD = 150;
  const shippingCost = cartTotal >= FREE_SHIPPING_THRESHOLD || cartTotal === 0 ? 0.00 : 9.99;
  const taxCost = cartTotal * 0.08; // Simulated 8% local sales tax
  const orderTotal = cartTotal + shippingCost + taxCost;

  return (
    <div className="container section animate-fade-in" style={{ minHeight: '80vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <span className="badge badge-primary" style={{ marginBottom: '8px' }}>Review Order</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Your Shopping Cart</h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Review the draft beer gear in your cart before checking out securely via Stripe.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="glass-card animate-fade-in" style={{
          textAlign: 'center',
          padding: '80px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)'
          }}>
            <ShoppingBag size={36} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Your Cart is Empty</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '450px', margin: '0 auto', fontSize: '0.95rem' }}>
              You have not added any draft beer equipment to your cart yet. Check out our store for dual-tap kegerators, gas cylinders, and premium flow-control faucets.
            </p>
          </div>
          <Link href="/shop" className="btn btn-primary" style={{ marginTop: '10px' }}>
            Browse Store Catalogue
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="grid-cols-2">
          
          {/* Left Side: Cart Items Table/List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-card" style={{ padding: '24px 0' }}>
              <div style={{
                padding: '0 24px 16px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                fontWeight: 600,
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                display: 'grid',
                gridTemplateColumns: '3fr 1fr 1fr',
                gap: '16px'
              }} className="cart-header-grid">
                <span>Product Details</span>
                <span style={{ textAlign: 'center' }}>Quantity</span>
                <span style={{ textAlign: 'right' }}>Total Price</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    style={{
                      padding: '24px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                      display: 'grid',
                      gridTemplateColumns: '3fr 1fr 1fr',
                      gap: '16px',
                      alignItems: 'center'
                    }}
                    className="cart-row-grid"
                  >
                    {/* Details */}
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <div style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '8px',
                        backgroundColor: '#1e293b',
                        position: 'relative',
                        flexShrink: 0,
                        border: '1px solid var(--border)'
                      }}>
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          sizes="70px"
                          style={{ objectFit: 'cover' }}
                          onError={(e) => {
                            const target = e.target as HTMLElement;
                            target.style.display = 'none';
                          }}
                        />
                        <div style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--primary)',
                          fontSize: '0.75rem',
                          fontWeight: 700
                        }}>
                          {item.product.categoryLabel.slice(0, 2)}
                        </div>
                      </div>
                      <div style={{ overflow: 'hidden' }}>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          <Link href={`/product/${item.product.slug}`} style={{ color: '#fff' }}>
                            {item.product.name}
                          </Link>
                        </h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          SKU: {item.product.sku} | Weight: {item.product.weight}
                        </p>
                      </div>
                    </div>

                    {/* Quantity modifier */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        backgroundColor: 'var(--bg-input)',
                        border: '1px solid var(--border)',
                        borderRadius: '4px'
                      }}>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 10px', color: 'var(--text-muted)' }}
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontSize: '0.85rem', width: '24px', textAlign: 'center', fontWeight: 600 }}>
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 10px', color: 'var(--text-muted)' }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Price and delete button */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '16px' }}>
                      <span style={{ fontWeight: 700, fontSize: '1rem', color: '#fff' }}>
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#64748b',
                          display: 'inline-flex'
                        }}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary-light)', fontWeight: 600 }}>
              <ArrowLeft size={16} /> Continue Shopping Draft Gear
            </Link>
          </div>

          {/* Right Side: Order Summary */}
          <div>
            <div className="glass-card" style={{ padding: '30px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', color: '#fff' }}>Order Summary</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <div className="flex-between">
                  <span style={{ color: 'var(--text-muted)' }}>Subtotal ({cartCount} items):</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>${cartTotal.toFixed(2)}</span>
                </div>

                <div className="flex-between">
                  <span style={{ color: 'var(--text-muted)' }}>Shipping & Handling:</span>
                  <span style={{ color: shippingCost === 0 ? 'var(--success)' : '#fff', fontWeight: 600 }}>
                    {shippingCost === 0 ? 'FREE Shipping' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex-between">
                  <span style={{ color: 'var(--text-muted)' }}>Estimated Tax (8%):</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>${taxCost.toFixed(2)}</span>
                </div>

                {shippingCost > 0 && (
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--primary-light)',
                    backgroundColor: 'rgba(217, 119, 6, 0.05)',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    border: '1px solid rgba(217, 119, 6, 0.15)'
                  }}>
                    💡 Pro tip: Add <strong>${(FREE_SHIPPING_THRESHOLD - cartTotal).toFixed(2)}</strong> more to get free shipping.
                  </div>
                )}

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }} className="flex-between">
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Order Total:</span>
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-light)' }}>
                    ${orderTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Link href="/checkout" className="btn btn-primary" style={{ width: '100%', height: '46px' }}>
                  Proceed to Secure Checkout <ArrowRight size={18} />
                </Link>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)'
                }}>
                  <ShieldCheck size={14} style={{ color: 'var(--success)' }} />
                  <span>Payments secured by <strong>Stripe</strong>. Encrypted transaction flow.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* Global CSS to manage responsive layout of the tables/grids */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .cart-header-grid {
            display: none !important;
          }
          .cart-row-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            text-align: center !important;
            justify-items: center !important;
            padding: 20px !important;
          }
          .cart-row-grid div:last-child {
            justify-content: center !important;
            width: 100% !important;
            border-top: 1px solid rgba(255,255,255,0.03) !important;
            padding-top: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}
