import { useState, useEffect } from 'react';

export function RotatingHeroTitle({ prefix, rotate, className = '' }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (rotate.length <= 1) return undefined;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotate.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [rotate.length]);

  return (
    <span className={className}>
      {prefix}{' '}
      <span className="text-rotate-wrapper inline-block align-baseline">
        {rotate.map((text, i) => (
          <span
            key={text}
            className={`text-rotate-item text-brand-orange italic ${i === index ? 'active' : ''}`}
          >
            {text}
          </span>
        ))}
      </span>
    </span>
  );
}
