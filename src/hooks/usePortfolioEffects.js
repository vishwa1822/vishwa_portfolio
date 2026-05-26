import { useEffect } from 'react';
import { DEMO_URLS, REPO_URLS } from '../data/config';

let animActive = true;

export function usePortfolioEffects() {
  useEffect(() => {
    const onVisibility = () => {
      animActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibility);

    const cur = document.getElementById('cur');
    const ring = document.getElementById('curRing');
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener('mousemove', onMove);
    let cursorRaf;
    const cursorLoop = () => {
      if (cur && ring) {
        cur.style.left = `${mx - 5}px`;
        cur.style.top = `${my - 5}px`;
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = `${rx - 17}px`;
        ring.style.top = `${ry - 17}px`;
      }
      cursorRaf = requestAnimationFrame(cursorLoop);
    };
    cursorLoop();

    const nebula = document.getElementById('nebula-cvs');
    let nebulaRaf;
    if (nebula) {
      const ctx = nebula.getContext('2d');
      let t = 0;
      nebula.width = 900;
      nebula.height = 420;
      const clouds = [
        { x: 450, y: 200, r: 220, c1: 'rgba(130,80,223,0.55)', c2: 'transparent' },
        { x: 280, y: 180, r: 160, c1: 'rgba(191,57,137,0.4)', c2: 'transparent' },
        { x: 640, y: 220, r: 160, c1: 'rgba(130,80,223,0.35)', c2: 'transparent' },
        { x: 460, y: 210, r: 120, c1: 'rgba(163,113,247,0.25)', c2: 'transparent' },
      ];
      const drawNebula = () => {
        ctx.clearRect(0, 0, 900, 420);
        if (animActive) {
          clouds.forEach((cl, i) => {
            const ox = Math.sin(t * 0.0007 + i) * 22;
            const oy = Math.cos(t * 0.0009 + i * 1.3) * 14;
            const g = ctx.createRadialGradient(cl.x + ox, cl.y + oy, 0, cl.x + ox, cl.y + oy, cl.r);
            g.addColorStop(0, cl.c1);
            g.addColorStop(1, cl.c2);
            ctx.beginPath();
            ctx.arc(cl.x + ox, cl.y + oy, cl.r, 0, Math.PI * 2);
            ctx.fillStyle = g;
            ctx.fill();
          });
          if (t === 0) {
            nebula._stars = Array.from({ length: 80 }, () => ({
              x: Math.random() * 900,
              y: Math.random() * 420,
              r: Math.random() * 1.4 + 0.3,
              a: Math.random(),
            }));
          }
          nebula._stars?.forEach((s) => {
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(220,200,255,${0.3 + Math.abs(Math.sin(t * 0.001 + s.x)) * 0.7})`;
            ctx.fill();
          });
          t += 16;
        }
        nebulaRaf = requestAnimationFrame(drawNebula);
      };
      drawNebula();
    }

    const cvs = document.getElementById('cvs');
    let starRaf;
    let resizeStar = () => {};
    if (cvs) {
      const ctx = cvs.getContext('2d');
      let W;
      let H;
      let stars = [];
      resizeStar = () => {
        W = cvs.width = window.innerWidth;
        H = cvs.height = window.innerHeight;
      };
      resizeStar();
      window.addEventListener('resize', resizeStar);
      const starCount = window.innerWidth <= 768 ? 90 : 200;
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.2,
        a: Math.random(),
        s: Math.random() * 0.25 + 0.04,
        d: (Math.random() - 0.5) * 0.12,
      }));
      const drawStars = () => {
        if (animActive) {
          ctx.clearRect(0, 0, W, H);
          stars.forEach((s) => {
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(210,190,255,${s.a})`;
            ctx.fill();
            s.y -= s.s;
            s.x += s.d;
            s.a = 0.25 + Math.abs(Math.sin(Date.now() * 0.0008 + s.x)) * 0.75;
            if (s.y < -2) {
              s.y = H + 2;
              s.x = Math.random() * W;
            }
          });
        }
        starRaf = requestAnimationFrame(drawStars);
      };
      drawStars();
    }

    const cols = ['#a371f7', '#e879a8', '#2ea44f', '#60a5fa', '#8250df', '#22d3ee', '#bf3989'];
    const isMobile = () => window.innerWidth <= 768;
    const particleMs = isMobile() ? 1400 : 700;
    const particleInterval = setInterval(() => {
      if (!animActive || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (isMobile() && Math.random() > 0.55) return;
      const p = document.createElement('div');
      p.className = 'particle';
      const sz = Math.random() * 4 + 2;
      p.style.cssText = `width:${sz}px;height:${sz}px;background:${cols[Math.floor(Math.random() * cols.length)]};left:${Math.random() * 100}vw;opacity:${Math.random() * 0.45 + 0.15};animation-duration:${Math.random() * 13 + 8}s;animation-delay:${Math.random() * 4}s;`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 22000);
    }, particleMs);

    const skillCards = document.querySelectorAll('.skill-card');
    const skillHandlers = [];
    skillCards.forEach((card) => {
      const handler = (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
        card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
      };
      card.addEventListener('mousemove', handler);
      skillHandlers.push({ card, handler });
    });

    function splitIntoChars(el, delayStart = 0) {
      if (el.dataset.splitDone) return;
      el.dataset.splitDone = '1';
      const text = el.textContent;
      el.textContent = '';
      [...text].forEach((ch, i) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        span.style.transitionDelay = `${delayStart + i * 0.14}s`;
        el.appendChild(span);
        requestAnimationFrame(() =>
          setTimeout(() => span.classList.add('visible'), 150 + delayStart * 1000 + i * 130)
        );
      });
    }
    document.querySelectorAll('[data-split]').forEach((el, i) => {
      splitIntoChars(el, i * 8);
    });

    function wrapLetters(el) {
      if (el.dataset.splitDone) return;
      el.dataset.splitDone = '1';
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
      const textNodes = [];
      while (walker.nextNode()) textNodes.push(walker.currentNode);
      textNodes.forEach((node) => {
        const parent = node.parentElement;
        if (parent.classList?.contains('letter')) return;
        const text = node.textContent;
        const frag = document.createDocumentFragment();
        text.split(/(\s+)/).forEach((part) => {
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
            return;
          }
          const word = document.createElement('span');
          word.className = 'word';
          [...part].forEach((ch, j) => {
            const s = document.createElement('span');
            s.className = 'letter';
            s.textContent = ch;
            s.style.transitionDelay = `${j * 0.03}s`;
            word.appendChild(s);
          });
          frag.appendChild(word);
        });
        parent.replaceChild(frag, node);
      });
    }
    document.querySelectorAll('.section-h, .section-label, .contact-h').forEach(wrapLetters);

    function revealDelayMs(el, batchIndex = 0) {
      const raw =
        el.dataset.delay ||
        el.style.getPropertyValue('--reveal-delay') ||
        getComputedStyle(el).getPropertyValue('--reveal-delay') ||
        el.style.getPropertyValue('--stagger-delay') ||
        getComputedStyle(el).getPropertyValue('--stagger-delay');
      const n = parseFloat(raw);
      return (Number.isNaN(n) ? 0 : n * 1000) + batchIndex * 50;
    }

    function markVisible(t, batchIndex = 0) {
      if (t.classList.contains('visible')) return;
      setTimeout(() => {
        t.classList.add('visible');
        t.querySelectorAll('.section-h,.section-label,.contact-h').forEach((h) => {
          if (t.contains(h) || t === h) h.classList.add('letters-visible');
        });
        if (
          t.classList.contains('section-h') ||
          t.classList.contains('section-label') ||
          t.classList.contains('contact-h')
        ) {
          t.classList.add('letters-visible');
        }
      }, revealDelayMs(t, batchIndex));
    }

    const revealSel = '.reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger-parent,.footer-reveal';
    const ioMargin = isMobile() ? '0px 0px -5px 0px' : '0px 0px -30px 0px';
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (!e.isIntersecting) return;
          markVisible(e.target, i);
          io.unobserve(e.target);
        });
      },
      { threshold: isMobile() ? 0.05 : 0.08, rootMargin: ioMargin }
    );
    document.querySelectorAll(revealSel).forEach((r) => io.observe(r));

    function checkVisible() {
      const vh = window.innerHeight;
      const margin = isMobile() ? 40 : 60;
      document.querySelectorAll(revealSel).forEach((el, i) => {
        if (el.classList.contains('visible')) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh - margin && r.bottom > margin) markVisible(el, i);
      });
    }
    const onCheckVisible = () => requestAnimationFrame(checkVisible);
    window.addEventListener('scroll', onCheckVisible, { passive: true });
    setTimeout(checkVisible, 120);
    setTimeout(checkVisible, 500);
    document.querySelectorAll('.section-h, .section-label, .contact-h').forEach((h) => {
      if (!h.closest('.reveal') && !h.closest('.reveal-left') && !h.closest('.reveal-right')) {
        io.observe(h);
      }
    });

    const letterIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              e.target.classList.add('letters-visible');
              letterIo.unobserve(e.target);
            }, i * 40);
          }
        });
      },
      { threshold: isMobile() ? 0.08 : 0.15, rootMargin: isMobile() ? '0px 0px -5px 0px' : '0px 0px -20px 0px' }
    );
    document.querySelectorAll('.section-h, .section-label, .contact-h').forEach((h) => letterIo.observe(h));

    const navEl = document.querySelector('nav');
    let scrollTick = false;
    const onScroll = () => {
      if (!scrollTick) {
        scrollTick = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          navEl?.classList.toggle('scrolled', y > 40);
          document.querySelectorAll('.orb').forEach((o, i) => {
            o.style.marginTop = `${y * (0.03 + i * 0.01)}px`;
          });
          scrollTick = false;
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const demoHandlers = [];
    document.querySelectorAll('.plink-demo').forEach((link) => {
      const url = DEMO_URLS[link.dataset.demo];
      if (url) {
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.removeAttribute('title');
      } else {
        const prevent = (e) => e.preventDefault();
        link.addEventListener('click', prevent);
        link.title = 'Demo URL — update DEMO_URLS in config.js';
        demoHandlers.push({ link, prevent });
      }
    });
    document.querySelectorAll('.plink-repo').forEach((link) => {
      const url = REPO_URLS[link.dataset.repo];
      if (url) link.href = url;
    });

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(cursorRaf);
      cancelAnimationFrame(nebulaRaf);
      cancelAnimationFrame(starRaf);
      clearInterval(particleInterval);
      window.removeEventListener('resize', resizeStar);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onCheckVisible);
      skillHandlers.forEach(({ card, handler }) => card.removeEventListener('mousemove', handler));
      demoHandlers.forEach(({ link, prevent }) => link.removeEventListener('click', prevent));
      io.disconnect();
      letterIo.disconnect();
    };
  }, []);
}
