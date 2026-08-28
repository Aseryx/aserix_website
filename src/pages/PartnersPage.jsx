import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, TrendingUp, Shield, Activity, Factory } from 'lucide-react';
import { ScrollReveal } from '../hooks/useScrollReveal.jsx';
import PageLayout from '../components/layout/PageLayout.jsx';
import ParticlesBackground from '../components/common/ParticlesBackground.jsx';
import { GeometricToroid, GeometricLattice } from '../components/common/GeometricIllustrations.jsx';
import { RotatingHeroTitle } from '../components/common/RotatingHeroTitle.jsx';
import { usePageMeta } from '../hooks/usePageMeta.jsx';
import { PAGE_META } from '../config/pageMeta.js';
import { TALLY } from '../config/tally.js';
import { PARTNERS } from '../content/siteCopy.js';

const BUILT_FOR_ICONS = [TrendingUp, Shield, Activity, Factory];

const PartnersPage = () => {
  usePageMeta({ ...PAGE_META['/partners'], path: '/partners' });

  return (
    <PageLayout>
      <section className="relative min-h-screen flex items-center pt-32 pb-24 grid-bg">
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#F9F8F6] dark:bg-[#0a0a0a]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,77,0.08),transparent_50%)]" />
          <ParticlesBackground />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-mono mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
                </span>
                {PARTNERS.badge}
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[clamp(3.5rem,6vw,5rem)] leading-[0.9] tracking-tight mb-8">
                <RotatingHeroTitle prefix={PARTNERS.hero.titlePrefix} rotate={PARTNERS.hero.titleRotate} />
              </h1>

              <p className="text-[#6B7280] dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">{PARTNERS.hero.subhead}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={TALLY.appraisal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-brand-orange text-black font-medium text-sm uppercase tracking-wide hover:bg-white transition-colors flex items-center justify-center gap-3"
                >
                  Request an Appraisal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/case-study/en-my-corpus"
                  className="group px-8 py-4 bg-transparent border border-[#E5E5E5] dark:border-[#333] text-[#1A1A1A] dark:text-white font-medium text-sm uppercase tracking-wide hover:bg-[#F3F4F6] dark:hover:bg-[#1A1A1A] transition-colors flex items-center justify-center gap-3"
                >
                  View case study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-brand-orange/20 blur-3xl opacity-20 rounded-full" />
              <div className="relative border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f] p-8">
                <div className="space-y-8">
                  <div>
                    <p className="font-mono text-[10px] text-[#6B7280] dark:text-gray-400 uppercase tracking-widest mb-2">Richness Score</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl text-[#1A1A1A] dark:text-white font-display">0–100</span>
                      <span className="text-sm text-[#6B7280] dark:text-gray-400">verified quality score</span>
                    </div>
                    <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 mt-4 overflow-hidden">
                      <div className="w-[87%] h-full bg-brand-orange" />
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-[#6B7280] dark:text-gray-400 uppercase tracking-widest mb-2">Custody</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl text-[#1A1A1A] dark:text-white font-display">Zero</span>
                      <span className="text-sm text-[#6B7280] dark:text-gray-400">custody transfer</span>
                    </div>
                    <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 mt-4 overflow-hidden">
                      <div className="w-full h-full bg-brand-orange animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-[#6B7280] dark:text-gray-400 uppercase tracking-widest mb-2">Control</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl text-[#1A1A1A] dark:text-white font-display">100%</span>
                      <span className="text-sm text-[#6B7280] dark:text-gray-400">approval authority</span>
                    </div>
                    <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 mt-4 overflow-hidden">
                      <div className="w-full h-full bg-brand-orange" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SHIFT */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-[var(--bg-primary)] grid-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 mb-16 section-divider pt-8">
            <div className="lg:col-span-4">
              <p className="font-mono text-brand-orange text-xs tracking-widest uppercase">{PARTNERS.shift.label}</p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-display text-4xl md:text-6xl leading-[0.9] tracking-tight">
                {PARTNERS.shift.title}
                <br />
                <span className="block italic text-[var(--text-secondary)]">{PARTNERS.shift.titleAccent}</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="h-full flex flex-col bg-[#EDEBE8] dark:bg-[#111111] card-oasis overflow-hidden border border-[var(--border-color)]">
                <div className="flex items-center justify-center py-12 md:py-16">
                  <GeometricLattice className="w-40 h-40 md:w-56 md:h-56 text-[var(--text-secondary)]" />
                </div>
                <div className="p-8 md:p-10 flex-1 border-t border-[var(--border-color)]">
                  <p className="font-mono text-xs text-[var(--text-secondary)] mb-6 uppercase tracking-wider">{PARTNERS.oldWay.label}</p>
                  <h3 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-6">{PARTNERS.oldWay.title}</h3>
                  <ul className="space-y-4 text-[var(--text-secondary)] text-sm md:text-base">
                    {PARTNERS.oldWay.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="text-red-500 mt-0.5">×</span> {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="h-full flex flex-col bg-[#EDEBE8] dark:bg-[#111111] card-oasis-alt overflow-hidden border border-brand-orange/20">
                <div className="flex items-center justify-center py-12 md:py-16">
                  <GeometricToroid className="w-40 h-40 md:w-56 md:h-56 text-brand-orange" />
                </div>
                <div className="p-8 md:p-10 flex-1 border-t border-brand-orange/20">
                  <p className="font-mono text-xs text-brand-orange mb-6 uppercase tracking-wider">{PARTNERS.newWay.label}</p>
                  <h3 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-6">{PARTNERS.newWay.title}</h3>
                  <ul className="space-y-4 text-[var(--text-secondary)] text-sm md:text-base">
                    {PARTNERS.newWay.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 items-start">
                        <Check className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BUILT FOR */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-[var(--bg-primary)] grid-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl mb-16 text-[var(--text-primary)]">Built For</h2>

          <div className="flex flex-col">
            {PARTNERS.builtFor.map((row, index) => {
              const Icon = BUILT_FOR_ICONS[index];
              const isLast = index === PARTNERS.builtFor.length - 1;
              return (
                <ScrollReveal
                  key={row.tag}
                  className={`border-t border-[var(--border-color)] py-12${isLast ? ' border-b' : ''}`}
                  delay={(index + 1) * 100}
                >
                  <div className="grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-4 flex items-center gap-4">
                      <div className="p-3 rounded-md bg-gray-100 dark:bg-gray-900/50 text-[var(--text-secondary)]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-sm text-[var(--text-secondary)] uppercase tracking-widest">{row.tag}</span>
                    </div>
                    <div className="md:col-span-8">
                      <h3 className="font-display text-3xl text-[var(--text-primary)] mb-4">{row.title}</h3>
                      <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl">{row.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-4 md:px-8 bg-[var(--bg-primary)] border-t border-[var(--border-color)] grid-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl leading-[0.9] tracking-tight mb-8">
            {PARTNERS.cta.title}
            <br />
            <span className="italic text-brand-orange">{PARTNERS.cta.titleAccent}</span>
          </h2>
          <p className="text-[var(--text-secondary)] mb-12 text-lg">{PARTNERS.cta.subhead}</p>
          <a
            href={TALLY.appraisal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-black font-medium hover:bg-white transition-colors text-sm uppercase tracking-wide"
          >
            Request an Appraisal
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default PartnersPage;
