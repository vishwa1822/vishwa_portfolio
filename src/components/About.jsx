export default function About() {
  return (
    <section id="about">
      <div className="section-wrap">
        <div className="reveal">
          <p className="section-label">Who I Am</p>
          <h2 className="section-h">
            Engineering solutions that <br />
            <span className="g-pp">work and deliver.</span>
          </h2>
        </div>
        <div className="about-grid stagger-parent reveal">
          <div className="about-text stagger-child" style={{ '--stagger-delay': '0.1s' }}>
            <p>
              I am a <strong>Computer Science graduate (Class of 2026)</strong> from AVC College of
              Engineering, specializing in full stack development, backend systems, and AI-powered
              applications. My academic foundation is reinforced by practical software engineering
              across every project I undertake.
            </p>
            <p>
              I have built everything from <strong>microservices-based job intelligence platforms</strong>{' '}
              to ML-driven security operations pipelines — with a focus on clean architecture, reliable
              APIs, and measurable outcomes.
            </p>
            <p>
              <strong>
                Interested in backend engineering, scalable systems, automation, and intelligent
                platform development.
              </strong>
            </p>
            <p>
              Outside engineering, I am a <strong>state-level powerlifter</strong> and served as an NCC
              Cadet Under Officer at the All India Trek Camp 2024 — experiences that have strengthened
              my discipline and collaborative instincts. I bring the same focus to code that I bring to
              sport.
            </p>
          </div>
          <div className="about-card stagger-child" style={{ '--stagger-delay': '0.2s' }}>
            <div className="crow">
              <div className="cicon">🎓</div>
              <div>
                <div className="cinfo-label">Education</div>
                <div className="cinfo-val">B.E. Computer Science · AVC College of Engineering</div>
              </div>
            </div>
            <div className="crow">
              <div className="cicon">📍</div>
              <div>
                <div className="cinfo-label">Location</div>
                <div className="cinfo-val">Mayiladuthurai, Tamil Nadu, India</div>
              </div>
            </div>
            <div className="crow">
              <div className="cicon">📧</div>
              <div>
                <div className="cinfo-label">Email</div>
                <div className="cinfo-val">
                  <a href="mailto:Vishwa18221612@gmail.com">Vishwa18221612@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="crow">
              <div className="cicon">📞</div>
              <div>
                <div className="cinfo-label">Phone</div>
                <div className="cinfo-val">+91 6380108601</div>
              </div>
            </div>
            <div className="crow">
              <div className="cicon">🔗</div>
              <div>
                <div className="cinfo-label">LinkedIn</div>
                <div className="cinfo-val">
                  <a href="https://linkedin.com/in/vishwa1822" target="_blank" rel="noreferrer">
                    linkedin.com/in/vishwa1822
                  </a>
                </div>
              </div>
            </div>
            <div className="crow">
              <div className="cicon">💻</div>
              <div>
                <div className="cinfo-label">GitHub</div>
                <div className="cinfo-val">
                  <a href="https://github.com/vishwa1822" target="_blank" rel="noreferrer">
                    github.com/vishwa1822
                  </a>
                </div>
              </div>
            </div>
            <div className="crow">
              <div className="cicon">⚡</div>
              <div>
                <div className="cinfo-label">LeetCode</div>
                <div className="cinfo-val">
                  <a href="https://leetcode.com/u/Vishwa041822" target="_blank" rel="noreferrer">
                    leetcode.com/u/Vishwa041822
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
