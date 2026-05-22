import { useTypedText } from '../hooks/useTypedText';
import { downloadCV } from '../utils/downloadCV';
import { CV_FILE } from '../data/config';

export default function Hero() {
  const typed = useTypedText();

  return (
    <section id="hero">
      <div className="hero-inner">
        <canvas
          id="nebula-cvs"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -52%)',
            width: 900,
            height: 420,
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.7,
          }}
        />
        <div className="hero-content">
          <p className="hero-pre">Software Engineer</p>
          <h1 className="hero-name" id="heroName">
            <span className="name-full" data-split>
              VISHWA R
            </span>
          </h1>
          <p className="hero-post">Software Engineer · Full Stack &amp; Backend Developer</p>
          <p className="hero-role">
            // <span className="typed">{typed}</span>
            <span className="typed-cursor" style={{ animation: 'blink 1s infinite' }}>
              |
            </span>
          </p>
          <p className="hero-desc">
            A dedicated full stack engineer with strong practical experience in{' '}
            <strong>Java Spring Boot, React.js, and PostgreSQL</strong> — building REST APIs,
            modular microservices, and intelligent systems that solve real-world problems with
            efficiency and reliability.
          </p>
          <p className="hero-tech">
            Core Technologies · Java · Spring Boot · React.js · PostgreSQL · REST APIs · Docker ·
            Microservices · Python · FastAPI · Git
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16,18 22,12 16,6" />
                <polyline points="8,6 2,12 8,18" />
              </svg>
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              Get in Touch
            </a>
            <a
              href={CV_FILE}
              download={CV_FILE}
              className="btn-cv"
              onClick={(e) => downloadCV(e)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </div>
          <div className="hero-social">
            <a
              href="https://github.com/vishwa1822"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/vishwa1822"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-13h4v2" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="mailto:Vishwa18221612@gmail.com" className="hero-social-btn" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
            </a>
            <a href="tel:+916380108601" className="hero-social-btn" aria-label="Phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
