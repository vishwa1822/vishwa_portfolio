import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const KEYS = [
  'VITE_EMAILJS_SERVICE_ID',
  'VITE_EMAILJS_TEMPLATE_ID',
  'VITE_EMAILJS_PUBLIC_KEY',
];

function parseEnvFile(path) {
  if (!existsSync(path)) return {};
  const out = {};
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    out[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
  }
  return out;
}

const fromFile = parseEnvFile(resolve('.env'));
const merged = { ...fromFile };
for (const key of KEYS) {
  if (process.env[key]) merged[key] = process.env[key];
}

const placeholders = ['your_service_id', 'your_template_id', 'your_public_key'];
const configured = KEYS.every((key) => {
  const val = merged[key];
  return val && !placeholders.some((p) => val.includes(p));
});

if (configured) {
  console.log('✓ EmailJS env ready — contact form will send from the site.');
} else {
  console.warn(
    '\n⚠️  EmailJS not configured for this build.\n' +
      '   • Local: copy .env.example → .env and add your keys, then rebuild.\n' +
      '   • Deploy: set VITE_EMAILJS_* in Vercel/Netlify (or build locally with .env, then upload dist/).\n' +
      '   • Fallback: the form opens the visitor’s email app (mailto).\n'
  );
}
