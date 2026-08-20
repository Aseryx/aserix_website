import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../hooks/useScrollReveal.jsx';
import PageLayout from '../components/layout/PageLayout.jsx';
import ParticlesBackground from '../components/common/ParticlesBackground.jsx';
import RiskBand from '../components/common/RiskBand.jsx';
import { DATASETS } from '../data/datasets.js';
import { usePageMeta } from '../hooks/usePageMeta.jsx';
import { PAGE_META } from '../config/pageMeta.js';
import { TALLY } from '../config/tally.js';

const DatasetsPage = () => {
  usePageMeta({ ...PAGE_META['/datasets'], path: '/datasets' });

  return (
    <PageLayout>
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-24 grid-bg">
        <div className="absolute inset-0 z-0 overflow-hidden bg-[var(--bg-primary)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,77,0.08),transparent_50%)]" />
          <ParticlesBackground />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-mono mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
            </span>
            VERIFIED DATASETS
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[clamp(3rem,5vw,4.5rem)] leading-[0.9] tracking-tight mb-8 max-w-3xl">
            <span className="block">Verified Datasets,</span>
            <span className="block italic text-brand-orange">Ready for AI.</span>
          </h1>

          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8 max-w-xl">
            Browse datasets that have passed Aseryx&apos;s two-layer cryptographic appraisal. Provenance proven. Quality scored. No raw data ever transmitted.
          </p>
        </div>
      </section>

      <RiskBand
        items={[
          'Every dataset verified before listing. Quality proven, not claimed.',
          'Zero custody. Data stays with the institution.',
        ]}
      />

      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
            <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Available Datasets</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
              Verified datasets.{' '}
              <span className="italic text-[var(--text-secondary)]">Proven quality.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {DATASETS.map((dataset, i) => (
              <ScrollReveal key={dataset.slug} delay={i * 100}>
                <Link
                  to={`/dataset/${dataset.slug}`}
                  className="group block bg-[#EDEBE8] dark:bg-[#111111] card-oasis overflow-hidden border border-[var(--border-color)] hover:border-brand-orange/30 transition-colors"
                >
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="font-mono text-xs text-brand-orange uppercase tracking-widest">{dataset.category}</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--text-secondary)]" />
                      {dataset.verified && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAF5E5] dark:bg-[#1A2E1C]">
                          <BadgeCheck className="w-3 h-3 text-[#2E7D32] dark:text-[#4CAF50]" />
                          <span className="text-[10px] font-mono font-bold text-[#2E7D32] dark:text-[#4CAF50] tracking-widest uppercase">Verified</span>
                        </span>
                      )}
                      {dataset.tags.map((tag) => (
                        <span key={tag} className="text-[var(--text-secondary)] text-[10px] font-mono border border-[var(--border-color)] px-2 py-0.5 tracking-wider uppercase">{tag}</span>
                      ))}
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-4 text-[var(--text-primary)] group-hover:text-brand-orange transition-colors duration-300 max-w-4xl">
                      {dataset.title}
                    </h3>

                    <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                      {dataset.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 md:gap-10 mb-6">
                      <div>
                        <div className="font-display text-xl text-[var(--text-primary)]">{dataset.stats.segments}</div>
                        <div className="text-[10px] font-mono text-[#A3A3A3] dark:text-gray-500 tracking-widest uppercase">Segments</div>
                      </div>
                      <span className="w-px h-8 bg-[var(--border-color)]" />
                      <div>
                        <div className="font-display text-xl text-[var(--text-primary)]">{dataset.stats.span}</div>
                        <div className="text-[10px] font-mono text-[#A3A3A3] dark:text-gray-500 tracking-widest uppercase">Collection Span</div>
                      </div>
                      <span className="w-px h-8 bg-[var(--border-color)]" />
                      <div>
                        <div className="font-display text-xl text-[var(--text-primary)]">{dataset.stats.synthetic}</div>
                        <div className="text-[10px] font-mono text-[#A3A3A3] dark:text-gray-500 tracking-widest uppercase">Synthetic</div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-2 text-brand-orange text-sm font-medium group-hover:gap-3 transition-all">
                      View dataset
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="mt-12 text-center">
              <p className="text-[var(--text-secondary)] text-sm mb-4">More datasets are being verified and will appear here.</p>
              <a
                href={TALLY.appraisal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-orange hover:text-[var(--text-primary)] transition-colors text-sm font-medium"
              >
                Submit your dataset for appraisal
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-[var(--bg-primary)] dark:bg-[#050505] border-t border-[var(--border-color)] grid-bg">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.9] tracking-tight mb-8">
              Better data.<br />
              <span className="italic text-brand-orange">Better models.</span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-12 text-lg max-w-xl mx-auto">
              Access verified institutional data no other model has trained on.
            </p>
            <a
              href={TALLY.buyerAccess}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-black font-medium hover:bg-white transition-colors text-sm uppercase tracking-wide"
            >
              Request Access to Datasets
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default DatasetsPage;