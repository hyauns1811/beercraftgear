import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Beer Craft Gear',
  description: 'How we collect, store, share, and protect your personal information at Beer Craft Gear.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container" style={{ minHeight: '80vh' }}>
      <div className="policy-container animate-fade-in">
        <h1>Privacy Policy</h1>
        <p className="text-muted">Last Updated: June 5, 2026</p>

        <p>
          At <strong>Beer Craft Gear</strong> (beercraftgear.com), owned and operated by <strong>FUNKY BUDDHA BREWERY LLC</strong>, we value the trust you place in us when sharing your personal information. This Privacy Policy describes how we collect, use, store, and protect your data when you visit or shop on our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect personal data to process orders, improve our services, and communicate with you:
        </p>
        <ul>
          <li><strong>Contact Details</strong>: Name, shipping address, billing address, email address, and phone number.</li>
          <li><strong>Transaction Details</strong>: Items purchased, order subtotals, and delivery dates. Payment tokens are securely managed by Stripe (we do not store your raw credit card numbers).</li>
          <li><strong>Technical Data</strong>: IP address, device type, browser information, pages visited, and time spent on our site (collected automatically via cookies and web logs).</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use your personal information for the following business purposes:
        </p>
        <ul>
          <li>To fulfill and deliver your purchases (shipping orders, processing payments).</li>
          <li>To send order status updates, tracking numbers, and receipt summaries.</li>
          <li>To respond to customer support inquiries or return requests.</li>
          <li>To secure our site and prevent fraud.</li>
          <li>To analyze website usage and improve layout performance.</li>
        </ul>

        <h2>3. Information Sharing & Third Parties</h2>
        <p>
          We do not sell, rent, or trade your personal data. We only share information with trustworthy service providers necessary to run our e-commerce business:
        </p>
        <ul>
          <li><strong>Payment Processors</strong>: Stripe receives your billing details to securely charge cards.</li>
          <li><strong>Shipping Carriers</strong>: UPS, FedEx, Canada Post, and USPS receive your delivery address and contact phone number.</li>
          <li><strong>Analytics Providers</strong>: Companies like Google Analytics to help us understand user navigation patterns.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We deploy industry-standard technical measures to safeguard your personal details. This includes SSL/TLS encryption for all data transit. We restrict access to personal customer details to employees who require it for processing and shipping your order.
        </p>

        <h2>5. Cookies and Tracking Technologies</h2>
        <p>
          Our website uses 'cookies' to maintain your shopping cart sessions, remember user preferences, and compile aggregate website traffic analytics. You can choose to disable cookies in your browser settings, though doing so may prevent certain e-commerce features (like saving your cart) from working properly.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          Depending on your location (e.g. Canada or various US states), you may have the right to:
        </p>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of incorrect or incomplete personal details.</li>
          <li>Request deletion of your personal details (subject to billing/record retention laws).</li>
          <li>Opt-out of any marketing communications.</li>
        </ul>
        <p>
          To exercise any of these rights, please email us at <a href="mailto:cs@beercraftgear.com" style={{ color: 'var(--primary)' }}>cs@beercraftgear.com</a>.
        </p>

        <h2>7. Contact Information</h2>
        <p>
          If you have questions about our privacy practices, please contact us:
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
