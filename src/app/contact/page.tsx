'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="container section animate-fade-in" style={{ minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span className="badge badge-primary" style={{ marginBottom: '12px' }}>Get In Touch</span>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }} className="text-gradient">
          Contact Customer Support
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
          Have a question about our draft beer systems, keg tapping couplers, or regulators? Reach out to the Beer Craft Gear team. We are here to help.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '40px',
        maxWidth: '1100px',
        margin: '0 auto'
      }} className="grid-cols-2">
        
        {/* Contact Info Details Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div className="glass-card" style={{ padding: '30px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: '#fff' }}>Official Corporate Details</h2>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(217, 119, 6, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  flexShrink: 0
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '4px' }}>Physical Office & Warehouse Address</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    <strong>FUNKY BUDDHA BREWERY LLC</strong><br />
                    1201 NE 38TH ST, A-1<br />
                    OAKLAND PARK, FL 33334
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--primary-light)', marginTop: '4px' }}>
                    * Beer Craft Gear is a website directly owned and operated by FUNKY BUDDHA BREWERY LLC.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(217, 119, 6, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  flexShrink: 0
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '4px' }}>Phone Support</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    +1 (416) 925-6222
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Toll-free across USA & Canada.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(217, 119, 6, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  flexShrink: 0
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '4px' }}>Email Support</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    <a href="mailto:cs@beercraftgear.com" style={{ color: 'var(--primary)' }}>cs@beercraftgear.com</a>
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    We respond to all email inquiries within 24 business hours.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(217, 119, 6, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  flexShrink: 0
                }}>
                  <Clock size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '4px' }}>Business Hours</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    Monday - Friday: 9:00 AM - 5:00 PM (Eastern Standard Time)
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Closed on Saturdays, Sundays, and statutory holidays.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div style={{
            backgroundColor: 'rgba(16, 185, 129, 0.04)',
            border: '1px solid rgba(16, 185, 129, 0.15)',
            borderRadius: 'var(--radius-md)',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <ShieldCheck size={24} style={{ color: 'var(--success)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Your communication is fully encrypted. We adhere strictly to our <a href="/policies/privacy" style={{ textDecoration: 'underline', color: 'var(--success)' }}>Privacy Policy</a> and will never share your personal information.
            </span>
          </div>
        </div>

        {/* Contact Form Column */}
        <div>
          <div className="glass-card" style={{ padding: '36px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: '#fff' }}>Send Us a Message</h2>
            
            {submitStatus === 'success' ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--success)'
                }}>
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Thank You!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Your message has been sent successfully. One of our support representatives will contact you shortly.
                  </p>
                </div>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '10px' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="John Doe"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Inquiry Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">Select a subject...</option>
                    <option value="sales">Product Sales & Inventory</option>
                    <option value="shipping">Shipping & Tracking Status</option>
                    <option value="returns">Refunds & Returns Inquiries</option>
                    <option value="billing">Billing & Secure Payment Inquiries</option>
                    <option value="other">General Feedback / Other</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '28px' }}>
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Describe your question or request in detail..."
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', display: 'flex', gap: '10px' }}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
