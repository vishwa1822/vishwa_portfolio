# VISHWA R — Portfolio (React)

React.js port of the original single-page portfolio. **UI and styling are unchanged** — same CSS, layout, animations, and content.

## Tech stack

- **React 19** + **Vite**
- Vanilla CSS (extracted from original HTML)
- Canvas animations (starfield, nebula)
- Intersection Observer scroll reveals

## Quick start

```bash
cd vishwa-portfolio
npm install
npm run dev
```

Place your resume at `public/Vishwa_R_Resume.pdf` for the Download CV button to work.

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, GitHub Pages, etc.

## Configuration

Edit `src/data/config.js`:

- `DEMO_URLS` — live demo links per project
- `REPO_URLS` — GitHub repo URLs
- `CV_FILE` — resume PDF filename (place file in `public/`)

### Contact form (EmailJS)

`.env` is **gitignored on purpose** — your keys are not pushed to GitHub. That is correct and safe.

1. Create a free account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Add an email service and a template with variables: `{{user_name}}`, `{{user_email}}`, `{{message}}`
3. Copy `.env.example` to `.env` and paste your three keys (you already have these locally).
4. Restart the dev server: `npm run dev`

**After deploy (so EmailJS still works without `.env` on the server):**

| Method | What to do |
|--------|------------|
| **Easiest** | Run `npm run build` on your machine **while `.env` exists**, then deploy the `dist/` folder. Vite embeds the keys into the built JS. |
| **Vercel / Netlify** | Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` in the host’s Environment Variables, then trigger a new deploy. |
| **Fallback** | If keys are missing at build time, **Send Message** opens the visitor’s mail app with your address pre-filled (no setup on the server). |

Run `npm run build` — you’ll see `✓ EmailJS env ready` if `.env` is set up correctly.

## Project structure

```
src/
  components/   # Nav, Hero, About, Skills, Projects, Experience, Contact
  hooks/        # Canvas, cursor, scroll animations, typed text
  data/         # Skills, projects, config
  styles/       # portfolio.css (original styles)
public/         # Static assets (e.g. Vishwa_R_Resume.pdf)
```

## Original HTML

The source design remains in `../vishwa_portfolio2.html` for reference.
