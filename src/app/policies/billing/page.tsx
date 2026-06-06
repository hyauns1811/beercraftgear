import React from 'react';

export const metadata = {
  title: 'Billing & Payment Terms | Beer Craft Gear',
  description: 'Accepted payment methods, secure Stripe payment processing, billing addresses, and tax details for Beer Craft Gear.',
};

export default function BillingTermsPage() {
  return (
    <div className="container" style={{ minHeight: '80vh' }}>
      <div className="policy-container animate-fade-in">
        <h1>Billing & Payment Terms</h1>
        <p className="text-muted">Last Updated: June 5, 2026</p>

        <p>
          At <strong>Beer Craft Gear</strong> (beercraftgear.com), a website owned and operated by <strong>FUNKY BUDDHA BREWERY LLC</strong>, we ensure a secure shopping environment. This document outlines our accepted payment methods, billing practices, and transaction security procedures.
        </p>

        <h2>1. Secure Payment Processing (Stripe)</h2>
        <p>
          All credit card transactions on beercraftgear.com are processed securely using the <strong>Stripe Payment Gateway</strong>. Stripe is certified as a PCI-DSS Level 1 Service Provider, which is the most stringent security level in the payments industry. 
        </p>
        <p>
          Your credit card details are encrypted using Secure Socket Layer (SSL) technology and sent directly to Stripe. <strong>We do not store, view, or keep your raw credit card information</strong> on our servers.
        </p>

        <h2>2. Accepted Payment Methods</h2>
        <p>
          Through our Stripe integration, we accept the following payment instruments:
        </p>
        <ul>
          <li><strong>Visa</strong> (Credit and Debit)</li>
          <li><strong>Mastercard</strong> (Credit and Debit)</li>
          <li><strong>American Express</strong></li>
          <li><strong>Discover</strong></li>
          <li><strong>Apple Pay</strong> (on compatible devices)</li>
        </ul>
        <p>
          We do not accept cash on delivery (COD), personal checks, bank transfers, or physical money orders.
        </p>

        <h2>3. Currency of Transactions</h2>
        <p>
          All transactions and catalog prices on beercraftgear.com are conducted in <strong>US Dollars (USD)</strong>. For Canadian customers, payments will be converted by your credit card issuer into Canadian Dollars (CAD) at their current exchange rate.
        </p>

        <h2>4. Billing and Charging Timeline</h2>
        <ul>
          <li><strong>Authorization & Charge</strong>: When you place an order by clicking 'Pay Now', Stripe will authorize your card for the total order amount (including merchandise subtotal, taxes, and shipping fees if applicable). Once authorized, your card is immediately charged.</li>
          <li><strong>Order Processing</strong>: If our warehouse is unable to fulfill an item in your order, we will contact you immediately and issue a full refund to your card for the unavailable item.</li>
        </ul>

        <h2>5. Sales Tax</h2>
        <p>
          Sales tax is calculated dynamically based on the local tax regulations of the shipping destination. Applicable state or provincial sales taxes will be shown as a separate line item on the checkout page before you complete your payment.
        </p>

        <h2>6. Billing Agreement & Discrepancies</h2>
        <p>
          By submitting an order on our website, you warrant that you are authorized to use the designated payment card. If you detect any incorrect charges or billing discrepancies on your bank statement, please notify us within 30 days of the transaction date so we can investigate and correct any billing errors.
        </p>

        <h2>7. Contact Information</h2>
        <p>
          For billing questions, payment inquiries, or disputes, please contact our accounting and billing support department:
        </p>
        <p style={{ paddingLeft: '16px', borderLeft: '3px solid var(--primary)', color: 'var(--text-main)' }}>
          <strong>FUNKY BUDDHA BREWERY LLC</strong><br />
          1201 NE 38TH ST, A-1<br />
          OAKLAND PARK, FL 33334<br />
          Phone: +1 (416) 925-6222<br />
          Email: cs@beercraftgear.com
        </p>
      </div>
    </div>
  );
}
