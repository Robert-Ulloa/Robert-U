import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../hooks/effects';

/** Counts up from 0 to `value` the first time it scrolls into view. */
export default function CountUp({ value, prefix = '', suffix = '', duration = 1400 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(prefersReducedMotion() ? value : 0);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setDisplay(value);
      return undefined;
    }
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        setDisplay(Math.round(value * (1 - (1 - t) ** 3)));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      <span aria-hidden="true">{prefix}{display}{suffix}</span>
    </span>
  );
}
