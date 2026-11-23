import { useEffect, useState } from 'react';
import profileImage from './assets/profile.webp';

const email = 'roanuc8@gmail.com';
const githubUrl = 'https://github.com/Robert-Ulloa';
const linkedinUrl = 'https://www.linkedin.com/in/roberto-antonio-ulloa-cruz-30135b317/';
const cvUrl = '/Roberto-Ulloa-CV.pdf';

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
];

const proofPoints = [
  { value: 'iOS + Android', label: 'Live app shipped to both stores' },
  { value: 'Square POS', label: 'Catalog, inventory & payments' },
  { value: 'QA-first', label: 'API, accessibility & regression tested' },
];

const featuredProject = {
  title: 'Nimble Chicago',
  eyebrow: 'Featured case study · Live product',
  summary:
    'A mobile ordering platform for a Chicago café, taken from first commit to the App Store and Google Play. I built the customer app, the API and the admin tools, and tested every release.',
  highlights: [
    'React Native (Expo) app for iOS and Android, with a Next.js API and admin dashboard behind it',
    'Square as the single source of truth for menu, inventory and payments, kept in sync with verified webhooks',
    'Over-the-air updates so JavaScript fixes reach customers without waiting on app-store review',
    'Admin tooling for scheduled push notifications, plus investigation of live Square data mismatches',
  ],
  tags: ['React Native', 'Next.js', 'PostgreSQL', 'Square API', 'Expo EAS'],
  links: [{ label: 'Visit nimblechicago.com', href: 'https://nimblechicago.com/' }],
};

const projects = [
  {
    title: 'Salt & Yeast',
    eyebrow: 'Ordering platform · Web + mobile MVP',
    summary:
      'A multi-location bakery ordering concept: customer web ordering, an admin dashboard for staff, and a React Native app on a shared Next.js and Prisma backend.',
    tags: ['Next.js', 'React Native', 'Expo', 'Prisma'],
    links: [
      { label: 'Web code', href: 'https://github.com/Robert-Ulloa/salt-and-yeast-web' },
      { label: 'Mobile code', href: 'https://github.com/Robert-Ulloa/salt-and-yeast-mobile' },
    ],
    visual: 'salt',
  },
  {
    title: 'Coda Square',
    eyebrow: 'Marketing website · Design + build',
    summary:
      'A product-focused marketing site for a studio building custom apps and websites for coffee shops, on a reusable TypeScript and Tailwind foundation.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    links: [
      { label: 'Visit site', href: 'https://codasquare-website.vercel.app' },
      { label: 'View code', href: 'https://github.com/Robert-Ulloa/codasquare-website' },
    ],
    visual: 'coda',
  },
];

const services = [
  {
    number: '01',
    title: 'Square integration & operations',
    description:
      'Connect ordering and inventory workflows to Square POS APIs, then trace discrepancies across API responses, application logic and database records.',
    details: ['Square POS APIs', 'Catalog & inventory', 'Data reconciliation'],
  },
  {
    number: '02',
    title: 'Mobile app development',
    description:
      'Build React Native products end to end, from core user flows and backend connections to release readiness on iOS and Android.',
    details: ['React Native', 'iOS & Android', 'App-store release'],
  },
  {
    number: '03',
    title: 'Web, APIs & data',
    description:
      'Deliver practical web products and the services behind them with Next.js, Node.js, REST APIs, PostgreSQL and clear admin interfaces.',
    details: ['Next.js & Node.js', 'REST APIs', 'PostgreSQL'],
  },
  {
    number: '04',
    title: 'QA & release confidence',
    description:
      'Test the journeys that matter with API, functional, accessibility and regression testing, so releases are dependable before real users find the edge cases.',
    details: ['API testing', 'Accessibility', 'Regression testing'],
  },
];

const skillGroups = [
  { name: 'Build', skills: ['JavaScript', 'TypeScript', 'React', 'React Native', 'Next.js', 'Vue', 'Node.js'] },
  { name: 'Test', skills: ['API testing', 'Regression', 'Accessibility', 'Playwright', 'Axe', 'Lighthouse'] },
  { name: 'Ship', skills: ['REST APIs', 'PostgreSQL', 'SQL', 'Git & GitHub', 'Jira', 'CI/CD'] },
];

