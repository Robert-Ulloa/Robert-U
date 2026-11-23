import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { navItems, githubUrl, linkedinUrl } from '../data/site';
import { useActiveSection, useScrollState, useSpotlight } from '../hooks/effects';
import { GithubIcon, LinkedinIcon } from './Icons';

const sectionIds = [...navItems.map((item) => item.id), 'contact'];

export function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`}>
      <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="Roberto Ulloa on GitHub"><GithubIcon /></a>
      <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="Roberto Ulloa on LinkedIn"><LinkedinIcon /></a>
    </div>
  );
}

/** Scrolls to the #hash after navigation, or to the top for a new page. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 30);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);
  return null;
}

function Background() {
  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />
      <div className="bg-orb orb-c" />
      <div className="bg-grain" />
    </div>
  );
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === '/';
  const scrolled = useScrollState();
  const activeSection = useActiveSection(onHome ? sectionIds : []);
  useSpotlight();

  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Background />
      <ScrollManager />
      <div className="scroll-progress" aria-hidden="true" />

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <Link className="wordmark" to="/" onClick={closeMenu} aria-label="Roberto Ulloa, home">
            <span className="wordmark-mark">RU</span>
            <span>Roberto Ulloa</span>
          </Link>

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
            {navItems.map((item) => {
              const isActive = onHome && activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  to={`/#${item.id}`}
                  onClick={closeMenu}
                  className={isActive ? 'is-active' : ''}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/blog"
              onClick={closeMenu}
              className={pathname.startsWith('/blog') ? 'is-active' : ''}
              aria-current={pathname.startsWith('/blog') ? 'page' : undefined}
            >
              Blog
            </Link>
            <Link
              to="/cv"
              onClick={closeMenu}
              className={pathname === '/cv' ? 'is-active' : ''}
              aria-current={pathname === '/cv' ? 'page' : undefined}
            >
              CV
            </Link>
            <Link className="nav-contact" to="/#contact" onClick={closeMenu}>Let&apos;s talk</Link>
          </nav>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Roberto Ulloa · London, UK</p>
          <SocialLinks className="footer-social" />
          <a className="back-to-top" href="#main" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
