import { Link } from 'react-router-dom';
import { cv } from '../data/cv';
import { cvUrl } from '../data/site';
import { useReveal, usePageMeta } from '../hooks/effects';
import { ArrowLeft, DownloadIcon } from '../components/Icons';

export default function Cv() {
  usePageMeta(
    'CV — Roberto Ulloa',
    'CV of Roberto Ulloa, a London-based software developer, QA engineer and technical analyst.',
  );
  useReveal();

  return (
    <section className="section page-section cv-page" aria-labelledby="cv-title">
      <div className="container cv-container">
        <div className="cv-toolbar no-print">
          <Link className="back-link" to="/"><ArrowLeft /> Back to portfolio</Link>
          <a className="button button-primary" href={cvUrl} download>Download PDF <DownloadIcon /></a>
        </div>

        <article className="cv-sheet">
          <header className="cv-header intro-fade" style={{ '--d': '0s' }}>
            <h1 id="cv-title">{cv.name}</h1>
            <p className="cv-title">{cv.title}</p>
            <p className="cv-contact">
              <span>{cv.location}</span>
              {cv.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
              ))}
            </p>
          </header>

          <section className="cv-section" data-reveal aria-labelledby="cv-profile">
            <h2 id="cv-profile">Profile</h2>
            {cv.profile.map((paragraph) => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
          </section>

          <section className="cv-section" data-reveal aria-labelledby="cv-skills">
            <h2 id="cv-skills">Technical skills</h2>
            <dl className="cv-skills">
              {cv.skills.map((skill) => (
                <div key={skill.label}>
                  <dt>{skill.label}</dt>
                  <dd>{skill.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="cv-section" aria-labelledby="cv-experience">
            <h2 id="cv-experience" data-reveal>Professional experience</h2>
            {cv.experience.map((job) => (
              <div className="cv-job" data-reveal key={`${job.organisation}-${job.period}`}>
                <div className="cv-job-head">
                  <h3>{job.role} <span>· {job.organisation}</span></h3>
                  <p className="cv-period">{job.period}</p>
                </div>
                {job.note && <p className="cv-note">{job.note}</p>}
                <ul>
                  {job.bullets.map((bullet) => <li key={bullet.slice(0, 32)}>{bullet}</li>)}
                </ul>
              </div>
            ))}
          </section>

          <section className="cv-section" data-reveal aria-labelledby="cv-education">
            <h2 id="cv-education">Education and training</h2>
            {cv.education.map((item) => (
              <div className="cv-edu" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </section>
        </article>

        <div className="cv-footer-actions no-print">
          <a className="button button-primary" href={cvUrl} download>Download PDF <DownloadIcon /></a>
          <Link className="button button-secondary" to="/#contact">Get in touch</Link>
        </div>
      </div>
    </section>
  );
}
