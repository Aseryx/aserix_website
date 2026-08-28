const EgressPanel = ({ title, body, items }) => (
  <section className="border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20">
      <div>
        <h2 className="font-instrument text-3xl md:text-4xl font-medium tracking-tight text-white mb-6 max-w-md">
          {title}
        </h2>
        <p className="text-base md:text-lg text-white/45 leading-relaxed max-w-lg">{body}</p>
      </div>

      <div className="font-instrument-mono text-sm md:text-base space-y-4 lg:pt-2">
        {items.map((item) => (
          <div key={item.key} className="flex items-baseline gap-3">
            <span className="text-white/35 shrink-0">{item.key}</span>
            <span className="flex-1 border-b border-dotted border-white/15 min-w-[2rem] translate-y-[-3px]" aria-hidden="true" />
            <span className={item.highlight ? 'text-brand-orange shrink-0' : 'text-white/70 shrink-0'}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EgressPanel;
