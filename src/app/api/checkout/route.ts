import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe if key is present
const stripeSecret = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecret ? new Stripe(stripeSecret, { apiVersion: '2025-01-27' as any }) : null;

export async function POST(request: Request) {
  try {
    const { amount, currency = 'usd', email, cartItems } = await ioJson(request);

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Invalid checkout amount' }, { status: 400 });
    }

    // Calculate actual amount in cents for Stripe (e.g. $10.00 -> 1000 cents)
    const amountInCents = Math.round(amount * 100);

    // If Stripe is configured, create a real Payment Intent
    if (stripe) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: currency.toLowerCase(),
        receipt_email: email,
        metadata: {
          itemsCount: cartItems?.length || 0,
          store: 'Beer Craft Gear',
          company: 'FUNKY BUDDHA BREWERY LLC'
        }
      });

      return NextResponse.json({
        mode: 'stripe',
        clientSecret: paymentIntent.client_secret,
        publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
      });
    }

    // Otherwise, return Demo Mode tokens
    return NextResponse.json({
      mode: 'demo',
      clientSecret: `demo_secret_${Math.random().toString(36).substring(2, 15)}`,
      publishableKey: 'pk_test_demo'
    });

  } catch (error: any) {
    console.error('Checkout API error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// Helper to safely parse JSON request bodies
async function ioJson(request: Request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}
