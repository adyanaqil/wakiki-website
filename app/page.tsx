'use client'

import { useEffect, useState } from 'react'

const projects = [
  {
    number: '01',
    name: 'Dimsum Qoqom',
    types: ['BRANDING', 'CREATIVE DIRECTION', 'COMPANY PROFILE'],
    image: '/images/dimsum.jpg',
  },
  {
    number: '02',
    name: 'Sushi Catering',
    types: ['BRANDING', 'CAMPAIGN', 'TVC'],
    image: '/images/sushi.jpg',
  },
  {
    number: '03',
    name: 'A3 Golf Gallery',
    types: ['BRANDING', 'CREATIVE DIRECTION'],
    image: '/images/golf.jpg',
  },
]

const services = [
  {
    num: '01',
    title: 'BRAND',
    items: ['STRATEGY', 'POSITIONING', 'IDENTITY'],
  },
  {
    num: '02',
    title: 'CREATE',
    items: ['CAMPAIGN', 'CREATIVE DIRECTION', 'ART DIRECTION'],
  },
  {
    num: '03',
    title: 'PRODUCE',
    items: ['TVC', 'VIDEO', 'PHOTOGRAPHY', 'CONTENT'],
  },
  {
    num: '04',
    title: 'CONSULT',
    items: ['BRAND DEVELOPMENT', 'COMMUNICATION', 'CREATIVE SOLUTION'],
  },
]

const mediaClients = [
  { name: 'VICE', sub: 'AUSTRALIA', isVice: true },
  { name: 'NEW NARRATIVE', sub: 'SINGAPORE' },
  { name: 'SOUTH EAST', sub: 'GLOBAL POST', isStacked: true },
  { name: 'TRAVEL WIRE ASIA', sub: '' },
]

