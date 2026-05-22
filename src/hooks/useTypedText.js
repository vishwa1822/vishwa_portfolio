import { useEffect, useState } from 'react';
import { TYPED_ROLES } from '../data/config';

export function useTypedText() {
  const [text, setText] = useState('');

  useEffect(() => {
    let ri = 0;
    let ci = 0;
    let del = false;
    let timeoutId;

    function type() {
      const w = TYPED_ROLES[ri];
      if (!del) {
        ci += 1;
        setText(w.slice(0, ci));
        if (ci === w.length) {
          del = true;
          timeoutId = setTimeout(type, 2000);
          return;
        }
      } else {
        ci -= 1;
        setText(w.slice(0, ci));
        if (ci === 0) {
          del = false;
          ri = (ri + 1) % TYPED_ROLES.length;
        }
      }
      timeoutId = setTimeout(type, del ? 42 : 88);
    }

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  return text;
}