const experience = [
  {
    period: '2025 – 2026',
    role: 'Full-stack developer & QA',
    organisation: 'Nimble Chicago',
    detail:
      'Built and launched a full-stack mobile ordering app, investigated Square POS data mismatches, tested API and release edge cases, and coordinated app-store submission.',
  },
  {
    period: '2026',
    role: 'Procurement contract analyst',
    organisation: 'Rail Delivery Group',
    detail:
      'Reviewed more than 4,000 contract and procurement documents, reconciled register records, and maintained an auditable decision trail through structured investigation.',
  },
  {
    period: '2025',
    role: 'QA engineer & junior developer',
    organisation: 'Focus State · Blue Chip Worldwide',
    detail:
      'Tested React and Vue applications across browser, device, API, accessibility and regression workflows, working with developers to investigate and verify fixes.',
  },
];

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.55 9.55 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.9.68 1.81v2.68c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55a.55.55 0 0 0-.55-.55ZM8.34 18.34H5.67V9.76h2.67v8.58ZM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.76h-2.67v-4.17c0-1 0-2.29-1.4-2.29-1.4 0-1.61 1.09-1.61 2.22v4.24H10V9.76h2.56v1.17h.04c.36-.67 1.23-1.39 2.53-1.39 2.7 0 3.2 1.78 3.2 4.09v4.71Z" />
    </svg>
  );
}

