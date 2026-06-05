'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Calendar, Truck, Mail, Phone } from 'lucide-react';

interface OrderDetails {
  orderId: string;
  total: number;
  email: string;
  address: string;
}

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<OrderDetails | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('beer_craft_gear_last_order');
      if (stored) {
        setOrder(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to parse last order details', error);
    }
  }, []);

  return (
    <div className="container section flex-center animate-fade-in" style={{ minHeight: '80vh' }}>
      <div className="glass-card" style={{
        maxWidth: '640px',
        width: '100%',
        padding: '40px',
        textAlign: 'center'
      }}>
        {/* Success Icon */}
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--success)',
          margin: '0 auto 24px'
        }}>
          <CheckCircle size={44} />
        </div>

        <span className="badge badge-primary" style={{ marginBottom: '12px', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: 'var(--success)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          Order Completed
        </span>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '8px' }}>
          Thank You for Your Order!
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '32px' }}>
          Your draft beer equipment purchase has been processed securely via Stripe. A copy of your invoice has been sent to <strong style={{ color: '#fff' }}>{order?.email || 'your email'}</strong>.
        </p>

        {/* Receipt Box */}
        <div style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '24px',
          textAlign: 'left',
          marginBottom: '32px',
          fontSize: '0.9rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ color: 'var(--text-muted)' }}>Order Reference:</span>
            <span style={{ fontWeight: 700, color: '#fff' }}>{order?.orderId || 'BCG-PENDING'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ color: 'var(--text-muted)' }}>Total Amount Charged:</span>
            <span style={{ fontWeight: 700, color: 'var(--primary-light)' }}>${order?.total ? order.total.toFixed(2) : '0.00'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ color: 'var(--text-muted)' }}>Secure payment carrier:</span>
            <span style={{ color: '#fff' }}>Stripe (PCI Compliant)</span>
          </div>
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '12px', marginTop: '12px' }}>
            <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Shipping Destination:</span>
            <span style={{ color: '#fff', fontSize: '0.85rem', lineHeight: '1.4', display: 'block' }}>{order?.address || 'Provided Address'}</span>
          </div>
        </div>

        {/* Timelines Callouts */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '16px',
          marginBottom: '36px',
          textAlign: 'left'
        }} className="confirmation-grid">
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ color: 'var(--primary)', marginTop: '2px' }}><Calendar size={18} /></div>
            <div>
              <h4 style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '2px' }}>Standard Handling: 1 - 2 Business Days</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Our team will verify, package, and dispatch your draft beer components from our local warehouse facilities.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ color: 'var(--primary)', marginTop: '2px' }}><Truck size={18} /></div>
            <div>
              <h4 style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '2px' }}>Standard Transit: 3 - 7 Business Days</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Once shipped, you will receive a tracking link via email to monitor your package delivery progress.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Support Details */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '24px',
          marginBottom: '32px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          textAlign: 'center'
        }}>
          <p style={{ marginBottom: '8px' }}>
            Need help? Contact the support department of <strong>BEER BABES FAMILY LTD</strong>:
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Phone size={12} /> +1 (416) 925-6222</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Mail size={12} /> <a href="mailto:cs@beercraftgear.com" style={{ color: 'var(--primary-light)' }}>cs@beercraftgear.com</a></span>
          </div>
        </div>

        <Link href="/shop" className="btn btn-primary" style={{ width: '100%' }}>
          Return to Catalogue
        </Link>
      </div>
    </div>
  );
}
