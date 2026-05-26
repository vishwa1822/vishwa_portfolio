import { useState } from 'react';
import { isEmailJsConfigured, sendContactEmail } from '../utils/sendEmail';

const CONTACT_LINKS = [
  { href: 'mailto:Vishwa18221612@gmail.com', label: 'Email', icon: 'email' },
  { href: 'https://linkedin.com/in/vishwa1822', label: 'LinkedIn', icon: 'linkedin', external: true },
  { href: 'https://github.com/vishwa1822', label: 'GitHub', icon: 'github', external: true },
  { href: 'tel:+916380108601', label: '+91 6380108601', icon: 'phone' },
];

function ContactIcon({ type }) {
  if (type === 'email') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    );
  }
  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);

  const sendMsg = async () => {
    const n = form.name.trim();
    const em = form.email.trim();
    const msg = form.msg.trim();
    setError('');

    if (!n || !em || !msg) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setSending(true);
    try {
      if (isEmailJsConfigured()) {
        await sendContactEmail({ name: n, email: em, message: msg });
      } else {
        const mailto = `mailto:Vishwa18221612@gmail.com?subject=${encodeURIComponent('Portfolio Enquiry')}&body=${encodeURIComponent(`Name: ${n}\nEmail: ${em}\n\n${msg}`)}`;
        window.location.href = mailto;
      }
      setShowSuccess(true);
      setForm({ name: '', email: '', msg: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      setError('Could not send your message. Please try again or email Vishwa18221612@gmail.com directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-inner">
        <p className="section-label reveal contact-anim" style={{ justifyContent: 'center', '--reveal-delay': '0s' }}>
          Let&apos;s Connect
        </p>
        <div className="contact-h reveal contact-anim" style={{ '--reveal-delay': '0.08s' }}>
          Ready to build together.
        </div>
        <p className="contact-sub reveal contact-anim" style={{ '--reveal-delay': '0.16s' }}>
          I am actively seeking opportunities to contribute to impactful engineering teams focused on
          scalable software, backend systems, and intelligent applications. Open to Software Engineer,
          Backend Developer, System Engineer, and Full Stack Developer roles.
        </p>
        <div className="contact-links stagger-parent reveal contact-anim" style={{ '--reveal-delay': '0.22s' }}>
          {CONTACT_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="clink stagger-child reveal-scale"
              style={{ '--stagger-delay': `${0.05 + i * 0.07}s` }}
              {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <ContactIcon type={link.icon} />
              {link.label}
            </a>
          ))}
        </div>
        <div className="msg-form reveal contact-anim" id="msgForm" style={{ '--reveal-delay': '0.35s' }}>
          <div className="msg-form-title">Send a Message</div>
          <div className="msg-form-sub">Fill in the form below and I will get back to you within 24 hours.</div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="f-name">
                Full Name
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Your full name"
                id="f-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="f-email">
                Email Address
              </label>
              <input
                className="form-input"
                type="email"
                placeholder="your@email.com"
                id="f-email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full">
              <label className="form-label" htmlFor="f-msg">
                Message
              </label>
              <textarea
                className="form-textarea"
                placeholder="Share a brief overview of your opportunity or how I can help…"
                id="f-msg"
                value={form.msg}
                onChange={(e) => setForm({ ...form, msg: e.target.value })}
              />
            </div>
          </div>
          <div className="form-send-row">
            <button type="button" className="btn-send" onClick={sendMsg} disabled={sending}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22,2 15,22 11,13 2,9" />
              </svg>
              {sending ? 'Sending…' : 'Send Message'}
            </button>
          </div>
          {error ? <p className="form-error">{error}</p> : null}
          {!isEmailJsConfigured() && !error ? (
            <p className="form-hint">
              Tip: add EmailJS keys in <code>.env</code> to send from the site without opening your mail app.
            </p>
          ) : null}
          <div className="form-success" id="formSuccess" style={{ display: showSuccess ? 'block' : 'none' }} role="status">
            ✓ Message sent! I will be in touch shortly.
          </div>
        </div>
      </div>
    </section>
  );
}
