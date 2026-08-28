import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import InstrumentLayout from '../components/instrument/InstrumentLayout.jsx';
import ScoreDial from '../components/instrument/ScoreDial.jsx';
import MetricsBar from '../components/instrument/MetricsBar.jsx';
import EgressPanel from '../components/instrument/EgressPanel.jsx';
import { usePageMeta } from '../hooks/usePageMeta.jsx';
import { PAGE_META } from '../config/pageMeta.js';
import { TALLY } from '../config/tally.js';
import { INSTRUMENT } from '../content/instrumentCopy.js';
import { FEATURED_CASE_STUDY } from '../data/appraisalCaseStudies.js';

const LandingPage = () => {
  usePageMeta({ ...PAGE_META['/'], path: '/' });

  const study = FEATURED_CASE_STUDY;
  const { hero, egress } = INSTRUMENT;

  return (
    <InstrumentLayout>
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="font-instrument-mono text-[10px] uppercase tracking-[0.22em] text-brand-orange mb-8">
              {hero.badge}
            </p>

            <h1 className="font-instrument text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-medium leading-[1.05] tracking-tight text-white mb-6 max-w-xl">
              {hero.title}
            </h1>

            <p className="text-base md:text-lg text-white/45 leading-relaxed mb-10 max-w-lg">
              {hero.subhead}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={TALLY.appraisal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-orange text-black font-instrument-mono text-[11px] uppercase tracking-[0.16em] hover:bg-white transition-colors"
              >
                {hero.primaryCta}
              </a>
              <Link
                to={hero.secondaryHref}
                className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 text-white font-instrument-mono text-[11px] uppercase tracking-[0.16em] hover:border-white/40 transition-colors"
              >
                {hero.secondaryCta}
              </Link>
            </div>
          </div>

          <ScoreDial
            score={study.overallScore}
            label={hero.scoreLabel}
            certificateId={study.certificateId}
          />
        </div>
      </section>

      <MetricsBar dimensions={study.richnessDimensions} />

      <EgressPanel title={egress.title} body={egress.body} items={egress.items} />

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="border border-white/10 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-instrument-mono text-[10px] uppercase tracking-[0.2em] text-brand-orange mb-3">
              Appraisal case study
            </p>
            <h2 className="font-instrument text-2xl md:text-3xl font-medium tracking-tight text-white mb-3">
              {study.shortTitle}
            </h2>
            <p className="text-white/45 max-w-xl leading-relaxed">{study.heroDescription}</p>
          </div>
          <Link
            to={`/case-study/${study.slug}`}
            className="inline-flex items-center gap-2 font-instrument-mono text-[11px] uppercase tracking-[0.16em] text-brand-orange hover:text-white transition-colors shrink-0"
          >
            Full readout
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </InstrumentLayout>
  );
};

export default LandingPage;
