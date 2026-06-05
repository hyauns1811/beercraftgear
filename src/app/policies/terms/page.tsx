import React from 'react';

export const metadata = {
  title: 'Terms of Service | Beer Craft Gear',
  description: 'Terms of service, website agreements, limitation of liability, and governing law for Beer Craft Gear.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container" style={{ minHeight: '80vh' }}>
      <div className="policy-container animate-fade-in">
        <h1>Terms of Service</h1>
        <p className="text-muted">Last Updated: June 5, 2026</p>

        <p>
          Welcome to <strong>Beer Craft Gear</strong> (beercraftgear.com). This website is owned and operated by <strong>BEER BABES FAMILY LTD</strong>. Throughout the site, the terms "we", "us" and "our" refer to BEER BABES FAMILY LTD.
        </p>
        <p>
          By visiting our site and/or purchasing draft beer equipment from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"). Please read these terms carefully before using our website.
        </p>

        <h2>1. Website Use & Eligibility</h2>
        <p>
          By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our draft beer equipment or website services for any illegal or unauthorized purpose, nor may you violate any local laws (including but not limited to copyright laws).
        </p>

        <h2>2. Accuracy of Products, Inventory, and Prices</h2>
        <ul>
          <li><strong>Pricing</strong>: All prices listed on our site are in US Dollars (USD) and are subject to change without notice.</li>
          <li><strong>Product Descriptions</strong>: We attempt to display the colors, dimensions, and specifications of our draft beer items as accurately as possible. We do not warrant that product descriptions are completely error-free.</li>
          <li><strong>Inventory Limits</strong>: We reserve the right to limit the sales of our products to any person, geographic region, or jurisdiction. We may exercise this right on a case-by-case basis.</li>
        </ul>

        <h2>3. Accuracy of Billing & Account Information</h2>
        <p>
          We reserve the right to refuse or cancel any order you place with us. In the event that we make a change to or cancel an order, we will attempt to notify you by contacting the email and/or billing address/phone number provided at the time the order was made. You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store.
        </p>

        <h2>4. Third-Party Links & Stripe Processing</h2>
        <p>
          Our checkout system uses Stripe for secure credit card payment processing. We are not responsible for any disruptions, transaction failures, or security issues caused by third-party payment infrastructure, though we will assist in resolving any customer payment disputes.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          In no event shall <strong>BEER BABES FAMILY LTD</strong>, our directors, officers, employees, or affiliates be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the services or any products procured using the service.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the <strong>Province of Alberta and the federal laws of Canada</strong>, without regard to conflict of law principles. Any legal actions must be brought in Calgary, Alberta, Canada.
        </p>

        <h2>7. Contact Information</h2>
        <p>
          Questions about the Terms of Service should be sent to us at:
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
