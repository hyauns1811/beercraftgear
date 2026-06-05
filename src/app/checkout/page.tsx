'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Truck, ArrowLeft, Loader2, CreditCard } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// --- STAGE 1: REAL STRIPE SUBMIT FORM COMPONENT ---
function RealStripeForm({ clientSecret, totalAmount, onSuccess }: { clientSecret: string, totalAmount: number, onSuccess: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    setErrorMessage(null);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setIsProcessing(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement
      }
    });

    if (error) {
      setErrorMessage(error.message || 'Payment confirmation failed.');
      setIsProcessing(false);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{
        padding: '16px',
        backgroundColor: 'var(--bg-input)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-sm)'
      }}>
        <CardElement options={{
          style: {
            base: {
              color: '#f8fafc',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '16px',
              '::placeholder': { color: '#64748b' }
            },
            invalid: { color: '#ef4444' }
          }
        }} />
      </div>

      {errorMessage && (
        <div style={{ color: 'var(--error)', fontSize: '0.85rem', fontWeight: 600 }}>
          ⚠️ {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isProcessing || !stripe}
        className="btn btn-primary"
        style={{ width: '100%', height: '46px' }}
      >
        {isProcessing ? (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Loader2 size={16} className="spin" /> Processing Secure Payment...
          </span>
        ) : (
          `Pay Securely $${totalAmount.toFixed(2)}`
        )}
      </button>
      
      <style jsx global>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 1s linear infinite; }
      `}</style>
    </form>
  );
}

// --- MAIN CHECKOUT PAGE ---
export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useCart();

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      router.push('/cart');
    }
  }, [cart, router]);

  const FREE_SHIPPING_THRESHOLD = 150;
  const shippingCost = cartTotal >= FREE_SHIPPING_THRESHOLD ? 0.00 : 9.99;
  const taxCost = cartTotal * 0.08;
  const totalAmount = cartTotal + shippingCost + taxCost;

  // Address State
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'CA'
  });

  const [useDifferentBilling, setUseDifferentBilling] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'CA'
  });

  // Stripe Session Config State
  const [paymentMode, setPaymentMode] = useState<'idle' | 'demo' | 'stripe'>('idle');
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [isSettingUpSession, setIsSettingUpSession] = useState(false);
  
  // Demo Mock Credit Card State
  const [demoCard, setDemoCard] = useState({
    number: '',
    expiry: '',
    cvc: ''
  });
  const [demoCardError, setDemoCardError] = useState<string | null>(null);
  const [isDemoProcessing, setIsDemoProcessing] = useState(false);

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const handleDemoCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDemoCard({ ...demoCard, [e.target.name]: e.target.value });
  };

  // 1. Contact Backend API to Initialize Stripe / Demo Session
  const handleProceedToPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSettingUpSession(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: totalAmount,
          email: shippingInfo.email,
          cartItems: cart.map(item => ({ id: item.product.id, qty: item.quantity }))
        })
      });

      const data = await response.json();

      if (data.error) {
        alert(`Error initializing payment: ${data.error}`);
        setIsSettingUpSession(false);
        return;
      }

      setClientSecret(data.clientSecret);
      setPaymentMode(data.mode);

      if (data.mode === 'stripe') {
        const stripeObj = await loadStripe(data.publishableKey);
        setStripePromise(stripeObj);
      }

    } catch (err) {
      console.error('Failed to set up payment gateway:', err);
      alert('Failed to connect to checkout gateway. Processing in offline Demo Mode.');
      setPaymentMode('demo');
    } finally {
      setIsSettingUpSession(false);
    }
  };

  // 2. Handle Order Success Confirmation Redirection
  const handlePaymentSuccess = () => {
    clearCart();
    // Cache order details in local storage for order confirmation page
    const orderDetails = {
      orderId: `BCG-${Math.floor(100000 + Math.random() * 900000)}`,
      total: totalAmount,
      email: shippingInfo.email,
      address: `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state} ${shippingInfo.postalCode}, ${shippingInfo.country}`
    };
    localStorage.setItem('beer_craft_gear_last_order', JSON.stringify(orderDetails));
    router.push('/order-confirmation');
  };

  // 3. Handle Simulated Payments in Demo Mode
  const handleDemoPaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoCardError(null);

    // Simple Card Validation Simulation
    if (demoCard.number.replace(/\s/g, '').length < 16) {
      setDemoCardError('Please enter a valid 16-digit credit card number.');
      return;
    }
    if (!demoCard.expiry.includes('/') || demoCard.expiry.length < 5) {
      setDemoCardError('Please enter card expiry in MM/YY format.');
      return;
    }
    if (demoCard.cvc.length < 3) {
      setDemoCardError('Please enter a valid CVV.');
      return;
    }

    setIsDemoProcessing(true);

    // Simulate Stripe payment request transit times
    setTimeout(() => {
      setIsDemoProcessing(false);
      handlePaymentSuccess();
    }, 2000);
  };

  if (cart.length === 0) return null;

  return (
    <div className="container section" style={{ minHeight: '90vh' }}>
      {/* Back button */}
      <Link href="/cart" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', marginBottom: '30px' }}>
        <ArrowLeft size={16} /> Back to Shopping Cart
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px' }} className="grid-cols-2">
        {/* Left Column: Forms */}
        <div>
          {paymentMode === 'idle' ? (
            <form onSubmit={handleProceedToPayment} className="glass-card" style={{ padding: '36px' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>
                1. Shipping & Customer Information
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">First Name *</label>
                  <input type="text" name="firstName" required value={shippingInfo.firstName} onChange={handleShippingChange} className="form-control" placeholder="John" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name *</label>
                  <input type="text" name="lastName" required value={shippingInfo.lastName} onChange={handleShippingChange} className="form-control" placeholder="Doe" />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" name="email" required value={shippingInfo.email} onChange={handleShippingChange} className="form-control" placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" name="phone" required value={shippingInfo.phone} onChange={handleShippingChange} className="form-control" placeholder="+1 (416) 555-0199" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Street Address *</label>
                <input type="text" name="address" required value={shippingInfo.address} onChange={handleShippingChange} className="form-control" placeholder="123 Draft Street" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '15px' }} className="address-trio">
                <div className="form-group">
                  <label className="form-label">City *</label>
                  <input type="text" name="city" required value={shippingInfo.city} onChange={handleShippingChange} className="form-control" placeholder="Calgary" />
                </div>
                <div className="form-group">
                  <label className="form-label">State/Province *</label>
                  <input type="text" name="state" required value={shippingInfo.state} onChange={handleShippingChange} className="form-control" placeholder="AB" />
                </div>
                <div className="form-group">
                  <label className="form-label">ZIP/Postal Code *</label>
                  <input type="text" name="postalCode" required value={shippingInfo.postalCode} onChange={handleShippingChange} className="form-control" placeholder="T2P 1A1" />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label">Country *</label>
                <select name="country" required value={shippingInfo.country} onChange={handleShippingChange} className="form-control">
                  <option value="CA">Canada (CA)</option>
                  <option value="US">United States (US)</option>
                </select>
              </div>

              {/* Billing address checkbox */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
                <input
                  type="checkbox"
                  id="differentBilling"
                  checked={useDifferentBilling}
                  onChange={(e) => setUseDifferentBilling(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
                />
                <label htmlFor="differentBilling" style={{ fontSize: '0.9rem', cursor: 'pointer', userSelect: 'none' }}>
                  Billing Address is different than Shipping Address
                </label>
              </div>

              {/* Billing Info Expansion */}
              {useDifferentBilling && (
                <div style={{ padding: '24px', backgroundColor: 'rgba(255,255,255,0.01)', border: '1px dashed var(--border)', borderRadius: 'var(--radius-sm)', marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#fff' }}>Billing Details</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label className="form-label">First Name *</label>
                      <input type="text" name="firstName" required value={billingInfo.firstName} onChange={handleBillingChange} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name *</label>
                      <input type="text" name="lastName" required value={billingInfo.lastName} onChange={handleBillingChange} className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Street Address *</label>
                    <input type="text" name="address" required value={billingInfo.address} onChange={handleBillingChange} className="form-control" />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '15px' }} className="address-trio">
                    <div className="form-group">
                      <label className="form-label">City *</label>
                      <input type="text" name="city" required value={billingInfo.city} onChange={handleBillingChange} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">State/Province *</label>
                      <input type="text" name="state" required value={billingInfo.state} onChange={handleBillingChange} className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">ZIP/Postal Code *</label>
                      <input type="text" name="postalCode" required value={billingInfo.postalCode} onChange={handleBillingChange} className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country *</label>
                    <select name="country" required value={billingInfo.country} onChange={handleBillingChange} className="form-control">
                      <option value="CA">Canada (CA)</option>
                      <option value="US">United States (US)</option>
                    </select>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSettingUpSession}
                className="btn btn-primary"
                style={{ width: '100%', height: '46px' }}
              >
                {isSettingUpSession ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Loader2 size={16} className="spin" /> Setting up Secure Transaction...
                  </span>
                ) : (
                  'Proceed to Secure Payment Gateway'
                )}
              </button>
            </form>
          ) : (
            /* STAGE 2: SECURE PAYMENT SEGMENT */
            <div className="glass-card animate-fade-in" style={{ padding: '36px' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CreditCard size={22} style={{ color: 'var(--primary)' }} /> 2. Complete Secure Payment
              </h2>
              
              {paymentMode === 'demo' ? (
                // DEMO MODE PAYMENT FORM
                <div>
                  <div style={{
                    backgroundColor: 'rgba(217, 119, 6, 0.05)',
                    border: '1px solid rgba(217, 119, 6, 0.2)',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    color: 'var(--primary-light)',
                    marginBottom: '24px',
                    lineHeight: '1.5'
                  }}>
                    💡 <strong>Demo Store Mode Enabled</strong><br />
                    No live Stripe API keys were detected. You can complete this transaction using simulated details. Enter any 16-digit card number, MM/YY, and CVV.
                  </div>

                  <form onSubmit={handleDemoPaymentSubmit}>
                    <div className="form-group">
                      <label className="form-label">Card Number</label>
                      <input
                        type="text"
                        name="number"
                        maxLength={19}
                        required
                        value={demoCard.number}
                        onChange={handleDemoCardChange}
                        className="form-control"
                        placeholder="4111 2222 3333 4444"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div className="form-group">
                        <label className="form-label">Expiry Date</label>
                        <input
                          type="text"
                          name="expiry"
                          maxLength={5}
                          required
                          value={demoCard.expiry}
                          onChange={handleDemoCardChange}
                          className="form-control"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Security Code (CVV)</label>
                        <input
                          type="text"
                          name="cvc"
                          maxLength={4}
                          required
                          value={demoCard.cvc}
                          onChange={handleDemoCardChange}
                          className="form-control"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    {demoCardError && (
                      <div style={{ color: 'var(--error)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>
                        ⚠️ {demoCardError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isDemoProcessing}
                      className="btn btn-primary"
                      style={{ width: '100%', height: '46px' }}
                    >
                      {isDemoProcessing ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                          <Loader2 size={16} className="spin" /> Processing Simulated Checkout...
                        </span>
                      ) : (
                        `Pay Securely $${totalAmount.toFixed(2)}`
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                // REAL STRIPE ELEMENTS PROVIDER
                clientSecret && stripePromise && (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <RealStripeForm
                      clientSecret={clientSecret}
                      totalAmount={totalAmount}
                      onSuccess={handlePaymentSuccess}
                    />
                  </Elements>
                )
              )}

              {/* Back out button */}
              <button
                onClick={() => {
                  setPaymentMode('idle');
                  setClientSecret(null);
                }}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', marginTop: '16px' }}
              >
                Go Back & Edit Addresses
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Order Summary */}
        <div>
          <div className="glass-card" style={{ padding: '30px', position: 'sticky', top: '100px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>
              Your Order Summary
            </h3>

            {/* List items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px', maxHeight: '240px', overflowY: 'auto', paddingRight: '4px' }}>
              {cart.map((item) => (
                <div key={item.product.id} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '4px',
                    backgroundColor: '#1e293b',
                    position: 'relative',
                    flexShrink: 0
                  }}>
                    <Image src={item.product.image} alt={item.product.name} fill sizes="44px" style={{ objectFit: 'cover' }} onError={(e) => { const t = e.target as HTMLElement; t.style.display = 'none'; }} />
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '0.65rem', fontWeight: 700 }}>{item.product.categoryLabel.slice(0, 2)}</div>
                  </div>
                  <div style={{ flex: 1, overflow: 'hidden' }}>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                      {item.product.name}
                    </h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Qty: {item.quantity} × ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Summary lines */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
              <div className="flex-between" style={{ fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Subtotal:</span>
                <span style={{ color: '#fff' }}>${cartTotal.toFixed(2)}</span>
              </div>

              <div className="flex-between" style={{ fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Shipping & Handling:</span>
                <span style={{ color: shippingCost === 0 ? 'var(--success)' : '#fff', fontWeight: shippingCost === 0 ? 600 : 400 }}>
                  {shippingCost === 0 ? 'FREE Shipping' : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>

              <div className="flex-between" style={{ fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Estimated Tax (8%):</span>
                <span style={{ color: '#fff' }}>${taxCost.toFixed(2)}</span>
              </div>

              <div className="flex-between" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '14px' }}>
                <span>Order Total:</span>
                <span style={{ fontSize: '1.3rem', color: 'var(--primary-light)' }}>${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            {/* Secure note */}
            <div style={{
              marginTop: '24px',
              padding: '16px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255,255,255,0.01)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px'
            }}>
              <ShieldCheck size={18} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
                <strong style={{ color: '#fff' }}>Google Merchant Trust Certified</strong><br />
                Your details are fully protected. Shipments will be dispatched to USA/Canada with standard courier tracking numbers.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @media (max-width: 576px) {
          .address-trio {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
