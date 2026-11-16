import { MissionIcon, VisionIcon, ObjectivesIcon } from '../components/FashionIcons.jsx'

const timeline = [
  { year: '2016', title: 'Founded in Lagos', text: 'VELOUR was born from a passion for celebrating African fashion heritage. Founded by Amara Osei-Bonsu in a small atelier in Lekki, Lagos.' },
  { year: '2018', title: 'First Major Collection', text: 'Our debut collection "Roots & Threads" received national acclaim, blending adire dyeing techniques with modern silhouettes.' },
  { year: '2020', title: 'Online Expansion', text: 'Launched our e-commerce platform, bringing Nigerian luxury fashion to customers across Africa and the diaspora.' },
  { year: '2022', title: 'Custom Tailoring Studio', text: 'Opened our flagship bespoke tailoring studio in Victoria Island, offering fully custom garments for discerning clients.' },
  { year: '2024', title: 'Pan-African Vision', text: 'Expanded operations to Accra and Nairobi, cementing VELOUR\'s position as a truly pan-African luxury fashion brand.' },
]

const values = [
  { title: 'Authenticity', desc: 'Every piece celebrates genuine African craft traditions.' },
  { title: 'Excellence', desc: 'We settle for nothing less than the finest quality in all we do.' },
  { title: 'Innovation', desc: 'Blending heritage with contemporary design for the modern African.' },
  { title: 'Sustainability', desc: 'Responsibly sourced fabrics and ethical production practices.' },
  { title: 'Community', desc: 'Supporting local artisans, weavers, and dye-workers across Nigeria.' },
  { title: 'Inclusivity', desc: 'Fashion for every body — our sizes range from XS to 4XL.' },
]

export default function About() {
  return (
    <>
      {/* ---- ABOUT HERO ---- */}
      <section className="about-hero">
        <div className="container">
          <p className="about-hero__eyebrow">Our Story</p>
          <h1 className="about-hero__title">Born in Lagos,<br />Made for the World</h1>
          <p className="about-hero__sub">
            VELOUR is more than a fashion brand. We are a celebration of African identity, craftsmanship, and the timeless elegance of Nigerian style.
          </p>
        </div>
      </section>

      {/* ---- BRAND STORY ---- */}
      <section className="section">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="VELOUR Atelier"
                className="about-story__img"
              />
            </div>
            <div>
              <p className="about-story__eyebrow">Our Background</p>
              <h2 className="about-story__title">A Decade of Crafting Nigerian Luxury</h2>
              <p className="about-story__text">
                VELOUR was founded in 2016 by Amara Osei-Bonsu, a Lagos-born fashion designer with a vision to position Nigerian fashion on the global luxury stage. What began as a small atelier in Lekki has grown into one of Nigeria's most celebrated fashion houses.
              </p>
              <p className="about-story__text">
                Our designs draw deeply from Nigeria's rich textile heritage — adire, aso-oke, kente, and ankara — reimagined through a contemporary lens that speaks to the modern African. Every piece is a conversation between past and present.
              </p>
              <p className="about-story__text">
                Today, VELOUR serves thousands of customers across Nigeria and the African diaspora, offering ready-to-wear collections, accessories, footwear, and bespoke tailoring services from our Victoria Island flagship studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- MISSION / VISION / OBJECTIVES ---- */}
      <section className="section section--grey">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Our Direction</span>
            <h2 className="section__title">Mission, Vision & Objectives</h2>
            <div className="gold-divider" />
          </div>
          <div className="mvv-grid">
            <div className="mvv-card">
              <MissionIcon />
              <div className="mvv-card__title">Our Mission</div>
              <p className="mvv-card__text">
                To celebrate African fashion heritage by creating premium, handcrafted clothing and accessories that empower individuals to express their identity with confidence and elegance.
              </p>
            </div>
            <div className="mvv-card">
              <VisionIcon />
              <div className="mvv-card__title">Our Vision</div>
              <p className="mvv-card__text">
                To become Africa's most admired luxury fashion brand — a name synonymous with craftsmanship, cultural pride, and contemporary sophistication recognised worldwide.
              </p>
            </div>
            <div className="mvv-card">
              <ObjectivesIcon />
              <div className="mvv-card__title">Our Objectives</div>
              <p className="mvv-card__text">
                Promote Nigerian artisans and textile traditions. Deliver uncompromising quality in every garment. Build a sustainable, inclusive fashion ecosystem across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- TIMELINE ---- */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <span className="section__eyebrow">Our Journey</span>
              <h2 className="section__title" style={{ textAlign: 'left', marginBottom: '40px' }}>Milestones That Shaped Us</h2>
              <div className="timeline">
                {timeline.map(item => (
                  <div key={item.year} className="timeline-item">
                    <div className="timeline-item__year">{item.year}</div>
                    <div className="timeline-item__title">{item.title}</div>
                    <p className="timeline-item__text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=700&q=80"
                alt="VELOUR Fashion Journey"
                style={{ borderRadius: '20px', width: '100%', height: '600px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- CORE VALUES ---- */}
      <section className="section section--grey">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">What Drives Us</span>
            <h2 className="section__title">Our Core Values</h2>
            <div className="gold-divider" />
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <div style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: 'var(--clr-gold)', flexShrink: 0, marginTop: '5px'
                }} />
                <div className="value-card__text">
                  <div className="value-card__title">{v.title}</div>
                  <div className="value-card__desc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
