const RINGS = [
  { r: 118, opacity: 0.12, stroke: '#ffffff' },
  { r: 98, opacity: 0.18, stroke: '#ffffff' },
  { r: 78, opacity: 0.28, stroke: '#ffffff' },
  { r: 58, opacity: 0.4, stroke: '#6ee7b7' },
];

const ScoreDial = ({ score, label, certificateId }) => (
  <div className="relative flex items-center justify-center w-full max-w-[320px] md:max-w-[380px] aspect-square mx-auto lg:mx-0 lg:ml-auto">
    <svg viewBox="0 0 260 260" className="w-full h-full" aria-hidden="true">
      {RINGS.map(({ r, opacity, stroke }) => (
        <circle
          key={r}
          cx="130"
          cy="130"
          r={r}
          fill="none"
          stroke={stroke}
          strokeOpacity={opacity}
          strokeWidth="1"
        />
      ))}
      <line x1="130" y1="130" x2="248" y2="130" stroke="#FF7A4D" strokeWidth="1.5" strokeOpacity="0.9" />
      <circle cx="130" cy="130" r="3" fill="#FF7A4D" />
    </svg>

    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      <p className="font-instrument text-7xl md:text-8xl font-semibold tracking-tighter text-white leading-none">
        {score}
      </p>
      <p className="font-instrument-mono text-[10px] uppercase tracking-[0.22em] text-white/45 mt-4">
        {label}
      </p>
      <p className="font-instrument-mono text-[10px] uppercase tracking-[0.18em] text-white/30 mt-2">
        {certificateId}
      </p>
    </div>
  </div>
);

export default ScoreDial;
