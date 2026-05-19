import React from 'react'
import { motion } from 'framer-motion'
import { Home, KeyRound, Wrench, FileText, Phone, Mail, MapPin, CheckCircle2, Building2, ShieldCheck, Users, CreditCard, ReceiptText, DollarSign } from 'lucide-react'

const PAYMENT_LINK = 'https://buy.stripe.com/aFa14ncZl4xm7kB5kRejK00'

function IconBlock({ Icon, title, text }) {
  return (
    <div className="hero-item">
      <div className="icon-box"><Icon size={22} /></div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

function ServiceCard({ Icon, title, text }) {
  return (
    <div className="card service-card">
      <div className="service-icon"><Icon size={25} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-bg-one" />
        <div className="hero-bg-two" />
        <div className="container">
          <header className="header">
            <div className="brand">
              <div className="logo"><Home size={24} /></div>
              <div>
                <p className="brand-title">Wardwell Property Management</p>
                <p className="brand-subtitle">Serving Cook County and South Georgia</p>
              </div>
            </div>
            <nav className="nav">
              <a href="#services">Services</a>
              <a href="#owners">Owners</a>
              <a href="#tenants">Tenants</a>
              <a href="#payments">Payments</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="pill">Local rental property care with owner-focused reporting</span>
              <h1>Practical property management for owners who want things handled right.</h1>
              <p className="large">Wardwell Property Management helps property owners manage rentals with clear communication, tenant coordination, maintenance follow-up, rent collection support, and organized monthly reporting.</p>
              <div className="actions">
                <a className="btn btn-primary" href="#contact">Request a Call</a>
                <a className="btn btn-outline" href="#payments">Make a Payment</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="hero-card">
              <IconBlock Icon={KeyRound} title="Rental Oversight" text="Day-to-day coordination for rental homes and tenants." />
              <IconBlock Icon={Wrench} title="Maintenance Coordination" text="Help handling repairs, follow-up, and vendor communication." />
              <IconBlock Icon={FileText} title="Owner Reporting" text="Organized monthly reports so owners can see what happened." />
              <IconBlock Icon={ShieldCheck} title="Local Stewardship" text="A practical, hands-on approach for South Georgia properties." />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="center">
            <p className="eyebrow">What We Do</p>
            <h2>Property management built around owners, tenants, and clear records.</h2>
            <p className="section-copy">We help owners keep rental properties organized, cared for, and easier to manage without losing the local, personal touch.</p>
          </div>
          <div className="service-grid">
            <ServiceCard Icon={Building2} title="Property Oversight" text="Regular management support for rental homes, tenant needs, owner questions, and property-related tasks." />
            <ServiceCard Icon={Users} title="Tenant Communication" text="A clear point of contact for tenants so issues are handled professionally and consistently." />
            <ServiceCard Icon={Wrench} title="Maintenance Coordination" text="Coordination of repairs, maintenance requests, vendor scheduling, and owner updates." />
            <ServiceCard Icon={FileText} title="Monthly Owner Reports" text="Simple monthly reporting for rent, expenses, maintenance, and other important activity." />
            <ServiceCard Icon={KeyRound} title="Move-In and Move-Out Help" text="Assistance with rental transitions, property condition notes, keys, and tenant coordination." />
            <ServiceCard Icon={ShieldCheck} title="Policy Enforcement" text="Support enforcing owner policies such as pets, smoking, occupancy limits, and property standards." />
          </div>
        </div>
      </section>

      <section id="owners" className="section white">
        <div className="container two-col">
          <div>
            <p className="eyebrow">For Property Owners</p>
            <h2>Know what is happening with your property.</h2>
            <p className="section-copy">The goal is simple: help owners stay informed, keep properties in good shape, and reduce the everyday stress that comes with managing rentals.</p>
          </div>
          <div className="check-list">
            {['Rent collection support and deposit tracking','Monthly income and expense reporting','Coordination of maintenance and repairs','Tenant communication and follow-up','Lease and document coordination support','Local, practical oversight for South Georgia rentals'].map(item => (
              <div className="check-row" key={item}><CheckCircle2 size={20} /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="payments" className="section">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Online Payments</p>
            <h2>Simple online payment options for tenants and owners.</h2>
            <p className="section-copy">Use this section for rent payments, management fees, application fees, maintenance reimbursements, or other approved charges.</p>
          </div>
          <div className="payment-panel">
            <h3>Important payment note</h3>
            <p>Online payment buttons should connect to a secure hosted checkout page such as Stripe Payment Links, Square Checkout, or another payment provider. Wardwell Property Management should not collect or store card numbers directly on this website.</p>
          </div>
          <div className="payment-grid">
            <div className="payment-card">
              <CreditCard size={28} />
              <h3>Pay Rent</h3>
              <p>Tenants can use this button for approved rent payments once your Stripe or Square link is connected.</p>
              <a className="btn btn-dark" href={PAYMENT_LINK}>Pay Rent</a>
            </div>
            <div className="payment-card">
              <ReceiptText size={28} />
              <h3>Pay Fees</h3>
              <p>Use this for application fees, late fees, returned payment fees, or other charges when applicable.</p>
              <a className="btn btn-dark" href={PAYMENT_LINK}>Pay Fees</a>
            </div>
            <div className="payment-card">
              <DollarSign size={28} />
              <h3>Owner Payments</h3>
              <p>Owners can use this for management fees, reimbursements, or other approved property-related balances.</p>
              <a className="btn btn-dark" href={PAYMENT_LINK}>Owner Payment</a>
            </div>
          </div>
          <p className="note">Payments are processed through Stripe's secure hosted checkout page. Customers can enter the amount they need to pay.</p>
        </div>
      </section>

      <section id="tenants" className="section white">
        <div className="container tenant-grid">
          <div>
            <p className="eyebrow">For Tenants</p>
            <h2>A better rental experience starts with clear communication.</h2>
          </div>
          <div className="tenant-cards">
            <div className="card tenant-card"><h3>Maintenance Requests</h3><p>Tenants can contact us about maintenance concerns so we can review the issue and coordinate next steps.</p></div>
            <div className="card tenant-card"><h3>Rental Questions</h3><p>We help tenants understand where to send questions, how to report issues, and what to expect during the rental process.</p></div>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container">
          <h2>Local. Organized. Owner-focused.</h2>
          <p className="section-copy">Whether you own one rental home or several properties, Wardwell Property Management is built to help you keep things organized and handled with care.</p>
          <div className="actions" style={{ justifyContent: 'center' }}><a className="btn btn-primary" href="#contact">Get in Touch</a></div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Ready to talk about your rental property?</h2>
            <p className="section-copy">Reach out to discuss your property, what you need help with, and whether Wardwell Property Management would be a good fit.</p>
            <div className="contact-lines">
              <div className="contact-line"><Phone size={20} /><span>Phone: 229-300-6561</span></div>
              <div className="contact-line"><Mail size={20} /><span>Email: davis@wardwellpropertymanagement.com address</span></div>
              <div className="contact-line"><MapPin size={20} /><span>Cook County and South Georgia</span></div>
            </div>
          </div>
          <form className="card form">
            <div className="field"><label>Name</label><input placeholder="Your name" /></div>
            <div className="field"><label>Email</label><input placeholder="you@example.com" /></div>
            <div className="field"><label>Phone</label><input placeholder="Your phone number" /></div>
            <div className="field"><label>How can we help?</label><textarea placeholder="Tell us about your property or rental need." /></div>
            <button type="button" className="btn btn-dark">Submit Inquiry</button>
            <p className="note">This form is a visual placeholder. Connect it to your website platform, email service, or form provider before publishing.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Wardwell Property Management. All rights reserved.</span>
          <span>wardwellpropertymanagement.com</span>
        </div>
      </footer>
    </main>
  )
}
