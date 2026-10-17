'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { projects } from './data/projects'


const services = [
  {
    num: '01',
    title: 'Brand',
    items: ['Strategy', 'Positioning', 'Identity'],
  },
  {
    num: '02',
    title: 'Create',
    items: ['Campaign', 'Creative direction', 'Art direction'],
  },
  {
    num: '03',
    title: 'Produce',
    items: ['TVC', 'Video', 'Photography', 'Content'],
  },
  {
    num: '04',
    title: 'Consult',
    items: ['Brand development', 'Communication', 'Creative solution'],
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
  { title: 'Design', desc: 'Visual communication' },
  { title: 'Photo', desc: 'Real stories' },
  { title: 'Film', desc: 'Moving ideas' },
  { title: 'Brands', desc: 'Lasting impact' },
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
      <div style={{ background: '#141413', color: '#eae8e4', padding: '8px 4.5vw', fontSize: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        <span>WAKIKI — Versi 1 (Visual Cards)</span>
        <a href="/v2" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
          Lihat Versi 2 (Text-Based Editorial) →
        </a>
      </div>
      {/* HEADER / NAVIGATION */}
      <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-left">
          <a className="wordmark" href="#top">
            WAKIKI<span>®</span>
          </a>
        </div>

        <nav className={`nav-center ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <div className="nav-right">
          <div className="nav-meta">
            <span>Branding</span>
            <span>Creative direction</span>
            <span>Production</span>
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
        {/* HERO SECTION */}
        <section id="top" className="hero-section">
          <div className="hero-left">
            <h1 className="hero-headline">
              Creative partner<br />
              for a brighter<br />
              brand tomorrow.
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
                Explore<br />
                my work
              </a>
            </div>
          </div>

          <div className="hero-center-3d">
            <div className="embossed-title">
              <div className="embossed-row row-where">WHERE</div>
              <div className="embossed-row row-purpose">PURPOSE</div>
              <div className="embossed-row row-becomes">BECOMES</div>
              <div className="embossed-row row-perception">PERCEPTION</div>
            </div>
          </div>

          <div className="hero-right-meta">
            <div className="meta-divider" />
            <div className="meta-text">
              <span>Medan</span>
              <span>Jakarta</span>
              <span>Indonesia</span>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section id="work" className="section-block work-section">
          <div className="section-header">
            <div className="header-left">
              <h2 className="section-title">Selected work</h2>
            </div>
            <div className="header-right">
              <a href="#contact" className="view-all-link">
                View all <span className="header-circle-icon" />
              </a>
            </div>
          </div>

          <div className="work-grid">
            {projects.map((project) => (
              <Link
                href={`/work/${project.slug}`}
                className="work-card"
                key={project.number}
                aria-label={`View project: ${project.name}`}
              >
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
                  <div className="card-title-row">
                    <h3 className="card-title">{project.name}</h3>
                    <span className="card-arrow-icon" aria-hidden="true">↗</span>
                  </div>
                  <div className="card-types">
                    {project.types.map((t, idx) => (
                      <span key={idx}>{t}</span>
                    ))}
                  </div>
                  <div className="card-number-row">
                    <span className="card-num">{project.number}</span>
                    <span className="card-num-line" />
                    <span className="card-view-text">View project</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* WHAT I DO */}
        <section id="about" className="section-block services-section">
          <div className="section-header">
            <div className="header-left">
              <h2 className="section-title">What I do</h2>
            </div>
            <div className="header-right">
              <span className="section-subtitle">From idea to execution</span>
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

        {/* TRUSTED BY */}
        <section className="section-block trusted-section">
          <div className="section-header">
            <div className="header-left">
              <h2 className="section-title">Trusted by</h2>
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

        {/* THE JOURNEY */}
        <section className="section-block journey-section">
          <div className="section-header">
            <div className="header-left">
              <h2 className="section-title">The journey</h2>
            </div>
            <div className="header-right">
              <span className="section-subtitle">Experience shapes perspective</span>
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

        {/* CONTACT / CTA BANNER */}
        <section id="contact" className="contact-banner-section">
          <div className="contact-bg-wrapper">
            <img
              src="/images/banner.png"
              alt="Liquid chrome sculpture"
              className="contact-bg-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="contact-bg-overlay" />
          </div>

          <div className="contact-content-inner">
            <div className="contact-left">
              <h2 className="contact-headline">
                Let’s build<br />
                something<br />
                <span className="highlight-gray">meaningful.</span>
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
                  Get in touch
                </a>
              </div>
            </div>

            <div className="contact-right-meta">
              <div className="meta-divider light" />
              <div className="meta-text light">
                <span>Ideas</span>
                <span>Visuals</span>
                <span>Stories</span>
                <span>Brands</span>
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
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://wa.me/6280000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </footer>
    </div>
  )
}
