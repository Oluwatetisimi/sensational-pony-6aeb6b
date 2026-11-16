import { useState } from 'react'
import { useContactForm } from '../hooks/useContactForm.js'
import { ChevronDownSvg } from '../components/FashionIcons.jsx'

const faqs = [
  { q: 'Do you offer custom tailoring services?', a: 'Yes! Our bespoke tailoring studio is available in-store and by appointment. We create fully custom garments from scratch based on your measurements and design preferences. Contact us to book a consultation.' },
  { q: 'What are your delivery timelines?', a: 'Standard delivery within Lagos takes 2–3 business days. Orders across Nigeria are delivered within 5–7 business days. International shipping to UK, USA, and Canada typically takes 10–14 business days.' },
  { q: 'What is your return and exchange policy?', a: 'We accept returns within 14 days of delivery for items in original, unworn condition with tags attached. Custom-tailored items are non-returnable. Please contact us to initiate a return.' },
  { q: 'How do I find my correct size?', a: 'Each product listing includes a detailed size guide with measurements in centimetres. If you are between sizes, we recommend sizing up. Our customer team is also happy to assist with sizing advice.' },
  { q: 'Are your fabrics sustainably sourced?', a: 'Sustainability is at the core of VELOUR\'s values. We partner with certified Nigerian textile producers and artisan cooperatives that follow ethical and environmentally responsible practices.' },
]

export default function Contact() {
  const { fields, errors, submitted, submitting, handleChange, handleSubmit, reset } = useContactForm()
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      {/* ---- CONTACT HERO ---- */}
      <section className="contact-hero">
        <div className="container">
          <span className="section__eyebrow">Get In Touch</span>
          <h1 className="contact-hero__title">We'd Love to Hear From You</h1>
          <p className="contact-hero__sub">Whether it's a style question, a custom order, or a partnership enquiry — our team is ready to help.</p>
        </div>
      </section>

      {/* ---- CONTACT LAYOUT ---- */}
      <div className="container">
        <div className="contact-layout">
          {/* Info */}
          <div className="contact-info">
            <h2 className="contact-info__title">Contact Information</h2>
            <p className="contact-info__sub">Reach out through any of the channels below or fill in the form.</p>

            <div className="contact-info__cards">
              <div className="contact-info-card">
                <div className="contact-info-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-info-card__label">Visit Us</div>
                  <div className="contact-info-card__val">12 Wole Aribiike Avenue,<br />Victoria Island, Lagos, Nigeria</div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.03a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15.5l.19 1.42z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-info-card__label">Call Us</div>
                  <div className="contact-info-card__val">+234 801 234 5678<br />+234 802 345 6789</div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-info-card__label">Email Us</div>
                  <div className="contact-info-card__val">hello@velour.ng<br />support@velour.ng</div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-info-card__label">Opening Hours</div>
                  <div className="contact-info-card__val">Mon – Sat: 9:00 AM – 7:00 PM<br />Sunday: 12:00 PM – 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <h2 className="contact-form__title">Send Us a Message</h2>
            <p className="contact-form__sub">Fill in the form below and we will get back to you within 24 hours.</p>

            {submitted ? (
              <div className="form-success">
                <div className="form-success__icon">✅</div>
                <div className="form-success__title">Message Sent Successfully!</div>
                <p className="form-success__sub">Thank you for reaching out. Our team will respond within 24 hours.</p>
                <button className="btn btn--outline btn--sm" style={{ marginTop: '20px' }} onClick={reset}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} noValidate>
                <input type="hidden" name="form-name" value="contact" />
                {errors.submit && <p className="form-error" role="alert">{errors.submit}</p>}
                <div className="contact-form__row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="e.g. Oluwatetisimi Longe"
                      value={fields.fullName}
                      onChange={handleChange}
                      className={errors.fullName ? 'error' : ''}
                    />
                    {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={fields.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Custom Tailoring Enquiry"
                    value={fields.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you…"
                    value={fields.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn--primary form-submit"
                  disabled={submitting}
                  style={{ justifyContent: 'center' }}
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ---- FAQ ---- */}
      <section className="section section--grey">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section__header">
            <span className="section__eyebrow">FAQ</span>
            <h2 className="section__title">Frequently Asked Questions</h2>
            <div className="gold-divider" />
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className={`faq-question${openFaq === i ? ' open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <ChevronDownSvg />
                </button>
                {openFaq === i && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
