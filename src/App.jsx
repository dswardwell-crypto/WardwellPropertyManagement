import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Home, KeyRound, Wrench, FileText, Phone, Mail, MapPin, CheckCircle2, Building2, ShieldCheck, Users, CreditCard, ReceiptText, DollarSign } from 'lucide-react'
import businessCardFront from './assets/business-card-front.png'

const PAYMENT_LINK = 'https://buy.stripe.com/aFa14ncZl4xm7kB5kRejK00'
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mlgvggww'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Owners', path: '/owners' },
  { label: 'Tenants', path: '/tenants' },
  { label: 'Rentals', path: '/rentals' },
  { label: 'Payments', path: '/payments' },
  { label: 'Contact', path: '/contact' },
]

function useRoute() {
  const [path, setPath] = useState(window.location.pathname || '/')

  useEffect(() => {
    const handlePop = () => setPath(window.location.pathname || '/')
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [])

  const navigate = (nextPath) => {
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { path, navigate }
}

function Link({ to, children, className = '', navigate }) {
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        event.preventDefault()
        navigate(to)
      }}
    >
      {children}
    </a>
  )
}

function Header({ path, navigate }) {
  return (
    <header className="header">
      <Link to="/" navigate={navigate} className="brand">
        <div className="logo"><Home size={24} /></div>
        <div>
          <p className="brand-title">Wardwell Property Management</p>
          <p className="brand-subtitle">Residential Rental Solutions</p>
        </div>
      </Link>
      <nav className="nav">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} navigate={navigate} className={path === item.path ? 'active' : ''}>{item.label}</Link>
        ))}
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Wardwell Property Management. All rights reserved.</span>
        <span>wardwellpropertymanagement.com</span>
      </div>
      <div className="container footer-disclaimer">
        <p>Wardwell Property Management provides property management and rental coordination services. All rental terms, approvals, fees, maintenance decisions, and lease requirements are subject to owner approval, written agreements, and applicable law.</p>
      </div>
    </footer>
  )
}

