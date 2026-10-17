'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionHeader from './components/SectionHeader'
import ProjectRow from './components/ProjectRow'
import {
  brandingProjects,
  services,
  filmProjects,
  photographyProjects,
  earlyCareerProjects,
  journeySteps,
  approachPillars,
} from './data'
import './v2.css'

export default function V2Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="wakiki-v2-container">
      {/* Top Version Indicator Bar */}
      <aside className="v2-version-bar" aria-label="Version Switcher">
        <span>WAKIKI — V2 (Text-Based Editorial Portfolio)</span>
        <Link href="/" title="Switch to Version 1">
          ← View Version 1 (Visual Cards)
        </Link>
      </aside>

      {/* Navigation */}
      <header className="v2-nav">
        <Link href="#top" className="v2-nav-logo" aria-label="WAKIKI Home">
          WAKIKI<span>®</span>
        </Link>

        <nav className={`v2-nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main Navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>
            WORK
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </a>
        </nav>

        <div className="v2-nav-aside">
          <div className="v2-nav-tagline">
            Branding · Creative Direction
            <br />
            Production
          </div>
          <button
            className="v2-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <main>
        {/* =================================================================
            01. HERO SECTION
            ================================================================= */}
        <section id="top" className="v2-hero" aria-label="Introduction">
          <div className="v2-hero-top">
            <div className="v2-hero-copy">
              <span className="v2-hero-tag">(01) — INTRO</span>
              <p className="v2-hero-desc">
                Building brands through strategy, creativity &amp; direction.
              </p>
              <div className="v2-hero-line" />
              <a href="#work" className="v2-hero-cta">
                EXPLORE WORK <span>→</span>
              </a>
            </div>

            <div className="v2-hero-display" aria-label="Where Purpose Becomes Perception">
              <h1 className="v2-hero-title">
                <span>WHERE</span>
                <span>PURPOSE</span>
                <span>BECOMES</span>
                <span>PERCEPTION</span>
              </h1>
            </div>
          </div>

          <div className="v2-hero-bottom">
            <div className="v2-hero-meta-group">
              <div className="v2-meta-item">
                <span className="v2-meta-label">Positioning</span>
                <span className="v2-meta-val">Branding · Creative Direction · Production</span>
              </div>
            </div>

            <div className="v2-meta-item">
              <span className="v2-meta-label">Territory</span>
              <span className="v2-meta-val">Medan · Jakarta · Indonesia</span>
            </div>
          </div>
        </section>

        {/* =================================================================
            02. SELECTED WORK (01 — Branding & Creative Direction)
            ================================================================= */}
        <section id="work" className="v2-section" aria-labelledby="heading-work">
          <SectionHeader
            index="02"
            title="SELECTED WORK"
            aside="01 — BRANDING & CREATIVE DIRECTION"
            subtitle="A selection of brands, campaigns and creative projects."
          />

          <div className="v2-category-label">
            <h3>01 — Branding &amp; Creative Direction</h3>
            <span className="v2-category-count">{brandingProjects.length} Selected Projects</span>
          </div>

          <div className="v2-project-table" role="feed" aria-label="Branding Projects">
            {brandingProjects.map((project) => (
              <ProjectRow key={`branding-${project.number}`} project={project} />
            ))}
          </div>
        </section>

        {/* =================================================================
            03. WHAT I DO
            ================================================================= */}
        <section id="about" className="v2-section" aria-labelledby="heading-services">
          <SectionHeader index="03" title="WHAT I DO" aside="CAPABILITIES & SERVICES" />

          <h2 id="heading-services" className="v2-services-headline">
            FROM IDEA TO EXECUTION.
          </h2>

          <div className="v2-services-grid">
            {services.map((service) => (
              <div className="v2-service-col" key={service.number}>
                <span className="v2-service-num">{service.number}</span>
                <h3 className="v2-service-title">{service.title}</h3>
                <ul className="v2-service-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================================
            04. SELECTED EXPERIENCE (02 — Film & Production)
            ================================================================= */}
        <section className="v2-section" aria-labelledby="heading-experience">
          <SectionHeader
            index="04"
            title="SELECTED EXPERIENCE"
            aside="02 — FILM & PRODUCTION"
            subtitle="Commercial television, company profile films, and moving image direction."
          />

          <div className="v2-category-label">
            <h3 id="heading-experience">02 — Film &amp; Production</h3>
            <span className="v2-category-count">{filmProjects.length} Directorial Works</span>
          </div>

          <div className="v2-project-table" role="feed" aria-label="Film and Production Projects">
            {filmProjects.map((project) => (
              <ProjectRow key={`film-${project.number}`} project={project} />
            ))}
          </div>
        </section>

        {/* =================================================================
            05. PHOTOGRAPHY EXPERIENCE (03 — Photography)
            ================================================================= */}
        <section className="v2-section" aria-labelledby="heading-photography">
          <SectionHeader
            index="05"
            title="PHOTOGRAPHY EXPERIENCE"
            aside="03 — PHOTOGRAPHY"
            subtitle="Editorial assignments, documentary stories, and freelance photography."
          />

          <div className="v2-category-label">
            <h3 id="heading-photography">03 — Photography</h3>
            <span className="v2-category-count">{photographyProjects.length} Publications</span>
          </div>

          <div className="v2-project-table" role="feed" aria-label="Photography Experience">
            {photographyProjects.map((project) => (
              <ProjectRow key={`photo-${project.number}`} project={project} />
            ))}
          </div>
        </section>

        {/* =================================================================
            06. EARLY CAREER (04 — Early Career)
            ================================================================= */}
        <section className="v2-section" aria-labelledby="heading-early-career">
          <SectionHeader
            index="06"
            title="EARLY CAREER"
            aside="04 — EARLY CAREER"
            subtitle="Foundational agency experience and formative graphic design roles."
          />

          <div className="v2-category-label">
            <h3 id="heading-early-career">04 — Early Career</h3>
            <span className="v2-category-count">{earlyCareerProjects.length} Milestones</span>
          </div>

          <div className="v2-project-table" role="feed" aria-label="Early Career Milestones">
            {earlyCareerProjects.map((project) => (
              <ProjectRow key={`early-${project.number}`} project={project} />
            ))}
          </div>
        </section>

        {/* =================================================================
            07. THE JOURNEY
            ================================================================= */}
        <section className="v2-section" aria-labelledby="heading-journey">
          <SectionHeader
            index="07"
            title="THE JOURNEY"
            aside="EXPERIENCE SHAPES PERSPECTIVE"
            subtitle="The evolution from visual design and photography to film production and brand building."
          />

          <div className="v2-journey-flow">
            {journeySteps.map((step, idx) => (
              <div className="v2-journey-card" key={step.stage}>
                <div className="v2-journey-header">
                  <h3 className="v2-journey-stage">{step.stage}</h3>
                  {idx < journeySteps.length - 1 && <span className="v2-journey-arrow" />}
                </div>
                <p className="v2-journey-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================================
            08. APPROACH
            ================================================================= */}
        <section className="v2-section" aria-labelledby="heading-approach">
          <SectionHeader index="08" title="APPROACH" aside="CREATIVE PHILOSOPHY" />

          <div className="v2-approach-hero">
            <h2 id="heading-approach" className="v2-approach-headline">
              GOOD DESIGN IS NOT ENOUGH.
            </h2>
          </div>

          <div className="v2-approach-grid">
            {approachPillars.map((pillar) => (
              <div className="v2-approach-col" key={pillar.number}>
                <span className="v2-approach-num">{pillar.number}</span>
                <h3 className="v2-approach-pillar">{pillar.pillar}</h3>
                <p className="v2-approach-prompt">{pillar.prompt}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================================
            09. FINAL CONTACT CTA
            ================================================================= */}
        <section id="contact" className="v2-section v2-contact-section" aria-labelledby="heading-contact">
          <SectionHeader index="09" title="CONTACT" aside="GET IN TOUCH" />

          <div className="v2-contact-grid">
            <div className="v2-contact-copy-col">
              <h2 id="heading-contact" className="v2-contact-headline">
                LET’S BUILD
                <br />
                SOMETHING
                <br />
                MEANINGFUL.
              </h2>
              <p className="v2-contact-sub">
                Have a brand, idea or project that needs a new direction?
              </p>
              <a href="mailto:hello@wakiki.id" className="v2-contact-cta-btn">
                GET IN TOUCH <span>→</span>
              </a>
            </div>

            <div className="v2-contact-info-col">
              <div className="v2-contact-channel">
                <span className="v2-channel-label">Direct Communication</span>
                <a href="mailto:hello@wakiki.id" className="v2-channel-val">
                  hello@wakiki.id
                </a>
              </div>

              <div className="v2-contact-channel">
                <span className="v2-channel-label">Studio Base</span>
                <span className="v2-channel-val">Medan · Jakarta · Indonesia</span>
              </div>

              <div className="v2-contact-channel">
                <span className="v2-channel-label">Inquiry Line</span>
                <a
                  href="https://wa.me/6280000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-channel-val"
                >
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =================================================================
          FOOTER
          ================================================================= */}
      <footer className="v2-footer">
        <div className="v2-footer-left">
          <Link href="#top" className="v2-nav-logo" aria-label="WAKIKI Home">
            WAKIKI<span>®</span>
          </Link>
          <span className="v2-footer-copy">© 2026 Wakiki. All rights reserved.</span>
        </div>

        <div className="v2-footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            INSTAGRAM
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
            BEHANCE
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
          <a href="https://wa.me/6280000000000" target="_blank" rel="noopener noreferrer">
            WHATSAPP
          </a>
        </div>
      </footer>
    </div>
  )
}
