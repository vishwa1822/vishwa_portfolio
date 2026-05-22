import { CV_FILE, CV_MAIL } from '../data/config';

export function downloadCV(e) {
  if (location.protocol === 'file:') return true;
  if (location.protocol !== 'http:' && location.protocol !== 'https:') return true;
  e.preventDefault();
  fetch(CV_FILE, { method: 'HEAD' })
    .then((res) => {
      if (res.ok) {
        const a = document.createElement('a');
        a.href = CV_FILE;
        a.download = CV_FILE;
        a.click();
      } else {
        window.location.href = CV_MAIL;
      }
    })
    .catch(() => {
      window.location.href = CV_MAIL;
    });
  return false;
}
