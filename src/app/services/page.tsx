import React from 'react';
import Link from 'next/link';
import { Wrench, CheckCircle, ShieldCheck, Clock, Settings, UserCheck, Phone, Mail, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Professional Draft Beer Installation Services | Beer Craft Gear',
  description: 'Affordable setup & installation services for commercial bars and premium home bar kegerators, tapping gear, couplers, faucets, and shanks.',
};

export default function ServicesPage() {
  return (
    <div className="container section animate-fade-in" style={{ minHeight: '90vh' }}>
      {/* Hero Banner */}
      <div style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 60px',
      }}>
        <span style={{ 
          color: 'var(--primary)', 
          fontWeight: 600, 
          fontSize: '0.85rem', 
          textTransform: 'uppercase', 
          letterSpacing: '2px', 
          display: 'block', 
          marginBottom: '12px' 
        }}>
          Expert Bar Integration
        </span>
        <h1 style={{ 
          fontSize: '3rem', 
          lineHeight: '1.15', 
          marginBottom: '20px', 
          color: '#fff', 
          fontFamily: 'var(--font-display)' 
        }}>
          Professional Draft Setup & Installation Services
        </h1>
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: '1.15rem', 
          lineHeight: '1.7' 
        }}>
          Get your commercial bar, taproom, or premium home setup installed correctly by certified draft beer specialists. We ensure balanced pressure, optimal refrigeration, and leak-free pours.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px' }} className="grid-cols-2">
        {/* Left Side: Services List & Specifications */}
        <div>
          <h2 style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '24px', fontFamily: 'var(--font-display)' }}>
            What We Install & Configure
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '32px' }}>
            A poorly configured draft system leads to foaming, stale beer, gas leaks, and wasted inventory. Our team configures your equipment using precise mechanical guidelines, ensuring optimal beverage temperature and carbonation flow.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              padding: '24px', 
              backgroundColor: 'rgba(255, 255, 255, 0.01)', 
              border: '1px solid var(--border)', 
              borderRadius: 'var(--radius-md)' 
            }}>
              <Wrench size={24} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '6px' }}>Kegerators & Cooling Systems</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Unboxing, leveling, and configuring commercial beer dispensers, refrigeration units, and custom glycol-cooled setups for consistent serving temperatures.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              padding: '24px', 
              backgroundColor: 'rgba(255, 255, 255, 0.01)', 
              border: '1px solid var(--border)', 
              borderRadius: 'var(--radius-md)' 
            }}>
              <Settings size={24} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '6px' }}>Sankey Couplers & Tapping Gear</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Safe assembly and mounting of D-System, S-System, or other import couplers onto keg valves. Proper alignment of gas and liquid lines to prevent gasket blowout.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              padding: '24px', 
              backgroundColor: 'rgba(255, 255, 255, 0.01)', 
              border: '1px solid var(--border)', 
              borderRadius: 'var(--radius-md)' 
            }}>
              <CheckCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '6px' }}>Faucets, Shanks & Towers</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Aesthetic countertop or wall mounting of draft towers. Precision shank drilling and installation of premium standard, forward-sealing, or flow-control beer faucets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Package details and pricing card */}
        <div>
          <div className="glass-card" style={{ 
            padding: '40px', 
            border: '1px solid rgba(217, 119, 6, 0.2)',
            background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.04) 0%, rgba(11, 15, 23, 0.98) 100%)',
            position: 'sticky',
            top: '100px'
          }}>
            <span style={{ 
              color: 'var(--primary)', 
              fontWeight: 700, 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: '1.5px',
              backgroundColor: 'rgba(217, 119, 6, 0.1)',
              padding: '4px 10px',
              borderRadius: '100px',
              display: 'inline-block',
              marginBottom: '16px'
            }}>
              Most Popular Package
            </span>
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
              Premium Collectible Set
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.6' }}>
              Designed specifically for bar owners, local pubs, taprooms, and premium residential bars. This covers the complete setup of high-end kegerators, tapping lines, and dispensing hardware.
            </p>

            <div style={{ 
              borderTop: '1px solid rgba(255,255,255,0.05)', 
              borderBottom: '1px solid rgba(255,255,255,0.05)', 
              paddingTop: '20px', 
              paddingBottom: '20px', 
              marginBottom: '28px' 
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Affordable Professional Service Pricing</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '4px' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-light)' }}>$100 - $500</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>* depending on complexity</span>
              </div>
            </div>

            <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '16px' }}>What is Included:</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '32px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={16} style={{ color: 'var(--success)', flexShrink: 0 }} />
                Install of Premium Kegerators & Dispensing Equipment
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={16} style={{ color: 'var(--success)', flexShrink: 0 }} />
                Mounting of Sankey couplers, gas regulators & air distributors
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={16} style={{ color: 'var(--success)', flexShrink: 0 }} />
                Drilling, locking, and mounting of shanks and beer faucets
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={16} style={{ color: 'var(--success)', flexShrink: 0 }} />
                High-pressure leak tests on CO2/Nitrogen gas lines
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={16} style={{ color: 'var(--success)', flexShrink: 0 }} />
                Flow rate balancing & pour calibration (foam prevention)
              </li>
            </ul>

            <Link href="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Contact Us to Discuss Setup <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust factors bar */}
      <div style={{
        marginTop: '80px',
        borderTop: '1px solid var(--border)',
        paddingTop: '50px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '30px'
      }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <ShieldCheck size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '4px' }}>Certified Technicians</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.4' }}>All services are handled by experienced, insured draft equipment mechanics.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <Clock size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '4px' }}>Rapid Turnaround</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.4' }}>We schedule site visits and setups to match your commercial opening timeline.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <UserCheck size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '4px' }}>Satisfaction Guaranteed</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.4' }}>We do not leave until your system pours cold, clear, perfectly carbonated drafts.</p>
          </div>
        </div>
      </div>

      {/* Scheduling Quote Block */}
      <div className="glass-card" style={{
        marginTop: '60px',
        padding: '36px',
        textAlign: 'center',
        border: '1px dashed var(--border)'
      }}>
        <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '12px' }}>Request a Custom Installation Quote</h3>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 24px', fontSize: '0.95rem' }}>
          Have a unique bar layout or multi-tap tower requirements? We build custom lines to meet any length or setup layout. Reach out to our Broward County office to schedule a consultation.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <a href="tel:+14169256222" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary-light)', fontWeight: 600 }}>
            <Phone size={16} /> +1 (416) 925-6222
          </a>
          <a href="mailto:cs@beercraftgear.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary-light)', fontWeight: 600 }}>
            <Mail size={16} /> cs@beercraftgear.com
          </a>
        </div>
      </div>
    </div>
  );
}
