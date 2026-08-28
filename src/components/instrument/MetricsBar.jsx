const MetricsBar = ({ dimensions }) => (
  <section className="border-y border-white/10" aria-label="Richness dimensions">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {dimensions.map((dim, index) => (
        <div
          key={dim.label}
          className={`px-6 md:px-8 py-8 md:py-10 ${
            index < dimensions.length - 1 ? 'xl:border-r border-white/10' : ''
          } ${index % 2 === 0 ? 'sm:border-r border-white/10 xl:border-r' : ''} ${
            index < dimensions.length - 2 ? 'sm:border-b xl:border-b-0 border-white/10' : ''
          }`}
        >
          <p className="font-instrument-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">
            {dim.label}
          </p>
          <p className="font-instrument text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            {dim.score}
          </p>
          <div className="h-px w-full bg-white/10 mb-3 overflow-hidden">
            <div
              className="h-full bg-emerald-400/70 transition-all duration-700"
              style={{ width: `${dim.score}%` }}
            />
          </div>
          <p className="text-sm text-white/40 leading-relaxed max-w-xs">{dim.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MetricsBar;
