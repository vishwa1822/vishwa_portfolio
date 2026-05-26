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
                  Developed and delivered full stack applications using Java Spring Boot,
                  React.js, and PostgreSQL within a collaborative engineering team
                </li>
                <li>
                  Designed and integrated RESTful API modules that powered internal
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
                  CGPA: 7.1 — Core focus on full stack engineering, distributed systems,
                  and applied AI/ML
                </li>
                <li>
                  Delivered two significant independent projects: a Microservices Job Alert Platform and an
                  ML-powered SOC Automation system
                </li>
                <li>
                  Completed IBM SkillsBuild Advanced Cyber Security Programme with a
                  distinction grade of A+
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '3rem' }} className="reveal">
          <p className="section-label">Certifications</p>
          {CERTIFICATIONS.map((cert, i) => (
            <div key={cert.name} className="cert-card reveal" style={{ '--reveal-delay': `${0.05 + i * 0.08}s` }}>
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
