import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllProjects, getProjectBySlug, getAdjacentProjects } from '../../data/projects'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const allProjects = getAllProjects()
  return allProjects.map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found — WAKIKI®',
    }
  }

  return {
    title: `${project.name} — WAKIKI® Selected Work`,
    description: project.summary,
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { prev, next } = getAdjacentProjects(slug)

  return (
    <div className="site-wrapper project-page-wrapper">
      {/* HEADER / NAVIGATION */}
      <header className="site-nav is-scrolled">
        <div className="nav-left">
          <Link className="wordmark" href="/">
            WAKIKI<span>®</span>
          </Link>
        </div>

        <nav className="nav-center">
          <Link href="/#work" className="nav-back-link">
            ← BACK TO SELECTED WORK
          </Link>
        </nav>

        <div className="nav-right">
          <div className="nav-meta">
            <span>SELECTED WORK</span>
            <span>WAKIKI®</span>
          </div>
          <Link href="/#work" className="nav-circle-btn" aria-label="Back to selected work">
            <span className="circle-dot" style={{ background: '#222' }} />
          </Link>
        </div>
      </header>

      <main className="project-main-content">
        {/* HERO TITLE SECTION */}
        <section className="project-hero-section">
          <div className="project-breadcrumb">
            <Link href="/" className="crumb-link">HOME</Link>
            <span className="crumb-sep">/</span>
            <Link href="/#work" className="crumb-link">SELECTED WORK</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">{project.name.toUpperCase()}</span>
          </div>

          <div className="project-hero-top-row">
            <div className="project-title-area">
              <h1 className="project-hero-title">{project.name}</h1>
            </div>
            <div className="project-category-tag">
              <span>{project.category}</span>
              <span className="project-year-pill">{project.year}</span>
            </div>
          </div>

          <p className="project-lead-tagline">{project.tagline}</p>
        </section>

        {/* FEATURED MEDIA / GAMBAR SECTION */}
        <section className="project-media-section">
          <div className="project-image-container">
            <img
              src={project.image}
              alt={project.name}
              className="project-hero-image"
            />
            <div className="project-image-gradient" />
            <div className="project-image-meta">
              <span className="project-image-caption">
                {project.name} — Creative Direction &amp; Visual Narrative
              </span>
              <span className="project-image-num">
                {project.category}
              </span>
            </div>
          </div>
        </section>

        {/* METADATA STRIP */}
        <section className="project-specs-section">
          <div className="project-specs-grid">
            <div className="spec-col">
              <span className="spec-label">CLIENT</span>
              <span className="spec-value">{project.client}</span>
            </div>
            <div className="spec-col">
              <span className="spec-label">ROLE</span>
              <span className="spec-value">{project.role}</span>
            </div>
            <div className="spec-col">
              <span className="spec-label">LOCATION</span>
              <span className="spec-value">{project.location}</span>
            </div>
            <div className="spec-col">
              <span className="spec-label">SERVICES</span>
              <div className="spec-tags-list">
                {project.types.map((t, idx) => (
                  <span key={idx} className="spec-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL STORY / TEXT & JUDUL SECTION */}
        <section className="project-editorial-section">
          <div className="project-editorial-grid">
            {/* Left Sidebar: Deliverables & Highlight */}
            <aside className="editorial-sidebar">
              <div className="sidebar-block">
                <span className="sidebar-heading">KEY DELIVERABLES</span>
                <ul className="deliverables-list">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx}>
                      <span className="deliverable-bullet">0{idx + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.quote && (
                <div className="sidebar-quote-block">
                  <div className="quote-mark">“</div>
                  <blockquote className="quote-text">{project.quote.text}</blockquote>
                  {project.quote.author && (
                    <cite className="quote-author">— {project.quote.author}</cite>
                  )}
                </div>
              )}
            </aside>

            {/* Right Column: Detailed Narrative Paragraphs */}
            <div className="editorial-content-body">
              {/* Executive Summary */}
              <article className="story-block">
                <span className="story-subtag">01. EXECUTIVE SUMMARY</span>
                <h2 className="story-title">Gambaran Umum Proyek</h2>
                <p className="story-paragraph highlight-paragraph">{project.summary}</p>
                <p className="story-paragraph">{project.overview}</p>
              </article>

              {/* The Challenge */}
              <article className="story-block">
                <span className="story-subtag">02. THE CHALLENGE</span>
                <h2 className="story-title">Tantangan &amp; Peluang Brand</h2>
                <p className="story-paragraph">{project.challenge}</p>
              </article>

              {/* The Creative Direction & Approach */}
              <article className="story-block">
                <span className="story-subtag">03. CREATIVE DIRECTION</span>
                <h2 className="story-title">Pendekatan &amp; Konsep Kreatif</h2>
                <p className="story-paragraph">{project.approach}</p>
              </article>

              {/* The Outcome & Impact */}
              <article className="story-block">
                <span className="story-subtag">04. IMPACT &amp; RESULTS</span>
                <h2 className="story-title">Hasil &amp; Dampak Bisnis</h2>
                <p className="story-paragraph">{project.result}</p>
              </article>
            </div>
          </div>
        </section>

        {/* BOTTOM PROJECT NAVIGATION / NEXT & PREV */}
        <section className="project-pagination-section">
          <div className="pagination-grid">
            <Link href={`/work/${prev.slug}`} className="pagination-card prev-card">
              <span className="pagination-direction">← PREVIOUS PROJECT</span>
              <h3 className="pagination-project-name">{prev.name}</h3>
              <span className="pagination-meta">{prev.category}</span>
            </Link>

            <Link href="/#work" className="pagination-overview-link">
              <span className="overview-icon" />
              <span>VIEW ALL WORK</span>
            </Link>

            <Link href={`/work/${next.slug}`} className="pagination-card next-card">
              <span className="pagination-direction">NEXT PROJECT →</span>
              <h3 className="pagination-project-name">{next.name}</h3>
              <span className="pagination-meta">{next.category}</span>
            </Link>
          </div>
        </section>

        {/* INLINE CONTACT CTA */}
        <section className="project-contact-cta">
          <div className="contact-cta-inner">
            <div>
              <span className="cta-index">COLLABORATION</span>
              <h2 className="cta-heading">
                HAVE A SIMILAR VISION FOR YOUR BRAND?
              </h2>
            </div>
            <a href="mailto:hello@wakiki.id" className="cta-button">
              START A PROJECT
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-left">
          <Link className="wordmark" href="/">
            WAKIKI<span>®</span>
          </Link>
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
