import { CERTIFICATIONS } from '../data/certifications';

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-wrap">
        <div className="reveal">
          <p className="section-label">Experience & Education</p>
          <h2 className="section-h">
            A journey of
            <br />
            <span className="g-bc">deliberate growth.</span>
          </h2>
        </div>
        <div className="timeline">
          <div className="tl-item reveal" style={{ '--reveal-delay': '0.05s' }}>
            <div className="tl-dot" />
            <div className="tl-card">
              <div className="tl-top">
                <div>
                  <div className="tl-role">Full Stack Developer — Intern</div>
                  <div className="tl-company">HOP Technologies</div>
                </div>
                <div className="tl-date">Internship</div>
              </div>
              <ul className="tl-bullets">
                <li>
                  Developed and delivered <strong>full stack applications</strong> using Java Spring Boot,
                  React.js, and PostgreSQL within a collaborative engineering team
                </li>
                <li>
                  Designed and integrated <strong>RESTful API modules</strong> that powered internal
                  dashboards and data processing workflows across multiple teams
                </li>
                <li>
                  Participated in technical workshops and presented engineering papers at institutional
                  events, demonstrating communication and research skills
                </li>
              </ul>
            </div>
          </div>
          <div className="tl-item reveal" style={{ '--reveal-delay': '0.15s' }}>
            <div className="tl-dot" style={{ borderColor: 'var(--cyan)', boxShadow: 'var(--gc)' }} />
            <div className="tl-card">
              <div className="tl-top">
                <div>
                  <div className="tl-role">B.E. Computer Science and Engineering</div>
                  <div className="tl-company">AVC College of Engineering</div>
                </div>
                <div className="tl-date">2022 — 2026</div>
              </div>
              <ul className="tl-bullets">
                <li>
                  CGPA: <strong>7.1</strong> — Core focus on full stack engineering, distributed systems,
                  and applied AI/ML
                </li>
                <li>
                  Delivered two significant independent projects: a Microservices Job Alert Platform and an
                  ML-powered SOC Automation system
                </li>
                <li>
                  Completed <strong>IBM SkillsBuild Advanced Cyber Security Programme</strong> with a
                  distinction grade of A+
                </li>
              </ul>
            </div>
          </div>
          <div className="tl-item reveal" style={{ '--reveal-delay': '0.25s' }}>
            <div className="tl-dot" style={{ borderColor: 'var(--pink)', boxShadow: 'var(--gk)' }} />
            <div className="tl-card">
              <div className="tl-top">
                <div>
                  <div className="tl-role">NCC Cadet Under Officer</div>
                  <div className="tl-company">All India Trek Camp (AITC) 2024 · National Cadet Corps</div>
                </div>
                <div className="tl-date">Leadership</div>
              </div>
              <ul className="tl-bullets">
                <li>
                  Represented the institution at the <strong>All India Trek Camp 2024</strong>, serving as
                  Cadet Under Officer — recognized for leadership, discipline, and team coordination
                </li>
                <li>
                  Contributed to national-level teamwork, community service, and structured leadership
                  exercises over an intensive multi-week programme
                </li>
                <li>
                  Competed at the <strong>state level in powerlifting (2021)</strong> — demonstrating
                  resilience, physical discipline, and a high-performance mindset
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '3rem' }} className="reveal">
          <p className="section-label">Certifications</p>
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="cert-card">
              <div className="cert-logo">{cert.icon}</div>
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
              {cert.badge ? <div className="cert-badge">{cert.badge}</div> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
