import { ACHIEVEMENTS } from '../data/achievements';

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="section-wrap">
        <div className="reveal">
          <p className="section-label">Achievements & Highlights</p>
          <h2 className="section-h">
            Milestones beyond
            <br />
            <span className="g-po">the codebase.</span>
          </h2>
        </div>
        <div className="projects-grid">
          {ACHIEVEMENTS.map((a) => (
            <div
              key={a.id}
              className={a.className}
              style={a.gridColumn ? { gridColumn: a.gridColumn } : undefined}
            >
              <div className="proj-top">
                <div className="proj-icon">{a.icon}</div>
                <span className={`proj-badge ${a.badgeClass}`.trim()}>{a.badge}</span>
              </div>
              <div className="proj-name">{a.name}</div>
              <div className="proj-desc">{a.desc}</div>
              {a.bullets ? (
                <ul className="tl-bullets" style={{ marginTop: '1rem' }}>
                  {a.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
              {a.tags ? (
                <div className="proj-stack">
                  {a.tags.map((tag) => (
                    <span key={tag} className="stag">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
