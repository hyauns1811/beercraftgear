import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Shipping & Delivery Policy | Beer Craft Gear',
  description: 'Detailed shipping rates, handling times, transit times, and delivery policies for Beer Craft Gear, owned by Beer Babes Family LTD.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="container" style={{ minHeight: '80vh' }}>
      <div className="policy-container animate-fade-in">
        <h1>Shipping & Delivery Policy</h1>
        <p className="text-muted">Last Updated: June 5, 2026</p>
        
        <p>
          At <strong>Beer Craft Gear</strong> (beercraftgear.com), owned and operated by <strong>BEER BABES FAMILY LTD</strong>, we aim to deliver your draft beer equipment quickly and securely. Below you will find detailed information about our shipping methods, timelines, and costs.
        </p>

        <h2>1. Shipping Regions & Destinations</h2>
        <p>
          We currently ship to addresses within the <strong>United States</strong> and <strong>Canada</strong>. We cannot ship to PO Boxes, APO/FPO addresses, or international destinations outside of North America. All shipments originate from local North American warehousing facilities.
        </p>

        <h2>2. Shipping Costs & Rates</h2>
        <p>
          We offer clear, transparent shipping rates so there are no surprises at checkout:
        </p>
        <ul>
          <li><strong>Orders of $150.00 and Over</strong>: Free Standard Ground Shipping.</li>
          <li><strong>Orders Under $150.00</strong>: Flat Rate of $9.99.</li>
        </ul>
        <p>
          All shipping charges and taxes are calculated and displayed during the checkout process before payment confirmation.
        </p>

        <h2>3. Handling & Transit Times</h2>
        <p>
          Our operations run Monday through Friday, excluding statutory holidays.
        </p>
        <ul>
          <li><strong>Order Cut-off Time</strong>: 5:00 PM (Mountain Standard Time - MST). Orders placed after this time will be processed the following business day.</li>
          <li><strong>Order Handling Time</strong>: 1 - 2 business days. During this time, we verify stock, pack, and prepare your items for shipment.</li>
          <li><strong>Order Transit Time</strong>: 3 - 7 business days. This is the time it takes for carriers to deliver package(s) from our warehouse to your doorstep.</li>
        </ul>
        <p>
          Therefore, the total estimated delivery time from order placement to delivery is <strong>4 to 9 business days</strong>.
        </p>

        <h2>4. Shipping Carriers</h2>
        <p>
          We partner with reliable carriers to ensure safe transport of heavy and fragile equipment:
        </p>
        <ul>
          <li><strong>United Parcel Service (UPS)</strong> - Ground & Freight</li>
          <li><strong>FedEx</strong> - Home Delivery & Ground</li>
          <li><strong>Canada Post / USPS</strong> - Standard Parcel</li>
        </ul>
        <p>
          The choice of carrier is determined by the size, weight, and destination of the order to optimize delivery speed.
        </p>

        <h2>5. Tracking Your Shipment</h2>
        <p>
          Once your order has been packed and handed over to the shipping carrier, you will receive an automated shipping confirmation email containing your tracking number and a link to trace the parcel. Tracking details usually activate within 24 hours of shipment.
        </p>

        <h2>6. Damaged or Missing Shipments</h2>
        <p>
          If your order arrives damaged, or if your tracking shows delivered but you have not received it, please contact our support team immediately at <a href="mailto:cs@beercraftgear.com" style={{ color: 'var(--primary)' }}>cs@beercraftgear.com</a> or call us at <strong>+1 (416) 925-6222</strong>. We will work with the carrier to initiate an investigation and dispatch replacements or issue refunds in accordance with our <Link href="/policies/returns" style={{ color: 'var(--primary)' }}>Refunds & Returns Policy</Link>.
        </p>

        <h2>7. Contact Information</h2>
        <p>
          If you have questions about our shipping procedures or need support, please contact us at:
        </p>
        <p style={{ paddingLeft: '16px', borderLeft: '3px solid var(--primary)', color: 'var(--text-main)' }}>
          <strong>BEER BABES FAMILY LTD</strong><br />
          163 Dalhurst Way NW<br />
          Calgary AB T3A 1P1 CA<br />
          Phone: +1 (416) 925-6222<br />
          Email: cs@beercraftgear.com
        </p>
      </div>
    </div>
  );
}
