import { Link } from 'react-router-dom'
import { site } from '../data/content'

export default function Footer() {
  const services = [
    'Landscape Design',
    'Garden Maintenance',
    'Lawn Installation',
    'Irrigation Systems',
    'Planting & Gardening',
    'Outdoor Landscaping',
  ]

  return (
    <footer className="aq-footer">
      <div className="aq-footer-inner">
        <div className="aq-footer-news">
          <div className="aq-footer-news-copy">
            <span className="aq-footer-eyebrow">LET'S GROW SOMETHING BEAUTIFUL</span>
            <h2>Ready to transform your garden?</h2>
            <p>Tell us about your garden and we&apos;ll help you plan your perfect outdoor space.</p>
          </div>
          <form className="aq-footer-news-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email">Get in touch with us</label>
            <div className="aq-footer-news-row">
              <input id="footer-email" type="email" name="email" placeholder="Enter your email address" autoComplete="email" required />
              <button type="submit">Contact Us <span aria-hidden="true">→</span></button>
            </div>
          </form>
        </div>

        <div className="aq-footer-columns">
          <div className="aq-footer-column aq-footer-about">
            <Link to="/" className="aq-footer-brand" aria-label={`${site.name} home`}>
              <img src={site.logo} alt={site.name} width={200} height={120} />
            </Link>
            <p className="aq-footer-slogan">{site.slogan}</p>
            <p className="aq-footer-description">Creating beautiful outdoor spaces with thoughtful design, quality workmanship and dependable garden care.</p>
            <div className="aq-footer-social">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Visit Instagram">IG</a>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="Contact us on WhatsApp">WA</a>
            </div>
          </div>

          <div className="aq-footer-column">
            <h3>Explore</h3>
            <ul className="aq-footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about/">About Us</Link></li>
              <li><Link to="/services/">Our Services</Link></li>
              <li><Link to="/projects/">Our Projects</Link></li>
              <li><Link to="/areas/">Areas We Serve</Link></li>
              <li><Link to="/contact/">Contact Us</Link></li>
            </ul>
          </div>

          <div className="aq-footer-column">
            <h3>Our Services</h3>
            <ul className="aq-footer-links">
              {services.map((service) => (
                <li key={service}><Link to="/services/">{service}</Link></li>
              ))}
            </ul>
          </div>

          <div className="aq-footer-column aq-footer-contact">
            <h3>Get in Touch</h3>
            <div className="aq-footer-contact-item">
              <span className="aq-footer-contact-icon" aria-hidden="true">⌖</span>
              <div><strong>Our Location</strong><p>{site.city}</p></div>
            </div>
            <div className="aq-footer-contact-item">
              <span className="aq-footer-contact-icon" aria-hidden="true">◷</span>
              <div><strong>Working Hours</strong><p>{site.hours}</p></div>
            </div>
            <div className="aq-footer-contact-item">
              <span className="aq-footer-contact-icon" aria-hidden="true">☎</span>
              <div>
                <strong>Call Our Team</strong>
                {site.contacts.map((contact) => <a key={contact.name} href={contact.phoneHref}>{contact.name}: {contact.phone}</a>)}
              </div>
            </div>
            <div className="aq-footer-contact-item">
              <span className="aq-footer-contact-icon" aria-hidden="true">✉</span>
              <div><strong>Email Us</strong><a href={site.emailHref}>{site.email}</a></div>
            </div>
            <a className="aq-footer-whatsapp" href={site.whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="aq-footer-bottom">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Developed by <a href="https://itiagency.tech" target="_blank" rel="noreferrer">ITI</a></p>
        </div>
      </div>
    </footer>
  )
}
