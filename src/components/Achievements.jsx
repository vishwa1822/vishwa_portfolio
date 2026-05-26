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
        <div className="achievements-grid stagger-parent reveal">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.title}
              className="ach-card stagger-child reveal-scale"
              style={{ '--stagger-delay': item.delay }}
            >
              <div className="ach-top">
                <span className="ach-icon">{item.icon}</span>
                <span className="ach-meta">{item.meta}</span>
              </div>
              <div className="ach-title">{item.title}</div>
              <p className="ach-desc">{item.description}</p>
              {item.bullets ? (
                <ul className="tl-bullets ach-bullets">
                  {item.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
