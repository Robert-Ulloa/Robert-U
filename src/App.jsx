import { useEffect, useState } from 'react';
import profileImage from './assets/images/profile1.png';

const githubUrl = 'https://github.com/Robert-Ulloa';
const linkedinUrl = 'https://www.linkedin.com/in/roberto-antonio-ulloa-cruz-30135b317/';

const projects = [
  {
    title: 'Nimble Chicago',
    eyebrow: 'Live product · Full-stack build and release',
    summary:
      'A mobile ordering experience taken from build through app-store release, with a React Native app, Next.js web app, Node.js backend, PostgreSQL, and Square POS integration.',
    tags: ['Square POS API', 'Inventory workflows', 'React Native', 'iOS & Android release'],
    links: [
      { label: 'Visit product', href: 'https://nimblechicago.com/' },
    ],
    accent: 'project-nimble',
    visual: 'nimble',
  },
  {
    title: 'Salt & Yeast',
    eyebrow: 'Ordering platform · Web and mobile',
    summary:
      'A multi-location bakery concept explored across an ordering platform with an admin dashboard and a React Native mobile experience with a Next.js and Prisma backend MVP.',
    tags: ['Next.js', 'React Native', 'Expo', 'Prisma'],
    links: [
      { label: 'Web code', href: 'https://github.com/Robert-Ulloa/salt-and-yeast-web' },
      { label: 'Mobile code', href: 'https://github.com/Robert-Ulloa/salt-and-yeast-mobile' },
    ],
    accent: 'project-salt',
  },
  {
    title: 'Coda Square',
    eyebrow: 'Marketing website · Product-focused design',
    summary:
      'A polished Next.js website for a studio creating custom apps and websites for coffee shops, designed with a reusable TypeScript and Tailwind foundation.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    links: [
      { label: 'Visit site', href: 'https://codasquare-website.vercel.app' },
      { label: 'View code', href: 'https://github.com/Robert-Ulloa/codasquare-website' },
    ],
    accent: 'project-coda',
    visual: 'coda',
  },
];

const skillGroups = [
  {
    name: 'Build',
    skills: ['JavaScript', 'TypeScript', 'React', 'React Native', 'Next.js', 'Vue', 'Node.js'],
  },
  {
    name: 'Test & improve',
    skills: ['API testing', 'Regression testing', 'Accessibility', 'Playwright', 'Axe', 'Lighthouse'],
  },
  {
    name: 'Ship with confidence',
    skills: ['REST APIs', 'PostgreSQL', 'SQL', 'Git/GitHub', 'Jira', 'CI/CD'],
  },
];

