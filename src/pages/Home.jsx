import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import {
  WomensIcon, MensIcon, AccessoriesIcon, FootwearIcon, TailoringIcon, LuxuryIcon
} from '../components/FashionIcons.jsx'

const testimonials = [
  { id: 1, name: 'Adaeze Okonkwo', location: 'Lagos, Nigeria', rating: 5, text: 'VELOUR has completely transformed my wardrobe. The quality is unmatched and the fabrics are absolutely luxurious. I get compliments everywhere I go!' },
  { id: 2, name: 'Chukwuemeka Eze', location: 'Abuja, Nigeria', rating: 5, text: 'Found my perfect agbada set for my traditional wedding. The craftsmanship is superb and delivery was prompt. Highly recommend VELOUR!' },
  { id: 3, name: 'Folake Adeleke', location: 'Port Harcourt, Nigeria', rating: 5, text: 'Shopping at VELOUR feels like a true luxury experience. The adire wrap dress I ordered is a masterpiece. Worth every naira!' },
]

const categories = [
  { label: 'Women\'s Wear', count: '48 pieces', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80', filter: 'Women' },
  { label: 'Men\'s Fashion', count: '36 pieces', img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80', filter: 'Men' },
  { label: 'Accessories', count: '24 pieces', img: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600&q=80', filter: 'Accessories' },
  { label: 'Footwear', count: '18 pieces', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80', filter: 'Footwear' },
]

const services = [
  { icon: <WomensIcon />, title: 'Women\'s Wear', desc: 'From elegant adire gowns to contemporary co-ord sets — our women\'s collection celebrates the modern African woman.' },
  { icon: <MensIcon />, title: 'Men\'s Fashion', desc: 'Sharp blazers, agbada sets, and relaxed linen shirts. Dress with intention, powered by Nigerian craftsmanship.' },
  { icon: <AccessoriesIcon />, title: 'Accessories', desc: 'Complete your look with curated bags, jewellery, and statement pieces that reflect your unique style.' },
  { icon: <FootwearIcon />, title: 'Footwear', desc: 'Artisan-crafted shoes and sandals — where comfort meets elegance for every occasion.' },
  { icon: <TailoringIcon />, title: 'Custom Tailoring', desc: 'Bring your vision to life. Our skilled tailors craft bespoke garments tailored to your exact measurements.' },
  { icon: <LuxuryIcon />, title: 'Luxury Collections', desc: 'Exclusive, limited-edition pieces for those who demand the very finest in Nigerian fashion couture.' },
]

const marqueeItems = ['New Arrivals', '★', 'Free Shipping Over ₦50,000', '★', 'Custom Tailoring Available', '★', 'Premium Nigerian Fashion', '★', 'Shop the New Season', '★']

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  const featured = products.filter(p => p.featured)

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* ---- HERO ---- */}
      <section className="hero">
        <div className="container" style={{ display: 'contents' }}>
          <div className="hero__content" style={{
            paddingLeft: '24px',
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease'
          }}>
            <span className="hero__eyebrow">Nigeria's Premier Fashion Destination</span>
            <h1 className="hero__title">
              Wear Your<br /><em>Story</em><br />Beautifully
            </h1>
            <p className="hero__desc">
              Welcome to VELOUR — where African heritage meets contemporary luxury. Discover handcrafted fashion that tells your story with every thread.
            </p>
            <div className="hero__cta">
              <Link to="/products" className="btn btn--primary">Shop Collections</Link>
              <Link to="/about" className="btn btn--outline">Our Story</Link>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat-num">500+</div>
                <div className="hero__stat-label">Premium Pieces</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-num">12k+</div>
                <div className="hero__stat-label">Happy Clients</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-num">8+</div>
                <div className="hero__stat-label">Years of Style</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027614b2?w=900&q=80"
            alt="VELOUR Fashion"
            className="hero__img"
          />
          <div className="hero__img-overlay" />
          <div className="hero__badge">
            <div className="hero__badge-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="hero__badge-text">
              <strong>Premium Quality</strong>
              <span>100% Authentic Nigerian Craft</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- MARQUEE ---- */}
      <div className="marquee-band">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={item === '★' ? 'gold' : ''}>{item}</span>
          ))}
        </div>
      </div>

      {/* ---- CATEGORIES ---- */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Browse By Category</span>
            <h2 className="section__title">Shop Our Collections</h2>
            <div className="gold-divider" />
          </div>
          <div className="categories-grid">
            {categories.map(cat => (
              <Link to={`/products?category=${encodeURIComponent(cat.filter)}`} key={cat.label} className="category-card">
                <img src={cat.img} alt={cat.label} className="category-card__img" loading="lazy" />
                <div className="category-card__overlay" />
                <div className="category-card__content">
                  <div className="category-card__label">{cat.label}</div>
                  <div className="category-card__count">{cat.count}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- FEATURED PRODUCTS ---- */}
      <section className="section section--grey">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Editor's Picks</span>
            <h2 className="section__title">Featured Pieces</h2>
            <p className="section__subtitle">Hand-selected by our style team — the season's must-have pieces.</p>
            <div className="gold-divider" />
          </div>
          <div className="featured-grid">
            {featured.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/products" className="btn btn--outline">View All Collections</Link>
          </div>
        </div>
      </section>

      {/* ---- SERVICES / CATEGORIES ICONS ---- */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">What We Offer</span>
            <h2 className="section__title">Our Fashion Services</h2>
            <p className="section__subtitle">From ready-to-wear to bespoke couture — we have everything you need.</p>
            <div className="gold-divider" />
          </div>
          <div className="services-grid">
            {services.map(s => (
              <div className="service-card" key={s.title}>
                {s.icon}
                <div className="service-card__title">{s.title}</div>
                <p className="service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- TESTIMONIALS ---- */}
      <section className="section section--grey">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Client Stories</span>
            <h2 className="section__title">What Our Clients Say</h2>
            <div className="gold-divider" />
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA BANNER ---- */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <p className="cta-banner__eyebrow">Limited Time Offer</p>
            <h2 className="cta-banner__title">New Season, New You</h2>
            <p className="cta-banner__sub">Free shipping on all orders above ₦50,000. Shop the new arrivals now.</p>
            <div className="cta-banner__actions">
              <Link to="/products" className="btn btn--gold">Shop New Arrivals</Link>
              <Link to="/contact" className="btn btn--outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
