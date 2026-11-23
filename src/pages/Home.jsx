import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.webp';
import {
  cvUrl, linkedinUrl, proofPoints, marquee, featuredProject, projects, services, skillGroups, experience,
} from '../data/site';
import { posts, formatDate } from '../data/posts';
import { useReveal, usePageMeta } from '../hooks/effects';
import CountUp from '../components/CountUp';
import { SocialLinks } from '../components/Layout';
import { ArrowDown, ArrowUpRight, DownloadIcon } from '../components/Icons';

function SplitWords({ text, offset = 0 }) {
  const words = text.split(' ');
  return words.map((word, index) => (
    <Fragment key={`${word}-${index}`}>
      <span className="word" style={{ '--i': index + offset }}>{word}</span>
      {index < words.length - 1 && ' '}
    </Fragment>
  ));
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

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState('idle');
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
    <form className="contact-form spotlight" data-reveal name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
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
        <button className="button button-primary" type="submit" disabled={formState === 'sending'}>
          {formState === 'sending' ? 'Sending…' : 'Send message'} <ArrowUpRight />
        </button>
        <div aria-live="polite">
          {formState === 'success' && <p className="form-message">Thanks, your message is on its way. I&apos;ll reply by email.</p>}
          {formState === 'error' && (
            <p className="form-message is-error">
              Something went wrong. Please try again, or <a href={linkedinUrl} target="_blank" rel="noreferrer">message me on LinkedIn</a>.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

export default function Home() {
  usePageMeta(
    'Roberto Ulloa — Full-stack Developer & QA Engineer, London',
    'Roberto Ulloa is a London-based full-stack developer and QA engineer who builds, tests and ships web and mobile products with React, React Native, Next.js and Square POS.',
  );
  useReveal();

  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="availability intro-fade" style={{ '--d': '0s' }}>
              <span className="availability-pulse" /> Open to new roles · London, UK
            </p>
            <h1 id="hero-title" className="hero-title">
              <SplitWords text="Full-stack developer with a" />{' '}
              <em><SplitWords text="tester's eye." offset={5} /></em>
            </h1>
            <p className="hero-intro intro-fade" style={{ '--d': '.55s' }}>
              I&apos;m Roberto. I take web and mobile products from first commit to the App Store, test them properly
              along the way, and dig into the data when the numbers don&apos;t add up. My latest launch, a live ordering
              app built on React Native, Next.js and Square POS, grew the café&apos;s orders by 125%.
            </p>
            <div className="hero-actions intro-fade" style={{ '--d': '.7s' }}>
              <Link className="button button-primary" to="/#work">See my work <ArrowDown /></Link>
              <a className="button button-secondary" href={cvUrl} download>Download CV <DownloadIcon /></a>
            </div>
            <SocialLinks className="hero-social intro-fade" />
          </div>

          <div className="hero-portrait intro-fade" style={{ '--d': '.25s' }}>
            <div className="portrait-glow" aria-hidden="true" />
            <div className="portrait-ring" aria-hidden="true" />
            <div className="portrait-frame">
              <img src={profileImage} alt="Portrait of Roberto Ulloa" width="720" height="720" />
            </div>
            <div className="portrait-badge glass">
              <span className="badge-label">Latest launch</span>
              <strong>Nimble Chicago</strong>
              <span>+125% orders</span>
            </div>
            <div className="portrait-chip glass" aria-hidden="true">
              <span className="chip-dot" /> tests passing
            </div>
          </div>
        </div>

        <div className="container">
          <ul className="proof-row" data-reveal aria-label="Highlights">
            {proofPoints.map((point) => (
              <li key={point.label}>
                <strong className={point.value ? 'gradient-text' : ''}>
                  {point.value ? <CountUp value={point.value} prefix={point.prefix} suffix={point.suffix} /> : point.text}
                </strong>
                <span>{point.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marquee, ...marquee].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
          </div>
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
              I enjoy the whole path: shaping the interface, connecting the systems behind it, testing the edge cases
              and making the release dependable.
            </p>
          </div>

          <article className="featured-card spotlight" data-reveal aria-labelledby="featured-title">
            <div className="featured-art">
              <div className="nimble-screens">
                <img src="/projects/nimble-screen-home.jpg" alt="Nimble Chicago app home screen" loading="lazy" />
                <img src="/projects/nimble-screen-menu.jpg" alt="Nimble Chicago app menu screen" loading="lazy" />
              </div>
              <div className="metric-badge glass">
                <strong className="gradient-text"><CountUp value={featuredProject.metric.value} prefix="+" suffix="%" /></strong>
                <span>{featuredProject.metric.label}</span>
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
              <article className={`project-card spotlight project-${project.visual}`} data-reveal key={project.title}>
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
              From a Square-connected ordering flow to a store-ready mobile app and the data behind it, I work where the
              product experience meets the systems underneath.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card spotlight" data-reveal key={service.number}>
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
              My work sits where development, quality and data meet. I build in JavaScript and TypeScript across React,
              React Native and Next.js, and I treat testing as a way to protect the people using the product.
            </p>
            <p>
              That mix means I&apos;m comfortable tracing an issue across the interface, the API, the database and real user
              behaviour, reconciling the records when they disagree, then explaining a clear way forward to the team.
            </p>
          </div>
          <div className="toolkit spotlight" data-reveal aria-labelledby="toolkit-title">
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
              <h2 id="experience-title">Development, QA and data analysis, in real teams.</h2>
            </div>
            <div className="heading-actions">
              <a className="button button-secondary" href={cvUrl} download>Download full CV <DownloadIcon /></a>
            </div>
          </div>
          <ol className="timeline">
            {experience.map((item) => (
              <li data-reveal key={`${item.organisation}-${item.period}`}>
                <span className="timeline-node" aria-hidden="true" />
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

      <section className="section writing-section" id="writing" aria-labelledby="writing-title">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Writing</p>
              <h2 id="writing-title">Notes from shipping real products.</h2>
            </div>
            <div className="heading-actions">
              <Link className="button button-secondary" to="/blog">All posts <ArrowUpRight /></Link>
            </div>
          </div>
          <div className="post-grid">
            {posts.slice(0, 3).map((post) => (
              <Link className="post-card spotlight" data-reveal to={`/blog/${post.slug}`} key={post.slug}>
                <p className="post-meta">
                  <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
                </p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="post-read">Read post <ArrowUpRight /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-glow" aria-hidden="true" />
        <div className="container contact-inner">
          <div className="contact-copy" data-reveal>
            <p className="eyebrow">Get in touch</p>
            <h2 id="contact-title">Let&apos;s build something <span className="gradient-text">useful.</span></h2>
            <p>
              I&apos;m looking for software development, QA and data-focused roles, and I&apos;m happy to talk about
              freelance projects, especially Square integrations and mobile apps. Send a message and I&apos;ll reply by email.
            </p>
            <div className="contact-links">
              <a href={linkedinUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight /></a>
              <a href={cvUrl} download>Download CV <DownloadIcon /></a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
