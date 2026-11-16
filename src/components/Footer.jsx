import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/products', label: 'Collections' },
    { to: '/contact', label: 'Contact' },
  ]

  const categories = ['Women\'s Wear', 'Men\'s Fashion', 'Accessories', 'Footwear', 'Custom Tailoring', 'Luxury Collections']

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">VELOUR<span>.</span></div>
            <p className="footer__tagline">
              Nigeria's premier fashion destination. Luxury, culture, and style — made for the modern African.
            </p>
            <div className="footer__socials">
              {['IG', 'FB', 'TW', 'TK'].map(s => (
                <a key={s} href="#" className="footer__social">{s}</a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              {quickLinks.map(l => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="footer__heading">Collections</h4>
            <ul className="footer__list">
              {categories.map(c => (
                <li key={c}><Link to="/products">{c}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer__heading">Get In Touch</h4>
            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>12 Wole Aribiike Avenue,<br />Victoria Island, Lagos, Nigeria</span>
            </div>
            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.03a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15.5l.19 1.42z"/>
              </svg>
              <span>+234 801 234 5678</span>
            </div>
            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>hello@velour.ng</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© {year} VELOUR Fashion. All rights reserved.</p>
          <p className="footer__dev">
            Developed by: <strong>Oluwatetisimi Benjamin Longe</strong> &nbsp;|&nbsp;
            Matric: <strong>25/SCI01/068</strong> &nbsp;|&nbsp;
            Department: <strong>Computer Science</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}
