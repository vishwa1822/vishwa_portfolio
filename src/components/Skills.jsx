import { SKILLS } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap">
        <div className="reveal">
          <p className="section-label">Technical Proficiency</p>
          <h2 className="section-h">
            Tools I build
            <br />
            <span className="g-cb">real-world systems with.</span>
          </h2>
        </div>
        <div className="skills-grid stagger-parent reveal">
          {SKILLS.map((skill) => (
            <div
              key={skill.cat}
              className="skill-card stagger-child reveal-scale"
              style={{ '--stagger-delay': skill.delay }}
            >
              <div className="skill-cat">{skill.cat}</div>
              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span key={tag.label} className={`skill-tag${tag.hot ? ' hot' : ''}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
