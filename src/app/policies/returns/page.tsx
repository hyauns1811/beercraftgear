import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Refunds & Returns Policy | Beer Craft Gear',
  description: 'Learn about returns, refund processing times, restocking fees ($0), and customer remorse policies at Beer Craft Gear.',
};

export default function ReturnsPolicyPage() {
  return (
    <div className="container" style={{ minHeight: '80vh' }}>
      <div className="policy-container animate-fade-in">
        <h1>Refunds & Returns Policy</h1>
        <p className="text-muted">Last Updated: June 5, 2026</p>

        <p>
          At <strong>Beer Craft Gear</strong> (beercraftgear.com), owned and operated by <strong>BEER BABES FAMILY LTD</strong>, we take pride in the quality of our draft beer equipment. If you are not completely satisfied with your purchase, you may return the item(s) to us.
        </p>

        <h2>1. 30-Day Return Window</h2>
        <p>
          You have <strong>30 calendar days</strong> from the date of package delivery to request a return. Requests received after the 30-day window are unfortunately not eligible for refunds or exchanges.
        </p>

        <h2>2. Condition of Returned Items</h2>
        <p>
          To qualify for a refund, returned items must meet the following criteria:
        </p>
        <ul>
          <li>The item must be unused, clean, and in the same brand-new condition that you received it.</li>
          <li>The item must be in its original manufacturer packaging.</li>
          <li>All components, hoses, regulators, adapters, manuals, and mounting hardware must be included.</li>
        </ul>

        <h2>3. Return Reasons & Fees</h2>
        <p>
          We do not charge any restocking fees. However, shipping fees depend on the reason for the return:
        </p>
        
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '16px',
          marginBottom: '24px',
          textAlign: 'left',
          fontSize: '0.95rem'
        }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.1)', color: '#fff' }}>
              <th style={{ padding: '12px' }}>Return Reason</th>
              <th style={{ padding: '12px' }}>Restocking Fee</th>
              <th style={{ padding: '12px' }}>Return Shipping Cost</th>
              <th style={{ padding: '12px' }}>Customer Responsibility</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <td style={{ padding: '12px', fontWeight: 600 }}>Defective, Damaged, or Wrong Item</td>
              <td style={{ padding: '12px', color: 'var(--success)' }}>$0.00</td>
              <td style={{ padding: '12px', color: 'var(--success)' }}>$0.00 (Prepaid Label Provided)</td>
              <td style={{ padding: '12px' }}>Report damage within 48 hours.</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <td style={{ padding: '12px', fontWeight: 600 }}>Customer Remorse (Changed mind, ordered wrong size, etc.)</td>
              <td style={{ padding: '12px', color: 'var(--success)' }}>$0.00</td>
              <td style={{ padding: '12px', color: 'var(--primary-light)' }}>$15.00 Flat Fee (Deducted from refund)</td>
              <td style={{ padding: '12px' }}>Items must be 100% unused and in original box.</td>
            </tr>
          </tbody>
        </table>

        <h2>4. How to Initiate a Return</h2>
        <p>
          Please follow these simple steps to ensure a fast return process:
        </p>
        <ol>
          <li>
            <strong>Request RMA</strong>: Send an email to <a href="mailto:cs@beercraftgear.com" style={{ color: 'var(--primary)' }}>cs@beercraftgear.com</a> or call <strong>+1 (416) 925-6222</strong> with your order number, photo of the item, and reason for return.
          </li>
          <li>
            <strong>Receive Shipping Label</strong>: If approved, we will email you a Return Merchandise Authorization (RMA) number along with a shipping label (prepaid).
          </li>
          <li>
            <strong>Pack & Ship</strong>: Pack the items securely in their original carton. Place the RMA slip inside the package, affix the return shipping label to the outside, and drop the package at the designated carrier location (UPS or FedEx).
          </li>
        </ol>

        <h2>5. Refunds Processing & Timelines</h2>
        <p>
          Once your returned package is delivered to our return center, our staff will inspect it to verify its condition (this typically takes <strong>3 to 5 business days</strong>).
        </p>
        <p>
          If approved, a refund will be issued to your original payment method (Stripe Credit Card processing). 
        </p>
        <ul>
          <li><strong>Refunding Amount</strong>: Subtotal minus return shipping fees (if remorse). We do not refund original shipping charges.</li>
          <li><strong>Credit Timeline</strong>: It generally takes <strong>5 to 7 business days</strong> for bank issuers to post the credit to your statement.</li>
        </ul>

        <h2>6. Return Address</h2>
        <p>
          All returns must be shipped to our authorized warehouse address with an active RMA. Do not send items back without contacting us first:
        </p>
        <p style={{ paddingLeft: '16px', borderLeft: '3px solid var(--primary)', color: 'var(--text-main)' }}>
          <strong>Beer Craft Gear - Returns Department</strong><br />
          163 Dalhurst Way NW<br />
          Calgary AB T3A 1P1 CA
        </p>

        <h2>7. Contact Us</h2>
        <p>
          For questions regarding returns or refunds, please reach out to us:
        </p>
        <p>
          Email: <a href="mailto:cs@beercraftgear.com" style={{ color: 'var(--primary)' }}>cs@beercraftgear.com</a><br />
          Phone: <strong>+1 (416) 925-6222</strong><br />
          Operating Hours: Mon - Fri: 9:00 AM - 5:00 PM (MST)
        </p>
      </div>
    </div>
  );
}
