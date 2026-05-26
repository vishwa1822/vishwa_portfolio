import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

const PLACEHOLDERS = ['your_service_id', 'your_template_id', 'your_public_key'];

function isRealValue(value) {
  return Boolean(value && !PLACEHOLDERS.some((p) => value.includes(p)));
}

export function isEmailJsConfigured() {
  return isRealValue(SERVICE_ID) && isRealValue(TEMPLATE_ID) && isRealValue(PUBLIC_KEY);
}

export async function sendContactEmail({ name, email, message }) {
  if (!isEmailJsConfigured()) {
    throw new Error('EmailJS is not configured for this build.');
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      user_name: name,
      user_email: email,
      message,
    },
    { publicKey: PUBLIC_KEY }
  );
}