function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`}>
      <a href={`mailto:${email}`} aria-label="Email Roberto"><EmailIcon /></a>
      <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="Roberto Ulloa on GitHub"><GithubIcon /></a>
      <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="Roberto Ulloa on LinkedIn"><LinkedinIcon /></a>
    </div>
  );
}

function ProjectLinks({ links }) {
  return (
    <div className="project-links">
      {links.map((link) => (
        <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
          {link.label} <ArrowUpRight />
        </a>
      ))}
    </div>
  );
}

function SaltVisual() {
  return (
    <div className="salt-visual" aria-hidden="true">
      <div className="mock-browser">
        <div className="mock-bar"><span /><span /><span /></div>
        <div className="mock-body">
          <div className="mock-side">
            <b>S&amp;Y</b>
            <i /><i /><i /><i />
          </div>
          <div className="mock-main">
            <div className="mock-stats"><span /><span /><span /></div>
            <div className="mock-row" /><div className="mock-row" /><div className="mock-row" /><div className="mock-row short" />
          </div>
        </div>
      </div>
      <div className="mock-phone">
        <div className="mock-phone-hero" />
        <div className="mock-phone-item" /><div className="mock-phone-item" />
        <div className="mock-phone-cta" />
      </div>
    </div>
  );
}

function useRevealOnScroll() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function useActiveSection(ids) {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = [...navItems.map((item) => item.id), 'contact'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState('idle');
  const activeSection = useActiveSection(sectionIds);

  useRevealOnScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const updateField = (field) => (event) => setFormData({ ...formData, [field]: event.target.value });

  async function handleSubmit(event) {
    event.preventDefault();
    setFormState('sending');

    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        subject: 'New portfolio enquiry from robertoulloa.com',
        ...formData,
      }).toString();

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (!response.ok) throw new Error('Message could not be sent');
      setFormData({ name: '', email: '', message: '' });
      setFormState('success');
    } catch {
      setFormState('error');
    }
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Roberto Ulloa, back to top">
            <span className="wordmark-mark">RU</span>
            <span>Roberto Ulloa</span>
          </a>

          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav id="site-nav" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={activeSection === item.id ? 'is-active' : ''}
                aria-current={activeSection === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div className="hero-copy" data-reveal>
              <p className="availability">
                <span className="availability-pulse" /> Available for new roles · London, UK
              </p>
              <h1 id="hero-title">
                Full-stack developer with a <em>tester&apos;s eye.</em>
              </h1>
              <p className="hero-intro">
                I&apos;m Roberto. I take web and mobile products from first commit to the App Store, and I test
                them properly along the way. Most recently I built and launched a live ordering app with React Native,
                Next.js, PostgreSQL and Square POS.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">See my work <ArrowDown /></a>
                <a className="button button-secondary" href={cvUrl} download>Download CV <DownloadIcon /></a>
              </div>
              <SocialLinks className="hero-social" />
            </div>

            <div className="hero-portrait" data-reveal>
              <div className="portrait-ring" aria-hidden="true" />
              <div className="portrait-frame">
                <img src={profileImage} alt="Portrait of Roberto Ulloa" width="720" height="720" />
              </div>
              <div className="portrait-badge">
                <span className="badge-label">Currently</span>
                <strong>Full-stack & QA</strong>
                <span>Nimble Chicago</span>
              </div>
            </div>
          </div>

          <div className="container">
            <ul className="proof-row" data-reveal aria-label="Highlights">
              {proofPoints.map((point) => (
                <li key={point.value}>
                  <strong>{point.value}</strong>
                  <span>{point.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 id="work-title">Products I&apos;ve built, shipped and tested.</h2>
              </div>
              <p>
                I enjoy the whole path: shaping the interface, connecting the systems behind it, testing the edge
                cases and making the release dependable.
              </p>
            </div>

            <article className="featured-card" data-reveal aria-labelledby="featured-title">
              <div className="featured-art">
                <div className="nimble-screens">
                  <img src="/projects/nimble-screen-home.jpg" alt="Nimble Chicago app home screen" loading="lazy" />
                  <img src="/projects/nimble-screen-menu.jpg" alt="Nimble Chicago app menu screen" loading="lazy" />
                </div>
              </div>
              <div className="featured-content">
                <p className="project-eyebrow">{featuredProject.eyebrow}</p>
                <h3 id="featured-title">{featuredProject.title}</h3>
                <p className="project-summary">{featuredProject.summary}</p>
                <ul className="highlight-list">
                  {featuredProject.highlights.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <ul className="tag-list" aria-label={`${featuredProject.title} technologies`}>
                  {featuredProject.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <ProjectLinks links={featuredProject.links} />
              </div>
            </article>

            <div className="project-grid">
              {projects.map((project) => (
                <article className={`project-card project-${project.visual}`} data-reveal key={project.title}>
                  <div className="project-art">
                    {project.visual === 'salt' && <SaltVisual />}
                    {project.visual === 'coda' && (
                      <img
                        className="coda-mockup"
                        src="/projects/coda-product-mockup.jpg"
                        alt="Coda Square mobile app mockups for coffee shops"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="project-content">
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    <ul className="tag-list" aria-label={`${project.title} technologies`}>
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    <ProjectLinks links={project.links} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">What I do</p>
                <h2 id="services-title">The work behind a product people can rely on.</h2>
              </div>
              <p>
                From a Square-connected ordering flow to a store-ready mobile app, I work where the product experience
                meets the systems and operational details underneath it.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" data-reveal key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul aria-label={`${service.title} details`}>
                    {service.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="container about-inner">
            <div className="about-copy" data-reveal>
              <p className="eyebrow">How I work</p>
              <h2 id="about-title">Technical enough to build it. Curious enough to make it better.</h2>
              <p>
                My work sits where development, quality and delivery meet. I build in JavaScript and TypeScript across
                React, React Native and Next.js, and I treat testing as a way to protect the people using the product.
              </p>
              <p>
                That mix means I&apos;m comfortable tracing an issue across the interface, the API, the database and real
                user behaviour, then explaining a clear way forward to the team.
              </p>
            </div>
            <div className="toolkit" data-reveal aria-labelledby="toolkit-title">
              <h3 id="toolkit-title" className="toolkit-title">Toolkit</h3>
              {skillGroups.map((group) => (
                <div className="toolkit-group" key={group.name}>
                  <h4>{group.name}</h4>
                  <ul>
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">Experience</p>
                <h2 id="experience-title">A developer&apos;s eye for detail, backed by hands-on QA.</h2>
              </div>
              <div className="heading-actions">
                <a className="button button-secondary" href={cvUrl} download>Download full CV <DownloadIcon /></a>
              </div>
            </div>
            <ol className="timeline">
              {experience.map((item) => (
                <li data-reveal key={`${item.organisation}-${item.period}`}>
                  <p className="timeline-period">{item.period}</p>
                  <div className="timeline-role">
                    <h3>{item.role}</h3>
                    <p className="timeline-organisation">{item.organisation}</p>
                  </div>
                  <p className="timeline-detail">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <div className="contact-copy" data-reveal>
              <p className="eyebrow">Get in touch</p>
              <h2 id="contact-title">Let&apos;s build something useful.</h2>
              <p>
                I&apos;m looking for software development and QA roles, and I&apos;m happy to talk about freelance
                projects, especially Square integrations and mobile apps.
              </p>
              <a className="contact-email" href={`mailto:${email}`}>
                <EmailIcon /> {email}
              </a>
              <div className="contact-links">
                <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
                <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
              </div>
            </div>

            <form className="contact-form" data-reveal name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="subject" value="New portfolio enquiry from robertoulloa.com" />
              <p className="honeypot"><label>Do not fill this out <input name="bot-field" tabIndex={-1} /></label></p>
              <div className="form-row">
                <label>
                  Name
                  <input name="name" type="text" autoComplete="name" value={formData.name} onChange={updateField('name')} required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" autoComplete="email" value={formData.email} onChange={updateField('email')} required />
                </label>
              </div>
              <label>
                Message
                <textarea
                  name="message"
                  rows="5"
                  placeholder="A role, a project, or just a question…"
                  value={formData.message}
                  onChange={updateField('message')}
                  required
                />
              </label>
              <div className="form-footer">
                <button className="button button-dark" type="submit" disabled={formState === 'sending'}>
                  {formState === 'sending' ? 'Sending…' : 'Send message'} <ArrowUpRight />
                </button>
                <div aria-live="polite">
                  {formState === 'success' && <p className="form-message">Thanks, your message is on its way.</p>}
                  {formState === 'error' && (
                    <p className="form-message is-error">
                      Something went wrong. Please email me at <a href={`mailto:${email}`}>{email}</a>.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Roberto Ulloa · London, UK</p>
          <SocialLinks className="footer-social" />
          <a className="back-to-top" href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