function BrandStrip() {
  return (
    <section className="brand-strip">
      <div className="container brand-strip-inner">
        <span>WPM</span>
        <span>Wardwell Property Management</span>
        <span>Residential Rental Solutions</span>
      </div>
    </section>
  )
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="pill page-pill">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="large">{text}</p>
      </div>
    </section>
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

function ServicesGrid() {
  return (
    <div className="service-grid">
      <ServiceCard Icon={Building2} title="Property Oversight" text="Regular management support for rental homes, tenant needs, owner questions, and property-related tasks." />
      <ServiceCard Icon={Users} title="Tenant Communication" text="A clear point of contact for tenants so issues are handled professionally and consistently." />
      <ServiceCard Icon={Wrench} title="Maintenance Coordination" text="Coordination of repairs, maintenance requests, vendor scheduling, and owner updates." />
      <ServiceCard Icon={FileText} title="Monthly Owner Reports" text="Simple monthly reporting for rent, expenses, maintenance, and other important activity." />
      <ServiceCard Icon={KeyRound} title="Move-In and Move-Out Help" text="Assistance with rental transitions, property condition notes, keys, and tenant coordination." />
      <ServiceCard Icon={ShieldCheck} title="Policy Enforcement" text="Support enforcing owner policies such as pets, smoking, occupancy limits, and property standards." />
    </div>
  )
}

function HomePage({ navigate }) {
  return (
    <>
      <section className="hero">
        <div className="hero-bg-one" />
        <div className="hero-bg-two" />
        <div className="container">
          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="pill">Management you can rely on</span>
              <h1>Residential rental solutions for owners and tenants.</h1>
              <p className="large">Wardwell Property Management helps rental property owners stay organized with clear communication, tenant coordination, maintenance follow-up, rent collection support, and practical local oversight.</p>
              <div className="actions">
                <Link className="btn btn-primary" to="/contact" navigate={navigate}>Request a Call</Link>
                <Link className="btn btn-outline" to="/payments" navigate={navigate}>Make a Payment</Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="hero-card brand-card-panel">
              <img src={businessCardFront} alt="Wardwell Property Management business card with WPM logo and slogan Management You Can Rely On" className="brand-card-image" /> 
            </motion.div>
          </div>
        </div>
      </section>
      <BrandStrip />
      <section className="section">
        <div className="container">
          <div className="center">
            <p className="eyebrow">What We Do</p>
            <h2>Property management that is local, organized, and practical.</h2>
            <p className="section-copy">Choose a page below to get to the right place quickly.</p>
          </div>
          <div className="quick-grid">
            <Link to="/owners" navigate={navigate} className="card quick-card"><h3>Owners</h3><p>Learn about owner reporting, management support, and consultation requests.</p></Link>
            <Link to="/tenants" navigate={navigate} className="card quick-card"><h3>Tenants</h3><p>Report maintenance issues, read emergency notes, or contact us about rental questions.</p></Link>
            <Link to="/rentals" navigate={navigate} className="card quick-card"><h3>Rentals</h3><p>View current availability and submit a rental interest form.</p></Link>
            <Link to="/payments" navigate={navigate} className="card quick-card"><h3>Payments</h3><p>Make approved rent, fee, or owner payments through Stripe.</p></Link>
          </div>
        </div>
      </section>
      <section className="section white">
        <div className="container">
          <div className="center">
            <p className="eyebrow">Services</p>
            <h2>Management you can rely on.</h2>
            <p className="section-copy">We provide residential rental solutions for owners who want their properties handled with care, organization, and consistent communication.</p>
          </div>
          <ServicesGrid />
        </div>
      </section>
      <CTA navigate={navigate} />
    </>
  )
}

function ServicesPage({ navigate }) {
  return (
    <>
      <PageHero eyebrow="Services" title="Management you can rely on." text="Residential rental solutions for owners who need practical help with tenants, maintenance, reporting, payments, and day-to-day property needs." />
      <section className="section white"><div className="container"><ServicesGrid /></div></section>
      <CTA navigate={navigate} />
    </>
  )
}

function OwnerConsultationForm() {
  return (
    <form className="card form" action={FORMSPREE_ENDPOINT} method="POST">
      <input type="hidden" name="form_type" value="Owner Consultation Request" />
      <input type="hidden" name="_subject" value="New Owner Consultation Request" />
      <div className="field"><label>Your Name</label><input name="owner_name" placeholder="Your name" required /></div>
      <div className="form-two-col">
        <div className="field"><label>Email</label><input name="email" type="email" placeholder="you@example.com" required /></div>
        <div className="field"><label>Phone</label><input name="phone" placeholder="Your phone number" required /></div>
      </div>
      <div className="field"><label>Property Address or Area</label><input name="property_area" placeholder="Address, city, or general area" /></div>
      <div className="form-two-col">
        <div className="field"><label>Number of Units</label><input name="number_of_units" placeholder="Example: 1 home, 2 duplex units" /></div>
        <div className="field"><label>Is it occupied?</label>
          <select name="occupied_status">
            <option value="">Select one</option>
            <option value="Yes, occupied">Yes, occupied</option>
            <option value="No, vacant">No, vacant</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>
      <div className="field"><label>What do you need help with?</label><textarea name="owner_needs" placeholder="Rent collection, tenant communication, maintenance coordination, reports, lease coordination, or something else." required /></div>
      <button type="submit" className="btn btn-dark">Request Owner Consultation</button>
    </form>
  )
}

function OwnersPage({ navigate }) {
  return (
    <>
      <PageHero eyebrow="For Property Owners" title="Residential rental management that keeps you informed." text="Our goal is simple: help owners stay informed, keep properties in good shape, and reduce the everyday stress that comes with managing rentals." />
      <section className="section white">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Owner Support</p>
            <h2>Clear communication and organized reporting.</h2>
            <p className="section-copy">We help with the day-to-day tasks that make rental ownership easier to manage.</p>
          </div>
          <div className="check-list">
            {['Rent collection support and deposit tracking','Monthly income and expense reporting','Coordination of maintenance and repairs','Tenant communication and follow-up','Lease and document coordination support','Local, practical oversight for South Georgia rentals'].map(item => (
              <div className="check-row" key={item}><CheckCircle2 size={20} /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section owner-consultation">
        <div className="container two-col owner-consultation-grid">
          <div>
            <p className="eyebrow">Owner Consultation</p>
            <h2>Interested in property management?</h2>
            <p className="section-copy">Tell us a little about your rental property and what you need help with. We will review it and reach out to discuss whether Wardwell Property Management is a good fit.</p>
            <div className="owner-note card">
              <h3>Built from real local property experience</h3>
              <p>Wardwell Property Management was created from hands-on experience with rental homes, maintenance coordination, local construction, and owner reporting.</p>
            </div>
          </div>
          <OwnerConsultationForm />
        </div>
      </section>
      <CTA navigate={navigate} />
    </>
  )
}

function MaintenanceForm() {
  return (
    <form className="card form maintenance-form" action={FORMSPREE_ENDPOINT} method="POST">
      <input type="hidden" name="form_type" value="Tenant Maintenance Request" />
      <input type="hidden" name="_subject" value="New Tenant Maintenance Request" />

      <div>
        <p className="eyebrow">Report an Issue</p>
        <h3>Submit a maintenance request</h3>
        <p className="note">Use this form to report a maintenance issue at your rental property. For fire, medical emergencies, gas leaks, or immediate danger, call 911 first. For urgent property issues, call us directly at 229-300-6561.</p>
      </div>

      <div className="form-two-col">
        <div className="field"><label>Tenant Name</label><input name="tenant_name" placeholder="Your name" required /></div>
        <div className="field"><label>Property Address</label><input name="property_address" placeholder="Rental property address" required /></div>
      </div>

      <div className="form-two-col">
        <div className="field"><label>Phone Number</label><input name="phone" placeholder="Your phone number" required /></div>
        <div className="field"><label>Email</label><input name="email" type="email" placeholder="you@example.com" required /></div>
      </div>

      <div className="form-two-col">
        <div className="field">
          <label>Issue Category</label>
          <select name="issue_category" required>
            <option value="">Select one</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="HVAC / AC / Heat">HVAC / AC / Heat</option>
            <option value="Appliance">Appliance</option>
            <option value="Roof / Leak">Roof / Leak</option>
            <option value="Pest Issue">Pest Issue</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="field">
          <label>Is this urgent?</label>
          <select name="urgent" required>
            <option value="">Select one</option>
            <option value="Yes, urgent">Yes, urgent</option>
            <option value="No, not urgent">No, not urgent</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label>Describe the Issue</label>
        <textarea name="issue_description" placeholder="Tell us what is going on, when it started, and any important details." required />
      </div>

      <div className="field">
        <label>Do we have permission to enter if needed?</label>
        <select name="permission_to_enter" required>
          <option value="">Select one</option>
          <option value="Yes">Yes</option>
          <option value="No, contact me first">No, contact me first</option>
        </select>
      </div>

      <button type="submit" className="btn btn-dark">Submit Maintenance Request</button>
      <p className="note">If pictures are needed, submit the request first and then email or text photos to Wardwell Property Management.</p>
    </form>
  )
}

function TenantsPage({ navigate }) {
  return (
    <>
      <PageHero eyebrow="For Tenants" title="A better rental experience starts with clear communication." text="Report maintenance issues, ask rental questions, and use the contact information below when something needs attention." />
      <section className="section white">
        <div className="container tenant-grid">
          <div>
            <p className="eyebrow">Tenant Help</p>
            <h2>Report issues and know what to expect.</h2>
            <p className="section-copy">Use the maintenance request form below to report a property issue so we can review it and coordinate the next step.</p>
          </div>
          <div className="tenant-cards">
            <div className="card tenant-card"><h3>Maintenance Requests</h3><p>Tenants can contact us about maintenance concerns so we can review the issue and coordinate next steps.</p></div>
            <div className="card tenant-card"><h3>Rental Questions</h3><p>We help tenants understand where to send questions, how to report issues, and what to expect during the rental process.</p></div>
          </div>
        </div>
        <div className="container maintenance-wrapper">
          <div className="emergency-notice">
            <strong>Emergency Notice:</strong> For fire, medical emergencies, gas leaks, flooding, or immediate danger, call 911 first. For urgent property issues, call 229-300-6561. This online form is for maintenance requests and may not be monitored instantly.
          </div>
          <MaintenanceForm />
        </div>
      </section>
      <CTA navigate={navigate} />
    </>
  )
}

function RentalInterestForm() {
  return (
    <form className="card form" action={FORMSPREE_ENDPOINT} method="POST">
      <input type="hidden" name="form_type" value="Rental Interest Request" />
      <input type="hidden" name="_subject" value="New Rental Interest Request" />
      <div className="field"><label>Name</label><input name="applicant_name" placeholder="Your name" required /></div>
      <div className="form-two-col">
        <div className="field"><label>Email</label><input name="email" type="email" placeholder="you@example.com" required /></div>
        <div className="field"><label>Phone</label><input name="phone" placeholder="Your phone number" required /></div>
      </div>
      <div className="form-two-col">
        <div className="field"><label>Desired Area</label><input name="desired_area" placeholder="Adel, Sparks, Hahira, Valdosta, etc." /></div>
        <div className="field"><label>Desired Move-In Date</label><input name="move_in_date" placeholder="Example: June 1" /></div>
      </div>
      <div className="form-two-col">
        <div className="field"><label>Bedrooms Needed</label><input name="bedrooms_needed" placeholder="Example: 2 or 3" /></div>
        <div className="field"><label>Pets?</label>
          <select name="pets">
            <option value="">Select one</option>
            <option value="No pets">No pets</option>
            <option value="Yes, dog">Yes, dog</option>
            <option value="Yes, cat">Yes, cat</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div className="field"><label>Message</label><textarea name="rental_message" placeholder="Tell us what you are looking for and any questions you have." required /></div>
      <button type="submit" className="btn btn-dark">Submit Rental Interest</button>
      <p className="note">Submitting this form does not guarantee approval or availability. Formal rental applications and screening may be required later.</p>
    </form>
  )
}

function RentalsPage({ navigate }) {
  return (
    <>
      <PageHero eyebrow="Available Rentals" title="Looking for a rental home?" text="Available rentals will be posted here as they become ready. You can also submit a rental interest form for current or upcoming openings." />
      <section className="section white">
        <div className="container rentals-grid">
          <div>
            <p className="eyebrow">Current Availability</p>
            <h2>Rental listings will be posted here.</h2>
            <p className="section-copy">Check back soon for available properties, rent amounts, photos, and application details.</p>
          </div>
          <div className="card available-card">
            <h3>No current listings posted</h3>
            <p>Submit the form below to ask about upcoming openings in Cook County and South Georgia.</p>
            <a className="btn btn-dark" href="#rental-interest">Apply to Rent / Join Interest List</a>
          </div>
        </div>
      </section>
      <section id="rental-interest" className="section apply-section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Apply to Rent</p>
            <h2>Tell us what you are looking for.</h2>
            <p className="section-copy">This is an interest form, not a full rental application. Do not submit Social Security numbers, bank account numbers, or other sensitive personal information through this website.</p>
          </div>
          <RentalInterestForm />
        </div>
      </section>
      <CTA navigate={navigate} />
    </>
  )
}

function PaymentsPage({ navigate }) {
  return (
    <>
      <PageHero eyebrow="Online Payments" title="Simple online payment options." text="Use this page for approved rent payments, management fees, application fees, maintenance reimbursements, or other approved charges." />
      <section className="section white">
        <div className="container">
          <div className="payment-panel">
            <h3>Secure payment note</h3>
            <p>Payments are handled through Stripe's secure hosted checkout page. Wardwell Property Management does not collect or store card numbers directly on this website.</p>
          </div>
          <div className="payment-grid">
            <div className="payment-card">
              <CreditCard size={28} />
              <h3>Pay Rent</h3>
              <p>Tenants can use this button for approved rent payments.</p>
              <a className="btn btn-dark" href={PAYMENT_LINK}>Pay Rent</a>
            </div>
            <div className="payment-card">
              <ReceiptText size={28} />
              <h3>Pay Fees</h3>
              <p>Use this for application fees, late fees, returned payment fees, or other approved charges when applicable.</p>
              <a className="btn btn-dark" href={PAYMENT_LINK}>Pay Fees</a>
            </div>
            <div className="payment-card">
              <DollarSign size={28} />
              <h3>Owner Payments</h3>
              <p>Owners can use this for management fees, reimbursements, or other approved property-related balances.</p>
              <a className="btn btn-dark" href={PAYMENT_LINK}>Owner Payment</a>
            </div>
          </div>
          <p className="note">Customers can enter the amount they need to pay through Stripe.</p>
        </div>
      </section>
      <CTA navigate={navigate} />
    </>
  )
}

function ContactForm() {
  return (
    <form className="card form" action={FORMSPREE_ENDPOINT} method="POST">
      <input type="hidden" name="form_type" value="General Inquiry" />
      <input type="hidden" name="_subject" value="New Website Inquiry" />
      <div className="field"><label>Name</label><input name="name" placeholder="Your name" required /></div>
      <div className="field"><label>Email</label><input name="email" type="email" placeholder="you@example.com" required /></div>
      <div className="field"><label>Phone</label><input name="phone" placeholder="Your phone number" /></div>
      <div className="field"><label>How can we help?</label><textarea name="message" placeholder="Tell us about your property or rental need." required /></div>
      <button type="submit" className="btn btn-dark">Submit Inquiry</button>
      <p className="note">We will respond to your inquiry as soon as possible.</p>
    </form>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="How can we help?" text="Contact Wardwell Property Management with any questions, requests, or property-related needs. Whether you are an owner, tenant, or someone looking for more information, we would be glad to hear from you." />
      <section className="section white">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Get in Touch</p>
            <h2>Contact Wardwell Property Management</h2>
            <p className="section-copy">You can call, email, or use the form on this page.</p>
            <div className="contact-lines">
              <div className="contact-line"><Phone size={20} /><span>Phone: 229-300-6561</span></div>
              <div className="contact-line"><Mail size={20} /><span>Email: davis@wardwellpropertymanagement.com</span></div>
              <div className="contact-line"><MapPin size={20} /><span>Cook County and South Georgia</span></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}

function CTA({ navigate }) {
  return (
    <section className="section cta">
      <div className="container">
        <p className="cta-kicker">WPM</p>
        <h2>Residential Rental Solutions</h2>
        <p className="section-copy">Management you can rely on for rental homes in Cook County and South Georgia.</p>
        <div className="actions" style={{ justifyContent: 'center' }}>
          <Link className="btn btn-primary" to="/contact" navigate={navigate}>Get in Touch</Link>
        </div>
      </div>
    </section>
  )
}

function NotFoundPage({ navigate }) {
  return (
    <>
      <PageHero eyebrow="Page Not Found" title="That page was not found." text="Use the button below to return to the homepage." />
      <section className="section white"><div className="container center"><Link className="btn btn-dark" to="/" navigate={navigate}>Back to Home</Link></div></section>
    </>
  )
}

export default function App() {
  const { path, navigate } = useRoute()

  let page
  if (path === '/') page = <HomePage navigate={navigate} />
  else if (path === '/services') page = <ServicesPage navigate={navigate} />
  else if (path === '/owners') page = <OwnersPage navigate={navigate} />
  else if (path === '/tenants') page = <TenantsPage navigate={navigate} />
  else if (path === '/rentals') page = <RentalsPage navigate={navigate} />
  else if (path === '/payments') page = <PaymentsPage navigate={navigate} />
  else if (path === '/contact') page = <ContactPage />
  else page = <NotFoundPage navigate={navigate} />

  return (
    <main className="page">
      <section className="topbar">
        <div className="container">
          <Header path={path} navigate={navigate} />
        </div>
      </section>
      {page}
      <Footer />
    </main>
  )
}