const brandClients = [
  {
    name: 'Gubernur Sumatera Utara',
    icon: (
      <svg className="client-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L4 7v6c0 5 8 9 8 9s8-4 8-9V7l-8-5z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
  },
  {
    name: 'PLN\nUPDL Tuntungan',
    icon: (
      <svg className="client-svg-icon pln-box" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="2" fill="#555" />
        <path d="M13 4L7 13h5l-2 7 8-10h-5l2-6z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'Rumah Sakit\nUUM Haji',
    icon: (
      <svg className="client-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a7 7 0 1 1-7.54-7.54C12.92 3.04 12.46 3 12 3z" />
        <path d="M12 8v4m-2-2h4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'RKP\nLogistic',
    icon: null,
    isBoldText: true,
  },
  {
    name: 'Rumah Makan\nGaruda',
    icon: (
      <svg className="client-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 14s2-3 4-3 4 3 4 3M12 8v3" />
      </svg>
    ),
  },
]

const journeySteps = [
  { title: 'DESIGN', desc: 'VISUAL COMMUNICATION' },
  { title: 'PHOTO', desc: 'REAL STORIES' },
  { title: 'FILM', desc: 'MOVING IDEAS' },
  { title: 'BRANDS', desc: 'LASTING IMPACT' },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site-wrapper">
      {/* HEADER / NAVIGATION */}
      <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-left">
          <a className="wordmark" href="#top">
            WAKIKI<span>®</span>
          </a>
        </div>

        <nav className={`nav-center ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>WORK</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
        </nav>

        <div className="nav-right">
          <div className="nav-meta">
            <span>BRANDING</span>
            <span>CREATIVE DIRECTION</span>
            <span>PRODUCTION</span>
          </div>
          <button
            className="nav-circle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="circle-dot" />
          </button>
        </div>
      </header>

      <main>
        {/* (01) HERO SECTION */}
        <section id="top" className="hero-section">
          <div className="hero-left">
            <div className="section-index">(01)</div>
            <h1 className="hero-headline">
              CREATIVE PARTNER<br />
              FOR A BRIGHTER<br />
              BRAND TOMORROW.
            </h1>
            <div className="hero-short-line" />
            <div className="hero-cta-group">
              <a className="circle-arrow-btn" href="#work">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a className="hero-explore-text" href="#work">
                EXPLORE<br />
                MY WORK
              </a>
            </div>
          </div>

          <div className="hero-center-3d">
            <div className="embossed-title">
              <div className="embossed-row row-the">THE</div>
              <div className="embossed-row row-new">NEW</div>
              <div className="embossed-row row-design">DESIGN</div>
              <div className="embossed-row row-age">AGE</div>
            </div>
          </div>

          <div className="hero-right-meta">
            <div className="meta-divider" />
            <div className="meta-text">
              <span>MEDAN</span>
              <span>JAKARTA</span>
              <span>INDONESIA</span>
            </div>
          </div>
        </section>

        {/* (02) SELECTED WORK */}
        <section id="work" className="section-block work-section">
          <div className="section-header">
            <div className="header-left">
              <span className="section-tag">(02)</span>
              <h2 className="section-title">SELECTED WORK</h2>
            </div>
            <div className="header-right">
              <a href="#contact" className="view-all-link">
                VIEW ALL <span className="header-circle-icon" />
              </a>
            </div>
          </div>

          <div className="work-grid">
            {projects.map((project) => (
              <article className="work-card" key={project.number}>
                <div className="card-media">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="card-img"
                      onError={(e) => {
                        // Fallback styling if image fails
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : null}
                  <div className="card-media-fallback" />
                </div>
                <div className="card-overlay">
                  <h3 className="card-title">{project.name}</h3>
                  <div className="card-types">
                    {project.types.map((t, idx) => (
                      <span key={idx}>{t}</span>
                    ))}
                  </div>
                  <div className="card-number-row">
                    <span className="card-num">{project.number}</span>
                    <span className="card-num-line" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* (03) WHAT I DO */}
        <section id="about" className="section-block services-section">
          <div className="section-header">
            <div className="header-left">
              <span className="section-tag">(03)</span>
              <h2 className="section-title">WHAT I DO</h2>
            </div>
            <div className="header-right">
              <span className="section-subtitle">FROM IDEA TO EXECUTION</span>
            </div>
          </div>

          <div className="services-grid">
            {services.map((srv) => (
              <div className="service-col" key={srv.num}>
                <span className="service-index">{srv.num}</span>
                <h3 className="service-title">{srv.title}</h3>
                <ul className="service-list">
                  {srv.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* (04) TRUSTED BY */}
        <section className="section-block trusted-section">
          <div className="section-header">
            <div className="header-left">
              <span className="section-tag">(04)</span>
              <h2 className="section-title">TRUSTED BY</h2>
            </div>
            <div className="header-right">
              <span className="header-circle-icon" />
            </div>
          </div>

          {/* Row 1: Editorial & International Publications */}
          <div className="trusted-row media-row">
            {mediaClients.map((client, idx) => (
              <div className="media-logo-item" key={idx}>
                {client.isVice ? (
                  <div className="vice-logo">
                    <span className="vice-wordmark">VICE</span>
                    <small className="client-sub">{client.sub}</small>
                  </div>
                ) : client.isStacked ? (
                  <div className="stacked-logo">
                    <strong className="client-main-name">SOUTH EAST</strong>
                    <span className="client-sub-name">GLOBAL POST</span>
                  </div>
                ) : (
                  <div className="standard-logo">
                    <strong className="client-main-name">{client.name}</strong>
                    {client.sub && <small className="client-sub">{client.sub}</small>}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Row 2: Corporate & Institution Clients */}
          <div className="trusted-row brand-row">
            {brandClients.map((client, idx) => (
              <div className="brand-logo-item" key={idx}>
                {client.icon ? <div className="brand-icon-wrap">{client.icon}</div> : null}
                <div className={`brand-name-wrap ${client.isBoldText ? 'bold-rkp' : ''}`}>
                  {client.name.split('\n').map((line, lIdx) => (
                    <span key={lIdx}>{line}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* (05) THE JOURNEY */}
        <section className="section-block journey-section">
          <div className="section-header">
            <div className="header-left">
              <span className="section-tag">(05)</span>
              <h2 className="section-title">THE JOURNEY</h2>
            </div>
            <div className="header-right">
              <span className="section-subtitle">EXPERIENCE SHAPES PERSPECTIVE</span>
            </div>
          </div>

          <div className="journey-grid">
            {journeySteps.map((step, idx) => (
              <div className="journey-col" key={step.title}>
                <div className="journey-title-wrap">
                  <h3 className="journey-step-title">{step.title}</h3>
                  {idx < journeySteps.length - 1 && <span className="journey-connector" />}
                </div>
                <p className="journey-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* (06) CONTACT / CTA BANNER */}
        <section id="contact" className="contact-banner-section">
          <div className="contact-bg-wrapper">
            <img
              src="/images/contact.jpg"
              alt="Atmospheric light"
              className="contact-bg-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="contact-bg-overlay" />
          </div>

          <div className="contact-content-inner">
            <div className="contact-left">
              <span className="contact-index">(06)</span>
              <h2 className="contact-headline">
                LET’S BUILD<br />
                SOMETHING<br />
                <span className="highlight-gray">MEANINGFUL.</span>
              </h2>
              <div className="contact-short-line" />
              <div className="contact-btn-group">
                <a className="circle-arrow-btn light" href="mailto:hello@wakiki.id">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a className="contact-cta-text" href="mailto:hello@wakiki.id">
                  GET IN TOUCH
                </a>
              </div>
            </div>

            <div className="contact-right-meta">
              <div className="meta-divider light" />
              <div className="meta-text light">
                <span>IDEAS</span>
                <span>VISUALS</span>
                <span>STORIES</span>
                <span>BRANDS</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-left">
          <a className="wordmark" href="#top">
            WAKIKI<span>®</span>
          </a>
          <span className="footer-copy">© 2026 Wakiki. All rights reserved.</span>
        </div>
        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">BEHANCE</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="https://wa.me/6280000000000" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
        </div>
      </footer>
    </div>
  )
}