const deliveryFocus = [
  {
    number: '01',
    title: 'Square integration & operations',
    description:
      'Connect ordering and inventory workflows to Square POS APIs, then trace discrepancies across API responses, application logic, and database records.',
    details: ['Square POS APIs', 'Catalog & inventory', 'Data reconciliation'],
  },
  {
    number: '02',
    title: 'Mobile app development',
    description:
      'Build mobile product experiences in React Native—from core user flows and backend connections to release readiness for iOS and Android.',
    details: ['React Native', 'iOS & Android', 'App-store release'],
  },
  {
    number: '03',
    title: 'Web, APIs & data',
    description:
      'Deliver practical web products and the services behind them with Next.js, Node.js, REST APIs, PostgreSQL, and clear operational interfaces.',
    details: ['Next.js & Node.js', 'REST APIs', 'PostgreSQL'],
  },
  {
    number: '04',
    title: 'QA & release confidence',
    description:
      'Test the journeys that matter with API, functional, accessibility, and regression testing—so a release is dependable before real users find the edge cases.',
    details: ['API testing', 'Accessibility', 'Regression testing'],
  },
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
      'Tested React and Vue applications across browser, device, API, accessibility, and regression workflows while collaborating with developers to investigate and verify fixes.',
  },
];

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7M8 7h9v9" />
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState('idle');

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
      { threshold: 0.14 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

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
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Roberto Ulloa home">
          <span className="wordmark-mark">RU</span>
          <span>Roberto Ulloa</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#focus" onClick={closeMenu}>Focus</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span className="status-dot" /> Based in London, UK</p>
            <h1 id="hero-title">I build reliable digital products, from the first idea to launch.</h1>
            <p className="hero-intro">
              I&apos;m Roberto, a software developer and QA engineer who combines full-stack development, disciplined testing,
              and a practical product mindset.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View selected work <ArrowUpRight /></a>
              <a className="button button-secondary" href="/Roberto-Ulloa-CV.pdf" download>Download CV</a>
            </div>
            <div className="hero-email-row">
              <span>Available for opportunities</span>
              <a className="hero-email" href="mailto:roanuc8@gmail.com" aria-label="Email Roberto" title="Email Roberto">
                <EmailIcon />
              </a>
            </div>
            <div className="hero-meta" aria-label="Professional highlights">
              <div><strong>Full-stack</strong><span>Web, mobile & APIs</span></div>
              <div><strong>QA-led</strong><span>Tested for real users</span></div>
              <div><strong>Shipped</strong><span>Released to app stores</span></div>
            </div>
          </div>

          <div className="hero-portrait-wrap" data-reveal aria-hidden="true">
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-panel">
              <div className="portrait-label">Developer · QA · Analyst</div>
              <img src={profileImage} alt="" />
              <div className="portrait-caption"><span>01</span> Building with care</div>
            </div>
          </div>
        </section>

        <section className="opportunity-strip" aria-label="Professional availability" data-reveal>
          <p><span className="availability-pulse" /> Open to opportunities</p>
          <span>Software development · QA engineering · technical analysis</span>
          <a href="mailto:roanuc8@gmail.com">Let&apos;s connect <ArrowUpRight /></a>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading split-heading" data-reveal>
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Recent projects with real product thinking.</h2>
            </div>
            <p>
              I enjoy the full path: shaping an interface, connecting the systems behind it, testing the edge cases, and making the release dependable.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.accent}`} data-reveal key={project.title}>
                <div className={`project-art ${project.visual ? 'project-art--visual' : ''}`}>
                  {project.visual === 'nimble' && (
                    <div className="nimble-screens" aria-label="Nimble Chicago mobile app screenshots">
                      <img src="/projects/nimble-screen-home.jpg" alt="Nimble Chicago app home screen" />
                      <img src="/projects/nimble-screen-menu.jpg" alt="Nimble Chicago app menu screen" />
                    </div>
                  )}
                  {project.visual === 'coda' && (
                    <img className="coda-mockup" src="/projects/coda-product-mockup.jpg" alt="Coda Square custom mobile product mockup" />
                  )}
                  {!project.visual && (
                    <div className="project-art-graphic" aria-hidden="true">
                      <span className="art-number">0{index + 1}</span>
                      <span className="art-line line-a" />
                      <span className="art-line line-b" />
                      <span className="art-shape" />
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                        {link.label} <ArrowUpRight />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="delivery-section" id="focus" aria-labelledby="delivery-title">
          <div className="delivery-heading" data-reveal>
            <div>
              <p className="eyebrow">Product & platform focus</p>
              <h2 id="delivery-title">The work behind a product people can rely on.</h2>
            </div>
            <p>
              From a Square-connected ordering flow to a store-ready mobile app, I work where product experience meets the systems and operational details underneath it.
            </p>
          </div>
          <div className="delivery-grid">
            {deliveryFocus.map((focus) => (
              <article className="delivery-card" data-reveal key={focus.number}>
                <span className="delivery-number">{focus.number}</span>
                <h3>{focus.title}</h3>
                <p>{focus.description}</p>
                <ul aria-label={`${focus.title} details`}>
                  {focus.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <a className="delivery-contact" data-reveal href="mailto:roanuc8@gmail.com">
            Need Square, mobile, or quality-focused delivery? Let&apos;s talk <ArrowUpRight />
          </a>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="about-intro" data-reveal>
            <p className="eyebrow">How I work</p>
            <h2 id="about-title">Technical enough to build it. Curious enough to make it better.</h2>
          </div>
          <div className="about-body" data-reveal>
            <p>
              My work sits at the meeting point of development, quality, and delivery. I build in JavaScript and TypeScript,
              work comfortably across React, React Native, and Next.js, and use testing as a way to protect the people using the product.
            </p>
            <p>
              That combination has made me especially comfortable tracing an issue across interfaces, APIs, records, and real behaviour—then communicating a clear way forward.
            </p>
            <a className="text-link" href="#experience">Explore my experience <ArrowUpRight /></a>
          </div>
        </section>

        <section className="skills-section" aria-labelledby="skills-title">
          <div className="skills-topline" data-reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 id="skills-title">A balanced development toolkit.</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" data-reveal key={group.name}>
                <h3>{group.name}</h3>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">A developer&apos;s eye for detail, backed by hands-on QA and analysis.</h2>
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
          <a className="button button-secondary experience-cta" href="/Roberto-Ulloa-CV.pdf" download>Read the full CV</a>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy" data-reveal>
            <p className="eyebrow">Get in touch</p>
            <h2 id="contact-title">Let&apos;s make something useful.</h2>
            <p>
              I&apos;m interested in software development, QA, technical analysis, and AI-enabled product work. For roles, projects, or a good technical conversation, get in touch.
            </p>
            <div className="contact-links">
              <a className="contact-email-icon" href="mailto:roanuc8@gmail.com" aria-label="Email Roberto" title="Email Roberto"><EmailIcon /></a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
            </div>
          </div>

          <form className="contact-form" data-reveal name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="subject" value="New portfolio enquiry from robertoulloa.com" />
            <p className="honeypot"><label>Do not fill this out <input name="bot-field" /></label></p>
            <label>
              Your name
              <input
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                required
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                required
              />
            </label>
            <label>
              Your message
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                required
              />
            </label>
            <button className="button button-primary" type="submit" disabled={formState === 'sending'}>
              {formState === 'sending' ? 'Sending…' : 'Send message'} <ArrowUpRight />
            </button>
            {formState === 'success' && <p className="form-message success" role="status">Thanks—your message is on its way.</p>}
            {formState === 'error' && <p className="form-message error" role="alert">Something went wrong. Please email me directly instead.</p>}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Roberto Ulloa</p>
        <div>
          <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="Roberto Ulloa on GitHub"><GithubIcon /></a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="Roberto Ulloa on LinkedIn"><LinkedinIcon /></a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
