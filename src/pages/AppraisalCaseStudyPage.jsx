import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Check, ChevronRight, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../hooks/useScrollReveal.jsx';
import PageLayout from '../components/layout/PageLayout.jsx';
import { AppraisalCertificate } from '../components/common/AppraisalCertificate.jsx';
import { getCaseStudyBySlug } from '../data/appraisalCaseStudies.js';
import { usePageMeta } from '../hooks/usePageMeta.jsx';
import { metaForCaseStudy } from '../config/pageMeta.js';
import { TALLY, CONTACT } from '../config/tally.js';

const AppraisalCaseStudyPage = () => {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  const meta = study ? metaForCaseStudy(study) : null;
  usePageMeta({
    title: meta?.title,
    description: meta?.description,
    path: study ? `/case-study/${study.slug}` : undefined,
  });

  if (!study) {
    return <Navigate to="/" replace />;
  }

  const stats = Object.entries(study.statLabels).map(([key, label]) => ({
    val: study.stats[key],
    label,
  }));

  return (
    <PageLayout>
      <div className="pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 border-b border-[var(--border-color)]">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)]">
              <li>
                <Link to="/" className="hover:text-[var(--text-primary)] transition-colors">
                  Home
                </Link>
              </li>
              <li><ChevronRight className="w-3 h-3" /></li>
              <li className="text-[var(--text-primary)]">{study.breadcrumbLabel}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20">
              <span className="text-[10px] font-mono font-bold text-brand-orange tracking-widest uppercase">Appraisal Case Study</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5E5] dark:bg-[#1A2E1C] border border-[#2E7D32]/20 dark:border-[#4CAF50]/20">
              <BadgeCheck className="w-3.5 h-3.5 text-[#2E7D32] dark:text-[#4CAF50]" />
              <span className="text-[10px] font-mono font-bold text-[#2E7D32] dark:text-[#4CAF50] tracking-widest uppercase">Score {study.overallScore}/100</span>
            </span>
            {study.heroTags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-[10px] font-mono text-[var(--text-secondary)] border border-[var(--border-color)] rounded-full tracking-wider uppercase">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 max-w-4xl">
            {study.heroTitleLines[0]}<br />
            <span className="italic text-[var(--text-secondary)]">{study.heroTitleLines[1]}</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-12 max-w-2xl">
            {study.heroDescription}
          </p>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border-color)] border border-[var(--border-color)] overflow-hidden md:card-oasis">
              {stats.map(({ val, label }) => (
                <div key={label} className="bg-white dark:bg-[#0f0f0f] p-5 md:p-6">
                  <div className="font-display text-2xl md:text-3xl text-[var(--text-primary)] tracking-tight mb-1">{val}</div>
                  <div className="text-[10px] font-mono text-[#A3A3A3] dark:text-gray-500 tracking-widest uppercase">{label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
            <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Appraisal Output</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
              Verified on-prem.{' '}
              <span className="italic text-[var(--text-secondary)]">Proof, not promises.</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
              This dataset was appraised with Aseryx on-prem. Two-layer verified score. Raw data never left the holder&apos;s environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <div className="bg-[#EDEBE8] dark:bg-[#111111] card-oasis p-6 md:p-8 border border-transparent">
                  <p className="font-mono text-xs text-brand-orange mb-4 uppercase tracking-wider">01 / Layer 1</p>
                  <h3 className="font-display text-xl mb-3 text-[var(--text-primary)]">Provenance and Readiness</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{study.layer1Summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.readinessTags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-[10px] font-mono bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="bg-[#EDEBE8] dark:bg-[#111111] card-oasis-alt p-6 md:p-8 border border-brand-orange/10">
                  <p className="font-mono text-xs text-brand-orange mb-4 uppercase tracking-wider">02 / Layer 2</p>
                  <h3 className="font-display text-xl mb-3 text-[var(--text-primary)]">Information Richness</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{study.layer2Summary}</p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={150}>
              <AppraisalCertificate
                title={study.certificateTitle}
                certificateId={study.certificateId}
                subtitle={study.certificateFooter}
                overallScore={study.overallScore}
                scores={study.scores}
                footer={study.certificateFooter}
                showActions={false}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
            <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Provenance</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
              Eight years of professional{' '}
              <span className="italic text-[var(--text-secondary)]">localization workflows.</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
              {study.provenanceDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
            {study.qaSteps.map(({ n, label, note }, i) => (
              <ScrollReveal key={n} delay={i * 100}>
                <div className="group h-full bg-[#EDEBE8] dark:bg-[#111111] card-oasis border border-[var(--border-color)] hover:border-brand-orange/20 transition-colors p-5 md:p-6">
                  <span className="font-mono text-4xl leading-none text-gray-200 dark:text-gray-800 group-hover:text-brand-orange/20 transition-colors select-none">{n}</span>
                  <h3 className="font-display text-base md:text-lg text-[var(--text-primary)] mt-4 mb-2">{label}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <div className="section-divider pt-8 md:pt-12 mb-8">
                <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Domain Coverage</p>
                <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-tight">
                  {study.domains.length} domains{' '}
                  <span className="italic text-[var(--text-secondary)]">scored.</span>
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {study.domains.map((domain, i) => (
                  <ScrollReveal key={domain} delay={i * 40}>
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#0f0f0f] border border-[var(--border-color)] rounded-lg text-sm text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                      {domain}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div>
              <div className="section-divider pt-8 md:pt-12 mb-8">
                <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">What Appraisal Validated</p>
                <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-tight">
                  Verified{' '}
                  <span className="italic text-[var(--text-secondary)]">before commitment.</span>
                </h2>
              </div>
              <ScrollReveal delay={100}>
                <div className="bg-[#EDEBE8] dark:bg-[#111111] card-oasis p-6 md:p-8 border border-[var(--border-color)]">
                  <ul className="space-y-4">
                    {study.validated.map((item) => (
                      <li key={item} className="flex gap-3 items-start text-sm text-[var(--text-primary)]">
                        <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-divider pt-8 md:pt-12 mb-12 md:mb-16">
            <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Appraisal Insights</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
              What the score{' '}
              <span className="italic text-[var(--text-secondary)]">tells a counterparty.</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
              Insights from the verified appraisal, not self-reported metadata.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {study.insights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="h-full bg-[#EDEBE8] dark:bg-[#111111] card-oasis p-6 md:p-8 border border-[var(--border-color)]">
                  <h3 className="font-display text-lg md:text-xl text-[var(--text-primary)] mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="section-divider pt-8 md:pt-12 mb-8">
                <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Illustrative Applications</p>
                <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-tight">
                  Why this score{' '}
                  <span className="italic text-[var(--text-secondary)]">might matter.</span>
                </h2>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-md">
                Examples of what verified richness enables for a counterparty. Not a license offer. Access is holder-approved after proof.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ScrollReveal delay={100}>
                <ul className="space-y-3">
                  {study.applications.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 p-4 bg-white dark:bg-[#0f0f0f] border border-[var(--border-color)] text-sm text-[var(--text-primary)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 grid-bg">
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-[#EDEBE8] dark:bg-[#111111] card-oasis p-8 md:p-10 border border-[var(--border-color)]">
                <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Data holders</p>
                <h3 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-4">
                  Appraise your dataset on-prem
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                  Have proprietary data that cannot leave your environment? Run the same appraisal workflow and receive a verified score.
                </p>
                <a
                  href={TALLY.appraisal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-brand-orange text-black font-medium text-sm uppercase tracking-wide hover:bg-white transition-colors"
                >
                  Request an Appraisal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="bg-white dark:bg-[#0f0f0f] card-oasis p-8 md:p-10 border border-brand-orange/20">
                <p className="font-mono text-brand-orange text-xs tracking-widest uppercase mb-4">Counterparties</p>
                <h3 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-4">
                  Interested in this appraisal?
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                  {study.contactNote}
                </p>
                <a
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`Appraisal inquiry: ${study.shortTitle}`)}`}
                  className="group inline-flex items-center gap-3 px-6 py-3 border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-sm uppercase tracking-wide hover:bg-[#F3F4F6] dark:hover:bg-[#1A1A1A] transition-colors"
                >
                  Contact us
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default AppraisalCaseStudyPage;
