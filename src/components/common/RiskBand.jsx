const RiskBand = ({ items }) => (
  <section className="py-5 px-4 md:px-8 border-y border-[var(--border-color)] bg-[#F3F1EE] dark:bg-[#0f0f0f]">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center sm:text-left">
        {items.map((text, index) => (
          <div key={text} className="contents">
            {index > 0 && <span className="hidden sm:block w-px h-4 bg-[#D1D5DB] dark:bg-gray-700" />}
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
              <span className="text-xs font-mono text-[var(--text-secondary)] tracking-wide">{text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RiskBand;